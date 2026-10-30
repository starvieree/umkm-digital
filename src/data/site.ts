// Data resmi bisnis. SEMUA nilai bertanda GANTI harus dikonfirmasi sebelum rilis.
export const site = {
  name: 'UMKM Digital', // GANTI: nama kerja, bukan brand final
  tagline: 'Solusi digital untuk UMKM Jawa Timur',
  description:
    'Layanan video pendek, live commerce, marketplace, media sosial, iklan digital, dan pembuatan website untuk UMKM di Jawa Timur.',
  url: 'https://example.com', // GANTI: domain produksi
  whatsapp: '628000000000', // GANTI: format internasional tanpa +, spasi, atau tanda baca
  freeConsultation: false, // ubah ke true HANYA jika konsultasi benar-benar gratis
  email: '', // isi hanya jika aktif
  address: '', // isi hanya jika ada kantor yang boleh dipublikasikan
  hours: '', // isi hanya jika benar
  social: [] as { label: string; href: string }[], // hanya akun resmi aktif
  locale: 'id_ID',
};
