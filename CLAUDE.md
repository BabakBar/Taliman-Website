# Taliman Website - Claude Code Project

Production-grade bilingual corporate website for Taliman Sakhtehaye Felezi Kara, specialists in CHQ (Cold Heading Quality) wire processing for the automotive fastener industry.

## 🚀 Current Status

**Phase**: Foundation Complete ✅ → MVP Development 🚧  
**Next**: App Router structure and core UI components

## 🛠 Development Commands

### Quality Checks (Run before commits)
```bash
npm run lint:fix      # Fix ESLint issues
npm run type-check    # TypeScript validation
npm run format        # Prettier formatting
```

### Development
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run analyze      # Bundle size analysis
```

## 🎯 Performance Targets

- not in the scope of this project

## 🏗 Key Architecture

- **Framework**: Next.js 14 + App Router + SSG
- **Languages**: TypeScript + Farsi (primary) + English
- **Styling**: Tailwind CSS + RTL support
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion + LazyMotion
- **Icons**: Lucide React

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

### Phase 1: App Structure & Components (Current)
- [ ] App Router layout structure
- [ ] Core UI component library
- [ ] Responsive navigation with mobile menu
- [ ] LazyMotion animation setup

### Phase 2: Content Sections  
- [ ] Hero section with animations
- [ ] About section with company info
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