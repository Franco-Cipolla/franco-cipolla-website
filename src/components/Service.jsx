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
  const serviceRefs = useRef([]);

  useEffect(() => {
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
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white to-[#f0f8ff]">
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-sm"
        style={{ backgroundImage: `url(${serviceBg})` }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center" id='service-start'>
        {/* Header + Subline */}
        <div className="mb-16 px-2 sm:px-0">
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
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Direkter Kontakt – kein Callcenter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Ein Ansprechpartner von Start bis Livegang</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Messbare Kunden & volle Kontrolle</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 justify-items-center text-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (serviceRefs.current[idx] = el)}
              className="flex flex-col items-center gap-4 w-[90%] sm:w-[500px]"
            >
              <div className="flex-none w-14 h-14 flex items-center justify-center bg-[#00A6FB] text-white rounded-xl">
                <service.Icon size={28} />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl">{service.title}</h3>
              <p className="text-[#001D3D]/90 text-sm sm:text-base">{service.benefit}</p>
            </div>
          ))}
        </div>

        {/* Rundum-Sorglos-Paket */}
        <div className="bg-gradient-to-r from-[#001D3D] to-[#003566] rounded-3xl p-6 sm:p-10 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Lokale-Anfragen-System™
          </h2>
          <p className="mb-8 text-white/90 leading-relaxed text-sm sm:text-base">
            Ihr Website-System für messbare Kundenanfragen – alles aus einer Hand, ohne dass Sie sich kümmern müssen. <br /> <br />
            <strong>Aktuell inklusive Bonus:</strong> Website-Besucher-Startpaket mit 2 fertigen Social-Media-Posts & kurzem Video → erste echte Besucher schon in den ersten Tagen
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-10 text-white/90">
            <div className="flex items-start gap-2">
              <CheckIcon className="mt-1" />
              <span>Ein Ansprechpartner → keine verlorene Zeit durch Abstimmung mit mehreren Dienstleistern</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckIcon className="mt-1" />
              <span>Messbare Besucher & Anfragen → Sie behalten den Überblick</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckIcon className="mt-1" />
              <span>50% Anzahlung → Start ohne finanzielles Risiko</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col justify-center items-center">
              <CTAProjectStart />
              <p className="text-[13px] text-white/60 mt-3 text-center ">
                Wir können starten über:
                <a href="https://wa.me/4917675398004" target="_blank" rel="noopener noreferrer" className="underline text-white/80 hover:text-white mx-1">WhatsApp</a>,
                <a href="#contact" className="underline text-white/80 hover:text-white mx-1">Kontaktformular</a> oder
                <a href="tel:+4917675398004" className="underline text-white/80 hover:text-white mx-1">Telefon</a>.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <CTA1 bg="bg-[#001D3D]" text2='text-sm' color="text-white" hover='text-white' className="w-full sm:w-auto" />
              <p className="text-[13px] md:text-sm mt-3 text-white/40 text-center ">
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
