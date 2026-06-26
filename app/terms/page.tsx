import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | SportPulse",
  description:
    "Read the SportPulse terms of use for this independent sports media and analysis project.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Terms
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            These Terms of Use explain the basic rules for using SportPulse,
            an independent sports media and analysis project.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              1. About SportPulse
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is an independent sports media and analysis project
              operated by Nicklas Wolf, Am Dorfe 3, 37133 Friedland, Germany.
              The website provides sports-related explanations, recaps, trend
              coverage, editorial briefings, and informational content.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is not affiliated with, endorsed by, or officially
              connected to any sports league, team, athlete, sportsbook, media
              company, or governing body.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              2. Informational Content Only
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              The content on SportPulse is provided for general informational
              and editorial purposes only. It should not be treated as
              professional, financial, legal, betting, or gambling advice.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              Sports information can change quickly. Scores, schedules,
              injuries, public attention, and trends may become outdated or
              inaccurate. Users should verify important details with official
              sources when accuracy is essential.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              3. No Betting or Gambling Service
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse does not currently provide betting recommendations,
              gambling services, sportsbook functionality, or guaranteed
              predictions. Any future market-related content would be intended
              for informational and editorial analysis only.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              Users are responsible for their own decisions. SportPulse does
              not encourage irresponsible gambling or financial risk-taking.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              4. Accuracy and Availability
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse aims to publish useful, clear, and accurate sports
              analysis. However, we do not guarantee that all information is
              complete, current, or error-free.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              The website may be updated, changed, interrupted, or discontinued
              at any time without notice. We may add, remove, or modify pages,
              features, categories, and editorial formats as the project
              develops.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              5. Intellectual Property
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              Unless otherwise stated, the text, layout, branding, editorial
              structure, and original content on SportPulse are owned by the
              website operator or used with appropriate permission.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              You may view and share SportPulse pages for personal,
              non-commercial purposes. You may not copy, republish, scrape,
              reproduce, or commercially exploit substantial parts of the
              website without prior permission.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              6. Third-Party Names and References
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may refer to sports leagues, teams, athletes, events,
              media companies, or other third parties for editorial and
              informational purposes. These references do not imply sponsorship,
              partnership, endorsement, or official affiliation.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              All third-party names, trademarks, and brands remain the property
              of their respective owners.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              7. External Links
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may link to external websites, official sources, media
              platforms, or third-party services. These links are provided for
              convenience and context.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              We are not responsible for the content, policies, availability,
              or practices of external websites. Users access third-party
              websites at their own discretion.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              8. User Conduct
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              Users agree not to misuse SportPulse, attempt to disrupt the
              website, scrape content at scale, interfere with security, or use
              the website in a way that violates applicable laws or the rights
              of others.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              9. Limitation of Liability
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is provided on an “as is” and “as available” basis.
              To the extent permitted by applicable law, we are not liable for
              losses or damages resulting from use of the website, reliance on
              content, interruptions, errors, or external links.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              10. Changes to These Terms
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              We may update these Terms of Use as SportPulse grows, adds new
              features, enables advertising, launches newsletters, or expands
              into additional sports intelligence categories.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              The latest version will always be available on this page.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              11. Contact
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              For questions about these Terms of Use, contact:
            </p>
            <p className="mt-4 leading-8 text-black/65">
              <a
                href="mailto:toolfixio@gmail.com"
                className="underline decoration-black/25 underline-offset-4 hover:decoration-black"
              >
                toolfixio@gmail.com
              </a>
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Related pages
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/privacy"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/impressum"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Legal Notice / Impressum
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                About SportPulse
              </Link>
            </div>
          </section>

          <p className="pt-4 text-sm leading-6 text-black/45">
            Last updated: June 26, 2026. These Terms of Use are provided as a
            practical website terms page and should be reviewed if SportPulse
            becomes commercial, enables advertising, launches paid products, or
            adds betting-related analysis.
          </p>
        </div>
      </section>
    </main>
  );
}