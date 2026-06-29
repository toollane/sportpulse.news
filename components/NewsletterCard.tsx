"use client";

import { useState } from "react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    // No backend is connected yet. This confirms intent locally only.
    setSubmitted(true);
  }

  return (
    <div
      id="newsletter"
      className="pulse-glow relative overflow-hidden rounded-card border border-border bg-foreground px-6 py-10 text-background sm:px-10 sm:py-14"
    >
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-background/80">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Daily briefing
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Get the sports day in one fast read
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-background/70">
          A clear morning briefing on what happened overnight, who is trending,
          and what matters next — written to be read in under two minutes.
        </p>

        {submitted ? (
          <p className="mt-7 rounded-full bg-background/10 px-5 py-3 text-sm font-medium text-background">
            Thanks for your interest. Newsletter delivery launches soon — your
            preference has been noted for this demo.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-background/20 bg-background/10 px-5 py-3 text-sm text-background placeholder:text-background/50 focus:border-pulse focus:outline-none focus:ring-2 focus:ring-pulse/40"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-background/50">
          No spam. This is a demo signup form and does not yet store data.
        </p>
      </div>
    </div>
  );
}
