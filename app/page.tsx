export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-surface text-ink overscroll-none">

      {/* ─── Amber top stripe ─── */}
      <div className="h-1 bg-amber" />

      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50 bg-surface border-b border-border backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-2xl font-bold text-forest tracking-tight">
            Artifera
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
            <a href="#teachers" className="hover:text-forest transition-colors">For Teachers</a>
            <a href="#hackathon" className="hover:text-forest transition-colors">For Sponsors</a>
          </div>
          <a
            href="#waitlist"
            className="bg-amber text-ink text-sm font-semibold px-4 py-2 rounded-full hover:bg-amber-dark transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* Left: headline + CTAs */}
          <div className="lg:col-span-3">
            <h1 className="animate-fade-up delay-1 font-display text-5xl md:text-[4.25rem] font-bold leading-[1.04] tracking-tight text-ink mb-8">
              Great teaching<br />
              shouldn&apos;t stay<br />
              <span className="relative inline-block">
                in one place.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber rounded-full" />
              </span>
            </h1>
            <p className="animate-fade-up delay-2 text-xl text-ink-soft leading-relaxed mb-10 max-w-lg">
              The first educator-verified library and social network focused on AI-powered teaching materials.
            </p>
            <p className="animate-fade-up delay-2 text-sm font-bold uppercase tracking-widest text-amber mb-8">
              Build · Share · Earn
            </p>
            <div className="animate-fade-up delay-3 flex flex-wrap gap-4">
              <a
                href="#upload"
                className="bg-forest text-white font-semibold px-7 py-3.5 rounded-full hover:bg-forest-mid transition-colors text-base"
              >
                Upload an Artifact
              </a>
              <a
                href="#browse"
                className="border border-border text-ink-soft font-medium px-7 py-3.5 rounded-full hover:border-forest hover:text-forest transition-colors text-base"
              >
                Browse Lessons →
              </a>
            </div>
          </div>

          {/* Right: artifact card preview */}
          <div className="lg:col-span-2 animate-fade-in delay-4">
            <div className="bg-white rounded-2xl shadow-lg border border-border p-6 relative">
              <div className="absolute -top-3 -right-3 bg-amber text-ink text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                ⭐ Top Rated
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-forest-pale text-forest text-xs font-semibold px-2.5 py-1 rounded-full">Biology</span>
                <span className="bg-surface-alt text-muted text-xs px-2.5 py-1 rounded-full">Gr. 9–10</span>
                <span className="bg-surface-alt text-muted text-xs px-2.5 py-1 rounded-full">NotebookLM</span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-1">Cell Division Interactive Lab</h3>
              <p className="text-sm text-muted mb-4">Curated prompts + worked examples. Drop into any biology unit.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">⭐ 4.9 · 127 uses</span>
                <button className="bg-forest text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-forest-mid transition-colors">
                  Use in Class →
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-surface-alt text-muted text-xs px-2 py-0.5 rounded-full">Math</span>
                  <span className="bg-surface-alt text-muted text-xs px-2 py-0.5 rounded-full">Gr. 6–8</span>
                </div>
                <p className="text-sm font-medium text-ink-soft">Algebra Word Problems — AI Tutoring Scaffold</p>
                <p className="text-xs text-muted-light mt-0.5">⭐ 4.7 · 89 uses</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Trust bar ─── */}
      <div className="border-y border-border bg-surface-alt">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted font-medium">
            <span className="text-border select-none">·</span>
            <span>ECM × WMGIC AI Equity Challenge 2026</span>
            <span className="text-border select-none">·</span>
            <span>Track 1: AI&apos;s Future in Higher Education</span>
          </div>
        </div>
      </div>

      {/* ─── Problem ─── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-3">The Problem</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Three reasons great lessons<br />stay hidden.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "No Discovery Layer",
              body: "The first library with an integrated social network to find materials you can trust.",
            },
            {
              num: "02",
              title: "Barriers to Entry",
              body: "Artifera builds a trust community of teachers that can help each other.",
            },
            {
              num: "03",
              title: "The Equity Gap",
              body: "AI-enhanced education is rarely designed for classrooms that need it the most.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="group p-8 rounded-2xl bg-white border border-border hover:border-forest transition-all hover:shadow-md"
            >
              <p className="font-display text-5xl font-bold text-border mb-4 group-hover:text-forest-pale transition-colors">
                {card.num}
              </p>
              <h3 className="font-semibold text-lg text-ink mb-3">{card.title}</h3>
              <p className="text-muted text-base leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What is an artifact ─── */}
      <section className="bg-forest text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">The Solution</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                What is<br />an artifact?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                An artifact is anything a teacher can use directly in class or helps them learn more about AI-powered education.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📓", label: "NotebookLM Notebook", desc: "Curated prompts + sources" },
                { icon: "📋", label: "Lesson Plan + Rubric", desc: "With worked examples" },
                { icon: "⚙️", label: "3rd Party Tool", desc: "Existing verified solutions" },
                { icon: "📰", label: "News", desc: "The latest in education news" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors border border-white/10"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section id="teachers" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-3">How It Works</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
            Two paths. One platform.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-border bg-white">
            <div className="inline-flex items-center gap-2 bg-forest text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              ↑ For educators sharing
            </div>
            <div className="space-y-6">
              {[
                "Create a verified educator account",
                "Upload your artifact with subject, level, and description",
                "Earn performance rewards based on your impact",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-ink-soft leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-border bg-white">
            <div className="inline-flex items-center gap-2 bg-amber text-ink text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              ↓ For educators using
            </div>
            <div className="space-y-6">
              {[
                "Browse and filter by subject, level, tool type, or rating",
                "Use an artifact in class with your students for free",
                "Submit reviews to enter a classroom grant drawing",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-ink-soft leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reward system ─── */}
      <section className="bg-surface-alt border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-amber mb-3">The Reward System</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
              Recognition that reaches<br />the right people.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                path: "Top artifact",
                reward: "Performance Grant",
                who: "Teacher + School",
                icon: "🏆",
                highlight: false,
              },
              {
                path: "Hackathon winner",
                reward: "Sponsor Prize",
                who: "Teacher",
                icon: "🚀",
                highlight: false,
              },
              {
                path: "Random usage selection",
                reward: "Classroom Grant",
                who: "School",
                icon: "🎲",
                highlight: true,
              },
            ].map((r) => (
              <div
                key={r.path}
                className={`p-8 rounded-2xl border ${
                  r.highlight
                    ? "bg-forest border-forest text-white"
                    : "bg-white border-border"
                }`}
              >
                <div className="text-3xl mb-4">{r.icon}</div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${r.highlight ? "text-amber" : "text-muted"}`}>
                  {r.path}
                </p>
                <h3 className={`font-display text-2xl font-bold mb-3 ${r.highlight ? "text-white" : "text-ink"}`}>
                  {r.reward}
                </h3>
                <p className={`text-sm ${r.highlight ? "text-white/70" : "text-muted"}`}>
                  Benefits: {r.who}
                </p>
                {r.highlight && (
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    Support places making an effort to modernize their education.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hackathon ─── */}
      <section id="hackathon" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">The Hackathon Layer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Where companies<br />meet educators.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-4">
              Artifera hosts sponsored hackathons where teachers compete to build artifacts around a specific challenge or tool.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { role: "Teachers", get: "Prize money + recognition + library visibility", icon: "👩‍🏫" },
              { role: "Sponsors", get: "Qualified educators validating your tools at scale", icon: "🏢" },
              { role: "Platform", get: "High-quality content pipeline", icon: "🌐" },
            ].map((item) => (
              <div key={item.role} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border hover:border-forest transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-ink text-sm mb-0.5">{item.role}</p>
                  <p className="text-muted text-sm">{item.get}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section id="waitlist" className="bg-forest text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">Now Accepting Early Access</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            Starting at William &amp; Mary.<br />
            <span className="italic font-light">Built for everywhere.</span>
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
            Join teachers, developers, and institutions building the world&apos;s first AI-powered learning library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-amber text-ink font-bold px-8 py-4 rounded-full text-base hover:bg-amber-light transition-colors"
            >
              Get Early Access →
            </a>
            <a
              href="#"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base hover:border-white/60 transition-colors"
            >
              Sponsor a Hackathon
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-ink border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-display text-white text-lg font-bold">Artifera</span>
          <p className="text-white/40">© 2026 Artifera · ECM × WMGIC AI Equity Challenge</p>
        </div>
      </footer>

    </div>
  );
}
