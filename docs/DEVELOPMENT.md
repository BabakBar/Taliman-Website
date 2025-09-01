# Development Guide
# Taliman Website

## Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Git

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

## Project Structure

```
taliman-website/
├── public/                 # Static assets
│   └── images/            # Organized by category
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── forms/        # Form components
│   ├── lib/              # Utilities and configurations
│   ├── messages/         # Internationalization files
│   └── styles/           # Global styles
├── docs/                 # Documentation
└── configuration files
```

## Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # Run TypeScript compiler
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting

# Analysis
npm run analyze         # Analyze bundle size
```

## Key Technologies

### Core Stack
- **Next.js 14+**: React framework with App Router
- **TypeScript 5+**: Static typing
- **Tailwind CSS 3.4+**: Utility-first CSS
- **next-intl**: Internationalization for App Router

### UI & Styling
- **Lucide React**: Icon library
- **Framer Motion**: Animations (with LazyMotion)
- **CSS Logical Properties**: RTL support

### Forms & Validation
- **React Hook Form**: Performance-focused forms
- **Zod**: TypeScript-first validation

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint and Prettier configurations
- Use semantic HTML and proper ARIA labels
- Prefer functional components with hooks

### Component Structure
```typescript
// Component template
interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  // ... other props
}

export function Component({ 
  children, 
  className,
  ...props 
}: ComponentProps) {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {children}
    </div>
  );
}
```

### Internationalization
```typescript
// Using translations
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('section');
  
  return (
    <h1>{t('title')}</h1>
  );
}
```

### Styling Conventions
- Use Tailwind utility classes
- Create custom utilities in `globals.css` when needed
- Use CSS logical properties for RTL support
- Follow mobile-first responsive design

### Animation Guidelines
- Use LazyMotion for Framer Motion to reduce bundle size
- Respect `prefers-reduced-motion`
- Keep animations subtle and purposeful
- Use CSS transitions for simple state changes

## Performance Optimization

### Image Handling
```typescript
import Image from 'next/image';

// For external images (Hetzner S3)
<Image
  src="https://s3.example.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="..."
  priority={false} // Only true for above-the-fold images
/>
```

### Bundle Optimization
- Components are automatically code-split
- Use dynamic imports for heavy components
- Tree-shake unused code
- Optimize third-party imports

### Core Web Vitals
- Monitor LCP (< 2.5s)
- Optimize CLS (< 0.1)
- Minimize FID (< 100ms)

## Testing

### Component Testing
```typescript
// Example test structure
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Accessibility Testing
- Use axe-core for automated testing
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios

## Internationalization Development

### Adding New Translations
1. Add keys to both `src/messages/en.json` and `src/messages/fa.json`
2. Use descriptive, hierarchical keys
3. Test both LTR and RTL layouts
4. Verify text doesn't break layouts

### RTL Considerations
- Use logical CSS properties (`margin-inline-start` vs `margin-left`)
- Test with longer Persian text
- Ensure icons and animations work in RTL
- Use `dir="rtl"` for Persian content

## Environment Configuration

### Environment Variables
```bash
# Required
NEXT_PUBLIC_SITE_URL=https://taliman.ir
CONTACT_EMAIL=info@taliman.ir

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
HETZNER_S3_ENDPOINT=https://s3.hetzner.cloud
```

### Build Configurations
- **Development**: Full source maps, hot reload
- **Production**: Optimized bundles, static export
- **Analysis**: Bundle analyzer enabled

## Deployment

### Static Site Generation
```bash
# Build static site
npm run build

# Output directory: ./out/
# Serve with any static file server
```

### Docker Deployment
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder
# ... build steps

FROM nginx:alpine AS runtime
# ... serve static files
```

### Performance Checklist
- [ ] Images optimized (WebP/AVIF)
- [ ] Bundle size under targets
- [ ] Core Web Vitals in green
- [ ] Lighthouse score 90+
- [ ] Accessibility score 100%

## Common Development Tasks

### Adding a New Section
1. Create component in `src/components/sections/`
2. Add translations to message files
3. Import and use in main page
4. Add navigation link if needed
5. Test responsive behavior

### Creating UI Components
1. Define TypeScript interface
2. Implement with Tailwind classes
3. Add proper ARIA attributes
4. Test with both locales
5. Document usage examples

### Optimizing Performance
1. Use `npm run analyze` to check bundle size
2. Implement lazy loading for heavy components
3. Optimize images with proper sizing
4. Monitor Core Web Vitals in development

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
```bash
npm run type-check
# Fix reported type issues
```

**Internationalization not working:**
- Check locale configuration in middleware
- Verify message keys exist in both language files
- Ensure proper locale detection

**RTL layout issues:**
- Use CSS logical properties
- Test with `dir="rtl"` attribute
- Check Tailwind RTL utilities

**Performance issues:**
- Run bundle analyzer
- Check for unnecessary re-renders
- Optimize image sizes and formats

### Getting Help
1. Check this documentation
2. Review component examples
3. Check TypeScript errors carefully
4. Test in both languages and directions
5. Validate accessibility with screen readers

## Best Practices

### Code Organization
- Keep components focused and single-purpose
- Use composition over inheritance
- Implement proper error boundaries
- Handle loading and error states

### Performance
- Lazy load non-critical components
- Optimize images for web
- Use proper caching headers
- Monitor Core Web Vitals

### Accessibility
- Use semantic HTML
- Implement proper focus management
- Add descriptive alt text
- Test with keyboard navigation

### Internationalization
- Design for text expansion (Persian text can be 30% longer)
- Use proper fonts for each language
- Handle number formatting
- Test currency and date formats

---

*This guide covers the essential development practices for the Taliman website. Keep it updated as the project evolves.*