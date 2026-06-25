import Link from "next/link";
import type { Feature } from "@/lib/mockData";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link
      href={feature.href}
      className="group relative flex flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
        {feature.badge}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {feature.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {feature.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Explore
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
