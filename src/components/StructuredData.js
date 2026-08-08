import { useEffect } from "react";
import profile from "../config/profile.json";

// Injects schema.org Person structured data (https://schema.org/Person) so
// search engines can build rich results (e.g. a knowledge-panel-style card)
// for name searches. This is runtime-injected from profile.json rather than
// baked into public/index.html's %REACT_APP_...% substitution, because it's
// only consumed by crawlers that execute JS (Google) - unlike og:title/
// og:description, which use build-time substitution because social-preview
// bots (Twitter, LinkedIn, Slack) fetch the raw HTML and never run JS.
function StructuredData() {
  useEffect(() => {
    const { identity, contact, socials } = profile;
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: identity.name,
      jobTitle: identity.tagline,
      email: `mailto:${contact.email}`,
      sameAs: Object.values(socials)
        .map((s) => s.url)
        .filter(Boolean),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return null;
}

export default StructuredData;
