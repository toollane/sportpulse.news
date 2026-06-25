import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SportPulse approaches privacy: what information we collect, how it is used, and the choices available to you as a reader.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Overview",
    body: [
      "This Privacy Policy explains how SportPulse (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) approaches privacy in connection with the website at sportpulse.news. We are an independent sports media and analysis project, and we aim to be transparent about how the site works.",
      "SportPulse is currently an early-stage product that displays original editorial sample content. We collect as little information as possible, and this policy describes the categories of data that may be involved as the site operates and grows.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We do not require you to create an account, and we do not ask for sensitive personal information to read the site.",
      "Like most websites, our hosting and infrastructure providers may automatically process limited technical information such as your IP address, browser type, device information, and pages visited. This information is used to operate, secure, and improve the website.",
      "If you choose to submit information through a form on the site \u2014 such as a newsletter signup or contact message \u2014 we would only use that information for the purpose you provided it. During this demo phase, these forms do not store or transmit your information.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "Any information processed through the site is used to deliver and maintain the service, understand general usage trends, prevent abuse, and improve the reading experience. We do not sell your personal information.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "We may use cookies or similar technologies to support core site functionality and to understand aggregate, anonymized usage. If we introduce analytics or advertising partners in the future, we will update this policy and, where required, provide appropriate controls and consent options.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "The site relies on third-party infrastructure providers (for example, hosting and content delivery) to operate. These providers process information on our behalf and are expected to maintain appropriate safeguards.",
    ],
  },
  {
    heading: "Advertising",
    body: [
      "SportPulse does not currently display advertising. We are, however, preparing this policy so it is ready before any advertising is introduced.",
      "If and when we enable advertising, third-party vendors \u2014 potentially including Google \u2014 may use cookies or similar technologies to serve ads based on your prior visits to this or other websites. Third-party vendors and ad networks use these technologies to measure and improve the relevance of ads.",
      "When advertising goes live, you will be able to opt out of personalized advertising through your account settings on participating platforms, and through industry tools such as the controls offered by the Digital Advertising Alliance. We will update this section with specific details and links at that time.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can control cookies through your browser settings, and you can choose not to submit information through optional forms. If you have questions about your data, you can reach us through our contact page.",
    ],
  },
  {
    heading: "Children\u2019s privacy",
    body: [
      "SportPulse is intended for a general audience and is not directed to children under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time as the product evolves. When we make material changes, we will revise the date shown below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
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
        Questions about this policy? Visit our{" "}
        <Link href="/contact" className="font-semibold text-accent hover:text-accent-strong">
          contact page
        </Link>{" "}
        or review our{" "}
        <Link href="/terms" className="font-semibold text-accent hover:text-accent-strong">
          Terms of Use
        </Link>
        .
      </p>
    </div>
  );
}
