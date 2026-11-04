import { services } from './services';

export const mainNav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan', children: services.map((s) => ({ label: s.name, href: `/layanan/${s.slug}` })) },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Blog', href: '/blog' },
];

export const footerGroups = [
  {
    title: 'Navigasi',
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'Tentang Kami', href: '/tentang-kami' },
      { label: 'Layanan', href: '/layanan' },
      { label: 'Portofolio', href: '/portofolio' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { title: 'Layanan', links: services.map((s) => ({ label: s.name, href: `/layanan/${s.slug}` })) },
  { title: 'Bantuan', links: [{ label: 'FAQ', href: '/faq' }, { label: 'Area Layanan', href: '/area-layanan' }, { label: 'Kontak', href: '/kontak' }, { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' }] },
];
