# Taliman Website - Claude Code Project

Production-grade bilingual corporate website for Taliman Sakhtehaye Felezi Kara, specialists in CHQ (Cold Heading Quality) wire processing for the automotive fastener industry.

## 🚀 Current Status

**Phase**: Bug Fixes Complete ✅ → Content Development Ready 🚧  
**Next**: Processes section, Equipment section, and Contact form

## 🛠 Development Commands

### Quality Checks (Run before commits)
```bash
bun run lint:fix      # Fix ESLint issues
bun run type-check    # TypeScript validation
bun run format        # Prettier formatting
```

### Development
```bash
bun run dev          # Start development server (PREFERRED)
bun run build        # Production build
bun run analyze      # Bundle size analysis
```

**Note**: Using Bun package manager for faster development experience

## 🎯 Performance Targets

- not in the scope of this project

## 🏗 Key Architecture

- **Framework**: Next.js 15.5.2 + App Router + Standard SSR
- **Languages**: TypeScript + Farsi (primary) + English
- **Styling**: Tailwind CSS + RTL support
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion (standard library)
- **Icons**: Lucide React
- **Package Manager**: Bun (preferred for performance)

## 📋 Development Principles

1. **Clean & Methodical**: Step-by-step approach with progress tracking
2. **Farsi-First**: Primary language for Persian market SEO
3. **Performance-First**: Core Web Vitals green zone priority
4. **Mobile-First**: Responsive design with RTL support
5. **Type-Safe**: Comprehensive TypeScript definitions
6. **Production-Ready**: VPS deployment optimization

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   ├── ui/          # Base components (Button, Card)
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Page sections (Hero, About)
│   └── forms/       # Form components
├── lib/             # Utilities, constants, types
├── messages/        # i18n translation files
└── styles/          # Global CSS and design system
```

## 🎯 MVP Development Phases

### Phase 1: App Structure & Components ✅ COMPLETE
- [x] App Router layout structure
- [x] Core UI component library  
- [x] Responsive navigation with mobile menu
- [x] Framer Motion animation setup

### Phase 2: Content Sections (Current)
- [x] Hero section with animations
- [x] About section with company info
- [ ] Processes section (CHQ details)
- [ ] Equipment section (specifications) 
- [ ] Quality section (certifications)
- [ ] Contact section with form

### Phase 3: Forms & Functionality
- [ ] Contact form (React Hook Form + Zod)
- [ ] Form validation and error handling
- [ ] Language switching
- [ ] Smooth scroll navigation

### Phase 4: Optimization & Launch
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Production deployment

## 📊 Progress Tracking

**Detailed progress**: See `PROGRESS.md`  
**Documentation**: Complete suite in `docs/` directory
**Current Focus**: Clean, step-by-step MVP development

---

*Keep workspace tidy, track progress daily, maintain production quality standards*