import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from './gsapSetup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from './CTA1';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────
   Visuals: reines HTML/CSS, keine Videos, keine Bilder.
   Höhe ergibt sich aus dem Inhalt (min-height), nichts wird
   abgeschnitten, egal wie schmal der Screen ist.
───────────────────────────────────────────────────────────── */

const Bubble = ({ side = 'left', children }) => (
  <div
    className={`max-w-[88%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug sm:max-w-[80%] sm:px-4 sm:py-2.5 sm:text-sm ${
      side === 'left'
        ? 'self-start rounded-bl-sm bg-white/10 text-white/85'
        : 'self-end rounded-br-sm bg-[#00A6FB] font-semibold text-[#001226]'
    }`}
  >
    {children}
  </div>
);

/* Schritt 1: beantwortet die zwei größten Fragen, für Kunden mit UND ohne Website */
const VisualCall = () => (
  <div className="flex w-full flex-col justify-center gap-2.5 p-5 sm:gap-3 sm:p-8">
    <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-[#60d4ff]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
      </span>
      Telefonat, 15 Minuten
    </div>
    <Bubble side="left">Ist das wirklich kostenlos?</Bubble>
    <Bubble side="right">Ja. Das Gespräch kostet nichts und verpflichtet Sie zu nichts.</Bubble>
    <Bubble side="left">
      Spielt es eine Rolle, wenn ich noch keine Website habe? Oder brauche ich für ein Gespräch erstmal eine?
    </Bubble>
    <Bubble side="right">Nein. Haben Sie eine, zeige ich Ihnen die 3 Stellen, an denen Sie die meisten Anfragen verlieren. Haben Sie keine, klären wir, was Ihre erste leisten muss.</Bubble>
  </div>
);

/* Schritt 2: klar getrennt, wer was macht ("Sie" vs. "Ich") */
const Row = ({ who, children }) => {
  const you = who === 'Sie';
  return (
    <div className="flex items-center gap-3">
      <span
        className={`w-10 flex-none rounded-full py-0.5 text-center text-[11px] font-bold ${
          you ? 'bg-[#00A6FB] text-[#001226]' : 'bg-white/10 text-white/70'
        }`}
      >
        {who}
      </span>
      <span className={`text-[13px] sm:text-sm ${you ? 'font-semibold text-white' : 'text-white/75'}`}>{children}</span>
    </div>
  );
};

const VisualBuild = () => (
  <div className="flex w-full flex-col justify-center gap-3 p-5 sm:gap-3.5 sm:p-8">
    <Row who="Sie">Kurzes Briefing ausfüllen</Row>
    <Row who="Ich">Texte schreiben</Row>
    <Row who="Ich">Design erstellen</Row>
    <Row who="Ich">Website entwickeln</Row>
    <Row who="Sie">Ergebnis prüfen und freigeben</Row>
    <p className="mt-1 text-xs text-white/45">Ihr Aufwand: Briefing und Freigabe.</p>
  </div>
);

const VisualLive = () => (
  <div className="flex w-full flex-col justify-center gap-3 p-5 sm:p-8">
    {[
      { t: 'Neue Anfrage über Ihre Website', s: 'Dachsanierung, Ennepetal' },
      { t: 'Neue Anfrage über Ihre Website', s: 'Elektroinstallation, Gevelsberg' },
    ].map((n, i) => (
      <div
        key={i}
        className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-3 sm:px-4 ${
          i === 1 ? 'sm:ml-5' : ''
        }`}
      >
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#00A6FB]/20 text-[#60d4ff]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16v12H4z M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[13px] font-semibold text-white">{n.t}</span>
          <span className="block truncate text-xs text-white/50">{n.s}</span>
        </span>
      </div>
    ))}
    <p className="mt-1 text-xs text-white/40">Jede Anfrage wird messbar erfasst.</p>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Copy
───────────────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    label: 'Kostenlos und unverbindlich',
    title: 'Ein kurzes Gespräch',
    highlight: 'mit oder ohne bestehende Website',
    description:
      'Sie erzählen mir in 15 Minuten, was Ihr Betrieb braucht und welche Aufträge Sie sich wünschen. Haben Sie schon eine Website, analysiere ich sie vorab kostenlos und zeige Ihnen die 3 Stellen, an denen Sie am meisten Anfragen verlieren. Haben Sie keine, klären wir, was Ihre erste Website leisten muss, damit Anfragen kommen.',
    pills: [
      { text: 'Kostenlos', v: 'green' },
      { text: '15 Minuten', v: 'blue' },
      { text: 'Keine Vorbereitung nötig', v: 'neutral' },
    ],
    Visual: VisualCall,
  },
  {
    num: '02',
    label: 'Ihr Aufwand: Briefing und Freigabe',
    title: 'Sie liefern das Briefing',
    highlight: 'ich baue Ihre Website',
    description:
      'Sie füllen ein kurzes Briefing aus und sprechen einmal mit mir. Danach übernehme ich Texte, Design und Entwicklung und halte Sie mit regelmäßigen Updates auf dem Laufenden. In 2 bis 4 Wochen ist Ihre Website online.',
    pills: [
      { text: '2 bis 4 Wochen', v: 'green' },
      { text: 'Texte, Design & Technik inklusive', v: 'blue' },
      { text: 'Persönliche Betreuung', v: 'neutral' },
    ],
    Visual: VisualBuild,
  },
  {
    num: '03',
    label: 'Ihr Ergebnis',
    title: 'Ihre Website ist live',
    highlight: 'und arbeitet täglich für Ihren Betrieb',
    description:
      'Interessierte aus Ihrer Region finden Ihr Unternehmen, verstehen Ihr Angebot schneller und können Sie direkt kontaktieren. Sie sehen, wie viele Anfragen ankommen.',
    pills: [
      { text: 'Lokal auffindbar', v: 'green' },
      { text: 'Ergebnisse messbar', v: 'blue' },
    ],
    Visual: VisualLive,
  },
];

/* Ein klarer Hauptbutton + ein ruhiger Textlink für den Nebenweg.
   Ändere CONTACT_TARGET auf die ID deiner Kontakt-Section. */
const CONTACT_TARGET = '#contact';

const scrollToContact = (e) => {
  const el = document.querySelector(CONTACT_TARGET);
  if (!el) return; /* Fallback: normaler Anker-Sprung */
  e.preventDefault();
  el.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  });
};

const CtaGroup = ({ center = false }) => (
  <div className={`flex w-full flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'}`}>
    <div
      className={`flex flex-col gap-x-7 gap-y-4 sm:flex-row sm:flex-wrap sm:items-center ${
        center ? 'items-center sm:justify-center' : 'items-start'
      }`}
    >
      <CTA1 bg="bg-[#001D3D]" text2="text-white" hover="text-white" />

      <a
        href={CONTACT_TARGET}
        onClick={scrollToContact}
        className="group inline-flex items-center gap-2.5 rounded-full text-[15px] font-semibold text-[#001D3D] outline-none focus-visible:ring-2 focus-visible:ring-[#00A6FB] focus-visible:ring-offset-4"
      >
        <span className="bg-[linear-gradient(currentColor,currentColor)] text-[13px] bg-[length:100%_1.5px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:0%_1.5px] motion-reduce:transition-none">
          Noch keine Website? Hier starten
        </span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#001D3D]/[0.08] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#001D3D] group-hover:text-white motion-reduce:transition-none"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </div>

    <p className="text-[13px] text-black/50">
      Kostenlos und unverbindlich, mit oder ohne bestehende Website.
    </p>
  </div>
);

const pillStyles = {
  green: 'text-emerald-800 bg-emerald-500/10 border-emerald-600/20',
  blue: 'text-[#003566] bg-[#00A6FB]/10 border-[#00A6FB]/30',
  neutral: 'text-black/65 bg-black/[0.04] border-black/10',
};

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 65%',
            end: 'bottom 65%',
            scrub: 0.3,
          },
        }
      );

      itemRefs.current.forEach((item, i) => {
        const node = nodeRefs.current[i];
        if (!item || !node) return;
        ScrollTrigger.create({
          trigger: item,
          start: 'top 65%',
          onEnter: () => node.classList.add('is-active'),
          onLeaveBack: () => node.classList.remove('is-active'),
        });
      });
    });

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(fillRef.current, { scaleY: 1 });
      nodeRefs.current.forEach((n) => n && n.classList.add('is-active'));
    });

    /* Schrift geladen → Höhen können sich ändern → Trigger neu messen */
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ablauf"
      aria-labelledby="ablauf-heading"
      className="relative w-full px-4 py-[clamp(56px,9vw,120px)] text-black sm:px-6 lg:px-8"
    >
      <style>{`
        #ablauf .ps-node{background:#fff;border-color:rgba(0,8,20,.16);transition:background-color .2s,border-color .2s,box-shadow .2s}
        #ablauf .ps-node.is-active{background:#003566;border-color:#003566;box-shadow:0 0 0 6px rgba(0,166,251,.16)}
        #ablauf .ps-num{color:transparent;-webkit-text-stroke:1.5px rgba(0,53,102,.35)}
        @media (prefers-reduced-motion:reduce){#ablauf .ps-node{transition:none}}
      `}</style>

      <div className="mx-auto grid w-full max-w-[80rem] gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Intro (sticky ab lg) */}
        <div className="mx-auto w-full max-w-[44rem] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none lg:self-start">
          <h2
            id="ablauf-heading"
            className="text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.1] tracking-tight text-[#000814]"
          >
            In 3 Schritten zur Website, die Anfragen bringt
          </h2>
          <p className="mt-4 max-w-[30rem] text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-black/75 sm:mt-5">
            Für Handwerksbetriebe und Dienstleister in Ennepetal und Umgebung.
            Ihr Aufwand: ein Gespräch, ein Briefing und Ihre Freigabe. Alles andere übernehme ich.
          </p>

          <div className="mt-8 hidden lg:block">
            <CtaGroup />
          </div>
        </div>

        {/* Timeline */}
        <ol
          ref={listRef}
          className="relative m-0 mx-auto w-full max-w-[44rem] list-none p-0 lg:mx-0 lg:max-w-none"
        >
          <div aria-hidden="true" className="absolute bottom-0 left-[9px] top-0 w-[2px] bg-black/10">
            <div ref={fillRef} className="h-full w-full origin-top scale-y-0 bg-[#003566] will-change-transform" />
          </div>

          {steps.map((step, i) => {
            const { Visual } = step;
            return (
              <li
                key={step.num}
                ref={(el) => (itemRefs.current[i] = el)}
                style={{ '--n': 'clamp(46px, 7vw, 76px)' }}
                className={`relative pl-9 sm:pl-12 md:pl-16 ${i < steps.length - 1 ? 'pb-12 md:pb-20' : ''}`}
              >
                {/* Knoten, vertikal mittig zur Ziffer */}
                <span
                  ref={(el) => (nodeRefs.current[i] = el)}
                  aria-hidden="true"
                  style={{ top: 'calc(var(--n) * 0.425 - 10px)' }}
                  className="ps-node absolute left-0 h-5 w-5 rounded-full border-2"
                />

                <div className="mb-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                  <span
                    className="ps-num font-black leading-[0.85]"
                    style={{ fontSize: 'var(--n)' }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <span className="pb-0.5 text-[13px] font-semibold text-[#003566]/80 sm:text-sm">
                    Schritt {i + 1}: {step.label}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="mb-5 flex min-h-[230px] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#021830] to-[#010d1a] sm:mb-6 sm:min-h-[260px]"
                >
                  <Visual />
                </div>

                <h3 className="max-w-[34rem] text-[clamp(20px,2.2vw,28px)] font-semibold leading-[1.22] tracking-tight text-[#000814]">
                  {step.title}.{' '}
                  <span className="text-[#003566]">{step.highlight}.</span>
                </h3>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-[1.7] text-black/75 sm:text-base">
                  {step.description}
                </p>

                <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                  {step.pills.map((pill) => (
                    <li
                      key={pill.text}
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold leading-snug ${pillStyles[pill.v]}`}
                    >
                      {pill.text}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        {/* CTA Mobile/Tablet */}
        <div className="mx-auto w-full max-w-[44rem] lg:hidden">
          <CtaGroup center />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
