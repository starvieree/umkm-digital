import { site } from '../data/site';

export const ctaLabel = site.freeConsultation ? 'Konsultasi Gratis' : 'Konsultasi via WhatsApp';

export function waLink(message = 'Halo, saya ingin konsultasi tentang layanan digital untuk UMKM.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
