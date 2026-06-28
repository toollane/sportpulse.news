import Link from "next/link";
import { recaps, stories, trends } from "@/lib/mockData";

export default function HeroSection() {
  const topStory = stories.find((story) => story.featured) ?? stories[0];
  const topTrend = trends[0];
  const latestFinal = recaps[0];
  const latestWinner =
    latestFinal.awayScore > latestFinal.homeScore
      ? latestFinal.away
      : latestFinal.home;
  const awayWins = latestFinal.awayScore > latestFinal.homeScore;
  const homeWins = latestFinal.homeScore > latestFinal.awayScore;

  return (
    <section className="pulse-glow relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pulse" />
            Sports intelligence briefing
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Understand the sports day{" "}
            <span className="text-gradient">before the feed gets noisy.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            SportPulse turns scores into a fast, mobile-first briefing: what
            happened, why it mattered, who is trending, and what to watch next.
            SportPulse currently uses original editorial briefings, not automated live scores.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tonight"
              className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              Open today&rsquo;s pulse
            </Link>
            <Link
              href="/trending"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:w-auto"
            >
              Scan momentum
            </Link>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { value: "30 sec", label: "First scan" },
              { value: "4 lanes", label: "Results, trends, recaps, why" },
              { value: "No noise", label: "Context over clutter" },
            ].map((stat) => (
              <div key={stat.label}>
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

        <div className="rounded-[1.5rem] border border-border bg-surface/85 p-3 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="rounded-[1.25rem] border border-border bg-background/80 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  SportPulse dashboard
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  Today in 30 seconds
                </h2>
              </div>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
                Editorial
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Top story
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                  {topStory.title}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Trending now
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    {topTrend.name}
                  </p>
                  <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    {topTrend.momentum}
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Latest final
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span
                        className={
                          awayWins
                            ? "font-semibold text-foreground"
                            : "font-medium text-muted"
                        }
                      >
                        {latestFinal.away}
                      </span>
                      <span
                        className={`tabular-nums ${
                          awayWins
                            ? "font-bold text-foreground"
                            : "font-semibold text-muted"
                        }`}
                      >
                        {latestFinal.awayScore}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span
                        className={
                          homeWins
                            ? "font-semibold text-foreground"
                            : "font-medium text-muted"
                        }
                      >
                        {latestFinal.home}
                      </span>
                      <span
                        className={`tabular-nums ${
                          homeWins
                            ? "font-bold text-foreground"
                            : "font-semibold text-muted"
                        }`}
                      >
                        {latestFinal.homeScore}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted">
                    Winner: {latestWinner}
                  </p>
                </div>
              </div>

              <Link
                href="/tonight"
                className="flex items-center justify-between rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Read the full briefing
                <span aria-hidden>â†’</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
