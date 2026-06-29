import Link from "next/link";
import type { ReactNode } from "react";
import type { SportFocusPageContent } from "@/lib/sportFocusPages";

type SportFocusPageProps = {
  content: SportFocusPageContent;
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted">
      {children}
    </span>
  );
}

function getSearchExampleHref(query: string, fallbackHref: string) {
  const normalizedQuery = query.toLowerCase();

  if (
    normalizedQuery.includes("games tonight") ||
    normalizedQuery.includes("schedule today") ||
    normalizedQuery.includes("who is leading today")
  ) {
    return "/tonight";
  }

  if (
    normalizedQuery.includes("fantasy") ||
    normalizedQuery.includes("waiver") ||
    normalizedQuery.includes("start sit") ||
    normalizedQuery.includes("injury impact") ||
    normalizedQuery.includes("usage")
  ) {
    return "/fantasy";
  }

  if (
    normalizedQuery.includes("vs") ||
    normalizedQuery.includes("leaderboard") ||
    normalizedQuery.includes("score")
  ) {
    return "/recaps";
  }

  return fallbackHref;
}

export default function SportFocusPage({ content }: SportFocusPageProps) {
  return (
    <main className="bg-background text-foreground">
      <section className="pulse-glow relative overflow-hidden border-b border-border/70">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_430px] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/75 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
              {content.eyebrow}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {content.description}
            </p>

            <p className="mt-4 max-w-2xl rounded-card border border-border bg-surface/80 p-4 text-sm font-semibold leading-6 text-foreground shadow-sm">
              {content.benefit}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={content.primaryCta.href}
                className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                {content.primaryCta.label}
              </Link>
              <Link
                href={content.secondaryCta.href}
                className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition hover:border-accent/40 hover:text-accent"
              >
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-border bg-surface/90 p-3 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.55)] backdrop-blur">
            <div className="rounded-[1.25rem] border border-border bg-background/80 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Briefing preview
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    {content.preview.title}
                  </h2>
                </div>
                <Badge>{content.preview.badge}</Badge>
              </div>

              <div className="mt-6 grid gap-3">
                {content.preview.rows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-border bg-surface p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {row.label}
                        </p>
                        <p className="mt-2 text-base font-semibold">
                          {row.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {row.text}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-accent">
                        {row.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 lg:py-16">

        <section className="rounded-card border border-border bg-surface p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                You searched. SportPulse answers.
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {content.searchTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              {content.searchText}
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
  {content.searchExamples.map((example) => {
    const href = getSearchExampleHref(
      example.query,
      content.primaryCta.href
    );

    return (
      <Link
        key={example.query}
        href={href}
        aria-label={`Open SportPulse context for ${example.query}`}
        className="group block rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Search
        </p>
        <h3 className="mt-2 text-base font-semibold">
          {example.query}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          {example.answer}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Open context
          <span
            aria-hidden
            className="transition group-hover:translate-x-0.5"
          >
            {"\u2192"}
          </span>
        </p>
      </Link>
    );
  })}
</div>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                The 30-second read
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {content.readTitle}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {content.readText}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.readSteps.map((step, index) => (
                <article
                  key={step.label}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-xs font-semibold text-background">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold">{step.label}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Why not just check the score?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {content.comparisonTitle}
            </h2>
            <p className="mt-4 leading-7 text-muted">
              {content.comparisonText}
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background p-5">
              <p className="text-sm font-semibold text-muted">
                Raw scoreboard
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {content.scoreboardItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-accent/25 bg-background p-5">
              <p className="text-sm font-semibold text-accent">
                SportPulse context
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {content.sportPulseItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Sport-specific modules
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                {content.modulesTitle}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {content.modulesText}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <p className="text-sm font-semibold">{module.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {module.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-[1fr_1fr]">
          <article className="rounded-card border border-border bg-surface p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Trust note
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              No fake live-data claims.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              {content.trustText}
            </p>
          </article>

          <article className="rounded-card border border-border bg-[#080808] p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Next read
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              {content.finalCtaTitle}
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              {content.finalCtaText}
            </p>
            <div className="mt-6">
              <Link
                href={content.finalCta.href}
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                {content.finalCta.label}
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}