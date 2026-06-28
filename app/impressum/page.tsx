import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Legal Notice / Impressum | SportPulse",
  description:
    "Legal notice and provider information for SportPulse, an independent sports media and analysis website operated from Germany.",
};

const legalLinks = [
  { href: "/about", label: "About SportPulse" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function ImpressumPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Legal Notice / Impressum" },
          ]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="Legal Notice"
            title="Legal Notice / Impressum"
            description="Provider information for SportPulse, an independent sports media and analysis website built to help fans understand scores, recaps, trends, and sports stories faster."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Provider information
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Angaben gemäß gesetzlicher Anbieterkennzeichnung
            </h2>

            <div className="mt-6 space-y-5 text-muted">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  Operator
                </p>
                <p className="mt-2 leading-7">
                  Nicklas Wolf
                  <br />
                  Am Dorfe 3
                  <br />
                  37133 Friedland
                  <br />
                  Germany
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  Contact
                </p>
                <p className="mt-2 leading-7">
                  Email:{" "}
                  <a
                    href="mailto:toolfixio@gmail.com"
                    className="font-semibold text-accent hover:text-accent-strong"
                  >
                    toolfixio@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  Website
                </p>
                <p className="mt-2 leading-7">
                  <a
                    href="https://sportpulse.news"
                    className="font-semibold text-accent hover:text-accent-strong"
                  >
                    sportpulse.news
                  </a>
                </p>
              </div>
            </div>

            <p className="mt-6 rounded-card border border-border bg-background/40 p-4 text-sm leading-6 text-muted">
              A dedicated SportPulse domain email address is planned. Until it
              is active and tested, the email address listed above is the
              official contact address for this website.
            </p>
          </section>

          <aside className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Responsible person
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Editorial responsibility
            </h2>

            <p className="mt-4 leading-8 text-muted">
              Responsible for the editorial content of SportPulse:
            </p>

            <p className="mt-4 leading-8 text-muted">
              Nicklas Wolf
              <br />
              Am Dorfe 3
              <br />
              37133 Friedland
              <br />
              Germany
            </p>

            <div className="mt-6">
              <Link
                href="/editorial-standards"
                className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
              >
                Read Editorial Standards
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Independent sports media project
              </h2>
              <p className="mt-4 leading-8 text-muted">
                SportPulse is an independent sports media and analysis website.
                It is not affiliated with, endorsed by, or officially connected
                to any sports league, team, athlete, sportsbook, media company,
                governing body, or data provider.
              </p>
              <p className="mt-4 leading-8 text-muted">
                References to sports leagues, teams, athletes, events, scores,
                statistics, media coverage, or public storylines are made for
                editorial and informational purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                No betting service or official data feed
              </h2>
              <p className="mt-4 leading-8 text-muted">
                SportPulse does not currently provide betting services, gambling
                functionality, paid picks, sportsbook features, guaranteed
                predictions, official live scores, or league-operated data
                feeds.
              </p>
              <p className="mt-4 leading-8 text-muted">
                Any future sports data, market intelligence, fantasy, or trend
                features should be clearly labeled and supported by appropriate
                sources before they are presented as active product features.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Corrections, legal questions, and contact requests
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-muted">
            If you notice inaccurate information, unclear wording, outdated
            details, or have a legal or privacy-related request, please contact
            SportPulse by email and include the relevant page URL where
            applicable.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:toolfixio@gmail.com"
              className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
            >
              Contact SportPulse
            </a>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              View contact page
            </Link>
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related legal and trust pages
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

        <p className="mt-8 text-sm text-muted">
          Last updated: June 26, 2026. This Legal Notice / Impressum is provided
          for transparency and provider identification.
        </p>
      </section>
    </main>
  );
}