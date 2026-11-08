import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import CheckIcon from "../components/CheckIcon";
import CalendlyFallBackForm from "../components/CalendlyFallbackForm";
import Testimonials from "../components/Testimonials";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────
   DESIGN-SYSTEM (identisch zur neuen ProcessSection)
   - Hell, Text #000814, Akzent #003566, Dunkel #001D3D, Cyan #00A6FB
   - Keine eckigen Boxen mehr: offene Layouts, Haarlinien, rounded-[20px]
     nur für dunkle Visual-Panels
   - Eyebrows in normaler Schreibweise (kein GROSSBUCHSTABEN-Tracking)
   - Breiter Container 80rem, Textspalten max. 34rem
───────────────────────────────────────────────────────────── */

/* ── FAQ: eine Quelle für sichtbaren Text UND Schema ─────────── */
const faqs = [
  {
    q: "Ist das wirklich kostenlos - was ist der Haken?",
    a: "Kein Haken. Ich zeige Ihnen in 15 Minuten konkret, was auf Ihrer Seite nicht funktioniert. Am Ende erkläre ich kurz, was ich anbiete - aber nur wenn es passt, und ohne Druck. Viele setzen die Hinweise auch einfach selbst um. Das ist mir recht.",
  },
  {
    q: "Ich hatte schon mal eine Agentur - das hat nichts gebracht.",
    a: "Das höre ich oft. Meistens lag es daran, dass die Website zwar gut aussah, aber nie darauf ausgelegt war, dass jemand anruft. Genau das schaue ich mir in der Analyse an - nicht ob die Seite schön ist, sondern ob sie Besucher zur Kontaktaufnahme führt.",
  },
  {
    q: "Ich habe gerade keine Zeit für sowas.",
    a: "Deswegen dauert es auch nur 15 Minuten. Ich schaue mir Ihre Seite vorher an - Sie brauchen nichts vorzubereiten, nichts nachzulesen, nichts zu erklären. Sie hören zu und stellen Fragen, wenn etwas unklar ist.",
  },
  {
    q: "Meine Website ist doch eigentlich okay.",
    a: "Möglich. Viele Seiten sehen ordentlich und gut aus und verlieren trotzdem mehrmals im Monat Anfragen. In 15 Minuten wissen wir, ob das bei Ihnen so ist oder ob wirklich alles passt. Wenn alles gut ist, sage ich das.",
  },
  {
    q: "Ich habe schon eine Website - warum eine neue?",
    a: "Das muss gar nicht das Ergebnis sein. Die Analyse zeigt zuerst, ob die bestehende Seite grundlegende Dinge besser machen kann. Manchmal reichen kleine Änderungen. Ob eine neue Seite sinnvoll ist, besprechen wir erst danach - und nur wenn Sie das möchten.",
  },
  {
    q: "Wie läuft das Gespräch ab - muss ich irgendwas vorbereiten?",
    a: "Nein. Wir telefonieren kurz, ich teile meinen Bildschirm und zeige direkt auf Ihrer Seite, wo Sie Anfragen verlieren und was Sie dagegen tun könnten. Keine Präsentation, keine Unterlagen. Nur Ihre Website-Adresse, die haben Sie ja.",
  },
  {
    q: "Ich kenne mich mit dem ganzen Internet-Kram nicht aus.",
    a: "Umso besser. Ich erkläre alles ohne Fachbegriffe - so, dass Sie danach genau wissen, was auf Ihrer Seite fehlt. Kein Technik-Gespräch, kein Vortrag.",
  },
  {
    q: "Was kostet eine neue Website bei Ihnen, falls ich Interesse hätte?",
    a: "Eine Website, die auf Anfragen ausgerichtet ist, fängt bei 800€ an. Den genauen Preis besprechen wir im Gespräch - er hängt vom Umfang ab. Keine monatlichen Gebühren, kein verstecktes Abo.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.franco-cipolla.de" },
        { "@type": "ListItem", position: 2, name: "Kostenlose Website-Analyse", item: "https://www.franco-cipolla.de/website-analyse" },
      ],
    },
  ],
};

/* ── Helfer ──────────────────────────────────────────────────── */
const scrollToEl = (ref) =>
  ref.current?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const sectionPad = "py-[clamp(56px,9vw,120px)]";

const Eyebrow = ({ children }) => (
  <p className="mb-3 text-[13px] font-semibold text-[#003566]/80 sm:text-sm">{children}</p>
);

const H2 = ({ id, children, className = "" }) => (
  <h2
    id={id}
    className={`text-[clamp(28px,4.2vw,48px)] font-semibold leading-[1.1] tracking-tight text-[#000814] ${className}`}
  >
    {children}
  </h2>
);

/* ── Sticky Mobile CTA: weg, sobald das Formular sichtbar ist ── */
const StickyMobileCTA = ({ formRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [formInView, setFormInView] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = formRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setFormInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [formRef]);

  const visible = scrolled && !formInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 motion-reduce:transition-none sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] backdrop-blur pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold leading-tight text-[#000814]">Kostenlose Website-Analyse</p>
          <p className="mt-0.5 text-[12px] text-black/50">15 Minuten, kostenlos, kein Druck</p>
        </div>
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={() => scrollToEl(formRef)}
          className="flex-none rounded-full bg-[#001D3D] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform active:scale-95"
        >
          Jetzt anfragen
        </button>
      </div>
    </div>
  );
};

/* ── Visuals (nur HTML/CSS, dekorativ) ───────────────────────── */
const ScanRow = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#00A6FB]/20 text-[#60d4ff]">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="text-[13px] text-white/85 sm:text-sm">{children}</span>
  </div>
);

const VisualScan = () => (
  <div className="flex w-full flex-col justify-center gap-3 p-5 sm:gap-3.5 sm:p-8">
    <p className="mb-1 text-xs font-semibold text-[#60d4ff]">Vorab-Check Ihrer Website</p>
    <ScanRow>Ist die Telefonnummer sofort sichtbar?</ScanRow>
    <ScanRow>Weiß der Besucher, was er als Nächstes tun soll?</ScanRow>
    <ScanRow>Wie schnell lädt die Seite auf dem Handy?</ScanRow>
    <ScanRow>Erklärt die Seite den Nutzen für den Kunden?</ScanRow>
    <p className="mt-1 text-xs text-white/45">Ihr Aufwand: keiner.</p>
  </div>
);

const Marker = ({ n, className }) => (
  <span
    className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-[#00A6FB] text-[11px] font-bold text-[#001226] ring-4 ring-[#00A6FB]/25 ${className}`}
  >
    {n}
  </span>
);

const VisualScreen = () => (
  <div className="flex w-full flex-col items-center justify-center gap-3 p-5 sm:p-8">
    <div className="relative w-full max-w-[22rem] overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="space-y-3 p-4 pb-6">
        <div className="h-3 w-2/3 rounded bg-white/25" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-4/5 rounded bg-white/10" />
        <div className="h-8 w-28 rounded-full bg-white/15" />
        <div className="h-2 w-3/5 rounded bg-white/10" />
      </div>
      <Marker n={1} className="right-3 top-1.5" />
      <Marker n={2} className="left-[48%] top-[58%]" />
      <Marker n={3} className="right-[12%] top-[42%]" />
    </div>
    <p className="text-xs text-white/45">Bildschirm geteilt, 2 bis 3 Stellen markiert</p>
  </div>
);

const Choice = ({ children }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[13px] text-white/85 sm:text-sm">
    <span className="h-2 w-2 flex-none rounded-full bg-[#60d4ff]" />
    {children}
  </div>
);

const VisualChoice = () => (
  <div className="flex w-full flex-col justify-center gap-3 p-5 sm:p-8">
    <Choice>Sie setzen die Hinweise selbst um</Choice>
    <Choice>Wir besprechen, ob ich helfen kann</Choice>
    <Choice>Sie sagen Danke, und das war es</Choice>
    <p className="mt-1 text-xs text-white/45">Jede Antwort ist in Ordnung.</p>
  </div>
);

/* ── Timeline (gleiche Mechanik wie ProcessSection) ──────────── */
const steps = [
  {
    num: "01",
    label: "Vor dem Gespräch, Sie machen nichts",
    title: "Ich analysiere Ihre Website,",
    highlight: "bevor wir telefonieren",
    body: "Sie müssen mir nichts erklären, nichts vorbereiten. Ich schaue mir Ihre Seite vorher an und weiß beim Gespräch bereits, wo das Problem liegt.",
    result: "Sie kommen nicht vorbereitet. Sie kommen neugierig.",
    Visual: VisualScan,
  },
  {
    num: "02",
    label: "Im Gespräch, 15 Minuten live auf Ihrer Seite",
    title: "Sie sehen genau, warum Besucher kommen,",
    highlight: "aber nicht anrufen",
    body: "Ich teile meinen Bildschirm und zeige Ihnen direkt auf Ihrer Seite 2 bis 3 Stellen, die Interessenten still wieder verschwinden lassen. Keine Theorie, nur das, was bei Ihnen konkret passiert.",
    result: "Nach 15 Minuten wissen Sie mehr als vorher.",
    Visual: VisualScreen,
  },
  {
    num: "03",
    label: "Danach, Ihre Entscheidung",
    title: "Sie entscheiden.",
    highlight: "Ich akzeptiere jede Antwort",
    body: "Manche setzen die Hinweise selbst um. Manche fragen, ob ich das übernehmen kann. Und manche sagen einfach Danke und gehen. Das ist völlig in Ordnung.",
    result: "Sie sind zu nichts verpflichtet.",
    Visual: VisualChoice,
  },
];

const Timeline = () => {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: listRef.current, start: "top 65%", end: "bottom 65%", scrub: 0.3 },
        }
      );
      itemRefs.current.forEach((item, i) => {
        const node = nodeRefs.current[i];
        if (!item || !node) return;
        ScrollTrigger.create({
          trigger: item,
          start: "top 65%",
          onEnter: () => node.classList.add("is-active"),
          onLeaveBack: () => node.classList.remove("is-active"),
        });
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(fillRef.current, { scaleY: 1 });
      nodeRefs.current.forEach((n) => n && n.classList.add("is-active"));
    });

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
      mm.revert();
    };
  }, []);

  return (
    <div ref={rootRef} id="ablauf">
      <style>{`
        #ablauf .ps-node{background:#fff;border-color:rgba(0,8,20,.16);transition:background-color .2s,border-color .2s,box-shadow .2s}
        #ablauf .ps-node.is-active{background:#003566;border-color:#003566;box-shadow:0 0 0 6px rgba(0,166,251,.16)}
        #ablauf .ps-num{color:transparent;-webkit-text-stroke:1.5px rgba(0,53,102,.35)}
        @media (prefers-reduced-motion:reduce){#ablauf .ps-node{transition:none}}
      `}</style>

      <ol ref={listRef} className="relative m-0 mx-auto w-full max-w-[44rem] list-none p-0 lg:mx-0 lg:max-w-none">
        <div aria-hidden="true" className="absolute bottom-0 left-[9px] top-0 w-[2px] bg-black/10">
          <div ref={fillRef} className="h-full w-full origin-top scale-y-0 bg-[#003566] will-change-transform" />
        </div>

        {steps.map((step, i) => {
          const { Visual } = step;
          return (
            <li
              key={step.num}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ "--n": "clamp(46px, 7vw, 76px)" }}
              className={`relative pl-9 sm:pl-12 md:pl-16 ${i < steps.length - 1 ? "pb-12 md:pb-20" : ""}`}
            >
              <span
                ref={(el) => (nodeRefs.current[i] = el)}
                aria-hidden="true"
                style={{ top: "calc(var(--n) * 0.425 - 10px)" }}
                className="ps-node absolute left-0 h-5 w-5 rounded-full border-2"
              />

              <div className="mb-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="ps-num font-black leading-[0.85]" style={{ fontSize: "var(--n)" }} aria-hidden="true">
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
                {step.title} <span className="text-[#003566]">{step.highlight}.</span>
              </h3>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-[1.7] text-black/75 sm:text-base">{step.body}</p>
              <p className="mt-3 max-w-[34rem] text-[15px] font-semibold leading-snug text-[#003566] sm:text-base">
                {step.result}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

/* ── Pain-Icons ──────────────────────────────────────────────── */
const PainIcon = ({ d }) => (
  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#001D3D] text-[#60d4ff]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const pains = [
  {
    d: "M3 13l2.2-7h13.6L21 13v5H3z M3 13h5l1 2h6l1-2h5",
    title: "Anfragen kommen, aber selten und unregelmäßig",
    body: "Manchmal meldet sich jemand, manchmal wochenlang nicht. Sie wissen nie, was nächsten Monat über die Website kommt.",
  },
  {
    d: "M4 10a6 6 0 0 1 10.2-3.6L17 9 M17 4v5h-5 M20 14a6 6 0 0 1-10.2 3.6L7 15 M7 20v-5h5",
    title: "Fast alles läuft noch über Empfehlungen",
    body: "Solange die Stammkunden da sind, läuft es. Aber das liegt nicht an Ihrer Website, und das ist ein Problem.",
  },
  {
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2",
    title: "Für Online-Kram ist sowieso keine Zeit",
    body: "Das Tagesgeschäft läuft. Wann soll man sich da noch um die Website kümmern? Also bleibt es, wie es ist.",
  },
];

const mistakes = [
  {
    title: "Die Telefonnummer ist nicht sofort sichtbar",
    body: "Sie ist irgendwo im unteren Bereich der Seite versteckt. Der Interessent muss erst suchen und sucht dann woanders.",
  },
  {
    title: "Der Besucher weiß nicht, was er als Nächstes tun soll",
    body: "„Kontakt“ als einziger Hinweis reicht nicht. „Jetzt kostenlose Einschätzung anfragen“ ist ein Unterschied: klein im Text, groß in der Wirkung.",
  },
  {
    title: "Die Seite erklärt den Betrieb, aber nicht, was der Kunde davon hat",
    body: "„Seit 20 Jahren in Ennepetal tätig“ beantwortet nicht: Kannst du mein Problem lösen? Wie schnell? Was kostet das?",
  },
];

/* ─────────────────────────────────────────────────────────────
   SEITE
───────────────────────────────────────────────────────────── */
const ErstGespraech = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  /* Seite startet immer oben. ScrollTrigger merkt sich sonst die Scrollposition der
     vorherigen Seite (z. B. Startseite) und springt beim Öffnen dorthin zurück.
     behavior "instant" überschreibt ein globales scroll-behavior: smooth. */
  useLayoutEffect(() => {
    if (window.location.hash) return;
    ScrollTrigger.clearScrollMemory();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  /* Hero-Intro beim Öffnen + ein einziger Reveal für alle [data-reveal]-Elemente.
     LCP-sicher: Die H1 bewegt sich nur (transform), bleibt aber sichtbar (opacity 1),
     damit der größte Text sofort gerendert wird. Alles andere blendet kurz ein. */
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(pageRef);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = (sel) => gsap.utils.toArray(sel, pageRef.current);

      const intro = gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform" } });
      intro
        .fromTo(q('[data-hero="fade"]').filter((el) => el.tagName !== "H1"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.05)
        .fromTo(q('[data-hero="h1"]'), { y: 24 }, { y: 0, duration: 0.9 }, 0)
        .fromTo(q('[data-hero="card"]'), { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.9 }, 0.25);

      const items = gsap.utils.toArray("[data-reveal]", pageRef.current);
      gsap.set(items, { opacity: 0, y: 24 });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Helmet>
        <title>Kostenlose Website-Analyse für mehr Anfragen | Franco Cipolla</title>
        <meta
          name="description"
          content="Kostenlose Website-Analyse: Erfahren Sie, warum Ihre Website Besucher verliert und welche Optimierungen mehr Anfragen bringen können."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/website-analyse" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <StickyMobileCTA formRef={formRef} />

      {/* ══ HERO: Text links, Formular rechts (ein einziges Formular auf der Seite) ══ */}
      <section className="relative w-full pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
          <div>
            <p data-hero="fade" className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#003566] sm:text-[13px]">
              <span className="h-2 w-2 flex-none animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
              Lokal für Betriebe in Ennepetal und NRW
            </p>

            <h1 data-hero="h1" className="text-[clamp(26px,4.2vw,46px)] font-semibold leading-[1.15] tracking-tight text-[#000814]">
              In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert und was Sie konkret dagegen tun können.
            </h1>

            <p data-hero="fade" className="mt-5 max-w-[34rem] text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-black/70">
              Danach wissen Sie genau, was fehlt, damit Ihr Telefon öfter klingelt, und zwar von Leuten aus Ihrer
              Region, die Sie noch nicht kennen.
            </p>

            <ul data-hero="fade" className="mt-5 flex list-none flex-wrap gap-2 p-0">
              {["Kostenlos", "Keine Vorbereitung nötig", "Unverbindlich"].map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center rounded-full border border-[#00A6FB]/30 bg-[#00A6FB]/10 px-3 py-1 text-xs font-semibold text-[#003566]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <ul data-hero="fade" className="mt-7 flex max-w-[34rem] list-none flex-col gap-3 p-0">
              {[
                <>
                  Für Betriebe aus{" "}
                  <Link to="/" className="underline transition-colors hover:text-[#003566]">Ennepetal</Link>,{" "}
                  <Link to="/hagen" className="underline transition-colors hover:text-[#003566]">Hagen</Link>,{" "}
                  <Link to="/wuppertal" className="underline transition-colors hover:text-[#003566]">Wuppertal</Link>{" "}
                  und NRW
                </>,
                "Konkret auf Ihrer Seite gezeigt, keine Folien, keine Theorie",
                "Kein Druck: Sie entscheiden danach, was als Nächstes passiert",
                "15 Minuten, keine Vorbereitung nötig, Bestätigung per Nachricht",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-[3px] flex-shrink-0"><CheckIcon /></span>
                  <span className="text-[14px] leading-snug text-black/70 sm:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formular-Karte */}
          <div
            ref={formRef}
            data-hero="card"
            id="termin"
            className="scroll-mt-28 rounded-[20px] border border-black/10 bg-white shadow-[0_8px_40px_rgba(0,21,61,0.08)]"
          >
            <div className="border-b border-black/10 px-5 pb-4 pt-5 sm:px-7 sm:pb-5 sm:pt-6">
              <p className="mb-1.5 text-[13px] font-semibold text-[#003566]/80">Kostenlose Website-Analyse</p>
              <h2 className="text-[clamp(20px,2.2vw,26px)] font-semibold leading-snug tracking-tight text-[#000814]">
                Termin sichern, <span className="text-[#003566]">kostenlos und unverbindlich.</span>
              </h2>
              <p className="mt-1.5 text-[13px] text-black/50">15 Minuten, keine Vorbereitung nötig</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 flex-none animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
                <p className="text-[13px] text-black/50">Noch Plätze verfügbar diesen Monat</p>
              </div>
            </div>

            <div className="px-5 py-5 sm:px-7 sm:py-6">
              <CalendlyFallBackForm />
            </div>

            <div className="px-5 pb-5 sm:px-7 sm:pb-6">
              <p className="text-center text-[12px] text-black/45">
                Ihre Daten werden nicht weitergegeben.{" "}
                <Link to="/datenschutz" className="underline transition-colors hover:text-[#003566]">
                  Datenschutz
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="w-full py-6 sm:py-10">
        <Container>
          <Testimonials showCta={false} hasPadding={false} showTitle={true} eyebrowStyle={true} />
        </Container>
      </section>

      {/* ══ PAIN ══ */}
      <section className={`w-full ${sectionPad}`} aria-labelledby="pain-heading">
        <Container>
          <div data-reveal className="mx-auto mb-10 max-w-[40rem] text-center sm:mb-14">
            <Eyebrow>Kommt Ihnen das bekannt vor?</Eyebrow>
            <H2 id="pain-heading">
              Die Website ist da. <span className="text-[#003566]">Nur das Telefon klingelt nicht.</span>
            </H2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
            {pains.map(({ d, title, body }) => (
              <div key={title} data-reveal className="border-t border-black/10 pt-6">
                <PainIcon d={d} />
                <h3 className="mb-2 text-[18px] font-semibold leading-snug tracking-tight text-[#000814]">{title}</h3>
                <p className="text-[15px] leading-[1.7] text-black/65">{body}</p>
              </div>
            ))}
          </div>

          {/* Brücke als dunkles Panel (gleiche Optik wie die Visuals) */}
          <div
            data-reveal
            className="mt-12 rounded-[20px] bg-gradient-to-b from-[#021830] to-[#010d1a] p-6 sm:mt-16 sm:p-10"
          >
            <p className="mx-auto max-w-[44rem] text-center text-[clamp(17px,2vw,22px)] font-semibold leading-[1.5] text-white">
              In 15 Minuten sehen Sie konkret, warum Besucher kommen, aber nicht anrufen. Und was sich daran ändern
              lässt.{" "}
              <span className="text-[#60d4ff]">Ohne dass Sie vorher irgendetwas vorbereiten müssen.</span>
            </p>
          </div>
        </Container>
      </section>

      {/* ══ ABLAUF (Timeline) ══ */}
      <section className={`w-full ${sectionPad}`} aria-labelledby="ablauf-heading">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div data-reveal className="mx-auto w-full max-w-[44rem] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none lg:self-start">
            <Eyebrow>So läuft es ab</Eyebrow>
            <H2 id="ablauf-heading">
              15 Minuten. <span className="text-[#003566]">Kein Aufwand für Sie.</span>
            </H2>
            <p className="mt-5 max-w-[30rem] text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-black/70">
              Ich bereite alles vor. Sie bringen nur Ihre Website-Adresse und 15 Minuten mit.
            </p>
          </div>
          <Timeline />
        </Container>
      </section>

      {/* ══ DEMO-EINBLICK ══ */}
      <section className={`w-full ${sectionPad}`} aria-labelledby="demo-heading">
        <Container>
          <div data-reveal className="mx-auto mb-10 max-w-[40rem] text-center sm:mb-14">
            <Eyebrow>Beispiel aus einer Website-Analyse</Eyebrow>
            <H2 id="demo-heading">
              Was ich auf lokalen Websites <span className="text-[#003566]">immer wieder sehe</span>
            </H2>
          </div>

          <ol className="m-0 list-none p-0">
            {mistakes.map(({ title, body }, i) => (
              <li
                key={title}
                data-reveal
                className="grid gap-x-10 gap-y-3 border-t border-black/10 py-7 last:border-b sm:py-9 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start"
              >
                <span
                  aria-hidden="true"
                  className="text-[clamp(40px,5vw,56px)] font-black leading-none"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(0,53,102,.35)" }}
                >
                  {i + 1}
                </span>
                <h3 className="text-[clamp(19px,2vw,24px)] font-semibold leading-snug tracking-tight text-[#000814]">
                  <span className="sr-only">Fehler {i + 1}: </span>
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-black/65 sm:text-base">{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ══ FAQ (ursprüngliches Design) ══ */}
      <section
        id="faq"
        className="w-full border-t border-[#003566]/12 py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-0"
      >
        <div className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]">
          <h2 data-reveal className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-center mb-8 sm:mb-12">
            Häufige Fragen
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-reveal
                className="faq-item border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[13px] sm:text-[14px] lg:text-[15px] text-[#000814] leading-snug pr-2">
                    {faq.q}
                  </span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-[#003566] text-[11px] sm:text-[13px] transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-gray-100">
                    <p className="text-[13px] sm:text-[14px] text-[#000814]/65 leading-[1.7] pt-3 sm:pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA (kein zweites Formular, scrollt zum Formular oben) ══ */}
      <section className="w-full px-4 pb-28 pt-6 sm:px-6 sm:pb-24 lg:px-8">
        <div
          data-reveal
          className="mx-auto w-full max-w-[80rem] rounded-[20px] bg-gradient-to-b from-[#021830] to-[#010d1a] px-6 py-12 text-center sm:px-10 sm:py-16"
        >
          <p className="mb-3 text-[13px] font-semibold text-[#60d4ff] sm:text-sm">Kostenlose Website-Analyse</p>
          <h2 className="mx-auto max-w-[34rem] text-[clamp(26px,3.6vw,42px)] font-semibold leading-[1.12] tracking-tight text-white">
            Noch kein Termin? <span className="text-[#60d4ff]">Jetzt sichern.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[30rem] text-[15px] leading-[1.7] text-white/65 sm:text-base">
            15 Minuten, unverbindlich, keine Vorbereitung nötig.
          </p>
          <button
            type="button"
            onClick={() => scrollToEl(formRef)}
            className="group mt-8 cursor-pointer inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#001D3D] outline-none transition-transform focus-visible:ring-2 focus-visible:ring-[#00A6FB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021830] active:scale-95"
          >
            Termin sichern
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#001D3D] text-white transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 9.5v-7M3 5.5l3-3 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ErstGespraech;
