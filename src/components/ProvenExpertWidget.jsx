import { useEffect } from "react";

export default function ProvenExpertWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.provenexpert.net/seals/proseal-v2.js";
    script.async = true;

    script.onload = () => {
      if (window.provenExpert) {
        window.provenExpert.proSeal({
          widgetId: "cd5dad9a-26e9-48a2-a2ac-25bc1e102927",
          language: "de-DE",
          usePageLanguage: false,
          bannerColor: "#003566",
          textColor: "#FFFFFF",
          showReviews: true,
          hideDate: true,
          hideName: false,
          hideOnMobile: false,
          bottom: "70px",
          stickyToSide: "right",
          googleStars: true,
          zIndex: "9999",
          displayReviewerLastName: false,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <a
        href="https://www.provenexpert.com/franco-cipolla-webdesign-digitale-kundengewinnung/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=cd5dad9a-26e9-48a2-a2ac-25bc1e102927"
        target="_blank"
        rel="noopener noreferrer"
      >
        More info
      </a>
    </noscript>
  );
}
