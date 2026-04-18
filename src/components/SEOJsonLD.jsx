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
        "priceCurrency": "EUR"
      }
    ]
  };

  const review = {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Google Nutzer"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "reviewBody":
      "Franco hat meine Website analysiert und mir gezeigt, dass meine Website an verschiedenen Stellen Anfragen verliert. Teilweise gab es Stellen die sogar mein alter Webdesigner nicht gesehen hat. Franco’s Expertise ist wirklich auf einem ganz anderen Level. Ich bereue es zu keiner Sekunde mich auf ihn eingelassen zu haben. Er kann locker mit Dienstleistern mithalten die weitaus mehr Erfahrung haben. Durch Franco habe ich nun spürbar mehr Anfragen. Meiner Meinung nach einer der besten Webdesigner in ganz Ennepetal und Umgebung. Klare Empfehlung!"
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
          "description": "Websites, die Besucher gezielt zur Anfrage führen.",
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
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.franco-cipolla.de"
        },
        "potentialAction": {
          "@type": "Action",
          "target": "https://www.franco-cipolla.de/website-analyse"
        }
      };
      break;

    case "analyse":
      pageSchema = {
        "@type": "WebPage",
        "name": "Kostenlose Website Analyse – Franco Cipolla",
        "url": "https://www.franco-cipolla.de/website-analyse",
        "description":
          "Kostenlose Analyse deiner Website mit konkreten Optimierungspotenzialen für mehr Anfragen.",
        "mainEntity": {
          "@type": "Service",
          "name": "Kostenlose Website Analyse",
          "serviceType": "Website Analyse & Conversion-Optimierung",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
          }
        }
      };
      break;

    case "about":
      pageSchema = {
        "@type": "AboutPage",
        "name": "Über mich – Franco Cipolla",
        "url": "https://www.franco-cipolla.de/ueber-mich",
        "description":
          "Webdesigner für conversion-optimierte Websites für lokale Unternehmen.",
        "mainEntity": basePerson
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
            "sameAs": basePerson.sameAs,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1"
            },
            "review": [review]
          },
          {
            "@type": "WebPage",
            "name": "Websites für Hagen – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/hagen",
            "description":
              "Websites für Unternehmen in Hagen, die messbar Anfragen generieren.",
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System™",
              "areaServed": { "@type": "City", "name": "Hagen" },
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
            "sameAs": basePerson.sameAs,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1"
            },
            "review": [review]
          },
          {
            "@type": "WebPage",
            "name": "Websites für Wuppertal – Franco Cipolla",
            "url": "https://www.franco-cipolla.de/wuppertal",
            "description":
              "Websites für Unternehmen in Wuppertal, die Kundenanfragen generieren.",
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System™",
              "areaServed": { "@type": "City", "name": "Wuppertal" },
              "hasOfferCatalog": offerCatalog
            }
          }
        ]
      };
      break;
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
