import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import CalendlyFallBackForm from "../components/CalendlyFallbackForm";
import Testimonials from "../components/Testimonials";
import VideoPlayer from "../components/VideoPlayer";
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

/* ── Erklärvideo: Dateien in /public/video/ ablegen ───────────── */
const SITE = "https://www.franco-cipolla.de";
const VIDEO = {
  src: "/video/erklaervideo.mp4",
  poster: "/video/erklaervideo-poster.jpg", // Standbild als JPG/WebP, 1280x720
  title: "So funktioniert die kostenlose Website-Analyse",
  description:
    "Franco Cipolla erklärt, wie Handwerksbetriebe und Dienstleister mit einer kostenlosen 15-Minuten-Analyse mehr Anfragen über ihre Website gewinnen.",
  uploadDate: "2026-11-18",
  captions: null, // z. B. { src: "/video/untertitel.vtt", srcLang: "de", label: "Deutsch" }
};

const TRANSCRIPT =
  "Ihre Website sieht gut aus, bringt aber kaum Anfragen? Besucher finden Informationen, aber keinen Grund zu handeln. Anfragen kommen fast nur über Empfehlungen. Ihre Website wirkt wie eine reine Visitenkarte. Franco Cipolla hilft Handwerksbetrieben und Dienstleistern in Ennepetal und Schwelm, mehr Anfragen über Ihre Website zu gewinnen. Alles beginnt mit einer kostenlosen 15-Minuten-Analyse Ihrer Website. Danach folgen Briefing und Freigabe. Franco übernimmt die Umsetzung. Vorher kamen Anfragen nur zufällig über Empfehlungen. Nachher führt die Website Besucher gezielt zur Anfrage. Kostenlose Vorab-Analyse, verkaufspsychologisch optimiertes Design und ein digitaler Verkäufer, der rund um die Uhr arbeitet. Buchen Sie jetzt die kostenlose Website-Analyse bei Franco Cipolla.";

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
schema["@graph"].push({
  "@type": "VideoObject",
  name: VIDEO.title,
  description: VIDEO.description,
  thumbnailUrl: `${SITE}${VIDEO.poster}`,
  uploadDate: VIDEO.uploadDate,
  contentUrl: `${SITE}${VIDEO.src}`,
  transcript: TRANSCRIPT,
});

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
          <p className="mt-0.5 text-[12px] text-black/50">15 Minuten, unverbindlich</p>
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

/* ─────────────────────────────────────────────────────────────
   Karten-Sections im Stil "So geht es weiter":
   Eyebrow + Headline + Subline, darunter drei Karten mit kleinen
   UI-Szenen. Gemeinsames Grundgerüst für "So geht es weiter" und
   "Beispiel aus einer Website-Analyse".
   Kein GSAP: IntersectionObserver + CSS. Ohne JS / bei
   prefers-reduced-motion ist alles sofort sichtbar.
───────────────────────────────────────────────────────────── */
const NS_BLUE = "#2F7BFF";

const NS_CSS = `
.ns[data-armed="true"] .ns-item{opacity:0;transform:translateY(14px);transition:opacity .6s cubic-bezier(.22,.61,.36,1) var(--rd,0s),transform .6s cubic-bezier(.22,.61,.36,1) var(--rd,0s)}
.ns[data-armed="true"] .ns-item.is-in{opacity:1;transform:none}
.ns[data-armed="true"] .ns-pop{opacity:0;transform:translateY(10px);transition:opacity .55s cubic-bezier(.22,.61,.36,1) calc(var(--rd,0s) + .3s),transform .55s cubic-bezier(.22,.61,.36,1) calc(var(--rd,0s) + .3s)}
.ns[data-armed="true"] .is-in .ns-pop{opacity:1;transform:none}
.ns[data-armed="true"] .ns-tick{opacity:0;transform:translateX(-6px);transition:opacity .4s ease calc(var(--rd,0s) + .5s + var(--i,0) * .12s),transform .4s ease calc(var(--rd,0s) + .5s + var(--i,0) * .12s)}
.ns[data-armed="true"] .is-in .ns-tick{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){
  .ns .ns-item,.ns .ns-pop,.ns .ns-tick{opacity:1!important;transform:none!important;transition:none!important}
}`;

const nsShadow = "shadow-[0_1px_2px_rgba(15,30,60,0.06),0_12px_28px_-12px_rgba(15,30,60,0.22)]";
const nsTint = (rgb) => ({ background: `radial-gradient(90% 70% at 50% 0%, rgba(${rgb},.13), transparent 70%)` });
const nsTag = { color: NS_BLUE, background: "rgba(47,123,255,.12)" };

const useNsReveal = (ref) => {
  const [armed, setArmed] = useState(false);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );
    root.querySelectorAll(".ns-item").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
  return armed;
};

/* Gemeinsamer Header (Eyebrow + Headline mit Highlight + Subline), wie bei Pain/FAQ */
const NsHeader = ({ id, eyebrow, title, highlight, sub }) => (
  <div className="ns-item mx-auto mb-10 max-w-[40rem] text-center sm:mb-14">
    <Eyebrow>{eyebrow}</Eyebrow>
    <H2 id={`${id}-heading`}>
      {title} <span className="text-[#003566]">{highlight}</span>
    </H2>
    {sub && (
      <p className="mx-auto mt-4 max-w-[34rem] text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-black/65">{sub}</p>
    )}
  </div>
);

/* Gemeinsames Grundgerüst: Header wie bei Pain/FAQ (Eyebrow + Headline mit Highlight + Subline) */
const NsSection = ({ id, eyebrow, title, highlight, sub, items }) => {
  const rootRef = useRef(null);
  const armed = useNsReveal(rootRef);

  return (
    <section
      ref={rootRef}
      id={id}
      data-armed={armed}
      aria-labelledby={`${id}-heading`}
      className={`ns w-full ${sectionPad}`}
    >
      <style>{NS_CSS}</style>
      <Container>
        <NsHeader id={id} eyebrow={eyebrow} title={title} highlight={highlight} sub={sub} />

        <ol className="m-0 grid list-none grid-cols-1 justify-items-center gap-4 p-0 lg:grid-cols-3 lg:justify-items-stretch">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="ns-item w-full max-w-[36rem] rounded-[22px] border border-black/10 bg-[#F3F4F7] p-2.5 lg:max-w-none"
              style={{ "--rd": `${i * 0.08}s` }}
            >
              <div
                aria-hidden="true"
                className="relative h-[230px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white"
              >
                {it.scene}
              </div>
              <div className="px-3.5 pb-4 pt-5">
                <span className="text-[13px] font-semibold tabular-nums" style={{ color: NS_BLUE }}>
                  {it.label}
                </span>
                <h3 className="mt-1.5 text-[clamp(19px,1.8vw,21px)] font-semibold leading-snug tracking-tight text-[#0B2540]">
                  {it.heading}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#5B6B80]">{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

/* ── Szenen: So geht es weiter ───────────────────────────────── */
const NsAvatar = ({ name, src, size = "h-10 w-10" }) => {
  const initials = name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return src ? (
    <img src={src} alt={name} width="40" height="40" loading="lazy" className={`${size} flex-none rounded-full object-cover`} />
  ) : (
    <span
      aria-hidden="true"
      className={`${size} flex flex-none items-center justify-center rounded-full bg-[#001D3D] text-[12px] font-semibold text-white`}
    >
      {initials}
    </span>
  );
};

const NsSceneMessage = ({ name, avatarSrc }) => (
  <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8" style={nsTint("47,123,255")}>
    <div className={`ns-pop relative z-10 flex items-start gap-3 rounded-2xl bg-white p-3 ${nsShadow}`}>
      <NsAvatar name={name} src={avatarSrc} />
      <span className="min-w-0 flex-1 leading-snug">
        <span className="flex items-baseline justify-between gap-2">
          <b className="truncate text-[14px] font-semibold text-[#0B2540]">{name}</b>
          <small className="flex-none text-[12px] text-[#8A97A8]">jetzt</small>
        </span>
        <small className="mt-0.5 block text-[13px] leading-[1.4] text-[#33435A]">
          Hallo, danke für Ihre Anfrage! Passt Ihnen morgen ein kurzer Call?
        </small>
      </span>
    </div>
    <div
      className={`ns-pop relative z-0 -mt-2 ml-6 flex items-center gap-2.5 rounded-2xl bg-white/80 px-3 pb-2.5 pt-4 opacity-80 ${nsShadow}`}
      style={{ "--rd": ".15s" }}
    >
      <NsAvatar name={name} src={avatarSrc} size="h-8 w-8" />
      <span className="min-w-0 leading-tight">
        <b className="block truncate text-[13px] font-semibold text-[#5B6B80]">{name}</b>
        <small className="block truncate text-[12px] text-[#8A97A8]">Termin für Ihre Analyse</small>
      </span>
    </div>
    <span className="ns-pop mt-2.5 self-end rounded-lg px-2.5 py-1 text-[12px] font-semibold" style={{ "--rd": ".25s", ...nsTag }}>
      unter 24 Std.
    </span>
  </div>
);

const NsSceneCalendar = ({ name }) => (
  <div className="absolute inset-0 flex items-center px-5 sm:px-8" style={nsTint("34,197,94")}>
    <div className="relative w-full">
      {["10:00", "10:30", "11:00"].map((t, i) => (
        <div key={t} className="flex h-11 items-center gap-4">
          <small className="w-10 flex-none text-[12px] tabular-nums text-[#8A97A8]">{t}</small>
          {i === 2 ? <i className="h-px flex-1 bg-[#0B2540]/12" /> : <i className="flex-1" />}
        </div>
      ))}
      <div
        className="ns-pop absolute left-[3.5rem] right-0 top-[3px] flex items-center gap-3 rounded-xl px-3.5 py-3 text-white"
        style={{ "--rd": ".1s", background: NS_BLUE, boxShadow: "0 14px 24px -10px rgba(47,123,255,.6)" }}
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/20">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="min-w-0 leading-tight">
          <b className="block truncate text-[13px] font-semibold">Analyse mit {name.split(" ")[0]}</b>
          <small className="block truncate text-[12px] text-white/85">10:00 bis 10:15 · Telefon</small>
        </span>
      </div>
    </div>
  </div>
);

const NsSceneOffer = () => (
  <div className="absolute inset-0 flex items-center justify-center px-5" style={nsTint("139,92,246")}>
    <div className="ns-pop w-full max-w-[15.5rem]">
      <div className={`-rotate-[2.5deg] rounded-2xl bg-white p-4 ${nsShadow}`}>
        <b className="block text-[14px] font-semibold text-[#0B2540]">Angebot</b>
        <small className="block text-[12px] text-[#8A97A8]">für Ihr Projekt</small>
        <ul className="m-0 mt-3 list-none space-y-2 p-0">
          {["Fester Preis", "Klarer Zeitplan", "Fester Ansprechpartner"].map((t, i) => (
            <li key={t} className="ns-tick flex items-center gap-2.5 text-[13px] text-[#33435A]" style={{ "--i": i }}>
              <span className="flex h-4 w-4 flex-none items-center justify-center rounded bg-[#22C55E] text-white">
                <svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true">
                  <path d="M3.5 8.4 6.6 11.4 12.5 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-3.5 block rounded-lg bg-[#0B2540] py-2 text-center text-[12px] font-semibold text-white">
          Angebot annehmen
        </span>
      </div>
    </div>
  </div>
);

const NextSteps = ({ name = "Franco Cipolla", avatarSrc }) => (
  <NsSection
    id="ablauf"
    eyebrow="So geht es weiter"
    title="Drei Schritte."
    highlight="Keine Warteschleife."
    sub="Von Ihrer Anfrage bis zum Angebot, ohne Aufwand für Sie."
    items={[
      {
        label: "01",
        heading: "Antwort in 24 Stunden",
        text: "Ich melde mich persönlich, per Nachricht oder kurz am Telefon. Kein Autoresponder.",
        scene: <NsSceneMessage name={name} avatarSrc={avatarSrc} />,
      },
      {
        label: "02",
        heading: "Kostenlose Analyse, 15 Minuten",
        text: "Ich schaue mir Ihre Website vorab an und zeige Ihnen, wo Sie Anfragen verlieren. Keine Vorbereitung nötig.",
        scene: <NsSceneCalendar name={name} />,
      },
      {
        label: "03",
        heading: "Klares Angebot, wenn Sie möchten",
        text: "Passt es, bekommen Sie ein Angebot mit festem Preis und Zeitplan. Passt es nicht, ist das völlig in Ordnung.",
        scene: <NsSceneOffer />,
      },
    ]}
  />
);

/* ─────────────────────────────────────────────────────────────
   "Beispiel aus einer Website-Analyse": bewusst ANDERS als die
   Karten bei "So geht es weiter". Eine große Tafel mit drei Zeilen,
   rechts/links abwechselnd ein Vorher/Nachher-Vergleich:
   zeigt nicht nur den Fehler, sondern auch die bessere Lösung.
───────────────────────────────────────────────────────────── */
const bar = (w, tone = "10") => (
  <span className={`block h-2 rounded-full ${w}`} style={{ background: `rgba(11,37,64,.${tone})` }} />
);

const CmpSide = ({ kind, children, delay }) => {
  const before = kind === "before";
  return (
    <div className={`flex flex-col items-center gap-2.5 ${before ? "" : "ns-pop"}`} style={before ? undefined : { "--rd": delay }}>
      <div className={before ? "opacity-70 saturate-50" : ""}>{children}</div>
      <span
        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${before ? "bg-[#0B2540]/[0.06] text-[#5B6B80]" : ""}`}
        style={before ? undefined : nsTag}
      >
        {before ? "Vorher" : "Besser"}
      </span>
    </div>
  );
};

const CmpArrow = () => (
  <span className="hidden h-7 w-7 flex-none items-center justify-center rounded-full bg-white text-[#0B2540] shadow-[0_1px_2px_rgba(15,30,60,0.12)] sm:flex">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Mini = ({ children }) => (
  <div className={`w-[8.2rem] overflow-hidden rounded-lg bg-white sm:w-[10rem] ${nsShadow}`}>{children}</div>
);

const Phone = ({ children }) => (
  <div className={`relative h-[10.5rem] w-[5.9rem] overflow-hidden rounded-[18px] border-[3px] border-[#0B2540] bg-white sm:h-[12rem] sm:w-[6.8rem] ${nsShadow}`}>
    <span className="absolute left-1/2 top-1 h-1 w-7 -translate-x-1/2 rounded-full bg-[#0B2540]" />
    <div className="px-2 pb-2 pt-4">{children}</div>
  </div>
);

const TextCard = ({ children }) => (
  <div className={`w-[8.4rem] rounded-xl bg-white p-3 sm:w-[12rem] ${nsShadow}`}>{children}</div>
);

const Line = ({ ok, children }) => (
  <li className="flex items-center gap-1.5 text-[10.5px] leading-tight text-[#33435A] sm:text-[11.5px]">
    {ok ? (
      <span className="flex h-3.5 w-3.5 flex-none items-center justify-center rounded bg-[#22C55E] text-white">
        <svg viewBox="0 0 16 16" width="9" height="9" aria-hidden="true">
          <path d="M3.5 8.4 6.6 11.4 12.5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ) : (
      <span className="h-3.5 w-3.5 flex-none rounded-full border-[1.5px] border-[#C3CAD6]" />
    )}
    {children}
  </li>
);

/* Zeile 1: Telefonnummer, zwei Mini-Browser */
const CmpPhone = () => (
  <>
    <CmpSide kind="before">
      <Mini>
        <div className="flex items-center justify-between border-b border-[#0B2540]/[0.08] px-2 py-1.5">
          {bar("w-8", "30")}
          <span className="flex gap-1">{bar("w-4", "12")}{bar("w-4", "12")}</span>
        </div>
        <div className="space-y-1.5 px-2 py-2.5">
          {bar("w-3/4", "25")}
          {bar("w-full")}
          {bar("w-5/6")}
          <span className="block h-9 rounded bg-[#0B2540]/[0.06]" />
        </div>
        <div className="border-t border-[#0B2540]/[0.08] bg-[#F3F4F7] px-2 py-1.5">
          <span className="rounded border border-dashed border-[#8A97A8] px-1 py-px text-[9px] text-[#8A97A8]">Tel. 0 23 33 …</span>
        </div>
      </Mini>
    </CmpSide>
    <CmpArrow />
    <CmpSide kind="after" delay=".15s">
      <Mini>
        <div className="flex items-center justify-between border-b border-[#0B2540]/[0.08] px-2 py-1.5">
          {bar("w-8", "30")}
          <span className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold text-white" style={{ background: NS_BLUE }}>
            Anrufen
          </span>
        </div>
        <div className="space-y-1.5 px-2 py-2.5">
          {bar("w-3/4", "25")}
          {bar("w-full")}
          {bar("w-5/6")}
          <span className="block h-9 rounded bg-[#0B2540]/[0.06]" />
        </div>
        <div className="border-t border-[#0B2540]/[0.08] bg-[#F3F4F7] px-2 py-1.5">{bar("w-10", "12")}</div>
      </Mini>
    </CmpSide>
  </>
);

/* Zeile 2: nächster Schritt, zwei Handys */
const CmpStep = () => (
  <>
    <CmpSide kind="before">
      <Phone>
        <div className="flex items-center justify-between">
          {bar("w-6", "30")}
          <span className="text-[8px] text-[#8A97A8] underline">Kontakt</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {bar("w-5/6", "25")}
          {bar("w-full")}
          {bar("w-2/3")}
          <span className="mt-2 block h-12 rounded bg-[#0B2540]/[0.06]" />
        </div>
      </Phone>
    </CmpSide>
    <CmpArrow />
    <CmpSide kind="after" delay=".15s">
      <Phone>
        <div className="flex items-center justify-between">
          {bar("w-6", "30")}
          {bar("w-5", "12")}
        </div>
        <div className="mt-3 space-y-1.5">
          {bar("w-5/6", "25")}
          {bar("w-full")}
          {bar("w-2/3")}
        </div>
        <span
          className="mt-3 block rounded-md px-1 py-2 text-center text-[8px] font-semibold leading-tight text-white"
          style={{ background: NS_BLUE }}
        >
          Jetzt kostenlose Einschätzung anfragen
        </span>
        <span className="mt-2 block text-center text-[7.5px] text-[#8A97A8]">Antwort in 24 Std.</span>
      </Phone>
    </CmpSide>
  </>
);

/* Zeile 3: Nutzen, zwei Text-Karten */
const CmpBenefit = () => (
  <>
    <CmpSide kind="before">
      <TextCard>
        <b className="block text-[11px] font-semibold leading-snug text-[#0B2540] sm:text-[12px]">
          „Seit 20 Jahren in Ennepetal tätig“
        </b>
        <ul className="m-0 mt-2.5 list-none space-y-1.5 p-0">
          <Line>Löst der mein Problem?</Line>
          <Line>Wie schnell geht das?</Line>
          <Line>Was kostet das?</Line>
        </ul>
      </TextCard>
    </CmpSide>
    <CmpArrow />
    <CmpSide kind="after" delay=".15s">
      <TextCard>
        <b className="block text-[11px] font-semibold leading-snug text-[#0B2540] sm:text-[12px]">
          Undichtes Dach? Wir kommen schnell und nennen vorab den Preis.
        </b>
        <ul className="m-0 mt-2.5 list-none space-y-1.5 p-0">
          <Line ok>Problem wird gelöst</Line>
          <Line ok>Schneller Termin</Line>
          <Line ok>Preis vorab</Line>
        </ul>
      </TextCard>
    </CmpSide>
  </>
);

const NsCompare = ({ id, eyebrow, title, highlight, sub, items }) => {
  const rootRef = useRef(null);
  const armed = useNsReveal(rootRef);

  return (
    <section
      ref={rootRef}
      id={id}
      data-armed={armed}
      aria-labelledby={`${id}-heading`}
      className={`ns w-full ${sectionPad}`}
    >
      <style>{NS_CSS}</style>
      <Container>
        <NsHeader id={id} eyebrow={eyebrow} title={title} highlight={highlight} sub={sub} />

        <ol className="m-0 mx-auto max-w-[68rem] list-none divide-y divide-black/10 overflow-hidden rounded-[22px] border border-black/10 bg-white p-0">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="ns-item grid gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-12 lg:p-10"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-flex rounded-full bg-[#FDECEF] px-2.5 py-1 text-[12px] font-semibold text-[#D4304A]">
                  {it.label}
                </span>
                <h3 className="mt-3 text-[clamp(21px,2.2vw,28px)] font-semibold leading-[1.2] tracking-tight text-[#0B2540]">
                  {it.heading}
                </h3>
                <p className="mt-3 max-w-[30rem] text-[15px] leading-[1.65] text-[#5B6B80] sm:text-base">{it.text}</p>
              </div>

              <div
                aria-hidden="true"
                className="flex min-h-[240px] items-center justify-center gap-3 rounded-2xl border border-black/[0.06] px-3 py-6 sm:gap-5 sm:px-6"
                style={nsTint(it.tint)}
              >
                {it.scene}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

const NsMistakes = () => (
  <NsCompare
    id="beispiel"
    eyebrow="Beispiel aus einer Website-Analyse"
    title="Was ich auf lokalen Websites"
    highlight="immer wieder sehe"
    sub="Drei Stellen, an denen Besucher still wieder verschwinden."
    items={[
      {
        label: "Fehler 1",
        heading: "Die Telefonnummer ist nicht sofort sichtbar",
        text: "Sie ist irgendwo im unteren Bereich der Seite versteckt. Der Interessent muss erst suchen und sucht dann woanders.",
        tint: "47,123,255",
        scene: <CmpPhone />,
      },
      {
        label: "Fehler 2",
        heading: "Der Besucher weiß nicht, was er als Nächstes tun soll",
        text: "„Kontakt“ als einziger Hinweis reicht nicht. „Jetzt kostenlose Einschätzung anfragen“ ist ein Unterschied: klein im Text, groß in der Wirkung.",
        tint: "34,197,94",
        scene: <CmpStep />,
      },
      {
        label: "Fehler 3",
        heading: "Die Seite erklärt den Betrieb, aber nicht, was der Kunde davon hat",
        text: "„Seit 20 Jahren in Ennepetal tätig“ beantwortet nicht: Kannst du mein Problem lösen? Wie schnell? Was kostet das?",
        tint: "139,92,246",
        scene: <CmpBenefit />,
      },
    ]}
  />
);

/* ── Hero: Hintergrund, Trust-Badges, schwebende Chips ─────────── */
const HeroBackground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <style>{`
      @keyframes hb-a{0%{transform:translate3d(-4%,0,0) scale(1)}100%{transform:translate3d(6%,8%,0) scale(1.12)}}
      @keyframes hb-b{0%{transform:translate3d(4%,2%,0) scale(1.08)}100%{transform:translate3d(-6%,-6%,0) scale(1)}}
      @keyframes hb-c{0%{transform:translate3d(0,-3%,0) scale(1)}100%{transform:translate3d(-5%,6%,0) scale(1.1)}}
      @keyframes hb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      @media (prefers-reduced-motion:no-preference){
        .hb-a{animation:hb-a 18s ease-in-out infinite alternate}
        .hb-b{animation:hb-b 22s ease-in-out infinite alternate}
        .hb-c{animation:hb-c 26s ease-in-out infinite alternate}
        .hb-float{animation:hb-float 6s ease-in-out infinite}
      }
    `}</style>

    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#F4F7FC 0%,#FFFFFF 80%)" }} />

    {/* weiche Farbflächen, nur transform animiert (günstig für die GPU) */}
    <div className="hb-a absolute -left-[12%] -top-[20%] h-[40rem] w-[40rem] rounded-full will-change-transform" style={{ background: "radial-gradient(closest-side, rgba(47,123,255,.22), transparent)" }} />
    <div className="hb-b absolute -right-[10%] top-[2%] h-[36rem] w-[36rem] rounded-full will-change-transform" style={{ background: "radial-gradient(closest-side, rgba(34,197,94,.15), transparent)" }} />
    <div className="hb-c absolute left-[26%] top-[40%] h-[32rem] w-[32rem] rounded-full will-change-transform" style={{ background: "radial-gradient(closest-side, rgba(139,92,246,.13), transparent)" }} />

    {/* Gitter, zur Mitte hin sichtbar, an den Rändern ausgeblendet */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,37,64,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(11,37,64,.055) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 25%, transparent 80%)",
        maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 25%, transparent 80%)",
      }}
    />

    {/* Ringe wie ein Radar hinter dem Video */}
    <svg className="absolute left-1/2 top-[46%] h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 text-[#003566]" viewBox="0 0 800 800" fill="none">
      <circle cx="400" cy="400" r="210" stroke="currentColor" strokeOpacity=".09" />
      <circle cx="400" cy="400" r="300" stroke="currentColor" strokeOpacity=".07" strokeDasharray="3 9" />
      <circle cx="400" cy="400" r="392" stroke="currentColor" strokeOpacity=".06" />
    </svg>

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
  </div>
);

const STAR = "M12 2.8l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.7l-5.9 3.1 1.2-6.5L2.5 9.7l6.6-.9z";

const Stars = ({ size = 16 }) => (
  <span role="img" aria-label="5 von 5 Sternen" className="flex gap-0.5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR} fill="#F5A524" />
      </svg>
    ))}
  </span>
);

const scrollToId = (e, id) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center",
  });
};

const trustBadges = [
  { text: "Persönlich aus Ennepetal", d: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11z M12 12.2a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z" },
  { text: "Antwort meist in 24 Std.", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7.5V12l3 2" },
  { text: "In 2 bis 4 Wochen online", d: "M5 5.5h14V20H5z M5 10h14 M9 3.5v3.5 M15 3.5v3.5" },
];

const badgeCls =
  "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-2 text-[13px] font-medium text-[#0B2540] backdrop-blur";

const HeroTrust = () => (
  <ul data-hero="fade" className="mt-8 flex max-w-[48rem] list-none flex-wrap justify-center gap-2.5 p-0">
    <li>
      <a
        href="#bewertung"
        onClick={(e) => scrollToId(e, "bewertung")}
        className={`${badgeCls} outline-none transition-colors hover:border-[#F5A524]/60 focus-visible:ring-2 focus-visible:ring-[#00A6FB]`}
      >
        <Stars size={14} />
        5 Sterne Bewertung
      </a>
    </li>
    {trustBadges.map(({ text, d }) => (
      <li key={text} className={badgeCls}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: NS_BLUE }}>
          <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {text}
      </li>
    ))}
  </ul>
);

const FloatChip = ({ d, title, sub, className, delay }) => (
  <div
    aria-hidden="true"
    className={`hb-float absolute hidden w-[11.5rem] items-center gap-2.5 rounded-2xl bg-white/90 p-2.5 backdrop-blur xl:flex ${nsShadow} ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full" style={nsTag}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="min-w-0 text-left leading-tight">
      <b className="block truncate text-[12px] font-semibold text-[#0B2540]">{title}</b>
      <small className="block truncate text-[11px] text-[#8A97A8]">{sub}</small>
    </span>
  </div>
);

/* ── Bewertung: eigene Karte im Stil der restlichen Seite ───────
   Trag Text, Name usw. unten in REVIEW ein. Solange text leer ist,
   wird weiterhin die alte <Testimonials />-Komponente angezeigt. */
const REVIEW = {
  text: "",
  name: "",
  role: "", // z. B. "Dachdeckerbetrieb, Ennepetal"
  source: "", // z. B. "Google" oder leer lassen
  avatarSrc: "", // optional
};

const ReviewCard = ({ text, name, role, source, avatarSrc }) => (
  <figure data-reveal className="mx-auto w-full max-w-[56rem] rounded-[22px] border border-black/10 bg-[#F3F4F7] p-2.5">
    <div
      className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white px-6 py-10 text-center sm:px-14 sm:py-14"
      style={nsTint("47,123,255")}
    >
      <svg aria-hidden="true" width="120" height="120" viewBox="0 0 24 24" className="absolute left-5 top-3 text-[#003566] opacity-[0.06] sm:left-10 sm:top-6">
        <path fill="currentColor" d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-2 1-3.3 3-4L9.5 6zm9 0c-3 1-5 3.6-5 7v5h6v-6h-3c0-2 1-3.3 3-4L18.5 6z" />
      </svg>

      <div className="relative flex flex-col items-center">
        <Stars size={22} />
        <blockquote className="mt-5 max-w-[40rem] text-[clamp(19px,2.5vw,28px)] font-semibold leading-[1.35] tracking-tight text-[#0B2540]">
          „{text}“
        </blockquote>
        <figcaption className="mt-7 flex items-center gap-3 text-left">
          <NsAvatar name={name} src={avatarSrc || undefined} />
          <span className="leading-tight">
            <b className="block text-[15px] font-semibold text-[#0B2540]">{name}</b>
            <small className="block text-[13px] text-[#5B6B80]">
              {[role, source].filter(Boolean).join(" · ")}
            </small>
          </span>
        </figcaption>
      </div>
    </div>
  </figure>
);

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
      /* LCP-sicher: H1 und Video bewegen sich nur (transform), bleiben sichtbar */
      intro
        .fromTo(q('[data-hero="h1"]'), { y: 24 }, { y: 0, duration: 0.9 }, 0)
        .fromTo(q('[data-hero="fade"]'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.05)
        .fromTo(q('[data-hero="video"]'), { y: 36, scale: 0.985 }, { y: 0, scale: 1, duration: 1 }, 0.15);

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
        <link rel="preload" as="image" type="image/jpeg" href={VIDEO.poster} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <StickyMobileCTA formRef={formRef} />

      {/* ══ HERO: zentriert, Headline, Subline, Video, Trust ══ */}
      <section className="relative isolate w-full overflow-x-clip pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <HeroBackground />

        <Container className="flex flex-col items-center text-center">
          <p
            data-hero="fade"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-[#003566] backdrop-blur sm:text-[13px]"
          >
            <span className="h-2 w-2 flex-none animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
            Lokal für Betriebe in Ennepetal und NRW
          </p>

          <h1
            data-hero="h1"
            className="max-w-[48rem] text-[clamp(30px,5.2vw,58px)] font-semibold leading-[1.07] tracking-tight text-[#000814]"
          >
            In 15 Minuten Klarheit, wo Ihre Website <span className="text-[#003566]">Anfragen verliert</span>
          </h1>

          <p
            data-hero="fade"
            className="mt-5 max-w-[38rem] text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-black/65"
          >
            Für Handwerksbetriebe und Dienstleister. Danach wissen Sie genau, was fehlt, damit Ihr Telefon öfter
            klingelt, und zwar von Leuten aus Ihrer Region.
          </p>

          {/* Video mit eigenem Player */}
          <div data-hero="video" className="relative mt-10 w-full max-w-[52rem] sm:mt-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10"
              style={{ background: "radial-gradient(55% 55% at 50% 50%, rgba(47,123,255,.26), transparent 70%)" }}
            />
            <div className="rounded-[26px] border border-black/10 bg-white/60 p-1.5 shadow-[0_30px_80px_-30px_rgba(11,37,64,0.45)] backdrop-blur sm:p-2">
              <VideoPlayer
                src={VIDEO.src}
                poster={VIDEO.poster}
                title={VIDEO.title}
                captions={VIDEO.captions || undefined}
                ctaLabel="Kostenlose Analyse sichern"
                onCta={() => scrollToEl(formRef)}
                onEvent={(name, data) => {
                  /* Tracking: hier z. B. window.plausible?.(`video_${name}`) */
                  if (typeof window !== "undefined" && window.plausible) window.plausible(`video_${name}`, { props: data });
                }}
              />
            </div>

            <FloatChip
              d="M4 6h16v12H4z M4 7l8 6 8-6"
              title="Neue Anfrage"
              sub="Dachsanierung, Ennepetal"
              className="right-[calc(100%+1.25rem)] top-[14%]"
              delay="0s"
            />
            <FloatChip
              d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
              title="Eingehender Anruf"
              sub="Elektroinstallation, Hagen"
              className="left-[calc(100%+1.25rem)] bottom-[20%]"
              delay="1.6s"
            />
          </div>

          {/* CTA */}
          <div data-hero="fade" className="mt-9 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToEl(formRef)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#001D3D] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(0,29,61,0.7)] outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#00A6FB] focus-visible:ring-offset-2 active:scale-95"
            >
              Kostenlose Analyse sichern
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2.5v7M3 6.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <p className="text-[13px] text-black/50">Unverbindlich, 15 Minuten, keine Vorbereitung nötig</p>
          </div>

          <HeroTrust />

          {/* Transkript: im DOM (SEO, Barrierefreiheit), eingeklappt */}
          <details data-hero="fade" className="group mt-7 w-full max-w-[40rem] text-left">
            <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium text-black/55 outline-none transition hover:text-[#003566] focus-visible:ring-2 focus-visible:ring-[#00A6FB] [&::-webkit-details-marker]:hidden">
              Transkript des Videos lesen
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform group-open:rotate-180">
                <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="mt-3 rounded-2xl border border-black/10 bg-white/80 p-5 text-[14px] leading-[1.7] text-black/65 backdrop-blur">
              {TRANSCRIPT}
            </p>
          </details>

          <p data-hero="fade" className="mt-6 text-[13px] leading-relaxed text-black/50">
            Für Betriebe aus{" "}
            <Link to="/" className="underline transition-colors hover:text-[#003566]">Ennepetal</Link>,{" "}
            <Link to="/hagen" className="underline transition-colors hover:text-[#003566]">Hagen</Link>,{" "}
            <Link to="/wuppertal" className="underline transition-colors hover:text-[#003566]">Wuppertal</Link> und NRW.
          </p>
        </Container>
      </section>

      {/* ══ TERMIN / FORMULAR ══ */}
      <section className="w-full px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8" aria-labelledby="termin-heading">
        <div
          ref={formRef}
          id="termin"
          data-reveal
          className="mx-auto w-full max-w-[40rem] scroll-mt-28 rounded-[20px] border border-black/10 bg-white shadow-[0_8px_40px_rgba(0,21,61,0.08)]"
        >
          <div className="border-b border-black/10 px-5 pb-4 pt-5 text-center sm:px-8 sm:pb-5 sm:pt-7">
            <p className="mb-1.5 text-[13px] font-semibold text-[#003566]/80">Ihr Termin</p>
            <h2
              id="termin-heading"
              className="text-[clamp(22px,2.6vw,30px)] font-semibold leading-snug tracking-tight text-[#000814]"
            >
              Wann passt es <span className="text-[#003566]">Ihnen?</span>
            </h2>
            <p className="mt-1.5 text-[13px] text-black/50">Ich melde mich persönlich zur Bestätigung.</p>
          </div>

          <div className="px-5 py-5 sm:px-8 sm:py-7">
            <CalendlyFallBackForm />
          </div>

          <div className="px-5 pb-5 sm:px-8 sm:pb-6">
            <p className="text-center text-[12px] text-black/45">
              Ihre Daten werden nicht weitergegeben.{" "}
              <Link to="/datenschutz" className="underline transition-colors hover:text-[#003566]">
                Datenschutz
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══ BEWERTUNG ══ */}
      <section id="bewertung" className="w-full px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {REVIEW.text ? (
          <ReviewCard {...REVIEW} />
        ) : (
          <Container>
            <Testimonials showCta={false} hasPadding={false} showTitle={true} eyebrowStyle={true} />
          </Container>
        )}
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

      {/* ══ ABLAUF ══ */}
      <NextSteps />

      {/* ══ BEISPIEL AUS EINER WEBSITE-ANALYSE ══ */}
      <NsMistakes />

      {/* ══ FAQ (gleiche Boxen wie vorher, skaliert auf die neue Seite) ══ */}
      <section id="faq" className={`w-full ${sectionPad}`} aria-labelledby="faq-heading">
        <Container>
          <div className="mx-auto w-full max-w-[64rem]">
            <div data-reveal className="mb-10 text-center sm:mb-14">
              <H2 id="faq-heading">Häufige Fragen</H2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  data-reveal
                  className="faq-item overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                >
                  <button
                    type="button"
                    aria-expanded={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-gray-50 sm:px-7 sm:py-6"
                  >
                    <span className="pr-2 text-[16px] font-semibold leading-snug text-[#000814] sm:text-[17px] lg:text-[19px]">
                      {faq.q}
                    </span>
                    <FaChevronDown
                      className={`flex-shrink-0 text-[13px] text-[#003566] transition-transform duration-300 sm:text-[15px] ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="border-t border-gray-100 px-5 pb-5 sm:px-7 sm:pb-6">
                      <p className="pt-4 text-[15px] leading-[1.75] text-[#000814]/65 sm:pt-5 sm:text-base lg:text-[17px]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
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
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#001D3D] outline-none transition-transform focus-visible:ring-2 focus-visible:ring-[#00A6FB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021830] active:scale-95"
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
