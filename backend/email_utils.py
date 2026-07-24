import os
import logging
import httpx

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"


async def send_email(recipient_email: str, subject: str, html_content: str, reply_to: str | None = None):
    email_key = os.environ["EMERGENT_EMAIL_KEY"]
    from_name = os.environ["EMAIL_FROM_NAME"]

    payload = {
        "to": [recipient_email],
        "subject": subject,
        "html": html_content,
        "from_name": from_name,
    }
    if reply_to:
        payload["contact_email"] = reply_to

    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": email_key},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        return None
