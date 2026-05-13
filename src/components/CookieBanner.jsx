import React, { useEffect, useRef, useState } from "react";
import { gsap } from "./gsapSetup";

const COOKIE_NAME = "cookieConsent_v1";
const CONSENT_VERSION = "1.0";
const GA_ID = import.meta.env.VITE_GA_ID;

// -----------------------------
// GLOBAL STATE (prior blocking layer)
// -----------------------------
let gaInitialized = false;
let provenExpertInitialized = false;

// -----------------------------
// LOAD GA ONLY AFTER CONSENT
// -----------------------------
const loadGA = (id) => {
  if (!id || gaInitialized) return;

  gaInitialized = true;

  window[`ga-disable-${id}`] = false;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
};

// -----------------------------
// PROVEN EXPERT (lazy loaded)
// -----------------------------
const loadProvenExpert = () => {
  if (provenExpertInitialized) return;

  provenExpertInitialized = true;

  const script = document.createElement("script");
  script.src = "https://s.provenexpert.net/seals/proseal-v2.js";
  script.async = true;

  script.onload = () => {
    if (window.provenExpert) {
      window.provenExpert.proSeal({
        widgetId: "cd5dad9a-26e9-48a2-a2ac-25bc1e102927",
        language: "de-DE",
        bannerColor: "#003566",
        textColor: "#FFFFFF",
        showReviews: true,
        hideDate: true,
        hideName: false,
        hideOnMobile: false,
        bottom: "30px",
        stickyToSide: "right",
        googleStars: true,
        zIndex: "9999",
      });
    }
  };

  document.body.appendChild(script);
};

const CookieBanner = ({ forceShow = false, onClose }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const bannerRef = useRef(null);

  // -----------------------------
  // INIT CONSENT (with proof layer)
  // -----------------------------
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_NAME);

    if (saved) {
      const parsed = JSON.parse(saved);

      setConsent(parsed);
      setShowBanner(false);

      if (parsed.analytics) {
        loadGA(GA_ID);
        loadProvenExpert();
      }
    } else if (!forceShow) {
      setShowBanner(true);
    }
  }, [forceShow]);

  // -----------------------------
  // ANIMATION
  // -----------------------------
  useEffect(() => {
    if ((showBanner || forceShow) && bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 }
      );
    }
  }, [showBanner, forceShow]);

  // -----------------------------
  // CONSENT SAVE (WITH PROOF LOGGING)
  // -----------------------------
  const saveConsent = (newConsent) => {
    const payload = {
      ...newConsent,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
      userAgent: navigator.userAgent,
    };

    localStorage.setItem(COOKIE_NAME, JSON.stringify(payload));
    setConsent(newConsent);

    if (newConsent.analytics) {
      loadGA(GA_ID);
      loadProvenExpert();
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
    setShowBanner(false);
    onClose?.();
  };

  const handleSavePreferences = () => {
    saveConsent({ ...consent, necessary: true });
    setShowBanner(false);
    onClose?.();
  };

  const handleDecline = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
    setShowBanner(false);
    onClose?.();
  };

  if (!(showBanner || forceShow)) return null;

  return (
    <div
      ref={bannerRef}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        w-[95%] md:w-auto max-w-[950px]
        bg-white border border-gray-300
        rounded-lg shadow-lg p-6 text-black
        z-[10000]
        flex flex-col md:flex-row md:items-center md:justify-between
      "
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div className="mb-4 md:mb-0 md:max-w-[60%] text-gray-700">
        <p className="font-semibold text-black mb-2">Cookies</p>
        <p>
          Wir nutzen notwendige Cookies und optional Analytics. Details in der{" "}
          <a href="/datenschutz" className="underline text-[#003566]">
            Datenschutzerklärung
          </a>.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:min-w-[200px]">
        <button
          onClick={handleAcceptAll}
          className="bg-[#003566] text-white px-5 cursor-pointer py-2 rounded font-semibold"
        >
          Alle akzeptieren
        </button>

        <button
          onClick={handleSavePreferences}
          className="bg-gray-200 px-5 py-2 cursor-pointer rounded font-semibold"
        >
          Auswahl speichern
        </button>

        <button
          onClick={handleDecline}
          className="text-gray-600 px-5 py-2 cursor-pointer rounded font-semibold"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
