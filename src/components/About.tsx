import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Magnetic } from './Magnetic';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-6" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1 group md:max-w-xl md:mx-auto lg:max-w-none"
        >
          <div className="absolute inset-0 hero-gradient blur-[100px] opacity-20 group-hover:opacity-50 transition-all duration-700 -z-10 scale-100 group-hover:scale-125"></div>
          <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]">
            <img 
              alt="Aldo Barbosa de Lima Portrait" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
              src="https://i.ibb.co/G4Y4D53R/profile-aldo-jpg.webp" 
              loading="lazy"
              width="600"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>
        
        <div className="order-1 lg:order-2 text-center lg:text-left md:max-w-2xl md:mx-auto lg:max-0">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase mb-4 md:mb-6 text-xs md:text-sm"
            >
              {t('about-tag')}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-6 md:mb-8 text-white leading-tight"
            >
              {t('about-title')}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-on-surface-variant mb-6 leading-relaxed"
            >
              {t('about-p1')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed"
            >
              {t('about-p2')}
            </motion.p>
            
            <div className="flex gap-8 md:gap-10 justify-center lg:justify-start">
                <Magnetic strength={0.2}>
                  <div className="flex flex-col items-center lg:items-start group/stat cursor-default">
                      <span className="text-3xl md:text-4xl font-bold text-on-surface group-hover/stat:text-blue-400 transition-colors">3+</span>
                      <span className="text-[10px] md:text-xs text-on-surface-variant font-label uppercase tracking-widest whitespace-nowrap">{t('about-stat-1')}</span>
                  </div>
                </Magnetic>
                <div className="w-px h-10 md:h-12 bg-white/10"></div>
                <Magnetic strength={0.2}>
                  <div className="flex flex-col items-center lg:items-start group/stat cursor-default">
                      <span className="text-3xl md:text-4xl font-bold text-on-surface group-hover/stat:text-blue-400 transition-colors">30+</span>
                      <span className="text-[10px] md:text-xs text-on-surface-variant font-label uppercase tracking-widest whitespace-nowrap">{t('about-stat-2')}</span>
                  </div>
                </Magnetic>
            </div>
        </div>
      </div>
    </section>
  );
}
