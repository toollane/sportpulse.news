import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Why One Play Can Change a Game — SportPulse Explained",
  description:
    "Learn how one key play can change a game's outcome, perception, trend cycle, fan reaction, and media narrative.",
  alternates: { canonical: "/explained/why-one-play-can-change-a-game" },
};

const continueReading = [
  {
    href: "/explained/why-game-context-matters",
    label: "Why Game Context Matters",
  },
  {
    href: "/explained/how-sports-momentum-shifts",
    label: "How Sports Momentum Shifts",
  },
  {
    href: "/recaps/what-is-a-fast-sports-recap",
    label: "What Is a Fast Sports Recap?",
  },
];

export default function WhyOnePlayCanChangeAGamePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="Why One Play Can Change a Game"
        lead="One play can change more than the scoreboard. It can shift control, reshape how fans remember the game, trigger a trend cycle, and become the moment that defines the story afterward."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            A single moment can carry more weight than it seems
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Most games are built from hundreds of actions, but fans often
              remember one. A late turnover. A missed free throw. A defensive
              stop. A save. A penalty. A bad clearance. A two-out hit. A
              sideline decision. One play can become the hinge between two
              different endings.
            </p>
            <p>
              The reason is simple: sports are full of leverage. Not every
              action has the same value. A mistake early in a game can be
              repaired. A mistake in the final minute may decide the result.
              A routine play in a quiet moment can be forgotten. The same play
              under pressure can define the night.
            </p>
            <p>
              SportPulse focuses on these turning points because they help
              explain results quickly. A good{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              should not only tell you who won. It should identify the play
              that changed what the game became.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            One play can change the outcome
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The most obvious effect is the outcome itself. A single play can
              create points, prevent points, extend a possession, end a rally,
              change field position, or force a coach into a new decision. In
              close games, that can be enough.
            </p>
            <p>
              Practical example: imagine a team protecting a narrow lead. A
              clean defensive rebound, interception, blocked shot, save, or
              double play can stop the opponent from taking control. The score
              may only change slightly, or not at all, but the chance of winning
              changes dramatically because the opponent loses one of its best
              opportunities.
            </p>
            <p>
              This is why the final score can hide the real hinge. A game that
              ends by eight points may still have been decided by one play that
              broke a tie, shifted momentum, or forced the trailing side to take
              risks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            One play can change perception
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Sports are not only about what happened. They are also about how
              people interpret what happened. One play can turn a solid
              performance into a heroic one, or a strong game into a source of
              frustration. It can change how fans talk about an athlete, coach,
              team, or season.
            </p>
            <p>
              A star who makes the decisive play may be praised for composure.
              A star who misses it may trend for the wrong reason. A coach who
              makes an aggressive decision may be seen as bold if it works and
              reckless if it fails. The same logic applies to young players,
              veterans, substitutes, closers, goalkeepers, and role players.
            </p>
            <p>
              That perception layer is part of why the{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>{" "}
              section matters. Search behavior often follows the player or
              moment fans are trying to process.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            One play can start a trend cycle
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A key play can travel quickly online because it is easy to share.
              Fans clip it, debate it, replay it, and connect it to bigger
              questions. Was the decision correct? Did the athlete make the
              right read? Was the official right? Did the team reveal a strength
              or weakness?
            </p>
            <p>
              The trend cycle often grows when a play has both clarity and
              ambiguity. Everyone can see that it mattered, but people disagree
              about what it means. That combination fuels search, social media,
              podcasts, highlight shows, and discussion the next day.
            </p>
            <p>
              A useful sports explanation should avoid pretending that every
              viral play is equally important. Some moments are loud but
              shallow. Others genuinely change the game. The job is to separate
              attention from impact.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            One play can change the media narrative
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              After a game, coverage tends to organize itself around the moment
              that explains the result most clearly. That might be fair, or it
              might oversimplify the game. A team may have won because of forty
              minutes of disciplined defense, but one late play becomes the
              headline because it is easier to package.
            </p>
            <p>
              That is not always a problem. A defining play can be a useful
              entry point. The danger is when the story stops there. SportPulse
              uses the{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              format to connect the moment to the wider context: pressure,
              matchup, fatigue, decision-making, and stakes.
            </p>
            <p>
              One play can change a game, but context explains why that play
              had so much power in the first place.
            </p>
          </div>
        </section>

        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Independent project disclaimer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            SportPulse is an independent sports media and analysis project. It
            is not affiliated with, endorsed by, or partnered with any league,
            team, sportsbook, or media company. SportPulse does not provide
            betting picks or gambling recommendations, and the current MVP uses
            static mock content rather than live data.
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
            For daily result context, read{" "}
            <Link
              href="/tonight"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              Tonight
            </Link>
            , or learn more about the project on{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              About SportPulse
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
