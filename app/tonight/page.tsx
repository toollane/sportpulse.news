import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProseCard from "@/components/ProseCard";
import StoryCard from "@/components/StoryCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import { stories, sectionFaqs } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Tonight — Key results and the stories behind them",
  description:
    "Your daily sports pulse: the night's defining results explained clearly. Winners, turning points, and the numbers that actually mattered — in a two-minute read.",
  alternates: { canonical: "/tonight" },
};

const faqs = sectionFaqs.tonight;

export default function TonightPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
      />

      <PageHeader
        eyebrow="Tonight"
        title="What happened tonight, explained"
        lead="The scoreboard tells you who won. SportPulse tells you how and why. Each entry below pairs a result with the turning point that decided it, so you can catch up on the night in a couple of minutes."
      />

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-7">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Catch-up guide
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Short on time? Start with a practical guide to reading the sports day
          quickly: winners, turning points, trending players, fast recaps, and
          what to watch next.
        </p>
        <Link
          href="/tonight/how-to-catch-up-on-sports-fast"
          className="group mt-5 block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 sm:max-w-md"
        >
          <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
            How to Catch Up on Sports Fast
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-muted">
            A busy fan&rsquo;s guide to understanding what happened without
            reading an endless feed.
          </span>
        </Link>
        <Link
          href="/tonight/what-to-watch-next-in-sports"
          className="group mt-4 block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 sm:max-w-md"
        >
          <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
            What to Watch Next in Sports
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-muted">
            How to choose the next games, rivalries, athletes, injuries, and
            momentum swings worth following.
          </span>
        </Link>
        <Link
          href="/tonight/how-to-follow-sports-without-watching-every-game"
          className="group mt-4 block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 sm:max-w-md"
        >
          <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
            How to Follow Sports Without Watching Every Game
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-muted">
            How to use recaps, score context, trends, key players, and quick
            briefings to stay informed.
          </span>
        </Link>
      </section>

      <section className="mt-12" aria-label="Tonight's key results">
        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-4">
        <ProseCard
          title="What you get from the daily pulse"
          paragraphs={[
            "The daily pulse is designed for the fan who has a few minutes, not an hour. Instead of an endless feed of every final score, we surface the handful of results that genuinely changed something — a standing, a streak, a rivalry, or the direction of a season — and explain the moment that mattered most.",
            "Each story is written to stand on its own. You get the outcome, the context around it, and a clear sense of why it is worth your attention. The aim is simple: you should be able to read the page once and feel genuinely caught up on the night.",
            "Think of it as the briefing you would want from a friend who watched everything — quick, clear, and focused on what actually moved.",
          ]}
        />

        <ProseCard
          title="How we choose what to cover"
          paragraphs={[
            "We prioritize signal over volume. A result earns a place on the page when it shifts something meaningful, reveals a trend worth tracking, or answers a question fans are already asking.",
            "That editorial filter is the whole point. It keeps the page fast to read and ensures that every item carries real context rather than just a number.",
          ]}
        >
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/recaps"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Read the fast recaps →
            </Link>
            <Link
              href="/explained"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Understand why it mattered →
            </Link>
            <Link
              href="/trending"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              See what&rsquo;s trending →
            </Link>
          </div>
        </ProseCard>
      </div>

      <section className="mt-16 max-w-3xl" aria-label="Frequently asked questions">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Tonight, answered
        </h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Want the night delivered to your inbox?{" "}
          <Link
            href="/#newsletter"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            Get the daily briefing
          </Link>{" "}
          or{" "}
          <Link
            href="/about"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            learn more about SportPulse
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
