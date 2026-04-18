"use client";

import { useState } from "react";

export default function PrivacyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white/30 hover:text-white/60 transition-colors underline underline-offset-2 text-sm"
      >
        Privacy
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" aria-hidden="true" />
          <div
            className="relative bg-surface rounded-2xl border border-border shadow-xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-ink transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="font-display text-xl font-bold text-ink mb-4">Privacy</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              Artifera only collects email addresses that you voluntarily provide when joining the waitlist.
              Your email will only be used to contact you about Artifera and related ventures from the same team.
              We will never sell, rent, or share your information with third parties for marketing purposes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
