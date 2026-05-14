import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav-work": "Trabalhos",
    "nav-services": "Serviços",
    "nav-process": "Processo",
    "nav-about": "Sobre",
    "btn-build": "Vamos Construir",
    "hero-tag": "Elevando padrões digitais para fundadores",
    "hero-title": "Sua Visão, Nossa Realidade Digital.",
    "hero-sub": "Construa uma presença online impecável com sites modernos, responsivos e focados em resultados. Design exclusivo que converte visitantes em clientes.",
    "btn-quote": "Solicite um orçamento",
    "bento-title": "Por Que Me Escolher?",
    "bento-1-t": "Estratégia de Conversão",
    "bento-1-d": "Design orientado a resultados, garantindo que a sua presença digital se traduza em crescimento real para o negócio.",
    "bento-2-t": "Identidade Exclusiva",
    "bento-2-d": "Cada projeto é único. Não utilizamos modelos pré-definidos. A sua marca merece uma identidade visual exclusiva e autêntica.",
    "bento-3-t": "Experiência Fluida",
    "bento-3-d": "Navegação impecável em smartphones, tablets e computadores de todos os tamanhos, com foco na usabilidade.",
    "bento-4-t": "Acompanhamento",
    "bento-4-d": "Comunicação transparente e ágil durante todo o processo criativo e técnico do projeto.",
    "bento-5-t": "Otimização SEO",
    "bento-5-d": "Estrutura técnica otimizada de raiz para garantir que a sua marca seja encontrada pelo Google com facilidade.",
    "port-title": "Portfólio",
    "port-sub": "Sites desenvolvidos com código próprio, do zero ao lançamento. Navegue por cada projeto e explore ao vivo.",
    "proj-1-tag": "Imobiliário · Portugal",
    "proj-1-t": "Imobiliária Luzitana",
    "proj-1-d": "Landing page de alto padrão para agência imobiliária portuguesa. Galeria de propriedades, formulário integrado e copywriting focado em conversão.",
    "proj-1-f1": "Design de luxo responsivo",
    "proj-1-f2": "Galeria interativa de imóveis",
    "btn-live": "Ver Projeto ao Vivo",
    "proj-2-tag": "Serviços Financeiros · Institucional",
    "proj-2-t": "Sovereign",
    "proj-2-d": "Site institucional para empresa de serviços financeiros. Comunicação de autoridade e credibilidade para atrair investidores de alto perfil.",
    "proj-2-f1": "Identidade visual sóbria e premium",
    "proj-2-f2": "Performance e código limpo",
    "proj-3-tag": "Beleza & Estética · Luxury",
    "proj-3-t": "Lumière",
    "proj-3-d": "Site para marca de beleza e estética de luxo. Estética visual sofisticada com animações suaves e foco na experiência sensorial.",
    "proj-3-f1": "Design elegante e imersivo",
    "proj-3-f2": "Animações e transições suaves",
    "proj-4-tag": "Gaming & UI · Creative",
    "proj-4-t": "Cyberpunk 2077",
    "proj-4-d": "Página temática inspirada em Cyberpunk 2077. Interface futurista com estética neon, interações dinâmicas e design imersivo de alta performance.",
    "proj-4-f1": "Estética Glitch e Neon",
    "proj-4-f2": "Performance Extrema",
    "about-tag": "Expert em Design.",
    "about-title": "Olá, sou Aldo Barbosa de Lima.",
    "about-p1": "Ajudo empresas a destacar-se num mercado saturado através de experiências digitais de luxo. A minha missão é fundir estética apurada com funcionalidade robusta.",
    "about-p2": "Com foco no mercado de Portugal e internacional, desenvolvo interfaces que não só atraem olhares, mas que constroem confiança e autoridade para a sua marca.",
    "about-stat-1": "Anos de Experiência",
    "about-stat-2": "Projetos Entregues",
    "serv-title": "Meus Serviços",
    "serv-sub": "Soluções digitais end-to-end para marcas que não aceitam o comum.",
    "serv-1-t": "Landing Pages",
    "serv-1-d": "Desenvolvimento focado em persuasão e captação de clientes para o mercado internacional.",
    "serv-2-t": "Redesign de Elite",
    "serv-2-d": "Transformamos o seu site antigo numa plataforma moderna que reflete a qualidade do seu serviço.",
    "serv-3-t": "Design Mobile-First",
    "serv-3-d": "Garantia total de que o seu negócio está acessível e belo em qualquer dispositivo móvel.",
    "meth-title": "Metodologia",
    "meth-1-t": "01. Estratégia de Nicho",
    "meth-1-d": "Análise profunda do seu ecossistema de mercado para definir a abordagem visual que maximiza a sua autoridade.",
    "meth-2-t": "02. Arquitetura Híbrida",
    "meth-2-d": "Uso de ferramentas de inteligência computacional para otimização lógica e estrutural, refinadas por um design exclusivo feito à mão.",
    "meth-3-t": "03. Engenharia Full Code",
    "meth-3-d": "Codificação proprietária e manual. Sem templates ou limites técnicos, garantindo 100% de otimização e velocidade.",
    "meth-4-t": "04. Deploy de Alta Performance",
    "meth-4-d": "Entrega via infraestrutura cloud otimizada para notas máximas no Google PageSpeed e Core Web Vitals.",
    "cta-t1": "Vamos criar algo",
    "cta-t2": "extraordinário?",
    "cta-sub": "Pronto para elevar o nível da sua marca? Entre em contacto agora e vamos discutir o seu próximo grande projeto.",
    "contact-title": "Vamos Conversar",
    "contact-sub": "Transforme sua ideia em um produto digital de elite.",
    "contact-btn": "Enviar Mensagem",
    "footer-desc": "Design e Desenvolvimento de interfaces premium que conectam marcas globais e pessoas através de tecnologia de ponta.",
    "footer-menu": "Menu",
    "footer-home": "Início",
    "footer-contact": "Contacto",
    "footer-copy": "© 2026 Aldo Barbosa de Lima. Todos os direitos reservados."
  },
  en: {
    "nav-work": "Work",
    "nav-services": "Services",
    "nav-process": "Process",
    "nav-about": "About",
    "btn-build": "Let's Build",
    "hero-tag": "Elevating digital standards for founders",
    "hero-title": "Your Vision, Our Digital Reality.",
    "hero-sub": "Build an impeccable online presence with modern, responsive, and result-oriented websites. Exclusive design that converts visitors into customers.",
    "btn-quote": "Request a quote",
    "bento-title": "Why Choose Me?",
    "bento-1-t": "Conversion Strategy",
    "bento-1-d": "Result-oriented design, ensuring that your digital presence translates into real business growth.",
    "bento-2-t": "Exclusive Identity",
    "bento-2-d": "Each project is unique. We don't use pre-defined templates. Your brand deserves an exclusive and authentic visual identity.",
    "bento-3-t": "Fluid Experience",
    "bento-3-d": "Impeccable navigation on smartphones, tablets, and computers of all sizes, with a focus on usability.",
    "bento-4-t": "Follow-up",
    "bento-4-d": "Transparent and agile communication throughout the entire creative and technical process of the project.",
    "bento-5-t": "SEO Optimization",
    "bento-5-d": "Optimized technical structure from the ground up to ensure your brand is easily found by Google.",
    "port-title": "Portfolio",
    "port-sub": "Sites developed with custom code, from scratch to launch. Browse each project and explore live.",
    "proj-1-tag": "Real Estate · Portugal",
    "proj-1-t": "Luzitana Real Estate",
    "proj-1-d": "High-end landing page for a Portuguese real estate agency. Property gallery, integrated form, and conversion-focused copywriting.",
    "proj-1-f1": "Responsive luxury design",
    "proj-1-f2": "Interactive property gallery",
    "btn-live": "View Project Live",
    "proj-2-tag": "Financial Services · Institutional",
    "proj-2-t": "Sovereign",
    "proj-2-d": "Institutional site for a financial services company. Communication of authority and credibility to attract high-profile investors.",
    "proj-2-f1": "Sober and premium visual identity",
    "proj-2-f2": "Performance and clean code",
    "proj-3-tag": "Beauty & Aesthetics · Luxury",
    "proj-3-t": "Lumière",
    "proj-3-d": "Site for a luxury beauty and aesthetics brand. Sophisticated visual aesthetics with smooth animations and a focus on sensory experience.",
    "proj-3-f1": "Elegant and immersive design",
    "proj-3-f2": "Smooth animations and transitions",
    "proj-4-tag": "Gaming & UI · Creative",
    "proj-4-t": "Cyberpunk 2077",
    "proj-4-d": "Thematic page inspired by Cyberpunk 2077. Futuristic interface with neon aesthetics, dynamic interactions, and high-performance immersive design.",
    "proj-4-f1": "Glitch and Neon Aesthetics",
    "proj-4-f2": "Extreme Performance",
    "about-tag": "Design Expert.",
    "about-title": "Hello, I'm Aldo Barbosa de Lima.",
    "about-p1": "I help companies stand out in a saturated market through luxury digital experiences. My mission is to merge refined aesthetics with robust functionality.",
    "about-p2": "Focusing on the Portuguese and international market, I develop interfaces that not only attract eyes but build trust and authority for your brand.",
    "about-stat-1": "Years of Experience",
    "about-stat-2": "Projects Delivered",
    "serv-title": "My Services",
    "serv-sub": "End-to-end digital solutions for brands that don't accept the ordinary.",
    "serv-1-t": "Landing Pages",
    "serv-1-d": "Development focused on persuasion and customer acquisition for the international market.",
    "serv-2-t": "Elite Redesign",
    "serv-2-d": "We transform your old site into a modern platform that reflects the quality of your service.",
    "serv-3-t": "Mobile-First Design",
    "serv-3-d": "Total guarantee that your business is accessible and beautiful on any mobile device.",
    "meth-title": "Methodology",
    "meth-1-t": "01. Niche Strategy",
    "meth-1-d": "Deep analysis of your market ecosystem to define the visual approach that maximizes your authority.",
    "meth-2-t": "02. Hybrid Architecture",
    "meth-2-d": "Using computational intelligence tools for logical and structural optimization, refined by exclusive hand-crafted design.",
    "meth-3-t": "03. Full Code Engineering",
    "meth-3-d": "Proprietary and manual coding. No templates or technical limits, ensuring 100% optimization and speed.",
    "meth-4-t": "04. High Performance Deploy",
    "meth-4-d": "Delivery via optimized cloud infrastructure for maximum Google PageSpeed and Core Web Vitals scores.",
    "cta-t1": "Let's create something",
    "cta-t2": "extraordinário?",
    "cta-sub": "Ready to take your brand to the next level? Get in touch now and let's discuss your next big project.",
    "contact-title": "Let's Talk",
    "contact-sub": "Turn your idea into an elite digital product.",
    "contact-btn": "Send Message",
    "footer-desc": "Design and Development of premium interfaces that connect global brands and people through cutting-edge technology.",
    "footer-menu": "Menu",
    "footer-home": "Home",
    "footer-contact": "Contact",
    "footer-copy": "© 2026 Aldo Barbosa de Lima. All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-lang');
    return (saved as Language) || 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
