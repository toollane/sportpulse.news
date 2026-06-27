import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProseCard from "@/components/ProseCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import { explainers, sectionFaqs } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Explained — Why it happened and why it matters",
  description:
    "Clear, jargon-free answers to the sports questions fans are actually asking. Understand why results matter, what moves signal, and how storylines hold up.",
  alternates: { canonical: "/explained" },
};

const faqs = sectionFaqs.explained;

export default function ExplainedPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
      />

      <PageHeader
        eyebrow="Explained"
        title="The context behind the headlines"
        lead="Sports make more sense with a little context. Explained answers the questions behind the results — why a quiet outcome matters, what a move really signals, and how a streak holds up — in plain, trustworthy language."
      />

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-7">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          SportPulse Guides
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Start with these foundational guides to understand how SportPulse
          thinks about scores, trends, recaps, and sports attention.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/explained/what-is-sportpulse"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              What Is SportPulse?
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              A clear introduction to the independent sports intelligence
              platform.
            </span>
          </Link>
          <Link
            href="/explained/why-sports-fans-search-for-scores"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              Why Sports Fans Search for Scores
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              Why score searches lead to context, recaps, and what happens next.
            </span>
          </Link>
          <Link
            href="/explained/what-makes-an-athlete-trending"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              What Makes an Athlete Trending?
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              The performances, injuries, rumors, and viral moments that move
              attention.
            </span>
          </Link>
          <Link
            href="/explained/why-game-context-matters"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              Why Game Context Matters
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              Why injuries, fatigue, matchups, pressure, and stakes shape how a
              result should be read.
            </span>
          </Link>
          <Link
            href="/explained/how-sports-momentum-shifts"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              How Sports Momentum Shifts
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              How runs, stops, crowd energy, tactical changes, and star moments
              swing a game.
            </span>
          </Link>
          <Link
            href="/explained/why-one-play-can-change-a-game"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              Why One Play Can Change a Game
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              How one key moment can reshape the outcome, fan reaction, and
              media narrative.
            </span>
          </Link>
          <Link
            href="/explained/what-makes-a-game-worth-watching"
            className="group rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
          >
            <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
              What Makes a Game Worth Watching?
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">
              The stakes, rivalries, player stories, tactics, and cultural
              attention that turn a matchup into an event.
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-12 space-y-4" aria-label="Explainers">
        {explainers.map((item) => (
          <article
            key={item.slug}
            className="rounded-card border border-border bg-surface p-6 sm:p-7"
          >
            <span className="text-xs font-semibold text-accent">
              {item.sport} · {item.topic}
            </span>
            <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground">
              {item.question}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.answer}
            </p>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Why it matters
              </p>
              <ul className="mt-3 space-y-2">
                {item.whyItMatters.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-16 grid gap-4">
        <ProseCard
          title="Why we focus on “why it matters”"
          paragraphs={[
            "A result is only the surface. The interesting part is usually underneath it: the decision that shaped the game, the ripple effect of a roster move, or the reason a streak is harder than it looks. Explained exists to make that layer accessible to any fan.",
            "We are not here for hot takes or manufactured controversy. The goal is clarity — to help you understand the strategy, the stakes, and the consequences that headlines often skip, written in language that does not assume you already know the jargon.",
            "Done well, an explainer changes how you watch the next game. That is the value we aim for every time.",
          ]}
        >
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/trending"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              See what&rsquo;s trending →
            </Link>
            <Link
              href="/tonight"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Tonight&rsquo;s results →
            </Link>
            <Link
              href="/recaps"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Read the recaps →
            </Link>
          </div>
        </ProseCard>
      </div>

      <section className="mt-16" aria-label="Frequently asked questions">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Explained, answered
        </h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Like this kind of context every day?{" "}
          <Link
            href="/#newsletter"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            Get the daily briefing
          </Link>{" "}
          or{" "}
          <Link
            href="/about"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            learn more about SportPulse
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
