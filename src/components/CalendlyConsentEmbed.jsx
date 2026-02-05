import React, { useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";
import CookieBanner from './CookieBanner';
import CalendlyFallbackForm from './CalendlylbackForm';

const CalendlyConsentEmbed = () => {
  const navigate = useNavigate();
  const [consent, setConsent] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [widgetAvailable, setWidgetAvailable] = useState(false);
  const [fallback, setFallback] = useState(false);

  // Consent aus LocalStorage laden
  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      setConsent(parsed);

      if (parsed.analytics || parsed.marketing) {
        setEnabled(true);
      }
    }
  }, []);

  // Calendly aktivieren, wenn Nutzer Button klickt
  const openCalendly = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setEnabled(true);

    if (window.gtag) {
      window.gtag("event", "calendly_open", { location: "Erstgespräch" });
    }
  };

  // Fallback-Logik, falls iFrame blockiert wird
  useEffect(() => {
    if (!enabled) return;

    const checkWidget = setInterval(() => {
      const iframe = document.querySelector('iframe[src*="calendly.com"]');
      if (iframe) {
        setWidgetAvailable(true);
        clearInterval(checkWidget);
      }
    }, 500);

    const timeout = setTimeout(() => {
      if (!widgetAvailable) setFallback(true);
      clearInterval(checkWidget);
    }, 5000);

    return () => {
      clearInterval(checkWidget);
      clearTimeout(timeout);
    };
  }, [enabled, widgetAvailable]);

  // Calendly oder Fallback anzeigen
  return (
    <div>
      <CookieBanner onConsentChange={setConsent} />

      {!enabled && (
        <div className="border p-6 text-center bg-gray-50 rounded-lg shadow-sm">
          <p className="mb-6 text-lg">
            Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.
          </p>
          <button
            onClick={openCalendly}
            className="bg-[#003566] hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold"
          >
            Terminbuchung aktivieren
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Dabei können Cookies gesetzt und Daten an Drittanbieter übertragen werden.
          </p>
        </div>
      )}

      {enabled && !fallback && consent?.marketing && (
        <InlineWidget
          url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
          styles={{ minWidth: "320px", height: "700px" }}
          onEvent={(e) => {
            if (e.event === "calendly.event_scheduled") {
              if (window.gtag) {
                window.gtag("event", "calendly_booked", { location: "Erstgespräch" });
              }
            }
          }}
          onLoad={() => setWidgetAvailable(true)}
          onError={() => setFallback(true)}
        />
      )}

      {fallback && <CalendlyFallbackForm navigate={navigate} />}
    </div>
  );
};

export default CalendlyConsentEmbed;
