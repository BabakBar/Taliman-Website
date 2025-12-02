# Taliman Website — Astro 5.x

## Commands
```bash
bun dev              # Dev server with HMR
bun build            # Production build (runs astro check first)
bun preview          # Preview production build
bun check            # TypeScript + content validation
bun lint:fix         # Fix ESLint issues
bun format           # Prettier formatting
```

## Stack
- **Framework**: Astro 5.x (SSG, TypeScript-first)
- **Styling**: Tailwind CSS with RTL support
- **i18n**: Built-in (Persian default `/`, English `/en`)
- **Package Manager**: Bun

## Project Structure
```
src/
├── pages/           # File-based routing
│   ├── index.astro  # Persian (RTL, default)
│   └── en/          # English (LTR)
├── components/      # Astro components
├── layouts/         # BaseLayout.astro
├── lib/             # i18n.ts, utils
├── styles/          # global.css, tokens
└── content/         # Content Collections (Phase 3)
```

## Current Phase: 1 — Tokenization
Reference: `docs/PHASE-01-TOKENIZATION.md`

### Phase 1 Goals
- Replace legacy `primary-*` blue palette with brand tokens
- Implement CSS custom properties from branding guide
- Zero `#FFFFFF` usage — use Cream/Pearl/Cloud

## Rules — ALWAYS FOLLOW

### Colors
- ❌ NEVER use `primary-*` classes (legacy blue)
- ❌ NEVER use `#FFFFFF` or `bg-white`
- ✅ USE `bg-cream` (page), `bg-pearl` (cards), `bg-cloud` (alternating sections)
- ✅ USE `bg-charcoal` (footer), `text-steel` (body text)
- ✅ USE `text-accent` / `bg-accent` for CTAs (sparingly, ~15%)

### RTL/LTR
- ✅ USE logical properties: `padding-inline-start`, `margin-inline-end`
- ❌ NEVER use physical properties: `padding-left`, `margin-right`
- Persian (`/`) is RTL, English (`/en`) is LTR

### Copy
- ✅ ALL copy in `src/lib/i18n.ts` — NO inline strings in components
- ✅ Future: Content Collections for structured data

### Accessibility
- ✅ Visible focus states on all interactive elements
- ✅ 4.5:1 contrast ratio minimum
- ✅ Skip link (Phase 2)

## Shortcuts

### QTOKEN
Audit codebase for legacy tokens:
```bash
rg "primary-" src --no-heading
rg "#ffffff" src -i --no-heading
rg "bg-white" src --no-heading
```

### QRTL
Check RTL/LTR parity:
1. Open `http://localhost:4321/` (Persian/RTL)
2. Open `http://localhost:4321/en` (English/LTR)
3. Verify mirrored layouts

### QPERF
Run performance audit:
```bash
bun build && bun preview
# Then run Lighthouse in Chrome DevTools
```

## Reference Docs
| Document | Purpose |
|----------|---------|
| `docs/Branding/branding.md` | Colors, typography, motion, components |
| `docs/PRD.md` | Functional requirements, phases |
| `docs/PHASE-01-TOKENIZATION.md` | Current phase details |
| `docs/PHASE-02-GLOBAL-SHELL.md` | Next phase |

## Performance Targets
- FCP: < 1.0s
- LCP: < 1.8s
- CLS: < 0.05
- Lighthouse: ≥ 95 all categories

## Brand Tokens (Quick Reference)

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | #F8F6F3 | Page background |
| `pearl` | #FAFAF8 | Cards |
| `cloud` | #F2F0ED | Alternating sections |
| `charcoal` | #1A1A1A | Footer |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `near-black` | #2D2D2D | Headings |
| `steel` | #636466 | Body text |
| `mist` | #A7A9AC | Muted text |

### Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | #6C3461 | CTAs, links (Deep Purple) |
| `accent-hover` | #824175 | Hover states |
| `bronze` | #D4A574 | Metallic highlights |

## Before Committing
1. `bun check` — TypeScript validation
2. `bun format` — Prettier
3. `rg "primary-" src` — Zero matches
4. Test both `/` and `/en` routes