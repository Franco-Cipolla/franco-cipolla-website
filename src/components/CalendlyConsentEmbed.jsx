import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import CalendlyFallbackForm from "./CalendlyFallBackForm";
import CookieBanner from "./CookieBanner";

const CalendlyConsentEmbed = () => {
  const [, setConsent] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      setConsent(parsed);
      if (parsed.analytics || parsed.marketing) setEnabled(true);
    }
  }, []);

  const openCalendly = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setEnabled(true);

    // Fallback nach 7 Sekunden nur anzeigen, wenn iframe noch nicht geladen
    setTimeout(() => {
      if (!iframeLoaded) setShowFallback(true);
    }, 7000);
  };

  if (!enabled) {
    return (
      <div>
        <CookieBanner onConsentChange={setConsent} />
        <div className="border p-6 text-center bg-gray-50 rounded-lg shadow-sm">
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
      </div>
    );
  }

  return showFallback ? (
    <CalendlyFallbackForm />
  ) : (
    <div className="relative">
      <InlineWidget
        url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
        styles={{ minWidth: "320px", height: "700px" }}
        onLoad={() => setIframeLoaded(true)}
      />
      {!iframeLoaded && (
        <div className="absolute inset-0 bg-gray-50 bg-opacity-90 flex flex-col items-center justify-center rounded-lg p-6">
          <div className="w-9 h-9 border-4 border-gray-300 border-t-4 border-t-[#003566] rounded-full animate-spin mb-4"></div>
          <p className="text-gray-700 text-center">
            Falls Calendly nicht geladen wird, erscheint das Fallback-Formular in 7 Sekunden...
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendlyConsentEmbed;
