import Link from "next/link";
import type { Trend } from "@/lib/mockData";

const momentumStyles: Record<Trend["momentum"], string> = {
  Surging: "bg-emerald-50 text-emerald-700",
  Rising: "bg-sky-50 text-sky-700",
  Steady: "bg-zinc-100 text-zinc-600",
  Cooling: "bg-amber-50 text-amber-700",
};

export default function MomentumBoard({ trends }: { trends: Trend[] }) {
  const leadTrend = trends[0];
  const supportingTrends = trends.slice(1, 6);

  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <Link
        href="/trending"
        className="group overflow-hidden rounded-card border border-border bg-foreground p-6 text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-32px_rgba(15,23,42,0.8)]"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-background/70">
            #{leadTrend.rank} signal
          </span>
          <span className="rounded-full bg-pulse/20 px-3 py-1 text-xs font-semibold text-background">
            {leadTrend.momentum}
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">
          {leadTrend.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-background/70">
          {leadTrend.blurb}
        </p>
        <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-background">
          Open the trend board
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </Link>

      <div className="rounded-card border border-border bg-surface p-3">
        <ol className="divide-y divide-border">
          {supportingTrends.map((trend) => (
            <li key={trend.rank}>
              <Link
                href="/trending"
                className="group grid gap-3 rounded-2xl px-3 py-4 transition-colors hover:bg-accent-soft/40 sm:grid-cols-[42px_1fr_auto] sm:items-center"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-background text-sm font-semibold text-foreground tabular-nums">
                  {trend.rank}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-foreground group-hover:text-accent">
                    {trend.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {trend.type} · {trend.sport}
                  </span>
                </span>
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${momentumStyles[trend.momentum]}`}
                >
                  {trend.momentum}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
