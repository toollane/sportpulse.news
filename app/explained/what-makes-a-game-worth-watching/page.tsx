import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "What Makes a Game Worth Watching? — SportPulse Explained",
  description:
    "Learn why some games become must-watch events beyond the final score, from stakes and rivalries to player stories, tactics, playoff pressure, and cultural attention.",
  alternates: { canonical: "/explained/what-makes-a-game-worth-watching" },
};

const continueReading = [
  {
    href: "/explained/why-game-context-matters",
    label: "Why Game Context Matters",
  },
  {
    href: "/trending/how-sports-trends-work",
    label: "How Sports Trends Work",
  },
  {
    href: "/tonight/what-to-watch-next-in-sports",
    label: "What to Watch Next in Sports",
  },
];

export default function WhatMakesAGameWorthWatchingPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Explained"
        title="What Makes a Game Worth Watching?"
        lead="A game becomes worth watching when the result carries more than a number. Stakes, rivalries, player stories, form, tactics, and attention can turn an ordinary matchup into the one fans keep talking about."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            The best games have stakes
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A final score matters more when something is clearly on the line.
              That might be a playoff place, a table position, a winning streak,
              a season-saving result, or a chance to prove that a recent run is
              real. Fans are drawn to games where the outcome changes the next
              question.
            </p>
            <p>
              Stakes do not always mean a championship game. A regular-season
              matchup can feel huge if it decides momentum, pressure, or belief.
              A mid-table soccer match can matter when it shifts a crowded race.
              A baseball series can matter because it tests rotation depth. A
              basketball game in January can matter if it reveals whether a team
              can close against high-level pressure.
            </p>
            <p>
              SportPulse looks for those stakes in{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>{" "}
              because they help fans decide which results deserve attention.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Rivalries and player storylines raise the temperature
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Rivalries make games easier to care about because history is
              already in the room. Even when the standings are quiet, familiar
              opponents bring emotion, memory, and pressure. A routine play can
              feel louder because it happens inside a story fans already know.
            </p>
            <p>
              Player storylines work the same way. A returning veteran, a young
              breakout candidate, a star facing former teammates, or a role
              player suddenly getting a bigger opportunity can all change the
              reason a game is worth watching. The matchup becomes about more
              than team versus team. It becomes a test of form, identity, and
              expectation.
            </p>
            <p>
              These storylines often carry into{" "}
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Trending
              </Link>{" "}
              when fans search for the athlete, quote, injury update, or moment
              behind the game.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Momentum and form change expectations
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A game becomes more interesting when it tests momentum. A team on
              a winning streak wants proof that the run is sustainable. A team
              sliding in the wrong direction needs a response. An athlete who
              has been trending for strong performances has to show that the
              form can hold against a different opponent or a tougher matchup.
            </p>
            <p>
              Momentum also changes how fans read the result. A narrow win from
              a confident team might reinforce belief. The same win from a team
              under pressure might feel like relief. Context matters because
              fans are not only asking who won. They are asking whether the game
              changed the direction of the season.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Tactical matchups can make a game smarter
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Some must-watch games are not loud because of rivalry or drama.
              They are interesting because of the tactical problem. A fast team
              meets a slow, physical one. A high-pressure defense faces a calm
              possession side. A lineup built around spacing meets a defense
              that switches everything. A strong starter meets an offense that
              punishes one specific pitch pattern.
            </p>
            <p>
              Practical example: a game between a transition-heavy team and a
              disciplined opponent may come down to turnovers. If the disciplined
              side limits live-ball mistakes, the game slows. If not, the other
              side gets the open-floor chances it wants. The final score will
              show the winner, but the tactical matchup explains why.
            </p>
            <p>
              That is why a good{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                recap
              </Link>{" "}
              should explain shape, turning point, and matchup quality.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Cultural attention can turn a game into an event
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Some games become bigger because the conversation around them
              grows. A viral highlight, a record chase, a public debate, a
              return from injury, or a major media spotlight can bring casual
              fans into the moment. The game becomes part sport, part shared
              cultural event.
            </p>
            <p>
              Cultural attention does not guarantee quality, but it changes
              interest. More people watch because they want to understand the
              conversation as it happens. If the game delivers a late twist or a
              star performance, that attention expands even further.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Knowing what makes a game worth watching helps fans spend attention
            wisely. Instead of treating every matchup the same, you can look for
            stakes, style, pressure, form, and storylines. That makes the sports
            day easier to read and helps the biggest moments feel less random.
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
            Learn more about the project on the{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent-strong"
            >
              About SportPulse
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </article>
  );
}
