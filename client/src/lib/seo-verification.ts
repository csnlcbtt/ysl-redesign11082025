import { generateSitemap } from './sitemap';

// SEO Verification and Testing Functions
export const seoVerification = {
  
  // Check meta tags
  checkMetaTags: () => {
    const checks = {
      title: !!document.title,
      description: !!document.querySelector('meta[name="description"]'),
      keywords: !!document.querySelector('meta[name="keywords"]'),
      canonical: !!document.querySelector('link[rel="canonical"]'),
      viewport: !!document.querySelector('meta[name="viewport"]'),
      robots: !!document.querySelector('meta[name="robots"]'),
      ogTitle: !!document.querySelector('meta[property="og:title"]'),
      ogDescription: !!document.querySelector('meta[property="og:description"]'),
      ogImage: !!document.querySelector('meta[property="og:image"]'),
      ogUrl: !!document.querySelector('meta[property="og:url"]'),
      twitterCard: !!document.querySelector('meta[name="twitter:card"]'),
      themeColor: !!document.querySelector('meta[name="theme-color"]'),
      structuredData: !!document.querySelector('script[type="application/ld+json"]')
    };
    
    console.log('SEO Meta Tags Check:', checks);
    return checks;
  },

  // Check favicon files
  checkFavicons: () => {
    const faviconChecks = {
      favicon: !!document.querySelector('link[rel="icon"]'),
      appleTouchIcon: !!document.querySelector('link[rel="apple-touch-icon"]'),
      manifest: !!document.querySelector('link[rel="manifest"]')
    };
    
    console.log('Favicon Check:', faviconChecks);
    return faviconChecks;
  },

  // Generate SEO report
  generateSEOReport: () => {
    const report = {
      url: window.location.href,
      title: document.title,
      titleLength: document.title.length,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      descriptionLength: (document.querySelector('meta[name="description"]')?.getAttribute('content') || '').length,
      headings: {
        h1: document.querySelectorAll('h1').length,
        h2: document.querySelectorAll('h2').length,
        h3: document.querySelectorAll('h3').length
      },
      images: document.querySelectorAll('img').length,
      imagesWithAlt: document.querySelectorAll('img[alt]').length,
      links: document.querySelectorAll('a').length,
      internalLinks: Array.from(document.querySelectorAll('a')).filter(a => {
        const href = a.getAttribute('href');
        return href && (href.startsWith('/') || href.includes(window.location.hostname));
      }).length
    };

    console.log('SEO Report:', report);
    return report;
  },

  // Check accessibility basics
  checkAccessibility: () => {
    const accessibilityChecks = {
      altTexts: document.querySelectorAll('img').length === document.querySelectorAll('img[alt]').length,
      headingStructure: document.querySelectorAll('h1').length === 1,
      skipLinks: !!document.querySelector('a[href="#main"], a[href="#content"]'),
      ariaLabels: document.querySelectorAll('[aria-label]').length > 0,
      focusableElements: document.querySelectorAll('button, a, input, select, textarea, [tabindex]').length
    };

    console.log('Accessibility Check:', accessibilityChecks);
    return accessibilityChecks;
  },

  // Run all checks
  runFullAudit: () => {
    console.log('=== FULL SEO AUDIT ===');
    const results = {
      metaTags: seoVerification.checkMetaTags(),
      favicons: seoVerification.checkFavicons(),
      seoReport: seoVerification.generateSEOReport(),
      accessibility: seoVerification.checkAccessibility()
    };
    
    console.log('Full Audit Results:', results);
    return results;
  }
};

// Make available globally for console testing
(window as any).seoVerification = seoVerification;

// Auto-run basic checks in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    console.log('🔍 Running SEO verification...');
    seoVerification.runFullAudit();
  }, 2000);
}
