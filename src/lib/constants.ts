import { Locale } from '@/i18n';

// Company Information
export const COMPANY_INFO = {
  name: {
    en: 'Taliman Sakhtehaye Felezi Kara',
    fa: 'تالیمان ساخته‌های فلزی کارا',
  },
  tagline: {
    en: 'CHQ Wire Processing Excellence',
    fa: 'تعالی در پردازش سیم CHQ',
  },
  description: {
    en: 'Leading provider of Cold Heading Quality wire rod processing with state-of-the-art Bell-type Annealing & Spheroidizing furnaces',
    fa: 'ارائه‌دهنده پیشرو خدمات پردازش میله سیم با کیفیت سرد کوبی با کوره‌های پیشرفته آنیل و کروی‌سازی نوع زنگی',
  },
} as const;

// Contact Information (Placeholder - update with real data)
export const CONTACT_INFO = {
  address: {
    en: 'Industrial Zone, Tehran, Iran',
    fa: 'منطقه صنعتی، تهران، ایران',
  },
  phone: '+98-21-XXXX-XXXX',
  email: 'info@taliman.ir',
  website: 'https://taliman.ir',
  businessHours: {
    en: 'Saturday to Thursday, 8:00 AM - 5:00 PM',
    fa: 'شنبه تا پنج‌شنبه، 8:00 - 17:00',
  },
} as const;

// Technical Specifications
export const TECHNICAL_SPECS = {
  wireProcessing: {
    diameterRange: {
      min: 2,
      max: 12,
      unit: 'mm',
    },
    drawingSpeed: {
      max: 1000,
      unit: 'm/min',
    },
    surfaceFinish: {
      ra: 0.8,
      unit: 'μm',
    },
    tolerance: {
      value: 0.02,
      unit: 'mm',
    },
  },
  furnaceSpecs: {
    temperatureRange: {
      min: 650,
      max: 750,
      unit: '°C',
    },
    atmosphere: 'Controlled Hydrogen/Nitrogen',
    capacity: '50 tons per cycle',
  },
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'processes', href: '#processes' },
  { key: 'equipment', href: '#equipment' },
  { key: 'quality', href: '#quality' },
  { key: 'contact', href: '#contact' },
] as const;

// Social Media Links (Placeholder)
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/taliman',
  instagram: 'https://instagram.com/taliman_ir',
  telegram: 'https://t.me/taliman_ir',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: {
    en: 'Taliman - CHQ Wire Processing Specialists',
    fa: 'تالیمان - متخصص پردازش سیم CHQ',
  },
  defaultDescription: {
    en: 'Leading CHQ wire rod processing specialist with Bell-type annealing furnaces. Serving automotive fastener industry with precision quality standards.',
    fa: 'متخصص پیشرو پردازش میله سیم CHQ با کوره‌های آنیل نوع زنگی. خدمات به صنعت بست خودرو با استانداردهای کیفی دقیق.',
  },
  keywords: {
    en: ['CHQ wire processing', 'cold heading quality', 'automotive fastener wire', 'bell-type annealing', 'wire rod processing', 'cold forging wire'],
    fa: ['پردازش سیم CHQ', 'کیفیت سرد کوبی', 'سیم بست خودرو', 'آنیل نوع زنگی', 'پردازش میله سیم', 'سیم کوبی سرد'],
  },
  openGraph: {
    siteName: 'Taliman',
    type: 'website',
    locale: {
      fa: 'fa_IR',
      en: 'en_US',
    },
  },
} as const;

// Performance Budgets (in KB)
export const PERFORMANCE_BUDGETS = {
  initialJS: 200,
  totalJS: 500,
  css: 50,
  images: 1000,
  fonts: 100,
} as const;

// Animation Durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  lazy: 0.8,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Form Validation Rules
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 100,
  },
  email: {
    maxLength: 254,
  },
  phone: {
    minLength: 10,
    maxLength: 15,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
  company: {
    maxLength: 100,
  },
} as const;

// Image Configurations
export const IMAGE_CONFIG = {
  quality: {
    low: 60,
    medium: 75,
    high: 90,
  },
  sizes: {
    thumbnail: { width: 200, height: 150 },
    small: { width: 400, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
    hero: { width: 1920, height: 1080 },
  },
  formats: ['webp', 'avif', 'jpg'],
} as const;

// Equipment Categories
export const EQUIPMENT_CATEGORIES = {
  furnaces: {
    key: 'furnaces',
    icon: 'Flame',
  },
  drawing: {
    key: 'drawing',
    icon: 'ArrowRight',
  },
  quality: {
    key: 'quality',
    icon: 'CheckCircle',
  },
} as const;

// Process Steps
export const PROCESS_STEPS = [
  'inspection',
  'annealing',
  'spheroidizing',
  'drawing',
  'control',
] as const;

// Quality Standards
export const QUALITY_STANDARDS = [
  'ISO 9001:2015',
  'ISO/TS 16949',
  'DIN EN 10270-1',
  'ASTM A510/A510M',
] as const;

// Theme Configuration
export const THEME = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
    industrial: {
      50: '#f8fafc',
      500: '#64748b',
      900: '#0f172a',
    },
  },
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    farsi: 'Vazirmatn, Tahoma, Arial, sans-serif',
  },
} as const;

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  subscribe: '/api/subscribe',
  analytics: '/api/analytics',
} as const;

// Feature Flags
export const FEATURES = {
  analytics: true,
  contactForm: true,
  newsletter: false,
  blog: false,
  chatbot: false,
} as const;

// Utility Types
export type NavItem = typeof NAV_ITEMS[number];
export type ProcessStep = typeof PROCESS_STEPS[number];
export type QualityStandard = typeof QUALITY_STANDARDS[number];
export type EquipmentCategory = keyof typeof EQUIPMENT_CATEGORIES;