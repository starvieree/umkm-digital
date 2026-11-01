import { site } from '../data/site';
import { absUrl } from './seo';

// Area served covering East Java regencies and cities
export const eastJavaAreas = [
  'Surabaya', 'Sidoarjo', 'Gresik', 'Malang', 'Kota Batu', 'Pasuruan',
  'Mojokerto', 'Madiun', 'Kediri', 'Blitar', 'Tulungagung', 'Ngawi',
  'Magetan', 'Ponorogo', 'Pacitan', 'Nganjuk', 'Jombang', 'Lamongan',
  'Tuban', 'Bojonegoro', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep',
  'Jember', 'Lumajang', 'Probolinggo', 'Situbondo', 'Bondowoso', 'Banyuwangi',
  'Trenggalek'
].map((city) => ({
  '@type': 'City',
  name: city,
  containedInPlace: {
    '@type': 'AdministrativeArea',
    name: 'Jawa Timur',
    addressCountry: 'ID'
  }
}));

// Base Organization Schema
export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: {
    '@type': 'ImageObject',
    url: absUrl('/favicon.svg'),
    caption: `${site.name} Logo`
  },
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country
  },
  sameAs: site.social.map((s) => s.href),
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Jawa Timur',
    addressCountry: 'ID'
  },
  knowsAbout: [
    'Pemasaran Digital UMKM',
    'Produksi Video Pendek Vertikal TikTok dan Reels',
    'Jasa SEO dan Penulisan Artikel Bisnis',
    'Hosting dan Optimasi Kecepatan Website',
    'Iklan Digital Meta Ads dan TikTok Ads',
    'Pembuatan Website Bisnis dan Toko Online'
  ]
});

// Full Local Business / Professional Service Schema (Crucial for Local GEO & AEO)
export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#localbusiness`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  image: absUrl('/og/default.webp'),
  telephone: site.phone,
  email: site.email,
  priceRange: site.priceRange,
  currenciesAccepted: site.currenciesAccepted,
  paymentAccepted: site.paymentAccepted,
  openingHours: site.openingHours,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude
  },
  areaServed: eastJavaAreas,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Pemasaran Digital UMKM',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Video Pendek TikTok & Reels' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa SEO & Penulisan Artikel' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hosting & Optimasi Website' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pengelolaan Media Sosial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Iklan Digital Meta & TikTok Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Pembuatan Website Profil & Katalog' } }
    ]
  }
});

// WebSite Schema with SearchAction
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: 'id-ID',
  publisher: {
    '@id': `${site.url}/#organization`
  }
});

// Breadcrumbs Schema
export const breadcrumbSchema = (items: { label: string; href?: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.label,
    ...(it.href ? { item: absUrl(it.href) } : {})
  }))
});

// FAQ Page Schema (Core for AEO - Answer Engine Optimization)
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a
    }
  }))
});

// Individual Service Schema
export const serviceSchema = (s: {
  name: string;
  headline?: string;
  short: string;
  slug: string;
  priceFactors?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absUrl(`/layanan/${s.slug}/#service`),
  name: s.name,
  headline: s.headline,
  description: s.short,
  url: absUrl(`/layanan/${s.slug}/`),
  provider: {
    '@id': `${site.url}/#localbusiness`
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Jawa Timur',
    addressCountry: 'ID'
  },
  serviceType: s.name,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'IDR',
    description: 'Biaya disesuaikan dengan volume dan ruang lingkup pekerjaan yang disepakati di awal.'
  }
});

// Blog / Article Schema (Core for Google & AI Content Engines)
export const articleSchema = (a: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': absUrl(`${a.path}#article`),
  headline: a.title,
  description: a.description,
  url: absUrl(a.path),
  inLanguage: 'id-ID',
  datePublished: a.pubDate.toISOString(),
  dateModified: (a.updatedDate || a.pubDate).toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absUrl(a.path)
  },
  image: a.image ? absUrl(a.image) : absUrl('/og/default.webp'),
  author: {
    '@type': 'Person',
    name: a.author || 'Ainur Reza',
    jobTitle: 'Lead Digital Marketing Consultant',
    worksFor: {
      '@id': `${site.url}/#organization`
    }
  },
  publisher: {
    '@id': `${site.url}/#organization`
  },
  // Speakable schema allows voice assistants and AI engines to identify direct summary answers
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-main-title', '.lead', '.article-summary-card']
  }
});

// Portfolio / Case Study Schema
export const portfolioSchema = (p: {
  title: string;
  description: string;
  path: string;
  category: string;
  pubDate?: Date;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  '@id': absUrl(`${p.path}#casestudy`),
  headline: p.title,
  description: p.description,
  url: absUrl(p.path),
  inLanguage: 'id-ID',
  dateCreated: (p.pubDate ? p.pubDate.toISOString() : new Date().toISOString()),
  genre: p.category,
  creator: {
    '@id': `${site.url}/#organization`
  },
  image: p.image ? absUrl(p.image) : absUrl('/og/default.webp')
});

// Person Schema for consultants
export const personSchema = (person: {
  name: string;
  role: string;
  bio: string;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  description: person.bio,
  image: absUrl(person.image),
  worksFor: {
    '@id': `${site.url}/#organization`
  }
});
