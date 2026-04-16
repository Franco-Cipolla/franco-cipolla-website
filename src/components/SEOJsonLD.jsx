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
      "name": "Franco Cipolla Webdesign",
      "url": "https://www.franco-cipolla.de"
    },
    "sameAs": [
      "https://www.instagram.com/francocipolla.de/",
      "https://www.linkedin.com/in/franco-cipolla-00217a37a/",
      "https://www.facebook.com/people/Franco-Cipolla/61585491870754/#"
    ]
  };

  const offerCatalog = {
    "@type": "OfferCatalog",
    "name": "Leistungen & Angebote",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Lokale-Anfragen-System™",
        "description": "Conversion-optimierte Website, die gezielt Anfragen generiert.",
        "url": "https://www.franco-cipolla.de",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Kostenlose Website-Analyse",
        "description": "Unverbindliche Analyse deiner Website mit konkreten Optimierungspotenzialen.",
        "url": "https://www.franco-cipolla.de/website-analyse",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-03-26T00:00"
      }
    ]
  };

  let pageSchema = {};

  switch (page) {
    case "home":
      pageSchema = {
        "@type": "WebPage",
        "name": "Websites, die Kunden bringen – Franco Cipolla",
        "url": "https://www.franco-cipolla.de",
        "description":
          "Individuelle Websites für Selbstständige & Unternehmen, die darauf ausgerichtet sind messbar Kundenanfragen zu bringen.",
        "mainEntity": {
          "@type": "Service",
          "name": "Lokale-Anfragen-System™",
          "serviceType":
            "Webdesign & Conversion-Optimierung für lokale Unternehmen",
          "description":
            "Websites, die Besucher gezielt zur Anfrage führen, mit klarer Struktur, Nutzerführung und messbarem System.",
          "areaServed": [
            "Ennepetal",
            "Hagen",
            "Wuppertal",
            "Schwelm",
            "Gevelsberg",
            "Sprockhövel",
            "Breckerfeld",
            "Remscheid",
            "Hattingen",
            "Wetter",
            "Herdecke"
          ],
          "hasOfferCatalog": offerCatalog
        },
        "potentialAction": {
          "@type": "ReserveAction",
"target": "https://www.franco-cipolla.de/website-analyse"
        }
      };
      break;

    case "hagen":
      pageSchema = {
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Franco Cipolla Webdesign",
            "image": "https://franco-cipolla.de/Franco2.jpeg",
            "url": "https://www.franco-cipolla.de",
            "telephone": "+49-17675398004",
            "sameAs": basePerson.sameAs
          },
          {
            "@type": "WebPage",
            "name":
              "Websites, die Kunden bringen für Hagen – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/hagen",
            "description":
              "Websites für Unternehmen in Hagen, die darauf ausgelegt sind planbar Kundenanfragen generieren.",
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System™",
              "serviceType":
                "Webdesign & Conversion-Optimierung für lokale Unternehmen",
              "description":
                "Websites für Unternehmen in Hagen, die Besucher gezielt zur Anfrage führen.",
              "areaServed": {
                "@type": "City",
                "name": "Hagen"
              },
              "hasOfferCatalog": offerCatalog
            }
          }
        ]
      };
      break;

    case "wuppertal":
      pageSchema = {
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Franco Cipolla Webdesign",
            "image": "https://franco-cipolla.de/Franco2.jpeg",
            "url": "https://www.franco-cipolla.de",
            "telephone": "+49-17675398004",
            "sameAs": basePerson.sameAs
          },
          {
            "@type": "WebPage",
            "name":
              "Websites, die Kunden bringen für Wuppertal – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/wuppertal",
            "description":
              "Websites für Unternehmen in Wuppertal, die Besucher gezielt zu Kundenanfragen führen.",
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System™",
              "serviceType":
                "Webdesign & Conversion-Optimierung für lokale Unternehmen",
              "description":
                "Websites für Unternehmen in Wuppertal, die Besucher gezielt zur Anfrage führen.",
              "areaServed": {
                "@type": "City",
                "name": "Wuppertal"
              },
              "hasOfferCatalog": offerCatalog
            }
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
