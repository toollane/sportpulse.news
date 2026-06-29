import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What Is SportPulse? — Independent Sports Intelligence",
  description:
    "Learn what SportPulse is: an independent sports intelligence platform for understanding what happened, why it mattered, who is trending, and what to watch next.",
  alternates: { canonical: "/explained/what-is-sportpulse" },
};

export default function WhatIsSportPulsePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="What Is SportPulse?"
        lead="SportPulse is an independent sports intelligence platform built for fans who want to understand the sports day quickly, clearly, and without the clutter of traditional scoreboards or news feeds."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            A faster way to understand the sports day
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              SportPulse is designed around a simple problem: sports fans often
              do not just want a score. They want to know what happened, why it
              mattered, who is being talked about, and what to watch next. A
              final score can answer the first question, but it rarely answers
              the rest.
            </p>
            <p>
              That is where SportPulse fits. The site is built as a fast,
              mobile-first sports briefing experience. Instead of forcing a fan
              through a long feed, a box score table, and a dozen unrelated
              headlines, SportPulse organizes the day into clear sections:
              results, trends, recaps, explanations, and the next layer of
              context.
            </p>
            <p>
              The goal is not to replace watching games or reading deep feature
              reporting. The goal is to make the first catch-up smarter. If you
              have two minutes in the morning, between meetings, or after a game
              ends, SportPulse should help you feel oriented fast.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What SportPulse covers
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              SportPulse is organized around the way fans naturally ask
              questions. The{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>{" "}
              section focuses on key results and the main stories behind them.
              It is not meant to list every game. It is meant to surface the
              results that changed something: a streak, a standing, a comeback,
              a rotation decision, or a season-long conversation.
            </p>
            <p>
              The{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>{" "}
              section explains who and what is gaining attention. Athletes,
              teams, and topics can trend for many reasons: a huge performance,
              an injury update, a trade rumor, a viral moment, or a tactical
              debate that fans are trying to understand. SportPulse treats that
              attention as a signal, then adds context around it.
            </p>
            <p>
              The{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Recaps
              </Link>{" "}
              section is built for speed. A good recap should tell you the
              result, the turning point, the key contributors, and why the game
              mattered. The{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              section goes a level deeper, answering the "why" behind sports
              stories in plain English.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Sports intelligence, not just sports news
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A traditional sports site often starts with volume: more scores,
              more headlines, more clips, more updates. SportPulse starts with
              usefulness. The question is not "How much can we show?" but "What
              would help a fan understand the moment fastest?"
            </p>
            <p>
              That is why SportPulse uses the phrase sports intelligence. In
              this context, intelligence means organized context. It means
              turning raw sports information into a clear read on the day:
              what changed, what is rising, what deserves attention, and what
              might matter next.
            </p>
            <p>
              SportPulse currently uses original editorial content to demonstrate the product experience. It does not claim
              to provide live scores, official statistics, or real-time league
              data. Future versions may add live data sources, trend signals,
              and more coverage, but the editorial promise stays the same:
              fast, clear, helpful sports context.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Who SportPulse is for
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              SportPulse is for fans who follow sports closely enough to care,
              but not always closely enough to watch every game, every night.
              It is for the person who wakes up and wants to know why everyone
              is talking about a comeback. It is for the fan who saw a player
              trending and wants context before joining the conversation.
            </p>
            <p>
              It is also for busy readers who want a cleaner alternative to a
              noisy sports homepage. SportPulse is meant to be readable on a
              phone, easy to scan, and useful even when you only have a few
              minutes.
            </p>
          </div>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Independent project disclaimer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            SportPulse is an independent sports media and analysis project. It
            is not affiliated with, endorsed by, or partnered with any league,
            team, athlete, sportsbook, or governing body. SportPulse does not
            provide betting picks or gambling recommendations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Learn more about the project on the{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              About SportPulse
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </article>
  );
}
