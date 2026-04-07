import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = 'https://statelife.com.pk/og-image.jpg',
  ogType = 'website',
  article 
}: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://statelife.com.pk';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Set document title
    document.title = `${title} | State Life Insurance`;

    // Helper to set/update meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('author', 'State Life Insurance Corporation');
    
    // OpenGraph tags
    setMeta('og:title', `${title} | State Life Insurance`, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', currentUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'State Life Insurance Corporation', true);
    
    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | State Life Insurance`);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    
    // Article specific tags
    if (article) {
      if (article.publishedTime) setMeta('article:published_time', article.publishedTime, true);
      if (article.author) setMeta('article:author', article.author, true);
      if (article.section) setMeta('article:section', article.section, true);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Cleanup on unmount (optional - keeps meta tags for SPA navigation)
    return () => {
      // Keep meta tags for SPA, they'll be updated on next route
    };
  }, [title, description, canonicalUrl, currentUrl, ogImage, ogType, article]);

  return null; // This component only manages side effects
}
