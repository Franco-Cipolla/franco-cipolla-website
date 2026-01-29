import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default function AnalyseLanding() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main className="bg-[#0B0F14] text-white overflow-x-hidden">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* ================= HERO ================= */}
        <section ref={heroRef} className="pt-28 pb-32 text-center">
          <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-white/20 text-white/80">
            Kostenlose Website-Analyse für lokale Unternehmen
          </span>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            In 15 Minuten wissen Sie,
            <br />
            <span className="text-white/60">
              warum Ihre Website keine Kunden bringt
            </span>
          </h1>

          <p className="mt-8 max-w-[720px] mx-auto text-lg text-white/70">
            Ich zeige Ihnen konkret, was Ihre Website aktuell blockiert
            – und was Sie ändern müssen, damit mehr Anfragen entstehen.
          </p>

          {/* VIDEO */}
          <FadeUp delay={0.2}>
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DEIN_VIDEO_ID"
                  title="Website Analyse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <a
              href="#calendly"
              className="inline-block mt-14 px-10 py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
            >
              Kostenlose Analyse sichern
            </a>
          </FadeUp>
        </section>

        {/* ================= ZIELGRUPPE ================= */}
        <section className="pb-32 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Diese Analyse ist für Sie, wenn …
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Ihre Website Besucher hat, aber kaum Anfragen",
              "Sie nicht wissen, was konkret optimiert werden muss",
              "Sie keine Zeit für Agentur-Blabla haben",
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
                  {item}
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="pb-32 text-center">
          <FadeUp>
            <p className="text-white/50 mb-4">
              Kommt Ihnen das bekannt vor?
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              „Keiner bucht – und keiner liest“
            </h2>

            <p className="mt-6 max-w-[720px] mx-auto text-white/70">
              Das Problem ist nicht Ihr Angebot,
              sondern dass Besucher nicht verstehen,
              <strong className="text-white"> warum sie jetzt handeln sollen.</strong>
            </p>
          </FadeUp>
        </section>

        {/* ================= PROZESS ================= */}
        <section className="pb-32 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Was passiert in der Analyse?
            </h2>
          </FadeUp>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { title: "1. Klarheit", text: "Conversion-Blocker erkennen" },
              { title: "2. Struktur", text: "Nutzerführung verstehen" },
              { title: "3. Schritte", text: "Konkrete Optimierungen" },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="mb-3 font-medium">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ================= CALENDLY ================= */}
        <section id="calendly" className="pb-40 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Kostenlose Analyse buchen
            </h2>

            <p className="mt-6 text-white/70 max-w-[600px] mx-auto">
              10–15 Minuten. Keine Verpflichtung.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-16 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://calendly.com/DEIN_CALENDLY/website-analyse"
                width="100%"
                height="700"
                frameBorder="0"
                title="Calendly"
              />
            </div>
          </FadeUp>
        </section>

      </div>
    </main>
  );
}
