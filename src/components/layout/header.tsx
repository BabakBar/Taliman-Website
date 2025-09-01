import Link from 'next/link';
import Navigation from './navigation';
import LanguageSwitcher from './language-switcher';

interface HeaderProps {
  locale: string;
}

const Header = ({ locale }: HeaderProps) => {
  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-black px-4 py-2 rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-industrial-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-responsive">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href={`/${locale}`}
                className="flex items-center space-x-2 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-sm"
              >
                <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-bold text-xl text-industrial-900 hidden sm:block">
                  Taliman
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <Navigation locale={locale} />

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;