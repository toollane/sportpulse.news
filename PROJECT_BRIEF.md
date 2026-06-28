# SportPulse Project Brief

SportPulse is a modern AI-native sports intelligence platform.

Domain:

[sportpulse.news](http://sportpulse.news)

## SportPulse Value Proposition

SportPulse exists to help sports fans understand the sports day faster.

Most sports websites show scores, schedules, headlines, or long articles. SportPulse is designed to do something more specific:

> Turn raw sports results into fast, clear sports context.

The site is built for fans who want to quickly understand:

- what happened
- why it mattered
- who changed the game
- who is trending
- what changed after the result
- what matters for fantasy users
- what to watch next

SportPulse is not intended to be a generic scoreboard, a betting site, or a copy of ESPN, Google Scores, CBS Sports, or official league websites.

The long-term goal is to become a mobile-first sports intelligence platform focused on NBA, NFL, fantasy sports, and North American sports search intent.

---

## Why SportPulse is different

SportPulse should win by making sports easier to understand, not by having more raw data than major sports platforms.

A normal sports page answers:

- what was the score?
- who played?
- when is the next game?

A SportPulse page should answer:

- what actually mattered?
- why did the result change the story?
- which player or team is gaining momentum?
- what does this mean for the next matchup?
- what should fantasy users notice?
- what is the fastest way to catch up?

This creates a different product position:

> SportPulse is a sports intelligence layer, not just a sports news site.

---

## Core audience

SportPulse is written in English for a global audience, but the primary commercial and product focus is North America.

Primary target markets:

- United States
- Canada
- English-speaking global sports fans

Primary sports focus:

1. NBA
2. NFL
3. Fantasy football
4. Fantasy basketball
5. MLB
6. NHL

The site should especially serve users searching for high-intent sports queries such as:

- Team A vs Team B
- Lakers vs Celtics
- Chiefs vs Bills
- Cowboys vs Eagles
- Warriors vs Lakers score
- NBA games tonight
- NFL schedule today
- who won Team A vs Team B
- Team A vs Team B fantasy impact

These searches show that users want fast answers. SportPulse should use that intent to provide fast context, not thin auto-generated pages.

---

## Product principle

Raw data is not the product.

The product is the interpretation layer around the data:

> score → context → momentum → fantasy relevance → what to watch next

Every future feature should support this principle.

If a feature only displays information users can already get from Google, ESPN, or an official league website, it is not enough.

If a feature helps users understand the sports day faster, it fits SportPulse.

---

## Long-term product direction

SportPulse should evolve from a content site into an app-like sports briefing platform.

Possible future product areas:

- NBA Pulse Today
- NFL Week Pulse
- matchup pages
- fantasy impact summaries
- player trend signals
- injury impact explainers
- team momentum boards
- daily sports briefing
- newsletter or alert product
- data-powered sport hubs

The immediate goal is not to build everything at once.

The immediate goal is to create a strong foundation, validate search demand, and then add data/API-powered features where they clearly improve user value and ROI.

Mission:

The fastest way to understand what happened in sports today.

Primary audience:

US sports fans who want fast, clear, mobile-first sports updates without the clutter of traditional sports media sites.

Core product areas:

- Tonight: key results and winners
- Trending: most searched athletes, teams, and stories
- Recaps: short AI-style game recaps
- Explained: why something happened or why someone is trending

Future areas:

- Market: AI sports betting research
- Fantasy: fantasy sports assistant
- Newsletters: local sports newsletters

MVP pages:

- /
- /tonight
- /trending
- /recaps
- /explained
- /about
- /contact
- /privacy
- /terms

Design direction:

- premium startup feel
- mobile first
- fast
- modern
- clean
- inspired by Linear, Vercel, Stripe, and Notion
- not like ESPN, Yahoo Sports, or Flashscore
- strong typography
- beautiful cards
- high readability
- no clutter

SEO principles:

- Every page must have a clear search intent.
- Avoid thin pages.
- Use descriptive metadata.
- Use internal links.
- Build for helpful content, not just keywords.
- Prioritize Trending, Explained, and Recaps for SEO.
- Scores are only the entry point, not the main value.

AdSense readiness:

- The website must look complete and trustworthy.
- Include About, Contact, Privacy Policy, and Terms pages.
- Avoid empty placeholder pages.
- Use original written content.
- No copyrighted images or logos unless properly licensed.
- No misleading betting advice.

Technical stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel
- GitHub
- Static mock data for MVP
- Later: sports APIs, trend data, AI-generated summaries

Important:

Cursor should create clean, maintainable code with reusable components.

Do not overcomplicate the MVP.

Do not add login, payments, database, or API integrations yet.

## Cost Control and Monetization Strategy

SportPulse must be built with strict cost control until the site proves real traffic potential.

The project should not add paid sports data APIs, paid SEO tools, betting data providers, fantasy data providers, databases, authentication systems, paid infrastructure, or unnecessary third-party services during the early AdSense-readiness phase.

### Current priority

The current priority is:

1. Build a trustworthy sports media and analysis website.
2. Publish useful evergreen sports content.
3. Prepare for Google Search Console and AdSense.
4. Keep monthly costs as low as possible.
5. Avoid expensive product features before traffic exists.

### Monetization reality

SportPulse should not expect meaningful income in the first months.

AdSense alone is unlikely to create quick break-even. Break-even depends mainly on monthly pageviews, RPM, content quality, search visibility, and user retention.

The realistic early goal is not profit. The realistic early goal is:

- indexation
- impressions
- first organic clicks
- AdSense approval
- low operating costs
- evidence that people search for and visit SportPulse content

### Cost rules

Until SportPulse has meaningful traffic, the project should follow these rules:

- No paid sports data API unless there is a clear reason.
- No betting odds API during the early content phase.
- No fantasy sports API during the early content phase.
- No paid SEO tools unless Search Console data justifies it.
- No unnecessary backend, database, login system, or user accounts.
- Cursor should be used only for targeted implementation tasks.
- Avoid large Cursor prompts unless the change is clearly worth it.
- Prefer manual edits or small controlled prompts when possible.
- Keep Vercel, GitHub, and hosting setup simple.

### Traffic-based upgrade thresholds

Live sports data should only be considered after SportPulse has a stronger content base and early traffic signals.

Suggested thresholds:

- 0 to 10,000 monthly pageviews:  
Focus on content, trust pages, SEO basics, Search Console, and AdSense readiness. No paid sports data API.
- 10,000+ monthly pageviews:  
Consider a small low-cost sports data prototype for one sport only.
- 50,000+ monthly pageviews:  
Consider a more serious live-data integration if it clearly improves user value and revenue potential.
- 100,000+ monthly pageviews:  
Consider expanding into data-driven features, newsletters, sponsorships, affiliate partnerships, fantasy tools, or market intelligence.

### Live sports data plan

Live sports data remains part of the long-term roadmap, but it should not be the foundation of the first version.

The preferred order is:

1. Build content and search visibility.
2. Choose one sport to test first.
3. Select one data provider.
4. Build a small live-data MVP.
5. Connect live data to Tonight and Recap pages.
6. Expand only if traffic and user value justify the cost.

Possible future data directions:

- Football/soccer data
- NFL/NBA data
- Scores and schedules
- Standings
- Player stats
- Injuries
- Game events
- Recap support data

### Fantasy plan

A Fantasy section remains part of the roadmap, likely under:

/fantasy

The Fantasy area may later include:

- player trend explanations
- start/sit context
- waiver wire context
- injury impact
- usage trends
- matchup explanations
- fantasy football analysis

Fantasy should not be built before the site has stronger traffic and a clearer sport focus.

### Market and betting-related plan

A market intelligence section remains part of the roadmap, likely under:

/market

This should not be positioned as betting advice.

SportPulse should avoid:

- guaranteed picks
- lock of the day claims
- sportsbook functionality
- direct gambling recommendations
- irresponsible betting language

The correct positioning is:

- sports market intelligence
- odds movement context
- public attention
- injury impact
- market sentiment
- line movement explanation

Any future market content should be informational and editorial, not gambling advice.

### Strategic principle

SportPulse should earn the right to become more complex.

The project should not add expensive features before there is evidence of demand.

The current winning strategy is:

Content first.  
Trust first.  
Search visibility first.  
Low costs first.  
Live data later.  
Fantasy later.  
Market intelligence later.

## Professional Website Quality Checklist

SportPulse should be treated as a professional sports media website, not as a simple MVP landing page.

Before major milestones such as Google Search Console setup, AdSense application, live data integration, or public promotion, the site should be checked against a professional launch checklist.

### Required professional standards

The website should include:

- clear navigation
- clear footer links
- visible breadcrumbs on article pages
- sitemap.xml
- robots.txt
- working internal links
- clean URL structure
- unique metadata per important page
- no placeholder content
- no lorem ipsum
- no unfinished legal templates
- no fake live-data claims
- no fake partnerships
- no copyrighted team logos or league logos
- no betting advice during the early phase
- mobile-friendly layout
- readable typography
- consistent visual design
- clear trust pages
- clear provider information
- contact information
- privacy policy
- terms of use
- legal notice / impressum

### Breadcrumb standard

Article pages should show a clear visible path near the top of the page.

Preferred format:

Home > Category > Article title

Examples:

- Home > Explained > What Makes a Game Worth Watching?
- Home > Recaps > How to Read a Game Recap
- Home > Trending > Why Athletes Go Viral
- Home > Tonight > What to Watch Next in Sports

The last breadcrumb item should be plain text, not a link.

Breadcrumbs should support user orientation and help reinforce the site structure.

### Internal linking standard

Every article should include relevant internal links to related SportPulse pages.

Hub pages should link to all important articles in their category.

Important pages should never be orphaned.

### Pre-Search-Console checklist

Before setting up or submitting the site in Google Search Console, verify:

- homepage works
- sitemap.xml works
- robots.txt works
- all hub pages work
- all trust pages work
- article pages are reachable
- footer links work
- breadcrumbs are visible on article pages
- no important page returns 404
- no page contains placeholders
- no page claims features that do not exist yet

### Strategic reminder

SportPulse should not move into expensive features before the foundation is professional.

The correct order remains:

1. Trust
2. Content
3. Navigation
4. Technical SEO
5. Search Console
6. Indexing
7. AdSense review
8. Traffic validation
9. Live data
10. Fantasy and market intelligence

