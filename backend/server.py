from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import time
import logging
import httpx
from pathlib import Path

from models import ContactSubmission, ContactCreate
from email_utils import send_email

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

GITHUB_USERNAME = os.environ.get('GITHUB_USERNAME', 'sujalgupta0008')
OWNER_EMAIL = os.environ.get('OWNER_EMAIL')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

_github_cache = {"data": None, "ts": 0}
GITHUB_CACHE_TTL = 600


@api_router.get("/")
async def root():
    return {"message": "Sujal Gupta Portfolio API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/contact")
async def create_contact(payload: ContactCreate):
    submission = ContactSubmission(**payload.model_dump())
    await db.contact_submissions.insert_one(submission.to_mongo())

    if OWNER_EMAIL:
        html = f"""
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="font-family:Arial,sans-serif;padding:24px;background:#0a0a0a;color:#ffffff;">
            <h2 style="color:#38BDF8;margin:0 0 16px;">New Portfolio Contact</h2>
            <p><strong>Name:</strong> {submission.name}</p>
            <p><strong>Email:</strong> {submission.email}</p>
            <p><strong>Subject:</strong> {submission.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;">{submission.message}</p>
          </td></tr>
        </table>
        """
        await send_email(
            recipient_email=OWNER_EMAIL,
            subject=f"Portfolio Contact: {submission.subject}",
            html_content=html,
            reply_to=submission.email,
        )

    return {"status": "success", "message": "Thanks — your message has been sent."}


@api_router.get("/github/profile")
async def github_profile():
    now = time.time()
    if _github_cache["data"] and now - _github_cache["ts"] < GITHUB_CACHE_TTL:
        return _github_cache["data"]

    try:
        async with httpx.AsyncClient(timeout=15) as http_client:
            profile_resp = await http_client.get(f"https://api.github.com/users/{GITHUB_USERNAME}")
            repos_resp = await http_client.get(
                f"https://api.github.com/users/{GITHUB_USERNAME}/repos",
                params={"sort": "updated", "per_page": 100},
            )
        if profile_resp.status_code != 200:
            raise HTTPException(status_code=502, detail="GitHub profile unavailable")

        profile = profile_resp.json()
        repos = repos_resp.json() if repos_resp.status_code == 200 else []

        languages = {}
        for r in repos:
            lang = r.get("language")
            if lang:
                languages[lang] = languages.get(lang, 0) + 1

        top_repos = sorted(repos, key=lambda r: (r.get("stargazers_count", 0), r.get("updated_at", "")), reverse=True)[:6]

        data = {
            "username": GITHUB_USERNAME,
            "name": profile.get("name"),
            "avatar_url": profile.get("avatar_url"),
            "bio": profile.get("bio"),
            "followers": profile.get("followers", 0),
            "following": profile.get("following", 0),
            "public_repos": profile.get("public_repos", 0),
            "html_url": profile.get("html_url"),
            "languages": languages,
            "top_repos": [
                {
                    "name": r.get("name"),
                    "description": r.get("description"),
                    "html_url": r.get("html_url"),
                    "stars": r.get("stargazers_count", 0),
                    "forks": r.get("forks_count", 0),
                    "language": r.get("language"),
                }
                for r in top_repos
            ],
        }
        _github_cache["data"] = data
        _github_cache["ts"] = now
        return data
    except httpx.HTTPError:
        raise HTTPException(status_code=502, detail="GitHub API unreachable")


@api_router.get("/resume/download")
async def download_resume():
    resume_path = ROOT_DIR / "assets" / "Sujal_Gupta_Resume.pdf"
    if not resume_path.exists():
        raise HTTPException(status_code=404, detail="Resume not found")
    return FileResponse(resume_path, media_type="application/pdf", filename="Sujal_Gupta_Resume.pdf")


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
