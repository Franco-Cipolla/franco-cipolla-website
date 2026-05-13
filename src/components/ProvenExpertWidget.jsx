import { useEffect } from "react";

export default function ProvenExpertWidget() {
  useEffect(() => {
    // DO NOTHING - handled by CookieBanner
  }, []);

  return (
    <noscript>
      <a
        href="https://www.provenexpert.com/franco-cipolla-webdesign-digitale-kundengewinnung/"
        target="_blank"
        rel="noopener noreferrer"
      >
        More info
      </a>
    </noscript>
  );
}
