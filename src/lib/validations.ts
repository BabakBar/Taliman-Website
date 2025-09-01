import { z } from 'zod';
import { VALIDATION_RULES } from './constants';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(VALIDATION_RULES.name.minLength, 'Name must be at least 2 characters')
    .max(VALIDATION_RULES.name.maxLength, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+$/, 
           'Name can only contain letters and spaces'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(VALIDATION_RULES.email.maxLength, 'Email must be less than 254 characters')
    .toLowerCase(),

  company: z
    .string()
    .max(VALIDATION_RULES.company.maxLength, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  phone: z
    .string()
    .min(VALIDATION_RULES.phone.minLength, 'Phone number must be at least 10 characters')
    .max(VALIDATION_RULES.phone.maxLength, 'Phone number must be less than 15 characters')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .min(VALIDATION_RULES.message.minLength, 'Message must be at least 10 characters')
    .max(VALIDATION_RULES.message.maxLength, 'Message must be less than 1000 characters'),

  language: z.enum(['fa', 'en'], {
    required_error: 'Language is required',
  }),

  // Honeypot field for spam protection
  website: z.string().optional().refine(val => !val, {
    message: 'This field should be empty',
  }),

  // Consent checkbox
  consent: z
    .boolean()
    .refine(val => val === true, {
      message: 'You must agree to the privacy policy',
    }),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),
  
  language: z.enum(['fa', 'en']).default('fa'),
  
  // Consent for marketing emails
  marketingConsent: z
    .boolean()
    .refine(val => val === true, {
      message: 'You must agree to receive marketing emails',
    }),
});

// Search form schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query cannot be empty')
    .max(100, 'Search query must be less than 100 characters')
    .trim(),
    
  category: z
    .enum(['all', 'products', 'services', 'news'])
    .default('all'),
    
  language: z.enum(['fa', 'en']).default('fa'),
});

// File upload validation schema
export const fileUploadSchema = z.object({
  file: z
    .any()
    .refine(files => files?.length === 1, 'File is required')
    .refine(files => files?.[0]?.size <= 5000000, 'Max file size is 5MB')
    .refine(
      files => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported'
    ),
});

// URL validation schema
export const urlSchema = z
  .string()
  .url('Please enter a valid URL')
  .regex(/^https?:\/\//, 'URL must start with http:// or https://');

// Phone number validation with international support
export const phoneSchema = z
  .string()
  .regex(
    /^[\+]?[1-9][\d]{0,3}[-\s]?[\d]{1,4}[-\s]?[\d]{1,4}[-\s]?[\d]{1,9}$/,
    'Please enter a valid phone number'
  );

// Persian text validation
export const persianTextSchema = z
  .string()
  .regex(/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s\d\.,;:!?()[\]{}«»""''-]+$/, 
         'Text must be in Persian');

// English text validation
export const englishTextSchema = z
  .string()
  .regex(/^[a-zA-Z\s\d\.,;:!?()[\]{}"""''-]+$/, 
         'Text must be in English');

// Password validation schema (for future use)
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must be less than 128 characters')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
         'Password must contain at least one uppercase letter, one lowercase letter, and one number');

// Date validation schemas
export const dateSchema = z
  .date()
  .min(new Date('1900-01-01'), 'Date must be after 1900')
  .max(new Date(), 'Date cannot be in the future');

export const futureDateSchema = z
  .date()
  .min(new Date(), 'Date must be in the future');

// Numeric validation schemas
export const positiveNumberSchema = z
  .number()
  .positive('Number must be positive');

export const percentageSchema = z
  .number()
  .min(0, 'Percentage must be at least 0')
  .max(100, 'Percentage cannot exceed 100');

// Social media URL validations
export const socialMediaSchemas = {
  linkedin: z.string().url().regex(/^https:\/\/(www\.)?linkedin\.com\/.*$/, 
                                   'Must be a valid LinkedIn URL'),
  instagram: z.string().url().regex(/^https:\/\/(www\.)?instagram\.com\/.*$/, 
                                    'Must be a valid Instagram URL'),
  telegram: z.string().url().regex(/^https:\/\/(t\.me|telegram\.me)\/.*$/, 
                                   'Must be a valid Telegram URL'),
  twitter: z.string().url().regex(/^https:\/\/(www\.)?(twitter|x)\.com\/.*$/, 
                                  'Must be a valid Twitter/X URL'),
};

// SEO validation schemas
export const seoSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(60, 'Title should be less than 60 characters for SEO'),
    
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .max(160, 'Description should be less than 160 characters for SEO'),
    
  keywords: z
    .array(z.string().min(2, 'Keyword must be at least 2 characters'))
    .max(10, 'Maximum 10 keywords allowed'),
    
  canonicalUrl: urlSchema.optional(),
});

// Configuration validation
export const configSchema = z.object({
  siteName: z.string().min(1, 'Site name is required'),
  siteUrl: urlSchema,
  defaultLocale: z.enum(['fa', 'en']),
  supportedLocales: z.array(z.enum(['fa', 'en'])).min(1, 'At least one locale required'),
  
  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    googleTagManagerId: z.string().optional(),
    enableAnalytics: z.boolean().default(true),
  }).optional(),
  
  contact: z.object({
    email: z.string().email(),
    phone: phoneSchema,
    address: z.string().min(10, 'Address must be at least 10 characters'),
  }),
  
  features: z.object({
    newsletter: z.boolean().default(false),
    blog: z.boolean().default(false),
    testimonials: z.boolean().default(true),
    gallery: z.boolean().default(true),
  }).optional(),
});

// Type exports for use in components
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type SearchData = z.infer<typeof searchSchema>;
export type SEOData = z.infer<typeof seoSchema>;
export type ConfigData = z.infer<typeof configSchema>;

// Validation helper functions
export function validateEmail(email: string): boolean {
  try {
    z.string().email().parse(email);
    return true;
  } catch {
    return false;
  }
}

export function validatePhone(phone: string): boolean {
  try {
    phoneSchema.parse(phone);
    return true;
  } catch {
    return false;
  }
}

export function validateUrl(url: string): boolean {
  try {
    urlSchema.parse(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .replace(/\s+/g, ' '); // Normalize whitespace
}

// Custom validation for file types
export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}

export function validateFileSize(file: File, maxSizeInMB: number): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
}

// Rate limiting validation (for future API use)
export const rateLimitSchema = z.object({
  requests: z.number().int().positive(),
  windowMs: z.number().int().positive(),
  message: z.string().optional(),
});

export type RateLimitConfig = z.infer<typeof rateLimitSchema>;