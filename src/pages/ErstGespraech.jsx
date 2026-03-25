import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import SEOJsonLD from "../components/SEOJsonLD";
import CheckIcon from "../components/CheckIcon";
import CalendlyFallBackForm from "../components/CalendlyFallbackForm";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// ── fadeUp pro Element ────────────────────────────────────────────────────────
const useFadeUp = (ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [ref]);
};

// ── Hauptkomponente ───────────────────────────────────────────────────────────
const ErstGespraech = () => {
  const sectionRef = useRef(null);

  // Hero-Animation (original)
  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll(".contact-animate");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  // Refs für Sections unterhalb
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
  const faqSectionRef = useRef(null);
  const bottomRef     = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useFadeUp(pain1Ref); useFadeUp(pain2Ref); useFadeUp(pain3Ref);
  useFadeUp(painNoteRef); useFadeUp(ablaufHeadRef);
  useFadeUp(step1Ref); useFadeUp(step2Ref); useFadeUp(step3Ref);
  useFadeUp(demoHeadRef);
  useFadeUp(demo1Ref); useFadeUp(demo2Ref); useFadeUp(demo3Ref);
  useFadeUp(bottomRef);

  // FAQ stagger animation (wie FAQSection.jsx)
  useEffect(() => {
    if (!faqSectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        faqSectionRef.current.querySelectorAll(".faq-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12,
          scrollTrigger: { trigger: faqSectionRef.current, start: "top 85%" },
        }
      );
    }, faqSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Kostenlose Website-Analyse – Erstgespräch buchen | Franco Cipolla</title>
        <meta
          name="description"
          content="In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert – kostenlos, unverbindlich, direkt auf Ihrer Seite gezeigt."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/erstgespraech" />
      </Helmet>

      <SEOJsonLD page="erstgespraech" />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section ref={sectionRef} className="w-full flex justify-center mt-20 px-4">
        <div className="md:py-20 py-16 max-w-[1100px] w-full">

          {/* HEADER */}
          <div className="contact-animate mb-10 text-center max-w-3xl mx-auto">

            {/* Trust-Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 border border-[#003566]/15 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-medium text-[#003566] tracking-tight">
                Lokal in Ennepetal & NRW
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-5">
              In 15 Minuten Klarheit, wo Ihre Website Anfragen verliert –<br />
              und was Sie konkret ändern können.
            </h1>

            <p className="text-[15px] md:text-[17px] text-[#000814]/70 leading-relaxed mb-3 max-w-2xl mx-auto">
              Ich analysiere Ihre Seite vorher – Sie müssen nichts machen.
              In 15 Minuten wissen Sie genau, was fehlt, damit Ihr Telefon
              öfter klingelt. Und zwar auch von Leuten aus Ihrer Region,
              die Sie noch nicht kennen.
            </p>
            <p className="text-[12px] sm:text-[13px] text-black/35 tracking-wide">
              Kostenlos &nbsp;·&nbsp; kein Verkaufsgespräch &nbsp;·&nbsp; Sie entscheiden danach
            </p>
          </div>

          {/* BENEFITS */}
          <div className="contact-animate mb-10 text-center">
            <ul className="inline-block text-left space-y-3">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-[14px] text-[#000814]/70">
                  Für Betriebe aus{" "}
                  <Link to="/" className="underline transition hover:text-[#003566]">Ennepetal</Link>,{" "}
                  <Link to="/hagen" className="underline transition hover:text-[#003566]">Hagen</Link>,{" "}
                  <Link to="/wuppertal" className="underline transition hover:text-[#003566]">Wuppertal</Link>{" "}
                  & Umgebung
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-[14px] text-[#000814]/70">
                  Konkret auf Ihrer Seite gezeigt – keine Folien, keine Theorie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-[14px] text-[#000814]/70">
                  Kein Druck – Sie entscheiden danach, was als nächstes passiert
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-[14px] text-[#000814]/70">
                  15 Minuten · keine Vorbereitung nötig · Terminbestätigung per Nachricht
                </span>
              </li>
            </ul>
          </div>

          {/* ── BOTTOM CTA ─────────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <div ref={bottomRef} className="border border-[#003566]/20 bg-white">
            <div className="p-5 sm:p-6 border-b border-[#003566]/10">
              <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-[#003566] mb-2">
                ✦ Kostenlose Website-Analyse
              </p>
              <h2 className="text-[17px] sm:text-[20px] font-black text-[#000814] tracking-tight leading-snug mb-1">
                Noch kein Termin?{" "}
                <span className="text-[#003566]">Jetzt sichern.</span>
              </h2>
              <p className="text-[12px] text-[#000814]/40 mt-1">
                15 Minuten · unverbindlich · ich rufe Sie an
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[11.5px] text-[#000814]/40">Noch Plätze verfügbar diesen Monat</p>
              </div>
            </div>

            <div className="-my-4">
              <CalendlyFallBackForm />
            </div>

            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[11px] text-[#000814]/35 text-center">
                🔒 Ihre Daten werden nicht weitergegeben.{" "}
                <Link to="/datenschutz" className="underline hover:text-[#003566] transition-colors">
                  Datenschutz
                </Link>
              </p>
            </div>
          </div>

        </div>
      </section>

          {/* DSGVO */}
          <p className="contact-animate text-xs text-black/50 mt-6 text-center">
            🔒 Mehr Infos in der{" "}
            <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>
          </p>

        </div>
      </section>

      {/* ── PAIN ───────────────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <div className="text-center mb-10">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-3">
              Kommt Ihnen das bekannt vor?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000814] leading-tight">
              Die Website ist da.{" "}
              <span className="text-[#003566]">Nur das Telefon klingelt nicht.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                ref: pain1Ref,
                icon: "📭",
                title: "Anfragen kommen – aber selten und unregelmäßig",
                body: "Manchmal meldet sich jemand über die Website, manchmal wochenlang nicht. Sie wissen nie, was nächsten Monat kommt.",
              },
              {
                ref: pain2Ref,
                icon: "🔁",
                title: "Fast alles läuft noch über Empfehlungen",
                body: "Solange die Stammkunden da sind, läuft es. Aber Sie merken: Das liegt nicht an Ihrer Website – und das ist ein Problem.",
              },
              {
                ref: pain3Ref,
                icon: "😮‍💨",
                title: "Für Online-Kram ist sowieso keine Zeit",
                body: "Das Tagesgeschäft läuft. Wann soll man sich da noch um die Website kümmern? Also bleibt es, wie es ist – und die Anfragen auch.",
              },
            ].map(({ ref, icon, title, body }) => (
              <div key={title} ref={ref} className="border border-[#003566]/13 bg-[#003566]/[0.025] p-5">
                <span className="text-xl block mb-3">{icon}</span>
                <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] mb-2 leading-snug">{title}</p>
                <p className="text-[12px] sm:text-[12.5px] text-[#000814]/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Brücke: Pain → Lösung */}
          <div ref={painNoteRef} className="border-l-[3px] border-[#003566] bg-[#003566]/[0.04] px-4 sm:px-5 py-3 mt-8 max-w-2xl mx-auto">
            <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] leading-relaxed">
              In 15 Minuten sehen Sie konkret, warum Besucher kommen –
              aber nicht anrufen. Und was sich daran ändern lässt.{" "}
              <span className="text-[#003566]">Ohne dass Sie vorher irgendetwas vorbereiten müssen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── ABLAUF ─────────────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <div ref={ablaufHeadRef} className="text-center mb-12">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-3">Ablauf</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000814] leading-tight">
              Was passiert in den{" "}
              <span className="text-[#003566]">15 Minuten?</span>
            </h2>
          </div>

          <div className="border-t border-[#003566]/12">
            {[
              {
                ref: step1Ref, num: "01",
                label: "Schritt 1 · kostenlos · 15 Minuten · kein Aufwand für Sie",
                title: "Ich schaue mir Ihre Website an",
                highlight: "– aus Sicht Ihrer Kunden",
                body: "Keine Vorbereitung, kein Technik-Gespräch. Ich analysiere Ihre Seite vorher und zeige Ihnen im Gespräch konkret, an welchen Stellen Besucher abspringen.",
              },
              {
                ref: step2Ref, num: "02",
                label: "Schritt 2 · konkrete Ergebnisse",
                title: "Ich zeige Ihnen 2–3 konkrete Schwachstellen",
                highlight: "– direkt auf Ihrer Seite",
                body: "Keine Präsentation, keine Folien. Ich zeige live, was auf Ihrer Seite fehlt, damit ein Interessent zum Telefonhörer greift.",
              },
              {
                ref: step3Ref, num: "03",
                label: "Schritt 3 · Ihre Entscheidung",
                title: "Sie entscheiden, was als nächstes passiert",
                highlight: "– ohne Druck",
                body: "Manche setzen die Hinweise selbst um – das ist völlig in Ordnung. Wenn Sie wollen, erkläre ich danach kurz, was ich anbiete. Aber das ist kein Pflichtprogramm.",
              },
            ].map(({ ref, num, label, title, highlight, body }, i, arr) => (
              <div
                key={num} ref={ref}
                className="grid grid-cols-[36px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-6 py-6 md:py-8 border-b border-[#003566]/12"
              >
                <div className="flex flex-col items-center gap-2 pt-1">
                  <span className="text-[11px] font-bold tracking-[0.1em] text-[#003566]">{num}</span>
                  {i < arr.length - 1 && <div className="w-px flex-1 min-h-[32px] bg-[#003566]/15" />}
                </div>
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase text-[#000814]/35 mb-1.5">{label}</p>
                  <h3 className="text-base md:text-xl font-black text-[#000814] tracking-tight leading-snug mb-2 md:mb-3">
                    {title} <span className="text-[#003566]">{highlight}</span>
                  </h3>
                  <p className="text-[13px] md:text-[15px] text-[#000814]/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO-EINBLICK ──────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <div ref={demoHeadRef} className="text-center mb-10">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#003566] mb-3">
              Beispiel aus einer Demo-Analyse
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000814] leading-tight mb-2">
              Was ich auf lokalen Websites{" "}
              <span className="text-[#003566]">immer wieder sehe</span>
            </h2>
            <p className="text-[12px] text-[#000814]/35 mt-2">Demo-Beispiele · keine echten Kundendaten</p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                ref: demo1Ref, label: "Fehler #1",
                title: "Die Telefonnummer ist nicht sofort sichtbar",
                body: "Sie ist irgendwo im unteren Bereich der Seite versteckt. Der Interessent muss erst suchen – und sucht dann woanders.",
              },
              {
                ref: demo2Ref, label: "Fehler #2",
                title: "Der Besucher weiß nicht, was er als nächstes tun soll",
                body: '"Kontakt" als einziger Hinweis reicht nicht. "Jetzt kostenlose Einschätzung anfragen" ist ein Unterschied – klein im Text, groß in der Wirkung.',
              },
              {
                ref: demo3Ref, label: "Fehler #3",
                title: "Die Seite erklärt den Betrieb – aber nicht, was der Kunde davon hat",
                body: '"Seit 20 Jahren in Ennepetal tätig" ist keine Antwort auf die Frage des Besuchers: Kannst du mein Problem lösen? Wie schnell? Was kostet das?',
              },
            ].map(({ ref, label, title, body }) => (
              <div key={label} ref={ref} className="border border-[#003566]/13 bg-[#003566]/[0.025] p-4 sm:p-5 flex gap-4 items-start">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#003566] border-b border-[#003566]/25 pb-[1px] flex-shrink-0 mt-1">
                  {label}
                </span>
                <div>
                  <p className="text-[13px] sm:text-[14px] font-bold text-[#000814] mb-1 leading-snug">{title}</p>
                  <p className="text-[12px] sm:text-[12.5px] text-[#000814]/50 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section ref={faqSectionRef} className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Häufige Fragen
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Ist das wirklich kostenlos – was ist der Haken?",
                a: "Kein Haken. Ich zeige Ihnen in 15 Minuten konkret, was auf Ihrer Seite nicht funktioniert. Am Ende erkläre ich kurz, was ich anbiete – aber nur wenn es passt, und ohne Druck. Viele setzen die Hinweise auch einfach selbst um. Das ist mir recht.",
              },
              {
                q: "Ich hatte schon mal eine Agentur – das hat nichts gebracht.",
                a: "Das höre ich oft. Meistens lag es daran, dass die Website zwar gut aussah, aber nie darauf ausgelegt war, dass jemand anruft. Genau das schaue ich mir in der Analyse an – nicht ob die Seite schön ist, sondern ob sie Besucher zur Kontaktaufnahme führt.",
              },
              {
                q: "Ich habe gerade keine Zeit für sowas.",
                a: "Deswegen dauert es auch nur 15 Minuten. Ich schaue mir Ihre Seite vorher an – Sie brauchen nichts vorzubereiten, nichts nachzulesen, nichts zu erklären. Sie hören zu und stellen Fragen, wenn etwas unklar ist.",
              },
              {
                q: "Meine Website ist doch eigentlich okay.",
                a: "Möglich. Viele Seiten sehen ordentlich aus und funktionieren trotzdem nicht als Anfragekanal. In 15 Minuten wissen wir, ob das bei Ihnen so ist – oder ob wirklich alles passt. Wenn alles gut ist, sage ich das.",
              },
              {
                q: "Ich habe schon eine Website – warum eine neue?",
                a: "Das muss gar nicht das Ergebnis sein. Die Analyse zeigt zuerst, ob die bestehende Seite grundlegende Dinge besser machen kann. Manchmal reichen kleine Änderungen. Ob eine neue Seite sinnvoll ist, besprechen wir erst danach – und nur wenn Sie das möchten.",
              },
              {
                q: "Wie läuft das Gespräch ab – muss ich irgendwas vorbereiten?",
                a: "Nein. Wir telefonieren kurz, ich teile meinen Bildschirm und zeige direkt auf Ihrer Seite, was mir auffällt. Keine Präsentation, keine Unterlagen. Nur Ihre Website-Adresse – die haben Sie ja.",
              },
              {
                q: "Ich kenne mich mit dem ganzen Internet-Kram nicht aus.",
                a: "Umso besser. Ich erkläre alles ohne Fachbegriffe – so, dass Sie danach genau wissen, was auf Ihrer Seite fehlt. Kein Technik-Gespräch, kein Vortrag.",
              },
              {
                q: "Was kostet eine neue Website bei Ihnen, falls ich Interesse hätte?",
                a: "Den genauen Preis besprechen wir im Gespräch – er hängt vom Umfang ab. Der Einstiegspreis liegt bei 800 €, zahlbar in zwei Teilen: die Hälfte zu Beginn, die andere Hälfte kurz vor dem Launch. Keine monatlichen Gebühren, kein verstecktes Abo.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-item border cursor-pointer border-gray-200 rounded-xl p-6 shadow-sm transition duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full cursor-pointer flex justify-between items-center text-left gap-4"
                >
                  <span className="font-semibold text-base text-[#000814]">{faq.q}</span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-[#003566] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-[#000814]/65 text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0 border-t border-[#003566]/12">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[860px]">

          <div ref={bottomRef} className="border border-[#003566]/20 bg-white">
            <div className="p-5 sm:p-6 border-b border-[#003566]/10">
              <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-[#003566] mb-2">
                ✦ Kostenlose Website-Analyse
              </p>
              <h2 className="text-[17px] sm:text-[20px] font-black text-[#000814] tracking-tight leading-snug mb-1">
                Noch kein Termin?{" "}
                <span className="text-[#003566]">Jetzt sichern.</span>
              </h2>
              <p className="text-[12px] text-[#000814]/40 mt-1">
                15 Minuten · unverbindlich · ich rufe Sie an
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[11.5px] text-[#000814]/40">Noch Plätze verfügbar diesen Monat</p>
              </div>
            </div>

            <div className="-my-4">
              <CalendlyFallBackForm />
            </div>

            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[11px] text-[#000814]/35 text-center">
                🔒 Ihre Daten werden nicht weitergegeben.{" "}
                <Link to="/datenschutz" className="underline hover:text-[#003566] transition-colors">
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
