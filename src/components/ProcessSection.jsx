import React, { useRef, useEffect } from 'react';
import { gsap } from './gsapSetup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA1 from './CTA1';

const IlloBrowser = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <filter id="pb_glow"><feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#00A6FB" floodOpacity="0.4"/></filter>
      <filter id="pb_blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="pb_body" x1="20%" y1="0%" x2="80%" y2="100%"><stop offset="0%" stopColor="#0d4070"/><stop offset="100%" stopColor="#001830"/></linearGradient>
      <linearGradient id="pb_topbar" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.35"/><stop offset="100%" stopColor="#0060aa" stopOpacity="0.2"/></linearGradient>
      <linearGradient id="pb_shine" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="white" stopOpacity="0.22"/><stop offset="45%" stopColor="white" stopOpacity="0"/></linearGradient>
      <radialGradient id="pb_orb" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.35"/><stop offset="100%" stopColor="#00A6FB" stopOpacity="0"/></radialGradient>
      <linearGradient id="pb_imgph" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.25"/><stop offset="100%" stopColor="#003566" stopOpacity="0.1"/></linearGradient>
      <linearGradient id="pb_cta" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00A6FB"/><stop offset="100%" stopColor="#0070cc"/></linearGradient>
      <radialGradient id="pb_sdw" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.3"/><stop offset="100%" stopColor="#00A6FB" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="168" rx="72" ry="12" fill="url(#pb_sdw)" filter="url(#pb_blur)"/>
    <ellipse cx="100" cy="95" rx="68" ry="58" fill="url(#pb_orb)" filter="url(#pb_blur)"/>
    <rect x="20" y="28" width="160" height="130" rx="12" fill="#0a2a48" transform="translate(8,8)"/>
    <path d="M180 36 L188 44 L188 166 L180 158Z" fill="#020e1c" opacity="0.9"/>
    <path d="M20 158 L28 166 L188 166 L180 158Z" fill="#010b18" opacity="0.9"/>
    <g filter="url(#pb_glow)" transform="rotate(-2, 100, 100)">
      <rect x="20" y="28" width="160" height="130" rx="12" fill="url(#pb_body)" stroke="rgba(0,166,251,0.4)" strokeWidth="1.2"/>
      <rect x="20" y="28" width="160" height="30" rx="12" fill="url(#pb_topbar)"/>
      <rect x="20" y="46" width="160" height="12" fill="url(#pb_topbar)"/>
      <line x1="20" y1="58" x2="180" y2="58" stroke="#00A6FB" strokeWidth="0.8" strokeOpacity="0.35"/>
      <circle cx="36" cy="43" r="5.5" fill="#00A6FB" fillOpacity="0.85"/>
      <circle cx="52" cy="43" r="5.5" fill="#00A6FB" fillOpacity="0.45"/>
      <circle cx="68" cy="43" r="5.5" fill="#00A6FB" fillOpacity="0.2"/>
      <rect x="80" y="35" width="82" height="16" rx="8" fill="rgba(0,0,0,0.25)" stroke="rgba(0,166,251,0.3)" strokeWidth="0.8"/>
      <rect x="30" y="66" width="140" height="42" rx="6" fill="url(#pb_imgph)" stroke="rgba(0,166,251,0.2)" strokeWidth="0.8"/>
      <line x1="30" y1="66" x2="170" y2="108" stroke="#00A6FB" strokeWidth="0.8" strokeOpacity="0.18"/>
      <line x1="170" y1="66" x2="30" y2="108" stroke="#00A6FB" strokeWidth="0.8" strokeOpacity="0.18"/>
      <path d="M85 96 L100 78 L115 96Z" fill="#00A6FB" fillOpacity="0.3" stroke="#00A6FB" strokeWidth="0.8" strokeOpacity="0.5"/>
      <circle cx="90" cy="82" r="4" fill="#00A6FB" fillOpacity="0.35"/>
      <rect x="30" y="116" width="100" height="7" rx="3.5" fill="#00A6FB" fillOpacity="0.3"/>
      <rect x="30" y="127" width="76" height="6" rx="3" fill="#00A6FB" fillOpacity="0.2"/>
      <rect x="30" y="140" width="60" height="12" rx="6" fill="url(#pb_cta)" opacity="0.8"/>
      <rect x="20" y="28" width="160" height="65" rx="12" fill="url(#pb_shine)"/>
      <rect x="20" y="28" width="160" height="130" rx="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <path d="M34 28 L180 28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
    </g>
    <circle cx="14" cy="52" r="3" fill="#00A6FB" fillOpacity="0.5" filter="url(#pb_blur)"/>
    <circle cx="188" cy="46" r="2.5" fill="#00A6FB" fillOpacity="0.45"/>
    <circle cx="12" cy="140" r="1.8" fill="#00A6FB" fillOpacity="0.35"/>
  </svg>
);

const IlloForm = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <filter id="pf_glow"><feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#00A6FB" floodOpacity="0.42"/></filter>
      <filter id="pf_blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="14"/></filter>
      <filter id="pf_dot" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="pf_face" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1d6aab"/><stop offset="55%" stopColor="#0c3e70"/><stop offset="100%" stopColor="#051e3a"/></linearGradient>
      <linearGradient id="pf_depR" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#07294a"/><stop offset="100%" stopColor="#031320"/></linearGradient>
      <linearGradient id="pf_shine" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="white" stopOpacity="0.28"/><stop offset="100%" stopColor="white" stopOpacity="0"/></linearGradient>
      <radialGradient id="pf_orb" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.38"/><stop offset="100%" stopColor="#00A6FB" stopOpacity="0"/></radialGradient>
      <radialGradient id="pf_check" cx="30%" cy="25%" r="70%"><stop offset="0%" stopColor="#60d4ff"/><stop offset="100%" stopColor="#0068cc"/></radialGradient>
      <radialGradient id="pf_active" cx="30%" cy="25%" r="70%"><stop offset="0%" stopColor="#fff"/><stop offset="45%" stopColor="#00A6FB"/><stop offset="100%" stopColor="#0044aa"/></radialGradient>
      <linearGradient id="pf_clip" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#2485d0"/><stop offset="100%" stopColor="#0055aa"/></linearGradient>
      <linearGradient id="pf_bar" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00A6FB"/><stop offset="100%" stopColor="#006ccc"/></linearGradient>
    </defs>
    <ellipse cx="100" cy="120" rx="80" ry="72" fill="url(#pf_orb)" filter="url(#pf_blur)"/>
    <rect x="38" y="38" width="140" height="144" rx="14" fill="url(#pf_depR)" transform="translate(8,8)"/>
    <path d="M178 46 L186 54 L186 190 L178 182Z" fill="#030f1e" opacity="0.9"/>
    <path d="M38 182 L46 190 L186 190 L178 182Z" fill="#020b18" opacity="0.9"/>
    <g filter="url(#pf_glow)">
      <rect x="38" y="38" width="140" height="144" rx="14" fill="url(#pf_face)" stroke="rgba(0,166,251,0.42)" strokeWidth="1.2"/>
      <rect x="38" y="38" width="140" height="72" rx="14" fill="url(#pf_shine)"/>
      <path d="M52 38 L178 38" stroke="rgba(255,255,255,0.38)" strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="86" y="28" width="36" height="18" rx="6" fill="url(#pf_clip)" stroke="rgba(0,166,251,0.5)" strokeWidth="1"/>
      <rect x="92" y="22" width="24" height="11" rx="4" fill="#0a3c6a" stroke="rgba(0,166,251,0.3)" strokeWidth="0.8"/>
      <circle cx="104" cy="30" r="5" fill="#041c30" stroke="rgba(0,166,251,0.35)" strokeWidth="0.8"/>
      <line x1="58" y1="66" x2="156" y2="66" stroke="rgba(0,166,251,0.22)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="58" cy="66" r="9" fill="url(#pf_check)" filter="url(#pf_dot)"/>
      <path d="M53 66 L57.5 70.5 L65 60" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="83" cy="66" r="9" fill="url(#pf_check)" filter="url(#pf_dot)"/>
      <path d="M78 66 L82.5 70.5 L90 60" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="110" cy="66" r="11" fill="url(#pf_active)" filter="drop-shadow(0 0 8px rgba(0,166,251,0.9))"/>
      <circle cx="106" cy="62" r="3.5" fill="white" fillOpacity="0.55"/>
      <circle cx="137" cy="66" r="9" fill="none" stroke="rgba(0,166,251,0.28)" strokeWidth="1.8"/>
      <circle cx="162" cy="66" r="9" fill="none" stroke="rgba(0,166,251,0.18)" strokeWidth="1.8"/>
      <circle cx="52" cy="98" r="8.5" fill="url(#pf_check)"/>
      <path d="M47 98 L51.5 102.5 L59 93" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="70" y="93" width="98" height="10" rx="5" fill="url(#pf_bar)" opacity="0.75"/>
      <circle cx="52" cy="120" r="8.5" fill="url(#pf_check)"/>
      <path d="M47 120 L51.5 124.5 L59 115" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="70" y="115" width="98" height="10" rx="5" fill="url(#pf_bar)" opacity="0.55"/>
      <circle cx="52" cy="142" r="8.5" fill="none" stroke="#00A6FB" strokeWidth="2.2" filter="drop-shadow(0 0 5px rgba(0,166,251,0.8))"/>
      <circle cx="52" cy="142" r="4" fill="#00A6FB" opacity="0.85"/>
      <rect x="70" y="137" width="98" height="10" rx="5" fill="rgba(0,166,251,0.08)" stroke="rgba(0,166,251,0.22)" strokeWidth="0.8"/>
      <rect x="70" y="137" width="44" height="10" rx="5" fill="url(#pf_bar)" opacity="0.45"/>
      <circle cx="52" cy="164" r="8.5" fill="none" stroke="rgba(0,166,251,0.2)" strokeWidth="1.5"/>
      <rect x="70" y="159" width="98" height="10" rx="5" fill="rgba(0,166,251,0.06)" stroke="rgba(0,166,251,0.1)" strokeWidth="0.8"/>
    </g>
    <circle cx="24" cy="52" r="2.6" fill="#00A6FB" opacity="0.7" filter="url(#pf_dot)"/>
    <circle cx="186" cy="36" r="2" fill="#00A6FB" opacity="0.5"/>
    <circle cx="20" cy="148" r="1.7" fill="#00A6FB" opacity="0.35"/>
  </svg>
);

const IlloPhone = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <filter id="pp_glow"><feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#00A6FB" floodOpacity="0.5"/></filter>
      <filter id="pp_blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="16"/></filter>
      <filter id="pp_ring" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="pp_grn" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="pp_phone" x1="20%" y1="0%" x2="80%" y2="100%"><stop offset="0%" stopColor="#1a5e99"/><stop offset="50%" stopColor="#0c3860"/><stop offset="100%" stopColor="#041a30"/></linearGradient>
      <linearGradient id="pp_phoneR" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#082a4a"/><stop offset="100%" stopColor="#020e1c"/></linearGradient>
      <linearGradient id="pp_screen" x1="15%" y1="0%" x2="85%" y2="100%"><stop offset="0%" stopColor="#062040"/><stop offset="100%" stopColor="#010a18"/></linearGradient>
      <linearGradient id="pp_shine" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="white" stopOpacity="0.3"/><stop offset="100%" stopColor="white" stopOpacity="0"/></linearGradient>
      <radialGradient id="pp_orb" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00A6FB" stopOpacity="0.42"/><stop offset="100%" stopColor="#00A6FB" stopOpacity="0"/></radialGradient>
      <radialGradient id="pp_accept" cx="30%" cy="28%" r="70%"><stop offset="0%" stopColor="#6dffb0"/><stop offset="50%" stopColor="#00d46a"/><stop offset="100%" stopColor="#00843a"/></radialGradient>
      <radialGradient id="pp_decline" cx="30%" cy="28%" r="70%"><stop offset="0%" stopColor="#ff6b6b"/><stop offset="100%" stopColor="#aa1111"/></radialGradient>
      <radialGradient id="pp_callIcon" cx="30%" cy="25%" r="70%"><stop offset="0%" stopColor="#60d4ff"/><stop offset="100%" stopColor="#0055aa"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="108" rx="72" ry="66" fill="url(#pp_orb)" filter="url(#pp_blur)"/>
    <ellipse cx="100" cy="108" rx="62" ry="72" fill="none" stroke="#00A6FB" strokeWidth="1.4" opacity="0.12" filter="url(#pp_ring)"/>
    <ellipse cx="100" cy="108" rx="78" ry="90" fill="none" stroke="#00A6FB" strokeWidth="1" opacity="0.07" filter="url(#pp_ring)"/>
    <rect x="62" y="22" width="82" height="158" rx="18" fill="url(#pp_phoneR)" transform="translate(7,7)"/>
    <path d="M144 29 L151 36 L151 187 L144 180Z" fill="#02101e" opacity="0.9"/>
    <path d="M62 180 L69 187 L151 187 L144 180Z" fill="#010c18" opacity="0.9"/>
    <g filter="url(#pp_glow)" transform="rotate(2, 100, 108)">
      <rect x="62" y="22" width="82" height="158" rx="18" fill="url(#pp_phone)" stroke="rgba(0,166,251,0.45)" strokeWidth="1.2"/>
      <rect x="70" y="38" width="66" height="122" rx="10" fill="url(#pp_screen)"/>
      <rect x="70" y="38" width="66" height="122" rx="10" fill="#00A6FB" fillOpacity="0.05"/>
      <rect x="88" y="29" width="24" height="6" rx="3" fill="rgba(0,0,20,0.8)"/>
      <circle cx="100" cy="80" r="20" fill="rgba(0,166,251,0.1)" stroke="rgba(0,166,251,0.28)" strokeWidth="1.2"/>
      <path d="M91 80 C90 78 90 76 92 75 L94 74 C94.6 73.7 95.4 73.9 95.9 74.5 L96.9 75.7 C97.3 76.3 97.3 77.1 96.9 77.6 L96.5 78.1 C96.3 78.3 96.3 78.6 96.5 78.9 L97.8 80.2 C98.1 80.5 98.4 80.5 98.7 80.2 L99.1 79.8 C99.6 79.3 100.4 79.2 100.9 79.7 L102 80.7 C102.6 81.2 102.7 82 102.4 82.7 L101.5 84.5 C101.1 85.5 100 85.8 99 85.4 C96.4 84.4 93.4 82.4 91 80Z" fill="url(#pp_callIcon)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5"/>
      <rect x="80" y="104" width="42" height="6" rx="3" fill="rgba(0,166,251,0.35)"/>
      <rect x="85" y="113" width="32" height="4.5" rx="2" fill="rgba(0,166,251,0.18)"/>
      <circle cx="87" cy="138" r="14" fill="url(#pp_accept)" filter="url(#pp_grn)"/>
      <path d="M81 138 C80 136 80 134 82 133 L84 132 C84.6 131.7 85.4 131.9 85.9 132.5 L86.9 133.7 C87.3 134.3 87.3 135.1 86.9 135.6 L86.5 136.1 C86.3 136.3 86.3 136.7 86.5 137 L87.8 138.3 C88.1 138.6 88.4 138.6 88.7 138.3 L89.1 137.9 C89.7 137.4 90.5 137.3 91 137.8 L92.1 138.8 C92.7 139.3 92.8 140.1 92.5 140.8 L91.6 142.6 C91.2 143.6 90.1 143.9 89.1 143.5 C86.5 142.5 83.5 140.5 81 138Z" fill="white" fillOpacity="0.92"/>
      <circle cx="113" cy="138" r="14" fill="url(#pp_decline)" fillOpacity="0.75"/>
      <line x1="108" y1="134" x2="118" y2="144" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.88"/>
      <line x1="118" y1="134" x2="108" y2="144" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.88"/>
      <rect x="86" y="172" width="32" height="3.5" rx="1.75" fill="rgba(255,255,255,0.3)"/>
      <path d="M62 42 L62 160 C62 152 68 38 73 38 L62 42Z" fill="white" fillOpacity="0.1"/>
      <rect x="62" y="22" width="82" height="50" rx="18" fill="url(#pp_shine)"/>
      <rect x="62" y="22" width="82" height="158" rx="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <path d="M78 22 L144 22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
    </g>
    <path d="M38 70 Q20 108 38 146" fill="none" stroke="#00A6FB" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" filter="url(#pp_ring)"/>
    <path d="M26 60 Q4 108 26 156" fill="none" stroke="#00A6FB" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.22" filter="url(#pp_ring)"/>
    <path d="M162 70 Q180 108 162 146" fill="none" stroke="#00A6FB" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" filter="url(#pp_ring)"/>
    <path d="M174 60 Q196 108 174 156" fill="none" stroke="#00A6FB" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.22" filter="url(#pp_ring)"/>
    <circle cx="28" cy="46" r="3.5" fill="#00A6FB" opacity="0.8" filter="url(#pp_ring)"/>
    <circle cx="172" cy="42" r="3" fill="#00A6FB" opacity="0.7" filter="url(#pp_ring)"/>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

// ─── Copy – Hormozi Value Equation pro Step ───────────────────────────────
// Dream Outcome × Perceived Likelihood ÷ Time Delay × Effort & Sacrifice
const steps = [
  {
    num: '01',
    label: 'Schritt 1 · 0 € · 15 Minuten',
    title: 'Kostenlose Website-Analyse',
    titleHighlight: 'ich zeige Ihnen was Anfragen kostet',
    // Effort↓ + Time↓ + Likelihood↑ (konkret, vorher anschauen)
    description: 'Ich schaue mir Ihre Website vorher an und zeige Ihnen in 15 Minuten genau, wo Besucher abspringen – ohne Vorbereitung, ohne Technikgespräch.',
    trustPills: [
      { text: '✓ 0 € · Kostenlos', variant: 'green' },
      { text: '⏱ 15 Minuten',      variant: 'blue'  },
      { text: 'Keine Vorbereitung', variant: 'white' },
    ],
    badge: '📞 Telefonisch · 15 Min · keine Vorbereitung nötig',
    Illo: IlloBrowser,
  },
  {
    num: '02',
    label: 'Schritt 2 · Ihr einziger Aufwand',
    title: 'Sie füllen ein kurzes Briefing aus',
    titleHighlight: 'den Rest erledige ich',
    // Effort↓: klare Fragen, alles mit Anleitung/Vorlage vorbereitet
    // Transparency: Hosting + rechtliche Texte offen kommuniziert, aber als "kein Problem" geframt
    description: 'Klare Fragen zu Ihrem Betrieb – für Hosting und rechtliche Texte gibt es fertige Schritt-für-Schritt-Anleitungen. Design, Texte, Entwicklung und Launch übernehme ich komplett. In 2–4 Wochen.',
    trustPills: [
      { text: '⚡ 2–4 Wochen',             variant: 'green'  },
      { text: 'Hosting-Anleitung inklusive', variant: 'blue' },
      { text: 'Rechtliche Texte: Anleitung inklusive', variant: 'white' },
    ],
    badge: '📋 Nur ein Briefing · alles andere mache ich',
    Illo: IlloForm,
  },
  {
    num: '03',
    label: 'Schritt 3 · Ihr Ergebnis',
    title: 'Ihre Website ist live',
    titleHighlight: 'und arbeitet täglich für Ihren Betrieb',
    // Dream Outcome (Google, Anfragen) + Effort↓ (kein Werbebudget, keine Empfehlungen mehr)
    description: 'Interessierte aus Ihrer Region finden Sie bei Google, verstehen Ihr Angebot sofort und wissen, wie sie Sie erreichen – ohne Werbebudget, ohne Abhängigkeit von Empfehlungen.',
    trustPills: [
      { text: '📍 Lokal bei Google',  variant: 'green' },
      { text: 'Bessere Kunden',     variant: 'blue'  },
      { text: 'Messbare Anfragen',              variant: 'white' },
    ],
    badge: '🚀 Lokal auffindbar · auf Anfragen optimiert',
    Illo: IlloPhone,
  },
];

const pillVariants = {
  green: 'text-[#4ade80] bg-[#4ade80]/09 border-[#4ade80]/18',
  blue:  'text-[#60d4ff] bg-[#00A6FB]/10 border-[#00A6FB]/20',
  white: 'text-white/60 bg-white/05 border-white/08',
};

const ConnectorArrow = () => (
  <div className="hidden md:flex items-center justify-center flex-shrink-0 self-center w-8">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 11H16M12 7l5 4-5 4"
        stroke="#003566" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.42"/>
    </svg>
  </div>
);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 86%' } }
      );
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y: 48, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
            delay: i * 0.12 }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 xl:px-0 overflow-hidden">

      {/* Section bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,53,102,0.05) 0%, transparent 70%)' }} />

      <div className="mx-auto w-full max-w-[700px] xl:max-w-[1060px]">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4 text-[#000814]">
            So läuft die{' '}
            <span className="text-[#003566]">Zusammenarbeit</span>{' '}
            mit mir ab
          </h2>
          {/*
            Subline – Hormozi:
            Effort↓ ("ein Briefing")  ×  Dream Outcome ("lokal gefunden, Anfragen")
            ÷ Time Delay ("2–4 Wochen")  ÷ Effort ("der Rest liegt bei mir")
          */}
          <p className="text-[14.5px] md:text-[15px] text-[#000814]/52 max-w-[460px] mx-auto leading-[1.65]">
            Ihr Aufwand: ein Briefing. Alles andere liegt bei mir.{' '}
            <span className="font-semibold text-[#000814]/72">In 2–4 Wochen</span>{' '}
            haben Sie eine Website, die lokal gefunden wird und Besucher zur Anfrage führt.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0">
          {steps.map((step, index) => {
            const { Illo } = step;
            return (
              <React.Fragment key={index}>

                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group relative flex-1 flex flex-col rounded-[20px] overflow-hidden border border-[#00A6FB]/12 bg-gradient-to-b from-[#021830] to-[#010d1a] transition-all duration-300 ease-out cursor-default hover:-translate-y-1.5 hover:border-[#00A6FB]/28"
                  style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset, 0 6px 32px rgba(0,10,28,0.2)' }}
                >
                  {/* Top shimmer */}
                  <div className="absolute top-0 left-[13%] right-[13%] h-px bg-gradient-to-r from-transparent via-[#00A6FB]/42 to-transparent" />
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]"
                    style={{ background: 'radial-gradient(ellipse 80% 45% at 50% 0%, rgba(0,166,251,0.07) 0%, transparent 60%)' }} />

                  {/* Step number badge */}
                  <span className="absolute top-3.5 left-4 text-[9.5px] font-extrabold tracking-[0.1em] text-[#00A6FB]/60 bg-[#00A6FB]/07 border border-[#00A6FB]/14 rounded-[7px] px-2 py-0.5">
                    {step.num}
                  </span>

                  {/* Illustration */}
                  <div className="flex items-center justify-center pt-10 pb-2 px-6 h-[168px]">
                    <div className="w-[148px] h-[148px]"><Illo /></div>
                  </div>

                  {/* Divider */}
                  <div className="mx-5 h-px bg-gradient-to-r from-transparent via-[#00A6FB]/12 to-transparent" />

                  {/* Content */}
                  <div className="px-5 pt-4 pb-6 flex flex-col flex-1">

                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#00A6FB]/38 mb-2">
                      {step.label}
                    </p>

                    <h3 className="text-[14.5px] font-black text-white tracking-tight leading-[1.32] mb-2.5">
                      {step.title} –{' '}
                      <span className="text-[#00A6FB]">{step.titleHighlight}</span>
                    </h3>

                    {/* Short description – max 2 sentences */}
                    <p className="text-[12.5px] text-white/42 leading-[1.65] mb-4 flex-1">
                      {step.description}
                    </p>

                    {/* Trust pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {step.trustPills.map((pill, i) => (
                        <span key={i}
                          className={`inline-flex items-center text-[10px] font-bold border rounded-full px-2.5 py-[3.5px] whitespace-nowrap ${pillVariants[pill.variant]}`}>
                          {pill.text}
                        </span>
                      ))}
                    </div>

                    {/* Badge pill */}
                    <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-semibold text-[#00A6FB]/78 bg-[#00A6FB]/06 border border-[#00A6FB]/15 rounded-full px-3 py-[5px] leading-snug">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#00A6FB] flex-shrink-0"
                        style={{ boxShadow: '0 0 6px rgba(0,166,251,0.7)' }} />
                      {step.badge}
                    </span>

                  </div>
                </div>

                {index < steps.length - 1 && <ConnectorArrow />}
              </React.Fragment>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 md:mt-12 justify-center items-center flex flex-col gap-2.5">
          <CTA1 />
          <p className="text-[12px] md:text-[13px] text-[#000814]/36">
            Kostenlos & unverbindlich · 15 Minuten · Keine Vorbereitung nötig
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
