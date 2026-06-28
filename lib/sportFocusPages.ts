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
      eyebrow: "NBA Pulse",
      title: "Understand the NBA night before the feed gets noisy.",
      description:
        "SportPulse is building a faster NBA context layer for fans who want more than a score. The goal is to explain what happened, why it mattered, who is trending, and what to watch next.",
      primaryCta: {
        label: "Read latest recaps",
        href: "/recaps",
      },
      secondaryCta: {
        label: "Explore explainers",
        href: "/explained",
      },
      preview: {
        title: "NBA Pulse Today",
        badge: "Briefing view",
        rows: [
          {
            label: "Tonight",
            title: "The games that deserve attention",
            text: "A compact board for the matchups that matter, built around context instead of clutter.",
            tag: "Board",
          },
          {
            label: "After the final",
            title: "The swing behind the score",
            text: "SportPulse should explain the run, matchup, player signal, or late moment that changed the story.",
            tag: "Context",
          },
          {
            label: "Fantasy signal",
            title: "What changed for player value",
            text: "Future NBA coverage should highlight usage, minutes, role shifts, and opportunity changes.",
            tag: "Fantasy",
          },
        ],
      },
      intentTitle: "Built around how NBA fans search.",
      intentText:
        "Fans search for teams, scores, player moments, and what happened last night. SportPulse should answer the first question quickly and then explain the next one better.",
      intentChips: [
        "Lakers vs Celtics",
        "Warriors vs Lakers score",
        "NBA games tonight",
        "who won last night",
        "player trending after one game",
        "fantasy basketball impact",
      ],
      answerTitle: "From NBA result to NBA understanding.",
      answerText:
        "The NBA creates daily storylines. A useful page should not stop at the final score. It should explain the shift, the player signal, the next matchup, and the fantasy angle.",
      answerCards: [
        {
          kicker: "Result",
          title: "What happened?",
          text: "Give the fan the quick answer first: matchup, outcome, status, and the headline of the night.",
        },
        {
          kicker: "Context",
          title: "Why did it matter?",
          text: "Explain the run, rotation change, matchup problem, or late-game swing behind the result.",
        },
        {
          kicker: "Momentum",
          title: "Who is trending?",
          text: "Highlight the player, team, or storyline gaining attention after the game.",
        },
        {
          kicker: "Next",
          title: "What should fans watch next?",
          text: "Connect the result to the next matchup, schedule spot, or larger story in the season.",
        },
      ],
      modulesTitle: "Future NBA modules with a clear purpose.",
      modulesText:
        "Every module should feel like a fast sports briefing, not a generic stats dump.",
      modules: [
        {
          title: "Tonight's board",
          text: "A fast scan of the games that matter most.",
        },
        {
          title: "Closest finish",
          text: "A quick read on the game that turned late.",
        },
        {
          title: "Player signal",
          text: "A player whose role, usage, or momentum changed.",
        },
        {
          title: "Fantasy note",
          text: "A useful fantasy angle without unsupported predictions.",
        },
        {
          title: "What changed",
          text: "The main shift created by the result.",
        },
        {
          title: "Watch next",
          text: "The next game, team, or player worth following.",
        },
      ],
      trustText:
        "This page is a foundation for future NBA data features. SportPulse should not claim live scores, live stats, or real-time fantasy projections until those features are actually connected and reliable.",
      finalCtaTitle: "Raw scores are not enough.",
      finalCtaText:
        "SportPulse should turn the NBA night into a fast briefing: result, context, momentum, fantasy relevance, and what to watch next.",
      finalCta: {
        label: "Read NBA-style recaps",
        href: "/recaps",
      },
    },
  
    nfl: {
      eyebrow: "NFL Pulse",
      title: "Fast context for the NFL week, not just the scoreboard.",
      description:
        "SportPulse is building toward an NFL briefing layer for fans who search matchups, follow fantasy football, and want to understand what changed after every week.",
      primaryCta: {
        label: "Read recap guides",
        href: "/recaps",
      },
      secondaryCta: {
        label: "Explore trending stories",
        href: "/trending",
      },
      preview: {
        title: "NFL Week Pulse",
        badge: "Weekly view",
        rows: [
          {
            label: "Before kickoff",
            title: "The matchups that matter",
            text: "A fast read on the games, pressure points, and storylines shaping the week.",
            tag: "Matchups",
          },
          {
            label: "After Sunday",
            title: "What changed across the league",
            text: "A Sunday reset that explains teams rising, players trending, and narratives shifting.",
            tag: "Reset",
          },
          {
            label: "Fantasy football",
            title: "The signals managers care about",
            text: "Future NFL coverage should explain usage, injuries, opportunity, and waiver relevance.",
            tag: "Fantasy",
          },
        ],
      },
      intentTitle: "Built around high-intent NFL matchup searches.",
      intentText:
        "NFL search behavior is matchup-heavy. Fans look for Team A vs Team B before games, after games, and during fantasy decisions. SportPulse should turn that intent into useful context.",
      intentChips: [
        "Chiefs vs Bills",
        "Cowboys vs Eagles",
        "NFL schedule today",
        "who won Sunday night",
        "NFL injury impact",
        "fantasy football waiver watch",
      ],
      answerTitle: "From NFL matchup to weekly clarity.",
      answerText:
        "NFL attention is different from the NBA. There are fewer games, but each game carries more weight. SportPulse should help fans understand the week before and after it happens.",
      answerCards: [
        {
          kicker: "Matchup",
          title: "Why does this game matter?",
          text: "Explain the pressure, rivalry, playoff angle, or fantasy relevance before kickoff.",
        },
        {
          kicker: "Result",
          title: "What changed after Sunday?",
          text: "Summarize which team gained momentum, which concern grew, and what storyline moved.",
        },
        {
          kicker: "Injury",
          title: "Who was affected?",
          text: "Future NFL coverage should explain injury impact in plain English without overclaiming.",
        },
        {
          kicker: "Fantasy",
          title: "What should fantasy users notice?",
          text: "Focus on touches, snaps, role changes, targets, and opportunity instead of empty hype.",
        },
      ],
      modulesTitle: "Future NFL modules for weekly sports intelligence.",
      modulesText:
        "NFL coverage should feel like a week command center: matchups, context, pressure, injuries, fantasy, and the reset after the games.",
      modules: [
        {
          title: "This week's games",
          text: "A clean scan of the most relevant NFL matchups.",
        },
        {
          title: "Teams under pressure",
          text: "Which teams need a response and why it matters.",
        },
        {
          title: "Sunday reset",
          text: "A fast explanation of what changed after the slate.",
        },
        {
          title: "Injury watch",
          text: "A plain-English view of availability and role impact.",
        },
        {
          title: "Fantasy signal",
          text: "Usage and opportunity notes for fantasy football.",
        },
        {
          title: "Monday context",
          text: "What the final game of the week means for the story.",
        },
      ],
      trustText:
        "This page is a foundation for future NFL data features. SportPulse should not claim real-time injury updates, live scores, or fantasy projections until a reliable data source supports them.",
      finalCtaTitle: "Team A vs Team B is the opportunity.",
      finalCtaText:
        "SportPulse should use matchup search intent to provide fast answers, deeper context, and fantasy-relevant signals without becoming a thin scoreboard clone.",
      finalCta: {
        label: "Explore matchup thinking",
        href: "/explained",
      },
    },
  
    fantasy: {
      eyebrow: "Fantasy Sports",
      title: "Fantasy context without the noise.",
      description:
        "SportPulse is building toward fantasy football and fantasy basketball context for users who want to know what changed, which players are trending, and what signals matter next.",
      primaryCta: {
        label: "View trending stories",
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
            label: "Usage",
            title: "Who gained opportunity?",
            text: "Future fantasy coverage should make role changes, minutes, snaps, touches, and targets easier to understand.",
            tag: "Usage",
          },
          {
            label: "Injury",
            title: "What changed after availability news?",
            text: "A useful fantasy page should explain the impact of injuries without making unsupported claims.",
            tag: "Impact",
          },
          {
            label: "Waiver",
            title: "Which signal deserves attention?",
            text: "SportPulse should identify the reason a player is becoming relevant, not just say that a player is trending.",
            tag: "Waiver",
          },
        ],
      },
      intentTitle: "Built around fantasy users who need fast context.",
      intentText:
        "Fantasy users search because something changed: an injury, a breakout game, a role shift, or a matchup question. SportPulse should explain the signal behind the change.",
      intentChips: [
        "fantasy football injury impact",
        "fantasy basketball usage",
        "waiver wire signal",
        "start sit context",
        "player trending",
        "matchup difficulty",
      ],
      answerTitle: "From player news to fantasy understanding.",
      answerText:
        "The first fantasy version should not promise guaranteed projections. It should explain what changed and why fantasy users may need to pay attention.",
      answerCards: [
        {
          kicker: "Signal",
          title: "What changed?",
          text: "Identify the usage, role, injury, matchup, or performance signal behind the fantasy question.",
        },
        {
          kicker: "Impact",
          title: "Who benefits?",
          text: "Explain which player or team role could be affected, without inventing certainty.",
        },
        {
          kicker: "Context",
          title: "Is it noise or meaningful?",
          text: "Help users separate one-game hype from a real opportunity shift.",
        },
        {
          kicker: "Next",
          title: "What should users monitor?",
          text: "Point to the next game, injury report, role trend, or matchup factor worth watching.",
        },
      ],
      modulesTitle: "Future fantasy modules with practical value.",
      modulesText:
        "Fantasy pages should feel actionable and calm: fewer hot takes, more signals that explain what matters.",
      modules: [
        {
          title: "Waiver watch",
          text: "Players becoming relevant and the reason behind the signal.",
        },
        {
          title: "Injury impact",
          text: "Who may gain opportunity when availability changes.",
        },
        {
          title: "Usage changes",
          text: "Minutes, snaps, targets, touches, and role movement.",
        },
        {
          title: "Start/sit context",
          text: "Plain-English matchup and opportunity context.",
        },
        {
          title: "Player trend signals",
          text: "Why a player is gaining attention right now.",
        },
        {
          title: "Fantasy recaps",
          text: "What fantasy users should notice after games.",
        },
      ],
      trustText:
        "This page is a foundation for future fantasy features. SportPulse should explain fantasy signals before making projections and should not publish guaranteed fantasy advice without reliable data.",
      finalCtaTitle: "Explain signals before predictions.",
      finalCtaText:
        "The fantasy layer should help users understand usage, injuries, opportunity, and matchups before turning into advanced tools later.",
      finalCta: {
        label: "Explore sports context",
        href: "/explained",
      },
    },
  } satisfies Record<string, SportFocusPageContent>;