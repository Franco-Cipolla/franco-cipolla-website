import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { InlineWidget } from "react-calendly";
import SEOJsonLD from '../components/SEOJsonLD';
import CheckIcon from '../components/CheckIcon';

const CalendlyConsentEmbed = ({ enabled, setEnabled }) => {
  if (!enabled) {
    return (
      <div className="border p-6 text-center bg-gray-50">
        <p className="mb-8">
          Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.
        </p>

        <button
          onClick={() => setEnabled(true)}
          aria-pressed={enabled}
          className="bg-[#003566] cursor-pointer hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold"
        >
          Terminbuchung aktivieren
        </button>

        <p className="text-sm text-gray-500 mt-3">
          Dabei können Cookies gesetzt und Daten an Drittanbieter übertragen werden.
        </p>
      </div>
    );
  }

  return (
    <InlineWidget
      key="calendly-inline"
      url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
      styles={{ minWidth: "320px", height: "700px" }}
      prefill={{}}
      pageSettings={{
        hideLandingPageDetails: true,
        hideEventTypeDetails: false,
        hideGdprBanner: false,
      }}
    />
  );
};

const ErstGespraech = () => {
  const sectionRef = useRef(null);
  const [enabled, setEnabled] = useState(false); // <-- State nach oben gezogen

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
          content="Buche jetzt deine kostenlose Website-Analyse/Erstgespräch. Max. 2 Projekte pro Monat. Konkrete Optimierungsideen oder kostenloser Design-Prototyp."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/erstgespraech" />

        <meta property="og:title" content="Kostenlose Website-Analyse – Franco Cipolla" />
        <meta property="og:description" content="Buche jetzt dein Erstgespräch und erhalte konkrete Optimierungsideen für deine Website." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/erstgespraech" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <SEOJsonLD page="erstgespraech" />
      <section ref={sectionRef} className="w-full flex justify-center mt-20 px-4">
        <div className="md:py-20 py-16 max-w-[1100px] w-full ">

          {/* Header */}
          <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              In 15 Minuten Klarheit, warum Ihre Website keine Anfragen bringt - <br />Und was Sie konkret ändern müssen.
            </h1>
            <p className="text-lg text-black/70 mb-4">
              Limitierte Kapazität: <strong>max. 2 Projekte pro Monat</strong>
            </p>
            <p className="text-base text-black/60">
              Sichern sie jetzt ihre unverbindliche Website-Analyse/Erstgespräch.
            </p>
          </div>

          {/* Benefits */}
          <div className="contact-animate mb-10 text-center">
            <ul className="inline-block text-left space-y-3">
              <li className='flex  items-center gap-2  '> <CheckIcon/> Für Selbstständige & Unternehmen aus <a href="/" className=' underline transition hover:text-[#003566]'>Ennepetal,</a> <a href="/websites-hagen" className=' underline transition hover:text-[#003566]'>Hagen</a> & Umgebung</li>
              <li className='flex  items-center gap-2 '> <CheckIcon/> Klare Empfehlungen, wie ihre Website Anfragen auslösen kann</li>
              <li className='flex  items-center gap-2 pr-2'> <CheckIcon/> Alternativ: Kostenloser Design-Prototyp für ihr Unternehmen</li>
              <li className='flex  items-center gap-2 '> <CheckIcon/> Termindetails, Bestätigung, sowie zusätzliche Infos per E-Mail</li>
            </ul>
          </div>

          {/* Consent Calendly */}
          <div className="contact-animate mt-20">
            <CalendlyConsentEmbed enabled={enabled} setEnabled={setEnabled} />
          </div>

          {/* DSGVO */}
          <p className="contact-animate text-xs text-black/50 mt-2 text-center">
            🔒 Mehr Infos in der{' '}
            <Link to="/datenschutz" className="underline">
              Datenschutzerklärung
            </Link>
          </p>

          {/* Dieser Text wird erst angezeigt, wenn enabled = true */}
          {enabled && (
            <div className='w-full flex flex-col items-center justify-center'>
              <p className="contact-animate text-lg text-center xl:text-xl text-[#000814]/90 mb-8 max-w-xl mt-40">
                Ich freue mich auf unser Gespräch und darauf, ihre Website so zu optimieren, dass sie mehr Anfragen bekommen. <br />
                <br />
                Folgen sie mir auf <a href="https://www.instagram.com/francocipolla.de/" target="_blank" rel="noopener noreferrer" className='text-[#003566] underline'>Instagram</a> für Tipps & Praxisbeispiele, wie sie planbar mehr Kunden über ihre Website bekommen.
              </p>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default ErstGespraech;
