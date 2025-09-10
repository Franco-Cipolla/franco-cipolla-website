import React, { useRef, useEffect, useState } from "react";
import { gsap } from "../gsapSetup";
import { FaChevronDown } from "react-icons/fa";
import WebsiteOptimierenCTA from "./WebsiteOptimierenCTA";

const faqs = [
  {
    question: "Ist die Checkliste wirklich kostenlos?",
    answer: (
      <div className="space-y-2">
        <p>
          Ja! 100% kostenlos und sofort verfügbar nach deiner E-Mail-Eintragung. Keine versteckten Kosten, keine Haken.
        </p>
      </div>
    ),
  },
  {
    question: "Warum muss ich meine E-Mail angeben?",
    answer: (
      <div className="space-y-2">
        <p>
          Damit wir dir die Checkliste direkt zusenden können. Zusätzlich bekommst du Tipps zur Website-Optimierung & Conversion – völlig unverbindlich.
        </p>
      </div>
    ),
  },
  {
    question: "Habe ich irgendein Risiko?",
    answer: (
      <div className="space-y-2">
        <p>
          Nein. Die Checkliste ist kostenlos und sofort anwendbar. Du gehst keinerlei Verpflichtungen ein.
        </p>
      </div>
    ),
  },
  {
    question: "Für wen ist die Checkliste geeignet?",
    answer: (
      <div className="space-y-2">
        <p>
          Für Coaches, Dienstleister, Online-Shops – kurz: für jedes Business, das seine Website verbessern möchte.
        </p>
      </div>
    ),
  },
  {
    question: "Wie schnell kann ich Ergebnisse sehen?",
    answer: (
      <div className="space-y-2">
        <p>
          Schon nach wenigen Minuten siehst du, welche Elemente deiner Website optimiert werden sollten. Klarheit & konkrete To-Dos inklusive.
        </p>
      </div>
    ),
  },
];

const FAQ = ({ onCTAClick }) => {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animieren der FAQ-Items
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".faq-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Animieren des CTA-Buttons
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-6 text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Häufige Fragen
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border border-gray-200 rounded-xl p-5 shadow-sm transition duration-300 cursor-pointer"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="mt-4 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        {/* CTA-Button */}
        <div ref={ctaRef} className="w-full mt-10 flex justify-center">
          <WebsiteOptimierenCTA onClick={onCTAClick} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
