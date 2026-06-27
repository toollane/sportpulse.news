import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What to Look For in a Box Score — SportPulse Recaps",
  description:
    "Learn how to read a box score quickly, including scoring balance, efficiency, minutes, rebounds, assists, turnovers, fouls, shots, team stats, and misleading numbers.",
  alternates: { canonical: "/recaps/what-to-look-for-in-a-box-score" },
};

const continueReading = [
  {
    href: "/recaps/how-to-read-a-game-recap",
    label: "How to Read a Game Recap",
  },
  {
    href: "/explained/why-final-scores-do-not-tell-the-full-story",
    label: "Why Final Scores Do Not Tell the Full Story",
  },
  {
    href: "/recaps/how-to-catch-up-after-missing-a-game",
    label: "How to Catch Up After Missing a Game",
  },
];

export default function WhatToLookForInABoxScorePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Recaps"
        title="What to Look For in a Box Score"
        lead="A box score can help you understand a game quickly if you know what to scan first. The key is to look for balance, efficiency, roles, mistakes, and team context instead of treating every number the same."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            In a box score, start with the final score, then scan scoring
            balance, efficiency, minutes or usage, rebounds, assists, turnovers,
            fouls, shot profile, and team stats. The goal is not to memorize
            numbers. It is to find clues about how the game was played.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Start with scoring balance
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Scoring balance tells you whether a team depended on one player
              or got contributions from several places. A single huge scoring
              night can be impressive, but it can also hide a thin attack. A
              balanced box score may show that a team created good looks across
              the lineup.
            </p>
            <p>
              Practical example: if one player scored nearly half of a
              basketball team&rsquo;s points, ask whether that was dominance or a
              sign that the offense lacked other answers. In soccer, look beyond
              goals to shots, chances, and involvement. In baseball, one big hit
              can decide a game, but the full offensive pattern still matters.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Efficiency changes how stats should be read
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Raw totals can mislead. A player may score a lot because they used
              many chances, not because they played efficiently. Another player
              may have a smaller total but make high-value plays at the right
              moments. Efficiency helps separate volume from impact.
            </p>
            <p>
              Look for shot attempts, shooting percentage, turnovers, and the
              type of chances created. Efficiency is especially useful when
              paired with a{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              because the recap can explain whether those numbers came in
              pressure moments or low-leverage stretches.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Minutes, fouls, and roles explain opportunity
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Minutes and usage can show who a coach trusted. If a player got
              more time than usual, that may signal a role change. If a starter
              played less, fouls, injury management, matchup issues, or tactical
              choices may explain it.
            </p>
            <p>
              Fouls matter because they affect aggression and availability. A
              defender in early foul trouble may play differently. A team forced
              into bench minutes may lose rhythm. Those details rarely appear in
              the final score, but they shape the game.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Rebounds, assists, turnovers, and team stats
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Team stats help reveal style. Rebounds can show who controlled
              second chances. Assists can show whether offense came from ball
              movement or isolation. Turnovers often explain momentum swings.
              Shot totals, set-piece volume, saves, penalties, or bullpen
              usage can show where pressure came from.
            </p>
            <p>
              The trick is to connect numbers to the game story. A turnover
              margin matters more if the mistakes happened during a decisive
              run. A rebounding edge matters more if it created extra chances in
              close moments. Numbers become useful when they explain control.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Beware misleading numbers
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Box scores can hide context. Garbage-time points can inflate
              totals. A player can post strong numbers after the game is mostly
              decided. A team can win despite poor process because of one hot
              stretch. A great defensive performance may not show up clearly in
              basic stats.
            </p>
            <p>
              That is why box scores work best with{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                explanation
              </Link>
              . Numbers are clues, not the whole story.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Reading a box score well helps fans catch up faster. It shows which
            players shaped the game, where the result came from, and which
            numbers need more context before they become conclusions.
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
