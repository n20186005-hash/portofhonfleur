import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://www.portofhonfleur.com";
const LANGUAGES = ["en", "fr", "es", "de", "ja", "ko", "zh-cn", "zh-tw"];

const PATHS = [
  "",
  "/map",
  "/photos",
  "/blog",
  "/blog/post1",
  "/blog/post2",
  "/blog/post3",
  "/privacy",
  "/terms",
  "/cookies"
];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  const today = new Date().toISOString().split('T')[0];

  // For each language and path combination
  for (const lang of LANGUAGES) {
    for (const p of PATHS) {
      const url = `${DOMAIN}/${lang}${p}`;
      
      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      
      // Add hreflang links for all other languages + x-default
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${p}" />\n`;
      for (const altLang of LANGUAGES) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${DOMAIN}/${altLang}${p}" />\n`;
      }
      
      xml += `  </url>\n`;
    }
  }

  // Also add the x-default (root without lang) URLs
  for (const p of PATHS) {
    const url = `${DOMAIN}${p}`;
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${p}" />\n`;
    for (const altLang of LANGUAGES) {
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${DOMAIN}/${altLang}${p}" />\n`;
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();