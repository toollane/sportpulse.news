import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | SportPulse",
  description:
    "Read the SportPulse Privacy Policy, including information about contact requests, server logs, cookies, advertising, analytics, and privacy rights.",
};

const privacySections = [
  {
    title: "Who operates SportPulse",
    body: [
      "SportPulse is operated by Nicklas Wolf, Am Dorfe 3, 37133 Friedland, Germany.",
      "For privacy-related questions, correction requests, or general contact, you can currently reach SportPulse by email at toolfixio@gmail.com.",
    ],
  },
  {
    title: "What this website does",
    body: [
      "SportPulse is an independent sports media and analysis website. The current version primarily provides editorial content, sports explanations, recaps, trend context, and informational pages.",
      "SportPulse does not currently provide user accounts, paid memberships, betting services, sportsbook functionality, or official live sports data feeds.",
    ],
  },
  {
    title: "Server logs and technical data",
    body: [
      "When you visit this website, technical information may be processed automatically by the hosting provider and related infrastructure services. This can include information such as IP address, browser type, device information, requested pages, date and time of access, referrer information, and technical error logs.",
      "This information is used to keep the website secure, available, and technically reliable. It may also help identify errors, abuse, or performance problems.",
    ],
  },
  {
    title: "Contact by email",
    body: [
      "If you contact SportPulse by email, the information you provide may be used to respond to your request. This can include your email address, message content, name if provided, and any additional information you choose to include.",
      "Please do not send sensitive personal information unless it is necessary for your request.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    body: [
      "SportPulse may use cookies or similar technologies for basic website functionality, security, performance, analytics, or future advertising features.",
      "If additional cookie-based tools are added in the future, SportPulse may update this Privacy Policy and, where required, provide additional consent options.",
    ],
  },
  {
    title: "Analytics and performance tools",
    body: [
      "SportPulse may use privacy-conscious analytics or performance tools in the future to understand which pages are useful, how visitors find the website, and how the user experience can be improved.",
      "If analytics tools are added, they should be used to improve the website rather than to create unnecessary user tracking.",
    ],
  },
  {
    title: "Advertising and monetization",
    body: [
      "SportPulse may apply for or use advertising services in the future, including Google AdSense or similar advertising partners.",
      "Advertising partners may use cookies or similar technologies to deliver, measure, and improve ads. If advertising is added, SportPulse will review the required privacy, consent, and disclosure steps before ads are active.",
    ],
  },
  {
    title: "External links",
    body: [
      "SportPulse may link to external websites, services, or sources. SportPulse is not responsible for the privacy practices, content, or availability of external websites.",
      "Visitors should review the privacy policies of external websites before providing personal information there.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "SportPulse is intended for a general sports audience and is not designed to knowingly collect personal information from children.",
      "If you believe that a child has provided personal information through SportPulse, please contact us so the issue can be reviewed.",
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    body: [
      "SportPulse may update this Privacy Policy as the website develops, adds new features, introduces analytics, uses advertising, or changes its technical setup.",
      "The latest version will be available on this page.",
    ],
  },
];

const rights = [
  "request information about personal data that may be processed",
  "request correction of inaccurate information",
  "request deletion where applicable",
  "object to certain processing where applicable",
  "contact SportPulse about privacy-related questions",
];

const relatedLinks = [
  { href: "/about", label: "About SportPulse" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/impressum", label: "Legal Notice / Impressum" },
];

export default function PrivacyPage() {
  return (
    <main className="text-foreground">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <div className="pt-6">
          <SectionHeader
            eyebrow="Privacy"
            title="Privacy Policy"
            description="This Privacy Policy explains how SportPulse handles contact requests, technical website data, cookies, analytics, advertising, and privacy-related inquiries."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Current status
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Simple website. Clear privacy baseline.
            </h2>

            <p className="mt-4 leading-8 text-muted">
              SportPulse is currently a content-focused sports media website.
              It does not offer user accounts, subscriptions, payments, betting
              features, or official live-data products.
            </p>

            <p className="mt-4 leading-8 text-muted">
              As the project grows, this Privacy Policy may be updated to cover
              new tools, analytics, newsletters, advertising, or product
              features.
            </p>
          </section>

          <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Contact
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Privacy questions
            </h2>

            <p className="mt-4 leading-8 text-muted">
              For privacy-related questions or requests, contact SportPulse by
              email.
            </p>

            <div className="mt-6">
              <a
                href="mailto:toolfixio@gmail.com"
                className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-85"
              >
                toolfixio@gmail.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {privacySections.map((section) => (
            <section
              key={section.title}
              className="rounded-card border border-border bg-surface p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>

              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Your privacy rights
          </h2>

          <p className="mt-4 leading-8 text-muted">
            Depending on your location and applicable law, you may have certain
            rights related to personal information. These may include the ability
            to:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {rights.map((right) => (
              <div
                key={right}
                className="rounded-card border border-border bg-surface p-4 text-sm font-semibold text-foreground"
              >
                {right}
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8 text-muted">
            To make a privacy-related request, contact SportPulse by email and
            describe your request clearly.
          </p>
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
          Last updated: June 26, 2026. This Privacy Policy is provided for
          transparency and does not replace individual legal advice.
        </p>
      </section>
    </main>
  );
}