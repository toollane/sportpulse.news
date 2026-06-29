import Link from "next/link";

export default function NewsletterCard() {
  return (
    <div
      id="newsletter"
      className="pulse-glow relative overflow-hidden rounded-card border border-border bg-foreground px-6 py-10 text-background sm:px-10 sm:py-14"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-background/80">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Daily briefing
        </span>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Get the sports day in one fast read
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-background/70">
          SportPulse is building a faster way to catch up on what happened, why
          it mattered, who is trending, and what to watch next. The email
          edition is not open for signup yet — the web briefing is available
          now.
        </p>

        <div className="mx-auto mt-7 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
          {[
            "Fast context after the final",
            "Trending athletes and storylines",
            "What to watch next",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-background/15 bg-background/10 p-4 text-sm font-medium text-background/80"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tonight"
            className="inline-flex items-center justify-center rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Read today&apos;s pulse
          </Link>

          <a
            href="mailto:hello@sportpulse.news?subject=SportPulse%20daily%20briefing%20feedback"
            className="inline-flex items-center justify-center rounded-full border border-background/25 px-5 py-3 text-sm font-semibold text-background transition hover:bg-background/10"
          >
            Send feedback
          </a>
        </div>

        <p className="mt-5 text-xs leading-5 text-background/50">
          No signup form is active yet. SportPulse will only collect newsletter
          emails once delivery and consent handling are properly connected.
        </p>
      </div>
    </div>
  );
}