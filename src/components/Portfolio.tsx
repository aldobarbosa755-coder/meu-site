import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { cn } from '../lib/utils';
import { Magnetic } from './Magnetic';

export function Portfolio() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 4,
      tag: t('proj-4-tag'),
      title: t('proj-4-t'),
      description: t('proj-4-d'),
      features: [t('proj-4-f1'), t('proj-4-f2')],
      url: "https://cyberpunk.aldolima.dev.br/",
      iframe: "https://cyberpunk.aldolima.dev.br/",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 1,
      tag: t('proj-1-tag'),
      title: t('proj-1-t'),
      description: t('proj-1-d'),
      features: [t('proj-1-f1'), t('proj-1-f2')],
      url: "https://imobiliaria.aldolima.dev.br/",
      iframe: "https://imobiliaria.aldolima.dev.br/",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      tag: t('proj-2-tag'),
      title: t('proj-2-t'),
      description: t('proj-2-d'),
      features: [t('proj-2-f1'), t('proj-2-f2')],
      url: "https://sovereign.aldolima.dev.br/",
      iframe: "https://sovereign.aldolima.dev.br/",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      tag: t('proj-3-tag'),
      title: t('proj-3-t'),
      description: t('proj-3-d'),
      features: [t('proj-3-f1'), t('proj-3-f2')],
      url: "https://lumiere.aldolima.dev.br/",
      iframe: "https://lumiere.aldolima.dev.br/",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // Perspective Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseXPct = (touch.clientX - rect.left) / rect.width - 0.5;
    const mouseYPct = (touch.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXPct = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 overflow-hidden" id="work">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 uppercase tracking-tighter text-white">
          {t('port-title')}
        </h2>
        <p className="text-on-surface-variant text-base lg:text-lg max-w-2xl mx-auto">
          {t('port-sub')}
        </p>
      </div>

      {/* MOBILE & TABLET: Vertical Stack of interactive cards */}
      <div className="flex flex-col gap-24 lg:hidden">
        {projects.map((project) => (
          <MobileProjectCard key={project.id} project={project} t={t} />
        ))}
      </div>

      {/* DESKTOP: Horizontal Slider */}
      <div className="hidden lg:block relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-full flex-shrink-0 flex flex-col items-center gap-14 px-6 md:px-0">
              <motion.div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="w-full max-w-5xl"
              >
                <div 
                  style={{ transform: "translateZ(50px)" }}
                  className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#00ffff]/40 shadow-[0_0_50px_rgba(0,255,255,0.15)] group md:cursor-none md:hover:scale-[1.02] transition-transform duration-500 shine-effect"
                >
                  <iframe 
                    src={project.iframe} 
                    title={project.title} 
                    loading="lazy"
                    className="w-full h-full lg:w-[160%] lg:h-[160%] transform lg:scale-[0.625] origin-top-left pointer-events-none border-none lg:group-hover:scale-[0.63] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                </div>
              </motion.div>
              
              <div className="flex flex-col items-center text-center gap-8 max-w-3xl px-4 pb-8">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    {project.tag}
                  </span>
                </motion.span>
                <h3 className="text-2xl md:text-5xl font-extrabold font-headline tracking-tighter text-white">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-col gap-2 text-sm md:text-base text-on-surface/80">
                  {project.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 justify-center"
                    >
                      <CheckCircle size={14} className="text-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Magnetic strength={0.4}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      className="hero-gradient text-white px-12 py-4 rounded-full hover:-translate-y-1 transition-all duration-300 shadow-lg glow-button font-bold inline-flex"
                    >
                      {t('btn-live')}
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-8 mt-12 md:mt-16">
          <Magnetic strength={0.6}>
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:bg-white/10"
            >
              <ChevronLeft size={24} />
            </button>
          </Magnetic>
          
          <div className="flex gap-2 md:gap-3">
            {projects.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  i === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/20"
                )}
              />
            ))}
          </div>

          <Magnetic strength={0.6}>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:bg-white/10"
            >
              <ChevronRight size={24} />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function MobileProjectCard({ project, t }: { project: any, t: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseXPct = (touch.clientX - rect.left) / rect.width - 0.5;
    const mouseYPct = (touch.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col gap-10 md:gap-14 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0"
    >
      <motion.div 
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full perspective-1000"
      >
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-[#00ffff]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-zinc-900 shine-effect"
        >
          <div className="w-full h-full pointer-events-none">
            <iframe 
              src={project.iframe} 
              title={project.title} 
              loading="lazy"
              className="w-[300%] h-[300%] md:w-[180%] md:h-[180%] transform scale-[0.3333] md:scale-[0.5555] origin-top-left border-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
            <span className="text-secondary text-[10px] md:text-xs font-label uppercase tracking-[0.2em] mb-2 md:mb-4 font-bold bg-white/5 w-fit px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10 backdrop-blur-md">
              {project.tag}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-headline tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>
      
      <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-0 text-center items-center">
        <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {project.features.map((feature: string, i: number) => (
            <span key={i} className="text-[10px] md:text-xs px-3 py-1 md:px-4 md:py-1.5 rounded-full glass-panel border-white/5 text-zinc-400 font-medium whitespace-nowrap">
              {feature}
            </span>
          ))}
        </div>
        <a 
          href={project.url} 
          target="_blank" 
          className="w-full md:w-auto md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-black font-bold md:text-lg text-center flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform shadow-xl"
        >
          {t('btn-live')}
        </a>
      </div>
    </motion.div>
  );
}
