import os
import ssl
import uuid
import smtplib
import asyncio
import logging

from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path
from typing import Optional, List

from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from starlette.middleware.cors import CORSMiddleware

# ----------------------------------------------------
# Load Environment Variables
# ----------------------------------------------------

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("PeopleChoiceTech")

# ----------------------------------------------------
# MongoDB
# ----------------------------------------------------

MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME", "peopleschoice")

db = None
client = None

if MONGO_URL:
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    logger.info("MongoDB Connected")
else:
    logger.warning("MongoDB NOT configured")

# ----------------------------------------------------
# Gmail SMTP
# ----------------------------------------------------

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")

FROM_NAME = os.getenv("FROM_NAME", "People's Choice Tech")

EMAIL_FROM = os.getenv(
    "EMAIL_FROM",
    f"{FROM_NAME} <{SMTP_USER}>"
)

NOTIFY_EMAILS = [
    x.strip()
    for x in os.getenv(
        "NOTIFY_EMAILS",
        "hello@peopleschoice.tech"
    ).split(",")
    if x.strip()
]

EMAIL_ENABLED = bool(SMTP_USER and SMTP_PASS)

# ----------------------------------------------------
# FastAPI
# ----------------------------------------------------

app = FastAPI(title="People's Choice Tech API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = APIRouter(prefix="/api")

# ----------------------------------------------------
# Models
# ----------------------------------------------------


def utc_now():
    return datetime.now(timezone.utc).isoformat()


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


class ContactSubmission(ContactCreate):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=utc_now)


class NewsletterSignup(BaseModel):
    email: EmailStr


# ----------------------------------------------------
# Email
# ----------------------------------------------------


def build_html(contact: ContactSubmission):

    return f"""
    <html>
    <body style="font-family:Arial">

    <h2>New Contact Form Submission</h2>

    <table cellpadding="8">

    <tr><td><b>Name</b></td><td>{contact.name}</td></tr>

    <tr><td><b>Email</b></td><td>{contact.email}</td></tr>

    <tr><td><b>Phone</b></td><td>{contact.phone or ""}</td></tr>

    <tr><td><b>Company</b></td><td>{contact.company or ""}</td></tr>

    <tr><td><b>Service</b></td><td>{contact.service or ""}</td></tr>

    <tr><td><b>Budget</b></td><td>{contact.budget or ""}</td></tr>

    <tr><td><b>Message</b></td><td>{contact.message}</td></tr>

    </table>

    </body>
    </html>
    """


async def send_email(contact: ContactSubmission):

    if not EMAIL_ENABLED:
        logger.warning("Email disabled")
        return

    def send():

        msg = EmailMessage()

        msg["Subject"] = f"New Lead - {contact.name}"

        msg["From"] = EMAIL_FROM

        msg["To"] = ",".join(NOTIFY_EMAILS)

        msg["Reply-To"] = contact.email

        msg.set_content(contact.message)

        msg.add_alternative(
            build_html(contact),
            subtype="html",
        )

        context = ssl.create_default_context()

        with smtplib.SMTP(
            SMTP_HOST,
            SMTP_PORT,
            timeout=20,
        ) as server:

            server.starttls(context=context)

            server.login(
                SMTP_USER,
                SMTP_PASS,
            )

            server.send_message(msg)

    try:

        await asyncio.to_thread(send)

        logger.info("Email Sent")

    except Exception as e:

        logger.exception(e)

# ----------------------------------------------------
# Routes
# ----------------------------------------------------


@api.get("/")
async def root():

    return {
        "message": "People's Choice Tech API",
        "status": "online",
    }


@api.get("/health")
async def health():

    return {
        "status": "healthy",
        "mongodb": db is not None,
        "email": EMAIL_ENABLED,
    }


@api.post("/submissions")
async def create_submission(contact: ContactCreate):

    submission = ContactSubmission(**contact.model_dump())

    if db:

        await db.submissions.insert_one(
            submission.model_dump()
        )

    asyncio.create_task(
        send_email(submission)
    )

    return submission


@api.get("/submissions")
async def list_submissions(limit: int = 100):

    if db is None:
        raise HTTPException(
            status_code=500,
            detail="MongoDB not configured",
        )

    return await db.submissions.find(
        {},
        {"_id": 0},
    ).sort(
        "created_at",
        -1,
    ).to_list(limit)


@api.post("/newsletter")
async def newsletter(data: NewsletterSignup):

    if db:

        await db.newsletter.update_one(
            {"email": data.email},
            {
                "$set": {
                    "email": data.email,
                    "created_at": utc_now(),
                }
            },
            upsert=True,
        )

    return {
        "status": "subscribed",
        "email": data.email,
    }


app.include_router(api)

# ----------------------------------------------------
# Shutdown
# ----------------------------------------------------

@app.on_event("shutdown")
async def shutdown():

    if client:
        client.close()