import type { Metadata } from "next";
import Link from "next/link";
import TrendCard from "@/components/TrendCard";
import { trends } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Trending — Athletes, teams and topics gaining momentum",
  description:
    "The most talked-about athletes, teams, and storylines in sports right now, ranked with quick context on why interest is climbing.",
  alternates: { canonical: "/trending" },
};

export default function TrendingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Trending
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What sports fans are searching for now
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Attention is a signal. This board tracks the athletes, teams, and
          topics climbing the conversation, with a short note on the
          performance or storyline driving the interest — so a trend always
          comes with its reason.
        </p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {trends.map((trend) => (
          <TrendCard key={trend.rank} trend={trend} />
        ))}
      </section>

      <section className="mt-16 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          How the trend board works
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Each item is labeled as an athlete, a team, or a topic, and tagged
          with a momentum read — surging, rising, steady, or cooling — to show
          direction at a glance. The board is editorial and explanatory by
          design: we want you to leave understanding why something is trending,
          not just that it is.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Curious about the deeper context behind a storyline? Our{" "}
          <Link href="/explained" className="font-semibold text-accent hover:text-accent-strong">
            Explained
          </Link>{" "}
          section breaks down why these moments matter, and{" "}
          <Link href="/recaps" className="font-semibold text-accent hover:text-accent-strong">
            Recaps
          </Link>{" "}
          covers the games behind them.
        </p>
      </section>
    </div>
  );
}
