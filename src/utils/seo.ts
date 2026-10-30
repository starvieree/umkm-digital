import { site } from '../data/site';

export const absUrl = (path: string) => new URL(path, site.url).href;
export const pageTitle = (t?: string) => (!t || t === site.name ? `${site.name} — ${site.tagline}` : `${t} | ${site.name}`);
export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
