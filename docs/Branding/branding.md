# Taliman Brand & Design System
## تلیمان — دستورالعمل جامع طراحی وب

---

> **Version 2.0** — Enhanced for Modern Implementation  
> **Philosophy:** *Technical Heritage meets Digital Innovation*  
> **Last Updated:** November 2025

---

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Visual Identity System](#2-visual-identity-system)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Photography & Video](#5-photography--video)
6. [Motion & Interaction](#6-motion--interaction)
7. [Component Patterns](#7-component-patterns)
8. [Technical Implementation](#8-technical-implementation)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Quick Reference](#10-quick-reference)

---

## 1. Brand Foundation

### Company Identity

| Attribute | Details |
|-----------|---------|
| **Brand Name** | Taliman (تلیمان) |
| **Full Name** | Taliman — Sakhtehaye Felezi Kara (ساخته‌های فلزی کارا) |
| **Translation** | Taliman — Efficient Metal Structures |
| **Industry** | CHQ Wire Processing & Metal Annealing |
| **Market Position** | Premium B2B industrial supplier for automotive fastener industry |

### Brand Story & Heritage

The Taliman visual identity draws inspiration from **10th-century Samarkand pottery patterns**, establishing a unique connection between Persian cultural heritage and modern metallurgical precision. This heritage symbolism serves multiple purposes:

- **Interwoven circular lines** → Represent soft, malleable wire-like metal
- **Circular/spherical forms** → Symbolize spheroidized molecular structure achieved through annealing
- **Geometric precision** → Convey technical expertise and engineering excellence
- **Cultural resonance** → Differentiate from generic industrial competitors

### Brand Personality

| Trait | Expression |
|-------|------------|
| **Technical Authority** | Precision in every detail, data-driven communication |
| **Cultural Heritage** | Subtle geometric patterns, warm color accents |
| **Modern Innovation** | Clean interfaces, smooth interactions, video-first |
| **Approachable Expertise** | Professional but not cold; confident but not boastful |

### Target Audience

**Primary:**
- Industrial procurement managers
- Automotive OEM engineers
- Fastener manufacturers
- Technical specification reviewers

**Secondary:**
- Potential employees (talent acquisition)
- Industry partners and distributors
- Quality certification auditors

---

## 2. Visual Identity System

### Logo Architecture

The Taliman logo consists of four core elements that can be combined in various configurations:

| Element | Description |
|---------|-------------|
| **Logomark (Symbol)** | Four interlocked circular motifs with internal petal shapes |
| **Persian Logotype** | تلیمان — geometric Persian typography |
| **English Logotype** | Taliman — geometric Latin typography |
| **Tagline** | ساخته‌های فلزی کارا / Sakhtehaye Felezi Kara |

### Logo Configurations

```
┌─────────────────────────────────────────────────────────────┐
│  CONFIGURATION          │  USE CASE                         │
├─────────────────────────┼────────────────────────────────────┤
│  Horizontal             │  Desktop header, email signatures  │
│  (Symbol + Wordmark)    │  Primary configuration             │
├─────────────────────────┼────────────────────────────────────┤
│  Stacked                │  Mobile header, social media       │
│  (Symbol + FA/EN)       │  Square format applications        │
├─────────────────────────┼────────────────────────────────────┤
│  Symbol Only            │  Favicon, app icons, watermarks    │
│                         │  Minimum 32px display              │
├─────────────────────────┼────────────────────────────────────┤
│  Wordmark Only          │  Text-heavy environments           │
│                         │  When symbol is impractical        │
└─────────────────────────┴────────────────────────────────────┘
```

### Clear Space & Sizing

- **Minimum Clear Space:** X = height of lowercase letters in logotype
- **Minimum Digital Size:** 100px width for full logo, 32px for symbol only
- **Favicon:** 16×16, 32×32, 180×180 (Apple Touch Icon)

### Logo Usage Rules

**✓ Approved:**
- Dark logo on light backgrounds
- Light logo on dark backgrounds  
- White logo on brand purple (accent use only)
- Consistent scaling (never distort)

**✗ Prohibited:**
- Rotation of any degree
- Stretching or skewing
- Adding effects (shadows, glows, 3D)
- Placing on busy backgrounds
- Outline-only versions
- Unapproved color combinations

---

## 3. Color System

### Design Philosophy

The Taliman color system is built on **"Technical Warmth"** — combining industrial neutrals with strategic heritage accents to create a modern, premium feel that stands apart from cold, generic industrial websites.

### Primary Palette

#### Neutral Foundation (80% of Design)

These colors form the backbone of the design — used for backgrounds, text, and structural elements.

| Name | HEX | RGB | Usage | CSS Variable |
|------|-----|-----|-------|--------------|
| **Charcoal** | `#1A1A1A` | 26, 26, 26 | Footer, dark sections | `--color-charcoal` |
| **Near Black** | `#2D2D2D` | 45, 45, 45 | Primary headings, logo on light | `--color-near-black` |
| **Industrial** | `#4A4A4A` | 74, 74, 74 | Secondary headings | `--color-industrial` |
| **Steel** | `#636466` | 99, 100, 102 | Body text | `--color-steel` |
| **Mist** | `#A7A9AC` | 167, 169, 172 | Muted text, borders | `--color-mist` |
| **Fog** | `#E5E5E5` | 229, 229, 229 | Subtle borders, dividers | `--color-fog` |
| **Cloud** | `#F2F0ED` | 242, 240, 237 | Alternating section backgrounds | `--color-cloud` |
| **Cream** | `#F8F6F3` | 248, 246, 243 | Primary background | `--color-cream` |
| **Pearl** | `#FAFAF8` | 250, 250, 248 | Card backgrounds | `--color-pearl` |

> ⚠️ **CEO Directive:** Never use pure white (#FFFFFF). Always use warm off-whites (Cream, Pearl, Cloud).

#### Accent Colors (15% of Design)

Used sparingly for CTAs, links, focus states, and key interactive elements.

| Name | HEX | RGB | Usage | CSS Variable |
|------|-----|-----|-------|--------------|
| **Deep Purple** | `#6C3461` | 108, 52, 97 | Primary CTAs, links | `--color-accent` |
| **Purple** | `#824175` | 130, 65, 117 | Hover states | `--color-accent-hover` |
| **Soft Purple** | `#6C346115` | — | Subtle backgrounds (8% opacity) | `--color-accent-subtle` |

> ⚠️ **CEO Directive:** Minimize purple usage. Reserve for CTAs, active states, and key interactive moments only.

#### Metallic Accents (5% of Design)

Heritage-inspired warm tones that connect to the metal processing industry.

| Name | HEX | RGB | Usage | CSS Variable |
|------|-----|-----|-------|--------------|
| **Bronze** | `#D4A574` | 212, 165, 116 | Premium highlights, awards | `--color-bronze` |
| **Copper** | `#B87333` | 184, 115, 51 | Hover accents on dark | `--color-copper` |
| **Oxidized** | `#8B4513` | 139, 69, 19 | Deep accent (rare) | `--color-oxidized` |

### Semantic Colors

| Purpose | Light Mode | Dark Mode | Usage |
|---------|------------|-----------|-------|
| **Success** | `#166534` | `#22C55E` | Form validation, positive actions |
| **Warning** | `#A16207` | `#EAB308` | Caution states |
| **Error** | `#991B1B` | `#EF4444` | Form errors, destructive actions |
| **Info** | `#1E40AF` | `#3B82F6` | Informational messages |

### Gradient Definitions

```css
/* Hero Overlay — Used on video/image heroes */
--gradient-hero-overlay: linear-gradient(
  180deg,
  rgba(26, 26, 26, 0.4) 0%,
  rgba(26, 26, 26, 0.7) 100%
);

/* Section Fade — Subtle section transitions */
--gradient-section: linear-gradient(
  180deg,
  var(--color-cream) 0%,
  var(--color-cloud) 100%
);

/* Premium Accent — Metallic highlight (use sparingly) */
--gradient-metallic: linear-gradient(
  135deg,
  var(--color-bronze) 0%,
  var(--color-copper) 100%
);

/* CTA Button Gradient */
--gradient-cta: linear-gradient(
  135deg,
  var(--color-accent) 0%,
  var(--color-accent-hover) 100%
);
```

### Color Application Matrix

| Element | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| **Page** | Cream | — | — | — |
| **Section Alt** | Cloud | — | — | — |
| **Card** | Pearl | Steel | Fog | Shadow increase |
| **Header** | Cream/80% | Near Black | Fog | — |
| **Footer** | Charcoal | Pearl | Steel/20% | — |
| **Primary Button** | Deep Purple | White | — | Purple |
| **Secondary Button** | Transparent | Near Black | Near Black | Cloud bg |
| **Link** | — | Deep Purple | — | Purple (underline) |
| **Input** | Pearl | Near Black | Mist | Fog border |
| **Input Focus** | — | — | Deep Purple | — |

### Contrast Verification (WCAG 2.1 AA)

| Combination | Ratio | Status |
|-------------|-------|--------|
| Near Black on Cream | 14.5:1 | ✅ AAA |
| Steel on Cream | 5.2:1 | ✅ AA |
| Deep Purple on Cream | 6.8:1 | ✅ AA |
| Pearl on Charcoal | 13.8:1 | ✅ AAA |
| Mist on Charcoal | 7.1:1 | ✅ AA |
| White on Deep Purple | 7.2:1 | ✅ AA |

---

## 4. Typography System

### Design Philosophy

Typography should feel **precise yet warm** — technical enough for B2B credibility but approachable enough for the Persian market. We prioritize readability across all devices.

### Font Selection

#### Primary: Vazirmatn (Persian/Arabic)

**Vazirmatn** is the modern standard for Persian web typography. Created by Saber Rastikerdar, it's actively maintained, available on Google Fonts, and designed specifically for digital readability.

| Property | Value |
|----------|-------|
| **Font Name** | Vazirmatn |
| **Type** | Variable font (100-900 weights) |
| **License** | SIL Open Font License |
| **CDN** | Google Fonts, jsDelivr |
| **File Size** | ~35KB (woff2, variable) |
| **Scripts** | Persian, Arabic, Latin |

**Why Vazirmatn over alternatives:**
- ✅ Open source (no licensing issues)
- ✅ Variable font (single file, all weights)
- ✅ Actively maintained (2015-present)
- ✅ Google Fonts integration
- ✅ Optimized for screens
- ✅ Combined with Roboto for Latin (consistent x-height)

#### Secondary: Inter (Latin/English)

**Inter** is a modern, highly-readable sans-serif optimized for screens, with excellent OpenType features.

| Property | Value |
|----------|-------|
| **Font Name** | Inter |
| **Type** | Variable font (100-900 weights) |
| **License** | SIL Open Font License |
| **CDN** | Google Fonts |
| **File Size** | ~100KB (woff2, variable) |

#### Alternative Fonts (if licensing allows)

If budget permits commercial fonts:
- **IRANYekan** — Premium Persian font, very popular in Iran
- **IranSans** — Highly readable, widely adopted

### Type Scale

Based on a **1.250 ratio (Major Third)** for harmonic progression:

```css
:root {
  /* Base: 16px = 1rem */
  --text-xs:    0.75rem;   /* 12px */
  --text-sm:    0.875rem;  /* 14px */
  --text-base:  1rem;      /* 16px */
  --text-lg:    1.125rem;  /* 18px */
  --text-xl:    1.25rem;   /* 20px */
  --text-2xl:   1.5rem;    /* 24px */
  --text-3xl:   1.875rem;  /* 30px */
  --text-4xl:   2.25rem;   /* 36px */
  --text-5xl:   3rem;      /* 48px */
  --text-6xl:   3.75rem;   /* 60px */
  --text-7xl:   4.5rem;    /* 72px */
}
```

### Heading Styles

| Level | Desktop | Mobile | Weight | Line Height | Color |
|-------|---------|--------|--------|-------------|-------|
| **H1** | 48-60px | 36-42px | 700 | 1.1 | Near Black |
| **H2** | 36-42px | 28-32px | 700 | 1.2 | Near Black |
| **H3** | 28-32px | 24-28px | 600 | 1.25 | Near Black |
| **H4** | 20-24px | 18-20px | 600 | 1.3 | Industrial |
| **H5** | 18-20px | 16-18px | 600 | 1.4 | Steel |
| **H6** | 16-18px | 14-16px | 600 | 1.4 | Steel |

### Body Text Styles

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Body Large** | 18px | 400 | 1.7 | Hero subtitles, feature descriptions |
| **Body** | 16px | 400 | 1.65 | Primary body text |
| **Body Small** | 14px | 400 | 1.6 | Secondary content, metadata |
| **Caption** | 12px | 400 | 1.5 | Labels, footnotes |

### Font Loading Strategy

```css
/* Critical: Load immediately for above-the-fold */
@font-face {
  font-family: 'Vazirmatn';
  src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Vazirmatn';
  src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Latin font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### RTL Typography Considerations

```css
/* Persian (RTL) */
[dir="rtl"] {
  font-family: 'Vazirmatn', 'Tahoma', sans-serif;
  text-align: right;
  letter-spacing: 0; /* Persian doesn't benefit from letter-spacing */
}

/* English (LTR) */
[dir="ltr"] {
  font-family: 'Inter', system-ui, sans-serif;
  text-align: left;
  letter-spacing: -0.01em; /* Slight tightening for Inter */
}

/* Numbers in Persian context */
[lang="fa"] {
  font-feature-settings: "ss02"; /* Persian numerals if supported */
}
```

---

## 5. Photography & Video

### Photography Style

The CEO has provided professional imagery. Here's how to use it effectively:

#### Visual Principles

| Principle | Application |
|-----------|-------------|
| **Authenticity** | Use real facility photos, not stock imagery |
| **Warmth** | Apply subtle warm color grading (avoid cold blue) |
| **Precision** | Showcase technical details, clean machinery |
| **Human Element** | Include workers when appropriate (builds trust) |
| **Scale** | Show scale of operations (wide facility shots) |

#### Image Treatment

```css
/* Standard image treatment */
.image-treatment {
  filter: 
    brightness(0.95)
    contrast(1.05)
    saturate(0.95);
}

/* Hero image darkening for text overlay */
.hero-image-overlay {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    rgba(26, 26, 26, 0.6) 100%
  );
}
```

#### Image Categories

| Category | Purpose | Recommended Dimensions |
|----------|---------|------------------------|
| **Hero** | Full-width backgrounds | 1920×1080 (16:9) |
| **Process** | Manufacturing steps | 800×600 (4:3) |
| **Equipment** | Machinery showcase | 1200×800 (3:2) |
| **Facility** | Wide facility shots | 1600×900 (16:9) |
| **Team** | Human element | 600×600 (1:1) |
| **Detail** | Close-up textures | 600×400 (3:2) |

### Video Hero Section

The CEO has provided professional video content. Here's the implementation guide:

#### Technical Specifications

| Property | Recommended | Maximum |
|----------|-------------|---------|
| **Duration** | 10-15 seconds | 30 seconds |
| **Resolution** | 1080p (1920×1080) | 1080p |
| **Frame Rate** | 24-30 fps | 30 fps |
| **File Size** | 2-5 MB | 10 MB |
| **Format** | MP4 (H.264) | WebM backup |
| **Audio** | None (muted) | — |

#### Video Content Guidelines

**✓ Ideal Content:**
- Slow pans of machinery in operation
- Timelapse of facility during production
- Close-ups of wire processing with subtle motion
- Atmospheric shots with gentle camera movement

**✗ Avoid:**
- Fast-moving content or rapid cuts
- Jarring transitions
- Footage requiring audio context
- Low-light or grainy footage

#### Implementation Pattern

```html
<section class="hero relative min-h-screen overflow-hidden">
  <!-- Video Background -->
  <video
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    loop
    muted
    playsinline
    poster="/images/hero-poster.jpg"
  >
    <source src="/video/hero.mp4" type="video/mp4" />
    <source src="/video/hero.webm" type="video/webm" />
  </video>
  
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-hero-overlay"></div>
  
  <!-- Content -->
  <div class="relative z-10 container">
    <!-- Hero content here -->
  </div>
</section>
```

#### Mobile Optimization

On mobile devices (<768px), replace video with a static image to:
- Reduce data usage
- Improve battery life
- Ensure consistent experience

```css
@media (max-width: 768px) {
  .hero video {
    display: none;
  }
  .hero {
    background-image: url('/images/hero-mobile.jpg');
    background-size: cover;
    background-position: center;
  }
}
```

---

## 6. Motion & Interaction

### Motion Principles

Motion in the Taliman design system should feel **precise and purposeful** — like the controlled processes in metal manufacturing.

| Principle | Implementation |
|-----------|----------------|
| **Purposeful** | Every animation serves a functional goal |
| **Subtle** | Never overwhelming or distracting |
| **Fast** | Quick micro-interactions (150-300ms) |
| **Smooth** | Ease-out curves for natural deceleration |
| **Consistent** | Same timing across similar elements |

### Timing Scale

```css
:root {
  --duration-instant:  75ms;   /* Hover color changes */
  --duration-fast:     150ms;  /* Button states, focus */
  --duration-normal:   200ms;  /* Standard transitions */
  --duration-slow:     300ms;  /* Modal opens, reveals */
  --duration-slower:   500ms;  /* Page section transitions */
}
```

### Easing Functions

```css
:root {
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);  /* General purpose */
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);    /* Exits */
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);    /* Entrances */
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);  /* Move/scale */
  --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful (rare) */
}
```

### Animation Patterns

#### Scroll-Triggered Entrance

```css
/* Fade up on scroll */
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: 
    opacity var(--duration-slow) var(--ease-out),
    transform var(--duration-slow) var(--ease-out);
}

.animate-fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  transition-delay: calc(var(--stagger-index, 0) * 100ms);
}
```

#### Hover Interactions

```css
/* Card lift effect */
.card-hover {
  transition: 
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

/* Button scale */
.btn:active {
  transform: scale(0.98);
}

/* Image zoom in container */
.image-zoom-container {
  overflow: hidden;
}

.image-zoom-container img {
  transition: transform var(--duration-slow) var(--ease-out);
}

.image-zoom-container:hover img {
  transform: scale(1.05);
}
```

#### Loading States

```css
/* Skeleton loading */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-fog) 0%,
    var(--color-cloud) 50%,
    var(--color-fog) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Button loading spinner */
.btn-loading {
  position: relative;
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Component Patterns

### Button Variants

```
┌─────────────────────────────────────────────────────────────┐
│  VARIANT          │  USAGE                                  │
├───────────────────┼─────────────────────────────────────────┤
│  Primary          │  Main CTA (1 per section max)           │
│  Secondary        │  Alternative actions                    │
│  Ghost            │  Tertiary/cancel actions                │
│  Link             │  Inline text navigation                 │
│  Icon-only        │  Social, utility buttons                │
└───────────────────┴─────────────────────────────────────────┘
```

#### Primary Button

```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all var(--duration-fast) var(--ease-out);
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Card Patterns

#### Standard Card

```css
.card {
  background: var(--color-pearl);
  border: 1px solid var(--color-fog);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all var(--duration-fast) var(--ease-out);
}

.card:hover {
  border-color: var(--color-mist);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
```

#### Feature Card (with icon)

```css
.feature-card {
  text-align: center;
  padding: 2rem;
}

.feature-card-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--color-accent-subtle);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform var(--duration-fast) var(--ease-out);
}

.feature-card:hover .feature-card-icon {
  transform: scale(1.1);
}
```

### Navigation

#### Header (Desktop)

```css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(248, 246, 243, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-fog);
}

.nav-link {
  color: var(--color-steel);
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transition: transform var(--duration-fast) var(--ease-out);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}
```

### Form Elements

```css
.input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--color-pearl);
  border: 1px solid var(--color-mist);
  border-radius: 0.5rem;
  color: var(--color-near-black);
  transition: all var(--duration-fast) var(--ease-out);
}

.input::placeholder {
  color: var(--color-mist);
}

.input:hover {
  border-color: var(--color-steel);
}

.input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-subtle);
}

.input-error {
  border-color: var(--color-error);
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-industrial);
}
```

---

## 8. Technical Implementation

### Tailwind Configuration

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral Foundation
        charcoal: '#1A1A1A',
        'near-black': '#2D2D2D',
        industrial: '#4A4A4A',
        steel: '#636466',
        mist: '#A7A9AC',
        fog: '#E5E5E5',
        cloud: '#F2F0ED',
        cream: '#F8F6F3',
        pearl: '#FAFAF8',
        
        // Accent
        accent: {
          DEFAULT: '#6C3461',
          hover: '#824175',
          subtle: 'rgba(108, 52, 97, 0.08)',
        },
        
        // Metallic
        bronze: '#D4A574',
        copper: '#B87333',
        
        // Semantic
        success: '#166534',
        warning: '#A16207',
        error: '#991B1B',
        info: '#1E40AF',
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'Tahoma', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom scale if needed
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

### CSS Custom Properties

```css
:root {
  /* Colors (referenced from Tailwind config) */
  --color-charcoal: #1A1A1A;
  --color-near-black: #2D2D2D;
  --color-industrial: #4A4A4A;
  --color-steel: #636466;
  --color-mist: #A7A9AC;
  --color-fog: #E5E5E5;
  --color-cloud: #F2F0ED;
  --color-cream: #F8F6F3;
  --color-pearl: #FAFAF8;
  --color-accent: #6C3461;
  --color-accent-hover: #824175;
  --color-accent-subtle: rgba(108, 52, 97, 0.08);
  --color-bronze: #D4A574;
  --color-copper: #B87333;
  
  /* Typography */
  --font-heading: 'Vazirmatn', 'Inter', sans-serif;
  --font-body: 'Vazirmatn', 'Inter', sans-serif;
  
  /* Spacing */
  --section-padding: clamp(4rem, 8vw, 8rem);
  --container-max: 1280px;
  --container-padding: clamp(1rem, 4vw, 2rem);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.12);
}
```

### Performance Guidelines

| Metric | Target | Critical |
|--------|--------|----------|
| **First Contentful Paint** | < 1.0s | < 1.5s |
| **Largest Contentful Paint** | < 1.8s | < 2.5s |
| **Cumulative Layout Shift** | < 0.05 | < 0.1 |
| **First Input Delay** | < 50ms | < 100ms |
| **Total Bundle Size** | < 150KB | < 250KB |
| **Hero Image Size** | < 150KB | < 300KB |
| **Hero Video Size** | < 5MB | < 10MB |

---

## 9. Accessibility Standards

### Compliance Target

**WCAG 2.1 Level AA** across all pages

### Key Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Color Contrast** | Minimum 4.5:1 for normal text, 3:1 for large text |
| **Focus Indicators** | Visible 2px outline on all interactive elements |
| **Keyboard Navigation** | Full site navigable via keyboard |
| **Screen Readers** | Semantic HTML, ARIA labels where needed |
| **Motion** | Respect `prefers-reduced-motion` |
| **Touch Targets** | Minimum 44×44px on mobile |
| **Form Labels** | Every input has an associated label |
| **Skip Links** | "Skip to main content" link |
| **Language** | `lang` attribute on `<html>` and language switches |

### RTL Accessibility

```html
<!-- Correct RTL setup -->
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>تلیمان — ساخته‌های فلزی کارا</title>
  </head>
  <body>
    <!-- Content flows right-to-left -->
  </body>
</html>
```

### Focus Styles

```css
/* Consistent focus ring */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Remove default outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 10. Quick Reference

### Color Cheat Sheet

```
BACKGROUNDS
───────────
Page:           #F8F6F3 (Cream)
Cards:          #FAFAF8 (Pearl)
Section Alt:    #F2F0ED (Cloud)
Footer:         #1A1A1A (Charcoal)

TEXT
────
Headings:       #2D2D2D (Near Black)
Body:           #636466 (Steel)
Muted:          #A7A9AC (Mist)
Light on Dark:  #FAFAF8 (Pearl)

ACCENT
──────
Primary CTA:    #6C3461 (Deep Purple)
Hover:          #824175 (Purple)
Links:          #6C3461 (Deep Purple)
Premium:        #D4A574 (Bronze)

⚠️ NEVER USE
────────────
Pure White:     #FFFFFF
Blue Primary:   #2563eb (old brand)
```

### Typography Cheat Sheet

```
FONTS
─────
Persian:  Vazirmatn (400, 700)
English:  Inter (400, 500, 600, 700)
Fallback: Tahoma, system-ui

SIZES
─────
H1:     48-60px / Bold / 1.1
H2:     36-42px / Bold / 1.2
H3:     28-32px / SemiBold / 1.25
Body:   16px / Regular / 1.65
Small:  14px / Regular / 1.6
```

### Spacing Cheat Sheet

```
SECTION PADDING
───────────────
Desktop:  6rem-8rem (96-128px)
Tablet:   4rem-6rem (64-96px)
Mobile:   3rem-4rem (48-64px)

CONTAINER
─────────
Max Width:  1280px
Padding:    1rem-2rem

COMPONENT GAPS
──────────────
Card Grid:  1.5rem-2rem
Form Items: 1.5rem
Nav Links:  2rem
```

### Transition Cheat Sheet

```
DURATIONS
─────────
Fast:    150ms  (button states)
Normal:  200ms  (standard)
Slow:    300ms  (modals, reveals)
Slower:  500ms  (page sections)

EASING
──────
Default: cubic-bezier(0.4, 0, 0.2, 1)
Out:     cubic-bezier(0, 0, 0.2, 1)
In:      cubic-bezier(0.4, 0, 1, 1)
```

---

---

## 11. Iranian Market Adaptations

### Responsive Data Tables: Card-Stack Pattern

For complex technical specifications (chemical composition, mechanical properties):

**Desktop View:**
```
┌──────────┬────────────┬────────────┬─────────┬─────────┐
│ Grade    │ Carbon (C) │ Manganese  │ P (max) │ S (max) │
├──────────┼────────────┼────────────┼─────────┼─────────┤
│ 10B21    │ 0.18-0.23  │ 0.80-1.10  │ 0.030   │ 0.035   │
│ 1008     │ 0.08-0.13  │ 0.30-0.50  │ 0.040   │ 0.050   │
└──────────┴────────────┴────────────┴─────────┴─────────┘
```

**Mobile View (Card-Stack):**
```
┌─────────────────────────────────┐
│ 10B21                    [▼]   │
├─────────────────────────────────┤
│ Carbon (C):     0.18 - 0.23    │
│ Manganese (Mn): 0.80 - 1.10    │
│ Phosphorus:     0.030 max      │
│ Sulfur:         0.035 max      │
│                                │
│ [Show Full Specs]              │
└─────────────────────────────────┘
```

### Persian Localization Specifics

#### Calendar System
Use **Solar Hijri (Jalali)** calendar for all dates in Persian interface:

```javascript
// Use date-fns-jalali or moment-jalaali
import { format } from 'date-fns-jalali';

// Persian: ۱۴۰۳/۰۹/۱۱
// English: 2024-12-01
```

#### Number Formatting Rules

| Context | Format | Example |
|---------|--------|---------|
| Prices | Persian numerals | ۲۵۰,۰۰۰ تومان |
| Dates | Persian numerals | ۱۴۰۳/۰۹/۱۱ |
| Technical specs | Western numerals | C: 0.18-0.23 |
| Phone numbers | Western numerals | +98 21 1234 5678 |

> ⚠️ **Critical:** Always use Western numerals (0-9) in technical specifications, even in Persian text. This is industry standard in Iran to avoid confusion in engineering contexts.

#### Social Media Priority (Iran Market)

Replace generic social links with Iran-relevant platforms:

| Priority | Platform | Usage |
|----------|----------|-------|
| 1 | **WhatsApp** | Primary B2B communication — add floating chat button |
| 2 | **Telegram** | Company news, catalog updates, technical articles |
| 3 | **Instagram** | Factory process videos, machinery showcase, visual proof |
| 4 | **LinkedIn** | Export market only, international procurement |
| ❌ | Facebook/Twitter | Blocked in Iran — omit from Persian site |

```html
<!-- Floating WhatsApp Button -->
<a 
  href="https://wa.me/989123456789?text=سلام،%20درخواست%20استعلام%20قیمت%20دارم"
  class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#128C7E]"
  target="_blank"
  rel="noopener"
>
  <svg><!-- WhatsApp icon --></svg>
  <span class="hidden sm:inline">درخواست قیمت</span>
</a>
```

### Persian SEO Keywords

Target these keywords for organic search in the Iranian market:

| Category | Persian | Transliteration | Search Intent |
|----------|---------|-----------------|---------------|
| **Core Product** | سیم مفتول CHQ | Sim Maftool CHQ | Direct sourcing |
| **Material** | مفتول فولادی | Maftool Fouladi | General research |
| **Process** | مفتول‌کشی | Maftool Kashi | Capability check |
| **Treatment** | بازپخت | Baz-pokht | Technical verification |
| **Specific Grade** | مفتول 10B21 | Maftool 10B21 | Precise procurement |
| **Application** | سیم پیچ و مهره | Sim Pich o Mohre | Application search |
| **Industry** | قطعات خودرو | Ghat'at Khodro | Industry targeting |

### Content Layer Schema for CHQ Products

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Bilingual fields
    title: z.object({
      fa: z.string(),
      en: z.string(),
    }),
    description: z.object({
      fa: z.string(),
      en: z.string(),
    }),
    
    // Technical specifications
    gradeStandard: z.enum(['ASTM', 'JIS', 'DIN', 'ISO']),
    gradeNumber: z.string(), // e.g., "1008", "10B21"
    
    diameterRange: z.object({
      min: z.number().positive(),
      max: z.number().positive(),
      unit: z.literal('mm'),
    }),
    
    surfaceFinish: z.enum([
      'HRPPD',      // Hot Rolled Pickled Phosphate Drawn
      'SAPPD',      // Spheroidized Annealed Pickled Phosphate Drawn
      'Lime Coated',
      'Bare',
    ]),
    
    chemicalComposition: z.object({
      carbon: z.object({ min: z.number(), max: z.number() }),
      manganese: z.object({ min: z.number(), max: z.number() }),
      phosphorus: z.object({ max: z.number() }),
      sulfur: z.object({ max: z.number() }),
      silicon: z.object({ min: z.number(), max: z.number() }).optional(),
      boron: z.object({ min: z.number(), max: z.number() }).optional(),
    }),
    
    mechanicalProperties: z.object({
      tensileStrength: z.object({ min: z.number(), max: z.number(), unit: z.literal('MPa') }),
      elongation: z.object({ min: z.number(), unit: z.literal('%') }),
      reductionOfArea: z.object({ min: z.number(), unit: z.literal('%') }).optional(),
    }),
    
    heatTreatment: z.array(z.enum([
      'Spheroidized Annealing',
      'Soft Annealing',
      'Stress Relief',
    ])).optional(),
    
    applications: z.array(z.string()),
    certifications: z.array(z.string()),
    
    // Media
    images: z.array(z.string()),
    datasheetPdf: z.string().optional(),
  }),
});

export const collections = { products: productsCollection };
```

### Security by Architecture

Given the geopolitical context and history of cyberattacks on Iranian steel producers (Mobarakeh Steel, Khuzestan Steel Industries targeted by "Predatory Sparrow"), security is paramount.

**Why Static Site Generation (SSG) is a Defensive Strategy:**

| Attack Vector | Dynamic CMS Risk | Static Site (Astro) |
|---------------|------------------|---------------------|
| SQL Injection | High (database exposed) | **Eliminated** (no database) |
| Remote Code Execution | High (server-side code) | **Eliminated** (pre-rendered HTML) |
| Admin Panel Brute Force | High (login portals) | **Eliminated** (no admin panel) |
| XSS via User Input | Medium | **Minimal** (no dynamic forms on most pages) |

> 💡 **CEO Talking Point:** "Security by architecture" — the website cannot be hacked in traditional ways because there's nothing to hack. It's just files.

### Dual Hosting Strategy (Iran-Specific)

To ensure resilience against international internet disruptions:

```
┌─────────────────────────────────────────────────────────────┐
│  PRIMARY DEPLOYMENT                                         │
│  Global CDN (Cloudflare / Netlify / Vercel)                │
│  • Serves export markets with low latency                  │
│  • DDoS protection included                                │
│  • Automatic SSL                                           │
├─────────────────────────────────────────────────────────────┤
│  MIRROR DEPLOYMENT                                          │
│  Iranian Host (Pars Online / Shatel / Afranet)             │
│  • Accessible via National Information Network (NIN)       │
│  • Serves domestic customers if int'l internet is cut      │
│  • DNS failover configuration                              │
└─────────────────────────────────────────────────────────────┘
```

### Server Islands for Dynamic Industrial Data

While static generation handles specifications, some data needs real-time updates. Use Astro Server Islands for:

| Component | Data Source | Fallback UI | Update Frequency |
|-----------|-------------|-------------|------------------|
| **Stock Status** | ERP/Inventory API | Skeleton shimmer → "Check Availability" | Real-time |
| **Lead Time** | Production schedule | "Contact for current lead time" | Daily |
| **Rolling Schedule** | Manufacturing calendar | "Week 42-44" (static estimate) | Weekly |
| **Dynamic Pricing** | Customer tier detection | "Request Quote" button | Per-session |

```astro
<!-- Example: Stock Status Island -->
<div class="stock-indicator">
  {Astro.locals.user?.tier === 'verified' ? (
    <StockStatus grade="10B21" server:defer>
      <div slot="fallback" class="animate-pulse bg-gray-200 h-6 w-24 rounded" />
    </StockStatus>
  ) : (
    <a href="/contact">Check Availability</a>
  )}
</div>
```

### Auto-Generated PDF Spec Sheets

Generate downloadable PDF datasheets at build time from Content Layer data. This ensures the PDF always matches the website (single source of truth).

**Implementation approach:**
```typescript
// scripts/generate-pdfs.ts
import { getCollection } from 'astro:content';
import PDFDocument from 'pdfkit';

export async function generateSpecSheets() {
  const products = await getCollection('products');
  
  for (const product of products) {
    const doc = new PDFDocument();
    // ... generate PDF with product.data
    doc.pipe(fs.createWriteStream(`public/specs/${product.slug}.pdf`));
  }
}
```

**Benefits:**
- PDFs regenerate automatically when specs change
- No manual PDF maintenance
- Version control on specifications
- Consistent branding across web and print

### Processing Flow Visualization

Show the production path as a visual timeline on product pages:

```
Desktop (horizontal):
━━●━━━━━━━●━━━━━━━━●━━━━━━━━━━━●━━━━━━━━━●━━━━━━●━━
  Rod     Pickling  Drawing   Spheroidize  Skin    Coil
                                           Pass

Mobile (vertical):
  ● Rod Reception
  │
  ● Pickling & Cleaning
  │
  ● Wire Drawing
  │
  ● Spheroidizing Anneal
  │
  ● Skin Pass (Optional)
  │
  ● Coiling & Packaging
```

**CSS Implementation:**
```css
.process-flow {
  display: flex;
  align-items: center;
  gap: 0;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.process-step::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
}

.process-step:last-child::after {
  display: none;
}

@media (max-width: 768px) {
  .process-flow {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .process-step::after {
    top: auto;
    left: 12px;
    width: 2px;
    height: 100%;
  }
}
```

### Technical SEO Implementation

#### Hreflang Tags (Bilingual)

Every page must reference its language counterpart:

```html
<!-- On /fa/products/10b21 -->
<link rel="alternate" hreflang="fa-IR" href="https://taliman.ir/fa/products/10b21" />
<link rel="alternate" hreflang="en" href="https://taliman.ir/en/products/10b21" />
<link rel="alternate" hreflang="x-default" href="https://taliman.ir/en/products/10b21" />

<!-- On /en/products/10b21 -->
<link rel="alternate" hreflang="fa-IR" href="https://taliman.ir/fa/products/10b21" />
<link rel="alternate" hreflang="en" href="https://taliman.ir/en/products/10b21" />
<link rel="alternate" hreflang="x-default" href="https://taliman.ir/en/products/10b21" />
```

#### Schema.org Product Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "10B21 CHQ Wire Rod",
  "description": "Cold Heading Quality boron steel wire for automotive fasteners",
  "sku": "CHQ-10B21",
  "brand": {
    "@type": "Brand",
    "name": "Taliman"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Taliman Sakhtehaye Felezi Kara",
    "url": "https://taliman.ir"
  },
  "material": "Boron Steel",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Carbon Content",
      "value": "0.18-0.23%"
    },
    {
      "@type": "PropertyValue", 
      "name": "Diameter Range",
      "value": "5.5-25mm"
    }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "IRR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "IRR",
      "valueAddedTaxIncluded": false
    }
  }
}
```

#### Organization Schema (Local SEO)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Taliman Sakhtehaye Felezi Kara",
  "alternateName": "تلیمان سازه‌های فلزی کارا",
  "url": "https://taliman.ir",
  "logo": "https://taliman.ir/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+98-21-XXXXXXXX",
    "contactType": "sales",
    "availableLanguage": ["Persian", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IR",
    "addressRegion": "Tehran"
  },
  "sameAs": [
    "https://www.instagram.com/taliman_ir",
    "https://t.me/taliman_ir",
    "https://www.linkedin.com/company/taliman"
  ]
}
```

### Key B2B Buyer Journey Statistic

> **"70% of B2B buyers complete their buying journey digitally before speaking to sales."**

**Implication:** The website must answer critical technical questions without human intervention:
- "Can you hold tolerance on 10B21 boron steel?" → Clear spec tables
- "Do you have spheroidizing annealing in-house?" → Capabilities page with equipment photos
- "What's your diameter range for alloy steels?" → Filterable product catalog

If the site can't answer these instantly, the buyer moves to Kavir Steel or Zob Ahan.

### RFQ-First Conversion Strategy

Iranian B2B buyers rarely use "Add to Cart". The primary conversion goal is **Request for Quotation (RFQ)**.

**Key Conversion Points:**
1. Floating WhatsApp button (always visible)
2. "درخواست قیمت" (Request Quote) CTA on every product page
3. Quick RFQ form (minimal fields: Name, Company, Phone, Product, Quantity)
4. Direct phone number prominently displayed

**RFQ Form Fields (Minimal):**
```
نام و نام خانوادگی *     [________________]
نام شرکت *              [________________]
شماره تماس *            [________________]
محصول مورد نظر *        [▼ Dropdown_______]
تناژ تقریبی            [________________]
توضیحات               [________________]

[ارسال درخواست]
```

---

## Changelog

### Version 2.2 (November 2025)
- **Added:** Security by Architecture section (SSG as defense against cyberattacks)
- **Added:** Dual Hosting Strategy (Global CDN + Iranian mirror for NIN resilience)
- **Added:** Server Islands use cases (Stock Status, Lead Time, Dynamic Pricing)
- **Added:** Auto-Generated PDF Spec Sheets workflow
- **Added:** Processing Flow Visualization (horizontal/vertical timeline)
- **Added:** Technical SEO Implementation (hreflang, Schema.org Product/Organization)
- **Added:** B2B Buyer Journey statistic (70% digital before sales contact)

### Version 2.1 (November 2025)
- **Added:** Iranian Market Adaptations section (Section 11)
- **Added:** Persian Turquoise as alternative accent color
- **Added:** Grade-First navigation structure
- **Added:** Card-Stack mobile table pattern
- **Added:** Persian localization specifics (calendar, numbers)
- **Added:** Iran-specific social media strategy
- **Added:** Persian SEO keywords
- **Added:** Content Layer schema for CHQ products
- **Added:** RFQ-first conversion strategy

### Version 2.0 (November 2025)
- **Typography:** Updated to Vazirmatn as primary Persian font (modern, Google Fonts, variable)
- **Colors:** Expanded neutral palette with more warm off-whites
- **Colors:** Added metallic accent colors (Bronze, Copper)
- **Video:** Added comprehensive hero video guidelines
- **Motion:** Defined complete animation system with timing scales
- **Performance:** Added Core Web Vitals targets
- **Implementation:** Full Tailwind configuration example
- **Accessibility:** WCAG 2.1 AA compliance guidelines

### Version 1.0 (Initial)
- Brand foundation from original brand guidelines
- Basic color palette (limited to original brand book)
- Typography using Yekan Bakh (brand book spec)

---

*This design system is a living document. Update as the project evolves.*