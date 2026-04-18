"use client";

import { useState } from "react";

type Variant = "default" | "dark";

export default function WaitlistForm({ variant = "default" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className={`text-sm font-semibold ${variant === "dark" ? "text-amber" : "text-forest"}`}>
        ✓ You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  const inputClass =
    variant === "dark"
      ? "flex-1 min-w-0 px-5 py-3 rounded-full text-sm border bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber"
      : "flex-1 min-w-0 px-5 py-3 rounded-full text-sm border bg-white border-border text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest";

  const btnClass =
    variant === "dark"
      ? "shrink-0 bg-amber text-ink font-semibold px-6 py-3 rounded-full text-sm hover:bg-amber-light transition-colors disabled:opacity-60"
      : "shrink-0 bg-forest text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-forest-mid transition-colors disabled:opacity-60";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@school.edu"
          required
          className={inputClass}
        />
        <button type="submit" disabled={status === "loading"} className={btnClass}>
          {status === "loading" ? "Joining…" : "Join Waitlist →"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong — please try again.</p>
      )}
    </div>
  );
}
