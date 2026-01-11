import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import CalendlyConsentEmbed from '../components/CalendlyConsentEmbed';

const Erstgespraech = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  return (
    <>
      <Helmet>
        <title>Kostenlose Website-Analyse – Erstgespräch buchen | Franco Cipolla</title>
        <meta
          name="description"
          content="Buche jetzt deine kostenlose Website-Analyse. Max. 2 Projekte pro Monat. Konkrete Optimierungsideen oder kostenloser Design-Prototyp."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/erstgespraech" />

        <meta property="og:title" content="Kostenlose Website-Analyse – Franco Cipolla" />
        <meta property="og:description" content="Buche jetzt dein Erstgespräch und erhalte konkrete Optimierungsideen für deine Website." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/erstgespraech" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section ref={sectionRef} className="w-full flex justify-center mt-20 px-4">
        <div className="md:py-20 py-16 max-w-[1100px] w-full">

          {/* Header */}
          <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Kostenlose Website-Analyse für dein Unternehmen
            </h1>
            <p className="text-lg text-black/70 mb-4">
              Limitierte Kapazität: <strong>max. 2 Projekte pro Monat</strong>
            </p>
            <p className="text-base text-black/60">
              Buche dir jetzt dein unverbindliches Erstgespräch.
            </p>
          </div>

          {/* Benefits */}
          <div className="contact-animate mb-10 text-center">
            <ul className="inline-block text-left space-y-3">
              <li>✔ Konkrete Optimierungsideen</li>
              <li>✔ Kostenloser Design-Prototyp</li>
              <li>✔ Kein Verkaufsdruck</li>
              <li>✔ Termindetails per E-Mail</li>
            </ul>
          </div>

          {/* Consent Calendly */}
          <div className="contact-animate">
            <CalendlyConsentEmbed />
          </div>

          {/* DSGVO */}
          <p className="contact-animate text-xs text-black/50 mt-2 text-center">
            🔒 Mehr Infos in der{' '}
            <Link to="/datenschutz" className="underline">
              Datenschutzerklärung
            </Link>
          </p>

        </div>
      </section>
    </>
  );
};

export default Erstgespraech;
