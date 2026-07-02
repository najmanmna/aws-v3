# Design System — Ahamed Web Studio

This document is `PHILOSOPHY.md` applied to visual decisions — specifically its operating principle "we don't compete with the client's brand." Every rule below is a consequence of that belief, not an independent style preference. It defines the visual language of the site to protect one idea: **the work is the hero, and everything else is quiet.** ("The work" here means the content on any given page — imagery, a case study, real substance — over interface flourishes. It does not mean the Home page's literal hero section should feature a specific client project; that section has its own rule — see `POSITIONING.md` §6.)

If a decision makes the interface more noticeable than the content it's presenting, it's wrong — even if it looks impressive in isolation.

## 1. Design philosophy

- Simplicity is harder than complexity. Default to removing, not adding.
- Typography carries the brand far more than color, iconography, or decoration.
- Whitespace is a luxury signal, not empty space to be filled.
- Motion supports the experience; it never performs for its own sake.
- Every component must justify its existence. If it exists to demonstrate technical skill rather than to serve the content or the visitor, cut it.
- Timeless over trendy. If a pattern is identifiably "of this year," question it.

## 2. Color

**Status: locked from logo, tokens provisional.** The official logo (`/public/logo.png`) confirmed the working direction exactly — warm cream background, deep navy, orange accent. Values below are sampled directly from the logo file; treat the hex values as a strong starting point to refine during implementation (e.g. adjusting lightness for accessible contrast), not as pixel-sampled-therefore-final.

| Token | Value | Source / usage |
|---|---|---|
| `background` | `#FFFCF4` | Sampled from logo background. Dominant surface color across the entire site — should feel like paper, not a screen. |
| `primary` (text, navy) | `#0E2C54` | Sampled from the logo wordmark. Primary text color, near-black but warm-adjacent — never pure `#000`. |
| `accent` (orange) | `#FF6B47` | Sampled from the lighter end of the mark's orange. Used sparingly: a CTA, a single highlighted word, a hover state, a small detail. |
| `accent-deep` (red-orange) | `#FD5A4A` | Sampled from the darker end of the mark's gradient. Reserve for the logo mark itself / rare emphasis — do not build this into a decorative UI gradient (see rules below). |

- The accent is a seasoning, not a base ingredient. If more than ~5% of any given screen is accent-colored, pull it back.
- **Neutral grays** for secondary text, borders, and dividers should be warm-toned to match the cream background rather than cool/blue-toned grays — derive them by mixing `primary` toward `background`, not by introducing a generic gray scale.
- The logo mark itself uses an orange-to-red-orange gradient — that's acceptable as a fixed brand mark, but it is the one exception to the no-decorative-gradients rule below. Don't extend that gradient treatment into buttons, backgrounds, or hero sections.

Rules regardless of final palette:
- No gradients used decoratively (a very subtle, purposeful gradient in photography treatment is different from a decorative UI gradient — the latter is banned).
- No glassmorphism, glow effects, or neon accents under any circumstance — these read as "trendy tech," which is the opposite of the brand.
- Dark mode is not a requirement. If considered later, it must preserve the same warmth and restraint — not become a generic "dark developer UI."

## 3. Typography

Typography is the single highest-leverage design decision on this site — treat font selection and type-scale decisions as strategic, not just visual.

**Status: locked — geometric sans-first, single visual language.** The founder has explicitly ruled out an editorial-serif pairing: the logo already establishes a confident, modern, geometric identity, and the site's typography must **amplify** that, not introduce a second, competing voice. Elegance comes from hierarchy, spacing, and restraint applied to one typographic system — not from contrast between two different type personalities.

- **One geometric sans family carries the entire site**, display and body alike. Hierarchy is built through size, weight, tracking, and spacing, not through switching typefaces.
  - **Recommended: [General Sans](https://www.fontshare.com/fonts/general-sans)** (Fontshare, free for commercial use) — a geometric grotesk with a wide weight range (Light 300 → Extrabold 800), which is exactly what a single-family system needs: heavy weights that can hold large display headlines with the same confidence as the logo, and lighter/regular weights that stay calm and legible at body-copy sizes.
  - **Acceptable alternates**, same reasoning: **Switzer** (Fontshare, free) or, if there's appetite for a licensed upgrade later, **Neue Montreal** (Pangram Pangram) — a favorite among premium design/branding studios for this exact geometric-confident register.
  - Whichever family is chosen, verify it holds up at both extremes — a huge display headline and a small footer line — before locking it in; a geometric sans that only looks good large is not a system.
- **Large type, generously spaced.** Headlines should feel editorial — closer to a print magazine than a SaaS landing page — even though the face itself is geometric-sans rather than serif. Err toward larger sizes and more line-height than feels safe.
- **Hierarchy through size, weight, and spacing — never through color.** Avoid using the orange accent as a substitute for real typographic hierarchy.
- **Tracking:** consider tightening tracking slightly at large display sizes (echoing the logo's tightly-set wordmark) and opening it slightly at small caps/label sizes (echoing "WEB STUDIO" in the mark) — this is exactly how the logo itself creates hierarchy with one type personality, and the site should borrow that move.
- **Line length:** body copy should sit in a comfortable reading measure (roughly 60–75 characters per line) — never full-bleed paragraphs on wide screens.
- No second "accent" or serif font, anywhere — including in case-study captions, pull quotes, or footer copy. One voice, applied with discipline, is the point.

## 4. Layout & spacing

- **Whitespace is generous by default.** When in doubt, add more space, not more content.
- **Large, editorial, full-width layouts** — especially for case studies. Work should be presented the way a design portfolio or print magazine presents work: big, uninterrupted, unhurried.
- Use a consistent underlying grid (e.g. a 12-column grid with defined gutters) so that "generous" never becomes "arbitrary."
- Section rhythm should be predictable — consistent vertical spacing between major sections creates the calm, unhurried feeling the brand is going for.
- Avoid dense, boxed, "SaaS dashboard" layouts (card grids of feature icons, three-column pricing tables, etc.) — these read as generic agency/software patterns, not boutique craft.

## 5. Imagery & case studies

- **Photography and case-study imagery must be exceptional** — this is non-negotiable, since the portfolio is the primary sales tool (see `PRD.md` §4, §6). A weak image will undercut good copy and good typography faster than anything else on the site.
- Full-width, large-format presentation of work. Let screenshots and photography breathe — no cramped thumbnails.
- No stock photography that reads as generic ("business people shaking hands," abstract tech backgrounds). If real project imagery isn't available yet for a piece of work, don't fill the gap with stock — reconsider whether that project belongs in the portfolio yet.
- No decorative illustration, icon sets, or isometric graphics used as filler — these are a marketing-agency and SaaS cliché the brand is explicitly avoiding.
- **Screenshots are presented raw — no fake browser chrome, no device mockups (laptop bezels, phone frames, floating browser windows).** These are a dev-portfolio and template-marketplace cliché, and they visually compete with the real craft of the work itself (they're also, by definition, a "fake" UI element — the same instinct that bans fake dashboards in §7). Crop and present the actual design full-bleed, at real fidelity, the way a print portfolio presents photography of built work rather than a rendering of it.
  - Exception only where the device context is itself the point (e.g. genuinely demonstrating a mobile interaction that can't be understood any other way) — and even then, prefer a clean, minimal frame over a literal skeuomorphic device mockup.
- **Color grade case-study imagery for warmth**, or at minimum confirm it doesn't clash — a cool, blue-heavy screenshot sitting on the warm cream background will read as jarring next to the navy/orange/cream palette. This doesn't mean altering client work's actual colors; it means being deliberate about which shots/crops are chosen and how they're framed on the page (background mattes, spacing) so the overall page still feels cohesive.
- Maintain one consistent aspect-ratio/crop convention per context (e.g. hero image, in-page detail shots) across all case studies — inconsistent, ad hoc cropping from project to project undercuts the "every project handled with the same care" impression.

## 6. Motion

- Motion must support comprehension or feel (e.g. an image gently revealing on scroll, a smooth page transition) — never exist purely to demonstrate what's technically possible.
- Prefer subtle, slow, confident motion over snappy, bouncy, or attention-grabbing animation. Confidence doesn't rush.
- No parallax gimmicks, no scroll-jacking, no cursor-follow effects, no "wow" interactions. If a motion detail would look at home in a Dribbble shot reel of trendy interactions, cut it.
- Respect `prefers-reduced-motion` without exception.

## 7. Explicit anti-patterns (banned outright)

These are named because they are common "generic premium agency" or "generic dev portfolio" tells — the exact opposite of what this brand is trying to be:

- Glassmorphism / frosted-glass panels
- Glowing buttons or glowing UI accents
- Cyberpunk / neon aesthetics
- Fake dashboards, fake terminal windows, fake code snippets used as decoration
- Gradient backgrounds used decoratively
- Icon-and-headline "feature grid" sections (the three/four-column icon grid so common to SaaS marketing sites)
- Auto-playing carousels
- Stock photography and generic illustration
- Any animation whose purpose is "look what we can build" rather than "help the visitor understand or feel something"

## 8. Accessibility as a design constraint, not an afterthought

- Minimum WCAG 2.1 AA contrast, including for the orange accent against the beige background — test this explicitly, since warm-on-warm palettes can fail contrast easily.
- **Confirmed finding:** `accent` (`#FF6B47`) against `background` (`#FFFCF4`) measures ~2.75:1 — this fails AA for text at any size (needs 4.5:1 normal / 3:1 large) and only barely clears the 3:1 floor for non-text UI components (borders, icon strokes). **Do not set orange text directly on the cream background.**
  - For orange as a solid button/fill: pair with `primary` (navy) text, not white/cream — navy-on-orange measures ~4.94:1, which passes AA. White or cream text on orange fails (~2.8:1).
  - For orange used as a text color (e.g. a highlighted word inline), either reserve it for large/bold display type only (still marginal — verify against the specific weight/size in use) or darken it for that use case rather than reusing the raw logo-sampled value.
  - Orange as a thin border, underline, icon, or small accent shape (non-text) is safe at the sampled value.
- `primary` (navy `#0E2C54`) against `background` (`#FFFCF4`) measures ~13.6:1 — comfortably passes AAA for any text size and usage.
- Type sizes and line-heights should meet accessibility minimums even where the editorial direction pushes toward "large" — large type should never come at the cost of readability.
- All motion must respect reduced-motion preferences (see §6).

## 9. Status

- **Color: done.** Logo received (`/public/logo.png`) and tokens extracted — see §2 and §8 for values and contrast findings.
- **Typography: direction locked, exact family pending final pick.** Single geometric sans system, no serif, no second competing typeface — see §3. Recommended family is General Sans (Fontshare); Switzer and Neue Montreal are acceptable alternates. Final family choice should still be confirmed once it's actually set in the browser against real headline/body content, since a font can read differently on screen than in a spec sheet.
- **Type scale, spacing scale, exact tokens as code (e.g. Tailwind theme values):** deliberately deferred — to be derived once the typography comparison (General Sans vs. Switzer vs. Neue Montreal, tested against real homepage and case-study content, not lorem ipsum) settles the final family. Locking a numeric scale before that would just get thrown out.

## 10. Logo usage

The mark (`/public/logo.png`, 200×200) is a triangular/peak form built from faceted navy linework, filled with an orange-to-red-orange gradient, sitting on the cream background — with "AHAMED" set bold and tight beneath it, and "WEB STUDIO" set light and wide-tracked below that. It is the one place in the entire visual system where a gradient is allowed (§2) and where two very different type weights appear together as a single lockup — everywhere else, those moves are used one at a time, deliberately, per §2/§3.

- **Don't redraw, recolor, or reinterpret the logo.** It's a fixed asset. If a different format is needed (horizontal lockup for a nav bar, monochrome version for a favicon, a mark-only version without the wordmark for small UI contexts), request or produce proper variants rather than approximating them in CSS/markup.
- **Clearspace:** keep the mark clear of other content by roughly the width of the "A" peak on all sides, at minimum — don't crowd it against nav items, edges, or copy.
- **Minimum size:** below a certain size the faceted linework inside the triangle will degrade into visual noise (it's already intricate at 200px). Test the mark at actual deployed sizes (favicon, nav bar, footer) and simplify to a mark-only or wordmark-only variant rather than shrinking the full lockup past the point of legibility.
- **Backgrounds:** the mark is designed for the cream `background`. If it ever needs to sit on a darker or different-colored surface, that needs a deliberate alternate version (e.g. a reversed/light wordmark) — never just placed as-is on an incompatible background.
- **Never** stretch, skew, rotate, add drop shadows/glows to, or place the logo over busy photography without a clean matte behind it.

## 11. Iconography

- **Default to no icons.** Most of what an icon would communicate (services, features, steps) is exactly the "icon-and-headline feature grid" pattern already banned in §7. Prefer a plain-language label or, where genuinely useful, real photography/work over an icon.
- Where a small functional icon is unavoidable (e.g. an arrow indicating a link, a close icon on a menu, a simple social icon in the footer), use a **single consistent icon style**: simple, geometric, single-weight line icons that echo the faceted, confident geometry of the logo mark — never a generic icon-font library (Feather, Font Awesome, Material Icons, etc.) mixed in wholesale, since off-the-shelf icon sets read as generic and undercut the bespoke feel everywhere else on the site.
- Icons are functional wayfinding elements, not decoration. If removing an icon and keeping only the label loses no information, remove it.

## 12. The Hand-Marked System (bounded exception)

**Status: locked, first instance built on Home.** This is a deliberate, narrow exception to §7's ban on decorative graphics — not a reversal of it. It exists for one specific reason: **imperfection, used on purpose, is proof of range.** A studio that only ever produces precise, geometric, restrained work can't prove it could just as easily execute a looser, hand-crafted, organic brief if a client or agency brought one. The hand-marked system is that proof, deployed in exactly the places that need it and nowhere else — it demonstrates the same claim as `POSITIONING.md` §2 ("we obsess over execution... nothing gets translated into something worse on the way to production"), applied to range rather than fidelity: we can build precisely what a designer imagined, whether that's a Figma file full of exact 8px grids or a hand-drawn brand sketch on paper.

**What it is:** a small, growing library of bespoke, intentionally-imperfect marks — highlight strokes, unique button/shape outlines, and future variants (underlines, circles, arrows) as they're needed — built as hand-coded, one-off SVG paths, never a generic "sketchy" library (rough.js or similar), because a library-generated wobble is a template effect and the entire point is that it's unmistakably made for this site and nowhere else.

**Current instances (Home hero):**
- A layered marker-highlight (two overlapping stroke paths at different opacities, distorted via SVG `feTurbulence`/`feDisplacementMap` for genuine ink-bleed texture, blended with `mix-blend-multiply` so it reads against the paper-grain background) behind the hero headline's closing phrase.
- A one-off wobbly brush-stroke shape behind the primary CTA, including small dry-brush "flyaway" marks at the edges — not a rectangle, not a pill, not reused anywhere else.
- An italic serif, used *only* inside a hand-marked element, standing in for handwriting until a proper handwriting typeface is added (see below) — this is the one place a second typeface is permitted, and only because it's in service of the "this was marked by hand" illusion, not as general editorial contrast (which was tried and explicitly rejected earlier).

**Rules governing every future addition to this system:**
- **Sparing, always.** These marks are a seasoning on top of the precise geometric system, not a replacement for it — the same "~5%" restraint logic that governs the orange accent (§2) applies here. If more than one or two hand-marked moments appear on a single page, it's no longer an accent, it's a redesign, and should be treated as one (i.e., discussed first).
- **Never the primary typeface, never the primary layout tool.** The geometric sans-first system (§3) remains how the site communicates by default. Hand-marked moments are punctuation, not the sentence.
- **Every mark must be genuinely bespoke.** No off-the-shelf "rough" or "sketchy" component libraries — hand-author the path data (or commission it) so it can't be mistaken for a template effect.
- **Test at every breakpoint before shipping.** These marks are the least forgiving element on the site to get wrong responsively (percentage-based SVG sizing inside auto-width containers is a real, recurring bug source — prefer explicit padding-based sizing over negative-percentage insets) and text-wrapping must be allowed to reflow naturally, never forced with `whitespace-nowrap`, or mobile will overflow.

## 13. Handwriting typeface (recommended, not yet implemented)

The current italic serif in the hand-marked system is a placeholder, not a real handwriting face — it borrows "editorial" character, not "handwritten" character. Recommendation: replace it with an actual handwriting webfont, scoped *only* to text inside a hand-marked element (§12), never applied more broadly:

- **Recommended: [Caveat](https://fonts.google.com/specimen/Caveat)** (Google Fonts, free) — natural handwriting character, a genuine weight range (400–700) so it can still carry some hierarchy, and enough legibility to survive a few words at display size (its only real job here).
- **Alternates depending on desired tone:** **Architects Daughter** (reads specifically like a designer's own annotation on a spec sheet — thematically the closest to "we can build what's in your head, sketched by hand") or **Permanent Marker** (bolder, more graphic, closer to the literal highlighter-pen concept, but usable only at very short phrase length).
- **What this explicitly does not mean:** switching the site's primary typeface to a handwriting face. See `docs/CLAUDE.md`'s working-style notes for the reasoning — legibility, trust, and the audience `PRD.md` §4 defines all argue against it as a system-wide choice. This is an accent face for a bounded number of moments, the same way the orange accent is a color for a bounded number of moments, not a background.
