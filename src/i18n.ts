import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Farsi as primary locale per technical feedback
export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    // Set direction based on locale for RTL support
    dir: locale === 'fa' ? 'rtl' : 'ltr',
  };
});