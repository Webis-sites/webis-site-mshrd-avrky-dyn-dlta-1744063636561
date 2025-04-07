import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'משרד עורכי דין דלתא - שירות משפטי מקצועי ואיכותי',
  description = 'משרד עורכי דין מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords = ['משרד עורכי דין', 'שירות', 'איכות', 'מקצועיות', 'ישראל', 'ייעוץ משפטי', 'עורך דין', 'דלתא'],
  ogImage = '/images/delta-law-office-og.jpg',
  ogUrl = 'https://delta-law.co.il',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@deltalaw',
  canonicalUrl,
}) => {
  // Prepare JSON-LD schema for law firm
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'משרד עורכי דין דלתא',
    description,
    url: ogUrl,
    logo: `${ogUrl}/images/logo.png`,
    image: ogImage.startsWith('http') ? ogImage : `${ogUrl}${ogImage}`,
    telephone: '+972-XX-XXXXXXX', // Replace with actual phone number
    email: 'info@delta-law.co.il', // Replace with actual email
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'רחוב הראשי 123', // Replace with actual address
      addressLocality: 'תל אביב', // Replace with actual city
      postalCode: '6100000', // Replace with actual postal code
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.0853', // Replace with actual coordinates
      longitude: '34.7818', // Replace with actual coordinates
    },
    openingHours: 'Mo-Th 09:00-18:00, Fr 09:00-14:00',
    priceRange: '₪₪₪',
    sameAs: [
      'https://www.facebook.com/deltalaw', // Replace with actual social links
      'https://www.linkedin.com/company/delta-law',
      'https://twitter.com/deltalaw',
    ],
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Hebrew" />
      <meta name="author" content="משרד עורכי דין דלתא" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${ogUrl}${ogImage}`} />
      <meta property="og:site_name" content="משרד עורכי דין דלתא" />
      <meta property="og:locale" content="he_IL" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${ogUrl}${ogImage}`} />

      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default MetaTags;