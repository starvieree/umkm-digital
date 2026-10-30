import fs from 'fs';
import path from 'path';
import { renderHtmlToWebp } from './render-helper.js';

// Read existing image assets to embed
const keripikPhotoBase64 = fs.readFileSync('public/images/portfolio/snack-nusantara-live-commerce.webp').toString('base64');
const sambalPhotoBase64 = fs.readFileSync('public/images/portfolio/sambal-bu-ninik-marketplace.webp').toString('base64');

// ==========================================
// 6. KATALOG PRODUK MARKETPLACE (5 SLIDES)
// Caption: "Contoh susunan slide foto katalog produk dengan infografis spesifikasi yang meningkatkan kepercayaan pembeli."
// ==========================================
const htmlKatalog = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 70%, #020617 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .grid-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
                      repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px);
  }
  .glow {
    position: absolute;
    width: 900px;
    height: 400px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 65%);
    filter: blur(50px);
    top: 100px;
  }
  .catalog-container {
    position: relative;
    z-index: 10;
    width: 1100px;
    background: #ffffff;
    border-radius: 24px;
    padding: 34px 36px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.85);
  }
  .cat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 18px;
    margin-bottom: 24px;
  }
  .cat-title { font-size: 20px; font-weight: 800; color: #0f172a; }
  .cat-sub { font-size: 12px; color: #64748b; margin-top: 2px; }
  .cat-badges { display: flex; gap: 8px; }
  .c-badge {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #16a34a;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 6px;
  }
  /* 5 SLIDES ROW */
  .slides-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
  .slide-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    position: relative;
  }
  .slide-top-badge {
    background: #0284c7;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    padding: 6px 8px;
    text-align: center;
    letter-spacing: 0.3px;
  }
  .slide-visual {
    height: 195px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid #e2e8f0;
    overflow: hidden;
  }
  .slide-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  .slide-info {
    padding: 12px 10px;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .slide-role { font-size: 11px; font-weight: 800; color: #0f172a; margin-bottom: 2px; }
  .slide-desc { font-size: 10px; color: #64748b; line-height: 1.35; }
  /* Custom Graphic Details per Slide */
  .infographic-table {
    width: 100%;
    height: 100%;
    background: #eff6ff;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 9px;
  }
  .info-row { display: flex; justify-content: space-between; border-bottom: 1px dashed #bfdbfe; padding-bottom: 4px; }
  .info-row strong { color: #1e3a8a; }
  .warranty-graphic {
    width: 100%;
    height: 100%;
    background: #f0fdf4;
    border-radius: 8px;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
  }
  .seal-icon { font-size: 36px; }
  .seal-text { font-size: 10px; font-weight: 800; color: #166534; }
  .cat-footer {
    margin-top: 22px;
    background: #f8fafc;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #334155;
    font-weight: 600;
    border: 1px solid #e2e8f0;
  }
  .caption-pill {
    position: absolute;
    bottom: 16px;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(14, 165, 233, 0.5);
    color: #bae6fd;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  }
</style>
</head>
<body>
  <div class="grid-pattern"></div>
  <div class="glow"></div>

  <div class="catalog-container">
    <div class="cat-header">
      <div>
        <div class="cat-title">Hierarki 5 Slide Foto Katalog Toko Marketplace</div>
        <div class="cat-sub">Standar Optimasi Visual Produk (Shopee & Tokopedia) untuk Meningkatkan Angka Klik & Pembelian</div>
      </div>
      <div class="cat-badges">
        <span class="c-badge">Format 1:1 Persegi</span>
        <span class="c-badge">Minimal 75% Frame</span>
        <span class="c-badge">SEO Friendly</span>
      </div>
    </div>

    <div class="slides-row">
      <!-- SLIDE 1 -->
      <div class="slide-card">
        <div class="slide-top-badge">SLIDE 1</div>
        <div class="slide-visual">
          <img src="data:image/webp;base64,${keripikPhotoBase64}" alt="Foto Utama" />
        </div>
        <div class="slide-info">
          <div>
            <div class="slide-role">Foto Utama (Hero)</div>
            <div class="slide-desc">Latar bersih, produk jelas, menarik perhatian pencarian pembeli.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 2 -->
      <div class="slide-card">
        <div class="slide-top-badge" style="background:#0284c7">SLIDE 2</div>
        <div class="slide-visual">
          <div style="width:100%;height:100%;position:relative;border-radius:8px;overflow:hidden">
            <img src="data:image/webp;base64,${keripikPhotoBase64}" style="transform:scale(1.7);transform-origin:center" alt="Detail Makro" />
            <div style="position:absolute;bottom:6px;left:6px;background:rgba(0,0,0,0.7);color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:4px">ZOOM MAKRO</div>
          </div>
        </div>
        <div class="slide-info">
          <div>
            <div class="slide-role">Detail Tekstur Bahan</div>
            <div class="slide-desc">Foto jarak dekat membuktikan kerenyahan dan bumbu melimpah.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 3 -->
      <div class="slide-card">
        <div class="slide-top-badge" style="background:#0369a1">SLIDE 3</div>
        <div class="slide-visual">
          <div class="infographic-table">
            <div class="info-row"><span>Berat Bersih</span><strong>250 Gram</strong></div>
            <div class="info-row"><span>Masa Simpan</span><strong>6 Bulan</strong></div>
            <div class="info-row"><span>Izin Edar</span><strong>P-IRT Resmi</strong></div>
            <div class="info-row"><span>Sertifikat</span><strong>Halal Kemenag</strong></div>
            <div class="info-row" style="border:none"><span>Kemasan</span><strong>Aluminium Pouch</strong></div>
          </div>
        </div>
        <div class="slide-info">
          <div>
            <div class="slide-role">Infografis Spesifikasi</div>
            <div class="slide-desc">Rincian gramasi, legalitas, dan panduan porsi kurangi tanya chat.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 4 -->
      <div class="slide-card">
        <div class="slide-top-badge" style="background:#075985">SLIDE 4</div>
        <div class="slide-visual">
          <div style="width:100%;height:100%;background:#fef3c7;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;text-align:center">
            <div style="font-size:32px">🥣</div>
            <div style="font-size:10px;font-weight:800;color:#92400e;margin-top:6px">SARAN PENYAJIAN</div>
            <div style="font-size:9px;color:#b45309">Nikmat disantap bersama nasi hangat atau camilan santai</div>
          </div>
        </div>
        <div class="slide-info">
          <div>
            <div class="slide-role">Foto Penyajian / Ukuran</div>
            <div class="slide-desc">Visual saat dikonsumsi memberi gambaran porsi nyata pembeli.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 5 -->
      <div class="slide-card">
        <div class="slide-top-badge" style="background:#0c4a6e">SLIDE 5</div>
        <div class="slide-visual">
          <div class="warranty-graphic">
            <div class="seal-icon">🛡️</div>
            <div class="seal-text">GARANSI PENGIRIMAN</div>
            <div style="font-size:8px;color:#15803d">Bubble Wrap 3 Lapis + Kardus Tebal<br>Ganti Baru Jika Rusak</div>
          </div>
        </div>
        <div class="slide-info">
          <div>
            <div class="slide-role">Garansi & Keamanan Kirim</div>
            <div class="slide-desc">Menghilangkan keraguan pembeli luar pulau untuk checkout.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cat-footer">
      <span>💡 Rekomendasi Marketplace: Gunakan infografis terbaca jelas di layar HP 6 inci tanpa perlu zoom</span>
      <span style="color:#0284c7">Tingkatkan Konversi Hingga 3.2x</span>
    </div>
  </div>

  <div class="caption-pill">
    Contoh Susunan Slide Foto Katalog Produk dengan Infografis Spesifikasi
  </div>
</body>
</html>`;

// ==========================================
// 7. PRODUKSI VIDEO PENDEK (BEHIND THE SCENES PACKAGING)
// Caption: "Pengambilan video di balik layar (behind-the-scenes) proses pengemasan produk menggunakan kamera smartphone."
// ==========================================
const htmlProduksi = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 70%, #020617 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 30px);
  }
  .glow {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%);
    filter: blur(50px);
    top: 150px;
  }
  .bts-container {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 48px;
    width: 1100px;
  }
  /* VERTICAL SMARTPHONE CAMERA VIEWFINDER */
  .cam-phone {
    width: 440px;
    height: 680px;
    background: #000;
    border-radius: 36px;
    padding: 12px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.85), inset 0 0 0 2px #334155;
    position: relative;
  }
  .cam-screen {
    width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    background: #18181b;
  }
  .cam-bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cam-ui-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.8) 100%);
  }
  /* Viewfinder Grid Lines */
  .grid-overlay {
    position: absolute;
    inset: 0;
    border: 1px dashed rgba(255,255,255,0.25);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    pointer-events: none;
  }
  .grid-cell { border: 1px dashed rgba(255,255,255,0.15); }
  .rec-indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
  .rec-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ef4444;
    display: inline-block;
    margin-right: 6px;
    box-shadow: 0 0 8px #ef4444;
  }
  .focus-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border: 2px solid #facc15;
    border-radius: 8px;
    pointer-events: none;
    box-shadow: 0 0 10px rgba(250, 204, 21, 0.4);
  }
  .focus-tag {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    background: #facc15;
    color: #000;
    font-size: 9px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }
  .cam-bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 11px;
  }
  /* RIGHT: PRODUCTION INFO CARD */
  .info-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .info-card {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 20px;
    padding: 32px;
    color: #fff;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
  .bts-badge {
    display: inline-block;
    background: #e11d48;
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 4px;
    letter-spacing: 0.5px;
    margin-bottom: 14px;
  }
  .bts-title { font-size: 24px; font-weight: 800; color: #f8fafc; line-height: 1.3; margin-bottom: 12px; }
  .bts-desc { font-size: 13px; color: #94a3b8; line-height: 1.6; margin-bottom: 24px; }
  .step-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .step-item {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .step-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #e11d48;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .step-text { font-size: 12px; color: #e2e8f0; line-height: 1.4; }
  .step-text strong { color: #f43f5e; }
  .caption-pill {
    position: absolute;
    bottom: 16px;
    background: rgba(10, 15, 25, 0.9);
    border: 1px solid rgba(225, 29, 72, 0.5);
    color: #fecdd3;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  }
</style>
</head>
<body>
  <div class="pattern"></div>
  <div class="glow"></div>

  <div class="bts-container">
    <!-- SMARTPHONE CAMERA RECORDING PACKAGING -->
    <div class="cam-phone">
      <div class="cam-screen">
        <img class="cam-bg-img" src="data:image/webp;base64,${sambalPhotoBase64}" alt="Packaging Scene" />
        <div class="grid-overlay">
          <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
          <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
          <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
        </div>

        <div class="focus-box">
          <div class="focus-tag">FOKUS PENGEMASAN PRODUK</div>
        </div>

        <div class="cam-ui-overlay">
          <div class="rec-indicator">
            <div><span class="rec-dot"></span><span>REC 00:15</span></div>
            <div style="background:rgba(0,0,0,0.5);padding:2px 8px;border-radius:4px">4K 60FPS</div>
          </div>

          <div class="cam-bottom-bar">
            <span>📐 Format 9:16 Vertikal</span>
            <span style="color:#facc15">Pencahayaan Studio Stabil</span>
            <span>📱 TikTok / Reels</span>
          </div>
        </div>
      </div>
    </div>

    <!-- PRODUCTION INFO -->
    <div class="info-col">
      <div class="info-card">
        <span class="bts-badge">KONTEN BEHIND THE SCENES (BTS)</span>
        <h2 class="bts-title">Perekaman Proses Pengemasan Produk UMKM</h2>
        <p class="bts-desc">
          Mendokumentasikan kehati-hatian tim dalam membungkus pesanan dengan bubble wrap tebal dan kardus pengaman. Konten proses pengemasan terbukti menumbuhkan kepercayaan calon pembeli baru secara organik.
        </p>

        <div class="step-list">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text">
              <strong>Sudut Pandang Jelas (POV):</strong> Kamera smartphone dipasang pada tripod mini meja dengan posisi condong ke bawah.
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text">
              <strong>Pencahayaan Studio Terarah:</strong> Ring light diposisikan di depan meja agar detail segel kemasan terlihat rapi dan berkilau.
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text">
              <strong>Suara Alami (ASMR):</strong> Mikrofon dekat menangkap bunyi tarikan isolasi dan kerapian lipatan kardus yang memuaskan penonton.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="caption-pill">
    Pengambilan Video di Balik Layar (Behind-the-Scenes) Proses Pengemasan Produk Menggunakan Kamera Smartphone
  </div>
</body>
</html>`;

export async function generateBlogImages() {
  console.log('Rendering 5-Slide Katalog Marketplace...');
  await renderHtmlToWebp(htmlKatalog, 'public/images/blog/katalog-produk-marketplace.webp');

  console.log('Rendering BTS Produksi Video Pendek...');
  await renderHtmlToWebp(htmlProduksi, 'public/images/blog/produksi-video-pendek.webp');

  console.log('ALL BLOG IMAGES COMPLETED!');
}

generateBlogImages();
