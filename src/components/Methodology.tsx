import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function Methodology() {
  const { t } = useLanguage();

  const steps = [
    { title: 'meth-1-t', desc: 'meth-1-d' },
    { title: 'meth-2-t', desc: 'meth-2-d' },
    { title: 'meth-3-t', desc: 'meth-3-d' },
    { title: 'meth-4-t', desc: 'meth-4-d' }
  ];

  return (
    <section className="py-32 max-w-6xl mx-auto px-6" id="process">
      <div className="mb-24 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 uppercase tracking-tighter text-white"
        >
          {t('meth-title')}
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-blue-500 origin-left mx-auto md:mx-0"
        ></motion.div>
      </div>

      <div className="flex flex-col">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group py-12 md:py-20 border-b border-white/5 last:border-0 relative"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-2xl md:text-3xl font-mono text-blue-500/40 group-hover:text-blue-500 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-blue-400 transition-all duration-500 tracking-tight leading-[1.1]">
                  {t(step.title)}
                </h3>
              </div>

              <div className="md:pt-14">
                <p className="text-on-surface-variant text-base md:text-lg lg:text-xl leading-relaxed group-hover:text-white transition-colors duration-300">
                  {t(step.desc)}
                </p>
              </div>
            </div>

            {/* Accent light effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
