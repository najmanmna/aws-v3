# Copy Guidelines — Ahamed Web Studio

Copy is a design material here, not an afterthought bolted on after layout. Every word should earn the whitespace around it.

## 1. Brand personality (write as if this were a person)

Calm. Confident. Experienced. Thoughtful. Honest. Detail-oriented. Modern. Understated.

Never loud. Never arrogant. Never trying too hard.

A useful test for any line of copy: **would this person say it out loud in a quiet, confident tone, or does it sound like it's trying to convince someone?** If it's convincing rather than stating, rewrite it.

## 2. Voice principles

- **Show, don't sell.** We spend more time showing our work than talking about ourselves. If a sentence describes us rather than an outcome or a piece of work, question whether it needs to exist.
- **Outcomes over technology.** Never lead with tools or stack.
  - ❌ "Built with Next.js, Tailwind, and Framer Motion."
  - ✅ "Built to feel effortless, load instantly, and support long-term growth."
- **Restraint over hype.** No superlative stacking ("the best," "world-class," "cutting-edge," "revolutionary"). Confidence is quiet. State the fact; let the reader draw the conclusion.
- **Precision over volume.** One well-chosen sentence beats three that all say the same thing with more adjectives.
- **Honesty over persuasion copy.** No fake urgency ("limited spots," "book now"), no manufactured social proof, no marketing-speak filler ("unlock," "supercharge," "game-changing," "seamless" as a crutch word).

## 3. What we talk about vs. what we don't

**Lead with:**
- The work itself (case studies, outcomes, craft)
- Who we're the right fit for (agencies, creative directors, premium-minded founders)
- Process and reliability signals for agencies specifically (communication, handoff, respecting the design)
- Craft values (attention to detail, performance, accessibility, longevity)

**De-emphasize or avoid:**
- Technology/stack names in headline or hero copy (fine in a footnote or technical appendix, never as a selling point)
- Long service lists ("we do web design, apps, SEO, branding, social media...") — we are focused, not a full-service shop
- Price, speed-as-a-selling-point, or "quick turnaround" language — this attracts exactly the visitors we want to filter out (see `PRD.md` §5)
- Generic agency clichés: "we're passionate about...", "we live and breathe...", "your success is our success"

## 4. Messaging by audience

Reference `PRD.md` §4 for the full audience breakdown. Copy across the site should let each of these visitors find their own reflection without the site becoming four different sites:

- **Branding agencies:** emphasize reliability, communication, and design fidelity during execution. Key message: *we protect your design, we don't reinterpret it.* This likely deserves explicit copy somewhere prominent (see `SITE_STRUCTURE.md` for placement), not just an implication.
- **Creative directors:** don't write to them directly — communicate through the quality of execution, spacing, and restraint itself. If copy has to explicitly claim "we understand good design," it has already failed with this audience. Show, don't tell, applies most strictly here.
- **Founders & business owners:** slightly warmer, plainer language is acceptable here since some of this audience won't have design/technical fluency — but never dumb it down or over-explain. Focus on trust, credibility, and outcomes.
- **Designers:** similar to creative directors — earned through visible respect for craft in the case studies (before/after fidelity, attention to detail in the build) rather than direct address.

## 5. Headline style

- Short, declarative, confident. Avoid stacking clauses.
- Prefer concrete imagery/outcomes over abstract claims.
  - ❌ "We build digital experiences that drive results."
  - ✅ "Websites built to be lived in for years, not launched and forgotten."
- Avoid question-as-headline gimmicks and generic imperatives ("Let's build something amazing together").
- It's fine — good, even — for headlines to be quiet rather than punchy. A whisper that's confident beats a shout.

## 6. CTA style

- Calm, specific, low-pressure. No countdowns, no "act now."
- Prefer CTAs that frame a conversation, not a transaction: e.g. "Start a project," "Talk to us about your project," "Enquire" — over "Buy now," "Get started free," "Book a call today!"
- One primary CTA per page/section. Resist the urge to add secondary CTAs everywhere "just in case."

## 7. Case study copy

- Structure around outcome first, then story, then (briefly, if at all) approach.
- Write case studies the way a design portfolio writes about its work — confident, specific, a little editorial — not the way a dev agency writes a technical case study.
- Numbers/metrics are welcome if genuine and meaningful (e.g. real performance or business outcomes), but never invented or vague ("increased engagement significantly").

## 8. Words and patterns to avoid

- "Cutting-edge," "revolutionary," "game-changing," "world-class," "best-in-class"
- "Unlock," "supercharge," "elevate" (as a generic marketing verb), "seamless" (unless literally describing a seamless visual transition)
- "Passionate about," "we live and breathe X"
- Exclamation points, in general
- Emoji, anywhere on the site
- Jargon and buzzwords aimed at sounding technical or trendy — the target audiences are sophisticated enough to be unimpressed by jargon and are actively looking for the opposite

## 9. Before/after examples

| Generic agency copy | Ahamed Web Studio copy |
|---|---|
| "We craft world-class digital experiences that drive results for ambitious brands." | "We design and build websites that hold up under scrutiny — and last." |
| "Built with the latest technologies for blazing-fast performance." | "Built to load instantly and stay fast as it grows." |
| "Get a free quote today!" | "Tell us about your project." |
| "We offer web design, branding, SEO, and social media management." | "We design and build premium websites. That's it." |

## 10. Micro-copy & edge states

The brand is judged as much by its smallest, least-planned moments (a form error, an empty state, a 404) as by its hero copy — arguably more, since these are unscripted moments where generic template language tends to leak through. Hold the same calm, understated voice here as everywhere else.

- **Form validation / errors:** state the problem plainly, without blame or forced cheerfulness. No exclamation points, no "Oops!", no faux-casual tone shift.
  - ❌ "Oops! Something went wrong. Please try again!"
  - ✅ "That didn't go through. Please try again, or email us directly at [address]."
- **Empty states** (e.g. no case studies matching a filter, if filtering is ever added per `SITE_STRUCTURE.md`): plain and brief — describe the state, don't apologize for it or fill it with encouragement copy.
- **404 / not found:** should feel like the rest of the site, not a joke page. Calm acknowledgment plus a clear way back to the work — no puns, no "you're lost!" gimmicks.
  - ✅ "This page doesn't exist. Here's our work instead." (linking to `/work`)
- **Loading / in-progress states:** prefer no copy at all (a quiet, restrained loading treatment) over chatty "Just a moment while we work our magic..." filler.
- **Form confirmation (after a successful contact submission):** calm and specific about what happens next (e.g. expected response time), not a generic "Thank you! We'll be in touch soon!" — specificity itself is a trust signal, per `PRD.md` §3–4.

## 11. Related documents

- `PRD.md` §4–5 — audience detail and who we're filtering out
- `DESIGN_SYSTEM.md` — how typography and layout should carry copy
- `SITE_STRUCTURE.md` — where each message lives in the site, including `/contact` (§3), which §10 above directly informs
