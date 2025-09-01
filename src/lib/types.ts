import { Locale } from '@/i18n';

// Base types for multilingual content
export interface MultilingualText {
  en: string;
  fa: string;
}

export interface MultilingualContent<T> {
  en: T;
  fa: T;
}

// Navigation types
export interface NavItem {
  key: string;
  href: string;
  external?: boolean;
}

// SEO and metadata types
export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: Locale;
  alternates?: {
    languages?: Record<Locale, string>;
  };
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  language: Locale;
  consent?: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

// Company information types
export interface CompanyInfo {
  name: MultilingualText;
  tagline: MultilingualText;
  description: MultilingualText;
  established?: number;
  employees?: number;
  location: MultilingualText;
}

export interface ContactInfo {
  address: MultilingualText;
  phone: string;
  email: string;
  website?: string;
  businessHours: MultilingualText;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Technical specifications types
export interface TechnicalSpec {
  parameter: string;
  value: string | number;
  unit?: string;
  description?: MultilingualText;
}

export interface Equipment {
  id: string;
  name: MultilingualText;
  category: string;
  description: MultilingualText;
  specifications: TechnicalSpec[];
  images?: string[];
  features?: MultilingualText[];
  applications?: MultilingualText[];
}

export interface Process {
  id: string;
  name: MultilingualText;
  description: MultilingualText;
  steps: ProcessStep[];
  duration?: string;
  temperature?: {
    min: number;
    max: number;
    unit: string;
  };
  applications: MultilingualText[];
}

export interface ProcessStep {
  id: string;
  name: MultilingualText;
  description: MultilingualText;
  duration?: string;
  temperature?: number;
  order: number;
  icon?: string;
}

// Quality and certifications
export interface Certification {
  id: string;
  name: string;
  description: MultilingualText;
  issuedBy: string;
  validUntil?: Date;
  documentUrl?: string;
  logo?: string;
}

export interface QualityStandard {
  id: string;
  name: string;
  description: MultilingualText;
  version?: string;
  compliance: boolean;
  auditDate?: Date;
}

// Media and assets
export interface ImageAsset {
  src: string;
  alt: MultilingualText;
  width?: number;
  height?: number;
  caption?: MultilingualText;
  category?: string;
  priority?: boolean;
}

export interface VideoAsset {
  src: string;
  poster?: string;
  title: MultilingualText;
  description?: MultilingualText;
  duration?: number;
  category?: string;
}

// UI Component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  image?: ImageAsset;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}

// Animation and interaction types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  repeat?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
}

export interface ScrollTriggerConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// API and data fetching types
export interface APIResponse<T> {
  data?: T;
  error?: string;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Error handling
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface FormError {
  field: string;
  message: string;
  code?: string;
}

// Theme and styling
export interface ThemeConfig {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    neutral: Record<string, string>;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  breakpoints: Record<string, number>;
}

// Analytics and tracking
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom?: Record<string, any>;
}

export interface PageViewEvent {
  page: string;
  title: string;
  locale: Locale;
  referrer?: string;
  userAgent?: string;
}

// Performance monitoring
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

// Utility types for form handling
export type FormField<T> = {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
};

export type FormState<T extends Record<string, any>> = {
  [K in keyof T]: FormField<T[K]>;
} & {
  isValid: boolean;
  isSubmitting: boolean;
  submitCount: number;
};

// Layout and responsive design
export interface ResponsiveValue<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: ResponsiveValue<string>;
}

// Search and filtering
export interface SearchParams {
  query?: string;
  category?: string;
  sort?: 'name' | 'date' | 'relevance';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface FilterOption {
  id: string;
  label: MultilingualText;
  value: string;
  count?: number;
  disabled?: boolean;
}

// Internationalization
export interface TranslationKey {
  key: string;
  params?: Record<string, string | number>;
  fallback?: string;
}

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag?: string;
  domain?: string;
}

// Export commonly used union types
export type Status = 'idle' | 'loading' | 'success' | 'error';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type Direction = 'ltr' | 'rtl';
export type Position = 'top' | 'right' | 'bottom' | 'left' | 'center';