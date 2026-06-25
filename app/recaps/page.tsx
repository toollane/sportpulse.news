import type { Metadata } from "next";
import Link from "next/link";
import RecapCard from "@/components/RecapCard";
import { recaps } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Recaps — Short, structured game summaries",
  description:
    "Fast sports recaps you can read in under a minute. Clear, structured summaries that capture the flow of each game, not just the final score.",
  alternates: { canonical: "/recaps" },
};

export default function RecapsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Recaps
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Every game, in under a minute
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          A recap should answer one question fast: what actually happened? Each
          summary below gives you the result, the shape of the game, and the
          detail that decided it — clean enough to scan, complete enough to feel
          caught up.
        </p>
      </header>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recaps.map((recap) => (
          <RecapCard key={recap.slug} recap={recap} />
        ))}
      </section>

      <section className="mt-16 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Built for a quick catch-up
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Our recaps follow a consistent structure so you always know where to
          look: the matchup and final at the top, then a few sentences on how
          the game unfolded. No autoplay video, no clutter — just a readable
          summary designed for a phone screen and a spare moment.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Want the bigger picture behind a result? Head to{" "}
          <Link href="/tonight" className="font-semibold text-accent hover:text-accent-strong">
            Tonight
          </Link>{" "}
          for the defining storylines, or{" "}
          <Link href="/explained" className="font-semibold text-accent hover:text-accent-strong">
            Explained
          </Link>{" "}
          for the context.
        </p>
      </section>
    </div>
  );
}
