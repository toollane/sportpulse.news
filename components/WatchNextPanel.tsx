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
      label: "Why it matters",
      title: leadExplainer.question,
      body: leadExplainer.answer,
      href: "/explained",
    },
    {
      label: "Next storyline",
      title: latestStory.title,
      body: "Track whether the same pressure point shows up again in the next matchup.",
      href: "/tonight",
    },
    {
      label: "Best follow-up",
      title: "Read the recap, then check the trend board",
      body: "A fast sequence for busy fans: final, turning point, who is trending, what changed.",
      href: "/recaps",
    },
  ];

  return (
    <div className="rounded-card border border-border bg-surface p-6 sm:p-8">
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
          More explainers
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
          <Link
            key={item.label}
            href={item.href}
            className="group rounded-2xl border border-border bg-background/70 p-5 transition-colors hover:border-accent/40"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {item.label}
            </span>
            <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.body}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
