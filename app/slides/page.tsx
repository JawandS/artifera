"use client"

import { useState, useEffect, useCallback } from "react"

// ── Primitives ────────────────────────────────────────────────────────────────

function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center px-20 py-14 relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

function SlideLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase text-amber mb-3">
      {children}
    </p>
  )
}

function SlideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-5xl text-ink leading-tight">
      {children}
    </h2>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-border p-6 ${className}`}>
      {children}
    </div>
  )
}

// ── Slide 1: Title ────────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-surface relative overflow-hidden">
      {/* Amber top stripe */}
      <div className="h-1.5 bg-amber shrink-0" />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-20 py-14">
        <div className="w-full max-w-5xl grid grid-cols-5 gap-14 items-center">

        {/* Left panel */}
        <div className="col-span-3 space-y-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-amber mb-6">
              ECM × WMGIC Challenge 2026 · Track 1
            </p>
            <h1 className="font-display font-bold text-[5.5rem] leading-[1.02] tracking-tight text-ink">
              Great teaching<br />
              shouldn&apos;t stay<br />
              <span className="relative inline-block">
                in one place.
                <span className="absolute -bottom-1 left-0 right-0 h-[4px] bg-amber rounded-full" />
              </span>
            </h1>
          </div>
          <p className="text-xl text-ink-soft leading-relaxed">
            Artifera is a teacher-verified library of AI-powered learning experiences — connecting the educators who build them with the classrooms that need them most.
          </p>
          <p className="text-sm font-bold uppercase tracking-widest text-amber">
            Build · Share · Earn
          </p>
        </div>

        {/* Right panel — decorative card */}
        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-3">Sample Artifact</p>
          <div className="bg-white rounded-2xl shadow-lg border border-border p-6 relative">
            <div className="absolute -top-3 -right-3 bg-amber text-ink text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ✓ Top Rated
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-forest-pale text-forest text-xs font-semibold px-2.5 py-1 rounded-full">Study Skills</span>
              <span className="bg-surface-alt text-muted text-xs px-2.5 py-1 rounded-full">Undergraduate</span>
            </div>
            <h3 className="font-display text-xl font-bold text-ink mb-1">How to Study</h3>
            <p className="text-xs text-muted-light mb-3">Bloomsbury Publishing</p>
            <p className="text-sm text-muted mb-4">Curated NotebookLM with guided prompts for active recall, note-taking strategies, and exam prep.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">⭐ 4.9 · 43 uses</span>
              <span className="bg-forest text-white text-xs font-semibold px-4 py-2 rounded-full">
                Use in Class →
              </span>
            </div>
          </div>
        </div>

        </div>{/* end grid */}
      </div>
    </div>
  )
}

// ── Slide 2: Problem ──────────────────────────────────────────────────────────

function ProblemSlide() {
  const problems = [
    {
      num: "01",
      title: "No Discovery Layer",
      body: "No trusted, curated place to find classroom-tested AI materials. Great resources die in single classrooms.",
    },
    {
      num: "02",
      title: "No Incentive to Share",
      body: "Skilled educators have no mechanism or motivation to publish what they've built. Expertise stays locked up.",
    },
    {
      num: "03",
      title: "The Equity Gap",
      body: "AI-enhanced education disproportionately benefits well-resourced schools. Under-resourced classrooms are left behind.",
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-10">
        <div>
          <SlideLabel>The Problem</SlideLabel>
          <SlideHeading>
            Teachers are the greatest lever<br />in learning outcomes — yet…
          </SlideHeading>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {problems.map((p) => (
            <Card key={p.num} className="space-y-4">
              <span className="font-display text-4xl font-bold text-amber/60">{p.num}</span>
              <h3 className="font-semibold text-lg text-ink">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </Card>
          ))}
        </div>
        <p className="text-muted text-sm">
          High-quality AI learning experiences exist in pockets — they never escape individual classrooms to reach the students who need them most.
        </p>
      </div>
    </Shell>
  )
}

// ── Slide 3: Solution ─────────────────────────────────────────────────────────

function SolutionSlide() {
  const types = [
    { icon: "📓", label: "NotebookLM notebook with curated sources and guided prompts" },
    { icon: "📋", label: "Lesson plan with activity, rubric, and worked examples" },
    { icon: "🛠️", label: "Vibe-coded interactive tool hosted externally" },
    { icon: "🔗", label: "Curated link with verified classroom results" },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-9">
        <div>
          <SlideLabel>The Solution</SlideLabel>
          <SlideHeading>
            <span className="text-forest">Artifera</span>
          </SlideHeading>
          <p className="text-xl text-ink-soft mt-3 max-w-2xl leading-relaxed">
            A <span className="text-ink font-semibold">teacher-verified library</span> of self-contained AI learning experiences — backed by a reward system that incentivizes both creation and adoption.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">
            An artifact can be…
          </p>
          <div className="grid grid-cols-2 gap-4">
            {types.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-forest-pale rounded-xl px-5 py-4 border border-forest/10"
              >
                <span className="text-2xl shrink-0">{t.icon}</span>
                <span className="text-sm text-ink-soft leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          {["Teacher-created", "Classroom-verified", "Ready to deploy"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className="text-forest font-bold">✓</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 4: How It Works ─────────────────────────────────────────────────────

function HowItWorksSlide() {
  const upload = [
    "Verify your teacher account via school district + 2FA",
    "Upload an artifact with subject, grade, and description",
    "Earn performance rewards from engagement, usage, and reviews",
  ]
  const use = [
    "Browse and filter by subject, grade, tool type, or rating",
    "Use the artifact in class",
    "Submit proof of usage — photo, 2–3 sentences, and a rating",
    "Every verified submission enters a randomized classroom grant drawing",
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>How It Works</SlideLabel>
          <SlideHeading>Two sides, one flywheel</SlideHeading>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { dir: "↑", role: "For creators", steps: upload },
            { dir: "↓", role: "For adopters", steps: use },
          ].map(({ dir, role, steps }) => (
            <Card key={role} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {dir}
                </div>
                <h3 className="font-semibold text-ink text-lg">{role}</h3>
              </div>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-amber/15 text-amber-dark text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 5: Reward System ────────────────────────────────────────────────────

function RewardSlide() {
  const rows = [
    { path: "Top-performing artifact", reward: "Performance grant", who: "Teacher + school/district", highlight: false },
    { path: "Hackathon winner", reward: "Sponsor prize", who: "Teacher", highlight: false },
    { path: "Random usage selection", reward: "Classroom grant", who: "School/district", highlight: true },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>The Reward System</SlideLabel>
          <SlideHeading>Three ways to earn</SlideHeading>
        </div>
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 bg-surface-alt text-xs font-bold uppercase tracking-widest text-muted">
            <span>Path</span>
            <span>Reward</span>
            <span>Who benefits</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-5 items-center border-t border-border ${
                row.highlight ? "bg-amber/8" : ""
              }`}
            >
              <span className={`text-sm font-medium ${row.highlight ? "text-ink" : "text-ink-soft"}`}>
                {row.path}
              </span>
              <span className={`text-sm font-semibold ${row.highlight ? "text-amber-dark" : "text-muted"}`}>
                {row.reward}
              </span>
              <span className="text-sm text-muted">{row.who}</span>
            </div>
          ))}
        </div>
        <div className="bg-amber/8 rounded-xl border border-amber/20 p-5 space-y-2">
          <p className="text-sm font-semibold text-amber-dark">Why randomized?</p>
          <p className="text-sm text-ink-soft leading-relaxed max-w-2xl">
            Popularity-only rewards advantage already well-resourced schools. The random draw gives any verified teacher anywhere in the world a real shot at funding — regardless of follower count or institutional prestige.
          </p>
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 6: Demo ─────────────────────────────────────────────────────────────

function DemoSlide() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-10 space-y-5 bg-surface">
      <div className="shrink-0">
        <SlideLabel>Live Demo</SlideLabel>
        <SlideHeading>The Artifact Library</SlideHeading>
      </div>
      <div className="flex-1 min-h-0 rounded-2xl overflow-hidden border-2 border-forest/15 shadow-lg">
        <iframe src="/demo" className="w-full h-full" title="Artifera Demo" />
      </div>
    </div>
  )
}

// ── Slide 7: Hackathon + Funding ──────────────────────────────────────────────

function HackathonSlide() {
  const parties = [
    { icon: "🎓", label: "Teachers", desc: "Prize money and recognition for building real classroom tools" },
    { icon: "🏢", label: "Sponsors", desc: "Qualified educators engaging deeply with their AI products and building real use cases" },
    { icon: "📚", label: "Platform", desc: "A high-quality content pipeline feeding directly into the library" },
  ]
  const funding = [
    { source: "Education nonprofits", mechanism: "Grants → classroom draw pool" },
    { source: "AI company sponsors", mechanism: "Hackathon sponsorship fees" },
    { source: "Training data licensing", mechanism: "Negotiated access to artifact usage data" },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>Business Model</SlideLabel>
          <SlideHeading>The Hackathon Layer</SlideHeading>
          <p className="text-muted mt-2 text-base max-w-2xl leading-relaxed">
            Sponsored hackathons where teachers and developers compete to build artifacts around specific challenges — solving cold-start supply while generating revenue.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8 items-start">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {parties.map((p) => (
              <Card key={p.label} className="space-y-3">
                <div className="text-2xl">{p.icon}</div>
                <p className="font-semibold text-ink text-sm">{p.label}</p>
                <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
          <div className="col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Funding sources</p>
            {funding.map((f) => (
              <div
                key={f.source}
                className="bg-forest-pale rounded-xl border border-forest/10 px-4 py-3.5"
              >
                <p className="text-sm font-semibold text-forest">{f.source}</p>
                <p className="text-xs text-muted mt-0.5">{f.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 8: Roadmap + Why We Win ────────────────────────────────────────────

function RoadmapSlide() {
  const phases = [
    {
      label: "Phase 1",
      name: "Pilot",
      items: ["Partner with W&M faculty to seed the library", "Run first internal hackathon", "Validate the reward model"],
    },
    {
      label: "Phase 2",
      name: "Expand",
      items: ["Bring in AI company sponsors", "Run first public hackathon", "Boosted draws to drive early adoption"],
    },
    {
      label: "Phase 3",
      name: "Scale",
      items: ["Open to K–12 and international", "Developing-country partnerships", "AI-powered recommendations"],
    },
  ]
  const criteria = [
    { label: "Impact", body: "Addresses equity gaps in AI education at global scale" },
    { label: "Feasibility", body: "Proven model; pilot starts at W&M with low capital" },
    { label: "Creativity", body: "Randomized grant draw + hackathon-as-pipeline are both novel" },
    { label: "Insight", body: "Grounded in real teacher constraints: time, incentives, access" },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>Execution</SlideLabel>
          <SlideHeading>Roadmap & why we win</SlideHeading>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {phases.map((phase) => (
              <Card key={phase.name} className="space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber">{phase.label}</span>
                  <p className="font-display font-bold text-ink text-xl mt-0.5">{phase.name}</p>
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-xs text-muted flex gap-2">
                      <span className="text-forest shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Judging criteria</p>
            {criteria.map((c) => (
              <div
                key={c.label}
                className="bg-forest-pale rounded-xl border border-forest/10 px-4 py-3"
              >
                <p className="text-sm font-bold text-forest">{c.label}</p>
                <p className="text-xs text-muted mt-0.5 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  )
}

// ── Slideshow shell ───────────────────────────────────────────────────────────

const SLIDES = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  HowItWorksSlide,
  RewardSlide,
  DemoSlide,
  HackathonSlide,
  RoadmapSlide,
]

const TITLES = ["Title", "Problem", "Solution", "How It Works", "Reward System", "Demo", "Hackathon Layer", "Roadmap"]

export default function SlidesPage() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  const prev = useCallback(() => setCurrent(s => Math.max(0, s - 1)), [])
  const next = useCallback(() => setCurrent(s => Math.min(total - 1, s + 1)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) { e.preventDefault(); next() }
      if (["ArrowLeft", "ArrowUp"].includes(e.key))         { e.preventDefault(); prev() }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [prev, next])

  const Slide = SLIDES[current]

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-surface"
      style={{ fontFamily: "var(--font-dm-sans)" }}
    >
      {/* Amber top stripe — matches landing page */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber z-10" />

      {/* Slide */}
      <div key={current} className="w-full h-full" style={{ animation: "fadeIn 0.2s ease" }}>
        <Slide />
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 px-10 py-4 flex items-center justify-between border-t border-border bg-surface/90 backdrop-blur-sm z-10">
        {/* Slide title */}
        <span className="text-xs text-muted font-medium tracking-wide w-32">
          {TITLES[current]}
        </span>

        {/* Dot nav */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? "1.5rem" : "0.375rem",
                height: "0.375rem",
                backgroundColor: i === current ? "var(--amber)" : "var(--border)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter + arrows */}
        <div className="flex items-center gap-3 w-32 justify-end">
          <span className="text-xs text-muted tabular-nums">{current + 1} / {total}</span>
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-sm transition-colors hover:border-forest hover:text-forest disabled:opacity-30 disabled:cursor-not-allowed text-ink-soft"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-7 h-7 rounded-full bg-forest text-white flex items-center justify-center text-sm transition-colors hover:bg-forest-mid disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
