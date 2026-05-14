import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 text-center px-6 relative overflow-hidden" id="contact">
        <div className="absolute -top-20 -left-20 w-96 h-96 hero-gradient rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1.1] uppercase text-white"
            >
                {t('cta-t1')} <span className="text-gradient">{t('cta-t2')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto"
            >
              {t('cta-sub')}
            </motion.p>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white text-black px-12 py-4 rounded-full hover:-translate-y-1.5 hover:bg-primary hover:text-white font-bold transition-all duration-300 glow-button inline-flex shadow-lg hover:shadow-primary/40" 
              href="https://wa.me/5583999224820" 
              target="_blank"
            >
              {t('btn-quote')}
            </motion.a>
        </div>
    </section>
  );
}
