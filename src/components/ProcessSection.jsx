import React, { useRef, useEffect } from 'react';
import { FaSearch, FaDraftingCompass, FaCode, FaRocket, FaTools } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from './CTA1';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      icon: <FaSearch className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Briefing & Strategie',
      description:
        'Ich verstehe Ihr Business, Ihre Zielgruppe und Ihre Ziele. Ergebnis: Klarer Plan für Ihre Website.',
    },
    {
      icon: <FaDraftingCompass className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Design & Struktur',
      description:
        'Mockups, Seitenstruktur und Conversion-optimiertes Layout. Alles auf Ihre Zielgruppe abgestimmt.',
    },
    {
      icon: <FaCode className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Entwicklung & Optimierung',
      description:
        'WordPress + Bricks Builder → responsive & schnell. SEO, Ladezeiten & Conversion-Optimierung integriert.',
    },
    {
      icon: <FaRocket className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Launch & Kontrolle',
      description:
        'Wir gehen live, stellen Analytics & Lead-Tracking ein. Sie sehen sofort, wie Besucher zu Kunden werden.',
    },
    {
      icon: <FaTools className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Wartung & Anpassung',
      description:
        'Optionale monatliche Optimierungen, Sicherheitsupdates, kleine Änderungen. Flexibel, ohne Vertragsbindung.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 my-20 px-4 md:px-6 bg-gradient-to-b from-[#f8fafc] to-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#001D3D] mb-4">
          Ihr Weg zur planbaren Kunden-Website
        </h2>
        <p className="text-lg md:text-xl text-[#000814]/80 max-w-3xl mx-auto">
          Transparenter Prozess – von der ersten Idee bis zur live geschalteten Website
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-8 max-w-7xl mx-auto mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{step.title}</h3>
            <p className="text-[#000814]/80 text-sm md:text-base">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTA1 />
        <p className="text-[13px] text-[#000814]/60 mt-3">
          Kostenloses Erstgespräch – unverbindlich & ohne Risiko
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
