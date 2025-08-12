import { NAVIGATION_ITEMS } from "@/lib/constants";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = window.location.origin;
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const urls: SitemapUrl[] = [
    // Homepage
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    // About pages
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about/robert-yorke`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/about/management`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/about/facility`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/about/news`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    },
    // Products and Services
    {
      loc: `${baseUrl}/products`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    // Projects
    {
      loc: `${baseUrl}/projects`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    // Quality
    {
      loc: `${baseUrl}/quality`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    // Contact
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    }
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

// Function to download sitemap (for development/testing)
export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Function to generate sitemap and save to public folder (would need server-side implementation)
export const generateSitemapFile = () => {
  const sitemap = generateSitemap();
  console.log('Generated sitemap.xml content:');
  console.log(sitemap);
  return sitemap;
};
