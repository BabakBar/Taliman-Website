# Product Requirements Document (PRD)

# Taliman Sakhtehaye Felezi Kara Website

## 1. Executive Summary

### Project Overview

Develop a production-ready, bilingual corporate website for Taliman Sakhtehaye Felezi Kara, a specialized metal processing company focused on CHQ (Cold Heading Quality) wire rod processing for cold forging and automotive fasteners. Built with Astro 5.x for superior performance and SEO optimization targeting the Persian B2B market.

### Business Objectives

- Establish professional online presence for B2B customers with superior SEO performance
- Showcase specialized equipment and processing capabilities through optimized static content
- Generate qualified leads from automotive and fastener industries with faster page loads
- Support business expansion in domestic and international markets
- Demonstrate quality standards and certifications with enhanced Core Web Vitals
- Achieve competitive advantage through industry-leading website performance

## 2. Product Scope

### Target Audience

**Primary Users:**
- Automotive manufacturers and suppliers (international B2B focus)
- Fastener manufacturers seeking CHQ wire processing
- Industrial procurement managers requiring fast technical specification access
- Quality assurance professionals needing certification verification

**Secondary Users:**
- Industry partners and suppliers
- Potential investors evaluating technical capabilities
- Job seekers and industry professionals
- Search engines (prioritized for Persian market SEO)

### Core Value Proposition

"Leading provider of precision CHQ wire rod processing with state-of-the-art Bell-type Annealing & Spheroidizing furnaces and drawing lines, delivering lightning-fast technical specifications and uncompromising quality standards through our industry-leading digital presence."

## 3. Functional Requirements

### 3.1 Core Features

#### Navigation & Structure

- **Built-in i18n Routing**: Native Astro internationalization for English and Farsi
- **Static-First Architecture**: Pre-rendered pages for maximum performance
- **Mobile-First Responsive Design**: Optimized for all device sizes with RTL support
- **Accessibility Compliance**: WCAG 2.1 AA standards with zero-runtime JavaScript
- **File-Based Routing**: Intuitive URL structure for SEO optimization

#### Content Architecture

1. **Hero Section**
   - Company name and tagline
   - Key value propositions
   - Call-to-action buttons
   - Optimized background imagery with built-in image optimization

2. **About Section**
   - Company history and mission (Content Collections)
   - Leadership team
   - Core values and philosophy
   - Industry expertise and experience

3. **Processes Section**
   - CHQ wire rod processing overview (Content Layer API)
   - Cold forging applications
   - Technical specifications with structured data
   - Process flow diagrams

4. **Equipment Section**
   - Bell-type Annealing & Spheroidizing furnaces (Product Catalog)
   - Precision drawing lines
   - Quality control equipment
   - Technical capabilities and capacities

5. **Quality Section**
   - Industry certifications (Content Collections)
   - Quality standards compliance
   - Testing procedures
   - Quality assurance processes

6. **Contact Section**
   - Contact form with Server Island integration
   - Company address and location
   - Phone, email, and social media links
   - Interactive map integration

#### Interactive Elements

- **Language Switcher**: Native Astro i18n routing
- **Contact Form**: Server Island for dynamic form handling
- **Image Gallery**: Equipment and facility showcase with View Transitions
- **Smooth Animations**: CSS-based animations with optional View Transitions API
- **Zero-JavaScript by Default**: Enhanced performance with selective hydration

### 3.2 Technical Requirements

#### Performance Standards (Enhanced for Astro)

- **Page Load Speed**: < 1.5 seconds on 3G networks
- **Core Web Vitals**: LCP < 1.5s, FID < 50ms, CLS < 0.05
- **Lighthouse Score**: 100/100 across all categories
- **SEO Score**: 100/100 on Google PageSpeed Insights
- **First Contentful Paint**: < 1 second

#### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

#### Technology Stack (Astro 5.x Foundation)

- **Framework**: Astro 5.x with static-first architecture
- **Build System**: Vite (built-in with Astro)
- **Package Manager**: Bun for enhanced development experience
- **Language**: TypeScript-first approach
- **Styling**: Tailwind CSS with RTL support and CSS logical properties
- **Icons**: Lucide React (selective hydration)
- **Internationalization**: Astro built-in i18n routing
- **Forms**: Server Islands with progressive enhancement
- **Content Management**: Content Layer API and Content Collections
- **Image Optimization**: Built-in Astro image optimization
- **View Transitions**: Native Astro View Transitions API

## 4. Non-Functional Requirements

### 4.1 Design Requirements

#### Visual Design

- **Brand Colors**: Professional industrial palette (blues, grays, metallics)
- **Typography**: Clean, readable fonts with comprehensive Farsi character support
- **Layout**: CSS Grid-based responsive design with logical properties
- **Imagery**: Optimized WebP/AVIF with automatic format selection
- **UI Components**: Consistent design system with zero-runtime overhead

#### User Experience

- **Navigation**: Smooth transitions with View Transitions API
- **Language Switching**: Instant language change through static routing
- **Form UX**: Progressive enhancement with Server Island fallbacks
- **Loading Experience**: Instant page loads with optimized static delivery
- **Error Handling**: Static error pages with graceful degradation

### 4.2 Content Requirements

#### Multilingual Content Strategy

- **English Content**: Technical B2B optimization for international markets
- **Farsi Content**: Native RTL implementation with proper SEO for Persian market
- **Content Collections**: Structured content management for technical specifications
- **SEO Optimization**: Enhanced meta tags and structured data for manufacturing industry
- **Content Layer Benefits**: Streamlined product catalog management

#### Media Assets Strategy

- **Photography**: Automatic format optimization (WebP/AVIF)
- **Equipment Images**: Progressive loading with placeholder generation
- **Process Diagrams**: SVG optimization with inline delivery
- **Company Photos**: Responsive image delivery with size optimization
- **Asset Pipeline**: Built-in Astro image processing and optimization

### 4.3 Security & Privacy

#### Data Protection

- **Form Data**: Server Island secure processing
- **Static Security**: Reduced attack surface through static delivery
- **Privacy Compliance**: GDPR-ready with minimal data collection
- **No Client-Side Storage**: Enhanced privacy through server-side processing
- **Rate Limiting**: Built-in protection for contact forms

## 5. User Stories

### Enhanced User Flows for Astro Architecture

#### Performance-Conscious Procurement Manager

```
As an automotive procurement manager with limited time,
I want to access Taliman's technical specifications instantly,
So that I can evaluate suppliers efficiently without waiting for page loads.

Acceptance Criteria:
- Equipment specifications load in under 1 second
- Technical data is immediately available without JavaScript
- Mobile performance matches desktop experience
- Offline browsing capabilities for cached content
```

#### International Quality Professional

```
As an international quality assurance professional,
I want to review certifications and processes in my preferred language,
So that I can assess compliance accurately and quickly.

Acceptance Criteria:
- Language switching preserves current page context
- Technical translations are accurate and consistent
- Certification documents load instantly
- Search engine can properly index content in both languages
```

#### Mobile-First International Partner

```
As an international business partner accessing from mobile devices,
I want the same fast, professional experience regardless of my connection,
So that I can evaluate Taliman's capabilities on-the-go.

Acceptance Criteria:
- Mobile performance score of 100/100
- Identical functionality across all devices
- Offline access to essential information
- Progressive enhancement for advanced features
```

## 6. Success Metrics

### Business Metrics (Enhanced)

- **Lead Generation**: 20+ qualified inquiries per month (improved conversion)
- **Engagement**: 3+ minutes average session duration
- **Search Visibility**: 75% increase in Persian market organic search
- **International Reach**: 40% increase in international traffic
- **Mobile Conversion**: 25% higher mobile form completion rate

### Technical Metrics (Astro-Optimized)

- **Performance**: 100/100 Lighthouse scores across all categories
- **Core Web Vitals**: Green zone with industry-leading metrics
- **SEO**: Top position for Persian CHQ wire processing keywords
- **Uptime**: 99.99% availability with CDN distribution
- **Bundle Size**: < 50KB initial JavaScript (Server Islands only)

### User Experience Metrics

- **Bounce Rate**: < 25% (improved from static-first approach)
- **Mobile Performance**: 95%+ mobile usability score
- **Language Distribution**: Track Persian vs English market penetration
- **Form Conversion**: > 25% contact form completion rate
- **Page Speed Satisfaction**: < 1.5s average load time

## 7. Technical Architecture Benefits

### Astro 5.x Advantages for Manufacturing Industry

#### Content Layer API Benefits
- **Product Catalogs**: Structured equipment and specification management
- **Technical Documentation**: Streamlined process documentation
- **Certification Management**: Organized quality standard presentations
- **Multi-language Content**: Efficient translation management

#### Server Islands Strategy
- **Contact Forms**: Dynamic functionality without full-page hydration
- **Interactive Elements**: Selective enhancement for specific components
- **Performance**: Zero-JavaScript default with targeted interactivity
- **SEO**: Full content accessibility to search engines

#### Static-First Manufacturing Benefits
- **B2B Performance**: Instant access to technical specifications
- **International Reach**: CDN-optimized global delivery
- **Reliability**: No server dependencies for content delivery
- **Cost Efficiency**: Reduced hosting and maintenance overhead

## 8. Project Timeline & Milestones

### Phase 1: Astro Foundation (Week 1)

- [ ] Astro 5.x project initialization with Bun
- [ ] Content Collections structure for technical data
- [ ] i18n routing configuration for Persian/English
- [ ] Tailwind CSS with RTL support setup
- [ ] Content Layer API implementation

### Phase 2: Static Content Development (Week 2)

- [ ] Hero and About sections with Content Collections
- [ ] Processes section with technical specifications
- [ ] Equipment catalog with Content Layer API
- [ ] Quality certifications with structured data
- [ ] Image optimization pipeline implementation

### Phase 3: Interactive Enhancement (Week 3)

- [ ] Contact form Server Island implementation
- [ ] View Transitions API integration
- [ ] Performance optimization and Core Web Vitals
- [ ] SEO enhancement with structured data
- [ ] Cross-browser testing and accessibility

### Phase 4: Launch Optimization (Week 4)

- [ ] Final performance tuning and Lighthouse optimization
- [ ] Persian market SEO implementation
- [ ] CDN setup and deployment optimization
- [ ] Analytics integration and monitoring
- [ ] Documentation and maintenance procedures

## 9. Risk Assessment

### Technical Risks (Astro-Specific)

- **Server Islands Complexity**: Dynamic form integration challenges
  - *Mitigation*: Progressive enhancement fallbacks, thorough testing
- **i18n Implementation**: RTL layout with content routing
  - *Mitigation*: CSS logical properties, early RTL testing
- **Content Layer Learning Curve**: New API adoption
  - *Mitigation*: Comprehensive documentation review, prototype development

### Performance Risks

- **Image Asset Size**: Industrial photography optimization
  - *Mitigation*: Astro image optimization, WebP/AVIF conversion
- **Third-party Dependencies**: External service integration
  - *Mitigation*: Minimal external dependencies, local asset hosting

### SEO and Market Risks

- **Persian Market Competition**: Technical keyword ranking
  - *Mitigation*: Comprehensive Persian SEO strategy, structured data
- **International B2B Expectations**: Performance standards
  - *Mitigation*: Industry-leading performance targets, continuous monitoring

## 10. Assumptions & Dependencies

### Technical Assumptions

- Astro 5.x provides stable Content Layer API
- Bun package manager offers reliable dependency management
- Server Islands support required form functionality
- Modern browser support for View Transitions API
- CDN supports Astro static output optimization

### Content Dependencies

- Professional industrial photography for image optimization
- Technical specifications for Content Collections structure
- Accurate Persian translations for i18n implementation
- Quality certifications for structured data markup
- Company information for contact form Server Island

## 11. Future Considerations

### Phase 2 Enhancements (Astro Ecosystem)

- **CMS Integration**: Headless CMS with Content Layer API
- **Customer Portal**: Authenticated sections with Server Islands
- **Advanced Analytics**: Performance monitoring and conversion tracking
- **Multi-region Optimization**: Geographic content delivery optimization

### Scalability Planning

- **Additional Languages**: Arabic, German market expansion
- **Content Personalization**: Industry-specific content delivery
- **Advanced Search**: Full-text search with static generation
- **API Integration**: ERP system connectivity through Server Islands

### Competitive Advantages

- **Industry-Leading Performance**: Sub-second load times for B2B advantage
- **Persian Market Dominance**: Superior SEO for domestic market
- **International Accessibility**: Optimized global content delivery
- **Maintenance Efficiency**: Reduced operational overhead through static architecture

---

*This PRD establishes Astro 5.x as the foundation for creating an industry-leading corporate website that positions Taliman as the premier provider of CHQ wire processing services through superior technical performance and Persian market optimization.*