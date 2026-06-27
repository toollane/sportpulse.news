import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How to Catch Up After Missing a Game — SportPulse Recaps",
  description:
    "A practical process for catching up after missing a game: start with the result, find the turning point, check key players, understand stakes, read a recap, and see what changes next.",
  alternates: { canonical: "/recaps/how-to-catch-up-after-missing-a-game" },
};

const continueReading = [
  {
    href: "/recaps/how-to-read-a-game-recap",
    label: "How to Read a Game Recap",
  },
  {
    href: "/explained/how-to-understand-a-game-without-watching-it",
    label: "How to Understand a Game Without Watching It",
  },
  {
    href: "/tonight/how-to-follow-sports-without-watching-every-game",
    label: "How to Follow Sports Without Watching Every Game",
  },
];

export default function HowToCatchUpAfterMissingAGamePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Recaps"
        title="How to Catch Up After Missing a Game"
        lead="Missing a game does not mean missing the story. With the right process, you can understand the result, the turning point, the key players, and what changes next in just a few minutes."
      />

      <div className="mt-10 space-y-10">
        <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quick answer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            To catch up after missing a game, start with the final result, then
            identify the turning point, check key player impact, understand the
            stakes, read a short recap, and look at what changes next. That
            gives you the story without needing the full replay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Start with the result and score context
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              First, get the result clear. Who won, who lost, and what was the
              margin? Then ask whether the final score reflects the game. A
              narrow result might hide long stretches of control. A wide result
              might include late scoring after the competitive portion was
              over.
            </p>
            <p>
              This first step prevents overreaction. If you only see the final,
              you might assume dominance, collapse, or luck without knowing
              which one actually fits.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Find the turning point
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The turning point is the fastest way into the story. Look for the
              sequence that changed control: a scoring run, defensive stop,
              substitution, injury, tactical adjustment, turnover, save, or
              pressure moment.
            </p>
            <p>
              Practical example: if a game was close until one team changed
              defensive matchups and forced three empty possessions, that
              stretch may explain more than the leading scorer. A good{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              should make that shift easy to find.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Check the key players, not only the biggest names
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Stars matter, but the most important player in a game is not
              always the most famous. A role player might change spacing. A
              defender might remove the opponent&rsquo;s best option. A substitute
              might change tempo. A pitcher, keeper, or bench unit might hold
              the game together during the hardest stretch.
            </p>
            <p>
              Also check whether a player is gaining attention on{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>
              . If they are, the recap should help explain whether the attention
              came from a complete performance, a single play, an injury, or a
              viral reaction.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Understand the stakes
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A result means more when you know what was at stake. Did the game
              affect a standings race, playoff position, rivalry, losing streak,
              confidence level, or upcoming matchup? Did it answer a question
              about a lineup, tactical plan, or athlete returning from injury?
            </p>
            <p>
              This is where{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Explained
              </Link>{" "}
              adds value. A recap tells you what happened. An explainer tells
              you why it matters.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Finish with what changes next
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The best catch-up process ends by looking forward. Does the result
              change who you should watch next? Does it create a rematch
              storyline? Does an injury alter the next game? Does a player role
              look different now?
            </p>
            <p>
              That final step turns a missed game into a useful briefing. It
              helps you rejoin the season without pretending you watched every
              minute.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Fans miss games because life is busy. A clear catch-up process keeps
            you informed without wasting time, and it helps you avoid judging a
            game only by the final score or the loudest online reaction.
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
