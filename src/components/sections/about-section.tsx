'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AboutSectionProps {
  locale: string;
}

const AboutSection = ({ locale }: AboutSectionProps) => {
  const t = useTranslations('about');

  const features = [
    {
      icon: Award,
      title: 'ISO 9001 Certified',
      description: 'Quality management system certification ensuring consistent product excellence',
    },
    {
      icon: Users,
      title: '15+ Years Experience',
      description: 'Decades of expertise in CHQ wire processing for automotive industry',
    },
    {
      icon: Target,
      title: '99% Quality Standard',
      description: 'Rigorous testing and quality control processes for every batch',
    },
    {
      icon: Zap,
      title: '24/7 Production',
      description: 'Continuous production capabilities to meet demanding schedules',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
              >
                About Taliman
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="heading-2 text-industrial-900 mb-6"
              >
                Leading CHQ Wire Processing Specialists
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="body-large text-industrial-600 mb-8"
              >
                Taliman Sakhtehaye Felezi Kara has been at the forefront of CHQ wire processing 
                technology, serving the automotive fastener industry with uncompromising quality 
                and precision. Our state-of-the-art facilities and expert team ensure every 
                product meets the highest international standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <p className="text-industrial-700">
                    Advanced CHQ wire processing equipment with precision control systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <p className="text-industrial-700">
                    Comprehensive quality testing at every stage of production
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <p className="text-industrial-700">
                    Dedicated technical support and custom solution development
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-medium transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-industrial-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-industrial-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-industrial-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-industrial-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-industrial-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-industrial-600">Automotive Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-industrial-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;