import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Handles conflicts and conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Type-safe function to format numbers for display
 * Handles Farsi and English number formatting
 */
export function formatNumber(
  number: number,
  locale: 'fa' | 'en' = 'en',
  options?: Intl.NumberFormatOptions
) {
  const localeString = locale === 'fa' ? 'fa-IR' : 'en-US';
  return new Intl.NumberFormat(localeString, options).format(number);
}

/**
 * Utility to handle direction-aware animations
 * Returns appropriate animation classes based on locale
 */
export function getDirectionAwareClass(
  baseClass: string,
  locale: 'fa' | 'en',
  rtlClass?: string
) {
  if (locale === 'fa' && rtlClass) {
    return `${baseClass} ${rtlClass}`;
  }
  return baseClass;
}

/**
 * Safely get nested object properties
 * Prevents runtime errors when accessing deep properties
 */
export function safeGet<T>(
  obj: any,
  path: string,
  defaultValue: T
): T {
  return path
    .split('.')
    .reduce((current, key) => current?.[key], obj) ?? defaultValue;
}

/**
 * Debounce function for performance optimization
 * Useful for search inputs and scroll events
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
}

/**
 * Check if we're running on the client side
 * Useful for SSG/SSR compatibility
 */
export const isClient = typeof window !== 'undefined';

/**
 * Smooth scroll to element with offset for fixed headers
 */
export function scrollToElement(
  elementId: string,
  offset: number = 80
) {
  if (!isClient) return;
  
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Generate SEO-friendly slugs from text
 * Handles both English and Farsi text
 */
export function generateSlug(text: string, locale: 'fa' | 'en' = 'en'): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Validate email addresses with comprehensive regex
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format file sizes for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Create optimized image URL with query parameters
 * For use with external CDNs or image services
 */
export function createOptimizedImageUrl(
  baseUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg' | 'png';
  } = {}
): string {
  const url = new URL(baseUrl);
  
  if (options.width) url.searchParams.set('w', options.width.toString());
  if (options.height) url.searchParams.set('h', options.height.toString());
  if (options.quality) url.searchParams.set('q', options.quality.toString());
  if (options.format) url.searchParams.set('fm', options.format);
  
  return url.toString();
}

/**
 * Get the appropriate font class based on locale
 * Handles Farsi font requirements
 */
export function getFontClass(locale: 'fa' | 'en'): string {
  return locale === 'fa' ? 'font-farsi' : 'font-sans';
}

/**
 * Convert Persian/Arabic numerals to English numerals and vice versa
 */
export function convertNumerals(
  text: string,
  to: 'persian' | 'english' = 'english'
): string {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  const englishDigits = '0123456789';

  if (to === 'english') {
    return text
      .replace(/[۰-۹]/g, (d) => englishDigits[persianDigits.indexOf(d)])
      .replace(/[٠-٩]/g, (d) => englishDigits[arabicDigits.indexOf(d)]);
  } else {
    return text.replace(/[0-9]/g, (d) => persianDigits[englishDigits.indexOf(d)]);
  }
}

/**
 * Intersection Observer hook helper
 * Returns whether an element is visible in viewport
 */
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (!isClient || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  });
}