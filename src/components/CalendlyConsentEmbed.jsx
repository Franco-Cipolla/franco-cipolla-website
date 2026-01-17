import React, { useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import CookieBanner from './CookieBanner';

const CalendlyConsentEmbed = () => {
  const [consent, setConsent] = useState(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (saved) {
      setConsent(JSON.parse(saved));
    }
  }, []);

  const openCalendly = () => {
    // Wenn kein Consent gesetzt ist, zwinge Marketing auf true
    const newConsent = { necessary: true, analytics: false, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setEnabled(true);
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
        />
      )}
    </div>
  );
};

export default CalendlyConsentEmbed;
