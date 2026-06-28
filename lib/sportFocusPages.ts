export type SportFocusPageContent = {
  eyebrow: string;
  title: string;
  description: string;
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
  intentTitle: string;
  intentText: string;
  intentChips: string[];
  answerTitle: string;
  answerText: string;
  answerCards: {
    kicker: string;
    title: string;
    text: string;
  }[];
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
      "See the result, the swing, the player signal, the rotation watch, and what changes next. NBA Pulse Today turns matchup searches into context for fans who want the story fast.",
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
          label: "Tonight's board",
          title: "Lakers vs Celtics context before the noise",
          text: "A matchup search should answer the game, the stakes, and the player story in one scan.",
          tag: "Board",
        },
        {
          label: "Last night's swing",
          title: "Warriors vs Lakers score becomes the start",
          text: "SportPulse explains the late run, rotation change, or matchup problem behind the final.",
          tag: "Swing",
        },
        {
          label: "Fantasy usage note",
          title: "Minutes, role, and opportunity before hype",
          text: "Understand the fantasy basketball signal before chasing the player trend.",
          tag: "Usage",
        },
      ],
    },
    intentTitle: "What NBA fans usually search.",
    intentText:
      "NBA search is fast and player-driven. Fans want tonight's games, last night's winner, why a player is trending after one game, and whether a usage change matters.",
    intentChips: [
      "Lakers vs Celtics",
      "Warriors vs Lakers score",
      "NBA games tonight",
      "who won last night",
      "player trending after one game",
      "fantasy basketball usage",
    ],
    answerTitle: "The SportPulse NBA answer layer.",
    answerText:
      "A raw NBA scoreboard gives the final. SportPulse adds the swing, the rotation watch, the player signal, the fantasy angle, and the next matchup to follow.",
    answerCards: [
      {
        kicker: "Result",
        title: "What happened first?",
        text: "Start with the matchup, outcome, and the headline so the fan gets oriented immediately.",
      },
      {
        kicker: "Swing",
        title: "Where did the game turn?",
        text: "Identify the run, lineup decision, shot-quality change, or late-game sequence that mattered.",
      },
      {
        kicker: "Player signal",
        title: "Who moved the conversation?",
        text: "Explain the player gaining attention because of usage, scoring role, defense, or a clutch moment.",
      },
      {
        kicker: "Fantasy",
        title: "What should fantasy users notice?",
        text: "Focus on minutes, role, touches, and opportunity without unsupported projections.",
      },
    ],
    modulesTitle: "NBA modules that answer the next question.",
    modulesText:
      "Each module is designed to move a fan from score to understanding without becoming a raw stats dump.",
    modules: [
      {
        title: "Tonight's board",
        text: "The games that deserve attention and why they matter.",
      },
      {
        title: "Last night's swing",
        text: "The sequence or decision that changed the final.",
      },
      {
        title: "Player signal",
        text: "The athlete whose role or momentum deserves a second look.",
      },
      {
        title: "Rotation watch",
        text: "Minutes, bench roles, and lineup shifts that change the story.",
      },
      {
        title: "Fantasy usage note",
        text: "What changed for fantasy basketball managers to monitor.",
      },
      {
        title: "What to watch next",
        text: "The next matchup, player, or pressure point worth following.",
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
      "NFL Week Pulse turns matchup searches into clear context: pressure teams, injury impact, fantasy football signals, Sunday reset, and Monday context.",
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
          label: "This week's matchups",
          title: "Chiefs vs Bills before kickoff",
          text: "See the stakes, the pressure point, and the fantasy-relevant question.",
          tag: "Matchup",
        },
        {
          label: "Sunday reset",
          title: "Who won Sunday night and what moved?",
          text: "Turn the final into team pressure, injury impact, and Monday context.",
          tag: "Reset",
        },
        {
          label: "Fantasy football signal",
          title: "Waiver watch without the hype",
          text: "Focus on touches, snaps, targets, injuries, and opportunity.",
          tag: "Fantasy",
        },
      ],
    },
    intentTitle: "What NFL fans usually search.",
    intentText:
      "NFL search is matchup-heavy and weekly. Fans want schedules, Sunday winners, injury impact, fantasy football context, and the pressure around the next game.",
    intentChips: [
      "Chiefs vs Bills",
      "Cowboys vs Eagles",
      "NFL schedule today",
      "NFL injury impact",
      "fantasy football waiver watch",
      "who won Sunday night",
    ],
    answerTitle: "The SportPulse NFL answer layer.",
    answerText:
      "A raw schedule tells fans who plays. SportPulse explains why the game matters, what changed after Sunday, which teams are under pressure, and what fantasy users should notice.",
    answerCards: [
      {
        kicker: "Matchup",
        title: "Why does this game matter?",
        text: "Connect the matchup to pressure, rivalry, playoff context, or fantasy relevance.",
      },
      {
        kicker: "Sunday reset",
        title: "What changed after the slate?",
        text: "Explain the teams rising, concerns growing, and stories moving into Monday.",
      },
      {
        kicker: "Injury impact",
        title: "Which roles changed?",
        text: "Translate availability into usage, opportunity, and matchup context.",
      },
      {
        kicker: "Fantasy signal",
        title: "What should managers notice?",
        text: "Track role changes, touches, snaps, targets, and opportunity without unsupported predictions.",
      },
    ],
    modulesTitle: "NFL modules for a weekly command center.",
    modulesText:
      "NFL fans need context before kickoff and a clear reset after Sunday.",
    modules: [
      {
        title: "This week's matchups",
        text: "A clean scan of the games that matter most.",
      },
      {
        title: "Sunday reset",
        text: "What changed after the main slate.",
      },
      {
        title: "Teams under pressure",
        text: "Which teams need a response and why.",
      },
      {
        title: "Injury watch",
        text: "Availability translated into role and matchup impact.",
      },
      {
        title: "Fantasy football signal",
        text: "Usage and opportunity notes for fantasy managers.",
      },
      {
        title: "Monday context",
        text: "What the final game of the week can change.",
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
    title: "Read the baseball day through series, starters, and races.",
    description:
      "MLB Daily Pulse helps fans move from a score search to the series context, starting pitcher lens, bullpen watch, wild card movement, and fantasy baseball signal.",
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
          label: "Today's slate",
          title: "Yankees vs Red Sox as more than a score",
          text: "Series context, division pressure, and the matchup behind the matchup.",
          tag: "Slate",
        },
        {
          label: "Pitcher lens",
          title: "Probable pitchers shape the read",
          text: "Starting pitching changes how to interpret lineups, bullpen pressure, and fantasy interest.",
          tag: "Starter",
        },
        {
          label: "Race movement",
          title: "Wild card context after the final",
          text: "A single result can change pressure across the next series.",
          tag: "Race",
        },
      ],
    },
    intentTitle: "What MLB fans usually search.",
    intentText:
      "Baseball search follows a daily rhythm: rivalry matchups, games today, probable pitchers, standings movement, series context, and fantasy baseball opportunity.",
    intentChips: [
      "Yankees vs Red Sox",
      "Dodgers vs Giants",
      "MLB games today",
      "probable pitchers",
      "wild card race",
      "fantasy baseball waiver signal",
    ],
    answerTitle: "The SportPulse MLB answer layer.",
    answerText:
      "A baseball score is one part of the day. SportPulse adds the series lens, starter context, bullpen stress, standings pressure, and what the next game can change.",
    answerCards: [
      {
        kicker: "Slate",
        title: "Which games deserve attention?",
        text: "Sort the daily board by rivalry, standings impact, pitching matchup, and series pressure.",
      },
      {
        kicker: "Starter",
        title: "What does the pitching matchup change?",
        text: "Explain how probable pitchers shape the lineup, bullpen, and fantasy angle.",
      },
      {
        kicker: "Bullpen",
        title: "Who is under stress?",
        text: "Track late-inning usage and the ripple effect across the next game.",
      },
      {
        kicker: "Race",
        title: "What moved in the standings?",
        text: "Connect the final to wild card pressure, division movement, and the next series.",
      },
    ],
    modulesTitle: "MLB modules built for daily rhythm.",
    modulesText:
      "Baseball needs a different hub: daily slate, series context, pitchers, bullpens, races, and fantasy signals.",
    modules: [
      {
        title: "Today's slate",
        text: "The games that matter most on a crowded baseball day.",
      },
      {
        title: "Series context",
        text: "Why the current matchup matters beyond one final.",
      },
      {
        title: "Starting pitcher lens",
        text: "How the probable starter changes the story.",
      },
      {
        title: "Bullpen watch",
        text: "Late-game usage and fatigue signals to monitor.",
      },
      {
        title: "Wild card movement",
        text: "How one result changes the race.",
      },
      {
        title: "Fantasy baseball signal",
        text: "Role, playing time, and waiver-relevant context.",
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
      "NHL Ice Pulse gives fans a fast way to read matchups, goalie context, line movement, power-play signals, playoff race pressure, and fantasy hockey impact.",
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
          label: "Tonight on ice",
          title: "Maple Leafs vs Canadiens context",
          text: "Rivalry, pace, goalie question, and standings pressure in one scan.",
          tag: "Tonight",
        },
        {
          label: "Goalie lens",
          title: "Confirmed starter changes the read",
          text: "The goalie decision affects matchup quality, confidence, and fantasy attention.",
          tag: "Goalie",
        },
        {
          label: "Power-play signal",
          title: "Special teams can swing the story",
          text: "Understand the advantage before the final score flattens the game.",
          tag: "Signal",
        },
      ],
    },
    intentTitle: "What NHL fans usually search.",
    intentText:
      "NHL fans search tonight's games, rivalry matchups, goalie context, playoff races, and fantasy hockey impact. SportPulse turns those searches into a fast read.",
    intentChips: [
      "Maple Leafs vs Canadiens",
      "Rangers vs Bruins",
      "NHL games tonight",
      "goalie confirmed",
      "playoff race",
      "fantasy hockey impact",
    ],
    answerTitle: "The SportPulse NHL answer layer.",
    answerText:
      "A hockey final needs context: goalie performance, line changes, special teams, playoff pressure, and whether the result changes what fans should watch next.",
    answerCards: [
      {
        kicker: "Goalie",
        title: "Who controls the crease?",
        text: "Translate goalie context into confidence, matchup pressure, and fantasy relevance.",
      },
      {
        kicker: "Lines",
        title: "What changed in the combinations?",
        text: "Explain line movement, chemistry, and opportunity before it becomes noise.",
      },
      {
        kicker: "Special teams",
        title: "Where did the edge appear?",
        text: "Power-play and penalty-kill context can explain the game better than the final alone.",
      },
      {
        kicker: "Race",
        title: "What did the result change?",
        text: "Connect the final to playoff pressure, standings movement, and the next matchup.",
      },
    ],
    modulesTitle: "NHL modules for fast ice context.",
    modulesText:
      "NHL fans need the game, the goalie, the lines, special teams, and the playoff picture in a clean scan.",
    modules: [
      {
        title: "Tonight on ice",
        text: "The games and rivalries worth tracking.",
      },
      {
        title: "Goalie lens",
        text: "Starting goalie context and performance signal.",
      },
      {
        title: "Line movement",
        text: "Role, chemistry, and deployment changes.",
      },
      {
        title: "Power-play signal",
        text: "Special-teams edge and pressure moments.",
      },
      {
        title: "Playoff race context",
        text: "How the result changes the standings story.",
      },
      {
        title: "Fantasy hockey note",
        text: "Usage, role, and opportunity without unsupported advice.",
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
      "Golf Tournament Pulse turns leaderboard searches into movement, round swings, player form, major storylines, and Sunday pressure.",
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
          label: "Tournament board",
          title: "Masters leaderboard context",
          text: "Who leads is only the first question. The better question is how the lead is moving.",
          tag: "Board",
        },
        {
          label: "Round swing",
          title: "One stretch can change the tournament",
          text: "A run of birdies, a mistake, or a difficult closing stretch can reset the story.",
          tag: "Swing",
        },
        {
          label: "Sunday pressure",
          title: "The leaderboard becomes a stress test",
          text: "Understand who is chasing, who is protecting, and which player form matters.",
          tag: "Pressure",
        },
      ],
    },
    intentTitle: "What golf fans usually search.",
    intentText:
      "Golf search follows tournaments, leaders, player scores, major championships, and season-long standings. SportPulse turns leaderboard checks into context.",
    intentChips: [
      "Masters leaderboard",
      "PGA Championship leaderboard",
      "who is leading today",
      "Scottie Scheffler score",
      "Rory McIlroy today",
      "FedEx Cup standings",
    ],
    answerTitle: "The SportPulse golf answer layer.",
    answerText:
      "Golf is not Team A vs Team B. The context is leaderboard movement, course pressure, player form, major storylines, and what the next round can change.",
    answerCards: [
      {
        kicker: "Leaderboard",
        title: "Who moved and why?",
        text: "Explain the climb, the drop, and the pressure behind the leaderboard.",
      },
      {
        kicker: "Round swing",
        title: "Where did the round turn?",
        text: "Identify the stretch that changed a player's position or the tournament story.",
      },
      {
        kicker: "Player form",
        title: "Which golfer is trending?",
        text: "Separate one hot round from a form signal worth following.",
      },
      {
        kicker: "Pressure",
        title: "What changes on Sunday?",
        text: "Translate chase position, major stakes, and closing pressure into a clear watchlist.",
      },
    ],
    modulesTitle: "Golf modules for tournament intelligence.",
    modulesText:
      "Golf coverage needs movement, pressure, and player form more than a generic scoreboard.",
    modules: [
      {
        title: "Tournament board",
        text: "The leaderboard with context around movement.",
      },
      {
        title: "Leaderboard movement",
        text: "Who climbed, who slipped, and why it matters.",
      },
      {
        title: "Round swing",
        text: "The stretch that changed the tournament story.",
      },
      {
        title: "Player form",
        text: "Signals behind a score or sudden surge.",
      },
      {
        title: "Major storyline",
        text: "The narrative that frames the tournament.",
      },
      {
        title: "Sunday pressure",
        text: "What to watch when the leaderboard tightens.",
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
      "Fantasy Impact Center explains injury impact, usage changes, waiver signals, start/sit context, player trends, and recap takeaways without unsupported predictions.",
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
          label: "Waiver signal",
          title: "Opportunity before hype",
          text: "Identify why a player is gaining relevance: role, usage, injury, or matchup.",
          tag: "Waiver",
        },
        {
          label: "Injury impact",
          title: "Who gains the role?",
          text: "Translate availability into opportunity without making unsupported projections.",
          tag: "Impact",
        },
        {
          label: "Usage change",
          title: "Minutes, snaps, touches, targets",
          text: "The signal is the role change, not the loudest post-game reaction.",
          tag: "Usage",
        },
      ],
    },
    intentTitle: "What fantasy users usually search.",
    intentText:
      "Fantasy search starts when something changes: injury, usage, opportunity, matchup difficulty, waiver interest, or a player trend after one game.",
    intentChips: [
      "injury impact",
      "usage change",
      "waiver signal",
      "start sit context",
      "player trend",
      "matchup difficulty",
    ],
    answerTitle: "The SportPulse fantasy answer layer.",
    answerText:
      "Fantasy users need calm signal detection. SportPulse explains what changed, who may benefit, what is noise, and what to monitor next.",
    answerCards: [
      {
        kicker: "Signal",
        title: "What changed?",
        text: "Identify the usage, injury, matchup, or role shift behind the fantasy question.",
      },
      {
        kicker: "Opportunity",
        title: "Who gained a path?",
        text: "Explain the role that opened without pretending certainty.",
      },
      {
        kicker: "Context",
        title: "Is it noise or meaningful?",
        text: "Separate one-game hype from a real change in opportunity.",
      },
      {
        kicker: "Next",
        title: "What should users monitor?",
        text: "Point to the next injury note, role trend, matchup factor, or recap signal.",
      },
    ],
    modulesTitle: "Fantasy modules built around signal clarity.",
    modulesText:
      "Fantasy pages should feel useful and calm: fewer hot takes, more context around what changed.",
    modules: [
      {
        title: "Waiver signal",
        text: "The reason a player is becoming relevant.",
      },
      {
        title: "Injury impact",
        text: "Who may gain role, touches, minutes, or targets.",
      },
      {
        title: "Usage change",
        text: "Opportunity movement across games.",
      },
      {
        title: "Opportunity watch",
        text: "Players whose roles deserve another look.",
      },
      {
        title: "Start/sit context",
        text: "Matchup and role context without unsupported calls.",
      },
      {
        title: "Fantasy recap",
        text: "What fantasy users should notice after the final.",
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