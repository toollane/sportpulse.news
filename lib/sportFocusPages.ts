export type SportFocusPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  benefit: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  preview: {
    title: string;
    badge: string;
    rows: {
      label: string;
      title: string;
      text: string;
      tag: string;
    }[];
  };
  searchTitle: string;
  searchText: string;
  searchExamples: {
    query: string;
    answer: string;
  }[];
  readTitle: string;
  readText: string;
  readSteps: {
    label: string;
    text: string;
  }[];
  comparisonTitle: string;
  comparisonText: string;
  scoreboardItems: string[];
  sportPulseItems: string[];
  modulesTitle: string;
  modulesText: string;
  modules: {
    title: string;
    text: string;
  }[];
  trustText: string;
  finalCtaTitle: string;
  finalCtaText: string;
  finalCta: {
    label: string;
    href: string;
  };
};

export const sportFocusPages = {
  nba: {
    eyebrow: "NBA Pulse Today",
    title: "Catch up on the NBA night without opening five tabs.",
    description:
      "Turn Lakers vs Celtics into the result, the late swing, the player signal, the fantasy usage note, and what matters tonight.",
    benefit:
      "Best for fans who missed the games, saw one score, and want the real NBA story in under a minute.",
    primaryCta: {
      label: "Read fast recaps",
      href: "/recaps",
    },
    secondaryCta: {
      label: "See what is trending",
      href: "/trending",
    },
    preview: {
      title: "NBA Pulse Today",
      badge: "Editorial preview",
      rows: [
        {
          label: "Quick answer",
          title: "Who won and what was the headline?",
          text: "Start with the result and the one sentence a fan needs first.",
          tag: "Result",
        },
        {
          label: "What changed",
          title: "Which run or matchup flipped the night?",
          text: "Late runs, rotation tweaks, and momentum swings explain more than the final.",
          tag: "Swing",
        },
        {
          label: "Signal",
          title: "Who gained minutes, usage, or attention?",
          text: "Player and rotation signals help separate real opportunity from one-game noise.",
          tag: "Usage",
        },
        {
          label: "Watch next",
          title: "Which game or player matters tonight?",
          text: "Connect last night's result to the next matchup worth tracking.",
          tag: "Next",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "NBA searches usually start with a score or schedule. SportPulse adds the context a fan actually came to understand.",
    searchExamples: [
      {
        query: "Lakers vs Celtics",
        answer:
          "Get the result, the late swing, the matchup problem, and the player story that explains the game.",
      },
      {
        query: "Warriors vs Lakers score",
        answer:
          "See the score, then understand the run, rotation shift, and fantasy-relevant usage change.",
      },
      {
        query: "NBA games tonight",
        answer:
          "Scan the games that matter and know which matchup, player, or storyline deserves attention.",
      },
    ],
    readTitle: "The 30-second NBA read.",
    readText:
      "A fast NBA catch-up should move from result to meaning without forcing fans through a full recap.",
    readSteps: [
      {
        label: "Result",
        text: "Who won, what was close, and which game shaped the night.",
      },
      {
        label: "Swing",
        text: "The late run, lineup decision, or momentum shift behind the final.",
      },
      {
        label: "Signal",
        text: "The player, rotation, or fantasy basketball usage change worth noticing.",
      },
      {
        label: "Next",
        text: "What to watch tonight and which storyline carries forward.",
      },
    ],
    comparisonTitle: "Why not just check the score?",
    comparisonText:
      "The score tells you the outcome. NBA Pulse Today tells you why the outcome matters.",
    scoreboardItems: [
      "Final score and basic game status",
      "Team names and scheduled games",
      "Limited context around player usage",
    ],
    sportPulseItems: [
      "Late runs, rotation watch, and momentum swings",
      "Player signal and fantasy basketball usage context",
      "What changed and what to watch tonight",
    ],
    modulesTitle: "NBA tools for fast catch-up.",
    modulesText:
      "Each module answers the next question after a fan checks the score.",
    modules: [
      {
        title: "Find tonight's best watch",
        text: "See which NBA games matter most and why they deserve attention.",
      },
      {
        title: "Understand last night's swing",
        text: "Turn a final score into the run, matchup, or decision that changed the game.",
      },
      {
        title: "Spot the player signal",
        text: "Know whether a trending performance points to role, usage, or one-game noise.",
      },
      {
        title: "Read the rotation watch",
        text: "Track minutes, bench roles, and lineup shifts that change the story.",
      },
      {
        title: "Catch the fantasy usage note",
        text: "Find the usage change without reading a full recap.",
      },
      {
        title: "Know what to watch next",
        text: "Carry the result into tonight's matchup, player, or pressure point.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No live score claims until connected to a verified data source.",
    finalCtaTitle: "Turn the NBA night into context.",
    finalCtaText:
      "Read the result, the swing, the player signal, and what changes next.",
    finalCta: {
      label: "Read NBA-style recaps",
      href: "/recaps",
    },
  },

  nfl: {
    eyebrow: "NFL Week Pulse",
    title: "Reset the NFL week without chasing every box score.",
    description:
      "Turn Chiefs vs Bills, Cowboys vs Eagles, or NFL schedule today into matchup stakes, Sunday reset, injury impact, fantasy signal, and Monday context.",
    benefit:
      "Best for fans who want to understand the week before kickoff and reset fast after Sunday.",
    primaryCta: {
      label: "Read recap guides",
      href: "/recaps",
    },
    secondaryCta: {
      label: "Scan trending stories",
      href: "/trending",
    },
    preview: {
      title: "NFL Week Pulse",
      badge: "Weekly view",
      rows: [
        {
          label: "Quick answer",
          title: "Which matchup matters most?",
          text: "Start with the schedule, the stakes, and the pressure point.",
          tag: "Matchup",
        },
        {
          label: "What changed",
          title: "Who moved after Sunday?",
          text: "Reset the week through teams under pressure, injuries, and storylines.",
          tag: "Reset",
        },
        {
          label: "Signal",
          title: "What changed for fantasy football?",
          text: "Touches, snaps, targets, injuries, and role changes matter more than hype.",
          tag: "Fantasy",
        },
        {
          label: "Watch next",
          title: "What does Monday change?",
          text: "Connect Sunday to the final game of the week and the next pressure point.",
          tag: "Monday",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "NFL searches are matchup-driven. SportPulse turns them into stakes, pressure, injury context, fantasy impact, and the next story to follow.",
    searchExamples: [
      {
        query: "Chiefs vs Bills",
        answer:
          "Understand the matchup stakes, the pressure point, and the fantasy football signal before kickoff.",
      },
      {
        query: "Cowboys vs Eagles",
        answer:
          "See why the game matters, which team is under pressure, and what changes after the result.",
      },
      {
        query: "NFL schedule today",
        answer:
          "Scan the slate by relevance, not just kickoff time, and know what to watch next.",
      },
    ],
    readTitle: "The 30-second NFL read.",
    readText:
      "NFL Week Pulse gives fans the matchup, the Sunday reset, and the fantasy-relevant signal fast.",
    readSteps: [
      {
        label: "Result",
        text: "Who won, which matchup mattered, and what the Sunday slate changed.",
      },
      {
        label: "Swing",
        text: "The drive, turnover, injury, or matchup edge that shifted the week.",
      },
      {
        label: "Signal",
        text: "The team pressure, injury impact, or fantasy football usage note to monitor.",
      },
      {
        label: "Next",
        text: "The Monday context and the next matchup question.",
      },
    ],
    comparisonTitle: "Why not just check the score?",
    comparisonText:
      "The score tells you who won. NFL Week Pulse explains what the win changes.",
    scoreboardItems: [
      "Final score, schedule, and basic status",
      "Minimal explanation of matchup stakes",
      "Injury notes without role context",
    ],
    sportPulseItems: [
      "Matchup stakes before kickoff",
      "Sunday reset with teams under pressure",
      "Injury and fantasy football signal in plain English",
    ],
    modulesTitle: "NFL tools for weekly clarity.",
    modulesText:
      "Each module helps fans understand the week before and after it happens.",
    modules: [
      {
        title: "Know why the matchup matters",
        text: "See the stakes, pressure, and fantasy angle before kickoff.",
      },
      {
        title: "Reset after Sunday",
        text: "Understand which teams rose, slipped, or created new questions.",
      },
      {
        title: "Track teams under pressure",
        text: "Know who needs a response and why the next game matters.",
      },
      {
        title: "Read injury impact",
        text: "Translate availability into role, usage, and matchup context.",
      },
      {
        title: "Find the fantasy signal",
        text: "Focus on snaps, touches, targets, and opportunity.",
      },
      {
        title: "Follow Monday context",
        text: "See what the final game can change for the week.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No live score, injury, or fantasy projection claims until connected to a verified data source.",
    finalCtaTitle: "NFL fans need the reset, not just the result.",
    finalCtaText:
      "Turn the matchup into stakes, the final into context, and the injury note into what changes next.",
    finalCta: {
      label: "Explore NFL context",
      href: "/explained",
    },
  },

  mlb: {
    eyebrow: "MLB Daily Pulse",
    title: "Turn the daily baseball slate into context fast.",
    description:
      "Turn Yankees vs Red Sox, Dodgers vs Giants, or MLB games today into series context, probable pitchers, bullpen impact, wild card movement, and fantasy baseball signal.",
    benefit:
      "Best for fans who want the daily rhythm of baseball without losing the thread across series and standings races.",
    primaryCta: {
      label: "Read fast recaps",
      href: "/recaps",
    },
    secondaryCta: {
      label: "Explore explainers",
      href: "/explained",
    },
    preview: {
      title: "MLB Daily Pulse",
      badge: "Daily rhythm",
      rows: [
        {
          label: "Quick answer",
          title: "Which games matter today?",
          text: "Start with the slate, rivalry, series spot, and standings pressure.",
          tag: "Slate",
        },
        {
          label: "What changed",
          title: "How did the series move?",
          text: "One result can change bullpen stress, wild card pressure, and the next game.",
          tag: "Starter",
        },
        {
          label: "Signal",
          title: "Which pitcher, bullpen, or role matters?",
          text: "Probable pitchers and late-inning usage shape the baseball read.",
          tag: "Race",
        },
        {
          label: "Watch next",
          title: "What changes in the next game?",
          text: "Follow the series, wild card race, and fantasy baseball angle.",
          tag: "Next",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "MLB searches often start with today's game. SportPulse adds the series, starter, bullpen, standings, and fantasy baseball context.",
    searchExamples: [
      {
        query: "Yankees vs Red Sox",
        answer:
          "Get the series context, starter lens, division pressure, and what changes after the final.",
      },
      {
        query: "Dodgers vs Giants",
        answer:
          "Understand the rivalry game through pitching, bullpen usage, and the next series question.",
      },
      {
        query: "MLB games today",
        answer:
          "Scan the slate by relevance: probable pitchers, wild card movement, and fantasy baseball signals.",
      },
    ],
    readTitle: "The 30-second MLB read.",
    readText:
      "Baseball needs daily context: series, starters, bullpens, races, and the next game.",
    readSteps: [
      {
        label: "Result",
        text: "Which game or series changed the baseball day.",
      },
      {
        label: "Swing",
        text: "The inning, pitching decision, or bullpen moment that moved the game.",
      },
      {
        label: "Signal",
        text: "The starter, bullpen, wild card, or fantasy baseball note worth tracking.",
      },
      {
        label: "Next",
        text: "How the next game, series, or standings race changes.",
      },
    ],
    comparisonTitle: "Why not just check the score?",
    comparisonText:
      "A baseball score can hide the series story. MLB Daily Pulse keeps the rhythm clear.",
    scoreboardItems: [
      "Final score and basic schedule",
      "Probable pitchers without context",
      "Standings separated from the game story",
    ],
    sportPulseItems: [
      "Series context and daily slate priority",
      "Starting pitcher lens and bullpen impact",
      "Wild card movement and fantasy baseball signal",
    ],
    modulesTitle: "MLB tools for daily context.",
    modulesText:
      "Each module helps fans understand the daily slate and what carries into tomorrow.",
    modules: [
      {
        title: "Prioritize today's slate",
        text: "See which games matter most on a crowded baseball day.",
      },
      {
        title: "Understand the series",
        text: "Know why the current matchup matters beyond one final.",
      },
      {
        title: "Read the starter lens",
        text: "Use probable pitchers to understand lineups, risk, and fantasy interest.",
      },
      {
        title: "Watch bullpen impact",
        text: "Track late-game usage and fatigue that affects the next game.",
      },
      {
        title: "Follow wild card movement",
        text: "Connect one result to the race and the next series.",
      },
      {
        title: "Find fantasy baseball signals",
        text: "Spot role, playing time, and waiver-relevant context.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No live score or probable pitcher claims until connected to a verified data source.",
    finalCtaTitle: "Baseball is a daily context sport.",
    finalCtaText:
      "Turn the slate into series context, pitching pressure, standings movement, and what to watch next.",
    finalCta: {
      label: "Read recap guides",
      href: "/recaps",
    },
  },

  nhl: {
    eyebrow: "NHL Ice Pulse",
    title: "Understand the night on ice beyond the final score.",
    description:
      "Turn Maple Leafs vs Canadiens, Rangers vs Bruins, or NHL games tonight into goalie context, line changes, power-play signal, playoff pressure, and fantasy hockey notes.",
    benefit:
      "Best for fans who want the result, the crease story, the special-teams edge, and the playoff race in one scan.",
    primaryCta: {
      label: "Read game recaps",
      href: "/recaps",
    },
    secondaryCta: {
      label: "Scan sports trends",
      href: "/trending",
    },
    preview: {
      title: "NHL Ice Pulse",
      badge: "Ice view",
      rows: [
        {
          label: "Quick answer",
          title: "Which game matters tonight?",
          text: "Start with the matchup, rivalry, goalie question, and standings pressure.",
          tag: "Tonight",
        },
        {
          label: "What changed",
          title: "What shifted on the ice?",
          text: "Line movement, special teams, and goalie performance can explain the final.",
          tag: "Goalie",
        },
        {
          label: "Signal",
          title: "Which role or power play matters?",
          text: "Spot the deployment, opportunity, or fantasy hockey note behind the game.",
          tag: "Signal",
        },
        {
          label: "Watch next",
          title: "What changes in the race?",
          text: "Connect tonight's result to the playoff picture and next matchup.",
          tag: "Race",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "NHL searches start with games tonight or a rivalry. SportPulse adds the goalie, lines, power play, playoff race, and fantasy hockey context.",
    searchExamples: [
      {
        query: "Maple Leafs vs Canadiens",
        answer:
          "See the result, rivalry context, goalie lens, and playoff race signal in one read.",
      },
      {
        query: "Rangers vs Bruins",
        answer:
          "Understand the matchup through line movement, special teams, and the pressure around the next game.",
      },
      {
        query: "NHL games tonight",
        answer:
          "Scan the slate by goalie context, playoff race stakes, and fantasy hockey notes.",
      },
    ],
    readTitle: "The 30-second NHL read.",
    readText:
      "NHL Ice Pulse turns a fast score check into the context behind the game.",
    readSteps: [
      {
        label: "Result",
        text: "Who won and which game shaped the night.",
      },
      {
        label: "Swing",
        text: "The goalie stretch, line change, or special-teams moment that moved the result.",
      },
      {
        label: "Signal",
        text: "The power-play, line, playoff, or fantasy hockey note that matters next.",
      },
      {
        label: "Next",
        text: "The next game, race movement, or player role to watch.",
      },
    ],
    comparisonTitle: "Why not just check the score?",
    comparisonText:
      "A hockey final can miss the reason the game tilted. NHL Ice Pulse shows the signal behind the score.",
    scoreboardItems: [
      "Final score and game list",
      "Goalie or lineup notes without explanation",
      "Standings away from the game context",
    ],
    sportPulseItems: [
      "Goalie lens and line movement",
      "Power-play signal and playoff race context",
      "Fantasy hockey note and what to watch next",
    ],
    modulesTitle: "NHL tools for fast ice context.",
    modulesText:
      "Each module explains the detail that can make a hockey result matter.",
    modules: [
      {
        title: "Find tonight's key games",
        text: "See the matchups and rivalries worth tracking.",
      },
      {
        title: "Read the goalie lens",
        text: "Understand how the crease changes the matchup.",
      },
      {
        title: "Track line changes",
        text: "Spot role, chemistry, and deployment shifts.",
      },
      {
        title: "Spot power-play signals",
        text: "Know where special teams created the edge.",
      },
      {
        title: "Follow playoff race context",
        text: "Connect the result to standings pressure.",
      },
      {
        title: "Find fantasy hockey notes",
        text: "See usage, role, and opportunity without unsupported advice.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No live score, goalie confirmation, or fantasy impact claims until connected to a verified data source.",
    finalCtaTitle: "Hockey context moves fast.",
    finalCtaText:
      "Read the matchup, the goalie signal, the special-teams edge, and what changes next.",
    finalCta: {
      label: "Explore hockey-style context",
      href: "/explained",
    },
  },

  golf: {
    eyebrow: "Golf Tournament Pulse",
    title: "Follow the tournament without staring at the leaderboard all day.",
    description:
      "Turn Masters leaderboard, who is leading today, or Scottie Scheffler score into leaderboard movement, round swings, player form, major storylines, and Sunday pressure.",
    benefit:
      "Best for fans who want to know who moved, why the round changed, and what pressure looks like next.",
    primaryCta: {
      label: "Read explainers",
      href: "/explained",
    },
    secondaryCta: {
      label: "See trending stories",
      href: "/trending",
    },
    preview: {
      title: "Golf Tournament Pulse",
      badge: "Tournament view",
      rows: [
        {
          label: "Quick answer",
          title: "Who is leading and who is moving?",
          text: "Start with the tournament board and the leaderboard change.",
          tag: "Board",
        },
        {
          label: "What changed",
          title: "Which stretch flipped the round?",
          text: "A run of birdies, a mistake, or a closing stretch can reset the story.",
          tag: "Swing",
        },
        {
          label: "Signal",
          title: "Whose form is real?",
          text: "Separate a hot round from a player trend worth tracking.",
          tag: "Pressure",
        },
        {
          label: "Watch next",
          title: "Where is Sunday pressure building?",
          text: "Know who is chasing, who is protecting, and which major storyline matters.",
          tag: "Next",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "Golf search is different. Fans search leaders, scores, and tournaments; SportPulse explains movement, pressure, and player form.",
    searchExamples: [
      {
        query: "Masters leaderboard",
        answer:
          "See who leads, who moved, which stretch changed the round, and what Sunday pressure looks like.",
      },
      {
        query: "who is leading today",
        answer:
          "Get the quick answer plus the chase group, round swing, and major storyline.",
      },
      {
        query: "Scottie Scheffler score",
        answer:
          "Understand the score through player form, course pressure, and what it changes on the board.",
      },
    ],
    readTitle: "The 30-second golf read.",
    readText:
      "Golf Tournament Pulse is built around movement, pressure, and form rather than team-versus-team context.",
    readSteps: [
      {
        label: "Result",
        text: "Who leads, who moved, and where the leaderboard sits.",
      },
      {
        label: "Swing",
        text: "The stretch, mistake, or surge that changed the round.",
      },
      {
        label: "Signal",
        text: "The player form, major storyline, or pressure signal to track.",
      },
      {
        label: "Next",
        text: "The chase, Sunday pressure, and next round watchlist.",
      },
    ],
    comparisonTitle: "Why not just check the leaderboard?",
    comparisonText:
      "The leaderboard tells you position. Golf Tournament Pulse explains movement and pressure.",
    scoreboardItems: [
      "Leaderboard position and player score",
      "Round totals without the story",
      "Limited explanation of pressure or form",
    ],
    sportPulseItems: [
      "Leaderboard movement and round swing",
      "Player form and major storyline",
      "Sunday pressure and what to watch next",
    ],
    modulesTitle: "Golf tools for tournament context.",
    modulesText:
      "Each module explains why a leaderboard changed and what could change next.",
    modules: [
      {
        title: "Read the tournament board",
        text: "See the leaderboard through movement, not only position.",
      },
      {
        title: "Track leaderboard movement",
        text: "Know who climbed, who slipped, and why it matters.",
      },
      {
        title: "Understand the round swing",
        text: "Find the stretch that changed the tournament story.",
      },
      {
        title: "Read player form",
        text: "See the signal behind a score or sudden surge.",
      },
      {
        title: "Follow the major storyline",
        text: "Understand the narrative framing the tournament.",
      },
      {
        title: "Prepare for Sunday pressure",
        text: "Know what to watch when the leaderboard tightens.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No live leaderboard claims until connected to a verified data source.",
    finalCtaTitle: "Golf is about movement and pressure.",
    finalCtaText:
      "Turn leaderboard checks into player form, round swings, and what to watch next.",
    finalCta: {
      label: "Explore trend context",
      href: "/trending",
    },
  },

  fantasy: {
    eyebrow: "Fantasy Impact Center",
    title: "Understand the fantasy signal before chasing the hype.",
    description:
      "Turn fantasy football injury impact, waiver wire signal, or fantasy basketball usage into injury context, role change, opportunity watch, and start/sit factors.",
    benefit:
      "Best for fantasy users who need to know whether a player trend is signal or noise.",
    primaryCta: {
      label: "View player trends",
      href: "/trending",
    },
    secondaryCta: {
      label: "Read explainers",
      href: "/explained",
    },
    preview: {
      title: "Fantasy Impact Center",
      badge: "Signal view",
      rows: [
        {
          label: "Quick answer",
          title: "What changed for the player?",
          text: "Start with injury, role, usage, or matchup context.",
          tag: "Waiver",
        },
        {
          label: "What changed",
          title: "Who gained opportunity?",
          text: "Translate availability and usage into role context.",
          tag: "Impact",
        },
        {
          label: "Signal",
          title: "Is this trend signal or noise?",
          text: "Minutes, snaps, touches, and targets explain the move.",
          tag: "Usage",
        },
        {
          label: "Watch next",
          title: "What should managers monitor?",
          text: "Know the next injury note, role trend, matchup, or recap signal.",
          tag: "Next",
        },
      ],
    },
    searchTitle: "You searched. SportPulse answers.",
    searchText:
      "Fantasy searches start when something changes. SportPulse explains the signal before the hype takes over.",
    searchExamples: [
      {
        query: "fantasy football injury impact",
        answer:
          "See who may gain role, touches, or targets and what to monitor next.",
      },
      {
        query: "waiver wire signal",
        answer:
          "Understand why a player is gaining attention before chasing the trend.",
      },
      {
        query: "fantasy basketball usage",
        answer:
          "Track minutes, role, and opportunity changes after a game.",
      },
    ],
    readTitle: "The 30-second fantasy read.",
    readText:
      "Fantasy Impact Center moves from news to signal without pretending certainty.",
    readSteps: [
      {
        label: "Result",
        text: "What happened in the game, injury note, or player role.",
      },
      {
        label: "Swing",
        text: "The usage, availability, or matchup change that moved the fantasy question.",
      },
      {
        label: "Signal",
        text: "Whether the trend points to opportunity, role, waiver value, or noise.",
      },
      {
        label: "Next",
        text: "The next report, game, matchup, or usage trend to monitor.",
      },
    ],
    comparisonTitle: "Why not just check the box score?",
    comparisonText:
      "The box score shows production. Fantasy Impact Center explains whether the role changed.",
    scoreboardItems: [
      "Points, touches, minutes, or targets",
      "Player status without role context",
      "Trend noise after one game",
    ],
    sportPulseItems: [
      "Injury impact and opportunity watch",
      "Usage changes and waiver signals",
      "Start/sit context without unsupported predictions",
    ],
    modulesTitle: "Fantasy tools for signal clarity.",
    modulesText:
      "Each module helps fantasy users understand what changed before reacting.",
    modules: [
      {
        title: "Understand the waiver signal",
        text: "Know why a player is becoming relevant before chasing the add.",
      },
      {
        title: "Read injury impact",
        text: "See who may gain role, touches, minutes, or targets.",
      },
      {
        title: "Track usage changes",
        text: "Watch opportunity move across games, not just one box score.",
      },
      {
        title: "Monitor opportunity watch",
        text: "Find players whose roles deserve another look.",
      },
      {
        title: "Frame start/sit context",
        text: "Use matchup and role context without unsupported calls.",
      },
      {
        title: "Scan the fantasy recap",
        text: "Catch what fantasy users should notice after the final.",
      },
    ],
    trustText:
      "This page uses an editorial preview and a data-ready format. Live data will be added only when reliable. No projection, injury, or start/sit claims until connected to a verified data source.",
    finalCtaTitle: "Fantasy starts with what changed.",
    finalCtaText:
      "Understand the signal, the opportunity, and the next thing to monitor.",
    finalCta: {
      label: "Explore player trend context",
      href: "/trending",
    },
  },
} satisfies Record<string, SportFocusPageContent>;