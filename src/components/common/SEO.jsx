import { Helmet } from 'react-helmet-async';
import { site } from '@/constants/site';

export default function SEO({ title, description, path = '/', image = '/images/campus-building.jpeg' }) {
  const pageTitle = title ? `${title} | ${site.name}` : site.name;
  const canonical = `https://kmvsansthan.org${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    description,
    url: 'https://kmvsansthan.org',
    foundingDate: site.established,
    address: site.address,
    telephone: site.phone,
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
