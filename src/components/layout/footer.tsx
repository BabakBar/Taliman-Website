import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  locale: string;
}

const Footer = ({ locale }: FooterProps) => {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-900 text-white">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl">Taliman</span>
            </div>
            <p className="text-industrial-300 mb-6 max-w-md">
              {t('description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-industrial-300">
                <MapPin size={16} />
                <span className="text-sm">{tContact('info.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-industrial-300">
                <Phone size={16} />
                <span className="text-sm">+98-21-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-industrial-300">
                <Mail size={16} />
                <span className="text-sm">info@taliman.ir</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                href={`/${locale}#about`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link 
                href={`/${locale}/processes`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                Processes
              </Link>
              <Link 
                href={`/${locale}/equipment`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                Equipment
              </Link>
              <Link 
                href={`/${locale}/quality`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                Quality
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <nav className="space-y-2">
              <Link 
                href={`/${locale}/privacy`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                {t('links.privacy')}
              </Link>
              <Link 
                href={`/${locale}/terms`} 
                className="block text-industrial-300 hover:text-white transition-colors text-sm"
              >
                {t('links.terms')}
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-industrial-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-industrial-400 text-sm">
              {t('copyright').replace('2024', currentYear.toString())}
            </p>
            <p className="text-industrial-500 text-xs">
              {tContact('info.hours')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;