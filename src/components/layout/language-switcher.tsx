'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  currentLocale: string;
}

const LanguageSwitcher = ({ currentLocale }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  
  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
  
  const languages = [
    { code: 'fa', name: 'فارسی', label: 'Persian' },
    { code: 'en', name: 'English', label: 'English' }
  ];

  const otherLanguage = languages.find(lang => lang.code !== currentLocale);

  if (!otherLanguage) return null;

  return (
    <div className="flex items-center">
      <Link
        href={`/${otherLanguage.code}${pathWithoutLocale}`}
        className={cn(
          'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors',
          'hover:bg-industrial-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          'text-industrial-600 hover:text-industrial-900'
        )}
        aria-label={`Switch to ${otherLanguage.label}`}
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{otherLanguage.name}</span>
        <span className="sm:hidden">{otherLanguage.code.toUpperCase()}</span>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;