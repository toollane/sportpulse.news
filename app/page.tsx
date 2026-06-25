import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import StoryCard from "@/components/StoryCard";
import TrendCard from "@/components/TrendCard";
import RecapCard from "@/components/RecapCard";
import NewsletterCard from "@/components/NewsletterCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import {
  features,
  stories,
  trends,
  recaps,
  explainers,
  faqs,
} from "@/lib/mockData";

export default function Home() {
  const featuredStory = stories.find((s) => s.featured) ?? stories[0];
  const otherStories = stories.filter((s) => s.slug !== featuredStory.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
      />

      <HeroSection />

      {/* Product areas */}
      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="What you get"
          title="Four ways to read the sports day"
          description="SportPulse is built around how fans actually catch up: the result, the momentum, the recap, and the context behind it."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.href} feature={feature} />
          ))}
        </div>
      </section>

      {/* Today's Pulse */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Today's Pulse"
          title="The stories defining today"
          description="A handful of results and storylines worth understanding right now — not an endless feed."
          href="/tonight"
          linkLabel="See all results"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StoryCard story={featuredStory} featured />
          </div>
          <div className="grid gap-4">
            {otherStories.slice(0, 2).map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherStories.slice(2).map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Trending Now"
          title="Who and what is pulling attention"
          description="The athletes, teams, and topics climbing the conversation — with a quick note on why."
          href="/trending"
          linkLabel="See full board"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {trends.slice(0, 6).map((trend) => (
            <TrendCard key={trend.rank} trend={trend} />
          ))}
        </div>
      </section>

      {/* Latest Recaps */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Latest Recaps"
          title="Last night in under a minute"
          description="Short, structured summaries that capture the flow of the game, not just the final number."
          href="/recaps"
          linkLabel="All recaps"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recaps.slice(0, 4).map((recap) => (
            <RecapCard key={recap.slug} recap={recap} />
          ))}
        </div>
      </section>

      {/* Explained */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Explained"
          title="Why it actually mattered"
          description="Clear answers to the questions fans are asking — the context that turns a result into a story."
          href="/explained"
          linkLabel="More explainers"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {explainers.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col rounded-card border border-border bg-surface p-6"
            >
              <span className="text-xs font-semibold text-accent">
                {item.sport} · {item.topic}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <NewsletterCard />
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-20 w-full max-w-3xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="A quick overview of what SportPulse is, and what it is not."
        />
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Want the full picture?{" "}
          <Link href="/about" className="font-semibold text-accent hover:text-accent-strong">
            Learn more about SportPulse
          </Link>
          .
        </p>
      </section>
    </>
  );
}
