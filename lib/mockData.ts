/**
 * Static mock data for the SportPulse MVP.
 *
 * Everything here is original, hand-written editorial content created for
 * demonstration purposes. There are no real-time scores, no copyrighted
 * assets, and no betting recommendations. When live data sources are added
 * later, these shapes can be backed by an API without changing the UI.
 */

export type Sport =
  | "Basketball"
  | "Football"
  | "Soccer"
  | "Baseball"
  | "Hockey"
  | "Tennis";

export type Story = {
  slug: string;
  title: string;
  summary: string;
  sport: Sport;
  category: "Result" | "Story" | "Analysis" | "Injury" | "Transfer";
  readTime: string;
  timeAgo: string;
  featured?: boolean;
};

export type Trend = {
  rank: number;
  name: string;
  type: "Athlete" | "Team" | "Topic";
  sport: Sport;
  blurb: string;
  momentum: "Surging" | "Rising" | "Steady" | "Cooling";
};

export type Recap = {
  slug: string;
  league: string;
  sport: Sport;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  status: "Final" | "Final / OT" | "Final / SO";
  summary: string;
};

export type Explainer = {
  slug: string;
  question: string;
  answer: string;
  sport: Sport;
  topic: string;
};

export type Feature = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

export type Faq = {
  question: string;
  answer: string;
};

/* -------------------------------------------------------------------------- */
/* Homepage product features                                                  */
/* -------------------------------------------------------------------------- */

export const features: Feature[] = [
  {
    title: "Tonight",
    description:
      "The night's defining results, distilled to the winners, the turning points, and the numbers that actually mattered.",
    href: "/tonight",
    badge: "Results",
  },
  {
    title: "Trending",
    description:
      "The athletes, teams, and storylines pulling the most attention right now, with context on why interest is climbing.",
    href: "/trending",
    badge: "Momentum",
  },
  {
    title: "Recaps",
    description:
      "Short, structured game summaries you can read in under a minute, written to capture the flow of the game.",
    href: "/recaps",
    badge: "60-second reads",
  },
  {
    title: "Explained",
    description:
      "Clear answers to the questions fans are actually asking, from rule confusion to why a trade reshaped a season.",
    href: "/explained",
    badge: "Context",
  },
];

/* -------------------------------------------------------------------------- */
/* Today's Pulse — key stories                                                */
/* -------------------------------------------------------------------------- */

export const stories: Story[] = [
  {
    slug: "comeback-defines-the-night",
    title: "A fourth-quarter surge flips a game that looked decided",
    summary:
      "Down by fourteen with under eight minutes left, the visitors strung together stops and clean possessions to steal a road win. The story was not the final shot but the defensive discipline that made it possible.",
    sport: "Basketball",
    category: "Story",
    readTime: "2 min read",
    timeAgo: "1h ago",
    featured: true,
  },
  {
    slug: "rookie-class-arrives",
    title: "The rookie class is no longer arriving — it has arrived",
    summary:
      "Three first-year players posted career nights on the same evening, a reminder that the league's next era is closer than the standings suggest. We break down what each performance signals for the months ahead.",
    sport: "Basketball",
    category: "Analysis",
    readTime: "3 min read",
    timeAgo: "2h ago",
  },
  {
    slug: "late-equalizer-shifts-table",
    title: "A stoppage-time equalizer quietly reshapes the table",
    summary:
      "One point looked meaningless on the surface, but the draw tightened a congested mid-table race and shifted the pressure back onto the clubs above. Here is why the result matters more than the scoreline.",
    sport: "Soccer",
    category: "Result",
    readTime: "2 min read",
    timeAgo: "3h ago",
  },
  {
    slug: "ace-returns-from-injury",
    title: "A frontline starter returns, and the rotation math changes",
    summary:
      "After six weeks out, a key arm is back on the mound. The return is good news on its own, but it also forces a series of decisions about workload, depth, and the stretch run that follows.",
    sport: "Baseball",
    category: "Injury",
    readTime: "2 min read",
    timeAgo: "4h ago",
  },
];

/* -------------------------------------------------------------------------- */
/* Trending Now                                                               */
/* -------------------------------------------------------------------------- */

export const trends: Trend[] = [
  {
    rank: 1,
    name: "The veteran point guard's late-career surge",
    type: "Athlete",
    sport: "Basketball",
    blurb:
      "A run of efficient, high-assist performances has fans asking whether this is the best stretch of his career.",
    momentum: "Surging",
  },
  {
    rank: 2,
    name: "A mid-table club's unexpected winning streak",
    type: "Team",
    sport: "Soccer",
    blurb:
      "Four wins in a row turned a quiet season into a genuine talking point, and the schedule ahead is favorable.",
    momentum: "Rising",
  },
  {
    rank: 3,
    name: "The trade-deadline domino debate",
    type: "Topic",
    sport: "Basketball",
    blurb:
      "One move could trigger several others. Fans are mapping the ripple effects across contenders and rebuilders alike.",
    momentum: "Rising",
  },
  {
    rank: 4,
    name: "A young goaltender's shutout streak",
    type: "Athlete",
    sport: "Hockey",
    blurb:
      "Three consecutive clean sheets have pushed a once-quiet prospect into the center of the conversation.",
    momentum: "Surging",
  },
  {
    rank: 5,
    name: "The expansion-era schedule question",
    type: "Topic",
    sport: "Baseball",
    blurb:
      "Debate is building over how a denser calendar affects pitching depth and late-season durability.",
    momentum: "Steady",
  },
  {
    rank: 6,
    name: "A breakout returner on the tennis circuit",
    type: "Athlete",
    sport: "Tennis",
    blurb:
      "Back-to-back deep runs have reintroduced a familiar name to a new generation of fans.",
    momentum: "Rising",
  },
];

/* -------------------------------------------------------------------------- */
/* Fast Recaps                                                                */
/* -------------------------------------------------------------------------- */

export const recaps: Recap[] = [
  {
    slug: "metropolitans-vs-harbor",
    league: "Pro Basketball",
    sport: "Basketball",
    home: "Harbor City",
    away: "Metropolitans",
    homeScore: 112,
    awayScore: 118,
    status: "Final",
    summary:
      "A balanced road effort and a decisive third quarter carried the Metropolitans. Five players reached double figures while the hosts went cold from distance after halftime.",
  },
  {
    slug: "rivertown-vs-summit",
    league: "Pro Soccer",
    sport: "Soccer",
    home: "Rivertown FC",
    away: "Summit United",
    homeScore: 2,
    awayScore: 2,
    status: "Final",
    summary:
      "A back-and-forth draw decided by a late header. Rivertown controlled possession, but Summit's counterattacks kept the result in the balance until the final whistle.",
  },
  {
    slug: "northwind-vs-coastal",
    league: "Pro Hockey",
    sport: "Hockey",
    home: "Northwind",
    away: "Coastal",
    homeScore: 3,
    awayScore: 4,
    status: "Final / OT",
    summary:
      "Overtime settled a tight, low-event game. Coastal's goaltender stood out with a heavy workload before the winner came off a clean zone entry in the extra frame.",
  },
  {
    slug: "ironworks-vs-delta",
    league: "Pro Baseball",
    sport: "Baseball",
    home: "Ironworks",
    away: "Delta",
    homeScore: 5,
    awayScore: 1,
    status: "Final",
    summary:
      "A strong start and an early lead did the work. Ironworks pitching limited hard contact across seven innings, and a two-run double broke the game open in the fifth.",
  },
];

/* -------------------------------------------------------------------------- */
/* Explained                                                                  */
/* -------------------------------------------------------------------------- */

export const explainers: Explainer[] = [
  {
    slug: "why-a-mid-table-draw-matters",
    question: "Why does a single mid-table draw actually matter?",
    answer:
      "In a tight table, points are leverage. A draw can deny a rival momentum, change goal-difference tiebreakers, and shift the psychological pressure to the teams chasing from above. We explain how one result quietly reorders a race.",
    sport: "Soccer",
    topic: "Standings",
  },
  {
    slug: "what-a-deadline-trade-signals",
    question: "What does a deadline trade really signal?",
    answer:
      "Trades are rarely about a single player. They reveal how a front office reads its own window — whether it is buying time, betting on a run, or quietly resetting. Here is how to read the intent behind the move.",
    sport: "Basketball",
    topic: "Roster strategy",
  },
  {
    slug: "why-a-shutout-streak-is-hard",
    question: "Why is a goaltender shutout streak so hard to sustain?",
    answer:
      "Shutouts depend on both elite goaltending and disciplined team defense in front of it. Sustaining a streak requires limiting high-danger chances night after night, which is why these runs draw so much attention.",
    sport: "Hockey",
    topic: "Performance",
  },
  {
    slug: "how-pitch-workload-shapes-a-season",
    question: "How does pitch workload shape a full season?",
    answer:
      "Managing innings is a season-long balancing act. Push too hard early and depth thins out late; protect arms too cautiously and a contender can stall. We explain why workload decisions ripple far beyond a single game.",
    sport: "Baseball",
    topic: "Strategy",
  },
];

/* -------------------------------------------------------------------------- */
/* Homepage FAQ (SEO)                                                         */
/* -------------------------------------------------------------------------- */

export const faqs: Faq[] = [
  {
    question: "What is SportPulse?",
    answer:
      "SportPulse is an independent sports media and analysis project built to help fans understand what happened in sports each day. Instead of overwhelming you with raw scores, we focus on the result, the context, and why it mattered.",
  },
  {
    question: "Is SportPulse a live scores website?",
    answer:
      "Scores are only the entry point. Our goal is to explain the story behind the result — who is trending, what shifted, and what to watch next — in a format designed to be read quickly on a phone.",
  },
  {
    question: "Where does the content come from?",
    answer:
      "During this early MVP phase, SportPulse uses original, hand-written editorial samples to demonstrate the product experience. We do not publish copyrighted images, team logos, or player photography.",
  },
  {
    question: "Does SportPulse offer betting advice?",
    answer:
      "No. SportPulse does not provide betting tips, picks, or predictions. We are focused on clear, trustworthy explanation and analysis of sports events.",
  },
  {
    question: "How often is SportPulse updated?",
    answer:
      "SportPulse is designed around a daily briefing rhythm: a fast read in the morning and a recap of the night's results. As the platform grows, coverage and update frequency will expand.",
  },
];
