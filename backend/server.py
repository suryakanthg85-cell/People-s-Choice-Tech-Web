from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional, List
from datetime import datetime, timezone

import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config (optional - falls back to DB-only storage if missing)
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAILS = [e.strip() for e in os.environ.get(
    'NOTIFY_EMAILS', 'hello@peopleschoice.tech,gopal@peopleschoice.tech,divya@peopleschoice.tech'
).split(',') if e.strip()]

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="People's Choice Tech API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------- Models ----------
def _utcnow_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    type: str  # contact | consultation | proposal | careers
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    subject: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    message: str
    role: Optional[str] = None  # for careers
    resume_url: Optional[str] = None  # for careers
    created_at: str = Field(default_factory=_utcnow_iso)


class ContactCreate(BaseModel):
    type: str = "contact"
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    subject: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    message: str
    role: Optional[str] = None
    resume_url: Optional[str] = None


class NewsletterSignup(BaseModel):
    email: EmailStr


# ---------- Helpers ----------
def _build_email_html(sub: ContactSubmission) -> str:
    rows = []
    for label, val in [
        ("Type", sub.type),
        ("Name", sub.name),
        ("Email", sub.email),
        ("Phone", sub.phone),
        ("Company", sub.company),
        ("Subject", sub.subject),
        ("Service", sub.service),
        ("Budget", sub.budget),
        ("Role", sub.role),
        ("Resume URL", sub.resume_url),
    ]:
        if val:
            rows.append(
                f'<tr><td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;width:140px">{label}</td>'
                f'<td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;color:#0f172a">{val}</td></tr>'
            )
    return f"""
<!doctype html><html><body style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px">
<table style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0">
<tr><td style="background:#0f172a;color:#fff;padding:22px 26px">
<h2 style="margin:0;font-size:20px">New {sub.type.title()} Lead — People's Choice Tech</h2>
<p style="margin:6px 0 0;color:#cbd5e1;font-size:13px">Received {sub.created_at}</p></td></tr>
<tr><td style="padding:18px 14px"><table style="width:100%;border-collapse:collapse;font-size:14px">{''.join(rows)}</table>
<div style="margin-top:18px;padding:14px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0">
<div style="font-weight:700;color:#0f172a;margin-bottom:6px">Message</div>
<div style="white-space:pre-wrap;color:#334155;line-height:1.55">{sub.message}</div></div>
</td></tr></table></body></html>"""


async def _send_notification(sub: ContactSubmission) -> bool:
    if not RESEND_API_KEY or not NOTIFY_EMAILS:
        return False
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": NOTIFY_EMAILS,
            "subject": f"[{sub.type.upper()}] {sub.name} — {sub.subject or sub.service or 'Inquiry'}",
            "html": _build_email_html(sub),
            "reply_to": sub.email,
        }
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logger.error(f"Email notification failed: {e}")
        return False


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "People's Choice Tech API", "status": "online"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "email_enabled": bool(RESEND_API_KEY)}


@api_router.post("/submissions", response_model=ContactSubmission)
async def create_submission(payload: ContactCreate):
    sub = ContactSubmission(**payload.model_dump())
    await db.submissions.insert_one(sub.model_dump())
    asyncio.create_task(_send_notification(sub))
    return sub


@api_router.get("/submissions", response_model=List[ContactSubmission])
async def list_submissions(type: Optional[str] = None, limit: int = 100):
    query = {"type": type} if type else {}
    docs = await db.submissions.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return docs


@api_router.post("/newsletter")
async def newsletter_signup(payload: NewsletterSignup):
    doc = {
        "id": str(uuid.uuid4()),
        "email": payload.email,
        "created_at": _utcnow_iso(),
    }
    await db.newsletter.update_one({"email": payload.email}, {"$set": doc}, upsert=True)
    return {"status": "subscribed", "email": payload.email}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
