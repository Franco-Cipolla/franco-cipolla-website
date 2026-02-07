import React, { useRef, useEffect } from 'react';
import { FaCode, FaPaintBrush, FaPenNib, FaSearchengin } from 'react-icons/fa';
import CTAProjectStart from './CTAProjectStart';
import CTA1 from './CTA1';
import serviceBg from '/ServiceBg1.jpeg';
import CheckIcon from "./CheckIcon";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { Icon: FaCode, title: "Webentwicklung", benefit: "Ihre Website führt Besucher klar zur Anfrage → mehr qualifizierte Interessenten" },
  { Icon: FaPaintBrush, title: "Webdesign", benefit: "Modernes, sauberes Design vermittelt Vertrauen & macht den Kontakt einfach" },
  { Icon: FaPenNib, title: "Copywriting", benefit: "Direkte, verständliche Texte führen Besucher, Sie zu kontaktieren" },
  { Icon: FaSearchengin, title: "SEO & Sichtbarkeit", benefit: "OnPage-SEO & Google Maps Integration → lokale Besucher, echte Interessenten" },
];

const Service = () => {
  const headerRef = useRef(null);
  const bulletRefs = useRef([]);
  const serviceRefs = useRef([]);
  const cardRef = useRef(null);
  const cardBulletRefs = useRef([]);
  const cardCTARefs = useRef([]);

  useEffect(() => {
    // Header + Subline
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );
    }

    // Header Bullet Points
    bulletRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: idx * 0.1 + 0.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );
    });

    // Service Cards
    serviceRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: idx * 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        }
      );
    });

    // Lokale-Anfragen-System Card
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
        }
      );
    }

    // Card Bullets
    cardBulletRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: idx * 0.1 + 0.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
        }
      );
    });

    // Card CTAs
    cardCTARefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: idx * 0.15 + 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white to-[#f0f8ff]">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-sm"
        style={{ backgroundImage: `url(${serviceBg})` }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center" id='service-start'>
        {/* Header + Subline */}
        <div className="mb-16 px-2 sm:px-0" ref={headerRef}>
          <h1 className="mb-6 leading-tight text-3xl sm:text-4xl font-bold text-center">
            Was Sie bekommen:
            <span className="block bg-gradient-to-r from-[#003566] to-[#00A6FB] bg-clip-text text-transparent">
              Eine Website, die Besucher gezielt zur Anfrage führt
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#000814]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Täglich verlieren Sie Kunden, weil Ihre Website nicht führt – <strong className="text-[#001D3D]">Ich mache sie zum Akquisesystem.</strong>
            <br /><br />
            Gezielt für Unternehmen aus <span className="text-[#00A6FB] font-semibold">Ennepetal, <a href="/hagen" className="text-[#00A6FB] font-semibold underline transition hover:text-[#003566]">Hagen</a> & Umgebung.</span>
          </p>

          <div className="flex items-center flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-[#001D3D]/80 text-sm sm:text-base font-medium">
            {["Direkter Kontakt – kein Callcenter", "Ein Ansprechpartner von Start bis Livegang", "Messbare Kunden & volle Kontrolle"].map((text, idx) => (
              <div key={idx} ref={el => bulletRefs.current[idx] = el} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 justify-items-center text-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => serviceRefs.current[idx] = el}
              className="flex bg-white/90 rounded-3xl shadow-lg p-6 flex-col items-center gap-4 w-[90%] sm:w-[500px]"
            >
              <div className="flex-none w-14 h-14 flex items-center justify-center bg-[#00A6FB] text-white rounded-xl">
                <service.Icon size={28} />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl">{service.title}</h3>
              <p className="text-[#001D3D]/90 text-sm sm:text-base">{service.benefit}</p>
            </div>
          ))}
        </div>

        {/* Lokale-Anfragen-System Card */}
        <div
          ref={cardRef}
          className="bg-gradient-to-r from-[#001D3D] to-[#003566] rounded-3xl p-6 sm:p-10 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ihr Lokales-Anfragen-System™
          </h2>

          <p className="mb-6 text-white/90 leading-relaxed text-sm sm:text-base">
            Ihre Website für <strong>echte Kundenanfragen</strong> – Sie kümmern sich um Ihr Business, Ich um den Rest.
          </p>

          <p className="mb-6 text-white/90 leading-relaxed text-sm sm:text-base">
            Bonus für die <strong>nächsten 3 Kunden</strong>: Website-Besucher-Startpaket im Wert von <strong className="text-[#00A6FB]">300 € inklusive</strong> → erste echte Besucher schon in den ersten Tagen.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-10 text-white/90">
            {[
              "Ein Ansprechpartner → sofortige Entscheidungen, kein Abstimmungschaos",
              "Messbare Besucher & Anfragen → Sie behalten den Überblick",
              "50% Anzahlung → Start ohne Risiko, direkt loslegen"
            ].map((text, idx) => (
              <div key={idx} ref={el => cardBulletRefs.current[idx] = el} className="flex items-start gap-2">
                <CheckIcon className="mt-1" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div ref={el => cardCTARefs.current[0] = el} className="flex flex-col justify-center items-center">
              <CTAProjectStart />
              <p className="text-[13px] text-white/60 mt-3 text-center">
                Nur die nächsten 3 Kunden profitieren vom 300 € Bonus für 0 € – starten Sie direkt.                <br/>
                <br/>

                oder

              </p>
            </div>

            <div ref={el => cardCTARefs.current[1] = el} className="flex flex-col justify-center items-center">
              <CTA1 bg="bg-[#001D3D]" text2='text-sm' color="text-white" hover='text-white' className="w-full sm:w-auto" />
              <p className="text-[13px] md:text-sm mt-3 text-white/40 text-center">
                Unverbindlich & kostenlos – ohne Verkaufsdruck
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
