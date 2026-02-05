import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import SEOJsonLD from "../components/SEOJsonLD";
import CheckIcon from "../components/CheckIcon";
import CalendlyFallBackForm from "../components/CalendlyFallBackForm";
import CalendlyOptional from "../components/CalendlyConsentEmbed";

gsap.registerPlugin(ScrollTrigger);

const ErstGespraech = () => {
  const sectionRef = useRef(null);

  // Animation für Elemente beim Scrollen
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
          {/* HEADER */}
          <div className="contact-animate mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert – <br />
              und was Sie konkret ändern können.
            </h1>
            <p className="text-lg text-black/70 mb-4">
              Limitierte Kapazität: <strong>max. 2 Projekte pro Monat</strong>
            </p>
            <p className="text-base text-black/60">
              Sichern Sie jetzt Ihr unverbindliches Website-Analyse/Erstgespräch.
            </p>
          </div>

          {/* BENEFITS */}
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
                <CheckIcon /> Termindetails, Bestätigung und zusätzliche Infos
                per E-Mail
              </li>
            </ul>
          </div>

          {/* MULTI-STEP FORM */}
          <div className="contact-animate mt-20">
            <CalendlyFallBackForm />
          </div>

          {/* DIVIDER + CALENDLY OPTIONAL */}
          <div className="contact-animate my-14 flex items-center">
            <div className="flex-grow border-t" />
            <span className="mx-4 text-sm text-gray-500">ODER</span>
            <div className="flex-grow border-t" />
          </div>

          <div className="contact-animate">
            <CalendlyOptional />
          </div>

          {/* DSGVO HINWEIS */}
          <p className="contact-animate text-xs text-black/50 mt-6 text-center">
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
