import { useEffect } from "react";
import { COMPANY_INFO } from "@/lib/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'organization';
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData
}: SEOHeadProps) {
  const defaultTitle = `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;
  const defaultDescription = `${COMPANY_INFO.description}. Established ${COMPANY_INFO.established}. Located at ${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}, ${COMPANY_INFO.address.city}.`;
  const defaultImage = `${window.location.origin}/api/assets/New%20Assets/favicon/favicon-192x192.png`;
  const defaultUrl = window.location.href;

  const finalTitle = title ? `${title} - ${COMPANY_INFO.name}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic SEO meta tags
    updateMeta('description', finalDescription);
    updateMeta('keywords', keywords || 'steel fabrication, structural engineering, caribbean, trinidad, steel structures, industrial construction');
    updateMeta('author', COMPANY_INFO.name);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Canonical URL
    updateLink('canonical', finalUrl);

    // Open Graph tags
    updateMeta('og:title', finalTitle, true);
    updateMeta('og:description', finalDescription, true);
    updateMeta('og:image', finalImage, true);
    updateMeta('og:url', finalUrl, true);
    updateMeta('og:type', type, true);
    updateMeta('og:site_name', COMPANY_INFO.name, true);
    updateMeta('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDescription);
    updateMeta('twitter:image', finalImage);
    updateMeta('twitter:url', finalUrl);
    updateMeta('twitter:site', '@yorkestructures');

    // Additional meta tags
    updateMeta('theme-color', '#ea580c');
    updateMeta('msapplication-TileColor', '#ea580c');

    // Structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = 'page-structured-data';
      
      // Remove existing structured data if present
      const existing = document.getElementById('page-structured-data');
      if (existing) {
        document.head.removeChild(existing);
      }
      
      document.head.appendChild(script);
    }

  }, [finalTitle, finalDescription, finalImage, finalUrl, keywords, type, structuredData]);

  return null; // This component doesn't render anything
}

// Organization structured data for homepage
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_INFO.name,
  "description": COMPANY_INFO.description,
  "url": window.location.origin,
  "logo": `${window.location.origin}/api/assets/New%20Assets/favicon/favicon-192x192.png`,
  "image": `${window.location.origin}/api/assets/New%20Assets/favicon/favicon-192x192.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
    "addressLocality": COMPANY_INFO.address.city,
    "postalCode": COMPANY_INFO.address.postalCode,
    "addressCountry": "TT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": COMPANY_INFO.phone,
    "contactType": "customer service",
    "email": COMPANY_INFO.email
  },
  "foundingDate": COMPANY_INFO.established.toString(),
  "sameAs": [],
  "areaServed": {
    "@type": "Place",
    "name": "Caribbean"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Steel Fabrication and Structural Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Engineering",
          "description": "Comprehensive engineering design and analysis services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Steel Fabrication",
          "description": "State-of-the-art fabrication using modern equipment and techniques"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Supply & Erection",
          "description": "Complete supply chain and installation services"
        }
      }
    ]
  }
});

// Service page structured data
export const getServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": window.location.origin
  },
  "areaServed": {
    "@type": "Place",
    "name": "Caribbean"
  },
  "serviceType": "Steel Fabrication and Structural Engineering"
});

// Project structured data
export const getProjectSchema = (projectTitle: string, description: string, imageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": projectTitle,
  "description": description,
  "creator": {
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": window.location.origin
  },
  "image": imageUrl,
  "workExample": {
    "@type": "ConstructionProject",
    "name": projectTitle,
    "description": description
  }
});
