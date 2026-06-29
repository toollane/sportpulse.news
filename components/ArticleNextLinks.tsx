"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nextLinksBySection = {
  explained: [
    {
      href: "/explained/how-sports-momentum-shifts",
      label: "Momentum explained",
      text: "Understand why games can change quickly after one run, play, or pressure swing.",
    },
    {
      href: "/explained/why-game-context-matters",
      label: "Why context matters",
      text: "See why the final score is only the start of the story.",
    },
    {
      href: "/recaps/how-to-read-a-game-recap",
      label: "Read better recaps",
      text: "Learn how to catch the story behind a result faster.",
    },
  ],
  recaps: [
    {
      href: "/recaps/how-to-read-a-game-recap",
      label: "How to read a recap",
      text: "Turn a final score into the key swing, signal, and next question.",
    },
    {
      href: "/tonight/how-to-catch-up-on-sports-fast",
      label: "Catch up fast",
      text: "Use SportPulse to understand the sports day without opening five tabs.",
    },
    {
      href: "/explained/what-makes-a-game-worth-watching",
      label: "What makes a game matter?",
      text: "Find the stakes, storylines, and matchups that deserve attention.",
    },
  ],
  tonight: [
    {
      href: "/tonight/what-happened-in-sports-today",
      label: "What happened today?",
      text: "Start with the quick answer, then understand what changed.",
    },
    {
      href: "/recaps/what-is-a-fast-sports-recap",
      label: "Fast recap format",
      text: "See how a short recap can still explain the full story.",
    },
    {
      href: "/trending/how-sports-trends-work",
      label: "Why stories trend",
      text: "Understand why sports attention can move so quickly.",
    },
  ],
  trending: [
    {
      href: "/trending/how-sports-trends-work",
      label: "How trends work",
      text: "Learn why athletes, teams, and moments suddenly take over the feed.",
    },
    {
      href: "/trending/why-players-trend-after-one-game",
      label: "One-game player trends",
      text: "Separate real signal from one-night noise.",
    },
    {
      href: "/explained/what-makes-an-athlete-trending",
      label: "Why athletes trend",
      text: "See the factors behind viral sports attention.",
    },
  ],
} as const;

function getSection(pathname: string) {
  const [section, slug] = pathname.split("/").filter(Boolean);

  if (!slug) {
    return null;
  }

  if (
    section === "explained" ||
    section === "recaps" ||
    section === "tonight" ||
    section === "trending"
  ) {
    return section;
  }

  return null;
}

export default function ArticleNextLinks() {
  const pathname = usePathname();
  const section = getSection(pathname);

  if (!section) {
    return null;
  }

  const links = nextLinksBySection[section].filter(
    (link) => link.href !== pathname
  );

  return (
    <section className="bg-background px-5 pb-14 pt-4 sm:px-8 md:pb-16">
      <div className="mx-auto w-full max-w-6xl rounded-card border border-border bg-surface p-5 shadow-sm md:p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Keep reading
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              What to read next
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Continue with related SportPulse guides that help turn scores,
            trends, and recaps into faster sports understanding.
          </p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group block rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            >
              <h3 className="text-base font-semibold">{link.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{link.text}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Open next
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  {"\u2192"}
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}