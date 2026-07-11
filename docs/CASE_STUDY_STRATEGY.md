# Case Study / Portfolio Strategy — Ahamed Web Studio

The portfolio is the primary sales tool on this site (`PRD.md` §4, §6; `DESIGN_SYSTEM.md` §5). This document decides how it's curated, structured, and written — treat it with the same weight as the homepage itself, because for most visitors, the case studies effectively *are* the pitch.

## 1. How many featured projects

**Three, maximum four.**

A boutique studio with twelve "featured" projects contradicts its own positioning (`POSITIONING.md` §4 — we are selective, not high-volume). Three to four exceptional, deeply-told stories build more trust than ten thin ones. If the archive grows, a smaller `/work` index can surface more, but the *featured* set (on Home, and foregrounded in `/work`) stays capped at four.

## 2. Which projects — ranked by storytelling, not difficulty

The instinct to feature the technically hardest project is wrong for this brand. Rank by how well a project **proves the positioning** (execution fidelity to a strong design, a real business outcome, a clear before/after) — not by feature complexity or the client's brand recognition.

Confirmed set for the Home showcase (2026-07-02), built with real screenshots as implementation placeholders while final case-study photography/copy is produced — layout and order still open to revision once each project's full story is drafted:

1. ELDA (elda.lk) — heritage block-print textiles
2. The Balanced Pantry (thebalancedpantry.lk) — curated wellness products
3. Elvyn (elvynstore.com) — premium leather goods
4. Hedone (hedoneskincare.com) — natural skincare

Arkmurus was considered and deliberately excluded — its live site reads as a generic corporate template (stock photography, icon-feature grid, gradient text, an intrusive chat widget), which fails the "featured" bar in §3 below and would sit as a tonal outlier against the other three lifestyle/craft brands. Hedone was chosen in its place for both craft quality and curatorial fit.

Before locking final order, stress-test each candidate against §3 below — a project that's technically impressive but has a weak "story" (unclear challenge, no measurable outcome, no strong imagery) should rank below a simpler project that tells a complete, convincing story.

## 3. What makes a project "featured"

A project earns a featured slot only if **all** of the following are true — this is a checklist, not a vibe:

- **Exceptional imagery exists or can be produced.** Per `DESIGN_SYSTEM.md` §5, weak imagery undercuts everything else — if the visuals aren't strong, the project isn't ready to be featured yet, regardless of how good the underlying work was.
- **There's a real challenge/outcome arc**, not just "we built a website." A project with no clear before-state or no measurable result is a weak story no matter how polished the final build is.
- **The design was respected during execution** — this is the single clearest proof of `POSITIONING.md` §2 (bridging branding and development), so a project that demonstrates fidelity to an agency's or designer's original vision should rank especially high.
- **A testimonial exists or is obtainable.** Third-party validation is load-bearing here (see `TRUST.md`) — a project without one is missing a key trust element.
- **The client relationship allows full case-study treatment** (permission to publish imagery, results, and a testimonial). A great project that can't be shown fully doesn't belong in the featured set — a locked-down, half-told story is worse than no story.

## 4. Required elements per case study

Every featured case study includes:

- **Challenge** — what the client needed and why it mattered, in plain language (see `COPY_GUIDELINES.md` §7)
- **Approach** — how we worked, kept brief and outcome-oriented, never a technical implementation log
- **Outcome** — the result, stated concretely
- **Images** — full-width, high-fidelity, real (per `DESIGN_SYSTEM.md` §5)
- **Responsive views** — how the design holds up across breakpoints, shown as real screens, not device mockups (§5's raw-presentation rule applies here too — show a real mobile viewport screenshot, not a phone-frame graphic)
- **Testimonial** — a direct quote from the client, ideally attributed with name/role/company (see `TRUST.md`)
- **Results** — any concrete, honest metrics (see `COPY_GUIDELINES.md` §7 — never invented or vague)

## 5. What should never appear in a case study

These are common developer-portfolio habits that actively undermine this brand's positioning (they signal "engineer showing off," which is the opposite of "boutique studio serving the client's brand" — see `DESIGN_SYSTEM.md` §7, §11):

- Giant tech-stack call-outs ("Built with Next.js, Sanity, Framer Motion, Vercel...")
- GitHub screenshots or repository links
- VS Code / editor screenshots
- Raw code snippets
- Browser-chrome or device-frame mockups (`DESIGN_SYSTEM.md` §5)
- Vague, unverifiable claims ("improved user experience significantly")

## 6. Case study narrative structure

Every case study follows the same underlying rhythm. Structural consistency is itself a trust signal — a visitor who reads two case studies should recognize the pattern by the third, which builds a subtle sense of process and rigor (see `TRUST.md` and `VISITOR_JOURNEY.md`):

```
Introduction → Challenge → Objectives → Research → Design → Development → Performance → Results → Reflection
```

- **Introduction** — one or two lines: who the client is, what the project was, in plain terms.
- **Challenge** — the problem or gap the client came to us with.
- **Objectives** — what success needed to look like, from the client's perspective.
- **Research** — brief; only include if genuinely informative, not padding.
- **Design** — how the design (ours, or the agency/designer's we executed) addressed the objectives.
- **Development** — kept high-level and outcome-focused (performance, maintainability, craft) — never a stack list (§5 above).
- **Performance** — real, honest metrics where available (load time, Lighthouse-type scores stated in plain language, not jargon — see `COPY_GUIDELINES.md` §2).
- **Results** — the business or brand outcome.
- **Reflection** — a short, honest closing note — what made this project worth featuring, in the studio's own voice.

Not every section needs equal length — some case studies will have a rich Research section and a thin Reflection, others the reverse. The order and presence of each beat, however, should stay consistent across all featured case studies.

## 7. Related documents

- `DESIGN_SYSTEM.md` §5 — imagery and presentation rules that govern how case studies look
- `PHOTOGRAPHY.md` — the visual treatment applied to case-study imagery specifically
- `TRUST.md` — how testimonials and results function as trust signals
- `COPY_GUIDELINES.md` §7 — case-study copy voice
- `CONVERSION.md` — what happens after a visitor finishes reading a case study
