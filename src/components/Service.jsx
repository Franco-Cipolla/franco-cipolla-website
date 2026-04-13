import React, { useRef, useEffect } from 'react';
import { gsap } from './gsapSetup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from './CTA1';

gsap.registerPlugin(ScrollTrigger);

const stackItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Optimiertes Webdesign',
    descMobile: 'Vertrauen entsteht auf den ersten Blick',
    descDesktop: 'Modern, sauber - Besucher sehen sofort: das ist ein Betrieb dem ich vertrauen kann',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Komplette Webentwicklung',
    descMobile: 'Schnell, responsiv - kein Besucher springt ab',
    descDesktop: 'Schnell, responsiv - funktioniert auf jedem Gerät, kein Besucher springt ab',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Texte die verkaufen',
    descMobile: 'Verkaufspsychologisch formuliert, Besucher fragen an',
    descDesktop: 'Ihre Leistungen so beschrieben, dass Interessenten nicht überlegen - sondern anfragen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Lokal bei Google',
    descMobile: 'Gefunden bevor die Konkurrenz es wird',
    descDesktop: 'Kunden aus Ihrer Region finden Sie - bevor sie zur Konkurrenz scrollen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Lokales Vertrauen',
    descMobile: 'Echter Betrieb aus der Region - sofort erkennbar',
    descDesktop: 'Elemente die zeigen: hier ist ein echter Betrieb aus der Region - kein anonymes Unternehmen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>
      </svg>
    ),
    title: 'Klare Anfrage-Führung',
    descMobile: 'Jeder Besucher weiß den nächsten Schritt',
    descDesktop: 'Jeder Besucher wird zur Kontaktaufnahme geführt - niemand verlässt die Seite ohne zu wissen was zu tun ist',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Besucher-Tracking',
    descMobile: 'Keine Unwissenheit - Sie sehen was passiert',
    descDesktop: 'Sie sehen wer Ihre Seite besucht und was passiert - keine Unwissenheit mehr',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Briefing & Begleitung',
    descMobile: 'Sie füllen das Briefing aus - ich erledige den Rest',
    descDesktop: 'Strukturiert von Anfang bis Launch - Sie müssen sich um nichts kümmern außer dem Briefing',
  },
];

const valueBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Live in 2-4 Wochen',
    sub: 'Nicht in Monaten - klarer Ablauf',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Einmalig bezahlt - fertig',
    sub: 'Kein Abo, keine versteckten Extras',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003566" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Direkter Kontakt',
    sub: 'Ein Ansprechpartner - kein Callcenter'
  },
];


const Service = () => {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const dreamRef = useRef(null);
  const stackRefs = useRef([]);
  const valueRef = useRef(null);
  const bonusRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUp = (el, delay = 0) => {
        if (!el) return;
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.75, delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        });
      };
      fadeUp(dreamRef.current);
      fadeUp(headRef.current);
      stackRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.55, delay: i * 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
      fadeUp(valueRef.current);
      fadeUp(bonusRef.current);
      fadeUp(ctaRef.current);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-start"
      className="relative py-16 sm:py-20 px-4 sm:px-6 xl:px-0"
    >
      <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ihre Website als{' '}
            <span className="text-[#003566] ">aktiver Anfragen-Kanal</span>
            <span className="block text-xl font-normal ">Webdesigner Ennepetal</span>
          </h2>
          <p className="text-[15px] md:text-lg text-[#000814] max-w-2xl mx-auto">
            <span className="md:hidden">Für lokale Betriebe, die Anfragen wollen - nicht nur irgendeine Website.</span>
            <span className="hidden md:inline">Für lokale Betriebe in Ennepetal & Umgebung, die Anfragen wollen - ohne auf Empfehlungen zu warten.</span>
          </p>
        </div>

        {/* Dream Outcome */}
        <div ref={dreamRef} className="border-l-[3px] border-[#003566] bg-[#003566]/[0.04] px-4 sm:px-5 py-4 mb-8 sm:mb-10">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-1">
            Was das Lokale-Anfragen-System™ erreicht
          </p>
          <p className="text-[13px] sm:text-[15px] font-bold text-[#000814] leading-relaxed">
            Ihr Telefon klingelt - ein Interessent aus Ihrer Region.<br />
            Nicht weil Sie jemanden angerufen haben.<br />
            <span className="text-[#003566]">Sondern weil Ihre Website für Sie gearbeitet hat.</span>
          </p>
        </div>

        {/* Grand Slam Offer Box */}
        <div className="border border-[#003566]/20">

          {/* DESIRE - Header */}
          <div ref={headRef} className="p-5 sm:p-8 border-b border-[#003566]/10">
            <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-[#003566] border-b border-[#003566]/25 pb-[2px] inline-block mb-3 sm:mb-4">
              ✦ Lokales-Anfragen-System™
            </p>
            <h3 className="text-lg sm:text-2xl font-black text-[#000814] leading-tight tracking-tight mb-3">

              <span className="text-[#003566]">Eine Website die für Sie arbeitet, auch wenn Sie es nicht tun</span>
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#000814]/55 leading-relaxed border-l-[2.5px] border-[#003566] pl-4">
              Interessenten aus Ihrer Region finden Sie bei Google, verstehen sofort Ihr Angebot -
              und{' '}
              <strong className="text-[#000814]">greifen von sich aus zum Telefon.</strong>
            </p>
          </div>

          {/* BELIEF - Value Stack */}
          <div className="p-5 sm:p-8 border-b border-[#003566]/10">
            <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-[#000814]/30 mb-3">
              Was Sie bekommen
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.5rem]">
              {stackItems.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (stackRefs.current[i] = el)}
                  className="flex flex-col gap-[0.25rem] p-3 border border-[#003566]/13 bg-[#003566]/[0.025]"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[12.5px] sm:text-[13px] font-bold text-[#000814]">{item.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-[11.5px] text-[#000814]/45 leading-relaxed pl-6">
                    <span className="sm:hidden">{item.descMobile}</span>
                    <span className="hidden sm:inline">{item.descDesktop}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VALUE - Preis + Badges */}
          <div ref={valueRef} className="p-5 sm:p-8 border-b border-[#003566]/10">
            <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-[#000814]/30 mb-1">
              Ihre Investition
            </p>
            <p className="text-[20px] sm:text-[22px] font-black text-[#001D3D] tracking-tight">
 Preis je nach Projektumfang            </p>
            <p className="text-[12px] text-[#000814]/38 mt-1 mb-4 leading-relaxed">
              <strong className="text-[#003566]">50 % bei Start · 50 % vor Launch</strong><br />
              Kostenlose Analyse zuerst - Sie entscheiden danach
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2">
             {valueBadges.map((b, i) => (
                <div
                  key={i}
                  className="inline-flex w-fit items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 backdrop-blur-sm border border-[#003566]/15 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-[12px] sm:text-[12.5px] font-bold text-[#003566] leading-tight">{b.title}</p>
                    <p className="text-[10.5px] sm:text-[11px] text-[#000814]/45 leading-tight mt-[1px]">{b.sub}</p>
                  </div>
                </div>
              ))}


            </div>
          </div>

          {/* RISK REVERSAL - Bonus */}
          <div ref={bonusRef} className="p-5 sm:p-8 border-b border-[#003566]/10 bg-[#003566]/[0.04] flex gap-3 sm:gap-4 items-start">
            <span className="text-[18px] sm:text-[20px] flex-shrink-0 mt-[2px]">🎁</span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#003566] mb-1">
                Bonus - inklusive, ohne Aufpreis (300€ Wert)
              </p>
              <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] mb-1">
                2 branchenspezifische Social-Media-Posts + Loom-Video
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-[#000814]/48 leading-relaxed">
                <span className="sm:hidden">Damit Ihre Website schnell Besucher bekommt - fertig vorbereitet.</span>
                <span className="hidden sm:inline">Damit Ihre neue Website schnell über Ihre bestehenden Kanäle erste Besucher bekommt. Fertig vorbereitet, direkt einsetzbar.</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[14px] sm:text-[15px] font-bold text-[#000814] leading-snug mb-1">
                Starten Sie mit der kostenlosen Analyse -<br />
                <span className="text-[#003566]">bevor Sie einen weiteren Tag Anfragen verlieren</span>
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#000814]/38">
                15 Minuten · ich zeige Ihnen konkret was Ihrer Website fehlt · 0 €
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-[0.35rem] flex-shrink-0">
              <CTA1 />
              <span className="text-[11px] text-[#000814]/28">Unverbindlich · ohne Vorbereitung</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
