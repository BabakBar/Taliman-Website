# Taliman Website
# تلیمان ساخته‌های فلزی کارا

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

A production-grade bilingual corporate website for Taliman Sakhtehaye Felezi Kara, specialists in CHQ (Cold Heading Quality) wire processing for the automotive fastener industry.

## 🚀 Features

- **🌍 Bilingual Support**: Persian (primary, RTL) and English (LTR)
- **⚡ Static-First**: Astro 5.x with zero JavaScript by default
- **📱 Mobile-First**: Responsive with comprehensive RTL support
- **♿ Accessible**: WCAG 2.1 AA compliance target
- **🔍 SEO Optimized**: Bilingual meta tags, structured data
- **🎨 Brand System**: Warm neutral palette with heritage accents

## 📋 Project Status

**Current Phase**: Tokenization (Phase 1) 🚧  
**Target**: 100/100 Lighthouse scores

See [CLAUDE.md](./CLAUDE.md) for development workflow.

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Astro 5.x (SSG) |
| **Language** | TypeScript 5+ |
| **Styling** | Tailwind CSS 3.4+ |
| **i18n** | Built-in Astro routing |
| **Typography** | Vazirmatn (Persian), Inter (English) |
| **Package Manager** | Bun |

## 🏗 Project Structure

```
taliman-website/
├── docs/                    # Documentation
│   ├── Branding/           # Brand guidelines
│   ├── PRD.md              # Product requirements
│   └── PHASE-*.md          # Implementation phases
├── public/                  # Static assets
│   └── images/             # Categorized images
├── src/
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Persian (default)
│   │   └── en/             # English routes
│   ├── components/         # Astro components
│   ├── layouts/            # Page layouts
│   ├── lib/                # Utilities (i18n, etc.)
│   └── styles/             # Global CSS
├── CLAUDE.md               # Claude Code configuration
├── astro.config.mjs        # Astro configuration
└── tailwind.config.mjs     # Tailwind configuration
```

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) 1.0.0 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd taliman-website

# Install dependencies
bun install

# Start development server
bun dev
```

Visit [http://localhost:4321](http://localhost:4321) (Persian) or [http://localhost:4321/en](http://localhost:4321/en) (English).

## 📜 Available Scripts

```bash
# Development
bun dev              # Start dev server
bun build            # Build for production
bun preview          # Preview production build

# Quality
bun check            # TypeScript + Astro validation
bun lint:fix         # Fix ESLint issues
bun format           # Format with Prettier
```

## 🌍 Internationalization

| Locale | Route | Direction |
|--------|-------|-----------|
| Persian (fa) | `/` | RTL |
| English (en) | `/en` | LTR |

Translations are managed in `src/lib/i18n.ts`.

## 🎨 Design System

### Colors
- **Neutral Foundation**: Cream, Pearl, Cloud (warm off-whites)
- **Accent**: Deep Purple (#6C3461) — used sparingly
- **Metallic**: Bronze, Copper (heritage highlights)

### Typography
- **Persian**: Vazirmatn (variable font)
- **English**: Inter (variable font)

See `docs/Branding/branding.md` for complete design system.

## 🚀 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 1.8s |
| Cumulative Layout Shift | < 0.05 |
| Lighthouse Score | ≥ 95 |

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [PRD.md](docs/PRD.md) | Product requirements |
| [branding.md](docs/Branding/branding.md) | Design system |
| [PHASE-01](docs/PHASE-01-TOKENIZATION.md) | Current phase |

## 📄 License

Private — All rights reserved by Taliman Sakhtehaye Felezi Kara.

---

**Built for Taliman Sakhtehaye Felezi Kara**  
*Leading CHQ wire processing specialists for the automotive fastener industry*