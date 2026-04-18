"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { PROFESSORS, type Professor } from "./data/professors"
import { ARTIFACTS, SUBJECTS, LEVEL_GROUPS, type Artifact, type Comment, type Review } from "./data/artifacts"

type Sort = "top" | "new"

const TOOL_COLORS: Record<string, string> = {
  "NotebookLM":       "bg-[#e8f4f0] text-[#1a7a5e]",
  "Interactive Tool": "bg-[#fef3c7] text-[#92400e]",
  "Lesson Plan":      "bg-[#f3f0eb] text-[#78716c]",
}

// ── Shared ─────────────────────────────────────────────────────────────────

function Avatar({ professor, size = "md" }: { professor: Professor; size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-7 h-7 text-[10px]" : "w-9 h-9 text-xs"
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-bold text-white shrink-0 select-none`}
      style={{ backgroundColor: professor.color }}
    >
      {professor.initials}
    </div>
  )
}

function StarRating({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-1 text-[#D97706] font-semibold text-sm tabular-nums">
      ★ {value.toFixed(1)}
    </span>
  )
}

function Toast({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-ink text-white text-sm font-medium rounded-full shadow-xl transition-all duration-300 pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      🚧 Coming soon
    </div>
  )
}

// ── Comment thread (conversational) ────────────────────────────────────────

function CommentThread({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-4">
      {comments.map((comment, i) => {
        const prof = PROFESSORS.find(p => p.id === comment.professorId)!
        return (
          <div key={i} className="flex gap-3">
            <Avatar professor={prof} size="sm" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                <span className="text-sm font-semibold text-ink">{prof.name}</span>
                <span className="text-xs text-muted">{prof.dept}</span>
                <span className="text-xs text-muted ml-auto shrink-0">{comment.daysAgo}d ago</span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{comment.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Review thread (formal) ─────────────────────────────────────────────────

function ReviewThread({ reviews }: { reviews: Review[] }) {
  return (
    <div className="space-y-5">
      {reviews.map((review, i) => {
        const prof = PROFESSORS.find(p => p.id === review.professorId)!
        return (
          <div key={i} className="rounded-xl border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar professor={prof} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink leading-tight">{prof.name}</p>
                  <p className="text-xs text-muted">{prof.dept} · {prof.institution}</p>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 gap-0.5">
                <StarRating value={review.rating} />
                <span className="text-xs text-muted">{review.daysAgo}d ago</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-ink mb-1">"{review.headline}"</p>
            <p className="text-sm text-ink-soft leading-relaxed">{review.body}</p>
          </div>
        )
      })}
    </div>
  )
}

// ── Artifact post ──────────────────────────────────────────────────────────

function ArtifactPost({ artifact, onComingSoon }: { artifact: Artifact; onComingSoon: () => void }) {
  const [tab, setTab] = useState<"comments" | "reviews">("comments")
  const toolColor = TOOL_COLORS[artifact.tool] ?? "bg-surface-alt text-muted"

  return (
    <article className="bg-white border border-border rounded-2xl overflow-hidden hover:border-forest/25 transition-colors">
      {/* Header */}
      <div className="p-5 pb-4">
        {/* Meta row — tool + subject on left, level on next line mobile */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${toolColor}`}>
            {artifact.tool}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-alt text-muted">
            {artifact.subject}
          </span>
          <span className="text-xs text-muted">· {artifact.levelLabel}</span>
        </div>

        {/* Title */}
        <h2 className="font-display font-semibold text-xl text-ink leading-snug mb-2">
          {artifact.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-ink-soft leading-relaxed mb-4">
          {artifact.description}
        </p>

        {/* Stats + CTA — stacks gracefully on narrow screens */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-4">
            <StarRating value={artifact.rating} />
            <span className="text-sm text-muted">{artifact.usageCount.toLocaleString()} uses</span>
            <span className="text-xs text-muted hidden sm:inline">
              {new Date(artifact.dateAdded).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <button
            onClick={onComingSoon}
            className="text-sm font-semibold px-5 py-2 rounded-full border border-forest/25 bg-forest/8 text-forest/40 cursor-not-allowed flex items-center gap-1.5 hover:opacity-80 transition-opacity select-none"
          >
            Use artifact <span aria-hidden>→</span>
          </button>
        </div>
        {/* Date shown below on mobile */}
        <p className="text-xs text-muted mt-2 sm:hidden">
          {new Date(artifact.dateAdded).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      </div>

      {/* Tab bar */}
      <div className="border-t border-border flex">
        <button
          onClick={() => setTab("comments")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "comments"
              ? "border-forest text-forest"
              : "border-transparent text-muted hover:text-ink-soft"
          }`}
        >
          💬 Discussion ({artifact.comments.length})
        </button>
        <button
          onClick={() => setTab("reviews")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "reviews"
              ? "border-forest text-forest"
              : "border-transparent text-muted hover:text-ink-soft"
          }`}
        >
          ⭐ Reviews ({artifact.reviews.length})
        </button>
      </div>

      {/* Tab content */}
      <div className="p-5">
        {tab === "comments"
          ? <CommentThread comments={artifact.comments} />
          : <ReviewThread reviews={artifact.reviews} />
        }
      </div>
    </article>
  )
}

// ── Checkbox filter panel ──────────────────────────────────────────────────

function DropdownCheckbox({
  label,
  selected,
  onClear,
  children,
}: {
  label: string
  selected: Set<string>
  onClear: () => void
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onMouse = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const onKey   = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", onMouse)
    document.addEventListener("keydown",   onKey)
    return () => { document.removeEventListener("mousedown", onMouse); document.removeEventListener("keydown", onKey) }
  }, [open])

  const count = selected.size
  const triggerLabel = count === 0 ? label : count === 1 ? [...selected][0] : `${label} (${count})`

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 px-3 py-2.5 bg-white border rounded-lg text-sm transition-all min-w-0 max-w-[9rem] ${
          open || count > 0
            ? "border-forest text-forest ring-2 ring-forest/15"
            : "border-border text-ink-soft hover:border-forest/40"
        }`}
      >
        <span className="font-medium truncate" suppressHydrationWarning>{triggerLabel}</span>
        <svg className={`w-3.5 h-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 z-30 w-[280px] max-h-[360px] overflow-y-auto bg-white border border-border rounded-xl shadow-lg p-4">
          {children}
          {count > 0 && (
            <div className="border-t border-border mt-2 pt-2">
              <button onClick={onClear} className="text-xs text-muted hover:text-forest transition-colors">
                Clear {label.toLowerCase()}s
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group py-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 rounded accent-forest cursor-pointer"
      />
      <span className={`text-sm transition-colors ${checked ? "text-ink font-medium" : "text-ink-soft group-hover:text-ink"}`}>
        {label}
      </span>
    </label>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [query,            setQuery]            = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<Set<string>>(new Set())
  const [selectedLevels,   setSelectedLevels]   = useState<Set<string>>(new Set())
  const [sort,             setSort]             = useState<Sort>("top")
  const [toast,            setToast]            = useState(false)

  const showToast = useCallback(() => {
    setToast(true)
    setTimeout(() => setToast(false), 2200)
  }, [])

  const toggleSubject = (s: string) =>
    setSelectedSubjects(prev => { const n = new Set(prev); n.has(s) ? n.delete(s) : n.add(s); return n })

  const toggleLevel = (l: string) =>
    setSelectedLevels(prev => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n })

  const filtered = useMemo(() => {
    let result = [...ARTIFACTS]
    if (query)                    result = result.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.subject.toLowerCase().includes(query.toLowerCase()))
    if (selectedSubjects.size > 0) result = result.filter(a => selectedSubjects.has(a.subject))
    if (selectedLevels.size > 0)   result = result.filter(a => a.levels.some(l => selectedLevels.has(l)))
    result.sort((a, b) =>
      sort === "top"
        ? b.rating - a.rating
        : new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    )
    return result
  }, [query, selectedSubjects, selectedLevels, sort])

  const hasFilters = query || selectedSubjects.size > 0 || selectedLevels.size > 0

  const clearAll = () => { setQuery(""); setSelectedSubjects(new Set()); setSelectedLevels(new Set()) }

  return (
    <div className="min-h-screen bg-surface font-sans">

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display font-bold text-lg text-ink tracking-tight">Artifera</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <button onClick={showToast} className="text-muted/60 cursor-not-allowed hover:opacity-80 transition-opacity">Browse</button>
            <button onClick={showToast} className="text-muted/60 cursor-not-allowed hover:opacity-80 transition-opacity">Hackathons</button>
            <button onClick={showToast} className="text-muted/60 cursor-not-allowed hover:opacity-80 transition-opacity">Upload</button>
          </nav>
          <button
            onClick={showToast}
            className="text-sm font-semibold px-4 py-2 rounded-full bg-forest/20 text-forest/40 border border-forest/20 cursor-not-allowed hover:opacity-80 transition-opacity"
          >
            Sign in
          </button>
        </div>
      </header>

      {/* Demo banner */}
      <div className="bg-[#fffbeb] border-b border-[#fde68a]">
        <div className="max-w-3xl mx-auto px-6 py-1.5">
          <span className="text-xs font-semibold text-[#92400e]">Demo — </span>
          <span className="text-xs text-ink-soft">synthetic data, no links active yet.</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-8 pb-24 space-y-5">

        {/* Heading */}
        <div className="animate-fade-up">
          <h1 className="font-display font-bold text-3xl text-ink mb-1">Artifact Library</h1>
          <p className="text-sm text-muted">AI-powered learning experiences, verified by instructors worldwide.</p>
        </div>

        {/* Search input */}
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search artifacts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink text-lg leading-none">×</button>
          )}
        </div>

        {/* Filters + sort row */}
        <div className="flex items-center gap-2">
          <DropdownCheckbox label="Subject" selected={selectedSubjects} onClear={() => setSelectedSubjects(new Set())}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {SUBJECTS.map(s => (
                <CheckItem key={s} label={s} checked={selectedSubjects.has(s)} onChange={() => toggleSubject(s)} />
              ))}
            </div>
          </DropdownCheckbox>

          <DropdownCheckbox label="Level" selected={selectedLevels} onClear={() => setSelectedLevels(new Set())}>
            <div className="space-y-3">
              {LEVEL_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-ink mb-1.5">{group.label}</p>
                  <div className="space-y-1 pl-1">
                    {group.options.map(opt => (
                      <CheckItem key={opt} label={opt} checked={selectedLevels.has(opt)} onChange={() => toggleLevel(opt)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DropdownCheckbox>

          <div className="flex rounded-lg border border-border overflow-hidden bg-white ml-auto shrink-0">
            {(["top", "new"] as Sort[]).map(s => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  sort === s ? "bg-forest text-white" : "text-muted hover:text-ink-soft hover:bg-surface-alt"
                }`}
              >
                {s === "top" ? "⭐ Top" : "✨ New"}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-xs text-muted -mt-1">
          {filtered.length} artifact{filtered.length !== 1 ? "s" : ""}
          {hasFilters && " matching filters"}
          {hasFilters && <button onClick={clearAll} className="ml-2 text-forest hover:underline">Clear all</button>}
        </p>

        {/* Feed */}
        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map(artifact => (
              <ArtifactPost key={artifact.id} artifact={artifact} onComingSoon={showToast} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-3">
            <p className="text-muted text-sm">No artifacts match your filters.</p>
            <button onClick={clearAll} className="text-sm text-forest hover:underline">Clear filters</button>
          </div>
        )}
      </div>

      <Toast visible={toast} />
    </div>
  )
}
