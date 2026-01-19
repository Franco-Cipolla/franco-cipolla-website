export const loadGA = (measurementId) => {
  if (!measurementId) return;

  // Wenn schon geladen -> nicht nochmal
  if (window.gaLoaded) return;
  window.gaLoaded = true;

  // GA deaktivieren, bis Consent gegeben wurde
  window[`ga-disable-${measurementId}`] = true;

  // gtag.js Script laden
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // gtag initialisieren
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true });
};
