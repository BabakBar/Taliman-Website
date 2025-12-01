# Phase 4 — Interactions, Forms, Motion, Performance & Launch

> **Scope:** Consolidates PRD Phases 3 and 4. Adds purposeful motion, RFQ-first forms, analytics, and hardening passes (performance, accessibility, SEO) to reach launch readiness.

## Objectives & Exit Criteria

- Implement scroll-triggered motion utilities, hover/press states, and reduced-motion fallbacks per Branding §6-7.
- Rebuild the RFQ/contact form with validation, submission endpoint, analytics instrumentation, and Iran-specific conversion points (WhatsApp floating CTA).
- Optimize media/assets, run accessibility + performance audits, and ship structured data, sitemap, and spec-sheet PDFs.
- **Exit criteria**
  - Motion utilities applied sitewide with `prefers-reduced-motion` support; QA sign-off recorded.
  - Contact form submissions hit the configured mail/CRM endpoint with logs + fallback mailto; WhatsApp/Telegram CTAs online.
  - Lighthouse ≥95 (Performance, Accessibility, Best Practices, SEO) on mobile + desktop; WebPageTest confirms FCP < 1 s, LCP < 1.8 s, CLS < 0.05.
  - Accessibility report (axe + manual) and SEO artifacts (schema, sitemap, robots) stored under `docs/QA/`.
  - PDF spec sheets generated from content and linked in UI.

## Inputs

- Branding §§6–8, 10–11 (motion, components, accessibility, Iranian adaptations, PDF workflow).
- PRD §5.4–5.7, §6.3–6.6, §7, §8 Phases 3–4, §9 Risks.
- Existing `Contact.astro`, upcoming `src/pages/api/contact.ts`, analytics tooling (Plausible or similar).
- Asset pipeline scripts (ffmpeg for video, Astro `<Image>` for photos).

## Step-by-Step Implementation

### 1. Motion & Interaction System

1. **Utility Module**
   - Create `src/lib/useInView.ts` (IntersectionObserver) returning `inView` boolean.
   - Add `.animate-fade-up`, `.stagger-children`, `.card-hover`, `.image-zoom-container`, `.btn-press` classes to `src/styles/global.css`.
   - Wrap section roots with `client:load` minimal islands only when necessary; prefer CSS/IntersectionObserver to avoid hydration.

2. **Application**
   - Apply fade/stagger to hero copy, process cards, equipment gallery, quality badges.
   - Ensure durations pull from CSS variables (`--duration-fast`, etc.) and disable when `prefers-reduced-motion`.
   - Add skeleton loaders for any content that now streams from dynamic islands (stock status, lead time) if implemented.

### 2. RFQ-First Contact Experience

1. **UI Enhancements (`src/components/Contact.astro`)**
   - Fields: Name, Company, Email, Phone (required, Western numerals), Service Interest (select), Approx. tonnage, Message, Privacy consent checkbox.
   - Inline validation states using semantic palette (success/warning/error tokens).
   - Add success toast + failure state messaging referencing fallback channels.
   - Include bilingual microcopy about <48 h SLA.

2. **Server Endpoint (`src/pages/api/contact.ts`)**
   - Validate payload, sanitize inputs, enforce rate limiting (e.g., IP + time window).
   - Send email via transactional provider or push to CRM webhook.
   - Log errors to server console + optional external monitor; return localized JSON.
   - Include honeypot field + hidden timestamp to deter bots; fallback `mailto:` link if request fails.

3. **Floating WhatsApp Button**
   - Component accessible to screen readers (`aria-label`), localized text, respects safe area insets.
   - Provide Telegram + Instagram links in footer per Branding §11.

4. **Analytics**
   - Integrate lightweight analytics (Plausible) via script tag in `BaseLayout.astro` with `data-domain`.
   - Fire custom events for CTA clicks, language toggles, successful RFQs.

### 3. Performance Hardening

1. **Media Optimization**
   - Replace `<img>` tags with Astro `<Image>` or `@astrojs/image/components`, generating AVIF/WebP + fallback.
   - Compress hero video via ffmpeg `-crf 23 -preset slow`.
   - Use `loading="lazy"` and `decoding="async"` for non-critical images; `priority` for hero poster.

2. **Bundle Analysis**
   - Run `bunx astro build --verbose` + `bunx vite-bundle-visualizer` to inspect JS payload; ensure <150 KB.
   - Tree-shake unused Tailwind utilities (`content` glob accurate) and consider `@astrojs/prefetch`.

3. **Testing**
   - Lighthouse CI or manual run storing JSON reports under `docs/QA/perf`.
   - WebPageTest scripting for fa/en pages (desktop + emulated Moto G4 4G).

### 4. Accessibility & SEO

1. **Accessibility**
   - Execute axe DevTools or `npx @axe-core/cli` against build output.
   - Manual keyboard/RTL walkthrough verifying focus order, skip link, form labels, aria attributes.
   - Document findings + remediation status in `docs/QA/accessibility.md`.

2. **SEO & Schema**
   - Insert `Organization` + `Product/Service` JSON-LD in `BaseLayout.astro` referencing localized URLs.
   - Add `hreflang` links, sitemap generation (`@astrojs/sitemap`), `robots.txt`, and OG/Twitter cards per locale.
   - Ensure metadata uses new brand messaging and Persian SEO keywords (Branding §11).

3. **PDF Spec Sheets**
   - Script `scripts/generate-pdfs.ts` to iterate `products` collection and emit `public/specs/{slug}.pdf`.
   - Link downloads within product/spec sections; add `rel="noopener"` for external hosting if needed.

### 5. Launch Readiness

1. **Checklists**
   - Populate `docs/QA/launch-checklist.md` with go/no-go items (tokens, content parity, analytics, backups).
   - Confirm dual hosting strategy (Global CDN + Iran mirror) documented and DNS failover tested (Branding §Security).

2. **Stakeholder Sign-off**
   - Schedule reviews with Design, Product, Marketing, Engineering; gather approvals inline in the checklist.
   - Prepare release notes summarizing KPIs, known issues, next iterations.

## Validation Checklist

- [ ] Motion utilities degrade gracefully with `prefers-reduced-motion`.
- [ ] Contact form rejects invalid submissions, logs server-side errors, and shows localized success messaging.
- [ ] Floating WhatsApp/Telegram CTAs visible, keyboard focusable, and respect safe areas on mobile.
- [ ] Lighthouse ≥95 all categories; WebPageTest metrics within PRD targets.
- [ ] Accessibility audit documented with zero blocking issues.
- [ ] Structured data validated via Google Rich Results; hreflang links correct.
- [ ] PDF spec sheets generated for every product entry and linked in UI.

## Roles & Owners

| Role | Responsibility |
| --- | --- |
| Frontend | Motion utilities, contact UI, CTA components, media optimization |
| Backend/Infra | Contact endpoint, logging, rate limiting, deployment pipeline |
| QA | Accessibility + performance audits, RTL/manual testing, doc storage |
| Marketing/Content | WhatsApp/Telegram messaging, RFQ copy, SEO keyword validation |
