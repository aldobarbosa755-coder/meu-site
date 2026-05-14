import React from 'react';
import { motion } from 'motion/react';
import { Globe, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const WebAnimation = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ 
        rotate: 360,
        borderRadius: ["25%", "50%", "25%"]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-2 border-blue-500/30"
    />
    <motion.div
      animate={{ 
        rotate: -360,
        borderRadius: ["50%", "30%", "50%"]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute inset-2 border border-blue-400/20"
    />
    <Globe className="text-blue-500 relative z-10" size={28} />
  </div>
);

const BrandingAnimation = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl"
    />
    <motion.div
      animate={{ 
        rotateY: [0, 180, 360],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Palette className="text-blue-500 relative z-10" size={28} />
    </motion.div>
  </div>
);

const MobileAnimation = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      initial={{ height: "20%" }}
      animate={{ 
        height: ["20%", "80%", "20%"],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-3 w-1 bg-blue-500/30 rounded-full"
    />
    <motion.div
      initial={{ height: "80%" }}
      animate={{ 
        height: ["80%", "20%", "80%"],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-3 w-1 bg-blue-500/30 rounded-full"
    />
    <Smartphone className="text-blue-500 relative z-10" size={28} />
  </div>
);

export function Services() {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'serv-1-t', descKey: 'serv-1-d', Animation: WebAnimation },
    { titleKey: 'serv-2-t', descKey: 'serv-2-d', Animation: BrandingAnimation },
    { titleKey: 'serv-3-t', descKey: 'serv-3-d', Animation: MobileAnimation }
  ];

  return (
    <section className="py-32 bg-surface-container-lowest" id="services">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 uppercase tracking-tighter text-white">
                  {t('serv-title')}
                </h2>
                <p className="text-on-surface-variant text-lg lg:text-xl max-w-2xl mx-auto">
                  {t('serv-sub')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {services.map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className={`glass-card p-8 md:p-12 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] group transition-all duration-300 text-center md:text-left border border-white/5 hover:border-blue-500/30 shine-effect ${
                      idx === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-2xl md:mx-auto lg:max-w-none' : ''
                    }`}
                  >
                    <div className="w-16 h-16 mb-8 mx-auto md:mx-0">
                        <service.Animation />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-on-surface-variant mb-8 group-hover:text-zinc-300 transition-colors">
                      {t(service.descKey)}
                    </p>
                  </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
