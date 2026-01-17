import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../gsapSetup';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const faqsWuppertal = [
  {
    question: 'Warum bekomme ich über meine Website in Wuppertal keine Anfragen?',
    answer: (
      <div className="space-y-2">
        <p>
          Viele Websites sehen gut aus, <strong>aber Besucher wissen nicht, was sie tun sollen</strong>.
          Ergebnis: keine Anfragen.
        </p>
        <p>
          Ich baue Websites, die Besucher Schritt für Schritt führen, Vertrauen aufbauen und gezielt zur Anfrage bringen.
        </p>
      </div>
    ),
  },
  {
    question: 'Ich habe noch keine Website. Kann ich trotzdem starten?',
    answer: (
      <div className="space-y-2">
        <p>Ja. Wir starten sofort, auch ohne bestehende Website.</p>
        <p>
          Im Erstgespräch bekommen Sie einen <strong>kostenlosen Mini-Prototyp</strong>, der zeigt, wie Besucher aus Wuppertal zu Kunden werden.
        </p>
        <p><strong>Wichtig:</strong> Ich nehme nur 2 Projekte pro Monat an – Fokus statt Masse.</p>
      </div>
    ),
  },
  {
    question: 'Was genau bekomme ich?',
    answer: (
      <div className="space-y-2">
        <p>
          Nicht nur eine „schöne Website“ – sondern ein <strong>System, das Besucher gezielt zur Anfrage führt</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Conversion-optimierte Struktur & Texte</li>
          <li>Modernes Design & Vertrauen</li>
          <li>Mobile & schnell – keine verlorenen Besucher</li>
          <li>Google Maps & lokale Sichtbarkeit</li>
          <li><strong>Inklusive Bonus:</strong> Website-Besucher-Startpaket (2 Posts + kurzes Video) Im Wert von 300€. Für die nächsten drei Kunden.</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Wie viel Zeit muss ich investieren?',
    answer: (
      <div className="space-y-2">
        <p>Minimal. Sie liefern nur Briefing & Zugang – <strong>den Rest erledige ich</strong>.</p>
        <p>Die Website entsteht im Hintergrund, während Sie Ihr Business weiterführen.</p>
      </div>
    ),
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: (
      <div className="space-y-2">
        <p>In Wuppertal sind Websites meist in <strong>2–4 Wochen</strong> live.</p>
        <p>Klare Schritte, minimaler Aufwand, kein Stress.</p>
      </div>
    ),
  },
  {
    question: 'Was, wenn die Website keine Anfragen bringt?',
    answer: (
      <div className="space-y-2">
        <p>Ich baue Websites mit klaren Kontaktpunkten und nachvollziehbaren Besucherwegen.</p>
        <p>Im Erstgespräch prüfen wir, ob eine neue Website jetzt Sinn macht oder andere Maßnahmen besser sind.</p>
      </div>
    ),
  },
  {
    question: 'Kann ich später Änderungen vornehmen?',
    answer: (
      <div className="space-y-2">
        <p>Ja. Kleine Anpassungen sind jederzeit möglich.</p>
        <p>Für regelmäßige Optimierung gibt es optionale Wartungspakete – <strong>monatlich kündbar</strong>.</p>
      </div>
    ),
  },
];

const FAQSectionWuppertal = () => {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => navigate('/erstgespraech');

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.faq-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-6 text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Häufig gestellte Fragen
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqsWuppertal.map((faq, index) => (
          <div
            key={index}
            className="faq-item border cursor-pointer border-gray-200 rounded-xl p-6 shadow-sm transition duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex cursor-pointer justify-between items-center text-left"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform cursor-pointer duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>

            {openIndex === index && (
              <div className="mt-4 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div ref={ctaRef} className="text-center mt-12 w-full flex flex-col items-center">
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto my-6">
          Noch unsicher? <br />
          Lassen Sie uns prüfen, wie Ihre Website in Wuppertal gezielt neue Kunden bringt.
        </p>
        <button
          onClick={handleClick}
          className="px-5 py-2 cursor-pointer text-white bg-[#001D3D] flex items-center gap-2 justify-center rounded shadow-md border-2 transform hover:-translate-y-1 transition border-[#003566] hover:border-[#001D3D]"
        >
          🔍 Kostenlose Website-Analyse
        </button>
      </div>
    </section>
  );
};

export default FAQSectionWuppertal;
