import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — An independent sports intelligence project",
  description:
    "SportPulse is an independent sports media and analysis project. Learn about our mission to make understanding the sports day fast, clear, and trustworthy.",
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
      <header>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          About SportPulse
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Sports, understood faster
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          SportPulse is an independent sports media and analysis project built
          on a simple idea: the fastest way to understand what happened in
          sports today should also be the clearest.
        </p>
      </header>

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
          Have feedback or a question? We&rsquo;d love to hear from you on our{" "}
          <Link href="/contact" className="font-semibold text-accent hover:text-accent-strong">
            contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
