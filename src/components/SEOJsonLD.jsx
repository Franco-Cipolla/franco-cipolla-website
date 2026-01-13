import React from "react";
import { Helmet } from "react-helmet-async";

const SEOJsonLD = ({ page }) => {
  // Basis-Daten
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Franco Cipolla",
    "url": "https://www.franco-cipolla.de",
    "image": "https://franco-cipolla.de/Franco2.jpeg",
    "jobTitle": "Webdesigner",
    "worksFor": {
      "@type": "Organization",
      "name": "Franco Cipolla",
      "url": "https://www.franco-cipolla.de"
    },
    "sameAs": [
      "https://www.instagram.com/francocipolla.de/",
      "https://www.linkedin.com/in/franco-cipolla-00217a37a/",
      "https://www.facebook.com/people/Franco-Cipolla/61585491870754/#"

    ]
  };

  // Seitenspezifische Schema-Erweiterungen
  let pageSchema = {};
  switch(page) {
    case "home":
      pageSchema = {
        "@type": "WebPage",
        "name": "Websites, die Kunden bringen – Franco Cipolla",
        "url": "https://www.franco-cipolla.de",
        "description": "Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren.",
        "mainEntity": [
          {
            "@type": "Service",
            "name": "Lokale Anfragen System™",
            "description": "Websites für lokale Unternehmen in Ennepetal & Umgebung, die planbar neue Kunden bringen."
          }
        ]
      };
      break;

    case "about":
      pageSchema = {
        "@type": "AboutPage",
        "name": "Über mich – Franco Cipolla",
        "url": "https://www.franco-cipolla.de/about",
        "description": "Webdesigner aus Ennepetal, der Websites baut, die nicht nur modern aussehen, sondern auch Kunden bringen."
      };
      break;

    case "erstgespraech":
      pageSchema = {
        "@type": "ContactPage",
        "name": "Kostenlose Website-Analyse – Erstgespräch",
        "url": "https://www.franco-cipolla.de/erstgespraech",
        "description": "Buche dein unverbindliches Erstgespräch für deine Website-Analyse, und erfahre wie du mehr Anfragen bekommen kannst. Maximal 2 Projekte pro Monat.",
        "potentialAction": {
          "@type": "ReserveAction",
          "target": "https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach",
          "name": "Jetzt Erstgespräch buchen"
        }
      };
      break;

    default:
      pageSchema = {};
  }

  const jsonLD = {
    ...baseData,
    ...pageSchema
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLD)}
      </script>
    </Helmet>
  );
};

export default SEOJsonLD;
