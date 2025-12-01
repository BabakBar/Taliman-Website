# Phase 2 — Global Shell & Hero Modernization

> **Scope:** Mirrors PRD Phase 1. Builds on Phase 1 tokens to refresh the navigational shell, hero, and global accessibility affordances.

## Objectives & Exit Criteria

- Rebuild `Header.astro`, `Footer.astro`, and `Hero.astro` to express the “Technical Heritage meets Digital Innovation” story with the video-first pattern.
- Ensure global navigation, skip link, and language toggles meet WCAG 2.1 AA and Branding §5 guidelines.
- Deliver optimized hero media (MP4 + WebM + poster) within 5 MB, plus a mobile fallback image.
- **Exit criteria**
  - Sticky header uses translucent cream glass effect, metallic divider, and updated logo lockups.
  - Hero auto-plays video on desktop, swaps to static background on ≤768 px viewports, includes gradient overlay token, and keeps LCP < 1.8 s in Lighthouse.
  - Footer adopts charcoal background, pearl text, Iran-priority social links, and certification summary block.
  - Skip link is tabbable and visible; nav + hero CTAs accessible via keyboard in both locales.

## Inputs

- Branding §§2, 3, 5, 7, 8, 11 (logo usage, color, video specs, Iran social priorities).
- PRD §5.1–5.2, §6.1–6.4, §8 Phase 1.
- Current components under `src/components/{Header,Hero,Footer}.astro`.
- Media folder structure (`public/images`, needs `/public/video`).

## Step-by-Step Implementation

1. **Accessible Skeleton**
   - In `src/layouts/BaseLayout.astro`, insert `<a class="skip-link" href="#main">...</a>` immediately after `<body>`.
   - Give `<main>` elements `id="main"` across `src/pages/**/*.astro`.
   - Style `.skip-link` in global CSS to be invisible off-focus and prominent on focus (accent background, pearl text).

2. **Header Rebuild (`src/components/Header.astro`)**
   - Apply new utility classes: `bg-cream/90`, `backdrop-blur-xl`, `border-b border-fog`.
   - Swap `img` reference to the approved horizontal lockup; load alternative stacked lockup for ≤640 px using `<picture>`.
   - Update nav link data to come from translation keys plus Content Collections (Phase 3 will feed override).
   - Language switcher: convert to ghost button variant; clicking should maintain current path via helper `getLocalizedPath`.
   - Add metallic accent underline on hover using `after:bg-gradient-metallic`.

3. **Footer Rebuild (`src/components/Footer.astro`)**
   - Background: `bg-charcoal`.
   - Text: `text-pearl`, `text-mist` for secondary copy.
   - Insert social list prioritized as WhatsApp, Telegram, Instagram, LinkedIn with icons.
   - Include certification badges placeholder referencing Content Collection entries (Phase 3 will populate).
   - Add top border using metallic gradient to echo brand heritage.

4. **Hero Video Implementation (`src/components/Hero.astro`)**
   - Move hero copy keys to match PRD (headline referencing “Technical Heritage meets Digital Innovation”).
   - Background:
     ```astro
     <video autoplay loop muted playsinline poster="/video/hero-poster.jpg" class="hero-video">
       <source src="/video/hero.mp4" type="video/mp4" />
       <source src="/video/hero.webm" type="video/webm" />
     </video>
     <div class="absolute inset-0 bg-gradient-hero-overlay" />
     ```
   - Add `<div class="hero-mobile-fallback" aria-hidden="true"></div>` styled via media queries to swap image on mobile.
   - CTA buttons: primary gradient + secondary ghost, crossing to localized anchors.
   - Scroll indicator uses accent outline with 150 ms animations and respects reduced-motion (falls back to static icon with `prefers-reduced-motion`).

5. **Asset Preparation**
   - Coordinate with Design for final MP4/WebM (10–15 s, ≤5 MB) and poster JPG/AVIF.
   - Use `ffmpeg` script (documented in `docs/TECHNICAL_SPECS.md`) to produce both encodes and verify size budgets.
   - Optimize header/footer SVG icons (minified, inline for color control).

6. **QA & Performance**
   - Run `bun run build && bun run preview`, then Lighthouse desktop/mobile to verify hero video doesn’t hurt LCP.
   - Validate RTL/LTR: ensure sticky header mirrored spacing by using logical properties (`padding-inline`, `gap`).
   - Keyboard test: Tab through skip link → nav → hero CTAs; ensure focus outlines visible on cream background.

## Validation Checklist

- [ ] Skip link focus reveals high-contrast banner and jumps to `#main`.
- [ ] Hero video lazy loads (add `loading="lazy"` or IntersectionObserver) and pauses for reduced-motion users.
- [ ] Footer social icons reflect Iran priority order with localized labels.
- [ ] Lighthouse ≥95 across categories after video integration.
- [ ] No console warnings about autoplay (video is muted + playsinline).

## Roles & Owners

| Role | Responsibility |
| --- | --- |
| Frontend | Component rewrites, responsive behavior, autoplay fallback |
| Design | Supply approve logo lockups, hero footage/poster, icon set |
| QA | RTL keyboard nav, mobile fallback, Lighthouse runs |
