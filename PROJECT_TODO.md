# SportPulse Project TODO

## Simple value summary

SportPulse helps sports fans understand the sports day faster.

Instead of only showing scores, SportPulse explains:

- what happened
- why it mattered
- who is trending
- what changed
- what fantasy users should notice
- what to watch next

The main user benefit:

> SportPulse turns raw sports results into fast, clear sports context.

The long-term product direction:

> A mobile-first sports intelligence platform for NBA, NFL, fantasy, and North American sports search intent.

---

## Current strategic focus

Primary market:

- United States
- Canada
- English-speaking global sports audience

Primary sports focus:

1. NBA
2. NFL
3. Fantasy football
4. Fantasy basketball
5. MLB
6. NHL

Core search intent:

- Team A vs Team B
- NBA games tonight
- NFL schedule today
- who won Team A vs Team B
- Team A vs Team B stats
- Team A vs Team B fantasy impact
- what happened in sports today

---

## Completed foundation

- Domain [sportpulse.news](http://sportpulse.news) is live
- Vercel deployment works
- Cloudflare is active
- Cloudflare Email Routing is active
- [hello@sportpulse.news](mailto:hello@sportpulse.news) forwards successfully
- Search Console ownership verified
- Sitemap submitted
- Trust pages created
- Legal Notice / Impressum created
- Privacy Policy created
- Terms of Use created
- Contact page created
- Editorial Standards page created
- Homepage upgraded toward dashboard/app feeling
- API ROI strategy documented
- NBA focus page created
- NFL focus page created
- Fantasy focus page created
- Shared SportFocusPage template created
- NBA focus page upgraded
- NFL focus page upgraded
- MLB focus page created
- NHL focus page created
- Golf focus page created
- Fantasy focus page upgraded
- Shared SportFocusPage hub template improved
- Sport focus pages added to navigation and sitemap
- Sport focus pages upgraded to make user value clearer within the first 5 seconds

---

## Current priority

Build SportPulse from a clean sports media foundation into a useful sports intelligence product.

The site should feel less like a generic blog and more like a fast sports briefing dashboard.  

TODO maintenance rule

This file must be reviewed regularly and kept up to date.

Before starting a new major task:

1. Read PROJECT_[TODO.md](http://TODO.md)
2. Check what is already completed
3. Check the current priority
4. Confirm the next immediate action
5. Avoid repeating completed work

After finishing a meaningful task:

1. Move completed items into "Completed foundation" or a completed section
2. Update "Current priority" if needed
3. Update "Next immediate action"
4. Add new follow-up tasks if they became necessary
5. Remove or rewrite tasks that are no longer relevant

Review rhythm:

- quick review before each work session
- update after every completed build/push
- deeper review once per week
- strategy review after Search Console shows meaningful data

This file is the project control document. It should prevent repeated work, unclear priorities, and unnecessary tool/API/Cursor usage.

---

## Next website tasks

### 1. Verify sport focus pages

Check:

- /nba
- /nfl
- /mlb
- /nhl
- /golf
- /fantasy
- desktop layout
- mobile layout
- navigation links
- footer links
- sitemap inclusion
- no broken characters
- no fake live-data claims

---

### 2. Review homepage after deployment

Check:

- no broken characters
- no prototype-looking labels
- no fake live-data claims
- dashboard feeling is improved
- mobile layout works
- footer and trust links still work

---

### 3. Monitor Search Console

Check:

- indexed pages
- discovered but not indexed pages
- sitemap status
- errors
- early impressions
- early queries

Do not apply for AdSense too early. Wait until the site has indexation and no major technical issues.

---

## API / data tasks

### 1. Choose first API test direction

Preferred first experiment:

- NBA Pulse Today

Candidate APIs:

- Balldontlie
- TheSportsDB

Later professional option:

- SportsDataIO

Fantasy later:

- Sleeper API

---

### 2. Do not buy multiple APIs at once

First API test rules:

- one sport
- one feature
- one API
- one monthly budget
- one success metric
- one exit rule

Initial preferred budget:

- $0–$20/month

Acceptable early test range:

- up to $30/month

Avoid:

- $50+/month until traffic or product value justifies it

---

## Product ideas for later

### NBA Pulse Today

Possible modules:

- tonight's NBA games
- recent finals
- closest finish
- biggest win
- top story
- what changed
- what to watch next
- fantasy note

### NFL Week Pulse

Possible modules:

- this week's games
- key matchups
- teams under pressure
- injury watch
- fantasy relevance
- Sunday recap
- Monday night context

### Fantasy section

Possible modules:

- waiver watch
- injury impact
- usage changes
- player opportunity changes
- start/sit context
- fantasy-relevant recaps

---

## No-go rules

Do not:

- create thin auto-generated pages
- copy ESPN or Google scoreboards
- claim live data before live data exists
- publish betting tips or gambling advice
- use copyrighted team logos or player photos without rights
- buy multiple APIs at once
- add expensive infrastructure before clear ROI
- overbuild before Search Console data exists

---

## Next immediate action

1. Run build.
2. Verify /nba, /nfl, /mlb, /nhl, /golf, /fantasy on desktop and mobile.
3. Check for broken characters.
4. Commit and push sport focus foundation pages.
5. Start API provider comparison for NBA Pulse Today.