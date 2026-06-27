import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProseCard from "@/components/ProseCard";
import TrendCard from "@/components/TrendCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import { trends, sectionFaqs } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Trending — Athletes, teams and topics gaining momentum",
  description:
    "See which athletes, teams, and storylines are gaining attention in sports right now, ranked with clear context on why momentum is building.",
  alternates: { canonical: "/trending" },
};

const faqs = sectionFaqs.trending;

export default function TrendingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
      />

      <PageHeader
        eyebrow="Trending"
        title="What sports fans are paying attention to now"
        lead="Attention is a signal. This board tracks the athletes, teams, and topics climbing the conversation, with a short note on the performance or storyline driving the interest — so a trend always comes with its reason."
      />

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-7">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Trending guide
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Understand how sports trends form online through search behavior,
          live moments, fantasy impact, injuries, trades, controversy, and media
          attention.
        </p>
        <Link
          href="/trending/how-sports-trends-work"
          className="group mt-5 block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 sm:max-w-md"
        >
          <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
            How Sports Trends Work
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-muted">
            A practical guide to why athletes, teams, and topics start gaining
            attention.
          </span>
        </Link>
        <Link
          href="/trending/why-athletes-go-viral"
          className="group mt-4 block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 sm:max-w-md"
        >
          <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
            Why Athletes Go Viral
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-muted">
            How highlights, records, controversy, injuries, interviews, memes,
            fantasy impact, and media cycles create viral attention.
          </span>
        </Link>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2" aria-label="Trending board">
        {trends.map((trend) => (
          <TrendCard key={trend.rank} trend={trend} />
        ))}
      </section>

      <div className="mt-16 grid gap-4">
        <ProseCard
          title="How SportPulse tracks attention and momentum"
          paragraphs={[
            "Trends are only useful when they come with a reason. Anyone can tell you a name is popular; the harder and more valuable question is why interest is climbing and whether it is likely to last.",
            "Every item on the board is labeled as an athlete, a team, or a topic, and tagged with a momentum read — surging, rising, steady, or cooling — so you can see direction at a glance. Alongside each one, a short editorial note explains the performance, result, or storyline behind the spike in attention.",
            "The board is explanatory by design. We want you to leave understanding the conversation, not just scrolling past it.",
          ]}
        />

        <ProseCard
          title="From a trend to the full story"
          paragraphs={[
            "Trending is a starting point. When a storyline earns deeper attention, our other sections carry it further so you can follow the thread that interests you most.",
          ]}
        >
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/explained"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Why these moments matter →
            </Link>
            <Link
              href="/recaps"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Read the recaps →
            </Link>
            <Link
              href="/tonight"
              className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Tonight&rsquo;s results →
            </Link>
          </div>
        </ProseCard>
      </div>

      <section className="mt-16 max-w-3xl" aria-label="Frequently asked questions">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Trending, answered
        </h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Prefer the highlights in your inbox?{" "}
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
