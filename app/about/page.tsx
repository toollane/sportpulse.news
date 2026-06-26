import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SportPulse | Fast Sports Recaps, Trends and Explanations",
  description:
    "Learn what SportPulse is: an independent sports media and analysis project built to help fans understand scores, trends, recaps, and sports stories faster.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            About
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
            The fastest way to understand what happened in sports today.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            SportPulse is an independent sports media and analysis project
            built for fans who want fast, clear, and useful sports context
            without the clutter of traditional sports websites.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Why SportPulse exists
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              Sports fans often search for scores because they want a fast
              answer. But the final score rarely tells the whole story. A game
              can be shaped by momentum swings, injuries, late decisions,
              standout performances, tactical matchups, or one decisive moment.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is designed to bridge that gap. Instead of only showing
              what happened, SportPulse focuses on what mattered, why it
              mattered, who is trending, and what fans should watch next.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              What SportPulse covers
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Tonight</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Fast daily sports briefings focused on winners, key results,
                  important storylines, and what fans need to know first.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Trending</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Explanations of why athletes, teams, games, and moments are
                  gaining attention across search, media, and fan discussion.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Recaps</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Short, readable game recaps for busy fans who want the
                  turning point, key players, and why the result mattered.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Explained</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Sports context written for clarity: momentum, public
                  attention, viral moments, game pressure, and fan behavior.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Our editorial approach
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is built around clarity, speed, and usefulness. The
              goal is not to overwhelm users with endless tables, feeds, and
              headlines. The goal is to help fans quickly understand the most
              important sports stories of the day.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              The current version of SportPulse uses editorial content and
              structured mock data while the platform foundation is being built.
              Future versions may include sports data integrations, trend
              signals, automated recaps, newsletters, and more advanced sports
              intelligence tools.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Independence and transparency
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is an independent project operated by Nicklas Wolf from
              Germany. SportPulse is not affiliated with, endorsed by, or
              officially connected to any sports league, team, athlete,
              sportsbook, media company, or governing body.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              References to sports teams, athletes, events, or leagues are made
              for editorial and informational purposes only. All third-party
              names and brands remain the property of their respective owners.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              What SportPulse is not
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is not a sportsbook, gambling service, paid-picks
              product, official score provider, or league-operated platform. Any
              future market-related content will be informational and editorial
              in nature, not betting advice.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Start exploring
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/tonight"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Tonight’s sports briefing
              </Link>
              <Link
                href="/trending"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Trending sports stories
              </Link>
              <Link
                href="/recaps"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Fast sports recaps
              </Link>
              <Link
                href="/explained"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Sports explained
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Legal and contact information
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              Full provider information, privacy details, and terms of use are
              available on the legal pages linked below.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Contact SportPulse
              </Link>
              <Link
                href="/privacy"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Terms of Use
              </Link>
              <Link
                href="/impressum"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Legal Notice / Impressum
              </Link>
            </div>
          </section>

          <p className="pt-4 text-sm leading-6 text-black/45">
            Last updated: June 26, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}