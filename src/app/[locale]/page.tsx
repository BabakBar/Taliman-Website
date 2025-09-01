import { useTranslations } from 'next-intl';

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations('hero');

  return (
    <div className="min-h-screen">
      {/* Temporary content for testing */}
      <div className="container-responsive section-padding">
        <h1 className="heading-1 text-center">
          {t('title')}
        </h1>
        <p className="body-large text-center mt-6 text-industrial-600">
          {t('subtitle')}
        </p>
        <div className="flex justify-center mt-8 gap-4">
          <button className="btn-base bg-primary-600 text-white px-6 py-3 hover:bg-primary-700">
            {t('cta.primary')}
          </button>
          <button className="btn-base border border-primary-600 text-primary-600 px-6 py-3 hover:bg-primary-50">
            {t('cta.secondary')}
          </button>
        </div>
        
        {/* Debug info */}
        <div className="mt-12 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Current locale: <strong>{locale}</strong>
          </p>
          <p className="text-sm text-gray-600">
            Direction: <strong>{locale === 'fa' ? 'RTL' : 'LTR'}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}