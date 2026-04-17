# Artifera — Landing Page Context Brief

## Project Overview

**Product Name:** Artifera (formerly referred to as "ArtifactHub" in proposal docs)
**Tagline:** A Global Marketplace for AI-Powered Learning
**Subtitle:** Connecting the teachers who build great learning experiences with the classrooms that need them most.

This landing page supplements a hackathon pitch presentation. It should feel polished, modern, and credible — something you'd show to judges and potential sponsors immediately after or alongside the slide deck.

---

## The Competition Context

- **Event:** ECM × WMGIC International Challenge 2026
- **Theme:** Society and Human Well-Being
- **Track:** Track 1 — AI's Future in Higher Education
- **Organizers:** ECM (University of Mainz) + WMGIC (Global Innovation Challenge), facilitated by Meedup
- **Format:** 2.5-day hackathon, final pitch is 6–8 slides
- **Judging Criteria:** Impact · Feasibility · Creativity · Insight

---

## The Problem

Teachers are the single greatest lever in student learning outcomes — yet they are time-starved, under-resourced, and isolated. High-quality AI-powered learning experiences exist in pockets, but they never escape individual classrooms to reach the students who need them most.

Three compounding failures:
1. **No Discovery Layer** — No trusted, curated place exists to find classroom-tested AI materials.
2. **No Incentive to Share** — Skilled educators have no mechanism or motivation to publish what they've built.
3. **Equity Gap** — AI-enhanced education disproportionately benefits well-resourced schools, leaving developing-country classrooms behind.

---

## The Solution

Artifera is a **teacher-verified marketplace** for self-contained AI-powered learning experiences — called **artifacts** — backed by a reward system that incentivizes both creation and adoption.

### What is an Artifact?
Any ready-to-use, self-contained learning experience a teacher can deploy directly in the classroom:
- A NotebookLM notebook with curated sources and guided prompts
- A lesson plan with activity, rubric, and worked examples
- A vibe-coded interactive tool hosted externally
- A curated link to a third-party solution with verified classroom results

---

## How It Works

### For Teachers Uploading
1. Create a verified teacher account (school district registration + 2FA)
2. Upload an artifact with subject, grade level, and description
3. Earn performance rewards based on engagement, verified usage, and reviews

### For Teachers Using
1. Browse and filter by subject, grade, tool type, or rating
2. Use the artifact in class
3. Submit proof of usage: one photo of artifact in use (no student faces), 2–3 sentences on usage, and a rating
4. Every verified submission enters the teacher into a **randomized classroom grant drawing**

---

## Reward System

| Path | Reward Type | Who Benefits |
|---|---|---|
| Top-performing artifact | Performance grant | Teacher + school/district |
| Hackathon winner | Sponsor prize | Teacher |
| Random usage selection | Classroom grant | School/district |

**Key design insight:** The randomized draw is intentional. Popularity-only rewards advantage already well-resourced schools. The random draw gives any verified teacher anywhere in the world a real shot at funding — regardless of follower count or institutional prestige.

---

## The Hackathon Layer

Artifera hosts sponsored hackathons where teachers and developers compete to build artifacts around a specific challenge or tool. This serves three parties:

- **Teachers** — prize money and recognition
- **Sponsors** (e.g. Google, Anthropic, OpenAI) — qualified educators engaging deeply with their tools and building real use cases
- **The platform** — a high-quality content pipeline that feeds directly into the marketplace

Hackathon artifacts become permanent marketplace entries. Sponsors can negotiate access to training data from the artifacts produced in their event.

---

## Funding Model

| Source | Mechanism |
|---|---|
| Education nonprofits | Grants that fund the classroom draw pool |
| AI company sponsors | Hackathon sponsorship fees |
| Training data licensing | Negotiated access to artifact usage data (paid opt-out available) |

---

## Trust & Safety

- Verified school district registration + 2FA for all teacher accounts
- Proof of usage is self-reported but deterred by district-level bans for abuse
- Sponsor-independent review panels for hackathon judging
- Student privacy protected: only product-in-use photos, never student images

---

## Go-to-Market Roadmap

**Phase 1 — Pilot**
Partner with willing faculty (starting with William & Mary) to seed the platform with quality artifacts. Run one small internal hackathon to validate the model.

**Phase 2 — Expand**
Bring in one or two AI company sponsors for a public hackathon. Use boosted grant drawings to drive adoption before the artifact library reaches critical mass.

**Phase 3 — Scale**
Open to K–12 teachers and international institutions, prioritizing partnerships in developing countries where the classroom grant model has the highest impact.

---

## Future Vision

- AI-powered artifact recommendations based on teacher context and student outcomes
- In-platform artifact building tools (no external hosting required)
- Outcome tracking to move from engagement metrics toward measurable learning improvement
- Localization and translation support for non-English artifact libraries

---

## Design Direction

The existing slide deck (built in Gamma) uses a **dark navy/deep teal aesthetic** with:
- Dark background: near-black navy (`#0a0f1e` range)
- Accent color: bright cyan/teal (`#00e5cc` range)
- Secondary accent: white text on dark cards
- Clean sans-serif typography, bold headlines
- Icon-forward layout with cards/panels
- Professional but modern — not academic, not corporate

The landing page should feel like a **startup product page**, not a school project. Think: clean sections, clear hierarchy, strong hero, feature cards, a roadmap section, and a trust/safety section. It should be convincing to both educators and potential AI company sponsors.

---

## Key Messaging Hierarchy

1. **Hero:** The tagline + one-line problem statement
2. **Problem:** Three pain points (no discovery, no incentive, equity gap)
3. **Solution:** What Artifera is + what an artifact is
4. **How It Works:** Three steps (Create, Browse, Verify) + reward table
5. **Hackathon Layer:** How it feeds the marketplace + sponsor value prop
6. **Roadmap:** Three phases
7. **Why It Wins:** Impact / Feasibility / Creativity / Insight (the judging criteria)
8. **CTA:** "Join the Pilot" or similar

---

## Tone

- Confident and mission-driven, not academic
- Speaks to two audiences simultaneously: **educators** (empathy, recognition) and **sponsors/funders** (ROI, reach, data)
- Avoid jargon; keep sentences short and punchy
- The equity angle is central — lean into it

---

## Tech Notes for the Agent

- Build as a single-file React component (`.jsx`) using Tailwind CSS utility classes only
- No external image dependencies — use SVG icons inline or from `lucide-react`
- Dark theme to match the slide deck aesthetic
- Responsive layout (mobile + desktop)
- Smooth scroll navigation preferred
- Sections: Hero, Problem, Solution, How It Works, Hackathon, Roadmap, Why It Wins, CTA/Footer