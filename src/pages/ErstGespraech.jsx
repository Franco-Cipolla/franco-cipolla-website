import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { InlineWidget } from "react-calendly";

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

const Erstgespraech = () => {
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
        <div className="md:py-20 py-16 max-w-[1100px] w-full ">

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
                Ich freue mich auf unser Gespräch und darauf, deine Website so zu optimieren, dass du mehr Anfragen bekommst. <br />
                <br />
                Folge mir auf <a href="https://www.instagram.com/francocipolla.de/" target="_blank" rel="noopener noreferrer" className='text-[#003566] underline'>Instagram</a> für Tipps & Praxisbeispiele, wie du planbar mehr Kunden über deine Website bekommst.
              </p>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Erstgespraech;
