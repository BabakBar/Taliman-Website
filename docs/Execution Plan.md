# Taliman Website — Execution Plan

> **Philosophy:** Ship with placeholders. Iterate. No blockers, only decisions.

---

## Phase 0: Tokens (Day 1-2)

### Deliverables
- [ ] `tailwind.config.mjs` — Brand colors
- [ ] `src/styles/tokens.css` — CSS custom properties
- [ ] `src/styles/global.css` — Migrated classes
- [ ] All 7 components — Updated classes
- [ ] `package.json` — Add `lint:palette` script

### Token Migration Map

```
OLD                    → NEW
─────────────────────────────────────
bg-white               → bg-cream
bg-industrial-50       → bg-cloud
bg-industrial-900      → bg-charcoal
text-industrial-*      → text-steel / text-near-black
bg-primary-100         → bg-accent-subtle
bg-primary-600         → bg-accent
text-primary-600       → text-accent
border-primary-*       → border-accent
focus:ring-primary-*   → focus:ring-accent
hover:bg-primary-*     → hover:bg-accent-hover
```

### Execution Order

```
1. tailwind.config.mjs     [1 hour]
2. tokens.css              [1 hour]  
3. global.css              [1 hour]
4. Components (7 files)    [2 hours]
5. QA both locales         [1 hour]
6. lint:palette script     [30 min]
```

### Done When
- `rg "primary-" src` returns 0 matches
- `rg "bg-white" src` returns 0 matches
- Both `/` and `/en` render correctly
- `bun check` passes

---

## Phase 1: Shell & Hero (Day 3-4)

### Deliverables
- [ ] `Header.astro` — Glass effect, brand colors
- [ ] `Footer.astro` — Charcoal, social links placeholder
- [ ] `Hero.astro` — Static image with gradient overlay
- [ ] `SkipLink.astro` — Accessibility
- [ ] `BaseLayout.astro` — Skip link integration

### Hero Strategy

**No video? No problem.**

```astro
<!-- Hero.astro — Static image now, video swap later -->
<section class="relative min-h-screen">
  <!-- Static background (swap for video when ready) -->
  <div class="absolute inset-0">
    <img 
      src="/images/hero/hero-2.jpg" 
      alt=""
      class="h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-hero-overlay" />
  </div>
  
  <!-- Content unchanged -->
  <div class="relative z-10">...</div>
</section>
```

When video arrives, swap `<img>` for:
```astro
<video autoplay loop muted playsinline poster="/images/hero/hero-poster.jpg">
  <source src="/video/hero.mp4" type="video/mp4" />
</video>
```

### Execution Order

```
1. SkipLink.astro          [30 min]
2. Header.astro rebuild    [1.5 hours]
3. Footer.astro rebuild    [1.5 hours]
4. Hero.astro (static)     [1 hour]
5. BaseLayout integration  [30 min]
6. QA both locales         [1 hour]
```

### Done When
- Skip link visible on tab focus
- Header has glass effect (`bg-cream/90 backdrop-blur`)
- Footer is charcoal with pearl text
- Hero has gradient overlay
- Keyboard navigation works

---

## Phase 2: Content Collections (Day 5-8)

### Deliverables
- [ ] `src/content/config.ts` — Schemas
- [ ] `src/content/processes/` — 3 entries (fa/en)
- [ ] `src/content/equipment/` — 2 entries (fa/en)
- [ ] `About.astro` — Content-driven
- [ ] `Processes.astro` — Content-driven
- [ ] `Equipment.astro` — Content-driven
- [ ] `Quality.astro` — Content-driven

### Minimal Schema (Start Here)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const processes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({ fa: z.string(), en: z.string() }),
    description: z.object({ fa: z.string(), en: z.string() }),
    order: z.number(),
    icon: z.string().optional(),
    image: z.string().optional(),
  }),
});

const equipment = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.object({ fa: z.string(), en: z.string() }),
    description: z.object({ fa: z.string(), en: z.string() }),
    image: z.string().optional(),
  }),
});

export const collections = { processes, equipment };
```

### Content Strategy

Use existing `i18n.ts` content as seed data. Move it to markdown files:

```markdown
<!-- src/content/processes/annealing.md -->
---
title:
  fa: "آنیل و کروی‌سازی"
  en: "Annealing & Spheroidizing"
description:
  fa: "فرآیند حرارتی تخصصی برای بهبود خواص مکانیکی سیم"
  en: "Specialized heat treatment to enhance wire mechanical properties"
order: 1
image: "/images/hero/hero-3.jpg"
---
```

### Execution Order

```
1. Create src/content/config.ts    [1 hour]
2. Create process entries (3)      [1 hour]
3. Create equipment entries (2)    [1 hour]
4. Refactor Processes.astro        [2 hours]
5. Refactor Equipment.astro        [2 hours]
6. Refactor About.astro            [2 hours]
7. Refactor Quality.astro          [1 hour]
8. QA both locales                 [1 hour]
```

### Done When
- No inline copy in components (except i18n.ts for UI strings)
- `bun check` validates content schemas
- Content edits don't require code changes

---

## Phase 3: Forms & Polish (Day 9-12)

### Deliverables
- [ ] `Contact.astro` — Styled with brand tokens
- [ ] Form validation (client-side)
- [ ] Success/error states
- [ ] Motion utilities (scroll animations)
- [ ] `prefers-reduced-motion` support
- [ ] Lighthouse optimization
- [ ] Final QA

### Form Strategy

**No backend? No problem.**

```astro
<!-- Contact form with mailto fallback -->
<form 
  action="mailto:info@taliman.com" 
  method="POST" 
  enctype="text/plain"
  class="space-y-6"
>
  <!-- Fields -->
</form>
```

Or use Formspree/Netlify Forms as zero-config backend.

### Motion System (Minimal)

```css
/* src/styles/motion.css */
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.animate-fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-up {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### Execution Order

```
1. Contact.astro styling       [2 hours]
2. Form validation             [1 hour]
3. Motion utilities            [2 hours]
4. Apply animations            [2 hours]
5. Lighthouse audit            [2 hours]
6. Fix performance issues      [2 hours]
7. Final QA both locales       [2 hours]
```

### Done When
- Lighthouse ≥ 90 all categories
- Form submits (even if just mailto)
- Animations respect reduced-motion
- No console errors
- Both locales work identically

---

## Tracking: Simple Checklist

### Progress Tracking

| Phase | Status | ETA |
|-------|--------|-----|
| Phase 0: Tokens | ✅ Complete | Day 2 |
| Phase 1: Shell | 🔲 Not started | Day 4 |
| Phase 2: Content | 🔲 Not started | Day 8 |
| Phase 3: Polish | 🔲 Not started | Day 12 |

Update status:
- 🔲 Not started
- 🟡 In progress
- ✅ Complete

---

## What We're NOT Doing

| Item | Why |
|------|-----|
| WhatsApp integration | Nice-to-have, add post-launch |
| Turquoise color debate | Ship with purple, A/B test later |
| Product catalog | Phase 2 of product roadmap |
| Server Islands | Overkill for static site |
| Dual hosting | Ops concern, not dev |
| PDF generation | Post-launch feature |

---

## Success Criteria

### MVP Definition

A working bilingual website that:
1. Uses correct brand tokens (no blue)
2. Has working navigation
3. Shows company info (About, Processes, Equipment, Quality)
4. Has a contact form that works
5. Scores ≥ 90 on Lighthouse
6. Works on mobile
7. Works in RTL and LTR

### NOT Required for MVP

- Video hero (static image is fine)
- WhatsApp button
- Product catalog
- Dynamic pricing
- PDF downloads
- Perfect animations

---

## Start Command

```bash
# Day 1, Hour 1
cd taliman-website
git checkout -b phase-0-tokens
# Open tailwind.config.mjs
# Start replacing colors
```

---

*No blockers. Only decisions. Ship it.*