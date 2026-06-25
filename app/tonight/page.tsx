import type { Metadata } from "next";
import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Tonight — Key results and the stories behind them",
  description:
    "Tonight on SportPulse: the night's defining results explained clearly. Winners, turning points, and the numbers that actually mattered.",
  alternates: { canonical: "/tonight" },
};

export default function TonightPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Tonight
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What happened tonight, explained
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          The scoreboard tells you who won. SportPulse tells you how and why.
          Each entry below pairs a result with the turning point that decided
          it, so you can catch up on the night in a couple of minutes.
        </p>
      </header>

      <section className="mt-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          How we cover the night
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          We do not try to list every game. Instead, we surface the results that
          change something — a standing, a streak, a season&rsquo;s direction —
          and explain the moment that mattered most. The goal is signal over
          noise: a clear read on the night that respects your time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/recaps"
            className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Read the fast recaps →
          </Link>
          <Link
            href="/explained"
            className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Understand why it mattered →
          </Link>
        </div>
      </section>
    </div>
  );
}
