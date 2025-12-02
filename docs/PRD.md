# Taliman Website — Brand Implementation PRD (v2.0)

_Last updated: November 30, 2025_

## 0. Document Control

| Field          | Detail                                                                          |
| -------------- | ------------------------------------------------------------------------------- |
| Author         | Codex (based on Branding v2.0)                                                  |
| Stakeholders   | CEO, Marketing Lead, Product, Engineering                                       |
| Status         | Draft for review                                                                |
| Reference Docs | `docs/Branding/branding.md`, `docs/CONTENT_STRATEGY.md`, repo source (`src/**`) |

---

## 1. Executive Summary

Taliman is refreshing its public-facing bilingual website to embody the “Technical Heritage meets Digital Innovation” platform. The current Astro 5.x implementation already includes RTL support, translations, and baseline sections, but it still uses a deprecated blue palette, static imagery, and lacks the heritage storytelling, metallic accents, and motion discipline mandated in `Branding v2.0`. This PRD defines the functional scope, technical requirements, content needs, and phased delivery plan needed to migrate the live experience to the new brand direction without jeopardizing uptime or performance targets.

---

## 2. Objectives & Success Metrics

| Objective                    | KPI / Acceptance                                                                                                       | Measurement                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Express new brand platform   | 100% of site surfaces use neutral/accent palette, metallic highlights, Vazirmatn/Inter typography, and heritage motifs | Visual QA checklist per release         |
| Preserve/Improve performance | FCP < 1.0s, LCP < 1.8s, CLS < 0.05 on 75th percentile emulated 4G; Lighthouse ≥ 95 on all categories                   | Automated Lighthouse + WebPageTest runs |
| Strengthen B2B lead gen      | +25% form submissions vs current baseline after launch                                                                 | Analytics + CRM tracking                |
| Guarantee accessibility      | WCAG 2.1 AA audit pass and keyboard/RTL QA sign-off                                                                    | Axe + manual QA                         |
| Improve maintainability      | All sections powered by structured content or translation files (no inline hard-coded copy)                            | Code review checklist                   |

---

## 3. Brand & Experience Principles

1. **Technical Warmth** — Use the neutral/cream foundation for 80% of UI, purple CTAs sparingly (~15%), metallic accents as highlights (~5%). Never introduce pure white (#FFFFFF) backgrounds.
2. **Heritage Geometry** — Reference Samarkand-inspired circular motifs through graphic dividers, subtle SVG textures, and photography crops.
3. **Video-First Storytelling** — Desktop hero uses autoplaying, muted video with gradient overlay; mobile swaps to optimized stills.
4. **Purposeful Motion** — Animations occur only when aiding comprehension, capped at 150–300 ms with brand easing tokens and `prefers-reduced-motion` support.
5. **Precision & Approachability** — Copy balances hardcore technical specs with confident but human tone; layouts remain breathable and data-driven.
6. **Bilingual Respect** — Persian (RTL) is the default experience; English (LTR) maintains parity, with logical properties ensuring mirrored layouts.

---

## 4. Audience & Use Cases

### Primary Personas

- **Automotive Procurement Manager** — Needs instant access to annealing capacity, tolerances, and certifications to shortlist suppliers.
- **Quality Assurance Engineer** — Verifies compliance (ISO 9001, IATF 16949, DIN EN 10277, ASTM A29/A29M) and lab processes before auditing.
- **Fastener Manufacturer CTO** — Evaluates equipment sophistication (bell annealing, drawing lines) and sees process video proof.

### Secondary Personas

- Potential hires, distributors, certification auditors, press.

### Key Use Cases

1. **Evaluate Capabilities** — Browse hero, About, Processes, Equipment sections to assess fit within 2 minutes.
2. **Validate Quality & Compliance** — View Quality section, download certificates, understand testing regimen.
3. **Initiate Contact** — Submit bilingual contact form with clear service selection and quick response expectation (<48h SLA).
4. **Share Story Internally** — Export/print spec sections or share bilingual links with leadership.

Each use case must function equally in fa/en locales and on mobile/desktop.

---

## 5. Functional Requirements

### 5.1 Global Shell

- **Header**: Sticky translucent cream background with logomark/logotype lockups per brand; bilingual language switcher; nav links referencing localized anchors.
- **Footer**: Charcoal background, pearl text, metallic accent dividers; includes contact info, certifications summary, social links, legal copy.
- **Skip Link & Accessibility**: `Skip to main content` link visible on focus.

### 5.2 Hero + Above-the-Fold

- Autoplaying looped MP4/WebM (10–15 s, ≤5 MB) with gradient overlay token `--gradient-hero-overlay` and fallback poster.
- Copy: H1 referencing “Technical Heritage meets Digital Innovation” plus 2 CTAs (`Primary` deep purple gradient, `Secondary` outlined neutral).
- Scroll indicator with micro animation.

### 5.3 Narrative Sections

1. **About Taliman**: Heritage story, core values, stat blocks (years of experience, capacity). Visual: Samarkand pattern overlay.
2. **Processes**: Three-step cards (Annealing & Spheroidizing, Wire Drawing, Quality Control) sourced from structured content; includes metrics (diameter range, tolerances, throughput).
3. **Equipment**: Highlight bell furnaces, drawing lines, lab equipment; include specs tables and media gallery with zoom interactions.
4. **Quality & Standards**: Certification badges, QA workflow, callouts for 100% product testing, lab capabilities.
5. **Photography & Video Highlight**: Carousel or mosaic referencing asset guidelines (hero, process, equipment categories).
6. **Sustainability / Partnerships (optional but recommended)**: Showcase supply chain reliability, strategic partners.

### 5.4 Interaction & Motion

- Scroll-triggered fade-up/stagger classes defined centrally; disabled when `prefers-reduced-motion`.
- Card hover lift, image zoom, CTA press states consistent with durations from brand doc.

### 5.5 Localization & Content Management

- Persian default route `/`; English under `/en`.
- All copy stored in translation JSON or Astro Content Collections (no inline strings).
- Content Collections for `processes`, `equipment`, `certifications`, `testimonials` with bilingual markdown/JSON frontmatter.

### 5.6 Forms & Data Capture

- Contact form fields: Name, Company, Email, Phone, Message, Service Interest dropdown (pre-filled), optional file upload placeholder.
- Validation: Required fields per locale; inline error messaging with semantic feedback.
- Submission: Server-side endpoint (Astro API route or serverless function) sending email + CRM hook; success toast + fallback message.
- Privacy: Opt-in checkbox acknowledging data usage; link to privacy policy.

### 5.7 Analytics & Instrumentation

- Lightweight analytics (Plausible or similar) respecting privacy; track CTA clicks, language toggles, form conversions.

---

## 6. Technical Requirements

### 6.1 Stack & Tooling

- Astro 5.x SSG, TypeScript-first.
- Tailwind CSS configured with brand palette (`charcoal`, `near-black`, `steel`, `cream`, `deep purple`, `bronze`, etc.) and font families (`Vazirmatn`, `Inter`).
- Component Islands only where interaction required (e.g., form state, carousels).

### 6.2 Design Tokens & Styles

- Replace legacy `primary` blues with warm neutrals and accent tokens.
- Define CSS custom properties for colors, spacing (`--section-padding`, `--container-max`), motion durations, and easings.
- Enforce gradient tokens (`--gradient-hero-overlay`, `--gradient-section`, `--gradient-metallic`).

### 6.3 Performance

- Video optimized (H.264 MP4 + WebM), lazy-loaded with poster.
- Images processed via Astro `<Image>` with AVIF/WebP outputs, max hero image 150 KB.
- Global CSS < 50 KB; tree-shake utilities; prefetch critical fonts.

### 6.4 Accessibility

- WCAG 2.1 AA compliance, 14px min body, 4.5:1 contrast, visible focus states.
- ARIA labels for nav, form controls, carousels.
- Logical properties for RTL; ensure mirrored paddings via `padding-inline` etc.

### 6.5 SEO & Metadata

- Locale-specific `<html lang>` and `hreflang` link tags.
- Open Graph/Twitter cards referencing localized titles/descriptions.
- Structured data: `Organization` schema with address, certifications list; `Product` or `Service` schema for CHQ processing.
- Sitemap + robots updates.

### 6.6 Security & Privacy

- Rate limiting/captcha optional (honeypot + server validation baseline).
- No client-side secret storage; environment variables for mail/CRM keys.

---

## 7. Content & Asset Requirements

| Asset Type     | Requirement                                                                                           | Owner                  |
| -------------- | ----------------------------------------------------------------------------------------------------- | ---------------------- |
| Video          | 1080p, 10–15 s loop, <5 MB, no audio, shows machinery motion                                          | Marketing/Creative     |
| Photography    | Categorized (hero, process, equipment, facility, team) with warm grading per doc; deliver 1×/2× crops | Creative               |
| Copy           | Bilingual narratives referencing heritage, metrics, CTA microcopy                                     | Marketing + Translator |
| Specs Data     | Capacities, tolerances, certifications, throughput numbers validated by Engineering                   | Ops                    |
| Icons/Patterns | SVG assets referencing Samarkand motifs; exported at 1× (24px) + decorative backgrounds               | Design                 |

Content ingestion must happen through Content Collections to avoid code changes per update.

---

## 8. Phase Plan & Deliverables

### Phase 0 — Tokenization & Infrastructure (Week 1)

- Replace Tailwind theme + `global.css` with new palette, typography scale, gradients, motion tokens.
- Update README/docs to reflect Astro stack + brand alignment.
- Deliverables: Updated config files, style documentation snippet, automated lint ensuring no legacy `primary-*` classes remain.
- Exit Criteria: Visual QA confirms global backgrounds use Cream/Cloud/Pearl; fonts load correctly.

### Phase 1 — Global Shell & Hero (Week 2)

- Rebuild header/footer, integrate new logo usage rules, add skip link.
- Implement video hero with mobile fallback, new CTAs, scroll indicator, metadata updates.
- Deliverables: `Header.astro`, `Hero.astro`, `Footer.astro`, video assets + posters.
- Exit Criteria: Lighthouse performance unchanged; hero video complies with size/timing guidelines; nav accessible via keyboard.

### Phase 2 — Narrative Sections & Content Collections (Weeks 3–4)

- Convert About/Processes/Equipment/Quality sections to structured content-driven components.
- Add Photography/Video highlight and optional Sustainability/Partner section per content strategy.
- Expand translations or messages store; migrate copy out of components.
- Deliverables: Content collection schemas, localized markdown/JSON files, updated section components.
- Exit Criteria: No inline copy remains; Storybook/Playground (if available) shows all locales.

### Phase 3 — Interactions, Forms, & Motion (Week 5)

- Add scroll-triggered animations, card hover states, reduced-motion support.
- Rebuild contact form with validation, submission endpoint, success/error states, optional analytics events.
- Deliverables: Motion utility module, API route/function, UI feedback states, documentation on form data flow.
- Exit Criteria: Form submission logs visible; manual QA verifies animations respect `prefers-reduced-motion`.

### Phase 4 — Performance, Accessibility, QA, Launch (Week 6)

- Media optimization (Astro Image, responsive sources), bundle analysis, final Lighthouse/WebPageTest passes.
- Accessibility audit (axe, manual), RTL regression testing, SEO artifacts (structured data, sitemap).
- Deliverables: Perf report, accessibility checklist, SEO files, release notes.
- Exit Criteria: KPIs met; stakeholder sign-off for production deploy.

---

## 9. Risks & Mitigations

| Risk                                           | Impact                                 | Mitigation                                                     |
| ---------------------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| Legacy blue components remain after token swap | Brand inconsistency                    | Automated search (`rg primary-`), design review checklist      |
| Video assets exceed size budget                | LCP regression                         | Enforce compression gate; supply multiple encodes              |
| Content backlog delays Phase 2                 | Launch slip                            | Parallel copy sprint; placeholder states with skeleton loaders |
| RTL regressions due to new layouts             | Accessibility issues for primary users | RTL snapshot testing, QA checklist                             |
| Form endpoint failures                         | Lead loss                              | Add retries, fallback mailto link, monitor logs                |

---

## 10. Dependencies & Approvals

- **Design**: Final logo exports, metallic pattern assets, video hero footage.
- **Content**: Updated bilingual copy, certification PDFs, stat validation.
- **Engineering**: API credentials for contact form email/CRM integration.
- **Approval Gates**: End of each phase requires sign-off from Design (visuals), Product (scope), Engineering Lead (tech), Marketing (copy).

---

## 11. Handoff Checklist

- [ ] Tailwind tokens updated and documented.
- [ ] Video + photography assets delivered in required formats.
- [ ] Content Collections populated for both locales.
- [ ] Contact form endpoint credentials provisioned.
- [ ] QA scripts prepared for accessibility, performance, RTL.

_End of PRD._
