import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Erstgespraech = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.contact-animate');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  // Calendly Script nur einmal laden
  useEffect(() => {
    if (document.getElementById('calendly-script')) return; // verhindert doppelte Einbindung

    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Script bleibt im Body, wird nicht entfernt, sonst zerstört es das Widget live
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center mt-20"
    >
      <div className="md:py-20 py-16 px-6 text-black max-w-[950px] xl:max-w-[1100px] w-full">

        {/* Header */}
        <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kostenlose Website-Analyse für dein Unternehmen
          </h1>

          <p className="text-lg text-black/70 mb-4">
            Limitierte Kapazität: <strong>max. 2 Projekte pro Monat</strong>
          </p>

          <p className="text-base text-black/60 mb-6">
            Buche dir jetzt dein <strong>Strategie- & Analysegespräch</strong> in 10–15 Minuten – egal, ob du schon eine Website hast oder nicht.
          </p>
        </div>

        {/* Conversion Microcopy */}
        <div className="contact-animate mb-10 text-center max-w-2xl mx-auto">
          <ul className="inline-block text-left space-y-3 text-sm md:text-base text-black/80 mb-6">
            <li>✔ Konkrete Optimierungsideen für mehr Anfragen</li>
            <li>✔ Kostenloser Design-Prototyp, falls keine Website vorhanden</li>
            <li>✔ Entscheidungsfreiheit – nur, wenn es für beide Seiten passt</li>
            <li>✔ Alle Termindetails automatisch per E-Mail</li>
          </ul>
        </div>

        {/* Calendly Embed */}
        <div style={{ minWidth: '320px', height: '720px' }}>
        <iframe
          src="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach?embed_domain=deine-domain.de&embed_type=Inline"
          width="100%"
          height="720"
          frameBorder="0"
        />
      </div>


        {/* DSGVO Hinweis */}
        <p className="contact-animate text-xs text-black/50 mt-8 text-center max-w-md mx-auto">
          🔒 Deine Daten werden ausschließlich zur Terminvereinbarung verwendet. Mehr Infos in unserer{' '}
          <Link to="/datenschutz" className="underline hover:text-black">
            Datenschutzerklärung
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Erstgespraech;
