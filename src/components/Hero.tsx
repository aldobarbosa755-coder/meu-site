import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Magnetic } from './Magnetic';

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative min-h-screen pt-20 pb-10 overflow-hidden flex flex-col items-center justify-center text-center px-6" id="home">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-blue-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold leading-none">
            {t('hero-tag')}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-gradient font-headline max-w-4xl leading-[1.3] pb-4 relative group"
        >
          {t('hero-title')}
          <motion.span 
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-medium"
        >
          {t('hero-sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Magnetic strength={0.3}>
            <a 
              href="https://wa.me/5583999224820"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-12 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:-translate-y-1 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/40 glow-button uppercase tracking-tight"
            >
              {t('btn-quote')}
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </header>
  );
}
