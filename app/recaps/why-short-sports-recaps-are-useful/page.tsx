import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Why Short Sports Recaps Are Useful — SportPulse Recaps",
  description:
    "Learn why short sports recaps help busy fans catch up quickly without watching full games, long highlight packages, or extended analysis shows.",
  alternates: { canonical: "/recaps/why-short-sports-recaps-are-useful" },
};

const continueReading = [
  {
    href: "/recaps/how-to-read-a-game-recap",
    label: "How to Read a Game Recap",
  },
  {
    href: "/tonight/how-to-catch-up-on-sports-fast",
    label: "How to Catch Up on Sports Fast",
  },
  {
    href: "/explained/why-game-context-matters",
    label: "Why Game Context Matters",
  },
];

export default function WhyShortSportsRecapsAreUsefulPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Recaps"
        title="Why Short Sports Recaps Are Useful"
        lead="Short sports recaps help busy fans understand the night without watching every highlight, replay, or long analysis show. The best ones are brief, but they are not shallow."
      />

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Fans have more games than time
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Modern sports attention is fragmented. A fan may follow a local
              team, several athletes, fantasy lineups, rival results, playoff
              races, and national storylines all at once. Watching everything
              is impossible. Even highlights can become too much when every
              platform offers a different clip, cut, or reaction.
            </p>
            <p>
              A short recap solves a practical problem. It gives the reader a
              quick path through the game: final score, turning point, key
              players, and why the result matters. It does not ask for twenty
              minutes of attention before delivering the useful part.
            </p>
            <p>
              That is why SportPulse treats{" "}
              <Link
                href="/recaps"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Recaps
              </Link>{" "}
              as a core product area. Scores are fast, but recaps make scores
              understandable.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Short does not mean empty
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The value of a short recap depends on what it chooses to include.
              A thin recap repeats the score and adds a generic sentence. A
              useful recap identifies the shape of the game. It tells readers
              whether the winner controlled the night, survived late pressure,
              flipped the game with one stretch, or benefited from a specific
              matchup.
            </p>
            <p>
              Practical example: if a team wins by two points, the recap should
              not only say it was close. It should explain whether the game was
              close throughout, whether the trailing side made a late run, or
              whether the final margin narrowed after the result was mostly
              decided. That small difference changes how fans read the result.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Recaps reduce noise
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Sports coverage can become noisy quickly. There are live blogs,
              clips, reactions, debate segments, social posts, box scores, and
              stat threads. Each can be useful, but not every fan needs all of
              them after every game.
            </p>
            <p>
              A short recap acts as a filter. It gives a clean first read so
              the fan can decide what deserves more attention. If the result was
              routine, the recap may be enough. If the game included a major
              tactical shift, injury, viral moment, or standings impact, the
              fan can move into a deeper{" "}
              <Link
                href="/explained"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                explainer
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            They help fans join the conversation
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A busy fan often wants enough context to understand the next
              conversation. Why is a player trending? Why are people praising a
              coach or criticizing a decision? Did the favorite look strong, or
              did the opponent expose something?
            </p>
            <p>
              Short recaps give fans that entry point. They summarize the
              action without pretending to be the only source of truth. They
              help the reader know what to ask next, whether that means checking
              <Link
                href="/trending"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                {" "}
                Trending
              </Link>
              , reading another recap, or watching the next matchup.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Short recaps support a daily sports routine
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              The best sports catch-up routine is layered. Start with key
              winners and losses. Read short recaps for the games that matter.
              Check who is trending. Then decide which story deserves a deeper
              explanation. That routine can take minutes instead of an hour.
            </p>
            <p>
              SportPulse is built around that flow.{" "}
              <Link
                href="/tonight"
                className="font-semibold text-accent hover:text-accent-strong"
              >
                Tonight
              </Link>{" "}
              gives the daily pulse. Recaps explain the games. Trending shows
              where attention is moving. Explained adds the why. Short recaps
              are the middle layer that connects the result to the bigger
              picture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Short recaps make sports easier to follow without demanding full
            attention every night. They help fans stay informed, understand
            important results, and choose where to go deeper. In a crowded media
            environment, that clarity is the product.
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
              About
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </article>
  );
}
