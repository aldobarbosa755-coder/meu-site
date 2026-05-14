import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { cn } from '../lib/utils';

export function BentoGrid() {
  const { t } = useLanguage();

  const features = [
    { 
      id: 1, 
      titleKey: 'bento-1-t', 
      descKey: 'bento-1-d', 
      animation: (
        <div className="relative w-full h-24 overflow-hidden mb-6 rounded-xl bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors flex items-end px-8 pb-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
            <motion.path
              d="M0 40 L20 35 L40 38 L60 20 L80 25 L100 5"
              fill="none"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.path
              d="M0 40 L20 35 L40 38 L60 20 L80 25 L100 5"
              fill="none"
              stroke="rgba(59, 130, 246, 1)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            />
            {[10, 30, 50, 70, 90].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={40 - (i * 8)}
                r="1.5"
                fill="#3b82f6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 1] }}
                transition={{ delay: i * 0.4, duration: 2, repeat: Infinity }}
              />
            ))}
          </svg>
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-blue-500/20 blur-3xl -z-10"
          />
        </div>
      ), 
      large: true 
    },
    { 
      id: 2, 
      titleKey: 'bento-2-t', 
      descKey: 'bento-2-d', 
      animation: (
        <div className="w-16 h-16 mb-6 relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-4 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/40"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </motion.div>
        </div>
      )
    },
    { 
      id: 3, 
      titleKey: 'bento-3-t', 
      descKey: 'bento-3-d', 
      animation: (
        <div className="w-24 h-16 mb-6 flex justify-center items-end gap-1.5 px-4 shadow-[0_0_20px_rgba(59,130,246,0.1)] rounded-lg">
          {[0, 1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              animate={{ height: [12, 36, 18, 42, 20] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.25 }}
              className="w-2 bg-blue-500/50 rounded-full"
            />
          ))}
        </div>
      )
    },
    { 
      id: 4, 
      titleKey: 'bento-4-t', 
      descKey: 'bento-4-d', 
      animation: (
        <div className="w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ x: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-14 h-1.5 bg-blue-500/10 rounded-full relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: [-10, 50, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-6 h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          </motion.div>
        </div>
      )
    },
    { 
      id: 5, 
      titleKey: 'bento-5-t', 
      descKey: 'bento-5-d', 
      animation: (
        <div className="w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [0.85, 1.1, 0.85], rotate: [0, 90, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="w-12 h-12 border-2 border-blue-500/40 rounded-full relative"
          >
            <motion.div 
               animate={{ opacity: [0.2, 0.8, 0.2] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]" 
            />
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6" id="process">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 uppercase tracking-tighter text-white"
        >
          {t('bento-title')}
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-blue-500 rounded-full mx-auto"
        ></motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "group glass-card p-8 rounded-3xl flex flex-col items-center md:items-start text-center md:text-left shine-effect",
              feature.large ? "md:col-span-2 lg:col-span-2 min-h-[320px]" : "min-h-[280px]"
            )}
          >
            {feature.animation}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{t(feature.titleKey)}</h3>
            <p className={cn("text-on-surface-variant text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors", feature.large ? "max-w-md" : "")}>
              {t(feature.descKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
