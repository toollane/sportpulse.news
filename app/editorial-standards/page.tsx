import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Editorial Standards | SportPulse",
  description:
    "Read the SportPulse editorial standards for independence, corrections, sports analysis, recaps, trends, and responsible sports coverage.",
};

const standards = [
  {
    title: "Our editorial purpose",
    body: [
      "SportPulse exists for fans with limited time and high expectations. Modern sports coverage can be noisy, fragmented, and overloaded with box scores, clips, opinions, and breaking updates. Our goal is to turn that noise into clear context.",
      "We focus on fast recaps, explainers, trend context, and daily sports intelligence. A SportPulse page should help a reader understand the story behind a score, the reason an athlete is trending, or the next storyline worth following.",
    ],
  },
  {
    title: "Independence",
    body: [
      "SportPulse is an independent sports media and analysis project. It is not affiliated with, endorsed by, or officially connected to any league, team, athlete, sportsbook, media company, or governing body.",
      "References to sports leagues, athletes, teams, events, statistics, media coverage, or public storylines are made for editorial and informational purposes only. Third-party names and brands remain the property of their respective owners.",
    ],
  },
  {
    title: "Clarity over clutter",
    body: [
      "SportPulse is designed for short attention spans without becoming shallow. We aim to make sports easier to understand quickly, while still giving readers enough context to make sense of the bigger picture.",
      "Our pages should use clear headlines, useful sections, internal links, practical explanations, and plain language. The goal is not to overwhelm readers with every possible detail. The goal is to help them understand the signal faster.",
    ],
  },
  {
    title: "Accuracy and context",
    body: [
      "Sports move quickly. Scores, injuries, lineups, schedules, standings, and public narratives can change fast. SportPulse aims to provide useful sports context, but readers should verify time-sensitive information with official or primary sources when accuracy is essential.",
      "When we discuss sports stories, we try to separate what happened from why it matters. A final score can be useful, but it may not explain momentum, injuries, tactical changes, late-game pressure, or what the result means next.",
    ],
  },
  {
    title: "No fake live-data claims",
    body: [
      "SportPulse does not claim to provide live scores, official data feeds, real-time injury alerts, or league-operated statistics unless those features are actually available and clearly supported by an appropriate data source.",
      "Future versions of SportPulse may include live sports data, automated recap support, trend signals, or fantasy tools. Until those features exist, SportPulse pages should not imply that they are already live.",
    ],
  },
  {
    title: "Betting and market coverage",
    body: [
      "SportPulse does not currently provide betting picks, gambling advice, sportsbook functionality, paid selections, or guaranteed predictions.",
      "A future market intelligence section may explain sports market context, public attention, odds movement, injury impact, or line movement. If that area is added, it should remain informational and editorial rather than promotional gambling advice.",
    ],
  },
];

const relatedLinks = [
  { href: "/about", label: "About SportPulse" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function EditorialStandardsPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Editorial Standards" },
          ]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="Standards"
            title="Editorial Standards"
            description="SportPulse is built to help sports fans understand what happened, why it mattered, and what to watch next. These standards explain how we approach independence, clarity, corrections, sports context, and responsible coverage."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Built for fast understanding
            </h2>
            <p className="mt-4 leading-8 text-muted">
              SportPulse is being built with an app-like user experience in
              mind. Readers should be able to land on a page, understand the
              main point quickly, and move to the next useful page without
              friction.
            </p>
            <p className="mt-4 leading-8 text-muted">
              This means short sections, clear page hierarchy, helpful internal
              links, readable mobile layouts, visible breadcrumbs, and a strong
              focus on what a fan needs next.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Editorial promise
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              No fake authority. No fake live data.
            </h2>
            <p className="mt-4 leading-8 text-muted">
              SportPulse should clearly separate current features from future
              roadmap ideas. Trust is more important than pretending the product
              is bigger than it is.
            </p>
          </section>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {standards.map((standard) => (
            <section
              key={standard.title}
              className="rounded-card border border-border bg-surface p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {standard.title}
              </h2>
              {standard.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Corrections and updates
          </h2>
          <p className="mt-4 leading-8 text-muted">
            If a reader notices unclear, outdated, or inaccurate information,
            they can contact SportPulse with the page URL and a short
            explanation. We review correction requests and update pages when a
            correction improves accuracy, clarity, or usefulness.
          </p>
          <p className="mt-4 leading-8 text-muted">
            Evergreen pages may be updated as SportPulse grows, adds new
            features, improves its editorial structure, or expands into new
            sports categories.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
            >
              Contact SportPulse
            </Link>
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related pages
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((link) => (
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

        <p className="mt-8 text-sm text-muted">
          Last updated: June 2026. These editorial standards may be updated as
          SportPulse develops, adds new features, or expands its coverage.
        </p>
      </section>
    </main>
  );
}