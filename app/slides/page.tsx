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

// ── Slide 1: Team ─────────────────────────────────────────────────────────────

function TeamSlide() {
  const members = [
    {
      name: "Jawand Singh",
      role: "B.S. Computer Science & Economics",
      school: "William & Mary",
      img: "/Jawand-Headshot.png",
    },
    { name: "Björn Dreier", role: "MSc Management", school: "JGU Mainz", img: "/Bjorn-Headshot.jpeg" },
    { name: "Joshua Ladel", role: "MSc Management", school: "JGU Mainz", img: "/Josh-Headshot.jpeg" },
  ]

  return (
    <div className="w-full h-full flex bg-surface pb-14">
      {/* LEFT — Masthead */}
      <div className="flex flex-col items-center px-16 pt-14 pb-6" style={{ width: "46%" }}>
        {/* Event label */}
        <div className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-amber animate-fade-up">
          <span className="w-10 h-px bg-amber" />
          <span>ECM × WMGIC · Track 01</span>
          <span className="w-10 h-px bg-amber" />
        </div>

        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="font-display font-bold text-[6.75rem] leading-[0.88] tracking-[-0.035em] text-ink animate-fade-up delay-1">
            Artifera
          </h1>
          <p className="mt-6 font-display italic text-[1.65rem] text-ink-soft leading-[1.2] animate-fade-up delay-2">
            A global library for<br />AI-powered learning.
          </p>
        </div>
      </div>

      {/* Gradient spine */}
      <div
        className="w-px shrink-0 animate-grow-y delay-1"
        style={{
          background:
            "linear-gradient(to bottom, var(--border) 0%, var(--amber) 32%, var(--amber) 68%, var(--border) 100%)",
        }}
      />

      {/* RIGHT — Team */}
      <div className="flex-1 flex flex-col px-16 pt-14 pb-6">
        <div className="flex-1 flex flex-col justify-center">
          <div className="divide-y divide-border/70">
            {members.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-6 py-7 first:pt-0 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${0.35 + i * 0.12}s` }}
              >
                {m.img ? (
                  <div className="w-28 h-28 rounded-full overflow-hidden border border-border shrink-0 bg-surface-alt">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0">
                    <span className="font-display text-3xl text-ink-soft">{m.name.charAt(0)}</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-[1.6rem] text-ink leading-[1.1] tracking-[-0.01em]">
                    {m.name}
                  </p>
                  <p className="text-sm text-muted mt-1.5">
                    {m.role}
                    <span className="mx-2 text-border">·</span>
                    <span className="text-forest font-semibold">{m.school}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Slide 2: Problem ──────────────────────────────────────────────────────────

function ProblemSlide() {
  const problems = [
    {
      num: "01",
      title: "No shared space.",
      body: "Good AI-powered course materials exist, but they stay stuck in individual classrooms. There's no trusted place to find what's actually working.",
    },
    {
      num: "02",
      title: "No reason to share.",
      body: "Professors are stretched thin. Without real incentives — money or recognition — the effort of packaging and publishing their work just doesn't happen.",
    },
    {
      num: "03",
      title: "The gap keeps growing.",
      body: "Well-resourced universities move fast on AI. Everyone else falls further behind. The professors who could benefit most are the ones with the least support.",
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>The Problem</SlideLabel>
          <SlideHeading>Built for professors —<br />especially the under-resourced.</SlideHeading>
        </div>

        {/* Anchor stat */}
        <div className="flex items-center gap-6 bg-amber/8 border border-amber/20 rounded-xl px-6 py-4">
          <div className="text-center shrink-0">
            <p className="font-display font-bold text-4xl text-amber-dark">47%</p>
            <p className="text-xs text-muted mt-0.5">high-income countries</p>
          </div>
          <div className="h-10 w-px bg-amber/20 shrink-0" />
          <div className="text-center shrink-0">
            <p className="font-display font-bold text-4xl text-ink">8%</p>
            <p className="text-xs text-muted mt-0.5">low-income countries</p>
          </div>
          <div className="h-10 w-px bg-amber/20 shrink-0" />
          <p className="text-sm text-ink-soft leading-relaxed">
            of academic institutions have implemented AI tools — a gap that keeps widening.{" "}
            <span className="text-xs text-muted">(UNESCO-aligned review, ChemRxiv, 2025)</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {problems.map((p) => (
            <Card key={p.num} className="space-y-3">
              <span className="font-display text-4xl font-bold text-amber/60">{p.num}</span>
              <h3 className="font-semibold text-lg text-ink">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 3: Solution ─────────────────────────────────────────────────────────

function SolutionSlide() {
  const pillars = [
    {
      icon: "📚",
      label: "Library",
      desc: "Real artifacts, organized by subject, course level, and tool — verified by the professors who built them.",
    },
    {
      icon: "💬",
      label: "Social",
      desc: "Discussion under every artifact. Peers helping each other adapt things to their context.",
    },
    {
      icon: "💰",
      label: "Incentives",
      desc: "Grants for top contributors, hackathon prizes from sponsors, and a randomized draw so anyone anywhere can earn.",
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>The Solution</SlideLabel>
          <SlideHeading>
            A free, peer-run library<br />
            <span className="text-forest">with a reward system.</span>
          </SlideHeading>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Card key={p.label} className="space-y-4">
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-semibold text-ink text-lg">{p.label}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-alt rounded-xl border border-border px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Selling platforms (e.g. TPT)</p>
            <p className="text-sm text-ink-soft">Paywalled. No real community. Not designed for AI-era teaching.</p>
          </div>
          <div className="bg-surface-alt rounded-xl border border-border px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Teacher networks</p>
            <p className="text-sm text-ink-soft">Great conversation. Nothing you can actually run in class next week.</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-forest">Artifera has both.</p>
      </div>
    </Shell>
  )
}

// ── Slide 4: What Is an Artifact? ─────────────────────────────────────────────

function ArtifactSlide() {
  const types = [
    { icon: "📓", label: "Curated NotebookLMs", desc: "High-quality sources and guided prompts built around a specific topic." },
    { icon: "📋", label: "Course modules", desc: "Activity, rubric, and worked examples already written." },
    { icon: "🛠️", label: "3rd party tools", desc: "Verified by professors to be effective in a real course setting." },
    { icon: "🔗", label: "Custom tools", desc: "Vibe-coded and hosted by Artifera, ready to deploy." },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>What Is an Artifact?</SlideLabel>
          <SlideHeading>Something concrete.</SlideHeading>
          <p className="text-lg text-ink-soft mt-3">
            Not &quot;how to use AI in your classroom&quot; advice. An actual thing you can open on Monday and use.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {types.map((t) => (
            <div
              key={t.label}
              className="flex items-start gap-4 bg-forest-pale rounded-xl px-5 py-4 border border-forest/10"
            >
              <span className="text-2xl shrink-0 mt-0.5">{t.icon}</span>
              <div>
                <p className="font-semibold text-ink text-sm">{t.label}</p>
                <p className="text-xs text-muted leading-relaxed mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          {["Tagged by subject & course level", "Peer-reviewed usage count", "Clear way to get started"].map((tag) => (
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

// ── Slide 5: Demo ─────────────────────────────────────────────────────────────

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

// ── Slide 6: How Professors Earn ──────────────────────────────────────────────

function EarnSlide() {
  const rewards = [
    {
      icon: "🏆",
      label: "Performance grants",
      desc: "Top artifacts by verified usage and peer reviews earn quarterly grants. Rewards professors who put in the work to share something good.",
    },
    {
      icon: "🎯",
      label: "Hackathon prizes",
      desc: "Sponsors run challenge tracks on the platform. Professors build artifacts around a specific tool or theme and compete for prize money.",
    },
    {
      icon: "🎲",
      label: "Random usage draw",
      desc: "Every verified use of an artifact is one entry. A professor in Lagos has the same shot as one at MIT.",
      highlight: true,
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-5xl space-y-8">
        <div>
          <SlideLabel>How Professors Earn</SlideLabel>
          <SlideHeading>Built differently.</SlideHeading>
          <p className="text-base text-ink-soft mt-2">
            Most reward systems pay the people who are already winning. We don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {rewards.map((r) => (
            <Card
              key={r.label}
              className={`space-y-4 ${r.highlight ? "border-amber/40 bg-amber/5" : ""}`}
            >
              <span className="text-3xl">{r.icon}</span>
              <h3 className={`font-semibold text-lg ${r.highlight ? "text-amber-dark" : "text-ink"}`}>{r.label}</h3>
              <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
              {r.highlight && (
                <p className="text-xs font-semibold text-amber-dark">The equity mechanism.</p>
              )}
            </Card>
          ))}
        </div>

        <div className="bg-forest-pale rounded-xl border border-forest/10 px-5 py-4 space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-forest">How we prevent gaming</p>
          <p className="text-sm text-ink-soft leading-relaxed">
            Institution authentication + 2FA before any draw access. Suspicious submissions from an institution revoke access for the whole institution — giving universities a real reason to enforce integrity.
          </p>
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 7: How We're Funded ─────────────────────────────────────────────────

function FundingSlide() {
  const streams = [
    {
      icon: "🎓",
      source: "Education nonprofit grants",
      desc: "Pay into the classroom draw pool. Winnings go directly to the professor's institution.",
    },
    {
      icon: "🤖",
      source: "AI company sponsorships",
      desc: "Fund the hackathon prize tracks. Sponsors get professors building real use cases with their tools. We get a high-quality content pipeline.",
    },
    {
      icon: "📊",
      source: "Training data licensing (opt-in)",
      desc: "Professors who choose to share artifact usage data with AI companies get a bonus on their performance grants. Opt-in only — better data, no backlash.",
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-4xl space-y-8">
        <div>
          <SlideLabel>Funding Model</SlideLabel>
          <SlideHeading>How We&apos;re Funded</SlideHeading>
        </div>

        <div className="space-y-4">
          {streams.map((s) => (
            <div
              key={s.source}
              className="flex items-start gap-5 bg-white rounded-2xl border border-border px-6 py-5"
            >
              <span className="text-3xl shrink-0 mt-0.5">{s.icon}</span>
              <div className="space-y-1">
                <p className="font-semibold text-ink">{s.source}</p>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

// ── Slide 8: Roadmap ──────────────────────────────────────────────────────────

function RoadmapSlide() {
  const phases = [
    {
      label: "Phase 1",
      name: "Seeding",
      desc: "Internal hackathon at partner institutions to build the initial base of content and users. Universities advance their AI curriculum collaboratively.",
    },
    {
      label: "Phase 2",
      name: "Expand",
      desc: "First external sponsor, first public hackathon, platform open to other universities. Boosted draw rounds drive early adoption.",
    },
    {
      label: "Phase 3",
      name: "Scale",
      desc: "Partner with larger organizations — ministries of education. AI-powered recommendations surface the right artifact for your course without searching.",
    },
  ]

  return (
    <Shell>
      <div className="w-full max-w-4xl space-y-10">
        <div>
          <SlideLabel>Execution</SlideLabel>
          <SlideHeading>Roadmap</SlideHeading>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <div key={phase.name} className="relative">
              {i < phases.length - 1 && (
                <div className="absolute top-6 left-full w-6 flex items-center justify-center z-10">
                  <span className="text-muted text-lg">→</span>
                </div>
              )}
              <Card className="space-y-4 h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber">{phase.label}</span>
                  <p className="font-display font-bold text-ink text-2xl mt-0.5">{phase.name}</p>
                </div>
                <p className="text-sm text-muted leading-relaxed">{phase.desc}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-forest-pale rounded-xl border border-forest/10 px-5 py-4">
          <p className="text-sm text-ink-soft">
            Pilot starts at <span className="font-semibold text-forest">William & Mary</span> — low capital, validated model, direct alignment with the W&M Entrepreneurship Hub.
          </p>
        </div>
      </div>
    </Shell>
  )
}

// ── Slideshow shell ───────────────────────────────────────────────────────────

const SLIDES = [
  TeamSlide,
  ProblemSlide,
  SolutionSlide,
  ArtifactSlide,
  DemoSlide,
  EarnSlide,
  FundingSlide,
  RoadmapSlide,
]

const TITLES = ["Team", "Problem", "Solution", "Artifact", "Demo", "Earning", "Funding", "Roadmap"]

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
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber z-10" />

      <div key={current} className="w-full h-full" style={{ animation: "fadeIn 0.2s ease" }}>
        <Slide />
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 px-10 py-4 flex items-center justify-between border-t border-border bg-surface/90 backdrop-blur-sm z-10">
        <span className="text-xs text-muted font-medium tracking-wide w-32">
          {TITLES[current]}
        </span>

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
