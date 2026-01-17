import React from "react";
import { Helmet } from "react-helmet-async";

const SEOJsonLD = ({ page }) => {
  const basePerson = {
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

  let pageSchema = {};

  switch (page) {
    case "home":
      pageSchema = {
        "@type": "WebPage",
        "name": "Websites, die Kunden bringen – Franco Cipolla",
        "url": "https://www.franco-cipolla.de",
        "description": "Individuelle Websites für Selbstständige & Unternehmen, die darauf ausgerichtet sind planbar Kundenanfragen generieren.",
        "mainEntity": [
          {
            "@type": "Service",
            "name": "Lokale Anfragen System™",
            "description": "Websites für lokale Unternehmen in Ennepetal & Umgebung, die darauf ausgelegt sind planbar neue Kunden zu bringen."
          }
        ]
      };
      break;

    case "about":
      pageSchema = {
        "@type": "AboutPage",
        "name": "Über mich – Franco Cipolla",
        "url": "https://www.franco-cipolla.de/about",
        "description": "Webdesigner aus Ennepetal, der Websites baut, die nicht nur modern aussehen, sondern darauf ausgerichtet sind Kunden zu bringen."
      };
      break;

    case "erstgespraech":
      pageSchema = {
        "@type": "ContactPage",
        "name": "Kostenlose Website-Analyse – Erstgespräch",
        "url": "https://www.franco-cipolla.de/erstgespraech",
        "description": "Buche deine unverbindliche Website-Analyse/Erstgespräch, und erfahre wie du mehr Anfragen bekommen kannst. Maximal 2 Projekte pro Monat.",
        "potentialAction": {
          "@type": "ReserveAction",
          "target": "https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach",
          "name": "Jetzt Erstgespräch buchen"
        }
      };
      break;

    case "hagen":
      pageSchema = {
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Franco Cipolla",
            "image": "https://franco-cipolla.de/Franco2.jpeg",
            "url": "https://www.franco-cipolla.de",
            "telephone": "+49-17675398004",
            "sameAs": [
              "https://www.instagram.com/francocipolla.de/",
              "https://www.linkedin.com/in/franco-cipolla-00217a37a/",
              "https://www.facebook.com/people/Franco-Cipolla/61585491870754/#"
            ]
          },
          {
            "@type": "WebPage",
            "name": "Websites, die Kunden bringen für Hagen – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/websites-hagen",
            "description": "Websites für Unternehmen in Hagen, die darauf ausgelegt sind planbar Kundenanfragen generieren. Modernes Design, klare Struktur & lokale SEO.",
            "mainEntity": [
              {
                "@type": "Service",
                "name": "Lokale-Anfragen-System™",
                "description": "Websites für Unternehmen in Hagen, die Besucher gezielt zur Anfrage führen."
              }
            ]

          }
        ]
      };
      break;
      case "wuppertal":
      pageSchema = {
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Franco Cipolla",
            "image": "https://franco-cipolla.de/Franco2.jpeg",
            "url": "https://www.franco-cipolla.de",
            "telephone": "+49-17675398004",
            "sameAs": [
              "https://www.instagram.com/francocipolla.de/",
              "https://www.linkedin.com/in/franco-cipolla-00217a37a/",
              "https://www.facebook.com/people/Franco-Cipolla/61585491870754/#"
            ]
          },
          {
            "@type": "WebPage",
            "name": "Websites, die Kunden bringen für Wuppertal – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/websites-wuppertal",
            "description": "Websites für Unternehmen in Wuppertal, die darauf ausgelegt sind planbar Kundenanfragen generieren. Modernes Design, klare Struktur & lokale SEO.",
            "mainEntity": [
              {
                "@type": "Service",
                "name": "Lokale-Anfragen-System™",
                "description": "Websites für Unternehmen in Wuppertal, die Besucher gezielt zur Anfrage führen."
              }
            ]
          }
        ]
      };
      break;

    default:
      pageSchema = {};
  }

  const jsonLD = {
    "@context": "https://schema.org",
    ...basePerson,
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
