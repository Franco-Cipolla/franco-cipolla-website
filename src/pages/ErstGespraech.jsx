import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import { InlineWidget } from "react-calendly";
import SEOJsonLD from "../components/SEOJsonLD";
import CheckIcon from "../components/CheckIcon";
import CalendlyFallbackForm from "../components/CalendlyFallBackForm"; // Unser neues Multi-Step-Fallback

gsap.registerPlugin(ScrollTrigger);

const CalendlyConsentWithFallback = ({ enabled, setEnabled }) => {
  const [widgetAvailable, setWidgetAvailable] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Timeout: fallback nach 5 Sekunden
    const timeout = setTimeout(() => {
      if (!widgetAvailable) setFallback(true);
    }, 5000);

    // Calendly Script laden
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setWidgetAvailable(true);
    script.onerror = () => setFallback(true);
    document.body.appendChild(script);

    return () => {
      clearTimeout(timeout);
      document.body.removeChild(script);
    };
  }, [enabled]);

  if (!enabled) {
    return (
      <div className="border p-6 text-center bg-gray-50 rounded-lg shadow-sm">
        <p className="mb-6 text-lg">
          Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.
        </p>
        <button
          onClick={() => setEnabled(true)}
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

  return fallback ? (
    <CalendlyFallbackForm />
  ) : (
    <InlineWidget
      url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
      styles={{ minWidth: "320px", height: "700px" }}
      pageSettings={{
        hideLandingPageDetails: true,
        hideEventTypeDetails: false,
        hideGdprBanner: false,
      }}
      onError={() => setFallback(true)}
      onLoad={() => setWidgetAvailable(true)}
    />
  );
};

const ErstGespraech = () => {
  const sectionRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll(".contact-animate");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Kostenlose Website-Analyse – Erstgespräch buchen | Franco Cipolla
        </title>
        <meta
          name="description"
          content="Buche jetzt deine kostenlose Website-Analyse/Erstgespräch. Max. 2 Projekte pro Monat. Konkrete Optimierungsideen oder kostenloser Design-Prototyp."
        />
        <link
          rel="canonical"
          href="https://www.franco-cipolla.de/erstgespraech"
        />
      </Helmet>

      <SEOJsonLD page="erstgespraech" />

      <section
        ref={sectionRef}
        className="w-full flex justify-center mt-20 px-4"
      >
        <div className="md:py-20 py-16 max-w-[1100px] w-full">
          {/* Header */}
          <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert – <br />
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
                  <Link
                    to="/"
                    className="underline transition hover:text-[#003566]"
                  >
                    Ennepetal
                  </Link>
                  ,{" "}
                  <Link
                    to="/hagen"
                    className="underline transition hover:text-[#003566]"
                  >
                    Hagen
                  </Link>{" "}
                  & Umgebung
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Klare Empfehlungen, wie Ihre Website Anfragen auslösen
                kann
              </li>
              <li className="flex items-center gap-2 pr-2">
                <CheckIcon /> Alternativ: Kostenloser Design-Prototyp für Ihr
                Unternehmen
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Termindetails, Bestätigung, sowie zusätzliche Infos
                per E-Mail
              </li>
            </ul>
          </div>

          {/* Calendly + Fallback */}
          <div className="contact-animate mt-20">
            <CalendlyConsentWithFallback enabled={enabled} setEnabled={setEnabled} />
          </div>

          {/* DSGVO Hinweis */}
          <p className="contact-animate text-xs text-black/50 mt-2 text-center">
            🔒 Mehr Infos in der{" "}
            <Link to="/datenschutz" className="underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ErstGespraech;
