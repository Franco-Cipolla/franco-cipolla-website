import React, { useRef, useEffect } from 'react';
import { gsap } from '../gsapSetup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from '../CTA1';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    label: 'Schritt 1 · 0 € · 15 Minuten · Kein Aufwand',
    title: (
      <>
        Kostenlose Website-Analyse -{' '}
        <span className="text-[#003566]">ich zeige Ihnen was Anfragen kostet</span>
      </>
    ),
    descriptionDesktop:
      'Keine Vorbereitung. Kein Technik-Gespräch. Nur 15 Minuten am Telefon - ich schaue mir Ihre Website vorher an und zeige Ihnen konkret, an welchen Stellen Besucher aktuell abspringen und was geändert werden kann, um die Wahrscheinlichkeit einer Anfrage zu erhöhen. Sie müssen nichts mitbringen außer 15 Minuten Zeit.',
    descriptionMobile:
      '15 Minuten am Telefon - ich schaue mir Ihre Website an und zeige Ihnen, wo Besucher abspringen. Keine Vorbereitung, kein Aufwand für Sie.',
    badge: '📞 Telefonisch · 15 Min · keine Vorbereitung nötig',
  },
  {
    num: '02',
    label: 'Schritt 2 · Ihr einziger Aufwand',
    title: (
      <>
        Sie füllen ein kurzes Briefing aus -{' '}
        <span className="text-[#003566]">den Rest erledige ich</span>
      </>
    ),
    descriptionDesktop:
      'Sie erhalten ein strukturiertes Briefing - klare Fragen zu Ihren Leistungen und Ihrem Betrieb. Für jeden technischen Schritt wie Hosting gibt es ein fertiges Hilfedokument, das genau erklärt was zu tun ist. Fragen? Ich bin erreichbar. Design, Texte, Entwicklung und Launch übernehme ich komplett. Ihre Website ist in 2–4 Wochen live.',
    descriptionMobile:
      'Klare Fragen zu Ihrem Betrieb - für jeden technischen Schritt gibt es ein fertiges Hilfedokument. Den Rest mache ich. In 2–4 Wochen ist Ihre Website live.',
    badge: '📋 Nur ein Briefing · alles andere mache ich',
  },
  {
    num: '03',
    label: 'Schritt 3 · Ihr Ergebnis',
    title: (
      <>
        Ihre Website ist live -{' '}
        <span className="text-[#003566]">und arbeitet täglich für Ihren Betrieb</span>
      </>
    ),
    descriptionDesktop:
      'Eine Website zu haben reicht heute nicht mehr. Entscheidend ist, ob sie Besucher aktiv zur Kontaktaufnahme führt - oder sie still wieder gehen lässt. Das Lokale-Anfragen-System™ ist genau darauf ausgelegt: Interessierte aus Hagen & Umgebung finden Sie bei Google, verstehen sofort Ihr Angebot und wissen auf Anhieb, wie sie Sie erreichen. Und Sie sehen selbst, was passiert - messbar, nachvollziehbar, transparent.',
    descriptionMobile:
      'Interessierte aus Ihrer Region finden Sie bei Google, verstehen Ihr Angebot sofort und wissen, wie sie Sie erreichen. Messbar, nachvollziehbar - das Lokale-Anfragen-System™ arbeitet 24/7 für Sie.',
    badge: '🚀 Lokal auffindbar · auf Anfragen optimiert · messbar statt unsichtbar',
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 xl:px-0"
    >
      <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-[#003566]">Drei Schritte</span> - von der Analyse zur{' '}
            <span className="text-[#003566]">Website, die Anfragen bringt</span>
          </h2>
          <p className="text-base md:text-lg text-[#000814] max-w-2xl mx-auto">
            <span className="md:hidden">Ich arbeite gezielt mit lokalen Betrieben aus Hagen, damit Ihre Kunden Sie wählen, bevor sie zur Konkurrenz gehen.</span>
            <span className="hidden md:inline">Ich arbeite gezielt mit lokalen Betrieben aus Hagen, damit Ihre Kunden Sie wählen, bevor sie zur Konkurrenz gehen. Kein langer Prozess. Ihr Aufwand ist minimal. </span>
          </p>
        </div>

        {/* Steps */}
        <div className="border-t border-[#003566]/12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="grid grid-cols-[36px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-6 py-6 md:py-8 border-b border-[#003566]/12"
            >
              {/* Left: number + connector line */}
              <div className="flex flex-col items-center gap-2 pt-1">
                <span className="text-[11px] font-bold tracking-[0.1em] text-[#003566]">
                  {step.num}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[32px] bg-[#003566]/15" />
                )}
              </div>

              {/* Right: content */}
              <div>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase text-[#000814]/35 mb-1.5 md:mb-2">
                  {step.label}
                </p>
                <h3 className="text-base md:text-xl font-black text-[#000814] tracking-tight leading-snug mb-2 md:mb-3">
                  {step.title}
                </h3>

                {/* Mobile description */}
                <p className="md:hidden text-[13px] text-[#000814]/60 leading-relaxed mb-3">
                  {step.descriptionMobile}
                </p>

                {/* Desktop description */}
                <p className="hidden md:block text-[15px] text-[#000814]/60 leading-relaxed mb-4">
                  {step.descriptionDesktop}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[10.5px] md:text-[11.5px] font-semibold text-[#003566] bg-[#003566]/06 border-b border-[#003566]/25 px-2.5 md:px-3 py-1 flex-wrap">
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex flex-col  items-start  gap-3">
          <CTA1 />
          <p className="text-[12px] md:text-[13px] text-[#000814]/40">
            15 Minuten Anruf – unverbindlich & ohne Vorbereitung
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
