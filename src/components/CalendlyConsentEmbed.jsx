import React, { useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import CookieBanner from './CookieBanner';

const CalendlyConsentEmbed = () => {
  const [consent, setConsent] = useState(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      setConsent(parsed);

      // Wenn bereits Consent vorhanden ist -> Calendly aktivieren
      if (parsed.analytics || parsed.marketing) {
        setEnabled(true);
      }
    }
  }, []);

  const openCalendly = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setEnabled(true);

    if (window.gtag) {
      window.gtag("event", "calendly_open", {
        location: "Erstgespräch",
      });
    }
  };

  return (
    <div>
      <CookieBanner onConsentChange={setConsent} />

      {!enabled && (
        <div className="border p-6 text-center bg-gray-50">
          <p className="mb-8">
            Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.
          </p>
          <button
            onClick={openCalendly}
            className="bg-[#003566] hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold"
          >
            Terminbuchung aktivieren
          </button>
        </div>
      )}

      {enabled && consent?.marketing && (
        <InlineWidget
          url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
          styles={{ minWidth: "320px", height: "700px" }}
          onEvent={(e) => {
            if (e.event === "calendly.event_scheduled") {
              if (window.gtag) {
                window.gtag("event", "calendly_booked", {
                  location: "Erstgespräch",
                });
              }
            }
          }}
        />
      )}
    </div>
  );
};

export default CalendlyConsentEmbed;
