/* global URL */
import { Helmet } from 'react-helmet-async';
import { site } from '@/constants/site';

const defaultKeywords = 'Karam Manovikas Sansthan, special school Alwar, special education Rajasthan, NGO Alwar, RCI courses, teacher training, vocational training, therapy for children with special needs';

export default function SEO({ title, description, path = '/', image = '/og-image.jpg', keywords = defaultKeywords, noIndex = false }) {
  const pageTitle = title ? `${title} | ${site.name}` : site.name;
  const canonical = new URL(path, site.url).toString();
  const imageUrl = new URL(image, site.url).toString();
  const breadcrumbItems = path === '/' ? [] : path.split('/').filter(Boolean).map((segment, index, parts) => ({
    '@type': 'ListItem',
    position: index + 2,
    name: segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
    item: new URL(`/${parts.slice(0, index + 1).join('/')}`, site.url).toString(),
  }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: site.url, inLanguage: site.language },
      {
        '@type': ['Organization', 'EducationalOrganization', 'School', 'NGO', 'LocalBusiness'],
        '@id': `${site.url}/#organization`, name: site.name, url: site.url,
        logo: new URL('/images/kmvs-logo.png', site.url).toString(), image: imageUrl,
        description, foundingDate: site.established, telephone: site.phone, email: site.email,
        address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.addressLocality, addressRegion: site.addressRegion, postalCode: site.postalCode, addressCountry: site.addressCountry },
      },
      ...(breadcrumbItems.length ? [{ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, ...breadcrumbItems] }] : []),
    ],
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={site.name} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="language" content={site.language} />
      <meta name="theme-color" content="#2563EB" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

