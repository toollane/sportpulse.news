import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact | SportPulse",
  description:
    "Contact SportPulse for editorial questions, feedback, corrections, privacy requests, and general inquiries.",
};

const contactReasons = [
  {
    title: "Corrections",
    description:
      "If you notice outdated, unclear, or inaccurate information, send the page URL and a short explanation.",
  },
  {
    title: "Editorial feedback",
    description:
      "Share suggestions for better recaps, clearer explanations, or sports topics SportPulse should cover in the future.",
  },
  {
    title: "Privacy requests",
    description:
      "Contact SportPulse about data handling, privacy rights, cookies, advertising, or information related to the Privacy Policy.",
  },
  {
    title: "Partnership inquiries",
    description:
      "SportPulse is independent. Future collaboration requests can be sent by email, but no affiliation is implied.",
  },
];

const usefulLinks = [
  { href: "/about", label: "About SportPulse" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/impressum", label: "Legal Notice / Impressum" },
  { href: "/explained", label: "Explained Stories" },
];

export default function ContactPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="Contact"
            title="Contact SportPulse"
            description="Have a question, correction, suggestion, or privacy-related request? You can reach SportPulse directly by email."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Email
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Reach the operator directly.
            </h2>

            <p className="mt-4 leading-8 text-muted">
              For general questions, feedback, corrections, editorial requests,
              or privacy matters, contact SportPulse by email.
            </p>

            <div className="mt-6">
              <a
                href="mailto:toolfixio@gmail.com"
                className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
              >
                toolfixio@gmail.com
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-muted">
              A dedicated SportPulse domain email address is planned. Until it
              is active, this email is the official contact address for the
              project.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Operator
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Independent sports media project.
            </h2>

            <p className="mt-4 leading-8 text-muted">
              SportPulse is operated by Nicklas Wolf, based in Friedland,
              Germany. Full provider information is available on the Legal
              Notice / Impressum page.
            </p>

            <div className="mt-6">
              <Link
                href="/impressum"
                className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                View Legal Notice / Impressum
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What you can contact us about
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-border bg-surface p-5"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Important note
          </h2>

          <p className="mt-4 leading-8 text-muted">
            SportPulse is an independent sports media and analysis project. It
            is not affiliated with any sports league, team, athlete, sportsbook,
            media company, or governing body.
          </p>

          <p className="mt-4 leading-8 text-muted">
            SportPulse does not currently provide betting recommendations,
            gambling services, paid picks, or sportsbook functionality.
          </p>
        </section>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Useful links
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {usefulLinks.map((link) => (
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