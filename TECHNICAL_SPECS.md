# Technical Specification Document

# Taliman Website Development

## 1. Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Taliman Website                        │
├─────────────────────────────────────────────────────────────┤
│  Frontend (Next.js 14 + App Router)                        │
│  ├── Pages (App Router)                                     │
│  ├── Components (Reusable UI)                              │
│  ├── Internationalization (next-intl)                      │
│  ├── Styling (Tailwind CSS)                               │
│  └── Assets (Images, Icons, Fonts)                        │
├─────────────────────────────────────────────────────────────┤
│  Deployment & Infrastructure                               │
│  ├── Static Generation (SSG)                              │
│  ├── CDN Distribution                                      │
│  ├── Image Optimization                                   │
│  └── Performance Monitoring                               │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Core Framework

- **Next.js 14.2+**: React framework with App Router
- **React 18+**: UI library with concurrent features
- **TypeScript 5+**: Static typing and developer experience

#### Styling & UI

- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **Tailwind UI Components**: Pre-built component patterns
- **CSS Logical Properties**: RTL/LTR layout support
- **Lucide React**: Consistent icon library

#### Internationalization

- **next-intl**: Type-safe i18n for Next.js
- **ICU Message Format**: Complex message formatting
- **RTL Support**: Right-to-left layout for Farsi

#### Forms & Validation

- **React Hook Form**: Performance-focused form library
- **Zod**: TypeScript-first schema validation
- **Server Actions**: Form handling with Next.js

#### Animation & Interaction

- **Framer Motion**: Production-ready motion library
- **Intersection Observer**: Scroll-triggered animations
- **CSS Transitions**: Smooth micro-interactions

## 2. Project Structure

### Directory Architecture

```
taliman-website/
├── README.md
├── PRD.md
├── TECHNICAL_SPECS.md
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .env.local
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
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── not-found.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── badge.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── processes-section.tsx
│   │   │   ├── equipment-section.tsx
│   │   │   ├── quality-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── forms/
│   │       ├── contact-form.tsx
│   │       └── form-fields.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── validations.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   ├── messages/
│   │   ├── en.json
│   │   └── fa.json
│   └── styles/
│       └── globals.css
└── docs/
    ├── deployment.md
    ├── development.md
    └── content-guide.md
```

## 3. Component Architecture

### Component Hierarchy

```
App Layout
├── Header
│   ├── Navigation
│   ├── Language Switcher
│   └── Mobile Menu
├── Main Content
│   ├── Hero Section
│   ├── About Section
│   ├── Processes Section
│   ├── Equipment Section
│   ├── Quality Section
│   └── Contact Section
└── Footer
    ├── Company Info
    ├── Contact Details
    └── Social Links
```

### Component Design Patterns

#### Composition Pattern

```typescript
// Flexible, composable components
<Card>
  <Card.Header>
    <Card.Title>Equipment</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description>Bell-type Furnaces</Card.Description>
  </Card.Content>
</Card>
```

#### Compound Components

```typescript
// Complex UI with multiple related parts
<ContactForm>
  <ContactForm.Field name="name" />
  <ContactForm.Field name="email" />
  <ContactForm.Field name="message" type="textarea" />
  <ContactForm.Submit />
</ContactForm>
```

### UI Component Library

#### Base Components

- **Button**: Multiple variants (primary, secondary, outline)
- **Card**: Container with header, content, footer slots
- **Input**: Text inputs with validation states
- **Textarea**: Multi-line input with auto-resize
- **Badge**: Status indicators and tags
- **Loading**: Skeleton screens and spinners

#### Layout Components

- **Container**: Max-width responsive wrapper
- **Grid**: CSS Grid-based layout system
- **Section**: Semantic section with spacing
- **Separator**: Visual content dividers

## 4. Internationalization Architecture

### Language Support

- **English (en)**: Primary language, LTR layout
- **Farsi/Persian (fa)**: Secondary language, RTL layout

### i18n Implementation

```typescript
// Message structure
interface Messages {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  // ... other sections
}

// Usage in components
const t = useTranslations('hero');
<h1>{t('title')}</h1>
```

### RTL Layout Strategy

```css
/* Logical properties for RTL support */
.container {
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  padding-inline: 2rem;
  border-inline-start: 1px solid;
}

/* Direction-specific styles */
[dir="rtl"] .arrow-icon {
  transform: scaleX(-1);
}
```

## 5. Styling Architecture

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        industrial: {
          gray: '#6b7280',
          steel: '#9ca3af',
          metal: '#4b5563',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        farsi: ['Vazir', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### CSS Organization

```css
/* Layer structure */
@layer base {
  /* Global styles and resets */
}

@layer components {
  /* Component-specific styles */
}

@layer utilities {
  /* Custom utility classes */
}
```

### Design Token System

```typescript
// Design tokens for consistent styling
export const tokens = {
  spacing: {
    section: 'py-16 lg:py-24',
    container: 'px-4 sm:px-6 lg:px-8',
  },
  typography: {
    heading: 'text-3xl lg:text-4xl font-bold',
    subheading: 'text-xl lg:text-2xl font-semibold',
    body: 'text-base lg:text-lg',
  },
  animation: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
  },
};
```

## 6. Performance Specifications

### Core Web Vitals Targets

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Strategies

#### Image Optimization

```typescript
// Next.js Image component with optimization
<Image
  src="/equipment/furnace.jpg"
  alt="Bell-type Annealing Furnace"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false} // Only for above-the-fold images
/>
```

#### Code Splitting

```typescript
// Dynamic imports for heavy components
const ContactForm = dynamic(() => import('./contact-form'), {
  loading: () => <ContactFormSkeleton />,
  ssr: false, // Client-side only if needed
});
```

#### Font Optimization

```typescript
// next/font optimization
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### Bundle Size Targets

- **Initial Bundle**: < 200KB gzipped
- **Total JavaScript**: < 500KB gzipped
- **CSS Bundle**: < 50KB gzipped
- **Images**: WebP format, responsive sizing

## 7. SEO Implementation

### Metadata Strategy

```typescript
// Dynamic metadata generation
export async function generateMetadata({ params }: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale;
  
  return {
    title: {
      template: '%s | Taliman Wire Processing',
      default: 'Taliman - CHQ Wire Rod Processing Experts',
    },
    description: 'Leading provider of CHQ wire rod processing...',
    alternates: {
      languages: {
        en: '/en',
        fa: '/fa',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      siteName: 'Taliman',
    },
  };
}
```

### Structured Data

```typescript
// JSON-LD for rich snippets
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Taliman Sakhtehaye Felezi Kara',
  description: 'CHQ wire rod processing specialist',
  url: 'https://taliman.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+98-xxx-xxx-xxxx',
    contactType: 'sales',
  },
};
```

## 8. Accessibility Specifications

### WCAG 2.1 AA Compliance

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and landmarks
- **Color Contrast**: 4.5:1 minimum for normal text
- **Focus Management**: Visible focus indicators

### Implementation Guidelines

```typescript
// Semantic HTML structure
<main>
  <section aria-labelledby="about-heading">
    <h2 id="about-heading">About Taliman</h2>
    <p>Company description...</p>
  </section>
</main>

// Focus management
const ButtonComponent = ({ children, ...props }) => (
  <button
    className="focus:outline-none focus:ring-2 focus:ring-primary-500"
    {...props}
  >
    {children}
  </button>
);
```

## 9. Form Implementation

### Contact Form Specification

```typescript
// Form schema with validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  language: z.enum(['en', 'fa']),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

### Server Actions

```typescript
// Server-side form handling
export async function submitContactForm(data: ContactFormData) {
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    return { error: 'Invalid form data' };
  }
  
  // Send email, save to database, etc.
  return { success: true };
}
```

## 10. Deployment & Infrastructure

### Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export', // Static export for CDN deployment
  trailingSlash: true,
  images: {
    unoptimized: true, // For static export
  },
  experimental: {
    optimizeCss: true,
  },
};
```

### Deployment Targets

- **Vercel**: Recommended for Next.js optimization
- **Netlify**: Alternative with form handling
- **AWS S3 + CloudFront**: Custom CDN setup
- **GitHub Pages**: Free hosting option

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://taliman.com
CONTACT_EMAIL=info@taliman.com
ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 11. Development Workflow

### Code Quality Tools

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

### Git Workflow

- **Branch Strategy**: Feature branches with PR reviews
- **Commit Convention**: Conventional commits
- **Pre-commit Hooks**: Lint, format, and type checking

## 12. Testing Strategy

### Testing Levels

- **Unit Tests**: Component and utility testing
- **Integration Tests**: Form submission and i18n
- **E2E Tests**: Complete user journeys
- **Accessibility Tests**: Automated a11y checking

### Test Configuration

```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

---

*This technical specification serves as the implementation guide for building the Taliman website according to the requirements outlined in the PRD.*