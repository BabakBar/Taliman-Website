# Phase 3 — Narrative Sections & Content Collections

> **Scope:** Aligns with PRD Phase 2. Converts all story-driven sections (About, Processes, Equipment, Quality, Photography/Video, Sustainability/Partners) to structured, bilingual content powered by Astro Content Collections and translation files.

## Objectives & Exit Criteria

- Eliminate inline copy from Astro components; all narrative text, stats, and media references live in structured content.
- Implement Samarkand-inspired visual motifs, responsive data tables, and photography treatments from Branding §§1, 5, 7, 11.
- Deliver new sections (Photography/Video Showcase, optional Sustainability/Partners) as reusable components with content-driven layouts.
- **Exit criteria**
  - `rg --files -g"*.astro" | xargs rg "t('about"` returns only wrapper references (no literal copy inside components).
  - `src/content/` hosts collections for `processes`, `equipment`, `certifications`, `photography`, `partners`, `stats`.
  - About/Processes/Equipment/Quality sections render entirely from content queries and respect locale/RTL.
  - Photography mosaic applies `.image-treatment` filter; data tables degrade to card-stack pattern on ≤768 px breakpoints.

## Inputs

- Branding §§1, 5, 7, 8, 11 (storytelling, imagery, data tables, Iranian adaptations).
- PRD §5.3–5.5, §6.2, §7, §8 Phase 2.
- Existing components: `src/components/{About,Processes,Equipment,Quality}.astro`.
- `docs/CONTENT_STRATEGY.md` for copy priorities.

## Step-by-Step Implementation

1. **Content Architecture (`src/content/config.ts`)**
   - Define collections:
     ```ts
     const sections = defineCollection({
       type: 'content',
       schema: z.object({
         title: z.object({ fa: z.string(), en: z.string() }),
         subtitle: z.object({ fa: z.string(), en: z.string() }),
         stats: z.array(z.object({
           label: z.object({ fa: z.string(), en: z.string() }),
           value: z.string(),
           unit: z.string().optional(),
         })).optional(),
         media: z.array(z.object({
           type: z.enum(['image','video']),
           src: z.string(),
           alt: z.object({ fa: z.string(), en: z.string() }),
         })).optional(),
         pattern: z.enum(['samarkand-ring','metallic-arc']).optional(),
       }),
     });
     ```
   - Additional collections for `processes`, `equipment`, `certifications`, `photography`, `partners`, `timeline`, `seo`.
   - Use bilingual fields (`fa`/`en`) and fallback logic in helper utilities.

2. **Utility Layer**
   - Extend `src/lib/i18n.ts` with helper to fetch localized text from collection entries.
   - Add `src/lib/content.ts` for typed queries (e.g., `getSection('about', lang)`).
   - Provide `mapToLocale<T>` utility for objects with `fa`/`en` keys.

3. **Component Refactors**
   - **About.astro**
     - Replace hard-coded `features` array with content collection data (cards, stats).
     - Inject Samarkand pattern overlay using CSS mask or background SVG from `/public/patterns`.
   - **Processes.astro**
     - Render cards from `processes` collection, including metrics (diameter, tolerance, throughput).
     - Implement responsive card-stack data table for CHQ grades per Branding §11 (desktop table, mobile accordion cards).
     - Add timeline visualization referencing Branding “Processing Flow” diagram.
   - **Equipment.astro**
     - Use `equipment` collection to list furnaces, drawing lines, labs with specs tables (structured data-ready).
     - Provide zoomable image gallery with `.image-zoom-container`.
   - **Quality.astro**
     - Drive certification badges and QA workflow steps from `certifications` + `quality` collections.
     - Include download links for PDFs (Phase 4 script will generate).
   - **New Components**
     - `PhotographyShowcase.astro` — mosaic or carousel w/ categories (hero/process/equipment/team) and Brand §5 filter classes.
     - `SustainabilityPartners.astro` — optional grid referencing partners collection, metallic accent badges.

4. **Styling & Motifs**
   - Create `src/styles/patterns.css` to house Samarkand background classes (SVG data URIs tinted via CSS variables).
   - Apply `.gradient-section` backgrounds to alternate sections (Cream → Cloud).
   - Use metallic accent bars for section headings (2 px tall gradient).

5. **Localization Workflow**
   - Store bilingual Markdown files under `src/content/{fa,en}/...`.
   - Build script to validate parity: compare slug counts between locales; fail CI if mismatch.
   - Document content authoring steps in `docs/CONTENT_STRATEGY.md` appendices.

6. **Data Integrity**
   - Type-check content via `astro check`.
   - Add tests (Vitest or simple Node script) verifying CHQ grade entries include required mechanical properties.
   - Provide fallback UI when entries missing (e.g., skeleton or CTA to request specs).

## Validation Checklist

- [ ] `bun run astro check` passes with new collection schemas.
- [ ] `/` and `/en` render identical structures with localized text (toggle manually).
- [ ] Responsive data tables degrade to card-stack pattern at ≤768 px.
- [ ] Photography mosaic uses image treatment filter and warm grading.
- [ ] All section headings have metallic accent indicator.
- [ ] Documentation updated with authoring instructions + parity enforcement results.

## Roles & Owners

| Role | Responsibility |
| --- | --- |
| Content Engineering | Define schemas, utilities, parity validation |
| Copy/Localization | Populate bilingual markdown/JSON files, enforce tone |
| Design | Deliver Samarkand pattern SVGs, approve mosaics |
| QA | Verify localization, responsive behavior, data integrity |
