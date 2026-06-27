import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What Is a Turning Point in Sports? — SportPulse Explained",
  description:
    "Learn what a turning point is in sports, how it changes a game, and how fans can identify one through momentum, tactics, mistakes, injuries, pressure, and late execution.",
  alternates: { canonical: "/explained/what-is-a-turning-point-in-sports" },
};

const continueReading = [
  {
    href: "/explained/how-sports-momentum-shifts",
    label: "How Sports Momentum Shifts",
  },
  {
    href: "/explained/why-one-play-can-change-a-game",
    label: "Why One Play Can Change a Game",
  },
  {
    href: "/recaps/how-to-read-a-game-recap",
    label: "How to Read a Game Recap",
  },
];

export default function WhatIsATurningPointInSportsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="What Is a Turning Point in Sports?"
        lead="A turning point is the moment or stretch when a game begins to move in a new direction. It can come from one play, one mistake, one adjustment, or one pressure sequence that changes how the rest of the game feels."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A turning point in sports is the moment that changes control,
            momentum, confidence, or decision-making. It may be a goal, stop,
            turnover, injury, tactical switch, missed chance, or late-game
            execution sequence. The final score tells you who won, but the
            turning point explains when the game started to become that result.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Turning points are about control
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A turning point does not have to be the loudest highlight. It is
              the moment when control changes. A team may still trail on the
              scoreboard, but the game can begin to feel different because it
              starts creating better chances, defending with more confidence, or
              forcing the opponent into hurried decisions.
            </p>
            <p>
              Practical example: a basketball team may be down eight points
              before forcing three turnovers in four possessions. The score has
              not fully flipped yet, but the rhythm has. In soccer, a team might
              switch shape and suddenly stop allowing counterattacks. In
              baseball, a pitcher escaping a bases-loaded jam can change the
              energy of the whole dugout.
            </p>
            <p>
              This is why SportPulse recaps look for the shift behind the
              result. A good{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              should show how the game moved, not just where it ended.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Momentum shifts can reveal the turning point
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Momentum is often the first clue that a turning point has
              happened. Fans notice when one side starts winning loose balls,
              creating cleaner looks, controlling territory, or getting louder
              support from the crowd. The scoreboard may not show the change
              immediately, but the game begins to tilt.
            </p>
            <p>
              Momentum can come from pressure, but it usually has a cause. It
              might be a tactical change, a tired opponent, a defensive stand,
              or a star player making two difficult plays in a row. The key is
              to identify what started the shift. That turns a vague feeling
              into a useful explanation.
            </p>
            <p>
              For more on that layer, read{" "}
              <Link
                href="/explained/how-sports-momentum-shifts"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                How Sports Momentum Shifts
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Mistakes, injuries, and tactical changes matter
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Some turning points are created by mistakes. A turnover, dropped
              catch, missed clearance, poor substitution, rushed shot, or failed
              decision under pressure can hand the opponent control. These
              moments become memorable because they change both the score and
              the emotional tone of the game.
            </p>
            <p>
              Injuries can also become turning points, especially when they
              force a team to change roles or tactics. A key defender leaving
              can open space. A playmaker being limited can slow an attack. A
              starter exiting can force a bench player into pressure minutes.
            </p>
            <p>
              Tactical changes are quieter but just as important. A coach may
              press higher, change matchups, slow the pace, switch defensive
              assignments, or move a player into a different space. If the
              opponent does not adjust, the game can change quickly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Late-game execution can define the story
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Many turning points happen late because pressure makes every
              decision heavier. A final possession, a set piece, a save, a
              two-out at-bat, a penalty kill, or a late substitution can decide
              both the outcome and the narrative that follows.
            </p>
            <p>
              Late execution reveals who stayed composed. It also shapes what
              fans search for afterward. The athlete who made the play may
              trend. The coach who made the decision may be questioned. The team
              that failed to close may become a topic on{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Identifying the turning point helps fans understand a game faster.
            It explains why the result happened, which decisions mattered, and
            what might carry into the next matchup. A turning point turns a
            final score into a story.
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
