import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How Injuries Change the Story of a Game — SportPulse Explained",
  description:
    "Learn how injuries affect games beyond the scoreboard, including rotations, tactics, pressure, player roles, momentum, media attention, fantasy impact, and what fans should watch next.",
  alternates: {
    canonical: "/explained/how-injuries-change-the-story-of-a-game",
  },
};

const continueReading = [
  {
    href: "/explained/why-game-context-matters",
    label: "Why Game Context Matters",
  },
  {
    href: "/trending/why-players-trend-after-one-game",
    label: "Why Players Trend After One Game",
  },
  {
    href: "/tonight/what-to-watch-next-in-sports",
    label: "What to Watch Next in Sports",
  },
];

export default function HowInjuriesChangeTheStoryOfAGamePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="How Injuries Change the Story of a Game"
        lead="Injuries change more than availability. They can alter rotations, tactics, confidence, pressure, player roles, fan reaction, and what the result means after the final score."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Injuries change the story of a game because they force teams to
            solve new problems in real time. They affect player roles, tactical
            plans, substitutions, minutes, confidence, media attention, and the
            way fans interpret the result. The scoreboard may stay simple, but
            the game context becomes more complicated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Injuries change rotations and roles
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The first impact of an injury is usually structural. A starter
              leaves, a substitute enters earlier than planned, a defender moves
              to a new assignment, or a bench player has to handle pressure
              minutes. The team is not only replacing talent. It is replacing a
              role.
            </p>
            <p>
              Practical example: if a primary ball-handler leaves a basketball
              game, another player may have to create offense. If a central
              defender leaves a soccer match, the team may defend deeper. If a
              starting pitcher exits early, the bullpen plan changes for that
              game and possibly the next one.
            </p>
            <p>
              These changes often explain why a game feels different after the
              injury, even if the score has not moved yet.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Tactics can shift immediately
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              An injury can force a coach to change the plan. A team may slow
              the pace, protect a replacement, avoid a weak matchup, change
              pressing intensity, or simplify offensive actions. Sometimes the
              adjustment is visible. Sometimes it is subtle, like sending help
              earlier or avoiding one side of the field.
            </p>
            <p>
              Opponents adjust too. They may attack the replacement, increase
              pressure, force a specific player to make decisions, or test
              whether the injured team can keep its structure. That tactical
              push and response can become the real story of the game.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Momentum and pressure change together
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Injuries often create emotional swings. The injured player&rsquo;s
              team may tighten up for a few minutes. The opponent may sense an
              opportunity. The crowd may change tone. Even when players try to
              stay composed, the game can feel different because everyone knows
              the conditions have changed.
            </p>
            <p>
              Pressure also moves. The replacement player carries more
              responsibility. The stars may need to do more. The coach may face
              harder decisions. Fans watching the result later need that context
              before judging the final score.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Injuries drive attention, but speculation is risky
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Injury moments often create immediate search interest because fans
              want clarity. Is the player returning? Who replaces them? What
              does it mean for the next game? This attention can push an athlete
              or team into{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>
              .
            </p>
            <p>
              Good coverage should avoid medical guesses. SportPulse can
              explain the sports impact without pretending to know details that
              have not been confirmed. That means focusing on role, tactics,
              momentum, and what fans should monitor next.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Fantasy impact and the next game
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Injuries can affect fantasy attention because usage and
              opportunity change quickly. A backup may get more minutes. A
              teammate may take more shots. A defense may lose an important
              matchup piece. SportPulse does not publish fantasy advice in this
              current version, but it can explain why fantasy-related attention forms.
            </p>
            <p>
              The most useful follow-up question is what changes next. Does the
              schedule get harder? Does the team have enough depth? Does the
              injured player&rsquo;s absence reveal a weakness? That is where an
              injury moves from a moment to a storyline on{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
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
            Injuries can change how a game should be understood. They do not
            erase results, but they help explain performance, pressure, and what
            may happen next. Fans who understand the injury context read the
            scoreboard more accurately.
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
