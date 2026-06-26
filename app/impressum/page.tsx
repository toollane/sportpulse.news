import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice / Impressum | SportPulse",
  description:
    "Legal notice and provider information for SportPulse, an independent sports media and analysis project based in Germany.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Legal
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
            Legal Notice / Impressum
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            This page provides legal provider information for SportPulse.
            SportPulse is an independent sports media and analysis project
            operated from Germany.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Provider Information
            </h2>

            <div className="mt-5 space-y-2 leading-7 text-black/70">
              <p>
                <strong className="text-black">Operator:</strong> Nicklas Wolf
              </p>
              <p>
                <strong className="text-black">Address:</strong> Am Dorfe 3,
                37133 Friedland, Germany
              </p>
              <p>
                <strong className="text-black">Email:</strong>{" "}
                <a
                  href="mailto:toolfixio@gmail.com"
                  className="underline decoration-black/25 underline-offset-4 hover:decoration-black"
                >
                  toolfixio@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-black">Responsible person:</strong>{" "}
                Nicklas Wolf
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Independent Project
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is an independent sports media and analysis project.
              SportPulse is not affiliated with, endorsed by, or officially
              connected to any sports league, team, athlete, sportsbook, media
              company, or governing body.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Editorial Responsibility
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse publishes sports-related analysis, explanations,
              trend coverage, recaps, and editorial briefings. The content is
              created for informational and editorial purposes only.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              While SportPulse aims to provide useful and accurate information,
              sports data, schedules, trends, and public attention can change
              quickly. Users should verify important information with official
              sources where necessary.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              No Betting Advice
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse does not currently provide betting recommendations,
              gambling advice, or sportsbook services. Any future market-related
              content will be informational and will not replace independent
              judgment or professional advice.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Related Pages
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
            Last updated: June 2026. This legal notice is provided for
            transparency and should be reviewed if the project becomes
            commercial, adds advertising, expands into betting-related content,
            or changes ownership structure.
          </p>
        </div>
      </section>
    </main>
  );
}