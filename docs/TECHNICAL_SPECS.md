# Technical Specification Document

# Taliman Website - Astro 5.x Architecture

## 1. Astro 5.x Architecture Overview

### Static-First Modern Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Taliman Website                          │
│                 Astro 5.x Static-First                     │
├─────────────────────────────────────────────────────────────┤
│  Core Architecture                                         │
│  ├── Zero-JavaScript by Default                           │
│  ├── Server Islands (Dynamic components)                   │
│  ├── Content Collections (Type-safe content)              │
│  ├── Built-in i18n Routing                                │
│  ├── View Transitions API                                 │
│  └── Component Islands (Selective hydration)              │
├─────────────────────────────────────────────────────────────┤
│  Content Layer & Performance                              │
│  ├── Content Layer API (Unified data sourcing)           │
│  ├── Built-in Image Optimization                          │
│  ├── Automatic Bundle Optimization                        │
│  ├── Built-in Performance Monitoring                      │
│  └── Core Web Vitals Auto-optimization                    │
├─────────────────────────────────────────────────────────────┤
│  Build & Deployment                                       │
│  ├── Vite Build System (Built-in)                         │
│  ├── Static Site Generation (100%)                        │
│  ├── CDN-First Distribution                               │
│  ├── Asset Pipeline Optimization                          │
│  └── VPS/CDN Deployment Ready                             │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Core Framework
- **Astro 5.x**: Modern static site generator with islands architecture
- **TypeScript 5+**: Enhanced type system with Astro's strict type checking
- **Vite**: Built-in ultra-fast build system and HMR development server
- **Bun**: High-performance package manager for development workflow

#### Static-First Performance
- **Zero-JavaScript by Default**: No client-side JS unless explicitly needed
- **Server Islands**: Server-rendered dynamic components for forms
- **Selective Hydration**: Island architecture for interactive components only
- **Built-in Optimizations**: Automatic performance optimizations
- **View Transitions**: Smooth SPA-like navigation with native browser APIs

#### Content Management
- **Content Collections**: Type-safe, schema-validated content management
- **Content Layer API**: Unified content sourcing from files, APIs, or CMS
- **Markdown/MDX**: Rich content authoring with component integration
- **Schema Validation**: Zod-powered content type safety

#### Styling & UI
- **Tailwind CSS 4.x**: Latest utility-first framework with container queries
- **CSS Logical Properties**: Native RTL/LTR layout support
- **Astro Components**: Framework-agnostic, zero-runtime components
- **Built-in CSS Processing**: PostCSS integration and optimization

#### Internationalization
- **Astro i18n**: Built-in internationalization with routing
- **Content Collections i18n**: Localized content management
- **RTL Support**: Native CSS logical properties implementation
- **File-based Organization**: `/en/` and `/fa/` directory structure

## 2. Project Structure

### Astro Directory Architecture

```
taliman-website/
├── README.md
├── CLAUDE.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── bun.lockb
├── .env
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── equipment/
│   │   ├── processes/
│   │   └── company/
│   ├── icons/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── processes.astro
│   │   │   ├── equipment.astro
│   │   │   └── contact.astro
│   │   └── fa/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── processes.astro
│   │       ├── equipment.astro
│   │       └── contact.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── SectionLayout.astro
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Input.astro
│   │   │   ├── Badge.astro
│   │   │   └── LoadingSkeleton.astro
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── LanguageSwitcher.astro
│   │   ├── sections/
│   │   │   ├── HeroSection.astro
│   │   │   ├── AboutSection.astro
│   │   │   ├── ProcessesSection.astro
│   │   │   ├── EquipmentSection.astro
│   │   │   ├── QualitySection.astro
│   │   │   └── ContactSection.astro
│   │   ├── islands/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── forms/
│   │       ├── ContactFormFields.astro
│   │       └── FormValidation.ts
│   ├── content/
│   │   ├── config.ts
│   │   ├── equipment/
│   │   │   ├── en/
│   │   │   │   ├── bell-furnaces.md
│   │   │   │   └── wire-drawing.md
│   │   │   └── fa/
│   │   │       ├── bell-furnaces.md
│   │   │       └── wire-drawing.md
│   │   ├── processes/
│   │   │   ├── en/
│   │   │   │   └── chq-processing.md
│   │   │   └── fa/
│   │   │       └── chq-processing.md
│   │   └── company/
│   │       ├── en/
│   │       │   └── about.md
│   │       └── fa/
│   │           └── about.md
│   ├── data/
│   │   ├── site-config.ts
│   │   ├── navigation.ts
│   │   └── company-info.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── types.ts
│   │   └── i18n.ts
│   └── styles/
│       ├── global.css
│       └── components.css
└── docs/
    ├── deployment.md
    ├── development.md
    └── content-guide.md
```

## 3. Content Collections Configuration

### Schema-Driven Content Management

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const equipment = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['furnaces', 'drawing', 'testing']),
    specifications: z.array(z.object({
      name: z.string(),
      value: z.string(),
      unit: z.string().optional(),
    })),
    images: z.array(z.string()),
    features: z.array(z.string()),
    publishDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

const processes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    steps: z.array(z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
    })),
    benefits: z.array(z.string()),
    applications: z.array(z.string()),
    publishDate: z.date(),
  }),
});

const company = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    founded: z.number(),
    employees: z.number(),
    certifications: z.array(z.string()),
    markets: z.array(z.string()),
    publishDate: z.date(),
  }),
});

export const collections = {
  equipment,
  processes,
  company,
};
```

### Bilingual Content Organization

```typescript
// Content structure for i18n
const contentStructure = {
  '/content/equipment/en/': 'English equipment specs',
  '/content/equipment/fa/': 'فارسی مشخصات تجهیزات',
  '/content/processes/en/': 'English process descriptions',
  '/content/processes/fa/': 'فارسی توضیحات فرآیند',
};

// Usage in pages
export async function getStaticPaths() {
  const equipment = await getCollection('equipment');
  
  return equipment.map((entry) => ({
    params: { 
      slug: entry.slug,
      lang: entry.slug.includes('/en/') ? 'en' : 'fa'
    },
    props: { entry },
  }));
}
```

## 4. Component Architecture

### Astro Component System

```astro
---
// HeroSection.astro - Zero JavaScript by default
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  locale: 'en' | 'fa';
}

const { title, subtitle, ctaText, ctaLink, backgroundImage, locale } = Astro.props;
const isRTL = locale === 'fa';
---

<section 
  class={`hero-section ${isRTL ? 'rtl' : 'ltr'}`}
  style={`background-image: url(${backgroundImage})`}
>
  <div class="hero-content">
    <h1 class="hero-title" transition:name="hero-title">
      {title}
    </h1>
    <p class="hero-subtitle">
      {subtitle}
    </p>
    <a href={ctaLink} class="hero-cta">
      {ctaText}
    </a>
  </div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
  }
  
  .hero-content {
    container-type: inline-size;
    max-inline-size: 1200px;
    margin-inline: auto;
    padding-inline: 2rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-block-end: 1rem;
    color: white;
  }
  
  .rtl .hero-title {
    font-family: 'Vazir', system-ui, sans-serif;
  }
</style>
```

### Island Components for Interactivity

```tsx
// src/components/islands/ContactForm.tsx - Client-side JavaScript only where needed
import { useState } from 'react';
import type { FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default function ContactForm({ locale }: { locale: 'en' | 'fa' }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h3>{locale === 'en' ? 'Thank you!' : 'متشکریم!'}</h3>
        <p>{locale === 'en' ? 'We\'ll be in touch soon.' : 'به زودی با شما تماس خواهیم گرفت.'}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Form fields with proper RTL support */}
    </form>
  );
}
```

## 5. Internationalization Architecture

### Built-in Astro i18n Configuration

```typescript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'fa',
    locales: ['en', 'fa'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
  ],
});
```

### Language-Specific Routing

```astro
---
// src/pages/[...locale]/index.astro
export function getStaticPaths() {
  return [
    { params: { locale: undefined } }, // Root path defaults to Farsi
    { params: { locale: 'en' } },
    { params: { locale: 'fa' } }
  ];
}

const { locale = 'fa' } = Astro.params;
const currentLocale = locale as 'en' | 'fa';
---

<BaseLayout locale={currentLocale}>
  <HeroSection {...heroContent[currentLocale]} />
  <AboutSection {...aboutContent[currentLocale]} />
  <!-- Other sections -->
</BaseLayout>
```

### RTL Layout with CSS Logical Properties

```css
/* src/styles/global.css - Modern RTL support */
:root {
  --flow-space: 1rem;
  --container-padding: 2rem;
}

[data-locale="fa"] {
  direction: rtl;
  font-family: 'Vazir', system-ui, sans-serif;
}

[data-locale="en"] {
  direction: ltr;
  font-family: 'Inter', system-ui, sans-serif;
}

.container {
  max-inline-size: 1200px;
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.section-spacing {
  margin-block: 4rem;
  padding-block: 2rem;
}

.text-start {
  text-align: start;
}

.text-end {
  text-align: end;
}

/* Logical properties for layout */
.card {
  padding-inline: 1.5rem;
  padding-block: 1rem;
  margin-inline-end: 1rem;
  border-inline-start: 3px solid var(--primary-color);
}

/* Icons and directional elements */
.arrow-icon {
  transition: transform 0.2s ease;
}

[dir="rtl"] .arrow-icon {
  transform: scaleX(-1);
}
```

## 6. Performance Architecture

### Zero-JavaScript by Default

```astro
---
// Performance-first approach - no JavaScript unless needed
interface Props {
  equipment: {
    title: string;
    specs: Array<{name: string, value: string}>;
    image: string;
  }[];
}

const { equipment } = Astro.props;
---

<!-- Pure HTML/CSS - no JavaScript shipped -->
<section class="equipment-grid">
  {equipment.map((item) => (
    <article class="equipment-card">
      <img 
        src={item.image} 
        alt={item.title}
        loading="lazy"
        decoding="async"
      />
      <h3>{item.title}</h3>
      <dl class="specs-list">
        {item.specs.map(({name, value}) => (
          <>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </>
        ))}
      </dl>
    </article>
  ))}
</section>

<style>
  .equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    container-type: inline-size;
  }
  
  @container (min-width: 600px) {
    .equipment-card {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 1rem;
    }
  }
</style>
```

### Built-in Image Optimization

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-factory.jpg';
import furnaceImage from '../assets/images/bell-furnace.jpg';
---

<!-- Astro's built-in image optimization -->
<Image
  src={heroImage}
  alt="Taliman Manufacturing Facility"
  width={1200}
  height={600}
  format="webp"
  quality={80}
  loading="eager" /* Above fold */
  decoding="async"
/>

<Image
  src={furnaceImage}
  alt="Bell-type Annealing Furnace"
  width={400}
  height={300}
  format="webp"
  quality={75}
  loading="lazy" /* Below fold */
  decoding="async"
/>
```

### Core Web Vitals Targets

- **Largest Contentful Paint (LCP)**: < 1.8 seconds
- **First Input Delay (FID)**: < 50 milliseconds  
- **Cumulative Layout Shift (CLS)**: < 0.05
- **Time to Interactive (TTI)**: < 2.5 seconds
- **Total Blocking Time (TBT)**: < 150 milliseconds

### Performance Budget

```typescript
// Performance budget enforcement
const performanceBudget = {
  initialBundle: '150KB', // Gzipped
  totalJavaScript: '250KB', // Gzipped (islands only)
  cssBundle: '30KB', // Gzipped
  images: 'WebP/AVIF, responsive',
  fonts: 'Variable fonts, preload critical',
  lighthouse: 100, // Target score
};
```

## 7. Server Islands for Dynamic Features

### Contact Form Server Island

```astro
---
// src/components/islands/ContactFormIsland.astro
import ContactForm from './ContactForm.tsx';
import type { APIRoute } from 'astro';

// Server-side form processing
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validate and process form
  try {
    // Send email, save to database, etc.
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Submission failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
---

<!-- Client-side component only for interactivity -->
<ContactForm client:load locale={Astro.currentLocale} />
```

### Server-Rendered Analytics

```astro
---
// Server-side analytics without client JavaScript
const analyticsData = {
  page: Astro.url.pathname,
  referrer: Astro.request.headers.get('referer'),
  userAgent: Astro.request.headers.get('user-agent'),
  timestamp: new Date().toISOString(),
};

// Log server-side (no client tracking)
console.log('Page view:', analyticsData);
---

<!-- No analytics JavaScript sent to client -->
```

## 8. SEO & Schema Implementation

### Built-in SEO Optimization

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  locale: 'en' | 'fa';
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    image: string;
  };
}

const { title, description, locale, canonical, openGraph } = Astro.props;
const siteUrl = 'https://taliman.com';
---

<html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} data-locale={locale}>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!-- Primary SEO -->
  <title>{title} | Taliman</title>
  <meta name="description" content={description} />
  
  <!-- Canonical URLs -->
  <link rel="canonical" href={canonical || Astro.url.href} />
  
  <!-- Language alternatives -->
  <link rel="alternate" hreflang="en" href={`${siteUrl}/en/`} />
  <link rel="alternate" hreflang="fa" href={`${siteUrl}/fa/`} />
  <link rel="alternate" hreflang="x-default" href={`${siteUrl}/`} />
  
  <!-- Open Graph -->
  {openGraph && (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:image" content={openGraph.image} />
      <meta property="og:url" content={Astro.url.href} />
      <meta property="og:locale" content={locale === 'fa' ? 'fa_IR' : 'en_US'} />
    </>
  )}
  
  <!-- Schema.org structured data -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taliman Sakhtehaye Felezi Kara",
    "description": locale === 'en' 
      ? "Leading CHQ wire rod processing specialist" 
      : "متخصص برجسته پردازش سیم CHQ",
    "url": siteUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-xxx-xxx-xxxx",
      "contactType": "sales"
    }
  })} />
</head>
<body>
  <slot />
</body>
</html>
```

## 9. Build & Deployment Configuration

### Astro Build Configuration

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

export default defineConfig({
  site: 'https://taliman.com',
  
  output: 'static', // 100% static generation
  
  i18n: {
    defaultLocale: 'fa',
    locales: ['en', 'fa'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: {
          en: 'en',
          fa: 'fa'
        }
      }
    }),
    compressor({
      gzip: true,
      brotli: true
    })
  ],
  
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  
  image: {
    domains: ['taliman.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'contact-form': ['src/components/islands/ContactForm.tsx']
          }
        }
      }
    }
  }
});
```

### Production Deployment Targets

#### VPS with CDN (Recommended)
```bash
# Build and deploy pipeline
bun run build
rsync -avz --delete dist/ user@server:/var/www/taliman/
```

#### Static Hosting Options
- **Netlify**: Drag-and-drop deployment with form handling
- **Vercel**: Zero-config deployment with edge functions
- **AWS S3 + CloudFront**: Enterprise CDN setup
- **GitHub Pages**: Free hosting for open source

### Environment Configuration

```bash
# .env
PUBLIC_SITE_URL=https://taliman.com
CONTACT_EMAIL=info@taliman.com
ANALYTICS_ID=
FORM_WEBHOOK_URL=
```

## 10. Development Workflow

### Bun Package Manager Integration

```json
{
  "name": "taliman-website",
  "type": "module",
  "scripts": {
    "dev": "bun astro dev",
    "start": "bun astro dev",
    "build": "bun astro build",
    "preview": "bun astro preview",
    "check": "bun astro check",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "type-check": "bun astro check && tsc --noEmit",
    "analyze": "bun astro build --analyze"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "@astrojs/sitemap": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "eslint": "^9.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

### Quality Assurance Commands

```bash
# Development workflow
bun run dev          # Start development server
bun run type-check   # TypeScript validation
bun run lint:fix     # ESLint auto-fix
bun run format       # Prettier formatting
bun run build        # Production build
bun run analyze      # Bundle analysis
```

## 11. Testing Strategy

### Astro-Specific Testing

```typescript
// tests/components/HeroSection.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import HeroSection from '../src/components/sections/HeroSection.astro';

test('HeroSection renders correctly', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(HeroSection, {
    props: {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      ctaText: 'Click Here',
      ctaLink: '/contact',
      backgroundImage: '/test-bg.jpg',
      locale: 'en'
    }
  });

  expect(result).toContain('Test Title');
  expect(result).toContain('Test Subtitle');
});
```

### Performance Testing

```typescript
// tests/performance/lighthouse.test.ts
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

test('Lighthouse performance score', async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'json', port: chrome.port };
  
  const runnerResult = await lighthouse('http://localhost:4321', options);
  const score = runnerResult.lhr.categories.performance.score * 100;
  
  await chrome.kill();
  
  expect(score).toBeGreaterThan(95); // Target 95+ performance score
});
```

## 12. Content Strategy

### Bilingual Content Collections

```typescript
// Content organization for equipment specifications
const equipmentContent = {
  'bell-furnaces': {
    en: {
      title: 'Bell-type Annealing Furnaces',
      description: 'State-of-the-art heat treatment equipment...',
      specifications: [
        { name: 'Temperature Range', value: '600-900°C', unit: '°C' },
        { name: 'Capacity', value: '10 tons', unit: 'tons' }
      ]
    },
    fa: {
      title: 'کوره‌های آنیل نوع زنگوله‌ای',
      description: 'تجهیزات پیشرفته عملیات حرارتی...',
      specifications: [
        { name: 'محدوده دما', value: '600-900', unit: 'درجه سانتیگراد' },
        { name: 'ظرفیت', value: '10', unit: 'تن' }
      ]
    }
  }
};
```

---

*This technical specification provides a complete implementation guide for building the Taliman website using Astro 5.x architecture, ensuring optimal performance, SEO, and user experience for both Persian and English markets.*