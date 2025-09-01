import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  return (
    <div>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />

      <section id="contact" className="section-padding bg-industrial-50">
        <div className="container-responsive">
          <h2 className="heading-2 text-center mb-8">Contact Us</h2>
          <p className="body-large text-center text-industrial-600 max-w-3xl mx-auto">
            Get in touch to discuss your CHQ wire processing requirements.
          </p>
        </div>
      </section>
    </div>
  );
}