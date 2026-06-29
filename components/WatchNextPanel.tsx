import Link from "next/link";
import type { Explainer, Story } from "@/lib/mockData";

type WatchNextPanelProps = {
  stories: Story[];
  explainers: Explainer[];
};

export default function WatchNextPanel({
  stories,
  explainers,
}: WatchNextPanelProps) {
  const latestStory = stories[0];
  const leadExplainer = explainers[0];

  const watchItems = [
    {
      label: "Context guide",
      title: "See why the result mattered",
      body: "Start with the explanation behind the score instead of reading the same headline twice.",
      href: `/explained/${leadExplainer.slug}`,
      ariaLabel: `Read explainer: ${leadExplainer.question}`,
    },
    {
      label: "Next storyline",
      title: "Track the next pressure point",
      body: "Follow whether the same momentum swing appears again in the next matchup.",
      href: `/tonight/${latestStory.slug}`,
      ariaLabel: `Read story: ${latestStory.title}`,
    },
    {
      label: "Fast follow-up",
      title: "Move from recap to trend board",
      body: "Use a simple sequence for the sports day: final, turning point, trend, and next question.",
      href: "/recaps",
      ariaLabel: "Open fast sports recaps",
    },
  ];

  return (
    <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
            What changed today?
          </span>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The context layer after the final.
          </h2>
        </div>

        <Link
          href="/explained"
          className="group inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
        >
          Explore context guides
          <span
            aria-hidden
            className="ml-1 transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {watchItems.map((item) => (
          <article
            key={item.label}
            className="group relative rounded-2xl border border-border bg-background/70 p-5 transition-colors hover:border-accent/40"
          >
            <Link
              href={item.href}
              className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
              aria-label={item.ariaLabel}
            >
              <span className="sr-only">Open item</span>
            </Link>

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {item.label}
            </span>

            <p className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-accent">
              {item.title}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}