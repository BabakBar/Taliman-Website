import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Farsi as default locale for Persian market focus
  defaultLocale: 'fa',

  // Always use a locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fa|en)/:path*']
};