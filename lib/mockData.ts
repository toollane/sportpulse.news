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
  whyItMatters: string[];
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
/* Today's Pulse â€” key stories                                                */
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
    title: "The rookie class is no longer arriving â€” it has arrived",
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
  {
    slug: "overtime-thriller-on-the-road",
    title: "An overtime road win that says more than the standings do",
    summary:
      "A young team went on the road, weathered an early deficit, and closed out a one-possession game in the extra period. Composure in those final minutes is exactly the trait that tends to travel into the postseason.",
    sport: "Hockey",
    category: "Result",
    readTime: "2 min read",
    timeAgo: "5h ago",
  },
  {
    slug: "tactical-switch-pays-off",
    title: "A halftime tactical switch quietly decided the match",
    summary:
      "The score stayed level for an hour, but a shift in shape after the break opened space that had not been there before. We break down the adjustment and why it unlocked the game.",
    sport: "Soccer",
    category: "Analysis",
    readTime: "3 min read",
    timeAgo: "6h ago",
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
  {
    slug: "granite-vs-bayline",
    league: "Pro Basketball",
    sport: "Basketball",
    home: "Granite",
    away: "Bayline",
    homeScore: 99,
    awayScore: 104,
    status: "Final / OT",
    summary:
      "A defensive battle that needed an extra period. Bayline forced overtime with a late stop, then closed it out at the free-throw line as Granite ran out of clean looks down the stretch.",
  },
  {
    slug: "highland-vs-portside",
    league: "Pro Soccer",
    sport: "Soccer",
    home: "Highland",
    away: "Portside",
    homeScore: 1,
    awayScore: 0,
    status: "Final",
    summary:
      "One moment settled a cagey match. Highland defended the box well, absorbed pressure late, and took its single clear chance â€” a reminder that tight games often turn on margins, not dominance.",
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
    whyItMatters: [
      "Dropped points compound: a draw today can cost a team a tiebreaker months from now.",
      "It changes the pressure map, moving the burden onto the clubs expected to win.",
      "Goal difference often decides tight tables, so how a draw happens matters as much as that it happened.",
    ],
  },
  {
    slug: "what-a-deadline-trade-signals",
    question: "What does a deadline trade really signal?",
    answer:
      "Trades are rarely about a single player. They reveal how a front office reads its own window â€” whether it is buying time, betting on a run, or quietly resetting. Here is how to read the intent behind the move.",
    sport: "Basketball",
    topic: "Roster strategy",
    whyItMatters: [
      "The assets given up tell you how confident a team is in its current core.",
      "One move can shift the market and pressure rivals to respond.",
      "Reading intent early helps you understand the months of decisions that follow.",
    ],
  },
  {
    slug: "why-a-shutout-streak-is-hard",
    question: "Why is a goaltender shutout streak so hard to sustain?",
    answer:
      "Shutouts depend on both elite goaltending and disciplined team defense in front of it. Sustaining a streak requires limiting high-danger chances night after night, which is why these runs draw so much attention.",
    sport: "Hockey",
    topic: "Performance",
    whyItMatters: [
      "A streak is a team achievement as much as an individual one.",
      "It signals a structure that consistently suppresses quality chances.",
      "These runs rarely last, which is exactly why they capture attention while they do.",
    ],
  },
  {
    slug: "how-pitch-workload-shapes-a-season",
    question: "How does pitch workload shape a full season?",
    answer:
      "Managing innings is a season-long balancing act. Push too hard early and depth thins out late; protect arms too cautiously and a contender can stall. We explain why workload decisions ripple far beyond a single game.",
    sport: "Baseball",
    topic: "Strategy",
    whyItMatters: [
      "Early-season usage shapes how much is left in the tank for the stretch run.",
      "Depth decisions ripple across the whole roster, not just the rotation.",
      "Smart workload management is often the quiet difference between contenders.",
    ],
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
      "Scores are only the entry point. Our goal is to explain the story behind the result â€” who is trending, what shifted, and what to watch next â€” in a format designed to be read quickly on a phone.",
  },
  {
    question: "Where does the content come from?",
    answer:
      "SportPulse currently uses original, hand-written editorial briefings to demonstrate the product experience. We do not publish copyrighted images, team logos, or player photography.",
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

/* -------------------------------------------------------------------------- */
/* Per-section FAQs (content depth + SEO)                                     */
/* -------------------------------------------------------------------------- */

export type SectionKey = "tonight" | "trending" | "recaps" | "explained";

export const sectionFaqs: Record<SectionKey, Faq[]> = {
  tonight: [
    {
      question: "What is the daily pulse?",
      answer:
        "The daily pulse is a short, curated read on the night's most meaningful results. Rather than listing every final score, we highlight the games that changed something and explain the moment that decided each one.",
    },
    {
      question: "Why don't you cover every single game?",
      answer:
        "We prioritize signal over volume. Covering everything tends to bury what matters. By focusing on results that shift a standing, a streak, or a storyline, we keep the page fast to read and genuinely useful.",
    },
    {
      question: "Do you show live scores?",
      answer:
        "SportPulse is built around understanding, not live tracking. Scores are the starting point; the value is the context we add around them. Live data integrations may arrive in a later phase.",
    },
  ],
  trending: [
    {
      question: "How does SportPulse measure trending?",
      answer:
        "We treat attention as a signal. The board reflects the athletes, teams, and topics drawing the most interest, paired with a short, editorial note on the performance or storyline driving that interest.",
    },
    {
      question: "What do the momentum labels mean?",
      answer:
        "Each item is tagged surging, rising, steady, or cooling to show direction at a glance. Surging and rising indicate climbing interest; steady is sustained attention; cooling signals a storyline that is fading.",
    },
    {
      question: "Is the trend board automated?",
      answer:
        "In this phase the board is editorial and hand-curated to demonstrate the experience. As live trend data is added, the underlying signals will become data-driven while keeping the same clear, explanatory format.",
    },
  ],
  recaps: [
    {
      question: "How long does a recap take to read?",
      answer:
        "Each recap is written to be read in under a minute. You get the matchup and final at the top, then a few sentences on how the game actually unfolded.",
    },
    {
      question: "What makes a SportPulse recap different?",
      answer:
        "We focus on the shape of the game, not just the box score. A good recap should leave you understanding how a result happened, not only what the final number was â€” with no autoplay video or clutter.",
    },
    {
      question: "Are recaps available for every sport?",
      answer:
        "Our samples span several major team sports. As coverage expands, we plan to broaden the leagues and sports included while keeping the same fast, consistent format.",
    },
  ],
  explained: [
    {
      question: "What kind of questions does Explained answer?",
      answer:
        "Explained tackles the 'why' behind sports â€” why a quiet result matters, what a roster move signals, or how a streak holds up. It is built for the questions fans actually ask after the final whistle.",
    },
    {
      question: "Is Explained opinion or analysis?",
      answer:
        "It is explanatory analysis, not hot takes. We aim to clarify the strategy, stakes, and ripple effects behind a story in plain language, so you finish knowing more than when you started.",
    },
    {
      question: "Does Explained include predictions or betting tips?",
      answer:
        "No. SportPulse does not publish betting tips, picks, or predictions. Explained is focused on helping you understand events, not on forecasting outcomes or encouraging wagering.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Editorial principles (About / trust)                                       */
/* -------------------------------------------------------------------------- */

export const editorialPrinciples: { title: string; body: string }[] = [
  {
    title: "We focus on understanding",
    body: "Our coverage centers on sports trends, fast recaps, clear explanations, and daily briefings. The goal is always comprehension: what happened, why it mattered, and what to watch next.",
  },
  {
    title: "We label what things are",
    body: "Analysis is presented as analysis and summaries as summaries. SportPulse clearly describes editorial briefing content as original material rather than live reporting.",
  },
  {
    title: "We correct mistakes",
    body: "If something is inaccurate, we want to fix it. Readers can reach us directly, and corrections are treated as a priority, not an afterthought.",
  },
  {
    title: "We avoid harmful content",
    body: "SportPulse does not publish betting tips, gambling recommendations, or misleading clickbait, and it does not use copyrighted logos, team branding, or player photography.",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact topics                                                             */
/* -------------------------------------------------------------------------- */

export const contactTopics: { title: string; body: string }[] = [
  {
    title: "General questions",
    body: "Curious about the project, our approach, or where SportPulse is headed? We're happy to share more.",
  },
  {
    title: "Corrections",
    body: "Spotted something that looks off? Let us know and we'll review it quickly. Accuracy matters to us.",
  },
  {
    title: "Feedback & ideas",
    body: "Tell us what would make SportPulse more useful â€” a sport to cover, a format to try, or a feature to build.",
  },
  {
    title: "Partnerships",
    body: "For collaboration or media inquiries, reach out and tell us a little about what you have in mind.",
  },
];
