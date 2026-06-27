import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How to Read a Game Recap — SportPulse Recaps",
  description:
    "Learn how to read a game recap quickly by finding the turning point, key players, score context, momentum shifts, what changed, and what comes next.",
  alternates: { canonical: "/recaps/how-to-read-a-game-recap" },
};

const continueReading = [
  {
    href: "/recaps/what-is-a-fast-sports-recap",
    label: "What Is a Fast Sports Recap?",
  },
  {
    href: "/recaps/why-short-sports-recaps-are-useful",
    label: "Why Short Sports Recaps Are Useful",
  },
  {
    href: "/explained/why-one-play-can-change-a-game",
    label: "Why One Play Can Change a Game",
  },
];

export default function HowToReadAGameRecapPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Recaps"
        title="How to Read a Game Recap"
        lead="A good game recap is not just a smaller version of a full article. It is a fast map of the result: what happened, when it turned, who shaped it, what changed, and what fans should watch next."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Start with score context
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The first job of any recap is to make the result clear. Who
              played, who won, and how close was it? But reading a recap well
              means looking past the final number. A five-point game can be a
              one-possession battle until free throws stretch the margin. A
              three-goal result can hide a match that was level for most of the
              night. A low-scoring final can mean strong defense, poor
              execution, or both.
            </p>
            <p>
              Score context tells you whether the result matches the story. If
              a team led wire to wire, that says something different than a late
              comeback. If a favorite survived rather than controlled the game,
              the recap should help you notice the difference.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Find the turning point
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The turning point is often the most valuable part of a recap. It
              is the moment or stretch when the game changed direction. That
              might be a defensive stop, a scoring run, a pitching change, a
              tactical substitution, a turnover, a save, or a sequence where one
              side started winning the physical or strategic battle.
            </p>
            <p>
              Practical example: a basketball recap might mention a 14-2 run
              after halftime. The important question is what caused it. Did the
              defense force rushed shots? Did the offense find a matchup it
              liked? Did a bench unit change the pace? The turning point matters
              because it explains the path from score to result.
            </p>
            <p>
              If the recap does not identify a turning point, it may still be
              useful, but it leaves the reader with less understanding. The best
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                {" "}
                SportPulse recaps
              </Link>{" "}
              are built around that shift.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Identify the key players
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Key players are not always the highest scorers. Sometimes the
              most important athlete is the defender who changed a matchup, the
              substitute who stabilized the game, the goalkeeper who kept the
              score close, or the pitcher who escaped a difficult inning.
            </p>
            <p>
              A smart recap helps separate volume from impact. It shows who
              made the result possible and why. That context is useful when a
              player starts gaining attention on{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>
              , because it explains whether the buzz came from a complete
              performance, one decisive moment, or a larger role change.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Watch for momentum shifts
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Momentum shifts show how the game felt while it was happening.
              A recap should help you understand whether one team controlled
              the rhythm, whether pressure built slowly, or whether the game
              flipped quickly after a mistake or tactical change.
            </p>
            <p>
              Momentum is not magic. It usually comes from something specific:
              stops, turnovers, better shot quality, crowd energy, fatigue, a
              formation change, or a star-player sequence. Reading for that
              cause helps you understand whether the shift was repeatable or
              just one volatile stretch.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Ask what changed and what comes next
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The most useful recaps connect the game to the next question. Did
              the result change standings, confidence, rotation decisions,
              tactical plans, or the way fans see a player? Did an injury,
              return, or role change make the next matchup more important?
            </p>
            <p>
              This is where recaps connect to{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              and{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>
              . A recap tells you what happened. The next layer tells you why
              it mattered and what is worth watching after the final whistle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Reading a recap well helps busy fans avoid shallow conclusions. You
            can understand the result faster, spot the moment that mattered, and
            know whether the game changed anything beyond the scoreboard. That
            is the difference between seeing a score and understanding a game.
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
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Learn more about SportPulse on the{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              About
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </article>
  );
}
