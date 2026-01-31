import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { InlineWidget } from "react-calendly";
import SEOJsonLD from '../components/SEOJsonLD';
import CheckIcon from '../components/CheckIcon';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const CalendlyConsentEmbed = ({ enabled, setEnabled }) => {
  const [widgetError, setWidgetError] = useState(false);

  if (!enabled) {
    return (
      <div className="border p-6 text-center bg-gray-50 rounded-lg shadow-sm">
        <p className="mb-6 text-lg">
          Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.
        </p>

        <button
          onClick={() => setEnabled(true)}
          aria-pressed={enabled}
          className="bg-[#003566] cursor-pointer hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold transition transform hover:-translate-y-1 hover:scale-105 duration-200"
        >
          Terminbuchung aktivieren
        </button>

        <p className="text-sm text-gray-500 mt-3">
          Dabei können Cookies gesetzt und Daten an Drittanbieter übertragen werden.
        </p>
      </div>
    );
  }

  return widgetError ? (
    <a
      href="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#003566] hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold cursor-pointer transition w-full max-w-xs block mx-auto text-center"
    >
      Direkt zu Calendly
    </a>
  ) : (
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
      onLoad={() => setWidgetError(false)}
      onError={() => setWidgetError(true)}
    />
  );
};

const ErstGespraech = () => {
  const sectionRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

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
      </Helmet>

      <SEOJsonLD page="erstgespraech" />

      <section ref={sectionRef} className="w-full flex justify-center mt-20 px-4">
        <div className="md:py-20 py-16 max-w-[1100px] w-full">

          {/* Header */}
          <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              In 15 Minuten Klarheit, warum Ihre Website keine Anfragen bringt – <br />
              Und was Sie konkret ändern können.
            </h1>
            <p className="text-lg text-black/70 mb-4">
              Limitierte Kapazität: <strong>max. 2 Projekte pro Monat</strong>
            </p>
            <p className="text-base text-black/60">
              Sichern Sie jetzt Ihr unverbindliches Website-Analyse/Erstgespräch.
            </p>
          </div>

          {/* Benefits */}
          <div className="contact-animate mb-10 text-center">
            <ul className="inline-block text-left space-y-3">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>
                  Für Selbstständige & Unternehmen aus{" "}
                  <Link to="/" className="underline transition hover:text-[#003566]">Ennepetal</Link>,{" "}
                  <Link to="/hagen" className="underline transition hover:text-[#003566]">Hagen</Link> & Umgebung
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Klare Empfehlungen, wie Ihre Website Anfragen auslösen kann
              </li>
              <li className="flex items-center gap-2 pr-2">
                <CheckIcon /> Alternativ: Kostenloser Design-Prototyp für Ihr Unternehmen
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Termindetails, Bestätigung, sowie zusätzliche Infos per E-Mail
              </li>
            </ul>
          </div>

          {/* Calendly Consent */}
          <div className="contact-animate mt-20">
            <CalendlyConsentEmbed enabled={enabled} setEnabled={setEnabled} />
          </div>

          {/* DSGVO Hinweis */}
          <p className="contact-animate text-xs text-black/50 mt-2 text-center">
            🔒 Mehr Infos in der{' '}
            <Link to="/datenschutz" className="underline">
              Datenschutzerklärung
            </Link>
          </p>

          {/* Post-Consent / Instagram + WhatsApp CTA */}
          {enabled && (
            <div className="w-full flex flex-col items-center justify-center mt-16 px-4">
              <p className="contact-animate text-lg text-center xl:text-xl text-[#000814]/90 mb-6 max-w-xl leading-relaxed">
                Ich freue mich auf unser Gespräch und darauf, Ihre Website so zu optimieren, dass Sie mehr Anfragen bekommen.<br /><br />
                Folgen Sie mir auf Instagram für Tipps & Praxisbeispiele oder schreiben Sie mir direkt eine WhatsApp-Nachricht für schnelle Rückfragen.
              </p>

              <div className="contact-animate flex flex-col sm:flex-row gap-4 mt-4 w-full lg:max-w-xl">
                <a
                  href="https://www.instagram.com/francocipolla.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#003566] via-[#001D3D] to-[#00A6FB] text-white px-6 py-3 rounded-lg shadow-md font-semibold transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <FaInstagram className="text-lg" />
                  Instagram folgen
                </a>

                <a
                  href="https://wa.me/4917675398004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Direkt WhatsApp schreiben
                </a>
              </div>

              <p className="contact-animate text-sm text-black/50 mt-6 max-w-md text-center">
                ⚡ Hinweis: Ich nehme nur <strong>2 Projekte pro Monat</strong> an, um die bestmöglichen Ergebnisse für meine Kunden zu erzielen. Ihre Anfrage wird innerhalb von 24–48 Stunden bearbeitet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ErstGespraech;
