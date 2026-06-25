import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pulse-glow relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pulse" />
            Sports intelligence, distilled
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            The fastest way to understand{" "}
            <span className="text-gradient">what happened in sports today.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            SportPulse is a fast, mobile-first sports briefing platform. We go
            beyond the scoreboard to explain what happened, why it mattered, who
            is trending, and what to watch next — all in clear, readable English.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tonight"
              className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              See tonight&rsquo;s results
            </Link>
            <Link
              href="/trending"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:w-auto"
            >
              What&rsquo;s trending
            </Link>
          </div>

          <dl className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { value: "Daily", label: "Briefing rhythm" },
              { value: "< 2 min", label: "To read the day" },
              { value: "Clear", label: "Context, not clutter" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-tight text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
