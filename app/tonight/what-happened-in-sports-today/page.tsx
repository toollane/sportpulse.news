import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What Happened in Sports Today? — SportPulse Tonight",
  description:
    "Learn how fans can catch up on what happened in sports today by checking results, key games, trending athletes, major storylines, injuries, standings impact, and what to watch next.",
  alternates: { canonical: "/tonight/what-happened-in-sports-today" },
};

const continueReading = [
  {
    href: "/tonight/how-to-catch-up-on-sports-fast",
    label: "How to Catch Up on Sports Fast",
  },
  {
    href: "/tonight/how-to-follow-sports-without-watching-every-game",
    label: "How to Follow Sports Without Watching Every Game",
  },
  {
    href: "/trending/why-sports-stories-change-so-fast",
    label: "Why Sports Stories Change So Fast",
  },
];

export default function WhatHappenedInSportsTodayPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Tonight"
        title="What Happened in Sports Today?"
        lead="To understand what happened in sports today, start with the key results, then look for the games that changed a storyline, the athletes gaining attention, the injuries that matter, and what fans should watch next."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The fastest way to understand what happened in sports today is to
            scan key results, identify the turning points, check which athletes
            or teams are trending, note important injuries or role changes, and
            ask what the results change for the next matchup. SportPulse does
            not claim live daily updates in the current version; this page explains
            the catch-up process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Start with the key results
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Not every score deserves the same amount of attention. Some
              results are routine. Others change the way fans understand a team,
              season, or athlete. Start by asking which results shifted
              something: a standings race, a rivalry, a losing streak, a
              comeback story, or pressure on a coach or roster.
            </p>
            <p>
              That is the purpose of{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>
              . The goal is not to recreate a live scoreboard. It is to help
              fans find the results that mattered and understand why.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Find the turning points
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Once you know the result, look for the moment that shaped it. A
              turning point can be a late score, a defensive stop, a tactical
              change, a key injury, a mistake, or a scoring run. The final
              number tells you where the game ended. The turning point tells you
              how it got there.
            </p>
            <p>
              Practical example: a team may win by a comfortable margin, but
              the story may be one five-minute stretch where the opponent lost
              control. That stretch matters more than the final margin because
              it explains the actual movement of the game.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Check trending athletes and storylines
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              After major results, attention usually moves toward people and
              questions. Which athlete broke out? Who made the decisive play?
              Did an interview, injury, trade rumor, or viral clip change the
              conversation?
            </p>
            <p>
              The{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>{" "}
              section helps fans understand why attention is moving. A name can
              trend for many reasons, and the useful part is identifying the
              cause.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Watch injuries and standings impact
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Injuries can change the meaning of a game even when the final
              score looks straightforward. A player leaving early may force a
              rotation change. A returning player may alter the next matchup.
              A team winning while short-handed may reveal depth.
            </p>
            <p>
              Standings impact matters too. A single result can tighten a race,
              protect a position, create pressure, or make the next game more
              important. This is where a short{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              can help connect the score to the bigger picture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            End with what to watch next
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A useful sports catch-up does not stop with what already happened.
              It points forward. Which matchup now matters more? Which player
              role should fans monitor? Which trend might continue? Which team
              needs a response?
            </p>
            <p>
              This forward-looking step turns the sports day into an ongoing
              story. It is also where{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              can add depth by answering why the result matters beyond the
              scoreboard.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Fans search for what happened in sports today because they want a
            fast path back into the conversation. A clear process helps separate
            meaningful results from noise and makes the next game easier to
            understand.
          </p>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Independent disclaimer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            SportPulse is an independent sports media and analysis project. It
            is not affiliated with any league, team, athlete, sportsbook, media
            company, or governing body.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Continue reading
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {continueReading.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border bg-surface p-4 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
