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

  const guideLinks = [
    {
      href: "/explained/what-is-sportpulse",
      title: "What Is SportPulse?",
      description:
        "Start with the mission: how SportPulse helps fans understand what happened, why it mattered, and what to watch next.",
    },
    {
      href: "/explained/why-sports-fans-search-for-scores",
      title: "Why Sports Fans Search for Scores",
      description:
        "Understand the behavior behind score searches: fast answers, emotional confirmation, recaps, and next steps.",
    },
    {
      href: "/explained/what-makes-an-athlete-trending",
      title: "What Makes an Athlete Trending?",
      description:
        "Learn why athletes gain attention online, from standout performances to injuries, rumors, viral moments, and media cycles.",
    },
    {
      href: "/recaps/what-is-a-fast-sports-recap",
      title: "What Is a Fast Sports Recap?",
      description:
        "See how a short recap should explain what happened, the turning point, key players, and why the result matters.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(faqs)),
        }}
      />

      <HeroSection />

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

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Start here"
          title="SportPulse Guides"
          description="Evergreen explainers for the core ideas behind SportPulse: scores, trends, recaps, and fast sports context."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {guide.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {guide.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read the guide
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

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

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <NewsletterCard />
      </section>

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
          <Link
            href="/about"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            Learn more about SportPulse
          </Link>
          .
        </p>
      </section>
    </>
  );
}