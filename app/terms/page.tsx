import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of SportPulse, including content ownership, acceptable use, disclaimers, and important notices.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Acceptance of terms",
    body: [
      "By accessing or using sportpulse.news (the \u201cSite\u201d), you agree to these Terms of Use. If you do not agree with any part of these terms, please do not use the Site.",
    ],
  },
  {
    heading: "About the Site",
    body: [
      "SportPulse is an independent sports media and analysis project. It is not affiliated with, endorsed by, or partnered with any sports league, team, athlete, or governing body. References to teams, players, or events are for informational and editorial purposes only.",
      "During this early phase, content on the Site consists of original editorial samples created to demonstrate the product. It does not represent live scores, official statistics, or real-time reporting.",
    ],
  },
  {
    heading: "No betting or wagering advice",
    body: [
      "SportPulse does not provide betting tips, picks, odds, predictions, or wagering recommendations of any kind. Nothing on the Site should be interpreted as gambling advice or an inducement to wager. Any decisions you make are your own responsibility.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The original text, design, and layout of the Site are owned by SportPulse and protected by applicable intellectual property laws. You may not copy, reproduce, or redistribute substantial portions of the content without permission.",
      "We do not host copyrighted images, team logos, or player photography. Any trademarks referenced remain the property of their respective owners.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree to use the Site lawfully and not to attempt to disrupt, damage, or gain unauthorized access to the Site or its underlying systems. You agree not to use automated means to scrape or overload the Site in a manner that interferes with its normal operation.",
    ],
  },
  {
    heading: "Accuracy and disclaimers",
    body: [
      "The Site is provided on an \u201cas is\u201d and \u201cas available\u201d basis. While we strive for clear and accurate content, we make no warranties regarding completeness, reliability, or fitness for a particular purpose. Sports information can change quickly, and editorial samples may not reflect real events.",
      "To the fullest extent permitted by law, SportPulse is not liable for any damages arising from your use of, or inability to use, the Site.",
    ],
  },
  {
    heading: "External links",
    body: [
      "The Site may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites, and links do not imply endorsement.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms of Use as the product develops. Continued use of the Site after changes are posted constitutes acceptance of the revised terms. The date below indicates the most recent update.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: June 25, 2026</p>
      </header>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm leading-relaxed text-muted">
        See also our{" "}
        <Link href="/privacy" className="font-semibold text-accent hover:text-accent-strong">
          Privacy Policy
        </Link>
        , or reach us through the{" "}
        <Link href="/contact" className="font-semibold text-accent hover:text-accent-strong">
          contact page
        </Link>
        .
      </p>
    </div>
  );
}
