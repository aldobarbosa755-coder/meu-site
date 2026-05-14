import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { LanguageProvider } from './lib/LanguageContext';
import { MicroInteractions } from './components/MicroInteractions';
import { LazyMotion, domAnimation } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-background text-on-surface">
          <MicroInteractions />
          <Navbar />
          <main>
            <Hero />
            <BentoGrid />
            <Portfolio />
            <About />
            <Services />
            <Methodology />
            <ContactCTA />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </LanguageProvider>
  );
}
