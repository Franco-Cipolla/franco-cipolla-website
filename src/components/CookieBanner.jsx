import React, { useState, useEffect, useRef } from 'react';
import { gsap } from './gsapSetup';

const COOKIE_NAME = 'cookieConsent';

const CookieBanner = ({ forceShow = false, onClose, onConsentChange }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const bannerRef = useRef(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_NAME);
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      setShowBanner(false);
      onConsentChange && onConsentChange(parsed);
    } else if (!forceShow) {
      setShowBanner(true);
    }
  }, [forceShow]);

  useEffect(() => {
    if ((showBanner || forceShow) && bannerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          bannerRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
      }, bannerRef);
      return () => ctx.revert();
    }
  }, [showBanner, forceShow]);

  const saveConsent = (newConsent) => {
    localStorage.setItem(COOKIE_NAME, JSON.stringify(newConsent));
    setConsent(newConsent);
    onConsentChange && onConsentChange(newConsent);
  };

  const handleAcceptAll = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true };
    saveConsent(newConsent);
    setShowBanner(false);
    onClose && onClose();
  };

  const handleSavePreferences = () => {
    const newConsent = { ...consent, necessary: true };
    saveConsent(newConsent);
    setShowBanner(false);
    onClose && onClose();
  };

  const handleDecline = () => {
    const newConsent = { necessary: true, analytics: false, marketing: false };
    saveConsent(newConsent);
    setShowBanner(false);
    onClose && onClose();
  };

  const handleToggle = (key) => {
    if (key === 'necessary') return;
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!(showBanner || forceShow)) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 max-w-[950px] bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-black z-[9999] flex flex-col md:flex-row md:items-center md:justify-between"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
    >
      <div className="mb-4 md:mb-0 md:max-w-[60%] text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold mb-2 text-black">Wir verwenden Cookies</p>
        <p>
          Diese Website verwendet Cookies, um deine Nutzererfahrung zu verbessern und bestimmte Funktionen zu ermöglichen. Du kannst auswählen, welche Cookies du erlaubst. Details findest du in unserer{' '}
          <a
            href="/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#003566] hover:text-[#001D3D] transition-colors duration-200"
          >
            Datenschutzerklärung
          </a>.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
        <div className="flex flex-col space-y-2 md:mr-6 min-w-[220px]">
          <label className="flex items-center cursor-not-allowed select-none text-gray-500" title="Diese Cookies sind notwendig und können nicht deaktiviert werden">
            <input type="checkbox" checked disabled className="mr-2" />
            Notwendige Cookies
          </label>

          <label className="flex items-center cursor-pointer text-gray-800 hover:text-[#003566] transition-colors duration-200">
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={() => handleToggle('analytics')}
              className="mr-2 accent-[#003566]"
              aria-checked={consent.analytics}
              aria-label="Analyse-Cookies (Google Analytics)"
            />
            Analyse-Cookies (Google Analytics)
          </label>

          <label className="flex items-center cursor-pointer text-gray-800 hover:text-[#003566] transition-colors duration-200">
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={() => handleToggle('marketing')}
              className="mr-2 accent-[#003566]"
              aria-checked={consent.marketing}
              aria-label="Marketing-Cookies (optional)"
            />
            Marketing-Cookies (optional)
          </label>
          <small className="text-gray-500 mt-1 max-w-xs">
            Marketing-Cookies ermöglichen personalisierte Werbung und werden nur mit deiner Zustimmung aktiviert.
          </small>
        </div>

        <div className="flex flex-wrap gap-3 flex-col md:justify-end md:min-w-[180px]">
          <button onClick={handleAcceptAll} className="bg-[#003566] hover:bg-[#001D3D] text-white px-5 py-2  transform hover:-translate-y-1 cursor-pointer rounded font-semibold transition">
            Alle akzeptieren
          </button>
          <button onClick={handleSavePreferences} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2  transform hover:-translate-y-1 cursor-pointer rounded font-semibold transition">
            Auswahl speichern
          </button>
          <button onClick={handleDecline} className="text-gray-600 hover:text-gray-900 px-5 py-2 transform hover:-translate-y-1 cursor-pointer rounded font-semibold transition">
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
