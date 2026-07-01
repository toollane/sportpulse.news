import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | SportPulse",
  description:
    "Read the SportPulse Privacy Policy, including information about email contact, technical server logs, cookies, analytics, advertising, and privacy rights.",
};

const currentStatusItems = [
  "No user accounts",
  "No payment system",
  "No contact form storage",
  "No active newsletter signup",
  "No analytics scripts",
  "No advertising scripts",
  "No tracking pixels",
  "No embedded third-party media",
];

const privacySections = [
  {
    title: "Who operates SportPulse",
    body: [
      "SportPulse is operated by Nicklas Wolf, Am Dorfe 3, 37133 Friedland, Germany.",
      "For privacy-related questions, correction requests, or general contact, you can reach SportPulse by email at hello@sportpulse.news.",
    ],
  },
  {
    title: "What SportPulse currently does",
    body: [
      "SportPulse is an independent sports media and analysis website. The current version provides editorial sports content, explanations, recaps, trend context, briefing-style pages, and informational trust pages.",
      "SportPulse does not currently provide user accounts, paid memberships, betting services, sportsbook functionality, official live sports data feeds, or personalized user dashboards.",
    ],
  },
  {
    title: "Technical server logs",
    body: [
      "When you visit this website, technical information may be processed automatically by the hosting provider and related infrastructure services. This can include information such as IP address, browser type, device information, requested pages, date and time of access, referrer information, and technical error logs.",
      "This information is used to keep the website secure, available, reliable, and performant. It may also help identify technical errors, abuse, security issues, or infrastructure problems.",
    ],
  },
  {
    title: "Contact by email",
    body: [
      "SportPulse currently handles contact requests by email only. If you contact SportPulse by email, the information you provide may be used to respond to your request.",
      "This can include your email address, message content, name if provided, and any additional information you choose to include. Please do not send sensitive personal information unless it is necessary for your request.",
    ],
  },
  {
    title: "Contact forms and newsletter signup",
    body: [
      "SportPulse does not currently store contact form submissions through the website.",
      "SportPulse does not currently operate an active newsletter signup form. The briefing newsletter section on the website is a product preview only. Email addresses will only be collected if newsletter delivery, consent handling, and unsubscribe flows are properly connected.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    body: [
      "SportPulse does not currently use analytics cookies, advertising cookies, tracking pixels, embedded marketing tools, or third-party advertising scripts.",
      "The website may use technologies that are strictly necessary for basic website delivery, security, or technical operation. If additional cookie-based tools are added in the future, SportPulse will update this Privacy Policy and, where required, provide consent options before those tools are active.",
    ],
  },
  {
    title: "Analytics and performance tools",
    body: [
      "SportPulse does not currently use Google Analytics, Plausible, Umami, PostHog, Hotjar, Microsoft Clarity, Meta Pixel, or similar analytics and tracking tools.",
      "If privacy-conscious analytics are added in the future, they should be used to improve the website, understand which pages are useful, and identify technical problems rather than to create unnecessary user tracking.",
    ],
  },
  {
    title: "Advertising and monetization",
    body: [
      "SportPulse does not currently display advertising scripts such as Google AdSense, Google Publisher Tags, or similar ad network scripts.",
      "SportPulse may apply for or use advertising services in the future. Before advertising is active, SportPulse will review the required privacy disclosures, consent requirements, cookie information, and technical implementation steps.",
      "If Google AdSense or similar advertising services are added, advertising partners may use cookies or similar technologies to deliver, measure, and improve ads. SportPulse will update this Privacy Policy before such advertising features are active.",
    ],
  },
  {
    title: "AI-assisted editorial features",
    body: [
      "SportPulse may use AI-assisted workflows to help summarize sports context, structure briefings, identify story angles, or improve editorial clarity.",
      "AI-assisted workflows are intended to support editorial production and product development. SportPulse aims to avoid publishing misleading live-data claims, fake results, betting recommendations, or unsupported factual statements.",
    ],
  },
  {
    title: "External links",
    body: [
      "SportPulse may link to external websites, services, or sources. SportPulse is not responsible for the privacy practices, content, security, or availability of external websites.",
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
      "SportPulse may update this Privacy Policy as the website develops, adds new features, introduces analytics, uses advertising, launches a newsletter, connects sports data APIs, or changes its technical setup.",
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

const adSenseReadiness = [
  "Privacy Policy must be updated before ads are active.",
  "A consent solution may be required before advertising or tracking tools are loaded.",
  "Ad scripts must not be added before the consent and policy setup is clear.",
  "ads.txt should be added once a real publisher ID exists.",
  "SportPulse should avoid placing more ads than meaningful content on any page.",
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
            description="This Privacy Policy explains how SportPulse handles email contact, technical website data, cookies, analytics, advertising, AI-assisted editorial workflows, and privacy-related inquiries."
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
              It does not currently use analytics scripts, advertising scripts,
              tracking pixels, user accounts, payment systems, or an active
              newsletter signup.
            </p>

            <p className="mt-4 leading-8 text-muted">
              This means SportPulse does not currently need a marketing-style
              cookie banner. If tracking, advertising, analytics, or newsletter
              tools are added later, this policy and the consent setup will be
              reviewed before those tools are active.
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
                href="mailto:hello@sportpulse.news"
                className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-85"
              >
                hello@sportpulse.news
              </a>
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Current privacy checklist
          </h2>

          <p className="mt-4 leading-8 text-muted">
            The current SportPulse setup is intentionally simple while the
            product is being developed.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {currentStatusItems.map((item) => (
              <div
                key={item}
                className="rounded-card border border-border bg-background p-4 text-sm font-semibold text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

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
            AdSense and future advertising readiness
          </h2>

          <p className="mt-4 leading-8 text-muted">
            SportPulse does not currently display Google AdSense or other ad
            network scripts. If advertising is added in the future, additional
            privacy, consent, cookie, and disclosure steps may be required
            before ads are active.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {adSenseReadiness.map((item) => (
              <div
                key={item}
                className="rounded-card border border-border bg-background p-4 text-sm font-semibold text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

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
                className="rounded-card border border-border bg-background p-4 text-sm font-semibold text-foreground"
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
                className="rounded-card border border-border bg-background p-4 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-8 text-sm text-muted">
          Last updated: July 1, 2026. This Privacy Policy is provided for
          transparency and does not replace individual legal advice.
        </p>
      </section>
    </main>
  );
}