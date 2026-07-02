# Site Structure — Ahamed Web Studio

This defines the information architecture: what pages exist, why, and what each must accomplish. See `PRD.md` for the business rationale and `COPY_GUIDELINES.md` for how to write within each section.

## 1. IA principles

- Few pages, each doing one job well — this is a boutique studio, not a sprawling corporate site.
- The **work (case studies) is the hero** of the IA, not a page buried in a nav dropdown. It should be reachable in one click from anywhere and should dominate the home page.
- Navigation should feel unhurried and confident — a short, clear nav communicates focus; a long nav with many items communicates "we do everything," which is exactly wrong (see `PRD.md` §5).
- Every page must serve at least one of the four audiences (agencies, creative directors, founders, designers) — if a proposed page/section doesn't, cut it or fold it in elsewhere.

## 2. Proposed sitemap

```
/                    Home
/work                Work (case study index)
/work/[case-study]   Individual case study
/studio              About / Studio (who we are, philosophy, process)
/partners            For Agencies (white-label / partnership positioning)
/contact             Contact / Start a project
```

Six top-level destinations, five of which appear in primary nav (`/work/[case-study]` is reached through `/work`, not directly navigated to).

### Why `/partners` is a standalone page, not just a Home section

Branding agencies are the #1 priority audience (`PRD.md` §4) and have a distinct decision process from founders: they're evaluating a *partner*, not buying a *product*. A dedicated page lets us go deeper on reliability, communication, and white-label process without cluttering Home's narrative for founders. This is a decision, not a default — revisit if analytics show founders are the dominant qualified-inquiry source instead.

## 3. Page-by-page requirements

### Home (`/`)
**Job:** Establish taste and credibility within the first viewport, then move the visitor into the work as fast as possible.

- **Hero — locked architectural decision (`POSITIONING.md` §6): a brand statement, not a portfolio showcase.** The hero must never depend on, feature, or reference any client project, screenshot, case study, or portfolio piece. A visitor must understand who we are and why we exist before seeing a single project. No stock imagery, no client/case-study imagery. It should read identically regardless of which projects happen to be featured below it — the brand must survive the portfolio changing. Short, confident statement of what we do and who it's for (not a tagline salad); the craft of the typography and layout itself is doing as much work here as the words.
- Immediately after the hero: a curated selection of case studies (not the full index), presented as supporting proof of the claim the hero just made — full-width, editorial presentation per `DESIGN_SYSTEM.md` §5.
- A brief, quiet section addressing the agency-partnership angle, linking through to `/partners` for depth.
- A restrained "what we believe" moment — one or two lines of philosophy (craft, restraint, longevity), not a bulleted values list.
- Single primary CTA (start a project / talk to us) — repeated at most once more, at the end of the page.
- No service-menu grid, no icon-feature grid, no client-logo wall used as decoration (a few real, relevant logos are fine if genuinely earned and tasteful — not a generic "trusted by" strip).

### Work (`/work`)
**Job:** Prove the claim. This page carries the most weight in the entire site.

- Full-width, large-format index of case studies — treat like a design portfolio or print spread, not a card grid of thumbnails.
- Minimal metadata per entry (client/project name, one-line outcome) — let the imagery do the work.
- No filtering/tagging UI unless the volume of work genuinely requires it (avoid building "portfolio software" for its own sake — see `DEVELOPMENT_RULES.md` on unnecessary complexity).

### Individual case study (`/work/[case-study]`)
**Job:** Tell one project's story with enough craft and specificity that the visitor extends that trust to us.

- Outcome-first framing (see `COPY_GUIDELINES.md` §7).
- Full-width imagery, generous pacing — resist compressing the story to "fit above the fold."
- Real specifics: the problem, the approach in plain language, the result. Avoid generic "we redesigned the website and it looked great" narratives.
- Natural exit into another case study or a CTA — never a dead end.

### Studio (`/studio`)
**Job:** Answer "who are these people and can I trust them" for founders, and "do they get it" for creative directors/designers — without turning into a corporate About page.

- Philosophy and approach (why boutique, why fewer/better, how we work) — this is where the "less, but better" ethos gets its clearest voice.
- Team/founder presence should feel personal and credible, not a stock "meet the team" grid.
- Process overview if it builds trust (especially useful for founders who don't know what to expect) — kept high-level, not a step-by-step production-process diagram.

### For Agencies (`/partners`)
**Job:** Convert branding agencies into confident referrers/partners — the single highest-leverage audience per `PRD.md`.

- Directly address the core anxiety: *"will they preserve our design intent?"* Answer explicitly with process/communication/handoff detail.
- Reference relevant case studies where we executed someone else's design system, if any exist.
- Clear, low-friction path to start a conversation — agencies are evaluating reliability, not shopping on price, so the CTA can be more direct/professional in tone than Home's.

**Content requirements — this page must answer every specific worry an agency brings to it (full detail and rationale in `TRUST.md` §4):**

| Worry | What the page must show |
|---|---|
| Communication | Concrete process detail — cadence, point of contact, what handoff looks like |
| Deadlines | Reliability signals, framed as consistency, not speed (`POSITIONING.md` §4 rules out speed-as-selling-point) |
| Quality / design fidelity | Case study proof, ideally a project where we executed someone else's design system intact |
| Disappearing freelancers | Studio framing, not solo-freelancer framing (`PRD.md` §2) — a real, findable, ongoing entity |
| Maintainability | Explicit statement of engineering standards a future developer could pick up cleanly (`DEVELOPMENT_RULES.md` §4–5) |

This page is the primary artifact for the "primary journey" described in `VISITOR_JOURNEY.md` §1 — write and structure it against that narrative directly, not as a generic services page with an "agencies" label on it.

### Contact (`/contact`)
**Job:** Make starting a conversation feel easy and low-pressure, while still filtering for fit.

- Short form — avoid marketing-agency-style multi-step qualification funnels.
- Optional light self-identification (e.g. "I'm reaching out as an agency / a business / other") only if it meaningfully improves how we respond — not as a data-collection exercise.
- No fake urgency, no countdown, no "book a call now" scheduling widget unless it's genuinely how we want inbound handled (decide deliberately, don't default to it because it's common).

## 4. Navigation

- Primary nav: Work, Studio, Agencies, Contact (four items — resist adding more). Kept to single-word labels deliberately — the nav's calm, even rhythm reads as intentional composition; a lone two-word label ("For Agencies") visually breaks that evenness. The page it links to is still the agency-focused `/partners` page described below.
- Logo/wordmark links home, as usual.
- Footer can carry secondary/utility content (contact details, social, legal) but should stay quiet and small — it is not a second navigation system.

## 5. Deferred decisions

- Whether case studies are CMS-driven or hand-authored (depends on expected volume — revisit once `/work` content is being populated).
- Whether `/partners` needs its own dedicated case-study filter (e.g. "projects done in partnership with agencies") — only worth building once there are enough examples to justify it.

## 6. Related documents

- `VISITOR_JOURNEY.md` — the narrative each page needs to serve
- `TRUST.md` — the trust sequence this IA is built to deliver
- `CONVERSION.md` — CTA placement and flow between pages
- `POSITIONING.md`, `COPY_GUIDELINES.md` — what each page says and how
