import Link from "next/link";
import type { Feature } from "@/lib/mockData";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]">
      <Link
        href={feature.href}
        className="absolute inset-0 z-10 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        aria-label={`Open ${feature.title}`}
      >
        <span className="sr-only">Open {feature.title}</span>
      </Link>

      <div className="relative flex h-full flex-col">
        <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
          {feature.badge}
        </span>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
          {feature.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {feature.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Explore
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </article>
  );
}