import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProseCard from "@/components/ProseCard";
import RecapCard from "@/components/RecapCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import { recaps, sectionFaqs } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Recaps — Short, structured game summaries",
  description:
    "Fast sports recaps you can read in under a minute. Clear, structured summaries that capture the flow of each game, not just the final score.",
  alternates: { canonical: "/recaps" },
};

const faqs = sectionFaqs.recaps;

export default function RecapsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
      />

      <PageHeader
        eyebrow="Recaps"
        title="Every game that mattered, in under a minute"
        lead="A recap should answer one question fast: what actually happened? Each summary below gives you the result, the shape of the game, and the detail that decided it — clean enough to scan, complete enough to feel caught up."
      />

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-7">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Recap guide
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          New to the format? Read the evergreen guide to what makes a fast
          sports recap useful for busy fans.
        </p>
        <Link
          href="/recaps/what-is-a-fast-sports-recap"
          className="mt-5 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          What Is a Fast Sports Recap? →
        </Link>
      </section>

      <section
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Latest recaps"
      >
        {recaps.map((recap) => (
          <RecapCard key={recap.slug} recap={recap} />
        ))}
      </section>

      <div className="mt-16 grid gap-4">
        <ProseCard
          title="Why fast recaps are worth it"
          paragraphs={[
            "Most people do not have time to watch every game, and a raw box score rarely tells the real story. A good recap closes that gap. In under a minute, it gives you the result and — more importantly — a feel for how the game actually unfolded.",
            "Our recaps follow a consistent structure so you always know where to look: the matchup and final at the top, then a few sentences on the flow of play and the moment that tipped it. No autoplay video, no pop-ups, no padding — just a readable summary built for a phone screen and a spare moment.",
            "Read a few in a row and you are caught up on the night without ever feeling like you are wading through clutter.",
          ]}
        />

        <ProseCard
          title="Recaps in context"
          paragraphs={[
            "A recap tells you what happened. When you want to know why it mattered or what it means for the bigger picture, the rest of SportPulse is one tap away.",
          ]}
        >
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/tonight"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Tonight&rsquo;s defining stories →
            </Link>
            <Link
              href="/explained"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Why it mattered →
            </Link>
            <Link
              href="/trending"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              What&rsquo;s trending →
            </Link>
          </div>
        </ProseCard>
      </div>

      <section className="mt-16 max-w-3xl" aria-label="Frequently asked questions">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Recaps, answered
        </h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Want last night&rsquo;s recaps delivered each morning?{" "}
          <Link
            href="/#newsletter"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            Get the daily briefing
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
