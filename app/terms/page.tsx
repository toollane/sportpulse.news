import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Use | SportPulse",
  description:
    "Read the SportPulse Terms of Use for this independent sports media and analysis website.",
};

const termsSections = [
  {
    title: "1. Acceptance of these Terms",
    body: [
      "By accessing or using SportPulse, you agree to these Terms of Use. If you do not agree with these terms, you should not use this website.",
      "These Terms apply to sportpulse.news and to the content, pages, features, and services made available through this website.",
    ],
  },
  {
    title: "2. About SportPulse",
    body: [
      "SportPulse is an independent sports media and analysis project. It is built to help fans understand scores, trends, recaps, storylines, and sports context faster.",
      "SportPulse is not affiliated with, endorsed by, or officially connected to any sports league, team, athlete, sportsbook, media company, or governing body.",
    ],
  },
  {
    title: "3. Informational content only",
    body: [
      "The content on SportPulse is provided for general informational, editorial, and entertainment purposes.",
      "SportPulse content should not be treated as professional advice, official league information, financial advice, legal advice, gambling advice, or a guaranteed prediction of future sports outcomes.",
    ],
  },
  {
    title: "4. No betting or gambling service",
    body: [
      "SportPulse is not a sportsbook, gambling operator, paid-picks service, betting platform, or gambling advisory service.",
      "SportPulse does not currently provide betting recommendations, odds comparison services, gambling functionality, or guaranteed predictions.",
      "Any future market-related content should remain informational and editorial in nature unless clearly stated otherwise.",
    ],
  },
  {
    title: "5. Accuracy and availability",
    body: [
      "SportPulse aims to provide useful and clear sports context, but sports information can change quickly. Scores, injuries, schedules, standings, player availability, and public storylines may change after content is published.",
      "SportPulse does not guarantee that all information will always be complete, current, accurate, or available without interruption.",
      "When accuracy is essential, users should verify time-sensitive sports information with official or primary sources.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "The SportPulse website design, written content, structure, branding, and original materials are protected by applicable intellectual property laws unless otherwise stated.",
      "You may use SportPulse for personal, non-commercial reading and reference. You may not copy, reproduce, republish, scrape, redistribute, or commercially exploit substantial parts of the website without permission.",
    ],
  },
  {
    title: "7. Third-party names and references",
    body: [
      "SportPulse may refer to sports leagues, teams, athletes, events, competitions, media coverage, public statistics, or third-party brands for editorial and informational purposes.",
      "All third-party names, trademarks, logos, brands, and intellectual property remain the property of their respective owners. Their mention does not imply endorsement, partnership, sponsorship, or affiliation.",
    ],
  },
  {
    title: "8. External links",
    body: [
      "SportPulse may include links to external websites or third-party services. These links are provided for convenience, context, or reference.",
      "SportPulse is not responsible for the content, privacy practices, availability, accuracy, or policies of external websites.",
    ],
  },
  {
    title: "9. User conduct",
    body: [
      "Users must not misuse SportPulse, attempt to disrupt the website, access systems without permission, scrape content at scale, inject malicious code, or use the website in a way that violates applicable law.",
      "SportPulse may take reasonable steps to protect the website, its infrastructure, and its users from abuse, spam, attacks, or misuse.",
    ],
  },
  {
    title: "10. Future features",
    body: [
      "SportPulse may add new features over time, including newsletters, analytics, sports data integrations, trend tools, fantasy-related content, market intelligence, or other sports intelligence features.",
      "If new features require additional terms, disclosures, or privacy information, SportPulse may update these Terms or provide additional notices.",
    ],
  },
  {
    title: "11. Limitation of liability",
    body: [
      "SportPulse is provided on an as-is and as-available basis. To the fullest extent permitted by applicable law, SportPulse and its operator are not liable for losses, damages, or claims resulting from the use of the website or reliance on its content.",
      "This includes, but is not limited to, errors, omissions, outdated information, interruptions, technical issues, external links, or decisions made based on SportPulse content.",
    ],
  },
  {
    title: "12. Changes to these Terms",
    body: [
      "SportPulse may update these Terms of Use as the website develops, adds features, changes its editorial structure, or updates its legal and operational setup.",
      "The latest version will be available on this page. Continued use of SportPulse after updates means that you accept the revised Terms.",
    ],
  },
];

const relatedLinks = [
  { href: "/about", label: "About SportPulse" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/impressum", label: "Legal Notice / Impressum" },
];

export default function TermsPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="Terms"
            title="Terms of Use"
            description="These Terms explain the rules for using SportPulse, an independent sports media and analysis website built for fast sports context, recaps, trends, and explanations."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Simple summary
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Use SportPulse for sports context, not official decisions.
            </h2>

            <p className="mt-4 leading-8 text-muted">
              SportPulse is designed to help fans understand what happened in
              sports, why it mattered, and what to follow next. It is an
              independent editorial website, not an official data provider or
              betting service.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Important
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              No affiliation. No betting advice.
            </h2>

            <p className="mt-4 leading-8 text-muted">
              SportPulse is not affiliated with leagues, teams, athletes,
              sportsbooks, or media companies. It does not provide gambling
              services, paid picks, or guaranteed predictions.
            </p>
          </section>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <div className="divide-y divide-border">
            {termsSections.map((section, index) => (
              <div
                key={section.title}
                className={index === 0 ? "pb-8" : "py-8"}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {section.title}
                </h2>

                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>

          <p className="mt-4 leading-8 text-muted">
            If you have questions about these Terms of Use, contact SportPulse
            by email.
          </p>

          <div className="mt-6">
            <a
              href="mailto:hello@sportpulse.news"
              className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
            >
              hello@sportpulse.news
            </a>
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related pages
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
          Last updated: June 26, 2026. These Terms are provided for transparency
          and do not replace individual legal advice.
        </p>
      </section>
    </main>
  );
}