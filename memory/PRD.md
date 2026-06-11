# People's Choice Tech — Product Requirements (PRD)

## Original Problem Statement
Build a modern, enterprise-grade IT services & software development company website
for **People's Choice Tech** — a fast-growing technology company founded by Gopal Giri
& Divya Bharti (10+ yrs each). 80–120 pages targeted; inspired by Accenture, Infosys,
TCS, Cognizant, Capgemini.

## User Preferences (verbatim)
- Light theme — white background with **animated gradient blobs** (light blue, green,
  purple, orange).
- Dark/light toggle NOT required.
- Email integration via Gmail/Resend for form submissions.
- Real contact info: hello@peopleschoice.tech · +91 8275439584 · Hinjewadi, Pune HQ.
- Offices in Nashik, Ahmednagar, Bengaluru, NYC, London, Singapore.

## Architecture
- **Frontend**: React 19 + Tailwind + shadcn/ui + framer-motion + react-fast-marquee
- **Backend**: FastAPI + MongoDB + Resend (Email — gated by RESEND_API_KEY)
- **Routing**: React Router v6 with mega-menu navbar and SPA pages
- **Animations**: framer-motion (hero AI orb, gradient blobs, micro-interactions)

## Implemented (2026-02-11)
### Pages
- `/` — Home (hero + AI visual + services + industries + process + case studies + founders + FAQ + CTA)
- `/about` — Story, mission/vision, founders, values, offices
- `/services` + `/services/:slug` — 10 service categories with detail pages
- `/industries` + `/industries/:slug` — 17 industries with detail pages
- `/technologies` — 7 tech stack categories
- `/products` — 6 productized accelerators
- `/staffing` — 6 staffing models + KPIs
- `/case-studies` — 6 detailed case studies with impact metrics
- `/resources` — Blog/insights listing
- `/careers` — Open roles + benefits + application CTAs
- `/contact` — Multi-mode form (contact, consultation, proposal, careers)
- `/*` — 404 NotFound

### Backend
- `POST /api/submissions` — multi-type lead form (contact/consultation/proposal/careers)
- `GET /api/submissions` — list (admin)
- `POST /api/newsletter` — newsletter signup
- `GET /api/health` — health/email status

### UI Highlights
- Custom animated AI Core hero visual (orbiting tech cards + pulse rings)
- Animated pastel gradient blobs (orange/purple/sky/emerald/fuchsia) across pages
- Glass-morphic floating cards (uptime, latency, GenAI badges)
- Sticky glass navbar with mega-menu + orange brand accent
- Mobile menu: card grid layout, pastel tones, active-scale
- Dark footer with off-white text, ambient glows, branded logo card
- Cabinet Grotesk display + General Sans body fonts (Fontshare)

## Pending / P1 backlog
- Populate full content for remaining ~60 service/industry/blog detail pages
- Hook up Resend API key (set RESEND_API_KEY in backend/.env) — already integrated, just needs key
- Add admin dashboard to view submissions
- Add SEO meta tags + schema markup per page
- Connect a blog CMS (markdown or headless) — currently scaffolded
- Founder portraits — using stock photos; can be replaced with real headshots

## Credentials / Keys needed for production
- `RESEND_API_KEY` (backend) — for email notifications on form submit
- `SENDER_EMAIL` (backend) — verified Resend sender, e.g. `notifications@peopleschoice.tech`
- `NOTIFY_EMAILS` (backend) — comma-separated list of recipients (defaults set)
