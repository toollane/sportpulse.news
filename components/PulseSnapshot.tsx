import Link from "next/link";
import type { Recap, Story, Trend } from "@/lib/mockData";

type PulseSnapshotProps = {
  stories: Story[];
  trends: Trend[];
  recaps: Recap[];
};

export default function PulseSnapshot({
  stories,
  trends,
  recaps,
}: PulseSnapshotProps) {
  const topStory = stories.find((story) => story.featured) ?? stories[0];
  const topTrend = trends[0];
  const latestFinal = recaps[0];
  const winner =
    latestFinal.awayScore > latestFinal.homeScore
      ? latestFinal.away
      : latestFinal.home;

  const signals = [
    {
      label: "Top story",
      value: topStory.title,
      href: "/tonight",
    },
    {
      label: "Trending now",
      value: topTrend.name,
      href: "/trending",
    },
    {
      label: "Latest final",
      value: `${winner} ${Math.max(latestFinal.awayScore, latestFinal.homeScore)}-${Math.min(
        latestFinal.awayScore,
        latestFinal.homeScore,
      )}`,
      href: "/recaps",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
              Today in 30 seconds
            </span>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              A quick read on the result, the attention, and the next question.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              SportPulse currently uses editorial briefings. The format
              shows how a daily briefing can turn scores into context without
              pretending to be a live scores feed.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {signals.map((signal) => (
                <Link
                  key={signal.label}
                  href={signal.href}
                  className="group rounded-2xl border border-border bg-background/70 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {signal.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-snug text-foreground group-hover:text-accent">
                    {signal.value}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Briefing mode
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  What changed today?
                </h3>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                Editorial briefing
              </span>
            </div>

            <ol className="mt-6 space-y-4">
              {[
                "The night’s lead story came from a late swing, not just the final score.",
                "Attention is moving toward player form, roster decisions, and what comes next.",
                "The best next read is the recap, then the why-it-matters explainer.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
