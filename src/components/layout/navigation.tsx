'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  locale: string;
}

const Navigation = ({ locale }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const t = useTranslations('nav');
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { key: 'home', href: `/${locale}`, label: t('home') },
    { key: 'about', href: `/${locale}#about`, label: t('about') },
    { key: 'processes', href: `/${locale}/processes`, label: t('processes') },
    { key: 'equipment', href: `/${locale}/equipment`, label: t('equipment') },
    { key: 'quality', href: `/${locale}/quality`, label: t('quality') },
  ];

  // Handle mounting for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isHomePage = pathname === `/${locale}`;

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <nav className="relative" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary-600',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-sm px-1 py-1',
              pathname === item.href ? 'text-primary-600' : 'text-industrial-700'
            )}
          >
            {item.label}
          </Link>
        ))}
        
        {/* Desktop Contact CTA */}
        <Link href={`/${locale}#contact`}>
          <Button size="sm">
            {t('contact')}
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3">
        {/* Mobile Contact CTA - Always Visible */}
        <Link href={`/${locale}#contact`}>
          <Button size="sm" variant="outline" className="text-xs px-3 py-2">
            {t('contact')}
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex items-center gap-2 p-2 rounded-md transition-colors',
            'hover:bg-industrial-100 focus:outline-none focus:ring-2 focus:ring-primary-500',
            'text-industrial-700'
          )}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-sm font-medium">
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className={cn(
            'absolute top-full right-0 left-0 mt-2 md:hidden',
            'bg-white border border-industrial-200 rounded-lg shadow-large',
            'z-50 py-2'
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                'block px-4 py-3 text-sm font-medium transition-colors',
                'hover:bg-industrial-50 focus:outline-none focus:bg-industrial-50',
                pathname === item.href ? 'text-primary-600 bg-primary-50' : 'text-industrial-700'
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Contact Link in Mobile Menu */}
          <div className="border-t border-industrial-200 mt-2 pt-2">
            <Link
              href={`/${locale}#contact`}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 focus:outline-none focus:bg-primary-50"
            >
              {t('contact')} →
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;