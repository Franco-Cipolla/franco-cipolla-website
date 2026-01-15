import React, { useRef, useEffect } from 'react';
import { FaSearch, FaDraftingCompass, FaCode, FaRocket, FaTools } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from '../CTA1';

gsap.registerPlugin(ScrollTrigger);

const HagenProcessSection = () => {
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
        'Ich analysiere Ihr Business, Ihre Zielgruppe in Hagen & Umgebung und Ihre Ziele. Ergebnis: ein klarer Fahrplan für eine Website, die Kundenanfragen liefert.',
    },
    {
      icon: <FaDraftingCompass className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Design & Struktur',
      description:
        'Individuelles Design und klare Seitenstruktur, die Besucher gezielt zur Anfrage führt. Alles exakt auf Ihre lokale Zielgruppe abgestimmt.',
    },
    {
      icon: <FaCode className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Entwicklung & Optimierung',
      description:
        'Schnelle, responsive Website, SEO-optimiert für lokale Suchanfragen und Conversion-fokussiert – damit Interessenten zu Kunden werden.',
    },
    {
      icon: <FaRocket className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Launch & Kontrolle',
      description:
        'Ich schalte live, richte Besuchertracking ein und Sie sehen jederzeit, wie Ihre Website Anfragen generiert – messbar & planbar.',
    },
    {
      icon: <FaTools className="text-[#00A6FB] w-6 h-6 md:w-8 md:h-8" />,
      title: 'Wartung & Anpassung',
      description:
        'Optional: monatliche Optimierungen, Updates und kleine Anpassungen – flexibel, monatlich kündbar, damit Ihre Website dauerhaft performt.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 my-20 px-4 md:px-6 bg-gradient-to-b from-[#f8fafc] to-white"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ihr Weg zu planbaren Kundenanfragen in Hagen
        </h2>
        <p className="text-lg text-[#000814]/80 max-w-3xl mx-auto">
          Mein klarer Prozess verwandelt Ihre Website in ein Vertriebssystem, das Interessenten gezielt in Anfragen aus Hagen & Umgebung führt.
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

export default HagenProcessSection;
