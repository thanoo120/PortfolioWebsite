import Head from 'next/head';
import { siteConfig, generateMetaTags, structuredData, defaultOpenGraph } from '../utils/seo';

const SEOHead = ({ page, title, description, image, url, structuredJSON }) => {
  const pageMeta = generateMetaTags(page);
  const finalTitle = title || pageMeta.title;
  const finalDescription = description || pageMeta.description;
  const finalUrl = url || `${siteConfig.url}${pageMeta.path}`;
  const finalImage = image || `${siteConfig.url}/og-image.jpg`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content="Full-Stack Developer, Spring Boot, React, Java, Backend, Frontend" />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="en" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={defaultOpenGraph.type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={defaultOpenGraph.locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content="@thanoogithan" />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data (JSON-LD) */}
      {structuredJSON && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredJSON) }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
