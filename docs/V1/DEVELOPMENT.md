# Development Guide

# Taliman Website - Astro 5.x

Modern bilingual corporate website built with Astro 5.x, optimized for performance and international markets.

## Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- Bun 1.0.0 or higher (preferred package manager)
- Git
- VS Code with Astro extension (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd taliman-website

# Install dependencies (using Bun for performance)
bun install

# Copy environment variables
cp .env.example .env.local

# Start development server
bun run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see the application.

## Astro Development Environment

### Package Manager Setup

```bash
# Bun is preferred for faster installs and execution
bun install                    # Install dependencies
bun add <package>              # Add new dependency
bun add -d <package>           # Add dev dependency
bun remove <package>           # Remove dependency
bun outdated                   # Check for updates
```

### Development Server

```bash
bun run dev                    # Start dev server with hot reload
bun run dev --host            # Expose to network
bun run dev --port 3000       # Custom port
bun run dev --open           # Auto-open browser
```

### Astro 5.x Project Structure

```
taliman-website/
├── public/                    # Static assets (images, favicons, etc.)
├── src/
│   ├── components/           # Astro and React components
│   │   ├── ui/              # Base UI components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   └── forms/           # Form components
│   ├── content/             # Content Collections
│   │   ├── pages/           # Page content (fa/en)
│   │   ├── products/        # Product descriptions
│   │   └── config.ts        # Content collection schemas
│   ├── layouts/             # Astro layout components
│   ├── pages/               # File-based routing
│   │   ├── en/             # English pages
│   │   ├── fa/             # Persian pages (default)
│   │   └── [...rest].astro  # 404 handler
│   ├── lib/                 # Utilities and configurations
│   │   ├── utils.ts         # Helper functions
│   │   ├── i18n.ts         # Internationalization config
│   │   └── constants.ts     # Site constants
│   ├── styles/              # Global styles
│   │   ├── globals.css      # Tailwind and custom styles
│   │   └── components.css   # Component-specific styles
│   └── env.d.ts            # TypeScript environment types
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Content Management with Astro

### Content Collections Setup

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['fa', 'en']),
    lastModified: z.date(),
    seo: z
      .object({
        title: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
      })
      .optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    specifications: z.array(z.string()),
    images: z.array(z.string()),
    lang: z.enum(['fa', 'en']),
  }),
});

export const collections = { pages, products };
```

### Bilingual Content Organization

```
src/content/
├── pages/
│   ├── fa/
│   │   ├── about.md          # Persian about page
│   │   ├── processes.md      # Persian processes page
│   │   └── contact.md        # Persian contact page
│   └── en/
│       ├── about.md          # English about page
│       ├── processes.md      # English processes page
│       └── contact.md        # English contact page
└── products/
    ├── fa/
    │   └── chq-wire.md       # Persian product descriptions
    └── en/
        └── chq-wire.md       # English product descriptions
```

### Content Layer API Configuration

```typescript
// astro.config.mjs
export default defineConfig({
  experimental: {
    contentLayer: true,
    contentIntellisense: true,
  },
  content: {
    collections: {
      pages: {
        glob: '**/*.{md,mdx}',
        schema: pagesSchema,
      },
    },
  },
});
```

### Markdown and MDX Authoring

```markdown
---
# Frontmatter
title: 'درباره تولیمان'
description: 'متخصص در فرآوری سیم CHQ برای صنعت خودرو'
lang: 'fa'
lastModified: 2024-01-15
seo:
  title: 'درباره شرکت تولیمان ساختهای فلزی کارا'
  description: 'پیشرو در تولید محصولات CHQ با کیفیت بالا'
  keywords: ['CHQ', 'سیم سردکاری', 'قطعات خودرو']
---

# درباره تولیمان

محتوای فارسی صفحه درباره ما...

## تخصص ما

- فرآوری سیم CHQ
- تولید قطعات خودرو
- کنترل کیفیت بالا
```

## Component Development

### Astro Component Syntax

```astro
---
// Component script (server-side)
export interface Props {
  title: string;
  description?: string;
  lang: 'fa' | 'en';
}

const { title, description, lang } = Astro.props;
const isRTL = lang === 'fa';
---

<!-- Component template -->
<section class={`hero-section ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
  <div class="container mx-auto px-4">
    <h1 class="mb-4 text-center text-4xl font-bold">
      {title}
    </h1>
    {
      description && (
        <p class="mx-auto max-w-2xl text-center text-lg text-gray-600">{description}</p>
      )
    }
    <slot />
  </div>
</section>

<style>
  .hero-section {
    @apply bg-gradient-to-r from-blue-600 to-blue-800 py-16;
  }

  .rtl {
    font-family: 'Vazir', sans-serif;
  }

  .ltr {
    font-family: 'Inter', sans-serif;
  }
</style>
```

### Islands Architecture Implementation

```astro
---
// Interactive components only when needed
import ContactForm from '../components/ContactForm.tsx';
import ProductCarousel from '../components/ProductCarousel.tsx';
---

<Layout title="تماس با ما">
  <!-- Static content (server-rendered) -->
  <section class="contact-info">
    <h1>اطلاعات تماس</h1>
    <p>آدرس، تلفن، ایمیل...</p>
  </section>

  <!-- Interactive islands -->
  <ContactForm client:load />
  <ProductCarousel client:visible />
</Layout>
```

### React Component Integration

```typescript
// src/components/ContactForm.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';

interface ContactFormProps {
  lang: 'fa' | 'en';
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission logic
    try {
      // Send data to API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
    </form>
  );
}
```

### Server Islands for Dynamic Features

```astro
---
// src/components/ServerIsland.astro
// Server-side dynamic content
const recentPosts = await fetch('/api/recent-posts').then((r) => r.json());
const currentTime = new Date().toLocaleString('fa-IR');
---

<div class="server-island">
  <p>آخرین بروزرسانی: {currentTime}</p>
  <ul>
    {recentPosts.map((post) => <li>{post.title}</li>)}
  </ul>
</div>
```

## Styling and Assets

### Tailwind CSS with RTL Support

```javascript
// tailwind.config.mjs
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    addDynamicIconSelectors(),
  ],
  // RTL support
  corePlugins: {
    direction: true,
  },
};
```

### Astro's Built-in Image Optimization

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-bg.jpg';
import companyLogo from '../assets/images/logo.png';
---

<!-- Optimized local images -->
<Image
  src={heroImage}
  alt="تولیمان - تخصص در CHQ"
  width={1920}
  height={1080}
  format="webp"
  quality={85}
  class="h-auto w-full"
/>

<!-- Responsive images -->
<Image
  src={companyLogo}
  alt="لوگو تولیمان"
  widths={[240, 540, 720]}
  sizes="(max-width: 360px) 240px, (max-width: 720px) 540px, 720px"
  format="webp"
  class="logo"
/>

<!-- External images (CDN) -->
<img
  src="https://cdn.taliman.ir/products/chq-wire.webp"
  alt="سیم CHQ با کیفیت"
  loading="lazy"
  width="800"
  height="600"
  class="product-image"
/>
```

### Asset Management and Optimization

```
public/
├── images/
│   ├── hero/              # Large hero images
│   ├── products/          # Product photos
│   ├── icons/            # SVG icons
│   └── logos/            # Company branding
├── fonts/
│   ├── vazir/            # Persian fonts
│   └── inter/            # English fonts
└── manifest.json         # Web app manifest
```

### CSS Logical Properties for i18n

```css
/* globals.css */
:root {
  --spacing-inline: 1rem;
  --border-radius: 0.5rem;
}

.card {
  padding-inline: var(--spacing-inline);
  margin-block: 2rem;
  border-start-start-radius: var(--border-radius);
  border-end-start-radius: var(--border-radius);
}

.button {
  margin-inline-start: auto;
  text-align: start;
}

/* RTL-specific styles */
[dir='rtl'] .arrow-icon {
  transform: scaleX(-1);
}

[dir='rtl'] .numbered-list {
  counter-reset: item;
  list-style: none;
}

[dir='rtl'] .numbered-list li::before {
  content: counter(item, decimal) '.';
  counter-increment: item;
  margin-inline-end: 0.5rem;
}
```

## Build and Deployment

### Development Scripts

```bash
# Development
bun run dev                    # Start dev server (port 4321)
bun run dev:network           # Expose to network
bun run preview               # Preview production build

# Code Quality
bun run lint                  # ESLint check
bun run lint:fix              # Fix ESLint issues
bun run format                # Prettier formatting
bun run format:check          # Check formatting
bun run type-check            # TypeScript validation

# Build and Analysis
bun run build                 # Production build
bun run build:analyze         # Bundle size analysis
bun run astro check           # Astro-specific checks
```

### Static Site Generation

```bash
# Build static site
bun run build

# Output directory: ./dist/
# Ready for deployment to any static host

# Preview build locally
bun run preview
```

### Build Optimization and Analysis

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  build: {
    assets: '_astro',
    assetsPrefix: process.env.CDN_URL || undefined,
    inlineStylesheets: 'auto',
    split: true,
  },
  image: {
    service: sharpImageService(),
    domains: ['cdn.taliman.ir'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.taliman.ir',
      },
    ],
  },
  compressHTML: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            utils: ['./src/lib/utils'],
          },
        },
      },
    },
  },
});
```

### VPS Deployment Strategies

```bash
# Build script for VPS deployment
#!/bin/bash
echo "Building Taliman website..."

# Clean and install
rm -rf dist node_modules
bun install --frozen-lockfile

# Type check and lint
bun run type-check
bun run lint

# Build optimized static site
NODE_ENV=production bun run build

# Compress assets
find dist -name "*.html" -exec gzip -9 {} \; -exec mv {}.gz {} \;
find dist -name "*.css" -exec gzip -9 {} \; -exec mv {}.gz {} \;
find dist -name "*.js" -exec gzip -9 {} \; -exec mv {}.gz {} \;

echo "Build complete! Deploy ./dist/ to your web server"
```

### CDN Integration and Caching

```nginx
# nginx.conf for VPS deployment
server {
    listen 443 ssl http2;
    server_name taliman.ir www.taliman.ir;

    root /var/www/taliman/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/css application/javascript image/svg+xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
        add_header Content-Encoding gzip;
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy strict-origin-when-cross-origin;
}
```

## Development Workflows

### Git Workflow with Astro Projects

```bash
# Feature development workflow
git checkout -b feature/processes-section
git add src/components/sections/ProcessesSection.astro
git add src/content/pages/fa/processes.md
git add src/content/pages/en/processes.md

# Pre-commit checks
bun run lint:fix
bun run type-check
bun run build  # Ensure build succeeds

git commit -m "feat: add processes section with bilingual content"
git push origin feature/processes-section

# Create pull request for review
```

### Content Authoring and Review Process

```markdown
# Content Review Checklist

## Persian Content (fa/)

- [ ] Text flows naturally and professionally
- [ ] Technical terms are accurate
- [ ] Cultural context is appropriate
- [ ] RTL layout looks correct
- [ ] Font rendering is crisp (Vazir font)

## English Content (en/)

- [ ] Grammar and spelling checked
- [ ] Technical accuracy verified
- [ ] SEO keywords included naturally
- [ ] LTR layout is optimal
- [ ] Font rendering is crisp (Inter font)

## Both Languages

- [ ] Content structure matches between languages
- [ ] Images and media are appropriate
- [ ] Links work correctly
- [ ] Metadata is complete and accurate
```

### Testing Strategies for Static Sites

```typescript
// src/lib/test-utils.ts
import { getCollection } from 'astro:content';

// Content validation tests
export async function validateContent() {
  const pages = await getCollection('pages');
  const errors = [];

  for (const page of pages) {
    // Check required fields
    if (!page.data.title) {
      errors.push(`Missing title: ${page.id}`);
    }

    // Check bilingual parity
    const otherLang = page.data.lang === 'fa' ? 'en' : 'fa';
    const counterpart = pages.find(
      (p) => p.id.replace(`/${page.data.lang}/`, `/${otherLang}/`) === p.id
    );

    if (!counterpart) {
      errors.push(`Missing translation: ${page.id}`);
    }
  }

  return errors;
}

// Performance testing
export function checkPagePerformance(url: string) {
  return fetch(url).then((response) => ({
    size: response.headers.get('content-length'),
    timing: performance.now(),
  }));
}
```

### Performance Monitoring and Optimization

```javascript
// src/lib/performance.ts
export function trackWebVitals() {
  // Core Web Vitals monitoring
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}

// Image optimization checker
export function auditImages() {
  const images = document.querySelectorAll('img');
  const issues = [];

  images.forEach((img) => {
    if (!img.alt) {
      issues.push(`Missing alt text: ${img.src}`);
    }

    if (img.loading !== 'lazy' && !img.closest('.above-fold')) {
      issues.push(`Should be lazy loaded: ${img.src}`);
    }
  });

  return issues;
}
```

## Tooling Integration

### ESLint and Prettier Configuration

```javascript
// eslint.config.js
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import typescript from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/no-set-text-directive': 'error',
    },
  },
];
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/content/*": ["./src/content/*"]
    }
  },
  "include": ["src/**/*", ".astro/**/*"]
}
```

### Astro-Specific Developer Tools

```json
// package.json - dev dependencies
{
  "devDependencies": {
    "@astro/check": "^0.9.0",
    "@astro/ts-plugin": "^1.8.0",
    "astro-eslint-parser": "^1.0.0",
    "eslint-plugin-astro": "^1.2.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

### VS Code Extensions and Setup

```json
// .vscode/extensions.json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "astro.trace.server": "verbose",
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "astro": "html"
  },
  "files.associations": {
    "*.astro": "astro"
  }
}
```

## Performance and SEO

### Core Web Vitals Optimization

```astro
---
// Performance-optimized page structure
import Layout from '../layouts/Layout.astro';
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Layout title="تولیمان - متخصص CHQ">
  <!-- Above-the-fold critical content -->
  <section class="hero">
    <Image
      src={heroImage}
      alt="تولیمان"
      width={1920}
      height={1080}
      priority={true}
      format="webp"
      class="hero-image"
    />
    <h1 class="hero-title">تولیمان ساختهای فلزی کارا</h1>
  </section>

  <!-- Below-the-fold content -->
  <section class="content">
    <!-- Lazy-loaded components -->
    <script>
      // Intersection Observer for progressive loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load component when visible
            import('../components/ProductShowcase.tsx').then((module) => {
              // Initialize component
            });
          }
        });
      });

      observer.observe(document.querySelector('.products-section'));
    </script>
  </section>
</Layout>
```

### SEO Meta Tags and Structured Data

```astro
---
// SEO-optimized layout
export interface Props {
  title: string;
  description: string;
  lang: 'fa' | 'en';
  canonical?: string;
  image?: string;
}

const { title, description, lang, canonical, image } = Astro.props;
const isRTL = lang === 'fa';
---

<html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="language" content={lang} />
    {canonical && <link rel="canonical" href={canonical} />}

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content={lang === 'fa' ? 'fa_IR' : 'en_US'} />
    {image && <meta property="og:image" content={image} />}

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}

    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "تولیمان ساختهای فلزی کارا",
        "alternateName": "Taliman Sakhtehaye Felezi Kara",
        "description": "متخصص در فرآوری سیم CHQ برای صنعت خودرو",
        "url": "https://taliman.ir",
        "logo": "https://taliman.ir/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+98-21-XXXXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["Persian", "English"]
        }
      }
    </script>

    <!-- Fonts -->
    {
      isRTL ? (
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      ) : (
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      )
    }
  </head>

  <body class={isRTL ? 'font-vazir' : 'font-inter'}>
    <slot />
  </body>
</html>
```

## Best Practices

### Astro Component Patterns

```astro
---
// Reusable section component
export interface Props {
  title: string;
  subtitle?: string;
  children?: any;
  variant?: 'default' | 'dark' | 'gradient';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

const { title, subtitle, variant = 'default', containerSize = 'lg' } = Astro.props;

const variantClasses = {
  default: 'bg-white text-gray-900',
  dark: 'bg-gray-900 text-white',
  gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
};

const containerClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};
---

<section class:list={['py-16', variantClasses[variant]]}>
  <div class:list={['mx-auto px-4', containerClasses[containerSize]]}>
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold">{title}</h2>
      {subtitle && <p class="mx-auto max-w-2xl text-lg opacity-80">{subtitle}</p>}
    </div>
    <slot />
  </div>
</section>
```

### Performance Best Practices

```typescript
// Lazy loading utilities
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

// Image loading strategy
export function optimizeImages() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = createIntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}
```

### Internationalization Best Practices

```typescript
// i18n utilities for Astro
export const LANGUAGES = {
  fa: 'فارسی',
  en: 'English',
} as const;

export type Language = keyof typeof LANGUAGES;

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGES) return lang as Language;
  return 'fa'; // Default to Persian
}

export function translatePath(path: string, targetLang: Language): string {
  const [, currentLang, ...segments] = path.split('/');

  if (targetLang === 'fa') {
    return '/' + segments.join('/');
  }

  return `/${targetLang}/${segments.join('/')}`;
}

// Content helpers
export async function getLocalizedContent(collection: string, lang: Language) {
  const { getCollection } = await import('astro:content');
  const entries = await getCollection(collection as any);
  return entries.filter((entry) => entry.data.lang === lang);
}
```

## Troubleshooting

### Common Astro Issues

**Build fails with content collection errors:**

```bash
# Check content schema validation
bun run astro check

# Verify content files structure
find src/content -name "*.md" -exec head -10 {} \;
```

**TypeScript errors in .astro files:**

```bash
# Restart TypeScript server
# In VS Code: Cmd+Shift+P > "TypeScript: Restart TS Server"

# Check Astro TypeScript integration
bun add -D @astro/ts-plugin
```

**Hot reload not working:**

```bash
# Clear Astro cache
rm -rf node_modules/.astro

# Restart development server
bun run dev
```

**Images not optimizing:**

```javascript
// Check astro.config.mjs
export default defineConfig({
  image: {
    service: sharpImageService(),
    // Ensure Sharp is installed
    // bun add sharp
  },
});
```

### Performance Debugging

```typescript
// Performance monitoring in development
if (import.meta.env.DEV) {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });

  // Bundle size analysis
  console.log('Build info available at: http://localhost:4321/__inspect/');
}
```

## Resources and Documentation

### Essential Links

- [Astro Documentation](https://docs.astro.build/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Image Optimization](https://docs.astro.build/en/guides/images/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
- [Performance Optimization](https://docs.astro.build/en/guides/performance/)

### Development Tools

- [Astro DevTools](https://github.com/withastro/astro-devtools)
- [Astro Language Tools](https://github.com/withastro/language-tools)
- [Bundle Analyzer](https://docs.astro.build/en/guides/development-tools/#bundle-analyzer)

---

_This comprehensive development guide covers all aspects of building and maintaining the Taliman corporate website with Astro 5.x. Keep it updated as the project evolves and new Astro features become available._
