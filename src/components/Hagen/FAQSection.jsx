import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../gsapSetup';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const faqsHagen = [
  {
    question: 'Warum bekomme ich über meine Website in Hagen keine Anfragen?',
    answer: (
      <div className="space-y-2">
        <p>
          Viele Websites sehen gut aus, <strong>aber Besucher wissen nicht, was sie tun sollen</strong>. Ergebnis: keine Anfragen.
        </p>
        <p>
          Ich erstelle Websites, die Besucher Schritt für Schritt führen, Vertrauen aufbauen und gezielt zur Anfrage bringen.
        </p>
        <p>
          Inklusive: <strong>Conversion-optimierte Struktur, Google Maps Integration</strong> & <strong>Bonus: Website-Besucher-Startpaket</strong> zur gezielten Besucherlenkung.
        </p>
      </div>
    ),
  },
  {
    question: 'Ich habe noch keine Website. Kann ich trotzdem starten?',
    answer: (
      <div className="space-y-2">
        <p>Absolut! Auch ohne bestehende Website können wir sofort starten.</p>
        <p>
          Sie erhalten einen <strong>kostenlosen Design-Prototypen in unserem Erstgespräch</strong>, der zeigt, wie Besucher aus zu Kunden werden können.
        </p>
        <p><strong>Wichtig:</strong> Ich betreue nur 2 Kunden pro Monat – volles Fokus auf meine Projekte.</p>
      </div>
    ),
  },
  {
    question: 'Was genau bekomme ich?',
    answer: (
      <div className="space-y-2">
        <p>Keine „schöne Website“ allein, sondern ein <strong>System, das Besucher direkt zu Anfragen führt</strong>.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Conversion-optimierte Struktur & Texte → Interessenten werden Kunden</li>
          <li>Modernes Design & Branding → Vertrauen & Professionalität</li>
          <li>Mobile-optimiert & schnell → keine verlorenen Besucher</li>
          <li>Google Maps & lokale Sichtbarkeit → Kunden finden Sie sofort</li>
          <li><strong>Bonus:</strong> Website-Besucher-Startpaket → 2 fertige Posts + kurzes Video zur Besuchersteigerung</li>
        </ul>
        <p className="text-sm text-gray-600 mt-2">Sofort umsetzbar – erste Besucher bereits in den ersten Tagen.</p>
      </div>
    ),
  },
  {
 question: 'Wie viel kostet eine Website?',
answer: (
  <div className="space-y-2">
    <p>
      Für lokale Unternehmen in Hagen & Umgebung starten Projekte aktuell bei <strong>800 € im Founders-Paket</strong>.
      Dieses Angebot ist auf <strong>die nächsten 3 Kunden </strong> limitiert.
    </p>
    <p>
      Sie zahlen <strong>50% Anzahlung</strong>, den Rest erst, wenn Ihre Website live geht.
      So behalten Sie volle Kontrolle und Sicherheit.
    </p>


  </div>
),

},
{
    question: 'Worum geht es in der Website-Analyse?',
    answer: (
      <div className="space-y-2">
         <p>
      In der kostenlosen Website-Analyse zeige ich genau, wo Ihr Website Anfragen verliert, und zeige Ihnen,
      wie Sie diese Punkte beheben könnten um mehr Anfragen zu gewinnen. <br/> <br/>
      Danach erhalten Sie wenn Sie möchten ein <strong>transparentes Festpreis-Angebot</strong> – ohne versteckte Kosten.
    </p>
      </div>
    ),
  },
  {
    question: 'Wie viel Zeit muss ich investieren?',
    answer: (
      <div className="space-y-2">
        <p>Minimal. Sie liefern nur Briefing & Zugänge – <strong>den Rest erledige ich</strong>.</p>
        <p>Ihre Website entsteht im Hintergrund, während Sie sich um Ihr Business kümmern.</p>
      </div>
    ),
  },
  {
  question: 'Erstellst du auch E-Commerce Systeme?',
  answer: (
    <div className="space-y-2">
      <p>
        Ich erstelle keine E-Commerce Systeme. Das Lokale-Anfragen-System™ wurde speziell für lokale Unternehmenswebsites entwickelt, um Besucher gezielt in Anfragen zu verwandeln. Nicht für Shops oder andere komplexe Onlinesysteme.
      </p>
      <p>
        <strong>Alles rund um Ihre Unternehmenswebsite erledige ich für Sie.</strong> Ihre Website entsteht komplett im Hintergrund, während Sie sich auf Ihr Business konzentrieren.
      </p>
    </div>
  ),
},
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: (
      <div className="space-y-2">
        <p>Websites für Unternehmen in Hagen sind in <strong>2–4 Wochen</strong> live.</p>
        <p>Klarer Ablauf → minimaler Aufwand, kein Stress.</p>
      </div>
    ),
  },
  {
    question: 'Was, wenn die Website keine Anfragen bringt?',
    answer: (
      <div className="space-y-2">
        <p>Ich baue Websites mit klarer Struktur, optimierten Kontaktpunkten & nachvollziehbaren Besucherwegen.</p>
        <p>Im Erstgespräch prüfen wir, ob eine neue Website jetzt Sinn macht oder andere Maßnahmen effektiver sind.</p>
      </div>
    ),
  },
  {
    question: 'Kann ich später Änderungen vornehmen?',
    answer: (
      <div className="space-y-2">
        <p>Ja, kleinere Anpassungen jederzeit möglich, ohne dass Ihre Anfragen leiden.</p>
        <p>Für regelmäßige Optimierungen gibt es optionale Wartungspakete – <strong>monatlich kündbar, ohne Risiko</strong>.</p>
      </div>
    ),
  },
];

const FAQSectionHagen = () => {
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
        {faqsHagen.map((faq, index) => (
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
          Lassen Sie uns prüfen, wie Ihre Website in Hagen gezielt neue Kunden bringt.
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

export default FAQSectionHagen;
