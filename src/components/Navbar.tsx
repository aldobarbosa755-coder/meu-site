import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/LanguageContext';
import { Magnetic } from './Magnetic';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('nav-work'), href: '#work' },
    { name: t('nav-about'), href: '#about' },
    { name: t('nav-services'), href: '#services' },
    { name: t('nav-process'), href: '#process' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 mx-auto w-full z-[9999] px-6">
        <nav className="max-w-7xl mx-auto rounded-full border border-white/10 bg-[rgba(28,27,36,0.65)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex justify-between items-center px-8 py-4">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-headline tracking-tight text-white text-lg whitespace-nowrap overflow-hidden text-ellipsis group-hover:opacity-80 transition-opacity">
              <span className="font-normal">Aldo Barbosa</span> <span className="font-extrabold text-secondary">de Lima</span>
            </span>
          </a>

          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Magnetic key={link.href} strength={0.3}>
                <a
                  className="text-zinc-400 hover:text-zinc-100 transition-colors font-bold text-lg px-2 py-1"
                  href={link.href}
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 glass-panel px-2 py-1 rounded-full border-white/10">
              <button 
                onClick={() => setLanguage('pt')} 
                className={cn("text-[10px] font-bold px-2 py-1 rounded-full transition-all", language === 'pt' ? "bg-primary/20 text-primary" : "text-zinc-500")}
              >PT</button>
              <span className="text-white/20 text-[10px]">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={cn("text-[10px] font-bold px-2 py-1 rounded-full transition-all", language === 'en' ? "bg-primary/20 text-primary" : "text-zinc-500")}
              >EN</button>
            </div>
            <Magnetic strength={0.2}>
              <a 
                className="hidden lg:block bg-primary-container text-white px-6 py-2 rounded-full font-bold glow-button" 
                href="https://wa.me/5583999224820" 
                target="_blank"
              >
                {t('btn-build')}
              </a>
            </Magnetic>
            <button 
              className="lg:hidden text-white p-2 flex items-center justify-center font-bold" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-[99998] transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div 
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-[#1a1919] border-l border-white/10 p-12 z-[99999] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-8 right-8 text-zinc-400"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <span className="font-headline tracking-tight text-white text-lg whitespace-nowrap">
          <span className="font-normal">Aldo Barbosa</span> <span className="font-extrabold text-secondary">de Lima</span>
        </span>

        <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full border-white/10 mb-4">
          <button 
            onClick={() => setLanguage('pt')} 
            className={cn("text-xs font-bold px-3 py-1 rounded-full transition-all", language === 'pt' ? "bg-primary/20 text-primary" : "text-zinc-500")}
          >Português</button>
          <span className="text-white/20">|</span>
          <button 
            onClick={() => setLanguage('en')} 
            className={cn("text-xs font-bold px-3 py-1 rounded-full transition-all", language === 'en' ? "bg-primary/20 text-primary" : "text-zinc-500")}
          >English</button>
        </div>

        <div className="flex flex-col items-center gap-2 w-full font-bold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-zinc-300 hover:text-white py-3 text-xl font-bold text-center w-full"
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a 
          className="text-white py-4 font-bold text-center w-full border-t border-white/5 mt-4" 
          href="https://wa.me/5583999224820" 
          target="_blank"
        >
          {t('btn-build')}
        </a>
      </div>
    </>
  );
}
