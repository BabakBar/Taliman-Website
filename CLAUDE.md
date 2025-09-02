# Taliman Website - Astro 5.x Corporate Catalog

Production-grade bilingual corporate catalog for Taliman Sakhtehaye Felezi Kara, specialists in CHQ (Cold Heading Quality) wire processing for the automotive fastener industry. Built with Astro 5.x for maximum performance and SEO optimization.

## 🚀 Current Status

**Architecture**: Astro 5.x Static-First Corporate Catalog  
**Phase**: Content Collections Development 🚧  
**Target**: 100/100 Lighthouse scores across all pages

## 🛠 Development Commands

### Astro Development
```bash
bun run dev          # Start Astro dev server with HMR
bun run build        # Build static site for production
bun run preview      # Preview production build locally
bun run astro check  # TypeScript and content validation
```

### Quality Assurance
```bash
bun run lint:fix     # Fix ESLint issues
bun run format       # Prettier formatting
bun run type-check   # TypeScript validation
bun run test         # Run content schema tests
```

### Performance Analysis
```bash
bun run analyze      # Bundle size analysis
bun run lighthouse   # Performance audit
bun run audit        # Content and accessibility audit
```

**Note**: Using Bun package manager for optimal performance in Astro development

## 🎯 Performance Targets

### Lighthouse Scores: 100/100 All Categories
- **Performance**: 100/100 (FCP < 1.0s, LCP < 1.8s)
- **Accessibility**: 100/100 (WCAG 2.1 AA compliant)
- **Best Practices**: 100/100 (Security & modern standards)
- **SEO**: 100/100 (Bilingual optimization)

### Core Web Vitals Excellence
- **First Contentful Paint**: < 1.0s
- **Largest Contentful Paint**: < 1.8s
- **Cumulative Layout Shift**: < 0.05
- **First Input Delay**: < 100ms
- **Total Bundle Size**: < 150KB initial load

## 🏗 Astro 5.x Architecture

### Core Technology Stack
- **Framework**: Astro 5.x + TypeScript (static-first)
- **Content Management**: Content Collections + Content Layer API
- **Internationalization**: Built-in i18n routing (fa/en)
- **Styling**: Tailwind CSS with RTL support
- **Dynamic Features**: Server Islands for selective hydration
- **Icons**: Lucide React (client-side only when needed)
- **Package Manager**: Bun (preferred for Astro performance)

### Architecture Principles
1. **Static-First**: Zero JavaScript by default, hydrate only when necessary
2. **Content Collections**: Type-safe manufacturing data and specifications
3. **Performance-First**: Optimized for Core Web Vitals excellence
4. **SEO-Optimized**: Built-in meta tags, structured data, bilingual support
5. **Islands Architecture**: Selective hydration for interactive components
6. **CDN-Ready**: Optimized for edge deployment and global distribution

## 📋 Development Principles

1. **Static Performance**: Leverage Astro's zero-JS output by default
2. **Farsi-First**: Primary language for Persian market SEO dominance
3. **Content-Driven**: Use Content Collections for all manufacturing data
4. **Mobile-First**: Responsive design with comprehensive RTL support
5. **Type-Safe**: Content schema validation and TypeScript throughout
6. **Production-Ready**: VPS deployment with CDN optimization

## 📁 Astro Project Structure

```
src/
├── pages/              # File-based routing
│   ├── index.astro    # Home page (Farsi)
│   ├── en/            # English routes
│   ├── processes/     # CHQ process pages
│   └── equipment/     # Equipment specification pages
├── content/           # Content Collections
│   ├── config.ts      # Content schema definitions
│   ├── processes/     # CHQ manufacturing processes
│   ├── equipment/     # Technical specifications
│   └── certifications/ # Quality certifications
├── components/        # Astro/React components
│   ├── ui/           # Base UI components
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Page sections (Hero, About)
│   └── islands/      # Interactive components
├── layouts/          # Page layout templates
│   ├── BaseLayout.astro
│   ├── ProductLayout.astro
│   └── ProcessLayout.astro
├── styles/           # Global styles and design system
│   ├── global.css    # Base styles
│   └── components/   # Component-specific styles
└── lib/              # Utilities, constants, types
    ├── content.ts    # Content collection helpers
    ├── i18n.ts       # Internationalization utilities
    └── seo.ts        # SEO optimization helpers
```

## 🎯 Development Phases

### Phase 1: Astro Foundation ✅ COMPLETE
- [x] Astro 5.x project initialization
- [x] Content Collections schema design
- [x] Bilingual routing setup (fa/en)
- [x] Base layout and component structure
- [x] Tailwind CSS with RTL configuration

### Phase 2: Content Collections Development (Current)
- [x] Manufacturing processes content schema
- [x] Equipment specifications data structure
- [ ] CHQ wire processing technical content
- [ ] Quality certifications and standards
- [ ] Company information and history
- [ ] Contact information and locations

### Phase 3: Static Pages & Components
- [ ] Hero section with performance optimization
- [ ] About section with company timeline
- [ ] Processes section with technical details
- [ ] Equipment section with specifications
- [ ] Quality section with certifications
- [ ] Contact section with location data

### Phase 4: Interactive Features (Server Islands)
- [ ] Contact form with server-side validation
- [ ] Language switching functionality
- [ ] Search functionality for processes/equipment
- [ ] Interactive product galleries
- [ ] PDF download capabilities

### Phase 5: Optimization & Launch
- [ ] Performance optimization (100/100 Lighthouse)
- [ ] SEO meta tags and structured data
- [ ] Accessibility testing and WCAG compliance
- [ ] Cross-browser testing and polyfills
- [ ] CDN setup and production deployment

## 🔧 Content Collections Schema

### Manufacturing Processes
```typescript
// src/content/config.ts
const processesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({ fa: z.string(), en: z.string() }),
    description: z.object({ fa: z.string(), en: z.string() }),
    specifications: z.array(z.object({
      parameter: z.string(),
      value: z.string(),
      unit: z.string()
    })),
    applications: z.array(z.string()),
    certifications: z.array(z.string())
  })
});
```

### Equipment Specifications
```typescript
const equipmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.object({ fa: z.string(), en: z.string() }),
    model: z.string(),
    specifications: z.object({
      wireRange: z.string(),
      capacity: z.string(),
      precision: z.string(),
      certifications: z.array(z.string())
    }),
    images: z.array(z.string()),
    datasheets: z.array(z.string())
  })
});
```

## 🌐 Internationalization Strategy

### URL Structure
- **Farsi (Primary)**: `/` (root domain for SEO advantage)
- **English**: `/en/` (subdirectory for international market)

### Content Management
- Content Collections with bilingual schema
- Automatic route generation for both languages
- SEO-optimized meta tags per language
- RTL/LTR layout switching

## 📊 Performance Monitoring

### Development Metrics
- Bundle size tracking per route
- Core Web Vitals monitoring
- Content validation automation
- Accessibility testing integration

### Production Analytics
- Lighthouse CI integration
- Real User Monitoring (RUM)
- CDN performance metrics
- SEO ranking tracking

## 🚀 Deployment Strategy

### VPS Optimization
- Static file generation with Astro build
- CDN integration for global delivery
- Gzip/Brotli compression
- HTTP/2 and HTTP/3 support
- Edge caching strategies

---

*Astro-first development: Static performance, selective hydration, content-driven architecture*