# Content Strategy - Astro Content Collections Architecture

# Taliman Sakhtehaye Felezi Kara Manufacturing Catalog

## 1. Astro Content Collections Architecture

### Core Collections Structure

Our content management strategy leverages Astro's Content Collections API for type-safe, performance-optimized content delivery across bilingual manufacturing specifications.

```typescript
// src/content/config.ts
export const collections = {
  products: defineCollection({
    type: 'content',
    schema: productSchema,
  }),
  processes: defineCollection({
    type: 'content',
    schema: processSchema,
  }),
  equipment: defineCollection({
    type: 'content',
    schema: equipmentSchema,
  }),
  company: defineCollection({
    type: 'content',
    schema: companySchema,
  }),
  blog: defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
};
```

### 1.1 Products Collection: CHQ Wire Specifications

**Purpose:** Technical specifications, material properties, and product data sheets for Cold Heading Quality wire products.

**Schema Definition:**

```typescript
const productSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  category: z.enum(['chq-wire', 'wire-rod', 'drawn-wire', 'special-alloys']),
  specifications: z.object({
    diameter_range: z.string(),
    material_grade: z.string(),
    tensile_strength: z.string(),
    carbon_content: z.string(),
    surface_finish: z.string(),
    tolerance: z.string(),
  }),
  applications: z.array(z.string()),
  certifications: z.array(z.string()),
  datasheet_url: z.string().optional(),
  images: z.array(z.string()),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  language: z.enum(['en', 'fa']),
  published_date: z.date(),
  last_updated: z.date(),
});
```

**File Structure:**

```
src/content/products/
├── en/
│   ├── chq-wire-automotive.md
│   ├── high-carbon-wire-rod.md
│   ├── precision-drawn-wire.md
│   └── special-alloy-wire.md
└── fa/
    ├── chq-wire-automotive.md
    ├── high-carbon-wire-rod.md
    ├── precision-drawn-wire.md
    └── special-alloy-wire.md
```

### 1.2 Processes Collection: Manufacturing Process Details

**Purpose:** Detailed documentation of manufacturing processes, quality control procedures, and technical workflows.

**Schema Definition:**

```typescript
const processSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  category: z.enum(['annealing', 'spheroidizing', 'drawing', 'quality-control']),
  process_steps: z.array(
    z.object({
      step_number: z.number(),
      title: z.string(),
      description: z.string(),
      parameters: z
        .object({
          temperature: z.string().optional(),
          atmosphere: z.string().optional(),
          duration: z.string().optional(),
          pressure: z.string().optional(),
        })
        .optional(),
      quality_checks: z.array(z.string()).optional(),
    })
  ),
  equipment_required: z.array(z.string()),
  input_materials: z.array(z.string()),
  output_specifications: z.object({
    dimensional_tolerance: z.string(),
    surface_finish: z.string(),
    mechanical_properties: z.string(),
  }),
  safety_requirements: z.array(z.string()),
  process_diagram: z.string().optional(),
  technical_drawings: z.array(z.string()).optional(),
  language: z.enum(['en', 'fa']),
  complexity_level: z.enum(['basic', 'intermediate', 'advanced']),
  published_date: z.date(),
});
```

**File Structure:**

```
src/content/processes/
├── en/
│   ├── bell-type-annealing.md
│   ├── spheroidizing-treatment.md
│   ├── precision-wire-drawing.md
│   └── quality-control-procedures.md
└── fa/
    ├── bell-type-annealing.md
    ├── spheroidizing-treatment.md
    ├── precision-wire-drawing.md
    └── quality-control-procedures.md
```

### 1.3 Equipment Collection: Furnace Specifications & Capabilities

**Purpose:** Technical specifications, capabilities, and operational parameters for manufacturing equipment.

**Schema Definition:**

```typescript
const equipmentSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  category: z.enum(['furnaces', 'drawing-lines', 'quality-equipment', 'auxiliary']),
  manufacturer: z.string(),
  model: z.string(),
  year_installed: z.number(),
  specifications: z.object({
    capacity: z.string(),
    temperature_range: z.string(),
    atmosphere_control: z.string(),
    automation_level: z.string(),
    energy_consumption: z.string().optional(),
    footprint: z.string().optional(),
  }),
  capabilities: z.array(z.string()),
  compatible_materials: z.array(z.string()),
  operating_parameters: z.object({
    max_temperature: z.string(),
    processing_speed: z.string(),
    batch_size: z.string(),
    cycle_time: z.string(),
  }),
  maintenance_schedule: z.string(),
  safety_features: z.array(z.string()),
  technical_drawings: z.array(z.string()).optional(),
  operation_manual: z.string().optional(),
  images: z.array(z.string()),
  language: z.enum(['en', 'fa']),
  status: z.enum(['operational', 'maintenance', 'planned']),
  published_date: z.date(),
});
```

### 1.4 Company Collection: Corporate Information

**Purpose:** Company information, certifications, leadership, and corporate governance content.

**Schema Definition:**

```typescript
const companySchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  category: z.enum(['about', 'leadership', 'certifications', 'history', 'values']),
  content_type: z.enum(['page', 'profile', 'certificate', 'milestone']),
  meta: z.object({
    established: z.number().optional(),
    location: z.string().optional(),
    employees: z.string().optional(),
    certifications: z.array(z.string()).optional(),
  }),
  leadership: z
    .array(
      z.object({
        name: z.string(),
        position: z.string(),
        bio: z.string(),
        image: z.string().optional(),
        linkedin: z.string().optional(),
      })
    )
    .optional(),
  certifications: z
    .array(
      z.object({
        name: z.string(),
        issuer: z.string(),
        valid_until: z.date().optional(),
        certificate_url: z.string().optional(),
      })
    )
    .optional(),
  images: z.array(z.string()),
  language: z.enum(['en', 'fa']),
  published_date: z.date(),
});
```

### 1.5 Blog/News Collection: Industry Updates

**Purpose:** Industry news, company announcements, technical articles, and thought leadership content.

**Schema Definition:**

```typescript
const blogSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  author: z.string(),
  category: z.enum(['news', 'technical', 'industry', 'company']),
  tags: z.array(z.string()),
  featured_image: z.string(),
  images: z.array(z.string()).optional(),
  reading_time: z.number(),
  featured: z.boolean().default(false),
  seo: z.object({
    meta_description: z.string(),
    keywords: z.array(z.string()),
  }),
  language: z.enum(['en', 'fa']),
  published_date: z.date(),
  last_updated: z.date(),
  status: z.enum(['draft', 'published', 'archived']),
});
```

## 2. Content Layer API Integration

### 2.1 Type-Safe Content Management

**Content Query Utilities:**

```typescript
// src/lib/content.ts
export async function getProductsByCategory(category: string, lang: 'en' | 'fa') {
  const products = await getCollection('products', ({ data }) => {
    return data.category === category && data.language === lang;
  });

  return products.sort((a, b) => a.data.order - b.data.order);
}

export async function getProcessBySlug(slug: string, lang: 'en' | 'fa') {
  const process = await getEntry('processes', `${lang}/${slug}`);
  return process;
}

export async function getFeaturedEquipment(lang: 'en' | 'fa') {
  const equipment = await getCollection('equipment', ({ data }) => {
    return data.status === 'operational' && data.language === lang;
  });

  return equipment.slice(0, 3);
}
```

### 2.2 Bilingual Content Organization

**Directory Structure:**

```
src/content/
├── products/
│   ├── en/           # English product specifications
│   └── fa/           # Farsi product specifications
├── processes/
│   ├── en/           # English process documentation
│   └── fa/           # Farsi process documentation
├── equipment/
│   ├── en/           # English equipment specs
│   └── fa/           # Farsi equipment specs
├── company/
│   ├── en/           # English company content
│   └── fa/           # Farsi company content
└── blog/
    ├── en/           # English blog posts
    └── fa/           # Farsi blog posts
```

### 2.3 Asset Management and Optimization

**Asset Organization:**

```
public/assets/
├── products/
│   ├── chq-wire/
│   │   ├── specifications/
│   │   ├── samples/
│   │   └── datasheets/
│   └── wire-rod/
├── processes/
│   ├── diagrams/
│   ├── flowcharts/
│   └── technical-drawings/
├── equipment/
│   ├── furnaces/
│   │   ├── photos/
│   │   ├── schematics/
│   │   └── manuals/
│   └── drawing-lines/
└── company/
    ├── certifications/
    ├── facility/
    └── leadership/
```

## 3. Markdown/MDX Authoring Workflow

### 3.1 Frontmatter Specifications

**Product Content Template:**

```markdown
---
title: 'CHQ Wire for Automotive Fasteners'
slug: 'chq-wire-automotive'
description: 'High-quality CHQ wire specifically engineered for automotive fastener applications'
category: 'chq-wire'
specifications:
  diameter_range: '5.5mm - 22mm'
  material_grade: 'SWRCH35K, SWRCH45K'
  tensile_strength: '400-600 N/mm²'
  carbon_content: '0.32-0.47%'
  surface_finish: 'Bright, Phosphate'
  tolerance: '±0.05mm'
applications:
  - 'Engine bolts'
  - 'Chassis fasteners'
  - 'Suspension components'
certifications:
  - 'ISO/TS 16949'
  - 'DIN 17223'
images:
  - '/assets/products/chq-wire/samples/automotive-wire.jpg'
  - '/assets/products/chq-wire/specifications/dimensional-chart.jpg'
featured: true
order: 1
language: 'en'
published_date: 2024-01-15
last_updated: 2024-01-15
---

# CHQ Wire for Automotive Fasteners

## Overview

Our Cold Heading Quality (CHQ) wire is specifically engineered for the demanding requirements of automotive fastener manufacturing...

## Technical Specifications

### Material Properties

- **Tensile Strength**: 400-600 N/mm²
- **Elongation**: 25-35%
- **Reduction of Area**: 60-70%

### Applications

This CHQ wire is ideally suited for:

- High-strength automotive bolts
- Engine mounting hardware
- Suspension system fasteners
```

**Process Documentation Template:**

```markdown
---
title: 'Bell-Type Annealing Process'
slug: 'bell-type-annealing'
description: 'Comprehensive guide to our bell-type annealing process for CHQ wire treatment'
category: 'annealing'
process_steps:
  - step_number: 1
    title: 'Material Preparation'
    description: 'Incoming wire rod inspection and preparation'
    parameters:
      temperature: 'Ambient'
      duration: '30 minutes'
    quality_checks:
      - 'Visual inspection'
      - 'Dimensional verification'
  - step_number: 2
    title: 'Furnace Loading'
    description: 'Systematic loading of wire coils into bell-type furnace'
    parameters:
      temperature: '650-750°C'
      atmosphere: 'Hydrogen/Nitrogen mixture'
      duration: '12-16 hours'
equipment_required:
  - 'Bell-type annealing furnace'
  - 'Atmosphere control system'
  - 'Temperature monitoring equipment'
input_materials:
  - 'Hot-rolled wire rod'
  - 'SWRCH35K, SWRCH45K grades'
output_specifications:
  dimensional_tolerance: '±0.02mm'
  surface_finish: 'Scale-free, uniform'
  mechanical_properties: 'Optimized for cold heading'
safety_requirements:
  - 'Atmosphere monitoring'
  - 'Temperature safety interlocks'
  - 'Personal protective equipment'
language: 'en'
complexity_level: 'advanced'
published_date: 2024-01-15
---

# Bell-Type Annealing Process

## Process Overview

Bell-type annealing is a controlled atmosphere heat treatment process...
```

### 3.2 Technical Specification Templates

**Equipment Specification Template:**

```markdown
---
title: 'Bell-Type Annealing Furnace - Line 1'
slug: 'bell-furnace-line-1'
description: 'High-capacity bell-type annealing furnace for CHQ wire processing'
category: 'furnaces'
manufacturer: 'Aichelin Group'
model: 'EcoSeal Bell'
year_installed: 2020
specifications:
  capacity: '25 tons per batch'
  temperature_range: '600-900°C'
  atmosphere_control: 'H2/N2 mixture, CO monitoring'
  automation_level: 'Fully automated PLC control'
  energy_consumption: '850 kWh per batch'
  footprint: '15m × 12m'
capabilities:
  - 'Batch annealing of wire rod coils'
  - 'Spheroidizing heat treatment'
  - 'Controlled cooling cycles'
compatible_materials:
  - 'Carbon steel wire rod'
  - 'Alloy steel grades'
  - 'Stainless steel wire'
operating_parameters:
  max_temperature: '900°C'
  processing_speed: '2 batches per day'
  batch_size: '25 tons'
  cycle_time: '24 hours'
maintenance_schedule: 'Weekly preventive maintenance'
safety_features:
  - 'Atmosphere monitoring system'
  - 'Emergency shutdown procedures'
  - 'Fire suppression system'
images:
  - '/assets/equipment/furnaces/bell-furnace-exterior.jpg'
  - '/assets/equipment/furnaces/control-panel.jpg'
language: 'en'
status: 'operational'
published_date: 2024-01-15
---

# Bell-Type Annealing Furnace - Production Line 1

## Equipment Overview

Our state-of-the-art bell-type annealing furnace represents the pinnacle of heat treatment technology...
```

## 4. SEO and Structured Data

### 4.1 Manufacturing Industry Schema Markup

**Product Schema Implementation:**

```typescript
// src/components/seo/ProductSchema.astro
---
interface Props {
  product: any;
}

const { product } = Astro.props;

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product.data.title,
  "description": product.data.description,
  "category": "Industrial Materials",
  "manufacturer": {
    "@type": "Organization",
    "name": "Taliman Sakhtehaye Felezi Kara",
    "url": "https://taliman.com"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": product.data.specifications.material_grade
    },
    {
      "@type": "PropertyValue",
      "name": "Tensile Strength",
      "value": product.data.specifications.tensile_strength
    }
  ],
  "applicationCategory": product.data.applications
};
---

<script type="application/ld+json" set:html={JSON.stringify(productSchema)}></script>
```

**Organization Schema:**

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Taliman Sakhtehaye Felezi Kara',
  alternateName: 'Taliman Steel Wire Processing',
  url: 'https://taliman.com',
  logo: 'https://taliman.com/assets/logo.svg',
  description: 'Leading provider of CHQ wire rod processing services',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressLocality: '[City]',
    addressRegion: '[Region]',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '[Phone]',
    contactType: 'customer service',
    availableLanguage: ['Persian', 'English'],
  },
  sameAs: ['https://linkedin.com/company/taliman'],
};
```

### 4.2 Multilingual SEO Optimization

**Hreflang Implementation:**

```typescript
// src/components/seo/HreflangTags.astro
---
interface Props {
  currentLang: 'en' | 'fa';
  slug: string;
}

const { currentLang, slug } = Astro.props;
const baseUrl = 'https://taliman.com';
---

<link rel="alternate" hreflang="en" href={`${baseUrl}/en/${slug}`} />
<link rel="alternate" hreflang="fa" href={`${baseUrl}/fa/${slug}`} />
<link rel="alternate" hreflang="x-default" href={`${baseUrl}/fa/${slug}`} />
```

## 5. Content Organization & File Structure

### 5.1 File-Based Content Structure

```
src/content/
├── config.ts                    # Content collections configuration
├── products/
│   ├── en/
│   │   ├── _templates/          # Content templates
│   │   ├── chq-wire/           # CHQ wire products
│   │   ├── wire-rod/           # Wire rod products
│   │   └── special-alloys/     # Special alloy products
│   └── fa/                     # Mirror structure in Farsi
├── processes/
│   ├── en/
│   │   ├── heat-treatment/     # Heat treatment processes
│   │   ├── wire-drawing/       # Wire drawing processes
│   │   └── quality-control/    # QC procedures
│   └── fa/                     # Mirror structure in Farsi
├── equipment/
│   ├── en/
│   │   ├── furnaces/          # Furnace specifications
│   │   ├── drawing-lines/     # Drawing line equipment
│   │   └── testing/           # Testing equipment
│   └── fa/                     # Mirror structure in Farsi
├── company/
│   ├── en/
│   │   ├── about.md
│   │   ├── leadership/        # Leadership profiles
│   │   ├── certifications/    # Certification details
│   │   └── history/           # Company history
│   └── fa/                     # Mirror structure in Farsi
└── blog/
    ├── en/
    │   ├── 2024/              # Year-based organization
    │   └── 2025/
    └── fa/
        ├── 2024/
        └── 2025/
```

### 5.2 Asset Organization and Naming Conventions

**Naming Conventions:**

- Use kebab-case for all file names
- Include language prefix for shared assets: `product-name-en.jpg`, `product-name-fa.jpg`
- Version control for updated content: `v1`, `v2` suffixes
- Date-based naming for time-sensitive content: `YYYY-MM-DD-content-name`

**Directory Structure:**

```
public/assets/
├── images/
│   ├── products/
│   │   ├── chq-wire/
│   │   │   ├── automotive-grade-en.jpg
│   │   │   ├── automotive-grade-fa.jpg
│   │   │   └── specifications/
│   │   │       ├── tensile-chart-en.svg
│   │   │       └── tensile-chart-fa.svg
│   │   └── wire-rod/
│   ├── processes/
│   │   ├── flowcharts/
│   │   │   ├── annealing-process-en.svg
│   │   │   └── annealing-process-fa.svg
│   │   └── diagrams/
│   ├── equipment/
│   │   ├── furnaces/
│   │   └── quality-control/
│   └── company/
├── documents/
│   ├── specifications/
│   │   ├── en/
│   │   └── fa/
│   ├── certifications/
│   └── technical-sheets/
└── videos/
    ├── processes/
    └── equipment/
```

## 6. Performance Optimization

### 6.1 Image Optimization Strategies

**Astro Image Integration:**

```typescript
// src/components/ui/OptimizedImage.astro
---
import { Image } from 'astro:assets';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  class?: string;
}

const { src, alt, width, height, loading = 'lazy', class: className } = Astro.props;
---

<Image
  src={src}
  alt={alt}
  width={width}
  height={height}
  loading={loading}
  class={className}
  format="webp"
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 6.2 Lazy Loading for Technical Diagrams

**Progressive Loading Strategy:**

```typescript
// src/components/technical/TechnicalDiagram.astro
---
interface Props {
  diagramSrc: string;
  fallbackSrc: string;
  title: string;
}
---

<div class="technical-diagram" data-diagram-loader>
  <img
    src={Astro.props.fallbackSrc}
    data-src={Astro.props.diagramSrc}
    alt={Astro.props.title}
    loading="lazy"
    class="diagram-image"
  />
  <div class="diagram-overlay">
    <button class="load-diagram">Load Technical Diagram</button>
  </div>
</div>
```

### 6.3 PDF Specification Sheet Handling

**PDF Optimization:**

```typescript
// src/components/documents/SpecSheet.astro
---
interface Props {
  specSheetUrl: string;
  title: string;
  language: 'en' | 'fa';
}

const { specSheetUrl, title, language } = Astro.props;
---

<div class="spec-sheet-container">
  <div class="spec-sheet-preview">
    <iframe
      src={`/pdf-viewer?file=${encodeURIComponent(specSheetUrl)}&lang=${language}`}
      loading="lazy"
      title={title}
    ></iframe>
  </div>
  <div class="spec-sheet-actions">
    <a href={specSheetUrl} download class="download-btn">
      Download PDF ({title})
    </a>
  </div>
</div>
```

## 7. Bilingual Content Management

### 7.1 Translation Workflow and Tools

**Content Sync Utilities:**

```typescript
// src/lib/i18n-utils.ts
export function getTranslatedContent<T>(
  collection: string,
  slug: string,
  targetLang: 'en' | 'fa'
): Promise<T | null> {
  return getEntry(collection as any, `${targetLang}/${slug}`);
}

export function getContentLanguages(collection: string, slug: string) {
  const languages = ['en', 'fa'];
  return Promise.all(
    languages.map(async (lang) => {
      const entry = await getEntry(collection as any, `${lang}/${slug}`);
      return entry ? lang : null;
    })
  ).then((results) => results.filter(Boolean));
}
```

### 7.2 RTL Layout Considerations

**CSS Configuration:**

```css
/* src/styles/rtl.css */
[dir='rtl'] {
  --text-align: right;
  --margin-inline-start: 0;
  --margin-inline-end: auto;
}

[dir='ltr'] {
  --text-align: left;
  --margin-inline-start: auto;
  --margin-inline-end: 0;
}

.technical-spec-table {
  direction: inherit;
  text-align: var(--text-align);
}

.process-flow-diagram {
  transform: scaleX(var(--direction-scale, 1));
}

[dir='rtl'] .process-flow-diagram {
  --direction-scale: -1;
}
```

### 7.3 Cultural Adaptation for Persian Market

**Market-Specific Content Guidelines:**

**Technical Terminology:**

- Maintain English technical terms with Farsi explanations
- Use standardized industrial Persian terminology
- Include metric measurements with local equivalents
- Reference Iranian/MENA industry standards where applicable

**Business Context:**

- Emphasize quality certifications relevant to Iranian market
- Reference compliance with local regulations
- Include culturally appropriate business relationship language
- Adapt testimonials and case studies for regional relevance

**Visual Adaptation:**

- Right-to-left process flow diagrams
- Persian typography considerations (Vazir, Sahel fonts)
- Cultural color considerations for technical diagrams
- Appropriate business imagery for Persian market

## 8. Content Update and Maintenance Strategy

### 8.1 Version Control Workflow

**Content Branching Strategy:**

```
main/
├── content/draft/     # Draft content for review
├── content/staging/   # Staged content for testing
└── content/live/      # Published content
```

**Content Review Process:**

1. **Technical Review**: Engineering team validates specifications
2. **Language Review**: Native speakers review translations
3. **SEO Review**: Marketing team optimizes for search
4. **Compliance Review**: Legal team validates claims
5. **Final Approval**: Management approval for publication

### 8.2 Automated Content Validation

**Content Validation Pipeline:**

```typescript
// src/scripts/validate-content.ts
export async function validateTechnicalSpecs(content: any) {
  const requiredFields = [
    'specifications.material_grade',
    'specifications.tensile_strength',
    'specifications.diameter_range',
  ];

  const missingFields = requiredFields.filter((field) => !getNestedProperty(content, field));

  if (missingFields.length > 0) {
    throw new Error(`Missing required specifications: ${missingFields.join(', ')}`);
  }
}

export async function validateBilingualContent(slug: string) {
  const enContent = await getEntry('products', `en/${slug}`);
  const faContent = await getEntry('products', `fa/${slug}`);

  if (!enContent || !faContent) {
    console.warn(`Missing translation for: ${slug}`);
  }
}
```

This comprehensive content strategy leverages Astro's Content Collections API to create a robust, type-safe, and performance-optimized content management system specifically designed for Taliman's manufacturing catalog, with full bilingual support and technical specification management capabilities.

---

_This strategy document establishes the foundation for a scalable, maintainable content architecture that supports Taliman's technical documentation needs while optimizing for both Persian and English-speaking markets._
