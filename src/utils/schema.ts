import { site } from '../data/site';
import { absUrl } from './seo';

export const organizationSchema = () => ({
  '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, description: site.description,
  ...(site.email ? { email: site.email } : {}),
  areaServed: { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
});
export const websiteSchema = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url, inLanguage: 'id-ID' });
export const breadcrumbSchema = (items: { label: string; href?: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.label, ...(it.href ? { item: absUrl(it.href) } : {}) })),
});
export const serviceSchema = (s: { name: string; short: string; slug: string }) => ({
  '@context': 'https://schema.org', '@type': 'Service', name: s.name, description: s.short, url: absUrl(`/layanan/${s.slug}/`),
  provider: { '@type': 'Organization', name: site.name, url: site.url },
  areaServed: { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
});
export const articleSchema = (a: { title: string; description: string; path: string; pubDate: Date; updatedDate?: Date; author?: string }) => ({
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.description, url: absUrl(a.path),
  datePublished: a.pubDate.toISOString(),
  ...(a.updatedDate ? { dateModified: a.updatedDate.toISOString() } : {}),
  ...(a.author ? { author: { '@type': 'Person', name: a.author } } : {}),
  publisher: { '@type': 'Organization', name: site.name },
});
