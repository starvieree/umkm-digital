import fs from 'fs';
import path from 'path';
import { renderHtmlToWebp } from './render-helper.js';

// ==========================================
// 1. SERVICE: JASA SEO & PENULISAN ARTIKEL
// ==========================================
const htmlServiceSeo = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 20%, #0c1e2c 0%, #07131b 60%, #03080c 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .grid-bg {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 36px),
                      repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 36px);
  }
  .glow-cyan {
    position: absolute;
    width: 700px;
    height: 450px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, transparent 70%);
    filter: blur(60px);
    top: 60px;
    left: 250px;
  }
  .main-container {
    position: relative;
    z-index: 10;
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .top-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(15, 30, 45, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.3);
    border-radius: 16px;
    padding: 14px 24px;
  }
  .service-tag {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #38bdf8;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .dot { width: 8px; height: 8px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 10px #06b6d4; }
  .stats-row { display: flex; gap: 18px; }
  .stat-badge {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 12px;
    color: #cbd5e1;
    font-weight: 600;
  }
  .stat-badge strong { color: #38bdf8; }
  
  .content-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 24px;
  }
  .card {
    background: rgba(13, 24, 37, 0.85);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
  .card-title {
    font-size: 13px;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-title .active-pill {
    background: #0284c7;
    color: #fff;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 10px;
  }
  
  /* GOOGLE SERP RESULT */
  .google-box {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 14px;
    padding: 18px;
    margin-bottom: 16px;
  }
  .google-rank {
    display: inline-block;
    background: #10b981;
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 6px;
    margin-bottom: 8px;
  }
  .google-url { font-size: 12px; color: #38bdf8; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
  .google-title { font-size: 18px; font-weight: 700; color: #60a5fa; margin-bottom: 6px; line-height: 1.3; }
  .google-desc { font-size: 13px; color: #94a3b8; line-height: 1.5; }
  
  .keyword-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }
  .kw-tag {
    background: rgba(6, 182, 212, 0.12);
    border: 1px solid rgba(6, 182, 212, 0.28);
    color: #7dd3fc;
    font-size: 11px;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .kw-vol { color: #38bdf8; font-size: 10px; background: rgba(0,0,0,0.3); padding: 1px 6px; border-radius: 10px; }

  /* ARTICLE EDITOR PREVIEW */
  .editor-header {
    background: #1e293b;
    border-radius: 10px 10px 0 0;
    padding: 10px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #94a3b8;
  }
  .editor-body {
    background: #090d16;
    border: 1px solid #1e293b;
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 16px;
  }
  .art-h2 { font-size: 15px; font-weight: 700; color: #f1f5f9; margin-bottom: 8px; }
  .art-p { font-size: 12px; color: #94a3b8; line-height: 1.6; margin-bottom: 12px; }
  .art-p mark { background: rgba(245, 158, 11, 0.25); color: #fbbf24; padding: 2px 4px; border-radius: 4px; }
  
  .seo-score-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 10px;
    padding: 10px 14px;
    margin-top: 14px;
  }
  .seo-score-num { font-size: 20px; font-weight: 800; color: #10b981; }
  .seo-score-desc { font-size: 11px; color: #6ee7b7; font-weight: 600; }
</style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="glow-cyan"></div>
  
  <div class="main-container">
    <div class="top-banner">
      <div class="service-tag">
        <span class="dot"></span>
        <span>Layanan Jasa SEO & Penulisan Artikel UMKM</span>
      </div>
      <div class="stats-row">
        <div class="stat-badge">Pertumbuhan Trafik: <strong>+340%</strong></div>
        <div class="stat-badge">Struktur Konten: <strong>SEO On-Page & Schema</strong></div>
        <div class="stat-badge">Panjang Artikel: <strong>1.000–1.500 Kata</strong></div>
      </div>
    </div>
    
    <div class="content-grid">
      <!-- LEFT: GOOGLE SEARCH RANKING -->
      <div class="card">
        <div class="card-title">
          <span>Peringkat Teratas Pencarian Organik Google</span>
          <span class="active-pill">SERP RANK #1</span>
        </div>
        
        <div class="google-box">
          <div class="google-rank">🏆 Ranking #1 Google Indonesia</div>
          <div class="google-url">https://buatinumkm.web.id/blog/panduan-umkm-jawa-timur</div>
          <h3 class="google-title">Strategi Pemasaran Digital & Solusi Meningkatkan Penjualan UMKM</h3>
          <p class="google-desc">Panduan komprehensif optimasi bisnis lokal, riset kata kunci potensial, dan struktur artikel ramah mesin pencari Google & AI Answer Engine...</p>
        </div>
        
        <div style="font-size:12px;color:#94a3b8;font-weight:600;margin-top:8px">Kata Kunci Potensial Tertarget:</div>
        <div class="keyword-list">
          <div class="kw-tag">🔍 grosir keripik jawa timur <span class="kw-vol">4.8k/bln</span></div>
          <div class="kw-tag">🔍 oleh-oleh khas mojokerto <span class="kw-vol">3.2k/bln</span></div>
          <div class="kw-tag">🔍 supplier camilan kiloan <span class="kw-vol">2.9k/bln</span></div>
          <div class="kw-tag">🔍 jasa pemasaran umkm <span class="kw-vol">1.6k/bln</span></div>
        </div>
      </div>
      
      <!-- RIGHT: ARTICLE EDITOR & SCORE -->
      <div class="card">
        <div class="card-title">
          <span>Struktur Penulisan Artikel Bisnis</span>
          <span style="color:#10b981;font-weight:700">100% Original</span>
        </div>
        
        <div class="editor-header">
          <span>Editor Artikel SEO-Friendly</span>
          <span>1.450 Kata • 5 Menit Baca</span>
        </div>
        <div class="editor-body">
          <div class="art-h2">1. Menentukan Target Pembeli & Niat Cari</div>
          <p class="art-p">Calon pelanggan mencari <mark>solusi praktis produk lokal</mark> dengan intent pembelian yang jelas. Dengan menyajikan data akurat dan panduan terpercaya...</p>
          <div class="art-h2">2. Struktur Heading H2 & H3 Terarah</div>
          <p class="art-p">Menyusun poin keunggulan produk dan tombol pemesanan WhatsApp di setiap akhir bagian informasi penting.</p>
        </div>
        
        <div class="seo-score-bar">
          <div>
            <div class="seo-score-desc">Kualitas SEO On-Page</div>
            <div style="font-size:11px;color:#94a3b8">Keyword density, heading tag, internal link & meta ready</div>
          </div>
          <div class="seo-score-num">98/100</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// ==========================================
// 2. SERVICE: HOSTING & OPTIMASI WEBSITE
// ==========================================
const htmlServiceHosting = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 25%, #181335 0%, #0d0a21 60%, #05040f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .circuit-bg {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image: repeating-linear-gradient(0deg, rgba(168, 85, 247, 0.08) 0px, rgba(168, 85, 247, 0.08) 1px, transparent 1px, transparent 32px),
                      repeating-linear-gradient(90deg, rgba(168, 85, 247, 0.08) 0px, rgba(168, 85, 247, 0.08) 1px, transparent 1px, transparent 32px);
  }
  .glow-purple {
    position: absolute;
    width: 750px;
    height: 450px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%);
    filter: blur(65px);
    top: 50px;
    left: 220px;
  }
  .main-container {
    position: relative;
    z-index: 10;
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .top-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(30, 20, 55, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(168, 85, 247, 0.35);
    border-radius: 16px;
    padding: 14px 24px;
  }
  .service-tag {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #c084fc;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
  .dot { width: 8px; height: 8px; background: #a855f7; border-radius: 50%; box-shadow: 0 0 10px #a855f7; }
  .stats-row { display: flex; gap: 18px; }
  .stat-badge {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 12px;
    color: #cbd5e1;
    font-weight: 600;
  }
  .stat-badge strong { color: #10b981; }

  .content-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 24px;
  }
  .card {
    background: rgba(20, 15, 40, 0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
  .card-title {
    font-size: 13px;
    font-weight: 700;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* PAGESPEED METRICS WIDGET */
  .speed-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0 20px;
  }
  .speed-circle {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 8px solid #10b981;
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    background: rgba(16, 185, 129, 0.08);
  }
  .speed-val { font-size: 48px; font-weight: 800; color: #10b981; line-height: 1; }
  .speed-sub { font-size: 11px; color: #a7f3d0; font-weight: 700; text-transform: uppercase; margin-top: 4px; }
  .speed-label { font-size: 14px; font-weight: 700; color: #f8fafc; }
  
  .vitals-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .vital-item {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 10px 12px;
  }
  .vital-metric { font-size: 11px; color: #94a3b8; margin-bottom: 2px; }
  .vital-value { font-size: 16px; font-weight: 800; color: #10b981; }

  /* SERVER INFRASTRUCTURE SPECS */
  .infra-list { display: flex; flex-direction: column; gap: 12px; }
  .infra-item {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infra-left { display: flex; align-items: center; gap: 12px; }
  .infra-icon { font-size: 20px; }
  .infra-title { font-size: 13px; font-weight: 700; color: #f1f5f9; }
  .infra-desc { font-size: 11px; color: #94a3b8; }
  .infra-badge {
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #6ee7b7;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 6px;
  }
</style>
</head>
<body>
  <div class="circuit-bg"></div>
  <div class="glow-purple"></div>

  <div class="main-container">
    <div class="top-banner">
      <div class="service-tag">
        <span class="dot"></span>
        <span>Layanan Hosting & Optimasi Website UMKM</span>
      </div>
      <div class="stats-row">
        <div class="stat-badge">Skor Google PageSpeed: <strong>99/100</strong></div>
        <div class="stat-badge">Waktu Muat: <strong>&lt; 1 Detik</strong></div>
        <div class="stat-badge">Jaminan Server: <strong>99.9% Uptime</strong></div>
      </div>
    </div>

    <div class="content-grid">
      <!-- LEFT: SPEED SCORE & VITALS -->
      <div class="card">
        <div class="card-title">
          <span>Google PageSpeed Insights</span>
          <span style="color:#10b981;font-weight:700">Mobile & Desktop</span>
        </div>

        <div class="speed-center">
          <div class="speed-circle">
            <span class="speed-val">99</span>
            <span class="speed-sub">Performa</span>
          </div>
          <div class="speed-label">Lolos Seluruh Metrik Core Web Vitals</div>
        </div>

        <div class="vitals-grid">
          <div class="vital-item">
            <div class="vital-metric">Largest Contentful Paint</div>
            <div class="vital-value">0.8 detik</div>
          </div>
          <div class="vital-item">
            <div class="vital-metric">Interaction to Next Paint</div>
            <div class="vital-value">28 ms</div>
          </div>
          <div class="vital-item">
            <div class="vital-metric">Cumulative Layout Shift</div>
            <div class="vital-value">0.000</div>
          </div>
          <div class="vital-item">
            <div class="vital-metric">Server Response (TTFB)</div>
            <div class="vital-value">120 ms</div>
          </div>
        </div>
      </div>

      <!-- RIGHT: CLOUD INFRASTRUCTURE -->
      <div class="card">
        <div class="card-title">
          <span>Infrastruktur Cloud & Keamanan</span>
          <span style="color:#c084fc;font-weight:700">Enterprise Grade</span>
        </div>

        <div class="infra-list">
          <div class="infra-item">
            <div class="infra-left">
              <span class="infra-icon">⚡</span>
              <div>
                <div class="infra-title">Server NVMe Cloud Super Cepat</div>
                <div class="infra-desc">Penyimpanan SSD NVMe enterprise dengan pemrosesan instan</div>
              </div>
            </div>
            <span class="infra-badge">High Speed</span>
          </div>

          <div class="infra-item">
            <div class="infra-left">
              <span class="infra-icon">🖼️</span>
              <div>
                <div class="infra-title">Kompresi Gambar Otomatis WebP</div>
                <div class="infra-desc">Ukuran foto katalog berkurang 70% tanpa pecah</div>
              </div>
            </div>
            <span class="infra-badge">Optimal</span>
          </div>

          <div class="infra-item">
            <div class="infra-left">
              <span class="infra-icon">🔒</span>
              <div>
                <div class="infra-title">Sertifikat SSL / HTTPS Grade A+</div>
                <div class="infra-desc">Enkripsi data transaksi aman dan proteksi malware aktif</div>
              </div>
            </div>
            <span class="infra-badge">Terlindungi</span>
          </div>

          <div class="infra-item">
            <div class="infra-left">
              <span class="infra-icon">🔄</span>
              <div>
                <div class="infra-title">Migrasi Zero-Downtime & Backup Harian</div>
                <div class="infra-desc">Website tetap melayani pembeli selama proses migrasi</div>
              </div>
            </div>
            <span class="infra-badge">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// ==========================================
// 3. PORTFOLIO: SNACK NUSANTARA MOJOKERTO (SEO)
// ==========================================
const htmlPortfolioSnack = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 60% 30%, #1a2618 0%, #0d150c 60%, #050904 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pattern-bg {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image: repeating-linear-gradient(45deg, rgba(34, 197, 94, 0.08) 0px, rgba(34, 197, 94, 0.08) 2px, transparent 2px, transparent 30px);
  }
  .glow-green {
    position: absolute;
    width: 700px;
    height: 450px;
    background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);
    filter: blur(60px);
    top: 60px;
    left: 250px;
  }
  .main-container {
    position: relative;
    z-index: 10;
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .header-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(20, 35, 18, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(34, 197, 94, 0.35);
    border-radius: 16px;
    padding: 14px 24px;
  }
  .badge-tag {
    font-size: 13px;
    font-weight: 700;
    color: #4ade80;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .badge-tag span.dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
  .client-name { font-size: 14px; font-weight: 800; color: #f0fdf4; }

  .content-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 24px;
  }
  .card {
    background: rgba(15, 26, 14, 0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
  .card-head {
    font-size: 13px;
    font-weight: 700;
    color: #cbd5e1;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pill-green {
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.35);
    color: #86efac;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 6px;
  }

  /* SEARCH CONSOLE PERFORMANCE CARD */
  .metrics-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }
  .m-box {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 12px 14px;
  }
  .m-title { font-size: 11px; color: #94a3b8; margin-bottom: 4px; }
  .m-val { font-size: 22px; font-weight: 800; color: #4ade80; }
  .m-change { font-size: 10px; color: #86efac; font-weight: 600; margin-top: 2px; }

  .rank-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }
  .rank-table th { text-align: left; color: #94a3b8; font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .rank-table td { padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #e2e8f0; }
  .rank-badge {
    display: inline-block;
    background: #10b981;
    color: #fff;
    font-weight: 800;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 4px;
  }

  /* ARTICLE PREVIEW */
  .art-preview-card {
    background: #0d150c;
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: 14px;
    padding: 18px;
    margin-bottom: 14px;
  }
  .art-category { font-size: 11px; font-weight: 700; color: #fbbf24; text-transform: uppercase; margin-bottom: 6px; }
  .art-headline { font-size: 16px; font-weight: 800; color: #f0fdf4; line-height: 1.35; margin-bottom: 8px; }
  .art-summary { font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 14px; }
  .author-row { display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: #64748b; }
  
  .result-banner {
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .result-banner strong { color: #4ade80; font-size: 15px; }
  .result-banner span { color: #cbd5e1; font-size: 12px; }
</style>
</head>
<body>
  <div class="pattern-bg"></div>
  <div class="glow-green"></div>

  <div class="main-container">
    <div class="header-banner">
      <div class="badge-tag">
        <span class="dot"></span>
        <span>Studi Kasus: Jasa SEO & Publikasi Artikel Blog</span>
      </div>
      <div class="client-name">Snack Nusantara — Mojokerto, Jawa Timur</div>
    </div>

    <div class="content-grid">
      <!-- LEFT: GOOGLE SEARCH CONSOLE METRICS -->
      <div class="card">
        <div class="card-head">
          <span>Kinerja Google Search Console (90 Hari)</span>
          <span class="pill-green">14 Kata Kunci Top 3</span>
        </div>

        <div class="metrics-row">
          <div class="m-box">
            <div class="m-title">Total Klik Organik</div>
            <div class="m-val">4.520</div>
            <div class="m-change">▲ +280% vs sebelum</div>
          </div>
          <div class="m-box">
            <div class="m-title">Total Impresi</div>
            <div class="m-val">68.4K</div>
            <div class="m-change">▲ +340% jangkauan</div>
          </div>
          <div class="m-box">
            <div class="m-title">Rata-rata Posisi</div>
            <div class="m-val">2.8</div>
            <div class="m-change">Halaman 1 Google</div>
          </div>
        </div>

        <table class="rank-table">
          <thead>
            <tr>
              <th>Kata Kunci Tertarget</th>
              <th>Posisi</th>
              <th>Klik / Bulan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>grosir keripik singkong mojokerto</td>
              <td><span class="rank-badge">#1</span></td>
              <td>1.240 klik</td>
            </tr>
            <tr>
              <td>oleh oleh khas mojokerto tahan lama</td>
              <td><span class="rank-badge">#1</span></td>
              <td>890 klik</td>
            </tr>
            <tr>
              <td>supplier keripik tempe sagu kiloan</td>
              <td><span class="rank-badge">#2</span></td>
              <td>760 klik</td>
            </tr>
            <tr>
              <td>camilan renyah mojokerto kemasan</td>
              <td><span class="rank-badge">#3</span></td>
              <td>610 klik</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- RIGHT: PUBLISHED ARTICLE SAMPLE -->
      <div class="card">
        <div class="card-head">
          <span>Artikel Blog Terpublikasi</span>
          <span style="color:#fbbf24;font-size:11px;font-weight:700">12 Artikel Selesai</span>
        </div>

        <div class="art-preview-card">
          <div class="art-category">Panduan Oleh-Oleh Mojokerto</div>
          <h3 class="art-headline">5 Pilihan Keripik Tradisional Khas Mojokerto yang Gurih & Tahan Berbulan-bulan</h3>
          <p class="art-summary">Ulasan lengkap varian singkong balado, keripik tempe sagu, dan tips penyimpanan agar tetap renyah saat dikirim ke luar pulau.</p>
          <div class="author-row">
            <span>Ditulis oleh Tim Ahli SEO</span>
            <span>⭐ Rating 4.9 (128 Review)</span>
          </div>
        </div>

        <div class="result-banner">
          <div>
            <div style="font-size:11px;color:#94a3b8">Dampak Penjualan Klien:</div>
            <strong>Pesanan Grosir WhatsApp Naik +65%</strong>
          </div>
          <span>Dari 12 Kota Baru</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// ==========================================
// 4. PORTFOLIO: SAMBAL BU NINIK SURABAYA (HOSTING)
// ==========================================
const htmlPortfolioSambal = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 40% 25%, #2a1515 0%, #150a0a 60%, #080303 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pattern-bg {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image: repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.08) 0px, rgba(239, 68, 68, 0.08) 2px, transparent 2px, transparent 30px);
  }
  .glow-red {
    position: absolute;
    width: 700px;
    height: 450px;
    background: radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%);
    filter: blur(60px);
    top: 60px;
    left: 250px;
  }
  .main-container {
    position: relative;
    z-index: 10;
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .header-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(35, 15, 15, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(239, 68, 68, 0.35);
    border-radius: 16px;
    padding: 14px 24px;
  }
  .badge-tag {
    font-size: 13px;
    font-weight: 700;
    color: #f87171;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .badge-tag span.dot { width: 8px; height: 8px; background: #ef4444; border-radius: 50%; box-shadow: 0 0 10px #ef4444; }
  .client-name { font-size: 14px; font-weight: 800; color: #fee2e2; }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .card {
    background: rgba(25, 10, 10, 0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
  .card-head {
    font-size: 13px;
    font-weight: 700;
    color: #cbd5e1;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* BEFORE & AFTER COMPARISON */
  .compare-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 16px;
  }
  .cmp-item {
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .cmp-before {
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.25);
  }
  .cmp-after {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.35);
  }
  .cmp-label { font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
  .cmp-before .cmp-label { color: #f87171; }
  .cmp-after .cmp-label { color: #34d399; }
  
  .score-circle-sm {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 8px;
  }
  .cmp-before .score-circle-sm { border: 4px solid #ef4444; color: #ef4444; background: rgba(239,68,68,0.1); }
  .cmp-after .score-circle-sm { border: 4px solid #10b981; color: #10b981; background: rgba(16,185,129,0.15); box-shadow: 0 0 15px rgba(16,185,129,0.3); }

  .cmp-metric { font-size: 12px; color: #cbd5e1; }
  .cmp-metric strong { display: block; font-size: 15px; margin-top: 2px; }
  .cmp-before strong { color: #f87171; }
  .cmp-after strong { color: #10b981; }

  /* MIGRATION STEPS LIST */
  .step-list { display: flex; flex-direction: column; gap: 10px; }
  .step-row {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .step-left { display: flex; align-items: center; gap: 10px; font-size: 12px; color: #e2e8f0; font-weight: 600; }
  .step-badge {
    font-size: 11px;
    font-weight: 700;
    color: #10b981;
    background: rgba(16, 185, 129, 0.15);
    padding: 3px 8px;
    border-radius: 6px;
  }

  .summary-banner {
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 12px;
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .summary-banner strong { color: #34d399; font-size: 16px; }
</style>
</head>
<body>
  <div class="pattern-bg"></div>
  <div class="glow-red"></div>

  <div class="main-container">
    <div class="header-banner">
      <div class="badge-tag">
        <span class="dot"></span>
        <span>Studi Kasus: Migrasi Cloud Hosting & Optimasi Website</span>
      </div>
      <div class="client-name">Sambal Bu Ninik — Surabaya, Jawa Timur</div>
    </div>

    <div class="content-grid">
      <!-- LEFT: SPEED BEFORE & AFTER -->
      <div class="card">
        <div class="card-head">
          <span>Hasil Audit Google PageSpeed (Mobile)</span>
          <span style="color:#10b981;font-weight:700">Peningkatan +133%</span>
        </div>

        <div class="compare-box">
          <div class="cmp-item cmp-before">
            <div class="cmp-label">Sebelum Optimasi</div>
            <div class="score-circle-sm">42</div>
            <div class="cmp-metric">Waktu Muat: <strong>6.8 Detik</strong></div>
          </div>
          <div class="cmp-item cmp-after">
            <div class="cmp-label">Setelah Optimasi</div>
            <div class="score-circle-sm">98</div>
            <div class="cmp-metric">Waktu Muat: <strong>0.9 Detik</strong></div>
          </div>
        </div>

        <div class="summary-banner">
          <div>
            <div style="font-size:11px;color:#94a3b8">Hasil Nyata Bisnis:</div>
            <strong>Bounce Rate Turun 62%</strong>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:#94a3b8">Klik WhatsApp:</div>
            <strong style="color:#10b981">Naik 2.8x Lipat</strong>
          </div>
        </div>
      </div>

      <!-- RIGHT: ACTIONS COMPLETED -->
      <div class="card">
        <div class="card-head">
          <span>Tindakan Optimasi yang Dieksekusi</span>
          <span style="color:#34d399;font-size:11px;font-weight:700">Zero Downtime</span>
        </div>

        <div class="step-list">
          <div class="step-row">
            <div class="step-left"><span>🚀</span> Migrasi ke Cloud NVMe SSD Super Cepat</div>
            <span class="step-badge">Uptime 99.9%</span>
          </div>
          <div class="step-row">
            <div class="step-left"><span>🖼️</span> Konversi Gambar Katalog ke WebP Ringan</div>
            <span class="step-badge">Hemat 74%</span>
          </div>
          <div class="step-row">
            <div class="step-left"><span>⚡</span> Konfigurasi Server Caching & LiteSpeed</div>
            <span class="step-badge">TTFB 140ms</span>
          </div>
          <div class="step-row">
            <div class="step-left"><span>🔒</span> Pasang SSL Grade A+ & Backup Terjadwal</div>
            <span class="step-badge">Aman & Terenkripsi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export async function generateNewImages() {
  console.log('Rendering 1: Jasa SEO & Artikel service image...');
  await renderHtmlToWebp(htmlServiceSeo, 'public/images/services/jasa-seo-artikel.webp');

  console.log('Rendering 2: Hosting & Optimasi Website service image...');
  await renderHtmlToWebp(htmlServiceHosting, 'public/images/services/hosting-optimasi-website.webp');

  console.log('Rendering 3: Snack Nusantara SEO portfolio image...');
  await renderHtmlToWebp(htmlPortfolioSnack, 'public/images/portfolio/snack-nusantara-mojokerto-seo.webp');

  console.log('Rendering 4: Sambal Bu Ninik Hosting portfolio image...');
  await renderHtmlToWebp(htmlPortfolioSambal, 'public/images/portfolio/sambal-bu-ninik-surabaya-hosting.webp');

  console.log('ALL 4 IMAGES SUCCESSFULLY GENERATED!');
}

generateNewImages();
