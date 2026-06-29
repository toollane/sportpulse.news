import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import StoryCard from "@/components/StoryCard";
import RecapCard from "@/components/RecapCard";
import NewsletterCard from "@/components/NewsletterCard";
import FaqList, { buildFaqJsonLd } from "@/components/FaqList";
import MomentumBoard from "@/components/MomentumBoard";
import PulseSnapshot from "@/components/PulseSnapshot";
import WatchNextPanel from "@/components/WatchNextPanel";
import {
  features,
  stories,
  trends,
  recaps,
  explainers,
  faqs,
} from "@/lib/mockData";

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

export default function Home() {
  const featuredStory = stories.find((story) => story.featured) ?? stories[0];
  const otherStories = stories.filter(
    (story) => story.slug !== featuredStory.slug,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(faqs)),
        }}
      />

      <HeroSection />

      <PulseSnapshot stories={stories} trends={trends} recaps={recaps} />

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Briefing lanes"
          title="Four paths through the sports day"
          description="Start with the result, scan the momentum, read the recap, then understand why it mattered before the feed gets noisy."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.href} feature={feature} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Today's Pulse"
          title="The stories defining the editorial briefing"
          description="A compact editorial pulse for fans who want to understand the sports day faster: the late swing, the context, and the storylines worth following next."
          href="/tonight"
          linkLabel="Open Tonight"
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
        <WatchNextPanel stories={stories} explainers={explainers} />
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Trending Now"
          title="Momentum board"
          description="A ranked view of the athletes, teams, and topics pulling attention in this editorial briefing."
          href="/trending"
          linkLabel="See full board"
        />

        <div className="mt-8">
          <MomentumBoard trends={trends} />
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Latest Recaps"
          title="Scoreboards with the story attached"
          description="Short recap cards built for quick scanning: final, winner, and the reason the game turned."
          href="/recaps"
          linkLabel="All recaps"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recaps.slice(0, 6).map((recap) => (
            <RecapCard key={recap.slug} recap={recap} />
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
          {guideLinks.map((guide, index) => (
            <article
              key={guide.href}
              className={`group relative rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)] ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Link
                href={guide.href}
                className="absolute inset-0 z-10 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                aria-label={`Read guide: ${guide.title}`}
              >
                <span className="sr-only">Read guide: {guide.title}</span>
              </Link>

              <div className="relative">
                <span className="inline-flex rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
                  Guide
                </span>

                <p className="mt-4 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                  {guide.title}
                </p>

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
              </div>
            </article>
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
          {explainers.slice(0, 4).map((item) => (
            <article
              key={item.slug}
              className="group relative flex flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]"
            >
              <Link
                href={`/explained/${item.slug}`}
                className="absolute inset-0 z-10 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                aria-label={`Read explainer: ${item.question}`}
              >
                <span className="sr-only">
                  Read explainer: {item.question}
                </span>
              </Link>

              <span className="text-xs font-semibold text-accent">
                {item.sport} · {item.topic}
              </span>

              <p className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-accent">
                {item.question}
              </p>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Open explainer
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
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