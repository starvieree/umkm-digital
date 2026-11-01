# 🚀 Buatin UMKM — Solusi Pemasaran Digital Praktis UMKM Jawa Timur

[![Astro](https://img.shields.io/badge/Astro-v4.16-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-grey.svg)]()
[![Performance](https://img.shields.io/badge/Lighthouse-100-success?logo=lighthouse)](https://buatinumkm.web.id)

Platform website resmi **Buatin UMKM** — layanan pendampingan dan solusi pemasaran digital terpadu untuk pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di wilayah Jawa Timur (Surabaya Raya, Malang Raya, Mataraman, Tapal Kuda, hingga Pantura & Madura).

Website ini dibangun menggunakan **[Astro](https://astro.build)** dengan pendekatan **Static Site Generation (SSG)** yang ultra-cepat, hemat sumber daya, mobile-first, dan dioptimasi secara mendalam untuk mesin pencari (**SEO**) serta AI search engines (**AEO**).

---

## 📌 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Layanan yang Ditawarkan](#-layanan-yang-ditawarkan)
- [Teknologi & Dependensi](#-teknologi--dependensi)
- [Struktur Proyek](#-struktur-proyek)
- [Panduan Memulai (Getting Started)](#-panduan-memulai-getting-started)
- [Skrip yang Tersedia](#-skrip-yang-tersedia)
- [Panduan Manajemen Konten](#-panduan-manajemen-konten)
  - [1. Menambahkan Artikel Blog](#1-menambahkan-artikel-blog)
  - [2. Menambahkan Studi Kasus Portofolio](#2-menambahkan-studi-kasus-portofolio)
  - [3. Mengubah Konfigurasi & Kontak Bisnis](#3-mengubah-konfigurasi--kontak-bisnis)
- [Optimasi SEO & AEO](#-optimasi-seo--aeo)
- [Kontak & Dukungan](#-kontak--dukungan)

---

## ✨ Fitur Utama

- ⚡ **Ultra Fast & Lightweight**: Dibangun dengan Astro SSG, menghasilkan output HTML statis murni tanpa overhead JavaScript yang tidak perlu.
- 📱 **Mobile-First & Responsive Design**: Tampilan dirancang proporsional di smartphone hingga layar desktop lebar dengan transisi yang halus.
- 🎨 **Sistem Desain Khusus**: Menggunakan Vanilla CSS modular dengan design tokens (`tokens.css`, `global.css`, `utilities.css`) serta tipografi modern dari **IBM Plex Sans** dan **IBM Plex Mono**.
- 🔍 **SEO & AEO Komprehensif**:
  - Structured data Schema.org JSON-LD lengkap (`Organization`, `LocalBusiness`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`).
  - Penargetan Geo-SEO mencakup kota & kabupaten se-Jawa Timur.
  - Tag Open Graph & Twitter Cards otomatis untuk kemudahan berbagi tautan di media sosial.
  - Integrasi Sitemap XML (`@astrojs/sitemap`) dan `robots.txt` yang mendukung crawler modern seperti Googlebot, PerplexityBot, GPTBot, dan ClaudeBot.
- 💬 **Konversi WhatsApp Terintegrasi**: Tombol CTA dan floating action button dengan pesan pre-filled yang langsung mengarahkan calon klien ke admin WhatsApp.
- 📚 **Astro Content Collections**: Pengelolaan draf, validasi skema tipe-aman (Type-safe) menggunakan **Zod** untuk blog edukasi dan studi kasus portofolio.

---

## 💼 Layanan yang Ditawarkan

| Layanan | Deskripsi Singkat | Slug URL |
| :--- | :--- | :--- |
| **Jasa Video Pendek** | Riset hook, pengambilan video, dan editing dinamis vertikal 9:16 untuk TikTok, Reels, dan Shorts. | `/layanan/jasa-video-pendek` |
| **Jasa SEO & Penulisan Artikel** | Riset kata kunci, optimasi SEO on-page, dan artikel blog bisnis mendalam untuk peringkat 1 Google. | `/layanan/jasa-seo-artikel` |
| **Hosting & Optimasi Website** | Migrasi server cepat, pemeliharaan keamanan berkala, dan optimasi Core Web Vitals Google 90+. | `/layanan/hosting-optimasi-website` |
| **Pengelolaan Media Sosial** | Kalender konten bulanan, desain visual feed, penulisan caption persuasif, dan posting terjadwal. | `/layanan/pengelolaan-media-sosial` |
| **Jasa Iklan Digital** | Riset target audiens, materi kreatif, dan pengelolaan kampanye Meta Ads & TikTok Ads terukur. | `/layanan/jasa-iklan-digital` |
| **Jasa Pembuatan Website** | Pembuatan website profil bisnis dan katalog online yang ringan, elegan, dan siap terima pesanan. | `/layanan/jasa-pembuatan-website` |

---

## 🛠 Teknologi & Dependensi

- **Core**: [Astro 4.16+](https://astro.build/)
- **Bahasa**: [TypeScript 5.6+](https://www.typescriptlang.org/)
- **Integrasi**: `@astrojs/sitemap` (Pembuatan sitemap otomatis)
- **Tipografi**: `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`
- **Styling**: Native CSS (Custom Design System, CSS Variables, Flexbox/Grid)
- **Validasi Skema**: Zod (Astro Content Collections)

---

## 📂 Struktur Proyek

```text
umkm-digital/
├── public/                     # Aset statis publik
│   ├── favicon.svg             # Favicon SVG
│   ├── robots.txt              # Konfigurasi crawler & bots
│   ├── images/                 # Gambar konten, cover blog & portofolio
│   └── og/                     # Default Open Graph images
├── src/
│   ├── components/             # Komponen UI Astro
│   │   ├── ArticleCard.astro   # Kartu artikel blog
│   │   ├── Breadcrumbs.astro   # Navigasi breadcrumbs
│   │   ├── Button.astro        # Komponen tombol reusable
│   │   ├── ClosingCTA.astro    # Section ajakan bertindak penutup
│   │   ├── FAQList.astro       # Komponen daftar accordion FAQ
│   │   ├── FloatingActions.astro # Tombol mengambang (WhatsApp & Scroll Top)
│   │   ├── Footer.astro        # Footer global website
│   │   ├── Header.astro        # Navigasi & header website
│   │   ├── JsonLd.astro        # Injeksi Schema.org JSON-LD
│   │   ├── PageHero.astro      # Hero header halaman
│   │   ├── PortfolioCard.astro # Kartu portofolio UMKM
│   │   ├── ServiceCard.astro   # Kartu daftar layanan
│   │   ├── ServiceDetail.astro # Template detail halaman layanan
│   │   └── WhatsAppCTA.astro   # Banner CTA kontak WhatsApp
│   ├── content/                # Astro Content Collections (Markdown/MDX)
│   │   ├── config.ts           # Skema validasi Zod untuk blog & portfolio
│   │   ├── blog/               # Kumpulan artikel edukasi (.md)
│   │   └── portfolio/          # Kumpulan studi kasus UMKM (.md)
│   ├── data/                   # Data statis & konfigurasi bisnis
│   │   ├── faqs.ts             # Data tanya-jawab umum
│   │   ├── locations.ts        # Data wilayah layanan Jawa Timur
│   │   ├── navigation.ts       # Menu navigasi header & footer
│   │   ├── services.ts         # Data lengkap 6 layanan utama
│   │   └── site.ts             # Metadata bisnis, alamat, kontak & sosmed
│   ├── layouts/                # Layout halaman
│   │   ├── BaseLayout.astro    # Layout dasar (HTML, Head, SEO, Meta)
│   │   ├── ArticleLayout.astro # Layout khusus pembaca artikel / studi kasus
│   │   └── MarketingLayout.astro
│   ├── pages/                  # Routing halaman web (File-based routing)
│   │   ├── index.astro         # Beranda utama
│   │   ├── tentang-kami.astro  # Profil Buatin UMKM & latar belakang
│   │   ├── layanan.astro       # Halaman indeks katalog layanan
│   │   ├── layanan/            # Halaman detail masing-masing layanan
│   │   ├── portofolio.astro    # Halaman galeri portofolio
│   │   ├── portofolio/[slug].astro # Detail studi kasus portofolio
│   │   ├── blog.astro          # Halaman indeks artikel blog
│   │   ├── blog/[slug].astro   # Detail artikel blog
│   │   ├── area-layanan.astro  # Daftar cakupan wilayah layanan di Jawa Timur
│   │   ├── faq.astro           # Halaman pusat tanya-jawab
│   │   ├── kontak.astro        # Halaman informasi kontak & lokasi
│   │   ├── kebijakan-privasi.astro # Kebijakan privasi
│   │   └── 404.astro           # Halaman not found (404)
│   ├── styles/                 # Styling global & tokens
│   │   ├── global.css          # Reset CSS, typography, & base styles
│   │   ├── tokens.css          # Variabel warna, font, dan spacing
│   │   └── utilities.css       # Utility helper classes
│   └── utils/                  # Fungsi helper
│       ├── schema.ts           # Generator JSON-LD Schema.org terstruktur
│       ├── seo.ts              # Helper format judul & URL absolut
│       └── whatsapp.ts         # Helper pembuat tautan WhatsApp API
├── astro.config.mjs            # Konfigurasi Astro & integrasi Sitemap
├── package.json                # Daftar paket dependensi & scripts
├── tsconfig.json               # Konfigurasi TypeScript
└── README.md                   # Dokumentasi proyek
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat

Pastikan perangkat Anda sudah terinstal:
- **Node.js**: versi `18.17.1` atau lebih baru (`v20.x` direkomendasikan).
- **npm** (atau package manager pilihan seperti `pnpm` / `yarn`).

### 1. Clone & Masuk ke Direktori

```bash
cd umkm-digital
```

### 2. Pasang Dependensi

```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev)

```bash
npm run dev
```

Buka peramban (browser) di alamat default: `http://localhost:4321`

---

## 📜 Skrip yang Tersedia

Jalankan perintah berikut di terminal:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server lokal pengembangan dengan fitur hot-reload. |
| `npm run build` | Melakukan proses kompilasi dan build produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan server lokal untuk menguji hasil build `dist/` sebelum deploy. |
| `npx astro check` | Memeriksa integritas tipe TypeScript dan komponen Astro. |

---

## ✍️ Panduan Manajemen Konten

### 1. Menambahkan Artikel Blog

Buat file baru berekstensi `.md` di dalam folder `src/content/blog/`, misalnya `src/content/blog/strategi-jualan-online.md`:

```markdown
---
title: "Panduan Menata Etalase Toko Marketplace Agar Menarik Pembeli"
description: "Langkah praktis mempercantik foto produk dan menyusun deskripsi yang memikat pembeli di marketplace."
pubDate: 2026-11-01
category: "Marketplace"
coverImage: "/images/blog/cover-marketplace.webp"
coverAlt: "Ilustrasi optimasi toko marketplace"
author: "Ainur Reza"
draft: false
summary:
  - "Gunakan foto produk berlatar terang dan resolusi tajam."
  - "Tuliskan spesifikasi lengkap tanpa membingungkan pembeli."
---

Isi konten artikel Anda menggunakan format Markdown standar di sini...
```

### 2. Menambahkan Studi Kasus Portofolio

Buat file baru di `src/content/portfolio/`, misalnya `src/content/portfolio/kripik-tempe-malang.md`:

```markdown
---
title: "Transformasi Penjualan Kripik Tempe Malang Lewat Live Commerce"
description: "Bagaimana siaran rutin live shopping meningkatkan penjualan camilan khas Malang hingga 3x lipat."
pubDate: 2026-10-15
category: "Live Commerce"
coverImage: "/images/portfolio/kripik-tempe.webp"
coverAlt: "Kemasan Kripik Tempe Malang"
author: "Tim Buatin UMKM"
draft: false
summary:
  - "Peningkatan interaksi penonton live sebesar 140%."
  - "Penataan keranjang kuning yang lebih ringkas dan teratur."
---

Jelaskan tantangan, solusi yang diterapkan, dan hasil yang diperoleh klien di sini...
```

### 3. Mengubah Konfigurasi & Kontak Bisnis

Semua informasi kontak, nomor WhatsApp, alamat, dan tautan sosial media terpusat di `src/data/site.ts`:

- **Nomor WhatsApp**: Ubah `whatsapp` dan `phone`.
- **Domain Resmi**: Ubah `url` di `src/data/site.ts` dan opsi `site` pada `astro.config.mjs`.
- **Wilayah Layanan**: Sesuaikan daftar kota di `src/data/locations.ts` dan `src/utils/schema.ts`.

---

## 🔍 Optimasi SEO & AEO

Proyek ini telah dikonfigurasi dengan standar pencarian modern:

1. **JSON-LD Schema**: Dikelola di `src/utils/schema.ts`, otomatis menghasilkan skema `LocalBusiness`, `Service`, `Article`, `BreadcrumbList`, dan `FAQPage`.
2. **Robots.txt & Sitemap**: Integrasi `@astrojs/sitemap` memproduksi `sitemap-index.xml` otomatis saat build, didukung aturan akses crawler AI (`GPTBot`, `PerplexityBot`, `ClaudeBot`) di `public/robots.txt`.
3. **Geo-Targeting Local SEO**: Mengandung metadata geolokasi Surabaya & Jawa Timur (`ICBM`, `geo.position`, `geo.region`) untuk memperkuat visibilitas pencarian lokal.

---

## 📞 Kontak & Informasi Bisnis

- **Entitas**: Buatin UMKM Jawa Timur
- **Situs Resmi**: [https://buatinumkm.web.id](https://buatinumkm.web.id)
- **WhatsApp**: [+62 889-8964-3555](https://wa.me/6288989643555)
- **Email**: [halo@buatinumkm.web.id](mailto:halo@buatinumkm.web.id)
- **Domisili**: Surabaya, Jawa Timur, Indonesia
- **Jam Operasional**: Senin – Sabtu, 08.00 – 18.00 WIB

---

*Dikelola dengan ❤️ untuk kemajuan UMKM Jawa Timur.*
