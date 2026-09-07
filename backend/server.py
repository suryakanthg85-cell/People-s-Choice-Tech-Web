from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import asyncio
import smtplib
import ssl
import uuid
from email.message import EmailMessage
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ---------- SMTP configuration ----------
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")

FROM_NAME = os.environ.get("FROM_NAME", "People's Choice Tech")
EMAIL_FROM = os.environ.get("EMAIL_FROM") or (
    f"{FROM_NAME} <{SMTP_USER}>" if SMTP_USER else FROM_NAME
)

NOTIFY_EMAILS = [
    e.strip()
    for e in os.environ.get(
        "NOTIFY_EMAILS",
        os.environ.get("ADMIN_EMAIL", "hello@peopleschoice.tech"),
    ).split(",")
    if e.strip()
]

EMAIL_ENABLED = bool(SMTP_USER and SMTP_PASS)

app = FastAPI(title="People's Choice Tech API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)

logger = logging.getLogger(__name__)


# ---------- Models ----------
def _utcnow_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    type: str
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


# ---------- Email ----------
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
                f'<tr>'
                f'<td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;'
                f'color:#475569;font-weight:600;width:140px">{label}</td>'
                f'<td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;'
                f'color:#0f172a">{val}</td>'
                f'</tr>'
            )

    return f"""
<!doctype html>
<html>
<body style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px">
<table style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;
overflow:hidden;border:1px solid #e2e8f0">

<tr>
<td style="background:#0f172a;color:#fff;padding:22px 26px">
<h2 style="margin:0;font-size:20px">
New {sub.type.title()} Lead — People's Choice Tech
</h2>
<p style="margin:6px 0 0;color:#cbd5e1;font-size:13px">
Received {sub.created_at}
</p>
</td>
</tr>

<tr>
<td style="padding:18px 14px">
<table style="width:100%;border-collapse:collapse;font-size:14px">
{''.join(rows)}
</table>

<div style="margin-top:18px;padding:14px;background:#f8fafc;
border-radius:10px;border:1px solid #e2e8f0">

<div style="font-weight:700;color:#0f172a;margin-bottom:6px">
Message
</div>

<div style="white-space:pre-wrap;color:#334155;line-height:1.55">
{sub.message}
</div>

</div>
</td>
</tr>

</table>
</body>
</html>
"""


async def _send_notification(sub: ContactSubmission) -> bool:
    if not EMAIL_ENABLED or not NOTIFY_EMAILS:
        logger.error("SMTP is not configured or no notification recipients exist")
        return False

    def _send_sync():
        msg = EmailMessage()

        msg["Subject"] = (
            f"[{sub.type.upper()}] "
            f"{sub.name} — "
            f"{sub.subject or sub.service or 'New inquiry'}"
        )

        msg["From"] = EMAIL_FROM
        msg["To"] = ", ".join(NOTIFY_EMAILS)

        # Replies go directly to the person who submitted the form
        msg["Reply-To"] = str(sub.email)

        msg.set_content(
            f"New {sub.type} submission from "
            f"{sub.name} <{sub.email}>\n\n"
            f"Phone: {sub.phone or '-'}\n"
            f"Company: {sub.company or '-'}\n"
            f"Service: {sub.service or '-'}\n"
            f"Budget: {sub.budget or '-'}\n"
            f"Subject: {sub.subject or '-'}\n\n"
            f"Message:\n{sub.message}\n\n"
            f"Submitted at: {sub.created_at}"
        )

        msg.add_alternative(
            _build_email_html(sub),
            subtype="html",
        )

        context = ssl.create_default_context()

        with smtplib.SMTP(
            SMTP_HOST,
            SMTP_PORT,
            timeout=20,
        ) as server:

            server.ehlo()
            server.starttls(context=context)
            server.ehlo()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)

    try:
        await asyncio.to_thread(_send_sync)

        logger.info(
            "Email sent successfully to %s for submission %s",
            NOTIFY_EMAILS,
            sub.id,
        )

        return True

    except Exception as e:
        logger.exception("Email notification failed: %s", e)
        return False


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {
        "message": "People's Choice Tech API",
        "status": "online",
    }


@api_router.get("/health")
async def health():
    return {
        "status": "healthy",
        "email_enabled": EMAIL_ENABLED,
        "recipients": len(NOTIFY_EMAILS),
    }


@api_router.post(
    "/submissions",
    response_model=ContactSubmission,
)
async def create_submission(payload: ContactCreate):

    sub = ContactSubmission(
        **payload.model_dump()
    )

    # Send email before returning success.
    # This is important for Vercel serverless execution.
    email_sent = await _send_notification(sub)

    if not email_sent:
        raise HTTPException(
            status_code=500,
            detail="Unable to send your message. Please try again later.",
        )

    return sub


@api_router.post("/newsletter")
async def newsletter_signup(
    payload: NewsletterSignup,
):

    newsletter = ContactSubmission(
        type="newsletter",
        name="Newsletter Subscriber",
        email=payload.email,
        message=f"New newsletter subscription: {payload.email}",
        subject="Newsletter Subscription",
    )

    email_sent = await _send_notification(newsletter)

    if not email_sent:
        raise HTTPException(
            status_code=500,
            detail="Unable to subscribe at this time. Please try again later.",
        )

    return {
        "status": "subscribed",
        "email": payload.email,
    }


app.include_router(api_router)


# ---------- CORS ----------
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get(
        "CORS_ORIGINS",
        "*",
    ).split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)