# Sujal Gupta — Premium Portfolio Website

## Original Problem Statement
Cinematic, dark, motion-driven personal portfolio for Sujal Gupta (Data Analyst / BI / AI enthusiast) to secure internships/full-time analytics roles. 15 sections: Loader, Navbar, Hero, About, Education, Experience, Skills, Featured Projects (7), Certifications, Achievements, Analytics Workflow, Why Hire Me, GitHub, Contact, Footer. Stack: React (CRA/JS, adapted from Vite+TS per environment constraints) + Tailwind + Framer Motion + GSAP-ready + Lenis + Three.js (hero particles) + FastAPI + MongoDB.

## User Choices (gathered via ask_human)
- Email: Emergent-managed Resend integration → sujalgupta0008@gmail.com
- GitHub: github.com/sujalgupta0008 (confirmed)
- Live Demo links: point to the same GitHub repos (no separate hosted demos)
- Domain: default Emergent deployment URL
- No portrait photo / resume PDF were actually uploaded despite user confirming — stock portrait used, resume PDF generated server-side via reportlab from PRD content

## Architecture
- Backend: FastAPI, MongoDB (motor), PyObjectId/BaseDocument pattern (models.py), routes: /api/health, /api/contact, /api/github/profile (cached 600s), /api/resume/download
- Email: email_utils.py using Emergent-managed Resend proxy
- Frontend: single-page app, section-scroll navigation, content centralized in src/data/content.js, Lenis smooth scroll, Framer Motion throughout, Three.js/@react-three/fiber particles in hero only, custom cursor, noise overlay

## What's Implemented (2026-07-24)
- All 15 sections built and functional per PRD
- Loader, glass navbar with hide/show + active link, hero with rotating roles/stat counters/parallax/particles
- Education + Experience animated timelines, Skills wall, 6 real project case studies + 1 GitHub CTA slide
- Certifications + Achievements (placeholder content, flagged to user), 10-step horizontal Analytics Workflow, Why Hire Me
- Live GitHub stats via backend proxy + ghchart contribution graph
- Contact form → MongoDB + Resend email to owner
- Resume PDF generation script (reportlab)
- Testing agent: 7/7 backend pytest, 61/61 frontend Playwright checks passed, no functional bugs
- Visual edit: hero portrait image swapped per user request

## Known Placeholders (need real user data)
- Certifications list (6 items) — generic/inferred, not verified real certs
- Achievements section — inferred from PRD stats
- Hero portrait — stock photo (real photo was never actually received)
- Resume PDF — generated from PRD content, not the real uploaded resume

## Backlog / Next Steps
- P0: Get real portrait photo + real resume PDF from user to replace placeholders
- P1: Confirm/replace certifications and achievements with real data
- P2: SEO polish (sitemap, robots.txt, structured data), Lighthouse pass, accessibility audit
- P2: Custom domain if user decides later
