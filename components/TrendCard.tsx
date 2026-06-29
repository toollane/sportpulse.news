import Link from "next/link";
import type { Trend } from "@/lib/mockData";

const momentumStyles: Record<Trend["momentum"], string> = {
  Surging: "bg-emerald-50 text-emerald-700",
  Rising: "bg-sky-50 text-sky-700",
  Steady: "bg-zinc-100 text-zinc-600",
  Cooling: "bg-amber-50 text-amber-700",
};

export default function TrendCard({ trend }: { trend: Trend }) {
  return (
    <article className="group relative flex items-start gap-4 rounded-card border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]">
      <Link
        href="/trending"
        className="absolute inset-0 z-10 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        aria-label={`Open trend: ${trend.name}`}
      >
        <span className="sr-only">Open trend: {trend.name}</span>
      </Link>

      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-foreground text-sm font-semibold text-background tabular-nums">
        {trend.rank}
      </span>

      <div className="relative min-w-0">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-accent">{trend.type}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
          <span className="font-medium text-muted">{trend.sport}</span>
          <span
            className={`rounded-full px-2 py-0.5 font-semibold ${momentumStyles[trend.momentum]}`}
          >
            {trend.momentum}
          </span>
        </div>

        <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-accent">
          {trend.name}
        </h3>

        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {trend.blurb}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Open trend
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </article>
  );
}