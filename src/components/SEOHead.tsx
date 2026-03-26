import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

const DOMAIN = "https://www.portofhonfleur.com";
const SUPPORTED_LANGUAGES = ["en", "fr", "es", "de", "ja", "ko", "zh-CN", "zh-TW"];
const DEFAULT_LANGUAGE = "en";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEOHead({ title, description, path }: SEOHeadProps) {
  const { i18n } = useTranslation();
  const [location] = useLocation();
  
  const currentPath = path || location;
  const currentLang = i18n.language || DEFAULT_LANGUAGE;
  
  // Format language for URL (e.g. 'zh-CN' -> 'zh-cn')
  const formatLangForUrl = (lang: string) => lang.toLowerCase();
  
  // Get clean path without language prefix (if any) and without trailing slash
  let cleanPath = currentPath;
  if (cleanPath.startsWith('/')) {
    const parts = cleanPath.split('/');
    if (SUPPORTED_LANGUAGES.map(formatLangForUrl).includes(parts[1])) {
      cleanPath = '/' + parts.slice(2).join('/');
    }
  }
  if (cleanPath === '/') cleanPath = '';
  
  const getUrlForLang = (lang: string) => {
    return `${DOMAIN}/${formatLangForUrl(lang)}${cleanPath}`;
  };

  const defaultUrl = `${DOMAIN}${cleanPath || '/'}`;
  const currentUrl = getUrlForLang(currentLang);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      
      {/* Self-referencing canonical */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate hreflang links */}
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang.toLowerCase()} 
          href={getUrlForLang(lang)} 
        />
      ))}
      
      {/* x-default fallback */}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
      
      {/* Open Graph metadata */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={currentUrl} />
    </Helmet>
  );
}
