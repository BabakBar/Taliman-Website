# Taliman Website
# تالیمان ساخته‌های فلزی کارا

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

A modern, bilingual corporate website for Taliman Sakhtehaye Felezi Kara, specialists in CHQ (Cold Heading Quality) wire rod processing for the automotive fastener industry.

## 🚀 Features

- **🌍 Bilingual Support**: Farsi (primary) and English with full RTL support
- **📱 Mobile-First Design**: Responsive layout optimized for all devices  
- **⚡ Performance Optimized**: Static generation with Core Web Vitals in green zone
- **♿ Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **🔍 SEO Ready**: Optimized meta tags, structured data, and multilingual SEO
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **📧 Contact Form**: Validated form with React Hook Form + Zod
- **🔧 Developer Experience**: TypeScript, ESLint, Prettier, and comprehensive tooling

## 📋 Project Status

**Current Phase**: Foundation & Setup ✅  
**Next Phase**: MVP Development 🚧

### MVP Progress
- [x] Project configuration and setup
- [x] Internationalization with Farsi as primary language
- [x] Performance-optimized Next.js configuration
- [x] Complete type system and utilities
- [x] Global styles and design system
- [ ] App layout and navigation
- [ ] Core UI components
- [ ] Content sections (Hero, About, Contact, etc.)
- [ ] Contact form implementation
- [ ] Performance optimization and testing

## 🛠 Tech Stack

### Core Framework
- **Next.js 14+** - React framework with App Router and SSG
- **TypeScript 5+** - Static typing and developer experience
- **React 18+** - UI library with concurrent features

### Styling & UI
- **Tailwind CSS 3.4+** - Utility-first CSS with custom design system
- **Lucide React** - Consistent SVG icon library
- **Framer Motion** - Production-ready animations (with LazyMotion)
- **CSS Logical Properties** - RTL/LTR layout support

### Internationalization
- **next-intl** - Type-safe i18n for Next.js App Router
- **Vazirmatn Font** - Professional Persian typography
- **Inter Font** - Modern English typography

### Forms & Validation  
- **React Hook Form** - Performance-focused form handling
- **Zod** - TypeScript-first schema validation

### Development & Quality
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting with Tailwind plugin
- **Husky** - Git hooks for code quality

## 🏗 Project Structure

```
taliman-website/
├── docs/                    # Project documentation
│   ├── PRD.md              # Product Requirements Document
│   ├── TECHNICAL_SPECS.md  # Technical specifications
│   ├── CONTENT_STRATEGY.md # Content and asset strategy
│   ├── IMPLEMENTATION_PLAN.md # Development roadmap
│   ├── DEVELOPMENT.md      # Development guide
│   └── MVP_PLAN.md         # MVP development plan
├── public/                 # Static assets
│   └── images/            # Organized by category
│       ├── hero/
│       ├── equipment/
│       ├── processes/
│       ├── company/
│       ├── quality/
│       └── icons/
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base components (Button, Card, etc.)
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections (Hero, About, etc.)
│   │   └── forms/        # Form components
│   ├── lib/              # Utilities and configurations
│   │   ├── utils.ts      # Helper functions
│   │   ├── constants.ts  # App constants
│   │   ├── types.ts      # TypeScript definitions
│   │   └── validations.ts # Zod schemas
│   ├── messages/         # Internationalization
│   │   ├── en.json       # English translations
│   │   └── fa.json       # Farsi translations
│   └── styles/
│       └── globals.css   # Global styles and design system
├── Configuration files
│   ├── next.config.js    # Next.js configuration
│   ├── tailwind.config.js # Tailwind CSS configuration  
│   ├── tsconfig.json     # TypeScript configuration
│   ├── .eslintrc.json    # ESLint configuration
│   └── .prettierrc       # Prettier configuration
└── Package and environment files
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd taliman-website

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production  
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues automatically
npm run type-check      # Run TypeScript compiler
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting

# Analysis & Testing
npm run analyze         # Analyze bundle size
npm run test            # Run tests (when implemented)
```

## 🌍 Internationalization

The website supports two languages with Farsi as the primary language:

- **Farsi (fa)** - Primary language with RTL support
- **English (en)** - Secondary language with LTR support

Language files are located in `src/messages/` and the routing automatically handles locale prefixes (`/fa/` and `/en/`).

## 🎨 Design System

### Colors
- **Primary**: Professional blue palette for trust and reliability
- **Industrial**: Gray tones for technical and industrial feel  
- **Accent**: Subtle accent colors for CTAs and highlights

### Typography
- **Farsi**: Vazirmatn - Professional Persian font with excellent readability
- **English**: Inter - Modern, clean typeface optimized for screens

### Components
- Consistent design system with reusable components
- Mobile-first responsive approach
- Accessibility-focused implementation

## 🚀 Performance & SEO

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### SEO Features
- Static site generation for fast loading
- Proper meta tags for both languages
- Structured data markup
- Optimized for Persian and English keywords
- Responsive images with Next.js Image optimization

## ♿ Accessibility

- **WCAG 2.1 AA** compliance target
- **Keyboard navigation** for all interactive elements
- **Screen reader** compatibility with proper ARIA labels
- **Color contrast** ratios meeting accessibility standards
- **Focus management** and visible focus indicators

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint + Prettier for consistent formatting
- Conventional commits for clear git history
- Component-driven development approach

### Key Conventions
- Mobile-first responsive design
- CSS logical properties for RTL support
- Performance-first component architecture
- Comprehensive TypeScript types

### Testing Strategy
- Component testing with React Testing Library
- End-to-end testing with Playwright  
- Accessibility testing with axe-core
- Performance monitoring with Lighthouse

## 📦 Deployment

The website is optimized for static site generation:

```bash
# Build static site
npm run build

# Output: ./out/ directory
# Deploy to any static hosting service
```

### Deployment Targets
- **VPS with Docker**: Nginx serving static files
- **Vercel**: Optimal Next.js hosting (recommended)
- **Netlify**: Alternative with form handling
- **Static CDN**: Any CDN supporting static sites

## 📖 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[PRD.md](docs/PRD.md)** - Product Requirements Document
- **[TECHNICAL_SPECS.md](docs/TECHNICAL_SPECS.md)** - Technical Architecture  
- **[CONTENT_STRATEGY.md](docs/CONTENT_STRATEGY.md)** - Content & Asset Strategy
- **[IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md)** - Development Roadmap
- **[DEVELOPMENT.md](docs/DEVELOPMENT.md)** - Development Guidelines
- **[MVP_PLAN.md](docs/MVP_PLAN.md)** - MVP Development Plan

**Progress Tracking**: [PROGRESS.md](PROGRESS.md) - Daily development log  
**Claude Configuration**: [CLAUDE.md](CLAUDE.md) - Development workflow

## 🤝 Contributing

This is a private project for Taliman Sakhtehaye Felezi Kara. Development follows the established guidelines in the documentation.

### Development Workflow
1. Follow the MVP plan for feature development
2. Ensure both languages are tested
3. Maintain performance and accessibility standards  
4. Run quality checks before committing

## 📄 License

Private project - All rights reserved by Taliman Sakhtehaye Felezi Kara.

## 📞 Support

For development questions, refer to the comprehensive documentation in the `docs/` directory or check the development guide.

---

**Built with ❤️ for Taliman Sakhtehaye Felezi Kara**  
*Leading CHQ wire processing specialists serving the automotive fastener industry*