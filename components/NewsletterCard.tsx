import Link from "next/link";

export default function NewsletterCard() {
  return (
    <section
      id="newsletter"
      className="scroll-mt-24 rounded-card border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
            Briefing newsletter
          </span>

          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get the SportPulse briefing.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            SportPulse is preparing an email briefing for fans who want the
            sports day in one fast read: what happened, why it mattered, who is
            trending, and what to watch next.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold text-foreground">
              Newsletter signup is coming soon.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Email collection is not active yet. SportPulse will only add a
              signup form once delivery, consent handling, and unsubscribe flows
              are properly connected.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tonight"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Read today&apos;s pulse
            </Link>

            <a
              href="mailto:hello@sportpulse.news?subject=SportPulse%20briefing%20feedback"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              Send feedback
            </a>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-border bg-background p-4">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Future briefing format
            </p>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "What happened",
                  text: "The result, the key swing, and the moment that changed the story.",
                },
                {
                  label: "Why it mattered",
                  text: "The context behind the score, trend, injury, or player performance.",
                },
                {
                  label: "What to watch next",
                  text: "The next matchup, storyline, fantasy signal, or player to follow.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}