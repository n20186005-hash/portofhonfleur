import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://www.portofhonfleur.com";
const LANGUAGES = ["en", "fr", "es", "de", "ja", "ko", "zh-cn", "zh-tw"];

const PATHS = [
  { path: "", languages: LANGUAGES, includeDefault: true },
  { path: "/map", languages: LANGUAGES, includeDefault: true },
  { path: "/photos", languages: LANGUAGES, includeDefault: true },
  { path: "/blog", languages: LANGUAGES, includeDefault: true },
  { path: "/blog/post1", languages: LANGUAGES, includeDefault: true },
  { path: "/blog/post2", languages: LANGUAGES, includeDefault: true },
  { path: "/blog/post3", languages: LANGUAGES, includeDefault: true },
  { path: "/privacy", languages: LANGUAGES, includeDefault: true },
  { path: "/terms", languages: LANGUAGES, includeDefault: true },
  { path: "/cookies", languages: LANGUAGES, includeDefault: true },
  { path: "/que-faire-honfleur", languages: ["fr"], includeDefault: false }
];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  const today = new Date().toISOString().split('T')[0];

  // For each language and path combination
  for (const entry of PATHS) {
    const xDefaultUrl = entry.includeDefault
      ? `${DOMAIN}${entry.path || "/"}`
      : `${DOMAIN}/${entry.languages[0]}${entry.path}`;

    for (const lang of entry.languages) {
      const url = `${DOMAIN}/${lang}${entry.path}`;
      
      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      
      // Add hreflang links for all other languages + x-default
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />\n`;
      for (const altLang of entry.languages) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${DOMAIN}/${altLang}${entry.path}" />\n`;
      }
      
      xml += `  </url>\n`;
    }
  }

  // Also add the x-default (root without lang) URLs
  for (const entry of PATHS.filter((item) => item.includeDefault)) {
    const url = `${DOMAIN}${entry.path || "/"}`;
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />\n`;
    for (const altLang of entry.languages) {
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${DOMAIN}/${altLang}${entry.path}" />\n`;
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
