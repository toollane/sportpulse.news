import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About SportPulse | Fast Sports Recaps, Trends and Explanations",
  description:
    "Learn what SportPulse is: an independent sports media and analysis project built to help fans understand scores, trends, recaps, and sports stories faster.",
};

const coverageAreas = [
  {
    title: "Tonight",
    description:
      "Fast daily sports briefings focused on winners, key results, important storylines, and what fans need to know first.",
    href: "/tonight",
  },
  {
    title: "Trending",
    description:
      "Explanations of why athletes, teams, games, and moments are gaining attention across search, media, and fan discussion.",
    href: "/trending",
  },
  {
    title: "Recaps",
    description:
      "Short, readable game recaps for busy fans who want the turning point, key players, and why the result mattered.",
    href: "/recaps",
  },
  {
    title: "Explained",
    description:
      "Sports context written for clarity: momentum, public attention, viral moments, game pressure, and fan behavior.",
    href: "/explained",
  },
];

const legalLinks = [
  { href: "/contact", label: "Contact SportPulse" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/impressum", label: "Legal Notice / Impressum" },
];

export default function AboutPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="About"
            title="The fastest way to understand what happened in sports today."
            description="SportPulse is an independent sports media and analysis project built for fans who want fast, clear, and useful sports context without the clutter of traditional sports websites."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Why SportPulse exists
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Sports fans often search for scores because they want a fast
              answer. But the final score rarely tells the whole story. A game
              can be shaped by momentum swings, injuries, late decisions,
              standout performances, tactical matchups, or one decisive moment.
            </p>
            <p className="mt-4 leading-8 text-muted">
              SportPulse is designed to bridge that gap. Instead of only showing
              what happened, SportPulse focuses on what mattered, why it
              mattered, who is trending, and what fans should watch next.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Core mission
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Context without clutter.
            </h2>
            <p className="mt-4 leading-8 text-muted">
              SportPulse is built around the way modern fans actually catch up:
              quickly, visually, and with a clear sense of what matters next.
            </p>
          </section>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What SportPulse covers
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coverageAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-card border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]"
              >
                <h3 className="font-semibold text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {area.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Explore
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Our editorial approach
            </h2>
            <p className="mt-4 leading-8 text-muted">
              SportPulse is built around clarity, speed, and usefulness. The
              goal is not to overwhelm users with endless tables, feeds, and
              headlines. The goal is to help fans quickly understand the most
              important sports stories of the day.
            </p>
            <p className="mt-4 leading-8 text-muted">
              The current version of SportPulse uses editorial content and
              structured mock data while the platform foundation is being built.
              Future versions may include sports data integrations, trend
              signals, automated recaps, newsletters, and more advanced sports
              intelligence tools.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Independence and transparency
            </h2>
            <p className="mt-4 leading-8 text-muted">
              SportPulse is an independent project operated by Nicklas Wolf from
              Germany. SportPulse is not affiliated with, endorsed by, or
              officially connected to any sports league, team, athlete,
              sportsbook, media company, or governing body.
            </p>
            <p className="mt-4 leading-8 text-muted">
              References to sports teams, athletes, events, or leagues are made
              for editorial and informational purposes only. All third-party
              names and brands remain the property of their respective owners.
            </p>
          </section>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What SportPulse is not
          </h2>
          <p className="mt-4 leading-8 text-muted">
            SportPulse is not a sportsbook, gambling service, paid-picks
            product, official score provider, or league-operated platform. Any
            future market-related content will be informational and editorial in
            nature, not betting advice.
          </p>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Legal and contact information
          </h2>
          <p className="mt-4 leading-8 text-muted">
            Full provider information, privacy details, editorial standards, and
            terms of use are available on the pages linked below.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-card border border-border bg-surface p-4 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-8 text-sm text-muted">Last updated: June 26, 2026.</p>
      </section>
    </main>
  );
}