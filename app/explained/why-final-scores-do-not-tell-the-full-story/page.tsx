import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Why Final Scores Do Not Tell the Full Story — SportPulse Explained",
  description:
    "Why final scores can hide the real story of a game, including injuries, momentum, late runs, garbage time, tactics, foul trouble, pressure, and lineup decisions.",
  alternates: {
    canonical: "/explained/why-final-scores-do-not-tell-the-full-story",
  },
};

const continueReading = [
  {
    href: "/explained/why-game-context-matters",
    label: "Why Game Context Matters",
  },
  {
    href: "/recaps/how-to-read-a-game-recap",
    label: "How to Read a Game Recap",
  },
  {
    href: "/tonight/how-to-catch-up-on-sports-fast",
    label: "How to Catch Up on Sports Fast",
  },
];

export default function WhyFinalScoresDoNotTellTheFullStoryPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="Why Final Scores Do Not Tell the Full Story"
        lead="A final score is useful, but it is only the last line of a much longer story. To understand a game, fans need the context behind the number: who was available, when momentum changed, and what happened before the scoreboard stopped moving."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Final scores do not tell the full story because they flatten every
            phase of a game into one number. They rarely show injuries, schedule
            fatigue, foul trouble, late-game decisions, garbage-time scoring,
            tactical changes, lineup choices, or pressure moments. A score tells
            you who won. Context tells you how the game was actually won.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            The margin can be misleading
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A ten-point final can look comfortable, but the game may have
              been tied with two minutes left. A three-goal result can look
              dominant, but two goals may have arrived after the opponent
              chased the game and left space behind. A baseball score can look
              one-sided after a late inning even if the first seven innings were
              controlled by pitching.
            </p>
            <p>
              This is why a{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                game recap
              </Link>{" "}
              should explain the shape of the game, not only the final number.
              Fans need to know whether the winner controlled the night, escaped
              late pressure, or pulled away after the result was already mostly
              decided.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Injuries and lineup decisions change everything
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Availability is one of the biggest things a score hides. If a key
              player sits, leaves early, returns from injury, or plays limited
              minutes, the result needs a different reading. A team winning
              without a central creator may reveal depth. A team losing after a
              starter exits early may reveal how fragile its rotation is.
            </p>
            <p>
              Lineup decisions matter too. A coach may test a smaller group,
              protect an injured player, change matchups, rest a veteran, or use
              an unfamiliar pairing. Those choices can shape the result long
              before the final score becomes official.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Momentum can shift before the score reflects it
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Fans often feel a game turning before the scoreboard changes. A
              run of defensive stops, a wave of pressure, a string of turnovers,
              or a tactical adjustment can move control from one side to the
              other. The score may remain close, but the game is already leaning
              in a new direction.
            </p>
            <p>
              Practical example: one team may trail by only four points but look
              completely out of rhythm because its offense is no longer creating
              clean looks. The final score might show a narrow loss. The real
              story is that momentum moved earlier, and the trailing side never
              solved the problem.
            </p>
            <p>
              This is why SportPulse treats momentum as part of the explanation
              layer in{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>
              , not as a vague feeling.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Fouls, pressure, tactics, and garbage time
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Foul trouble can remove an important defender, force a team to
              change its rotation, or make a star less aggressive. Late-game
              pressure can expose decision-making. Tactical changes can unlock
              space, slow tempo, or remove a preferred option. None of that is
              obvious from the score alone.
            </p>
            <p>
              Garbage time can also distort the final number. A team may extend
              the margin after the competitive portion is effectively over, or
              the losing side may trim the score against reserves. The final
              number still counts, but it may not describe the quality of the
              contest.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Understanding the story behind a score helps fans avoid shallow
            conclusions. It explains why one result feels convincing, another
            feels fragile, and another raises more questions than answers. That
            is the value of combining scores with context, recaps, and trend
            awareness on{" "}
            <Link
              href="/tonight"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              Tonight
            </Link>
            .
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
