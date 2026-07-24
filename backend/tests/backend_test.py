"""
Backend API tests for Sujal Gupta portfolio.
Covers: /api/health, /api/contact, /api/github/profile, /api/resume/download.
"""
import os
import io
import time
import pytest
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(BACKEND_ROOT / ".env")

BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/") if os.environ.get("REACT_APP_BACKEND_URL") else None
if not BASE_URL:
    # fall back to frontend env
    fe_env = Path("/app/frontend/.env")
    if fe_env.exists():
        for line in fe_env.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().strip('"').rstrip("/")
                break

assert BASE_URL, "REACT_APP_BACKEND_URL not configured"
API = f"{BASE_URL}/api"

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def mongo_db():
    client = MongoClient(MONGO_URL, serverSelectionTimeoutMS=5000)
    db = client[DB_NAME]
    yield db
    client.close()


# --- Health --------------------------------------------------------------
class TestHealth:
    def test_health(self, api_client):
        r = api_client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        assert r.json() == {"status": "ok"}

    def test_root(self, api_client):
        r = api_client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# --- Contact form --------------------------------------------------------
class TestContact:
    def test_contact_submit_success(self, api_client, mongo_db):
        payload = {
            "name": "TEST_Playwright Runner",
            "email": "test.playwright@example.com",
            "subject": "TEST_Automated backend test",
            "message": "Automated end-to-end backend test message.",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body.get("status") == "success"
        assert "message" in body

        # Verify persistence in MongoDB
        time.sleep(0.5)
        doc = mongo_db.contact_submissions.find_one({"email": payload["email"], "subject": payload["subject"]})
        assert doc is not None, "Contact submission not found in MongoDB"
        assert doc["name"] == payload["name"]
        assert doc["message"] == payload["message"]
        assert "created_at" in doc

        # cleanup
        mongo_db.contact_submissions.delete_many({"email": payload["email"]})

    def test_contact_missing_field_422(self, api_client):
        r = api_client.post(f"{API}/contact", json={"name": "x", "email": "a@b.com"}, timeout=15)
        assert r.status_code in (400, 422), r.text


# --- GitHub proxy --------------------------------------------------------
class TestGithub:
    def test_github_profile(self, api_client):
        r = api_client.get(f"{API}/github/profile", timeout=30)
        # 502 acceptable if rate-limited; log but don't fail hard
        if r.status_code == 502:
            pytest.skip("GitHub rate limited (502) - acceptable per spec")
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["username"] == "sujalgupta0008"
        for key in ("public_repos", "followers", "following", "languages", "top_repos", "html_url"):
            assert key in data, f"Missing key {key}"
        assert isinstance(data["languages"], dict)
        assert isinstance(data["top_repos"], list)
        assert len(data["top_repos"]) <= 6

    def test_github_profile_cache(self, api_client):
        r1 = api_client.get(f"{API}/github/profile", timeout=30)
        if r1.status_code != 200:
            pytest.skip("GitHub proxy unavailable")
        t0 = time.time()
        r2 = api_client.get(f"{API}/github/profile", timeout=30)
        elapsed = time.time() - t0
        assert r2.status_code == 200
        assert r2.json() == r1.json()
        assert elapsed < 2.0, "Cached response should be fast"


# --- Resume download -----------------------------------------------------
class TestResume:
    def test_resume_download(self, api_client):
        r = api_client.get(f"{API}/resume/download", timeout=30)
        assert r.status_code == 200, r.text
        ct = r.headers.get("content-type", "")
        assert "application/pdf" in ct, f"unexpected content-type: {ct}"
        # PDF magic number
        assert r.content[:4] == b"%PDF", "Response does not look like a PDF"
        assert len(r.content) > 500, "PDF suspiciously small"
