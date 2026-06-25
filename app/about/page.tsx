import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { editorialPrinciples } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "About — An independent sports media and analysis project",
  description:
    "SportPulse is an independent sports media and analysis project focused on trends, recaps, explanations, and daily briefings. Learn about our mission and editorial approach.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Clarity over clutter",
    body: "We believe a fan should be able to understand the sports day in a couple of minutes. Every page is written to inform quickly, without autoplay video, pop-ups, or noise.",
  },
  {
    title: "Context over hot takes",
    body: "Scores are the entry point, not the value. We focus on explaining what a result means and why it matters, so you leave knowing more than the final number.",
  },
  {
    title: "Trust over clickbait",
    body: "We write in plain, honest English. No misleading headlines, no manufactured outrage — just helpful coverage you can rely on.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="About SportPulse"
        title="Sports, understood faster"
        lead="SportPulse is an independent sports media and analysis project built on a simple idea: the fastest way to understand what happened in sports today should also be the clearest."
      />

      <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          Traditional sports sites can be overwhelming — endless scores,
          autoplay clips, and headlines designed to be clicked rather than read.
          SportPulse takes a different approach. We distill the day into what
          actually matters: the result, the context, and the storyline behind
          it, in a format designed first for your phone.
        </p>
        <p>
          Our coverage is organized around how fans really catch up.{" "}
          <Link href="/tonight" className="font-semibold text-accent hover:text-accent-strong">
            Tonight
          </Link>{" "}
          covers the night&rsquo;s defining results.{" "}
          <Link href="/trending" className="font-semibold text-accent hover:text-accent-strong">
            Trending
          </Link>{" "}
          tracks who and what is gaining attention.{" "}
          <Link href="/recaps" className="font-semibold text-accent hover:text-accent-strong">
            Recaps
          </Link>{" "}
          summarizes games in under a minute, and{" "}
          <Link href="/explained" className="font-semibold text-accent hover:text-accent-strong">
            Explained
          </Link>{" "}
          unpacks the context behind it all.
        </p>
      </div>

      {/* Editorial note */}
      <section className="mt-12 rounded-card border border-accent/30 bg-accent-soft/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Editorial note
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
          SportPulse focuses on four things: sports{" "}
          <strong className="font-semibold">trends</strong>, fast{" "}
          <strong className="font-semibold">recaps</strong>, clear{" "}
          <strong className="font-semibold">explanations</strong>, and a daily{" "}
          <strong className="font-semibold">briefing</strong>. We are an
          independent publication — not a league, a team, or an official source
          — and our role is to help fans make sense of the day, not to report
          live scores or break news. Everything we publish is written to be
          read quickly, fact-based in tone, and free of betting or gambling
          content.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          What we value
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-card border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Our editorial standards
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {editorialPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-card border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          An honest note about this project
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          SportPulse is an early-stage, independent project. It is not
          affiliated with, endorsed by, or partnered with any league, team, or
          governing body. During this initial phase, the stories, recaps, and
          trends shown across the site are original editorial samples created to
          demonstrate the product experience. We do not publish copyrighted
          images, team logos, or player photography, and we do not provide
          betting advice. As the platform grows, we plan to expand coverage with
          properly sourced data and clearly labeled analysis.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          Questions, corrections, or feedback are always welcome. Reach us any
          time at{" "}
          <a
            href="mailto:hello@sportpulse.news"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            hello@sportpulse.news
          </a>{" "}
          or through our{" "}
          <Link href="/contact" className="font-semibold text-accent hover:text-accent-strong">
            contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
