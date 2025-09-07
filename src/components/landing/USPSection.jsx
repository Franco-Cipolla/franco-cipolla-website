import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../gsapSetup";

import { FaPalette, FaRocket, FaChartLine, FaHandshake } from "react-icons/fa";

const USPSection = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const usps = [
    {
      title: "Alles aus einer Hand",
      text: "Design, Programmierung, SEO und Texte – ohne Agentur‑Overhead.",
      icon: <FaPalette className="text-3xl text-blue-500 mb-2" />,
    },
    {
      title: "Jung, modern, digital",
      text: "Mit 17 Jahren Unternehmer – frischer Blick, neueste Methoden, schnelle Umsetzung.",
      icon: <FaRocket className="text-3xl text-purple-500 mb-2" />,
    },
    {
      title: "Ergebnisfokus",
      text: "Websites, die verkaufen, Vertrauen schaffen und Ihre Umsätze steigern.",
      icon: <FaChartLine className="text-3xl text-green-500 mb-2" />,
    },
    {
      title: "Fair & transparent",
      text: "Hochwertige Qualität, faire Preise – keine versteckten Kosten.",
      icon: <FaHandshake className="text-3xl text-yellow-500 mb-2" />,
    },
  ];

  useEffect(() => {
    itemRefs.current.forEach((item) => {
      if (!item) return;

      const content = item.querySelector(".usp-content"); // Wrapper
      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 flex flex-col items-center max-w-[1100px] mx-auto">
      <div className="text-center mb-12" id="usp-section" >
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
         Warum KMUs in NRW mit mir arbeiten
        </h2>
        <p className="text-lg text-gray-700 mt-4">
         Weil Sie mehr brauchen als nur eine schöne Website – Sie brauchen Ergebnisse.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {usps.map((usp, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="p-6 bg-gray-50 flex flex-col items-center rounded-xl shadow-md text-center"
          >
            <div className="usp-content flex flex-col items-center gap-3">
              {usp.icon}
              <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
              <p className="text-gray-700">{usp.text}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default USPSection;
