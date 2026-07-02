# Product Requirements Document — Ahamed Web Studio

## 1. Why this project exists

This is not a redesign. It is a repositioning.

The previous version of this site does not represent where the business is going. This rebuild exists to reposition Ahamed Web Studio as a **boutique premium web design and development studio** — not a software company, not a marketing agency, not a freelancer portfolio, and not a generalist digital-services shop.

The website is the single most important proof point of the brand's own claim: that we care about craftsmanship, restraint, and quality. If the site itself feels templated, trendy, or "AI-generated," the business fails to prove its own thesis before a visitor reads a single word of copy.

## 2. Who we are (for reference — see also `COPY_GUIDELINES.md`)

Ahamed Web Studio designs and builds premium, custom websites for businesses, startups, and creative agencies. We turn thoughtful designs into fast, scalable, beautifully crafted websites built to last.

We are intentionally small-scale and selective. We would rather build fewer exceptional websites than many average ones.

## 3. Long-term vision

Become the **digital execution partner** that branding agencies and creative studios trust with their clients — the studio an agency can point to and say: *"We'll handle the strategy and branding. Ahamed Web Studio will bring it to life."*

Secondarily, work directly with ambitious founders and businesses who already understand the value of premium design.

## 4. Primary audiences

The site must speak clearly to four visitor types, in roughly this order of strategic priority:

| # | Audience | What they're evaluating | What they need to feel |
|---|---|---|---|
| 1 | **Branding agencies** | Can this studio execute our designs without compromising them? Are they reliable, communicative, and easy to hand off to? | "This is a safe, trustworthy execution partner." |
| 2 | **Creative directors** | Typography, spacing, restraint, taste. They notice bad execution instantly. | "They understand good design." (communicated quietly, never stated) |
| 3 | **Founders & business owners** | Credibility, professionalism, speed, results. May not understand the technology. | "I can trust these people with something important." |
| 4 | **Designers** | Will this studio preserve my design intent during build? | "They respect and protect design quality." |

## 5. Who we are explicitly NOT designing for

The site should naturally **filter out**, not attract:

- Price-comparison shoppers / cheapest-bid seekers
- Template-website buyers
- Anyone wanting a "quick fix" or fast turnaround at low cost
- Businesses wanting a long menu of unrelated digital services (SEO, ads, social media management, etc.)

If a design decision makes the studio more appealing to this group, it is very likely working against the brand. This is a legitimate design constraint, not an oversight.

## 6. Goals

**Primary goal:** Generate qualified inbound interest from branding agencies and premium-minded founders, and convert that interest into inquiry/contact form submissions or calls booked.

**Secondary goals:**
- Make the portfolio/case-study work the visual centerpiece of the site — the thing that dominates screen space and does most of the convincing (note: this is distinct from the literal Home hero section, which must establish identity independent of any single project — see `POSITIONING.md` §6).
- Establish enough credibility and craft signal that visitors self-qualify before contacting us (reduces low-fit inquiries).
- Create a reusable case-study template that makes it fast to add new work without compromising quality.

**Explicitly not goals:**
- SEO-driven content marketing / blog-as-lead-magnet strategy
- Maximizing traffic volume
- Showcasing technical stack or engineering cleverness to visitors
- Becoming a full-service "one-stop shop" positioning

## 7. Success criteria

Qualitative (see `COPY_GUIDELINES.md` for the full emotional brief): a visitor should leave thinking *"these people have exceptional taste, I'd trust them with an important project"* — not *"that's a cool animation."*

**Concrete comprehension timeline** — the measurable form of that same standard, and the bar every page should be checked against (narrative version: `VISITOR_JOURNEY.md`):

- **Within 10 seconds**, a visitor should understand: what AWS does, who it's for, and that it's different from a generic agency.
- **Within 60 seconds**, a visitor should: have seen real work, trust that the quality is genuine, and know what the next step would be.
- **By 3 minutes**, a visitor should: have viewed at least one full case study, know who Najman is, and be genuinely considering reaching out.

If usability testing or analytics show a page failing one of these checkpoints (e.g. bounce before any case study is viewed), that's a structural problem to fix, not a copy tweak.

**Content hierarchy** — how much weight each type of content should carry, especially on Home, to prevent the site drifting toward a generic "Services, Services, Services" structure:

| Content | Priority |
|---|---|
| Portfolio / case studies | ★★★★★ |
| Testimonials | ★★★★★ |
| Founder | ★★★★☆ |
| Services (narrow, not a menu) | ★★★★☆ |
| Process | ★★★☆☆ |
| Technology / stack | ★☆☆☆☆ |

Technology being last, and barely present at all, is intentional — see `POSITIONING.md` §2 and `COPY_GUIDELINES.md` §2 on leading with outcomes over stack.

Quantitative, to be tracked once live:
- Contact form / inquiry submissions, segmented by visitor type where possible (e.g. "I'm an agency" vs "I'm a business owner")
- Time on case-study pages (proxy for genuine interest vs. bounce)
- Ratio of qualified vs. unqualified inquiries (a rising ratio of well-fit inquiries is a stronger success signal than raw volume)

## 8. Scope

### In scope for this rebuild
- Full marketing site: home, work/case studies, about/studio, services (narrow, not a menu), contact, and an agency-partnership-focused page or section
- A polished, reusable case-study/portfolio template
- Full design system and content foundation (this `/docs` set)
- Performance, accessibility, and SEO fundamentals as baseline quality bars, not differentiators

### Out of scope (for now)
- Client portal / project management tooling
- Blog / content marketing engine
- E-commerce or payments
- CMS integration decisions (to be decided once IA is locked — see `SITE_STRUCTURE.md`)
- Multi-language support

## 9. Non-functional requirements

- **Performance:** the site must load instantly and feel effortless — this is a direct brand claim ("built to feel effortless, load instantly"), not just an engineering nicety. Treat performance budgets as part of the creative brief.
- **Accessibility:** meets WCAG 2.1 AA as a baseline. A "premium" brand that excludes users is not premium.
- **Maintainability:** every project (including this one) should be easy to extend without degrading quality — this is a stated craft value, so the codebase must reflect it.
- **Cross-device fidelity:** large editorial layouts must degrade gracefully to mobile without losing the sense of restraint and craft.

## 10. Open questions / decisions deferred

- Color palette and typographic direction are locked from the official logo (`/public/logo.png`) and founder decision — see `DESIGN_SYSTEM.md` §9 for current status and remaining implementation details (exact family, type scale).
- CMS vs. hand-authored case studies — decide once volume of case studies is known.
- Whether an agency-partner-specific page is a standalone page or a section on Home (see `SITE_STRUCTURE.md`).

## 11. Related documents

- `POSITIONING.md` — why AWS over another agency; the claim everything else proves
- `DESIGN_SYSTEM.md` — visual language, tokens, motion, imagery
- `COPY_GUIDELINES.md` — voice, tone, messaging per audience
- `SITE_STRUCTURE.md` — sitemap, IA, page-by-page content requirements
- `CASE_STUDY_STRATEGY.md` — portfolio curation and case-study structure
- `TRUST.md` — how trust is engineered before a visitor ever reaches contact
- `PHOTOGRAPHY.md` — photography direction and treatment
- `CONVERSION.md` — CTA strategy and conversion definition
- `VISITOR_JOURNEY.md` — the narrative form of this document's success criteria (§7)
- `DEVELOPMENT_RULES.md` — engineering standards and guardrails
- `CLAUDE.md` — how AI-assisted work on this project should operate
