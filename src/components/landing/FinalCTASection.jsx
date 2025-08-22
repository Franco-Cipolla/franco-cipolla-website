import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA1 from "../CTA1";

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const targets = [headlineRef.current, textRef.current, ctaRef.current].filter(Boolean);

    if (targets.length === 0) return;

    gsap.fromTo(
      targets,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 text-center bg-gradient-to-r from-blue-200 to-blue-50 rounded-tl-2xl shadow-lg"
    >
      <h2
        ref={headlineRef}
        className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6"
      >
        Verpassen Sie keine Kunden mehr!
      </h2>
      <p
        ref={textRef}
        className="mb-8 max-w-xl mx-auto text-lg text-gray-700"
      >
        Ihre zukünftigen Kunden suchen online nach Ihnen – die Konkurrenz ist nur einen Klick entfernt. Lassen Sie uns gemeinsam Ihre Website zu einem Kundenmagneten machen.
      </p>
      <div ref={ctaRef}>
        <CTA1 bg="bg-white" text="Jetzt kostenloses Erstgespräch sichern" />
      </div>
    </section>
  );
};

export default FinalCTASection;
