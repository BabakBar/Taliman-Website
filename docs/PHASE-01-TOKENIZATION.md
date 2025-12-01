# Phase 1 — Tokenization & Infrastructure Alignment

> **Scope:** Maps to PRD Phase 0 (Tokenization & Infrastructure) but absorbs the preparatory audit work so that downstream phases can build on stable brand tokens.

## Objectives & Exit Criteria

- Replace every legacy `primary-*` blue and pure white usage with the Branding v2.0 warm neutral system.
- Codify typography, motion, spacing, gradient, and shadow tokens as both Tailwind theme extensions and CSS custom properties.
- Establish guardrails (lint/search scripts + documentation) that prevent regressions.
- **Exit criteria**
  - `rg "primary-" src` returns no matches.
  - Global background defaults to `Cream (#F8F6F3)` and passes the CEO “no pure white” directive.
  - Token reference doc committed and linked from `README.md`.
  - Visual QA of `/` and `/en` confirms fonts, colors, and focus states match Branding §3-4.

## Inputs

- `docs/Branding/branding.md` — §§3 (Color System), 4 (Typography), 6 (Motion), 7 (Component Patterns), 10 (Quick Reference).
- `docs/PRD.md` — §5.1, §6.2, §8 Phase 0 requirements.
- Current source of truth files:
  - `tailwind.config.mjs`
  - `src/styles/global.css`
  - `src/layouts/BaseLayout.astro`
  - `package.json` (scripts)

## Step-by-Step Implementation

1. **Audit & Snapshot**
   - Run `rg --nocolor -n "primary-" src` and `rg --nocolor -n "#ffffff" -g"*.{astro,css,ts,tsx}" src`.
   - Capture before/after counts in `docs/PROGRESS.md`.
   - Note any third-party dependencies that still inject blues (e.g., shadcn components); schedule fixes or overrides.

2. **Tailwind Theme Rebuild (`tailwind.config.mjs`)**
   - Replace `primary`/`industrial` palettes with Branding tokens:
     ```js
     colors: {
       cream: '#F8F6F3',
       cloud: '#F2F0ED',
       pearl: '#FAFAF8',
       'near-black': '#2D2D2D',
       steel: '#636466',
       mist: '#A7A9AC',
       fog: '#E5E5E5',
       accent: { DEFAULT: '#6C3461', hover: '#824175', subtle: 'rgba(108,52,97,.08)' },
       bronze: '#D4A574',
       copper: '#B87333',
       success: '#166534',
       warning: '#A16207',
       error: '#991B1B',
       info: '#1E40AF',
     }
     ```
   - Add `fontFamily` aliases (`heading`, `body`) pointing to `Vazirmatn`/`Inter`.
   - Define `boxShadow`, `borderRadius`, `animation`, and `keyframes` extensions that mirror Branding §6 timing scale and §7 component specs.

3. **CSS Custom Properties (`src/styles/global.css` or new `src/styles/tokens.css`)**
   - Declare all color, spacing, motion, and gradient tokens under `:root`.
   - Swap `body` background/text utilities to `Cream`/`Steel`.
   - Implement `.glass`, `.gradient-hero`, `.gradient-metallic`, `.btn-primary`, `.btn-ghost`, `.card`, and `.focus-ring` utility classes using the new custom properties instead of Tailwind’s old `primary-*` colors.
   - Ensure `prefers-reduced-motion` override matches Branding §6.5.

4. **Layout Wiring (`src/layouts/BaseLayout.astro`)**
   - Import the token stylesheet before any component-level CSS to guarantee cascade order.
   - Verify `<html>` inherits the correct font stack by default (`rtl` → `Vazirmatn`, `ltr` → `Inter`).
   - Add a `<meta name="theme-color" content="#F8F6F3" />` entry to reinforce the warm palette.

5. **Guardrails & Documentation**
   - Add an npm script: `"lint:palette": "rg --color=never -n \"primary-\" src || true"` and include it in CI or `npm run check`.
   - Create `docs/Brand-Tokens.md` summarizing token names, usage ratios (80/15/5), and sample utility classes; link from `README.md`.
   - Update `docs/DEVELOPMENT.md` with instructions on introducing new colors (must flow through branding review).

## Validation Checklist

- [ ] `bun run lint:palette` (or equivalent) passes.
- [ ] Manual QA verifies buttons, cards, and backgrounds respect accent/metallic usage quotas.
- [ ] Screen reader focus outlines use the new accent ring.
- [ ] Light/dark hero variants meet WCAG 2.1 AA contrast ratios listed in Branding §3.

## Roles & Owners

| Role | Responsibility |
| --- | --- |
| Frontend | Tailwind/theme refactor, CSS tokens, layout import order |
| Design QA | Visual verification against Figma/brand doc |
| DevOps | Wire palette lint into CI |

