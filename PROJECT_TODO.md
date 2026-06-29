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

**SportPulse turns raw sports results into fast, clear sports context.**

The long-term product direction:

**A mobile-first sports intelligence platform for NBA, NFL, fantasy, and North American sports search intent.**

---

## Current strategic focus

Primary market:

- United States
- Canada
- English-speaking global sports audience

Primary sports focus:

- NBA
- NFL
- Fantasy football
- Fantasy basketball
- MLB
- NHL
- Golf

Core search intent:

- Team A vs Team B
- NBA games tonight
- NFL schedule today
- who won Team A vs Team B
- Team A vs Team B stats
- Team A vs Team B fantasy impact
- what happened in sports today
- what to watch next in sports
- trending athletes today
- fast sports recap

Core product principle:

**APIs are not the product. Context is the product.**

Raw data should only be added when the website already feels useful, premium, trustworthy, and easy to use without fake live-data claims.

---

## Completed foundation

### Infrastructure and trust

- Domain `sportpulse.news` is live.
- Vercel deployment works.
- Cloudflare is active.
- Cloudflare Email Routing is active.
- `hello@sportpulse.news` forwards successfully.
- Search Console ownership is verified.
- Sitemap submitted.
- Trust pages created.
- Legal Notice / Impressum created.
- Privacy Policy created.
- Terms of Use created.
- Contact page created.
- Editorial Standards page created.
- Contact page intentionally uses direct email contact only.
- Fake/non-functional contact form removed.
- No external contact-form provider added.

### Core website structure

- Homepage created.
- Homepage upgraded toward dashboard/app feeling.
- `/tonight` created.
- `/trending` created.
- `/recaps` created.
- `/explained` created.
- Article pages created across Tonight, Trending, Recaps, and Explained.
- Header and footer created.
- Footer includes trust and sport navigation.
- Sitemap includes core pages and sport focus pages.
- Public MVP/demo wording cleaned up.

### Sport focus pages

- NBA focus page created.
- NFL focus page created.
- Fantasy focus page created.
- MLB focus page created.
- NHL focus page created.
- Golf focus page created.
- Shared `SportFocusPage` template created.
- Sport focus pages added to navigation and sitemap.
- Sport focus pages upgraded to make user value clearer within the first 5 seconds.
- Search example cards made clickable.
- Product/module cards made clickable.

### Premium UX pass completed so far

- Header scroll behavior added:
  - header hides when scrolling down
  - header returns when scrolling up
  - header stays visible when mobile menu is open
- Mobile Bottom Navigation added.
- Mobile Bottom Navigation polished:
  - active Menu state for secondary sections
  - tap-outside close behavior
  - Escape close behavior
- Reading Progress Bar added for article pages.
- Reading Progress Bar tuned to complete when the footer/content end is reached.
- Article “What to read next” links added.
- Back-to-top button added for long article pages.
- Homepage card interaction improved:
  - Story cards made clickable
  - Recap cards made clickable
  - Trend cards made clickable
  - Homepage explainer cards made clickable
- Header CTA rebuilt cleanly.
- Newsletter/briefing section rebuilt as an honest “Briefing newsletter coming soon” section.
- Fake newsletter signup removed.
- No fake form submission remains by design.

### Strategy documents

- `PROJECT_BRIEF.md` updated with SportPulse value proposition and product direction.
- `API_ROI_PLAN.md` created.
- API strategy documented:
  - one sport
  - one feature
  - one API
  - one budget
  - one exit rule

---

## Current priority

Build SportPulse from a clean sports media foundation into a useful sports intelligence product.

The site should feel less like a generic blog and more like a fast, mobile-first sports briefing dashboard.

Current priority before APIs:

**Finish and stabilize the Premium UX Pass.**

That means:

- no fake forms
- no fake newsletter signup
- no fake live data
- no unclear CTAs
- no cards that look clickable but are not clickable
- no broken anchor links
- no prototype/demo wording
- no broken characters
- no unnecessary provider integrations

APIs should only be added after the core UX feels premium and trustworthy.

---

## TODO maintenance rule

This file must be reviewed regularly and kept up to date.

Before starting a new major task:

- read `PROJECT_TODO.md`
- check what is already completed
- check the current priority
- confirm the next immediate action
- avoid repeating completed work

After finishing a meaningful task:

- move completed items into a completed section
- update Current priority if needed
- update Next immediate action
- add follow-up tasks if they became necessary
- remove or rewrite tasks that are no longer relevant

Review rhythm:

- quick review before each work session
- update after every completed build/push
- deeper review once per week
- strategy review after Search Console shows meaningful data

This file is the project control document. It should prevent repeated work, unclear priorities, unnecessary Cursor/API usage, and repeated rebuild loops.

---

## Working rules

### Final-first implementation rule

Before changing code:

- define the desired final state
- name the affected files
- avoid “prototype first, replacement later” workflows
- do not change design, function, copy, and structure all at once unless the full final state is clear

For code changes:

- prefer complete file replacements for small isolated components
- avoid scattered mini-replacements when the component has already become messy
- use Cursor only for clearly bounded multi-file tasks
- do not use Cursor for small component fixes
- no Opus for this project
- use Sonnet Medium or GPT-5.5 Medium only when Cursor is truly needed

Before commit:

- run build
- check status
- check diff/stat
- only commit intended files

Standard checks:

```bash
npm run build
git status --short
git --no-pager diff --stat
git grep -n -E "â|Â|�" -- app components lib
git grep -n -E "demo signup|Subscribe|No backend|preference has been noted|does not yet store data|Open email draft" -- app components
git grep -n -E "MVP|static mock|mock content" -- app components lib

```

---

## Next website tasks

### 1. Stabilize current Premium UX work

Check:

- homepage desktop
- homepage mobile
- `/contact`
- `/#newsletter`
- header CTA
- mobile menu
- mobile bottom navigation
- article pages
- back-to-top button
- reading progress bar
- article next links

Specifically verify:

- `Get the briefing` leads to the newsletter/briefing section
- newsletter/briefing section is visible and readable
- newsletter/briefing section does not contain a fake signup form
- contact page only offers direct email contact
- no fake contact form remains
- no broken characters
- no prototype/demo wording
- no fake live-data claims
- all card hover states match click behavior

### 2. Verify sport focus pages

Check:

- `/nba`
- `/nfl`
- `/mlb`
- `/nhl`
- `/golf`
- `/fantasy`

For each page verify:

- desktop layout
- mobile layout
- navigation links
- footer links
- sitemap inclusion
- no broken characters
- no fake live-data claims
- search cards are clickable
- module cards are clickable
- first 5 seconds clearly explain user value

### 3. Review homepage after deployment

Check:

- no broken characters
- no prototype-looking labels
- no fake live-data claims
- dashboard feeling is improved
- mobile layout works
- footer and trust links still work
- newsletter/briefing section looks intentional
- card interactions are consistent

### 4. Monitor Search Console

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

### 3. API readiness rule

Do not start API implementation until:

- Premium UX pass is stable
- homepage is reviewed on mobile and desktop
- no fake forms or fake signups remain
- Search Console basics are healthy
- first API comparison is documented
- first API feature has a clear purpose and exit rule

---

## Product ideas for later

### NBA Pulse Today

Possible modules:

- tonight’s NBA games
- recent finals
- closest finish
- biggest win
- top story
- what changed
- what to watch next
- fantasy note

### NFL Week Pulse

Possible modules:

- this week’s games
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

### Briefing newsletter

Future version only when properly connected:

- real signup
- consent handling
- unsubscribe flow
- privacy-compliant storage
- no fake local confirmation
- clear delivery expectation

Until then:

- show newsletter/briefing preview
- link to `/tonight`
- allow feedback via `hello@sportpulse.news`

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
- add fake forms
- add fake newsletter signups
- add external providers for low-priority features without clear need
- repeatedly rewrite the same component without first defining the final state

---

## Next immediate action

1. Stabilize and commit the current Premium UX changes if not already committed:
  - `components/SiteHeader.tsx`
  - `components/NewsletterCard.tsx`
2. Run:

```bash
npm run build
git status --short
git --no-pager diff --stat
git grep -n -E "â|Â|�" -- app components lib
git grep -n -E "demo signup|Subscribe|No backend|preference has been noted|does not yet store data|Open email draft" -- app components

```

1. Verify locally:

- homepage
- `/#newsletter`
- `/contact`
- one article page
- mobile navigation
- desktop header

1. Commit only intended files.
2. After the UX state is stable, continue with:

- API provider comparison document for NBA Pulse Today
- no API implementation yet



# SportPulse 4-Week Roadmap

## Strategic goal for the next 4 weeks

SportPulse should become a clean, trustworthy, mobile-first sports briefing product before any sports-data API is integrated.

The goal is not to add more random features. The goal is to make the current product feel premium, useful, consistent, and ready for real data.

Core principle:

**No APIs until the website itself feels valuable without APIs.**

---

# Week 1 — Stabilize Premium UX

## Goal

Make the current website feel stable, intentional, and trustworthy across desktop and mobile.

## Main tasks

### 1. Full UX QA pass

Check:

- homepage
- `/tonight`
- `/trending`
- `/recaps`
- `/explained`
- `/nba`
- `/nfl`
- `/mlb`
- `/nhl`
- `/golf`
- `/fantasy`
- `/contact`
- `/#newsletter`
- one article page from each article section

Verify:

- header hides/shows correctly
- mobile bottom navigation works
- mobile menu works
- cards that look clickable are clickable
- article reading progress works
- back-to-top button works
- article next links appear only where they should
- contact page has no fake form
- newsletter section has no fake signup
- no broken anchors
- no broken characters
- no demo/prototype wording

### 2. Fix only real UX issues found during QA

No broad redesigns.

Allowed fixes:

- broken links
- broken spacing
- unclear CTA text
- cards that look clickable but are not
- mobile layout issues
- contrast/readability problems

Avoid:

- new features
- new providers
- new APIs
- large homepage rewrites

### 3. Lock current UX decisions

Document in `PROJECT_TODO.md`:

- contact remains direct email only
- newsletter remains “coming soon” until real signup is connected
- no fake forms
- no fake newsletter submissions
- no API integration before UX is stable

## Definition of done

Week 1 is done when:

- `npm run build` passes
- homepage looks good on mobile and desktop
- `/#newsletter` works and looks intentional
- `/contact` is simple and trustworthy
- no fake form language remains
- no broken characters remain
- current UX changes are committed and pushed

---

# Week 2 — Strengthen Content Structure and SEO Intent

## Goal

Make SportPulse clearer for users and Google by improving internal structure, page purpose, and search-intent alignment.

## Main tasks

### 1. Review homepage hierarchy

Check whether the homepage clearly answers within 5 seconds:

- What is SportPulse?
- Why should I use it?
- What can I click next?
- Is this scores, news, analysis, or briefing?

Improve only if needed.

### 2. Improve internal linking

Add or improve links between:

- homepage → sport hubs
- sport hubs → `/tonight`, `/recaps`, `/fantasy`, `/trending`
- articles → related articles
- articles → relevant sport hubs
- footer → major sports and trust pages

### 3. Review article endings

Each article should give the user a next action:

- read related explainer
- open recap guide
- check trending stories
- go to tonight’s pulse
- explore a sport hub

### 4. Search Console review

Check:

- indexed pages
- discovered but not indexed pages
- sitemap status
- early queries
- page experience issues
- crawl/indexing errors

Do not chase random SEO tricks. Use Search Console only to detect technical or structural issues.

## Definition of done

Week 2 is done when:

- homepage purpose is clear
- key pages have strong internal links
- no orphan-like pages remain
- Search Console has been reviewed
- any obvious indexing issues are documented
- no thin/fake pages were added

---

# Week 3 — Prepare API Decision Without Implementing API Yet

## Goal

Choose the first API experiment based on product value, cost, and technical simplicity — without buying or integrating multiple APIs.

## Main tasks

### 1. Create `API_PROVIDER_COMPARISON.md`

Compare:

- Balldontlie
- TheSportsDB
- SportsDataIO
- Sleeper API

Evaluate:

- sports covered
- NBA usefulness
- NFL usefulness
- fantasy usefulness
- pricing
- rate limits
- data quality
- ease of use with Next.js
- risk of overpaying
- fit for SportPulse’s context-first product

### 2. Define the first experiment

Preferred experiment:

**NBA Pulse Today**

The feature should answer:

- What NBA games matter today?
- What happened recently?
- What changed?
- Who is trending?
- What should fans watch next?
- What might fantasy users notice?

### 3. Define strict API rules

The first API experiment must have:

- one sport
- one feature
- one API
- one budget
- one success metric
- one exit rule

Budget target:

- preferred: $0–$20/month
- acceptable early max: $30/month
- avoid: $50+/month before traffic or strong product evidence

### 4. Design the API-ready page before coding

Define the future page structure for:

- `/nba/today` or `/nba/pulse`

Possible modules:

- today’s games
- recent finals
- biggest swing
- closest game
- player/team signal
- fantasy note
- what to watch next

No fake data should be shipped as live data.

## Definition of done

Week 3 is done when:

- API comparison document exists
- first API experiment is selected
- budget and exit rule are clear
- future NBA Pulse page structure is defined
- no API has been bought impulsively
- no fake live-data page has been shipped

---

# Week 4 — Build API-Ready Product Shell or Final UX Polish

## Goal

Use the Week 3 decision to either prepare the first API-ready shell or complete remaining UX/product polish before implementation.

## Option A — If UX is stable and API decision is clear

Build an API-ready NBA Pulse shell without fake live claims.

Tasks:

- create route structure for NBA Pulse
- define data types
- define UI modules
- add empty/loading/error states
- add honest “data not connected yet” internal-only handling if needed
- prepare environment variable structure
- do not expose API keys client-side
- do not ship misleading live data

Possible route:

- `/nba/today`
- or `/nba/pulse`

Goal:

A clean page structure ready for a real API connection.

## Option B — If UX still needs work

Do not touch APIs yet.

Instead finish:

- homepage mobile polish
- sport hub copy polish
- article layout polish
- CTA consistency
- footer/link consistency
- Search Console issue fixes

## Definition of done

Week 4 is done when one of these is true:

### API-ready path

- NBA Pulse shell exists
- no fake live-data claims
- API integration plan is clear
- API key handling is planned safely
- first implementation task is small and bounded

### UX-first path

- remaining UX issues are fixed
- homepage and sport hubs feel premium
- site is ready for API work in the next cycle

---

# Four-week success criteria

At the end of 4 weeks, SportPulse should have:

- stable premium mobile UX
- clear homepage value proposition
- trustworthy contact and newsletter handling
- no fake forms
- no fake live data
- consistent card interactions
- stronger internal linking
- reviewed Search Console basics
- documented API comparison
- clear first API experiment
- no unnecessary provider subscriptions
- no large uncontrolled rewrites

The ideal result:

**SportPulse feels like a real sports briefing product before real data is connected.**