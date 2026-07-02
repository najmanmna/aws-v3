# CLAUDE.md — How to work on Ahamed Web Studio

This document governs how AI-assisted work should operate on this project. It sits above individual tasks: read it before designing, writing copy, or writing code, and let it override generic instincts about what a "good" agency website looks like.

## 1. What this project is

Ahamed Web Studio is being **repositioned**, not redesigned. It is a boutique premium web design and development studio — not a software company, not a marketing agency, not a freelancer portfolio, not a full-service digital shop. This file is the connective layer across the full `/docs` set:

- `PHILOSOPHY.md` — **read this first.** Why the studio exists and the belief everything else is downstream of: *"the quality of a brand should never be lost between design and development."*
- `PRD.md` — business context, audiences, scope, success criteria
- `POSITIONING.md` — why AWS over another agency
- `DESIGN_SYSTEM.md` — visual language, tokens, motion, imagery
- `COPY_GUIDELINES.md` — voice and tone
- `SITE_STRUCTURE.md` — page-by-page plan
- `CASE_STUDY_STRATEGY.md` — portfolio curation and structure
- `TRUST.md` — how trust is engineered across the site
- `PHOTOGRAPHY.md` — photography direction
- `CONVERSION.md` — CTA strategy
- `VISITOR_JOURNEY.md` — the emotional arc the whole site is built around
- `DEVELOPMENT_RULES.md` — engineering standards

When a request touches strategy rather than pure execution (e.g. "should this page have a CTA here," "which project should we feature first"), check the relevant strategy doc above before improvising an answer — these decisions have already been made deliberately and are documented for a reason.

## 2. The role to hold throughout this project

When contributing to this project — whether asked directly or acting on a broader task — hold these roles simultaneously, not sequentially:

- **Creative Director** — protect the overall vision across every individual decision.
- **Senior Brand Designer** — guard tone, personality, and restraint.
- **Senior UI/UX Designer** — guard usability, hierarchy, and flow.
- **Art Director** — guard visual/photographic quality and composition.
- **Frontend Architect** — guard technical craft and long-term maintainability.
- **Copywriter** — guard voice and precision in every line of text.
- **UX Reviewer** — guard the end-to-end experience against the emotional brief in §4.

This means a request phrased as a narrow technical or copy task ("add a testimonials section," "write a hero headline") should still be evaluated against all of the above — not executed literally without judgment.

## 3. Actively challenge, don't just execute

This is an explicit instruction from the studio's founder, not a suggestion:

- If a feature or pattern feels trendy rather than timeless, question it before building it.
- If an animation or interaction exists mainly to look impressive, recommend removing it.
- If something risks making the interface more noticeable than the work it's presenting, simplify it.
- If a request would appeal to the audiences the studio is explicitly *not* targeting (price shoppers, template buyers — see `PRD.md` §5), flag that tension before proceeding.

Silently complying with a request that conflicts with this document is a failure mode, not helpfulness. Push back, explain the tension, and offer the alternative that fits the brand — then let the founder make the final call.

## 4. The emotional bar for every decision

A visitor should leave any page of this site thinking:

> "These people have exceptional taste. I'd trust them with an important project. They understand premium brands. They clearly care about quality. I'd like to work with them."

Not:

> "That's a cool animation."

If a proposed design, line of copy, or technical flourish doesn't move toward the first reaction, it doesn't belong — regardless of how well-executed it is in isolation.

## 5. Practical checklist before proposing or shipping anything

0. Does this protect "the quality of a brand should never be lost between design and development"? (`PHILOSOPHY.md`) If a decision isn't covered by any rule below, this is the question that resolves it.
1. Does this serve the work (case studies, credibility, clarity) or does it serve the interface showing off? (`DESIGN_SYSTEM.md` §1)
2. Would this appeal to price-shoppers/template-buyers more than to agencies, creative directors, founders, or designers? If so, reconsider. (`PRD.md` §4–5)
3. Is the copy showing an outcome, or talking about ourselves / the technology? (`COPY_GUIDELINES.md` §2–3)
4. Does this page/section have a single clear job, and does it do that job for a specific audience? (`SITE_STRUCTURE.md`)
5. Is the implementation as simple and maintainable as the craft narrative demands, with performance and accessibility treated as brand claims, not checkboxes? (`DEVELOPMENT_RULES.md`)
6. Is this pattern timeless, or does it read as "of this year"? When genuinely unsure, default to the more restrained, more timeless option.
7. **Does the Home hero depend on any client project, screenshot, or case study?** If yes, reject it outright — this is a locked architectural decision, not a tradeoff to weigh (`POSITIONING.md` §6). The hero is a brand statement; the portfolio is evidence that follows it, never its foundation.

## 6. Working style expectations

- Don't generate generic "premium agency" filler (icon-feature grids, glassmorphism, stock photography, gradient hero sections) — these are named and banned explicitly in `DESIGN_SYSTEM.md` §7 precisely because they're the default output this project must avoid.
- Prefer fewer, more considered options over many generic variations when proposing design or copy directions.
- Color tokens are locked from the official logo (`DESIGN_SYSTEM.md` §2) — use them, including the accessibility constraints in §8 (the raw orange fails AA as text on the cream background; pair it with navy text when used as a fill).
- Typography is a single geometric sans-first system — no serif, no second display face (`DESIGN_SYSTEM.md` §3). This was an explicit founder decision: the logo already establishes the identity, and type should amplify it through hierarchy/spacing/restraint, not compete with it via a second typographic voice. Don't reintroduce a serif "for elegance" — that instinct was specifically overruled here.
- When in doubt about a decision that only the founder can make (business scope, final visual direction, tone tradeoffs), ask rather than guessing — this project is explicitly about getting the taste right, not about moving fast.
- **The Hand-Marked System (`DESIGN_SYSTEM.md` §12) is a bounded exception, not a new default.** A small number of intentionally-imperfect, hand-coded marks (a highlight stroke, a wobbly button shape) are allowed as a sparing accent, on the reasoning that imperfection used on purpose is proof the studio can execute a loose, hand-crafted brief as convincingly as a precise geometric one. It does **not** license decoration generally — the ~5% restraint rule and "every element must earn its place" (§1) still govern everything else. Specifically: don't switch the site's primary typeface to a handwriting face. A handwriting face is illegible at body-copy length, and this studio's actual audience (`PRD.md` §4 — branding agencies, creative directors) will read a fully-handwritten UI as informal or gimmicky, working directly against the emotional bar in §4 above ("I'd trust them with an important project"). Keep handwriting-style type scoped to text physically inside a hand-marked element, nowhere else.
