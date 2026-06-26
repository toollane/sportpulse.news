import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | SportPulse",
  description:
    "Contact SportPulse for editorial questions, feedback, corrections, privacy requests, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Contact
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
            Contact SportPulse
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Have a question, correction, suggestion, or privacy-related request?
            You can reach SportPulse directly by email.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Email
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              For general questions, feedback, corrections, editorial requests,
              or privacy matters, contact:
            </p>

            <a
              href="mailto:toolfixio@gmail.com"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              toolfixio@gmail.com
            </a>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              What you can contact us about
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Corrections</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  If you notice outdated, unclear, or inaccurate information,
                  please send the page URL and a short explanation.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Editorial feedback</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Share suggestions for better recaps, clearer explanations,
                  or topics SportPulse should cover in the future.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Privacy requests</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Contact us if you have questions about data handling,
                  privacy rights, or information related to our Privacy Policy.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="font-semibold">Partnership inquiries</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  SportPulse is independent. Future collaboration requests can
                  be sent by email, but no affiliation is implied.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Important note
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is an independent sports media and analysis project.
              It is not affiliated with any sports league, team, athlete,
              sportsbook, media company, or governing body.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse does not currently provide betting recommendations,
              gambling services, paid picks, or sportsbook functionality.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Operator
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is operated by Nicklas Wolf, based in Friedland,
              Germany. Full provider information is available on the Legal
              Notice / Impressum page.
            </p>

            <div className="mt-6">
              <Link
                href="/impressum"
                className="inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                View Legal Notice / Impressum
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Useful links
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/about"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                About SportPulse
              </Link>
              <Link
                href="/privacy"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Terms of Use
              </Link>
              <Link
                href="/explained"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Explained Stories
              </Link>
            </div>
          </section>

          <p className="pt-4 text-sm leading-6 text-black/45">
            Last updated: June 26, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}