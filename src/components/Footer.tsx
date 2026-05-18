import React from 'react';
import { Facebook, Briefcase } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { Magnetic } from './Magnetic';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-zinc-900 w-full">
        <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-2">
                    <span className="font-headline tracking-tight text-white mb-8 block text-2xl">
                        <span className="font-normal">Aldo Barbosa</span> <span className="font-extrabold">de Lima</span>
                    </span>
                    <p className="text-zinc-500 max-w-xs text-sm leading-relaxed mb-8">
                      {t('footer-desc')}
                    </p>
                    <div className="flex gap-4">
                        <Magnetic strength={0.3}>
                            <a 
                              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-500 hover:text-primary transition-colors hover:bg-white/5" 
                              href="https://www.facebook.com/profile.php?id=61585485532109" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                <Facebook size={18} />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.3}>
                            <a 
                              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-500 hover:text-[#14a800] transition-colors hover:bg-white/5" 
                              href="https://www.upwork.com/freelancers/~01c25124eaa22b08c2" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              title="Upwork"
                            >
                                <Briefcase size={18} />
                            </a>
                        </Magnetic>
                    </div>
                </div>
                <div>
                    <h3 className="text-zinc-100 font-bold mb-6 font-label uppercase tracking-widest text-xs">{t('footer-menu')}</h3>
                    <ul className="space-y-4">
                        <li><a className="text-zinc-500 hover:text-blue-400 transition-colors text-sm" href="#">{t('footer-home')}</a></li>
                        <li><a className="text-zinc-500 hover:text-blue-400 transition-colors text-sm" href="#work">{t('nav-work')}</a></li>
                        <li><a className="text-zinc-500 hover:text-blue-400 transition-colors text-sm" href="#about">{t('nav-about')}</a></li>
                        <li><a className="text-zinc-500 hover:text-blue-400 transition-colors text-sm" href="#services">{t('nav-services')}</a></li>
                        <li><a className="text-zinc-500 hover:text-blue-400 transition-colors text-sm" href="#process">{t('nav-process')}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-zinc-100 font-bold mb-6 font-label uppercase tracking-widest text-xs">{t('footer-contact')}</h3>
                    <p className="text-zinc-500 text-sm mb-2">Brasil · Disponível Globalmente</p>
                    <a href="mailto:aldobarbosa755@gmail.com" className="text-zinc-500 hover:text-blue-400 transition-colors text-sm block">
                        aldobarbosa755@gmail.com
                    </a>
                </div>
            </div>
            <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                <p className="text-zinc-500 text-xs"><span>{t('footer-copy')}</span></p>
                <p className="text-zinc-500 text-xs italic">Crafted with precision.</p>
            </div>
        </div>
    </footer>
  );
}
