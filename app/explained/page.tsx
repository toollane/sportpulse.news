import type { Metadata } from "next";
import Link from "next/link";
import { explainers } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Explained — Why it happened and why it matters",
  description:
    "Clear, jargon-free answers to the sports questions fans are actually asking. Understand the context behind results, trades, streaks, and trends.",
  alternates: { canonical: "/explained" },
};

export default function ExplainedPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Explained
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The context behind the headlines
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Sports make more sense with a little context. Explained answers the
          questions behind the results — why a quiet outcome matters, what a
          move really signals, and how a streak holds up — in plain, trustworthy
          language.
        </p>
      </header>

      <section className="mt-12 space-y-4">
        {explainers.map((item) => (
          <article
            key={item.slug}
            className="rounded-card border border-border bg-surface p-6 sm:p-7"
          >
            <span className="text-xs font-semibold text-accent">
              {item.sport} · {item.topic}
            </span>
            <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground">
              {item.question}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.answer}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Explanation over hot takes
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We are not here for clickbait or noise. Explained exists to help you
          understand the sport more deeply — the strategy, the stakes, and the
          ripple effects that headlines often skip. It pairs naturally with our{" "}
          <Link href="/trending" className="font-semibold text-accent hover:text-accent-strong">
            Trending
          </Link>{" "}
          board and tonight&rsquo;s{" "}
          <Link href="/tonight" className="font-semibold text-accent hover:text-accent-strong">
            results
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
