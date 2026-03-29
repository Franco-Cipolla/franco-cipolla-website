import React, { useRef, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import SEOJsonLD from "../components/SEOJsonLD";
import CheckIcon from "../components/CheckIcon";
import CalendlyFallBackForm from "../components/CalendlyFallbackForm";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// SPACING SYSTEM (Mobile-first)
//   section padding:  py-14 sm:py-20 lg:py-24
//   inner max-width:  max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]
//   section gap:      mb-8 sm:mb-12 lg:mb-16  (zwischen heading und content)
//   card padding:     p-5 sm:p-6
//   text scale:       body 14/15/16, label 10/11, heading 22→28→36
// ─────────────────────────────────────────────────────────────────────────────

// ── fadeUp pro Element ────────────────────────────────────────────────────────
const useFadeUp = (ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [ref]);
};

// ── Sticky Mobile CTA (nur < sm) ─────────────────────────────────────────────
const StickyMobileCTA = ({ formRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-[#003566]/15 px-4 py-3 flex items-center gap-3 shadow-[0_-6px_24px_rgba(0,0,0,0.09)]">
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold text-[#000814] leading-tight">
            Kostenlose Website-Analyse
          </p>
          <p className="text-[11px] text-[#000814]/45 mt-0.5">
            15 Min · kostenlos · kein Druck
          </p>
        </div>
        <button
          onClick={scrollToForm}
          className="flex-shrink-0 bg-[#001D3D] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg border-2 border-[#003566] active:scale-95 transition-transform"
        >
          Jetzt anfragen
        </button>
      </div>
    </div>
  );
};

// ── Section-Wrapper ───────────────────────────────────────────────────────────
const Section = ({ children, className = "" }) => (
  <section className={`w-full border-t border-[#003566]/12 py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-0 ${className}`}>
    <div className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]">
      {children}
    </div>
  </section>
);

// ── Section-Heading ───────────────────────────────────────────────────────────
const SectionHeading = ({ eyebrow, title, center = true }) => (
  <div className={`mb-8 sm:mb-12 ${center ? "text-center" : ""}`}>
    {eyebrow && (
      <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-2 sm:mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#000814] leading-tight">
      {title}
    </h2>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ErstGespraech = () => {
  const heroRef       = useRef(null);
  const formRef       = useRef(null);
  const pain1Ref      = useRef(null);
  const pain2Ref      = useRef(null);
  const pain3Ref      = useRef(null);
  const painNoteRef   = useRef(null);
  const ablaufHeadRef = useRef(null);
  const step1Ref      = useRef(null);
  const step2Ref      = useRef(null);
  const step3Ref      = useRef(null);
  const demoHeadRef   = useRef(null);
  const demo1Ref      = useRef(null);
  const demo2Ref      = useRef(null);
  const demo3Ref      = useRef(null);
  const faqRef        = useRef(null);
  const bottomRef     = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Hero stagger
  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".ha"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.13 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // FAQ stagger
  useEffect(() => {
    if (!faqRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        faqRef.current.querySelectorAll(".faq-item"),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.55, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: faqRef.current, start: "top 88%" },
        }
      );
    }, faqRef);
    return () => ctx.revert();
  }, []);

  useFadeUp(pain1Ref); useFadeUp(pain2Ref); useFadeUp(pain3Ref);
  useFadeUp(painNoteRef); useFadeUp(ablaufHeadRef);
  useFadeUp(step1Ref); useFadeUp(step2Ref); useFadeUp(step3Ref);
  useFadeUp(demoHeadRef);
  useFadeUp(demo1Ref); useFadeUp(demo2Ref); useFadeUp(demo3Ref);
  useFadeUp(bottomRef);

  return (
    <>
      <Helmet>
        <title>Kostenlose Website-Analyse - Erstgespräch buchen | Franco Cipolla</title>
        <meta
          name="description"
          content="In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert - kostenlos, direkt auf Ihrer Seite gezeigt."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/erstgespraech" />
      </Helmet>
      <SEOJsonLD page="erstgespraech" />

      <StickyMobileCTA formRef={formRef} />

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full flex justify-center  px-5 sm:px-8 lg:px-0 mt-12 sm:mt-16"
      >
        <div className="w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[900px] py-12 sm:py-16 lg:py-24">

          {/* ── Centered text block ── */}
          <div className="ha text-center max-w-[560px] sm:max-w-[640px] mx-auto mb-8 sm:mb-10">

            {/* Trust-Badge */}
            <div className="inline-flex  items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 border border-[#003566]/15 rounded-full px-3.5 sm:px-4 py-2 mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-[13px] font-medium text-[#003566] tracking-tight">
                Lokal für Betriebe in Ennepetal & NRW
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.25] tracking-tight mb-4 sm:mb-5">
              In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert -
              und was Sie konkret ändern können.
            </h1>

            {/* Subline */}
            <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#000814]/68 leading-[1.7] mb-3 sm:mb-4">

              In 15 Minuten wissen Sie genau, was fehlt, damit Ihr Telefon
              öfter klingelt und zwar von Leuten aus Ihrer Region,
              die Sie noch nicht kennen.
            </p>

            {/* Micro-copy */}
            <p className="text-[11px] sm:text-[12px] text-black/35 tracking-wide">
              Kostenlos &nbsp;·&nbsp; Keine Vorbereitung nötig &nbsp;·&nbsp; Sie entscheiden danach
            </p>
          </div>

          {/* ── Benefits ── */}
          <div className="ha mb-8 sm:mb-10">
            <ul className="flex flex-col gap-3 sm:gap-3.5 max-w-[480px] mx-auto">
              {[
                <>Für Betriebe aus <Link to="/" className="underline hover:text-[#003566] transition-colors">Ennepetal</Link>, <Link to="/hagen" className="underline hover:text-[#003566] transition-colors">Hagen</Link>, <Link to="/wuppertal" className="underline hover:text-[#003566] transition-colors">Wuppertal</Link> & Umgebung</>,
                "Konkret auf Ihrer Seite gezeigt - keine Folien, keine Theorie",
                "Kein Druck - Sie entscheiden danach, was als nächstes passiert",
                "15 Minuten · keine Vorbereitung nötig · Bestätigung per Nachricht",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 mt-[3px]"><CheckIcon /></span>
                  <span className="text-[13px] sm:text-[14px] text-[#000814]/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Formular ── */}
          {/* ══ BOTTOM CTA ══════════════════════════════════════════════════════ */}
      {/* pb-28 Mobile = Sticky CTA bar Platz */}
      <section ref={formRef} className="w-full border-t border-[#003566]/12 py-14 sm:py-20 lg:py-24  pb-28 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]">

          <div ref={bottomRef} className="border border-[#003566]/20 bg-white">

            {/* Card Header */}
            <div className="px-5 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-7 pb-4 sm:pb-5 border-b border-[#003566]/10">
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.13em] uppercase text-[#003566] mb-2">
                ✦ Kostenlose Website-Analyse
              </p>
              <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-black text-[#000814] tracking-tight leading-snug mb-1">
                Noch kein Termin?{" "}
                <span className="text-[#003566]">Jetzt sichern.</span>
              </h2>
              <p className="text-[11.5px] sm:text-[12px] text-[#000814]/40 mt-1">
                15 Minuten · unverbindlich · ich rufe Sie an
              </p>
              <div className="flex items-center gap-2 mt-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] text-[#000814]/40">
                  Noch Plätze verfügbar diesen Monat
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="-my-4">
              <CalendlyFallBackForm />
            </div>

            {/* Card Footer */}
            <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-7">
              <p className="text-[11px] text-[#000814]/35 text-center">
                🔒 Ihre Daten werden nicht weitergegeben.{" "}
                <Link
                  to="/datenschutz"
                  className="underline hover:text-[#003566] transition-colors"
                >
                  Datenschutz
                </Link>
              </p>
            </div>
          </div>

        </div>
      </section>


        </div>
      </section>

      {/* ══ PAIN ════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-2 sm:mb-3">
            Kommt Ihnen das bekannt vor?
          </p>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#000814] leading-tight">
            Die Website ist da.{" "}
            <span className="text-[#003566]">Nur das Telefon klingelt nicht.</span>
          </h2>
        </div>

        {/* 1-col mobile → 3-col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              ref: pain1Ref,
              icon: "📭",
              title: "Anfragen kommen - aber selten und unregelmäßig",
              body: "Manchmal meldet sich jemand, manchmal wochenlang nicht. Sie wissen nie, was nächsten Monat über die Website kommt.",
            },
            {
              ref: pain2Ref,
              icon: "🔁",
              title: "Fast alles läuft noch über Empfehlungen",
              body: "Solange die Stammkunden da sind, läuft es. Aber das liegt nicht an Ihrer Website - und das ist ein Problem.",
            },
            {
              ref: pain3Ref,
              icon: "😮‍💨",
              title: "Für Online-Kram ist sowieso keine Zeit",
              body: "Das Tagesgeschäft läuft. Wann soll man sich da noch um die Website kümmern? Also bleibt es, wie es ist.",
            },
          ].map(({ ref, icon, title, body }) => (
            <div
              key={title}
              ref={ref}
              className="border border-[#003566]/13 bg-[#003566]/[0.025] rounded-sm p-5 sm:p-6"
            >
              <span className="text-[22px] block mb-3">{icon}</span>
              <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] mb-2 leading-snug">{title}</p>
              <p className="text-[12.5px] sm:text-[13px] text-[#000814]/52 leading-[1.65]">{body}</p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div ref={painNoteRef} className="border-l-[3px] border-[#003566] bg-[#003566]/[0.04] px-4 sm:px-5 py-3.5 sm:py-4 mt-6 sm:mt-8">
          <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-[#000814] leading-[1.65]">
            In 15 Minuten sehen Sie konkret, warum Besucher kommen -
            aber nicht anrufen. Und was sich daran ändern lässt.{" "}
            <span className="text-[#003566]">Ohne dass Sie vorher irgendetwas vorbereiten müssen.</span>
          </p>
        </div>
      </Section>

      {/* ══ ABLAUF ══════════════════════════════════════════════════════════ */}
     <Section>
        <div ref={ablaufHeadRef} className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-2 sm:mb-3">
            So läuft es ab
          </p>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#000814] leading-tight">
            15 Minuten.{" "}
            <span className="text-[#003566]">Kein Aufwand für Sie.</span>
          </h2>
        </div>

        <div className="border-t border-[#003566]/12">
          {[
            {
              ref: step1Ref, num: "01",
              badge: "Vor dem Gespräch · 0 € · Sie machen: nichts",
              title: "Ich analysiere Ihre Website – bevor wir telefonieren",
              body: "Sie müssen mir nichts erklären, nichts vorbereiten. Ich schaue mir Ihre Seite vorher an und weiß beim Gespräch bereits, wo das Problem liegt.",
              result: "→ Sie kommen nicht vorbereitet. Sie kommen neugierig.",
            },
            {
              ref: step2Ref, num: "02",
              badge: "Im Gespräch · 15 Minuten · live auf Ihrer Seite",
              title: "Sie sehen genau, warum Besucher kommen – aber nicht anrufen",
              body: "Ich teile meinen Bildschirm und zeige Ihnen direkt auf Ihrer Seite 2–3 Stellen, die Interessenten still wieder verschwinden lassen. Keine Theorie – nur das, was bei Ihnen konkret passiert.",
              result: "→ Nach 15 Minuten wissen Sie mehr als vorher – ganz sicher.",
            },
            {
              ref: step3Ref, num: "03",
              badge: "Danach · Ihre Entscheidung · kein Druck",
              title: "Sie entscheiden. Ich akzeptiere jede Antwort.",
              body: "Manche setzen die Hinweise selbst um – gut. Manche fragen, ob ich das übernehmen kann – auch gut. Und manche sagen einfach Danke und gehen. Das ist völlig in Ordnung. ",
              result: "→ Sie sind zu nichts verpflichtet. Sie entscheiden, was als nächstes passiert.",
            },
          ].map(({ ref, num, badge, title, body, result }, i, arr) => (
            <div
              key={num}
              ref={ref}
              className="grid grid-cols-[36px_1fr] sm:grid-cols-[52px_1fr] gap-4 sm:gap-6 py-6 sm:py-9 border-b border-[#003566]/12"
            >
              {/* Number + connector line */}
              <div className="flex flex-col items-center gap-2 pt-1">
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] text-[#003566]">
                  {num}
                </span>
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 min-h-[40px] bg-[#003566]/15" />
                )}
              </div>

              {/* Content */}
              <div>
                {/* Badge */}
                <span className="inline-flex items-center text-[10px] sm:text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#003566]/70 border-b border-[#003566]/20 pb-[1px] mb-2 sm:mb-3">
                  {badge}
                </span>

                {/* Title */}
                <h3 className="text-[15px] sm:text-[17px] lg:text-[19px] font-black text-[#000814] tracking-tight leading-snug mb-2 sm:mb-3">
                  {title}
                </h3>

                {/* Body */}
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#000814]/60 leading-[1.72] mb-3">
                  {body}
                </p>

                {/* Result line – konkrete Konsequenz pro Schritt */}
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#003566] leading-snug">
                  {result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>



      {/* ══ DEMO-EINBLICK ═══════════════════════════════════════════════════ */}
      <Section>
        <div ref={demoHeadRef} className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-2 sm:mb-3">
            Beispiel aus einer Website-Analyse
          </p>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#000814] leading-tight mb-2">
            Was ich auf lokalen Websites{" "}
            <span className="text-[#003566]">immer wieder sehe</span>
          </h2>

        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {[
            {
              ref: demo1Ref, label: "Fehler #1",
              title: "Die Telefonnummer ist nicht sofort sichtbar",
              body: "Sie ist irgendwo im unteren Bereich der Seite versteckt. Der Interessent muss erst suchen - und sucht dann woanders.",
            },
            {
              ref: demo2Ref, label: "Fehler #2",
              title: "Der Besucher weiß nicht, was er als nächstes tun soll",
              body: '"Kontakt" als einziger Hinweis reicht nicht. "Jetzt kostenlose Einschätzung anfragen" ist ein Unterschied - klein im Text, groß in der Wirkung.',
            },
            {
              ref: demo3Ref, label: "Fehler #3",
              title: "Die Seite erklärt den Betrieb - aber nicht, was der Kunde davon hat",
              body: '"Seit 20 Jahren in Ennepetal tätig" beantwortet nicht: Kannst du mein Problem lösen? Wie schnell? Was kostet das?',
            },
          ].map(({ ref, label, title, body }) => (
            <div
              key={label}
              ref={ref}
              className="border border-[#003566]/13 bg-[#003566]/[0.025] p-4 sm:p-5 lg:p-6 flex gap-4 sm:gap-5 items-start"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-[#003566] border-b border-[#003566]/30 pb-[2px] flex-shrink-0 mt-1">
                {label}
              </span>
              <div>
                <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] mb-1.5 leading-snug">{title}</p>
                <p className="text-[12.5px] sm:text-[13px] text-[#000814]/52 leading-[1.65]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ FAQ ═════════════════════════════════════════════════════════════ */}
      <section
        ref={faqRef}
        className="w-full border-t border-[#003566]/12 py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-0"
      >
        <div className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]">

          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-center mb-8 sm:mb-12">
            Häufige Fragen
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
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
                a: "Möglich. Viele Seiten sehen ordentlich aus und funktionieren trotzdem nicht als Anfragekanal. In 15 Minuten wissen wir, ob das bei Ihnen so ist - oder ob wirklich alles passt. Wenn alles gut ist, sage ich das.",
              },
              {
                q: "Ich habe schon eine Website - warum eine neue?",
                a: "Das muss gar nicht das Ergebnis sein. Die Analyse zeigt zuerst, ob die bestehende Seite grundlegende Dinge besser machen kann. Manchmal reichen kleine Änderungen. Ob eine neue Seite sinnvoll ist, besprechen wir erst danach - und nur wenn Sie das möchten.",
              },
              {
                q: "Wie läuft das Gespräch ab - muss ich irgendwas vorbereiten?",
                a: "Nein. Wir telefonieren kurz, ich teile meinen Bildschirm und zeige direkt auf Ihrer Seite, was mir auffällt. Keine Präsentation, keine Unterlagen. Nur Ihre Website-Adresse - die haben Sie ja.",
              },
              {
                q: "Ich kenne mich mit dem ganzen Internet-Kram nicht aus.",
                a: "Umso besser. Ich erkläre alles ohne Fachbegriffe - so, dass Sie danach genau wissen, was auf Ihrer Seite fehlt. Kein Technik-Gespräch, kein Vortrag.",
              },
              {
                q: "Was kostet eine neue Website bei Ihnen, falls ich Interesse hätte?",
                a: "Den genauen Preis besprechen wir im Gespräch - er hängt vom Umfang ab. Keine monatlichen Gebühren, kein verstecktes Abo.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="faq-item border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
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

      {/* ══ BOTTOM CTA ══════════════════════════════════════════════════════ */}
      {/* pb-28 Mobile = Sticky CTA bar Platz */}
      <section className="w-full border-t border-[#003566]/12 py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-0 pb-28 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[860px]">

          <div ref={bottomRef} className="border border-[#003566]/20 bg-white">

            {/* Card Header */}
            <div className="px-5 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-7 pb-4 sm:pb-5 border-b border-[#003566]/10">
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.13em] uppercase text-[#003566] mb-2">
                ✦ Kostenlose Website-Analyse
              </p>
              <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-black text-[#000814] tracking-tight leading-snug mb-1">
                Noch kein Termin?{" "}
                <span className="text-[#003566]">Jetzt sichern.</span>
              </h2>
              <p className="text-[11.5px] sm:text-[12px] text-[#000814]/40 mt-1">
                15 Minuten · unverbindlich · ich rufe Sie an
              </p>
              <div className="flex items-center gap-2 mt-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] text-[#000814]/40">
                  Noch Plätze verfügbar diesen Monat
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="-my-4">
              <CalendlyFallBackForm />
            </div>

            {/* Card Footer */}
            <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-7">
              <p className="text-[11px] text-[#000814]/35 text-center">
                🔒 Ihre Daten werden nicht weitergegeben.{" "}
                <Link
                  to="/datenschutz"
                  className="underline hover:text-[#003566] transition-colors"
                >
                  Datenschutz
                </Link>
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ErstGespraech;
