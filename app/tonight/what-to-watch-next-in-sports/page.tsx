import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What to Watch Next in Sports — SportPulse Tonight",
  description:
    "Learn how fans decide what to follow next after checking scores, from upcoming games and rivalries to playoff stakes, trending athletes, injuries, and momentum.",
  alternates: { canonical: "/tonight/what-to-watch-next-in-sports" },
};

const continueReading = [
  {
    href: "/tonight/how-to-catch-up-on-sports-fast",
    label: "How to Catch Up on Sports Fast",
  },
  {
    href: "/explained/what-makes-a-game-worth-watching",
    label: "What Makes a Game Worth Watching?",
  },
  {
    href: "/trending/why-athletes-go-viral",
    label: "Why Athletes Go Viral",
  },
];

export default function WhatToWatchNextInSportsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Tonight"
        title="What to Watch Next in Sports"
        lead="After checking scores, the next question is simple: what should you follow now? The answer depends on stakes, rivalries, injuries, momentum, trending athletes, and which games can change the next conversation."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Start with what changed tonight
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The fastest way to decide what to watch next is to ask what
              changed. A result may shift a standings race, expose a weakness,
              raise pressure on a coach, or turn a quiet player into a bigger
              storyline. The next game becomes more interesting when it answers
              the question created by the last one.
            </p>
            <p>
              That is why the{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>{" "}
              page focuses on context, not just scores. If you know which
              result changed the mood, you can choose the next matchup more
              intelligently.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Upcoming games matter more when there are stakes
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Not every upcoming game deserves the same attention. The most
              important games usually carry stakes: playoff positioning, a
              rivalry, a test against a stronger opponent, a chance to end a
              slide, or an opportunity to prove a recent run is real.
            </p>
            <p>
              Practical example: a team that just won three straight may be
              interesting, but the next game becomes must-watch if it comes
              against an opponent that attacks its biggest weakness. The result
              will tell fans whether the streak is built on repeatable quality
              or a favorable stretch.
            </p>
            <p>
              For deeper framing, SportPulse uses{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              to show why those stakes matter.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Rivalries and rematches create built-in context
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Rivalries make it easier to know what to watch because the history
              already gives the game shape. A rematch after a close finish, a
              physical game, a controversial call, or a dramatic ending carries
              emotional context into the next meeting.
            </p>
            <p>
              Fans do not only watch to see who wins. They watch to see who
              responds. Does the team that lost adjust? Does the star who was
              criticized take control? Does the coach change the matchup? Those
              questions make the next game feel connected to the last one.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Trending athletes point toward the next story
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Trending athletes are often clues about what fans should monitor.
              A player may be trending because of a breakout performance, a
              visible injury, a trade report, a viral interview, or a role
              change. The next game can confirm whether the attention is a
              short spike or the start of something more meaningful.
            </p>
            <p>
              The{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>{" "}
              section helps turn that attention into a watchlist. Instead of
              asking only who is popular right now, ask why the attention is
              building and what would make it continue.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Injuries and momentum shape what comes next
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Injuries can immediately change what to watch. A missing starter,
              a returning player, or an uncertain status can shift rotations,
              tactics, depth, and responsibility. The next game becomes a test
              of adaptation.
            </p>
            <p>
              Momentum matters too, but it should be read carefully. A team can
              win while showing warning signs. Another can lose while revealing
              a useful adjustment. A smart{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              helps separate the final number from the direction of travel.
              That direction is often the best clue for what to follow next.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Knowing what to watch next turns sports from a stream of separate
            results into an ongoing story. Fans can focus on the games, players,
            injuries, and tactical questions that are most likely to shape the
            next conversation.
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
