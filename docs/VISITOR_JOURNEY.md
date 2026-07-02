# Visitor Journey — Ahamed Web Studio

This is the emotional blueprint for the entire site. Every other document in `/docs` describes a piece of the site (`DESIGN_SYSTEM.md`, `COPY_GUIDELINES.md`, `SITE_STRUCTURE.md`...); this one describes the *experience* those pieces need to add up to, told as a story rather than a wireframe. When a section, a line of copy, or a design decision is in question, test it against these narratives: does it move the visitor one step further along, or does it just sit there?

## 1. Primary journey — a creative director / agency contact

A creative director lands on the homepage after receiving our portfolio link.

Within five seconds, they understand that Ahamed Web Studio specializes in premium websites for brands and agencies. The hero doesn't lean on any specific client project to make that case — a confident, restrained statement of positioning, carried by typography and craft alone, tells them what this studio is before a single piece of work is shown (`POSITIONING.md` §6).

As they scroll, the first case study converts that promise into proof — it convinces them that the quality is genuine. Testimonials reduce perceived risk. The process reassures them that collaboration will be structured and reliable. By the time they reach the contact section, the decision isn't "Can they build websites?" — it's "Are they available for our next project?"

If they're evaluating us specifically as a white-label partner (rather than arriving cold), they follow the agency-partnership thread: they want the specific worry named in `TRUST.md` §4 — *will my design survive execution?* — answered before they'll seriously consider us. The `/partners` page needs to close that loop directly, with process detail and, ideally, a case study that shows a design handed to us intact and executed faithfully.

## 2. Secondary journey — a founder / business owner

A founder arrives after a referral or a search for "premium website design." They don't have the technical vocabulary a creative director has, but they know what "cheap" and "generic" feel like, because they've likely already been burned by one or the other.

The homepage needs to reassure them quickly that this isn't a template shop and isn't a faceless agency — the calm tone, the quality of the work shown, and a visible, real founder (not a logo and a "team") tell them this is a considered, trustworthy choice. They don't need every technical detail explained; they need to feel, within the first case study, that *this is what my brand deserves.*

By the time they reach `/studio`, they're not evaluating technical competence anymore — they're deciding whether they like and trust the person behind the work. A specific, human presence (`TRUST.md` §3) does more for this visitor than another paragraph of service description.

## 3. Secondary journey — a designer considering a referral

A designer isn't buying anything today — they're deciding whether to *recommend* us to a client or agency, which means their reputation is on the line if we disappoint.

They move fast and critically: typography, spacing, and restraint are noticed and judged within seconds, often before they read a single word (`DESIGN_SYSTEM.md` §1). If anything reads as generic — a stock photo, an icon-feature grid, a trendy animation — trust is lost immediately and silently; they simply won't recommend us, and we'll never know why.

If the site clears that bar, they look for one thing to confirm their instinct: a case study where the *design itself* (not just the code) was clearly respected during the build. That's the single strongest signal for this visitor — and it's the same signal that matters most to creative directors and agencies (§1), which is why `POSITIONING.md` §2 treats "we preserve design intent" as the central differentiator rather than a footnote.

## 4. What this implies for site structure

Every section of the site should exist because it moves at least one of these journeys forward. If a proposed section doesn't map to a specific moment in one of the three narratives above, it's decoration, not structure — cut it or fold it into something that does.

Roughly, the shared arc across all three journeys is:

1. **Understand** (first 5–10 seconds) — what we do, who it's for, that this isn't generic
2. **Believe** (through the first case study + testimonials) — the quality claim is real
3. **Trust** (process, real founder, FAQs) — working with us is low-risk
4. **Act** (a clear, calm next step) — reaching out is the obvious move, not a leap

This maps directly onto `PRD.md` §7's success criteria and the concrete 10-second / 60-second / 3-minute checkpoints defined there — this document is the narrative version of that same standard, and the two should be read together.

## 5. Related documents

- `PRD.md` §7 — the measurable version of this same standard (10s / 60s / 3min checkpoints)
- `POSITIONING.md` — the claim this journey needs to prove
- `TRUST.md` — the mechanics behind the "Trust" stage above
- `CASE_STUDY_STRATEGY.md`, `CONVERSION.md` — how "Believe" and "Act" get built in practice
