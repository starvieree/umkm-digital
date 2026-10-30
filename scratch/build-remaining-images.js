import fs from 'fs';
import path from 'path';
import { renderHtmlToWebp } from './render-helper.js';

const honeyPhotoBase64 = fs.readFileSync('public/images/portfolio/madukara-iklan-digital.webp').toString('base64');
const sambalPhotoBase64 = fs.readFileSync('public/images/portfolio/sambal-bu-ninik-marketplace.webp').toString('base64');
const snackPhotoBase64 = fs.readFileSync('public/images/portfolio/snack-nusantara-live-commerce.webp').toString('base64');
const bakeryPhotoBase64 = fs.readFileSync('public/images/portfolio/roti-kencana-media-sosial.webp').toString('base64');

// ==========================================
// 2. MADUKARA IKLAN DIGITAL
// Caption: "Display botol madu murni Madukara Pasuruan dengan materi iklan digital di tablet"
// ==========================================
const htmlMadukara = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 60% 40%, #2e2015 0%, #17100b 60%, #0a0705 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .wood-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 30px);
  }
  .glow {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, transparent 70%);
    filter: blur(50px);
    top: 150px;
    left: 200px;
  }
  .display-container {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 48px;
    width: 1100px;
  }
  /* TABLET MOCKUP */
  .tablet {
    width: 580px;
    height: 660px;
    background: #111417;
    border-radius: 28px;
    padding: 18px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.85), inset 0 0 0 2px #2d333b;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .tablet-screen {
    width: 100%;
    height: 100%;
    background: #0f172a;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    color: #f8fafc;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .tablet-header {
    height: 48px;
    background: #1e293b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 13px;
    border-bottom: 1px solid #334155;
  }
  .meta-tag {
    background: #0284c7;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }
  .ad-feed-card {
    flex: 1;
    background: #1e293b;
    margin: 14px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid #334155;
  }
  .ad-sponsor-bar {
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .ad-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f59e0b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .ad-account { font-size: 12px; font-weight: 700; color: #fff; }
  .ad-sub { font-size: 10px; color: #94a3b8; }
  .ad-image-wrap {
    height: 250px;
    position: relative;
    background: #000;
    overflow: hidden;
  }
  .ad-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ad-overlay-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(245, 158, 11, 0.95);
    color: #000;
    font-size: 10px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }
  .ad-body {
    padding: 12px 14px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ad-headline { font-size: 14px; font-weight: 800; color: #f8fafc; line-height: 1.3; }
  .ad-text { font-size: 11px; color: #cbd5e1; margin-top: 4px; line-height: 1.4; }
  .ad-metrics-row {
    display: flex;
    gap: 12px;
    background: #0f172a;
    padding: 8px 12px;
    border-radius: 6px;
    margin-top: 8px;
    font-size: 10px;
    color: #94a3b8;
  }
  .ad-metrics-row strong { color: #38bdf8; }
  .ad-cta-btn {
    margin-top: 10px;
    background: #16a34a;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    letter-spacing: 0.3px;
  }
  /* PHYSICAL BOTTLE DISPLAY */
  .bottle-display {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottle-card {
    width: 100%;
    background: rgba(30, 22, 16, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottle-img-box {
    width: 380px;
    height: 380px;
    border-radius: 14px;
    overflow: hidden;
    border: 3px solid rgba(245, 158, 11, 0.4);
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  }
  .bottle-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bottle-info {
    margin-top: 20px;
    text-align: center;
    color: #fef3c7;
  }
  .bottle-title { font-size: 20px; font-weight: 800; color: #fbbf24; }
  .bottle-origin { font-size: 13px; color: #d1d5db; margin: 4px 0 12px; }
  .bottle-badges {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .b-badge {
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: #fde68a;
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 600;
  }
  .caption-pill {
    position: absolute;
    bottom: 20px;
    background: rgba(15, 10, 6, 0.9);
    border: 1px solid rgba(245, 158, 11, 0.5);
    color: #fde68a;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  }
</style>
</head>
<body>
  <div class="wood-pattern"></div>
  <div class="glow"></div>

  <div class="display-container">
    <!-- TABLET WITH DIGITAL AD PREVIEW -->
    <div class="tablet">
      <div class="tablet-screen">
        <div class="tablet-header">
          <span style="font-weight:700">📱 Meta Ads Manager Preview</span>
          <span class="meta-tag">KAMPANYE AKTIF</span>
        </div>
        <div class="ad-feed-card">
          <div class="ad-sponsor-bar">
            <div class="ad-avatar">🍯</div>
            <div>
              <div class="ad-account">madukara.naturalhoney</div>
              <div class="ad-sub">Bersponsor • Instagram Feed & Reels</div>
            </div>
          </div>
          <div class="ad-image-wrap">
            <img src="data:image/webp;base64,${honeyPhotoBase64}" alt="Madukara Honey" />
            <div class="ad-overlay-badge">100% RAW HONEY</div>
          </div>
          <div class="ad-body">
            <div>
              <div class="ad-headline">Madu Hutan Murni Pasuruan — Alami Tanpa Campuran</div>
              <div class="ad-text">
                Panen mentah langsung dari lereng Welirang. Murni berkhasiat tanpa pemanasan buatan. Bantu jaga daya tahan tubuh keluarga setiap hari!
              </div>
            </div>
            <div>
              <div class="ad-metrics-row">
                <span>Target: <strong>Surabaya & Malang</strong></span>
                <span>Klik: <strong>142 Chat WA</strong></span>
                <span>ROAS: <strong>4.8x</strong></span>
              </div>
              <div class="ad-cta-btn">Kirim Pesan WhatsApp (Promo Bundling) &rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PHYSICAL BOTTLE PRODUCT CARD -->
    <div class="bottle-display">
      <div class="bottle-card">
        <div class="bottle-img-box">
          <img src="data:image/webp;base64,${honeyPhotoBase64}" alt="Botol Madu Asli" />
        </div>
        <div class="bottle-info">
          <div class="bottle-title">Madukara Natural Honey</div>
          <div class="bottle-origin">Madu Hutan Liar Murni Mentah • Lereng Welirang Pasuruan</div>
          <div class="bottle-badges">
            <span class="b-badge">Uji Laboratorium Asli</span>
            <span class="b-badge">P-IRT Terdaftar</span>
            <span class="b-badge">Kemasan Toples Kaca</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="caption-pill">
    Display Botol Madu Murni Madukara Pasuruan dengan Materi Iklan Digital di Tablet
  </div>
</body>
</html>`;

// ==========================================
// 3. ROTI KENCANA MEDIA SOSIAL
// Caption: "Desain konten feed Instagram estetik aneka kue dan roti UMKM"
// ==========================================
const htmlRoti = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #302217 0%, #19110b 70%, #0d0906 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pattern {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image: radial-gradient(#d97706 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .center-frame {
    width: 1040px;
    height: 700px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.8);
    display: flex;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }
  /* Left Sidebar: Profile & Strategy */
  .profile-col {
    width: 360px;
    background: #faf7f2;
    border-right: 1px solid #ebd9c8;
    padding: 32px 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .insta-top {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  .profile-avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f59e0b, #d97706, #b45309);
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-avatar-inner {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }
  .profile-stats {
    display: flex;
    gap: 16px;
    font-size: 11px;
    color: #4b5563;
  }
  .stat-num { font-size: 14px; font-weight: 800; color: #111827; }
  .profile-name { font-size: 18px; font-weight: 800; color: #231b15; margin-bottom: 4px; }
  .profile-badge { font-size: 11px; color: #b45309; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
  .profile-bio { font-size: 12px; color: #4b5563; line-height: 1.5; margin-bottom: 16px; }
  .highlights {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }
  .hl-item { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 10px; color: #6b7280; font-weight: 600; }
  .hl-circle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px solid #d97706;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #fff;
  }
  .palette-box {
    background: #fff;
    border: 1px solid #ebd9c8;
    border-radius: 12px;
    padding: 14px;
  }
  .palette-title { font-size: 11px; font-weight: 700; color: #231b15; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
  .palette-dots { display: flex; gap: 8px; }
  .p-dot { width: 28px; height: 28px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

  /* Right Column: Aesthetic Grid */
  .grid-col {
    flex: 1;
    background: #ffffff;
    padding: 28px;
    display: flex;
    flex-direction: column;
  }
  .grid-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #f3f4f6;
    margin-bottom: 20px;
  }
  .grid-title { font-size: 16px; font-weight: 800; color: #111827; }
  .grid-subtitle { font-size: 12px; color: #6b7280; }
  .feed-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    flex: 1;
  }
  .feed-card {
    background: #faf7f2;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid #ebd9c8;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    position: relative;
  }
  .feed-card-header {
    height: 125px;
    background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .feed-emoji { font-size: 48px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
  .feed-tag {
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(0,0,0,0.65);
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .feed-card-body {
    padding: 10px 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
  }
  .feed-post-title { font-size: 12px; font-weight: 800; color: #231b15; line-height: 1.3; }
  .feed-post-desc { font-size: 10px; color: #6b7280; margin: 4px 0 8px; line-height: 1.35; }
  .feed-post-footer {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #9ca3af;
    border-top: 1px solid #f3f4f6;
    padding-top: 6px;
  }
  .feed-likes { color: #ef4444; font-weight: 700; }
  .caption-pill {
    position: absolute;
    bottom: 16px;
    background: rgba(15, 10, 6, 0.9);
    border: 1px solid rgba(245, 158, 11, 0.5);
    color: #fde68a;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    z-index: 20;
  }
</style>
</head>
<body>
  <div class="pattern"></div>

  <div class="center-frame">
    <!-- LEFT: INSTAGRAM PROFILE -->
    <div class="profile-col">
      <div>
        <div class="insta-top">
          <div class="profile-avatar">
            <div class="profile-avatar-inner">🥖</div>
          </div>
          <div>
            <div class="profile-name">Roti Kencana Madiun</div>
            <div class="profile-badge">Bakery & Pastry Sejak 1998</div>
          </div>
        </div>

        <div class="profile-stats">
          <div><span class="stat-num">1.240</span> Kiriman</div>
          <div><span class="stat-num">18,6 rb</span> Pengikut</div>
          <div><span class="stat-num">340</span> Mengikuti</div>
        </div>

        <p class="profile-bio" style="margin-top:14px">
          🍞 <strong>Aroma Nostalgia Roti Hangat Fresh from the Oven</strong><br>
          ✨ Roti sobek jadul, kue basah, dan paket snack box rapat & hajatan.<br>
          📍 Jl. Pahlawan, Madiun • Buka 06.00 - 21.00 WIB<br>
          📲 <strong>Order WhatsApp: 0889-8964-3555</strong>
        </p>

        <div class="highlights">
          <div class="hl-item"><div class="hl-circle">⭐</div><span>Best Seller</span></div>
          <div class="hl-item"><div class="hl-circle">🥐</div><span>Menu Roti</span></div>
          <div class="hl-item"><div class="hl-circle">📦</div><span>Snack Box</span></div>
          <div class="hl-item"><div class="hl-circle">💬</div><span>Ulasan</span></div>
        </div>
      </div>

      <div class="palette-box">
        <div class="palette-title">Identitas Visual Instagram</div>
        <div class="palette-dots">
          <div class="p-dot" style="background:#451a03" title="Dark Roast"></div>
          <div class="p-dot" style="background:#b45309" title="Warm Amber"></div>
          <div class="p-dot" style="background:#f59e0b" title="Golden Crust"></div>
          <div class="p-dot" style="background:#fef3c7" title="Warm Cream"></div>
        </div>
      </div>
    </div>

    <!-- RIGHT: 6 AESTHETIC POSTS -->
    <div class="grid-col">
      <div class="grid-header">
        <div>
          <div class="grid-title">Desain Feed Instagram Terencana</div>
          <div class="grid-subtitle">Tema: Warm Classic Aesthetic • Kalender Konten Bulanan</div>
        </div>
        <span style="font-size:12px;color:#16a34a;font-weight:700">● 16 Konten / Bulan</span>
      </div>

      <div class="feed-grid">
        <!-- Post 1 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #b45309, #78350f)">
            <span class="feed-tag">BEST SELLER</span>
            <div class="feed-emoji">🍞</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">Roti Sobek Keju Cokelat</div>
              <div class="feed-post-desc">Resep klasik 1998 dengan taburan keju melimpah dan cokelat lumer.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 1.420 Suka</span>
              <span>💬 84 Komentar</span>
            </div>
          </div>
        </div>

        <!-- Post 2 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #d97706, #92400e)">
            <span class="feed-tag">BEHIND THE OVEN</span>
            <div class="feed-emoji">🔥</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">Proses Panggang Dapur Pagi</div>
              <div class="feed-post-desc">Dibuat dari ragi alami tanpa pengawet kimia, harum sejak jam 05.00 WIB.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 980 Suka</span>
              <span>💬 45 Komentar</span>
            </div>
          </div>
        </div>

        <!-- Post 3 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #f59e0b, #b45309)">
            <span class="feed-tag">SNACK BOX</span>
            <div class="feed-emoji">📦</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">Paket Acara & Pengajian</div>
              <div class="feed-post-desc">Kombinasi 3 kue pilihan dengan dus elegan untuk kantor & hajatan.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 860 Suka</span>
              <span>💬 62 Komentar</span>
            </div>
          </div>
        </div>

        <!-- Post 4 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #78350f, #451a03)">
            <span class="feed-tag">MENU NOSTALGIA</span>
            <div class="feed-emoji">🧈</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">Roti Sisir Mentega Spesial</div>
              <div class="feed-post-desc">Tekstur lembut berbalut butter aromatik khas bakery tempo dulu.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 1.150 Suka</span>
              <span>💬 78 Komentar</span>
            </div>
          </div>
        </div>

        <!-- Post 5 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #92400e, #78350f)">
            <span class="feed-tag">ULASAN KONSUMEN</span>
            <div class="feed-emoji">⭐</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">"Langganan Sejak SD!"</div>
              <div class="feed-post-desc">Cerita manis pelanggan setia yang selalu bawa oleh-oleh Roti Kencana.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 1.630 Suka</span>
              <span>💬 112 Komentar</span>
            </div>
          </div>
        </div>

        <!-- Post 6 -->
        <div class="feed-card">
          <div class="feed-card-header" style="background:linear-gradient(135deg, #b45309, #d97706)">
            <span class="feed-tag">JUMAT BERKAH</span>
            <div class="feed-emoji">🎁</div>
          </div>
          <div class="feed-card-body">
            <div>
              <div class="feed-post-title">Promo Berbagi Jumat</div>
              <div class="feed-post-desc">Beli 5 gratis 1 untuk varian roti manis setiap Jumat pagi.</div>
            </div>
            <div class="feed-post-footer">
              <span class="feed-likes">❤️ 2.100 Suka</span>
              <span>💬 195 Komentar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="caption-pill">
    Desain Konten Feed Instagram Estetik Aneka Kue dan Roti UMKM
  </div>
</body>
</html>`;

// ==========================================
// 4. SAMBAL BU NINIK MARKETPLACE
// Caption: "Display toples Sambal Bu Ninik Surabaya yang tertata rapi untuk toko online"
// ==========================================
const htmlSambal = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #3a1510 0%, #1c0a07 65%, #0a0403 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background: repeating-linear-gradient(90deg, rgba(239,68,68,0.04) 0px, rgba(239,68,68,0.04) 2px, transparent 2px, transparent 20px);
  }
  .glow {
    position: absolute;
    width: 800px;
    height: 400px;
    background: radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 60%);
    filter: blur(50px);
    top: 150px;
  }
  .showcase-card {
    position: relative;
    z-index: 10;
    width: 1080px;
    background: #ffffff;
    border-radius: 24px;
    padding: 36px 40px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.85);
  }
  .store-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #fee2e2;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .store-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .store-logo {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: #dc2626;
    color: #fff;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(220,38,38,0.3);
  }
  .store-name { font-size: 22px; font-weight: 800; color: #1e1e1e; }
  .store-sub { font-size: 13px; color: #6b7280; margin-top: 2px; }
  .store-badges {
    display: flex;
    gap: 10px;
  }
  .s-badge {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    font-size: 11px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 6px;
  }
  /* JAR PRODUCT LINEUP */
  .jar-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .jar-card {
    background: #fffafa;
    border: 1px solid #fee2e2;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    position: relative;
    transition: transform 0.2s;
  }
  .jar-tag {
    position: absolute;
    top: 14px;
    left: 14px;
    background: #dc2626;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 4px;
  }
  .jar-graphic {
    width: 180px;
    height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 16px;
  }
  /* Realistic Glass Jar SVG Simulation */
  .jar-svg {
    width: 140px;
    height: 190px;
    filter: drop-shadow(0 12px 20px rgba(185,28,28,0.25));
  }
  .jar-title { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .jar-desc { font-size: 11px; color: #6b7280; line-height: 1.4; margin-bottom: 12px; height: 32px; }
  .jar-price-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #fee2e2;
    padding-top: 12px;
  }
  .jar-price { font-size: 16px; font-weight: 800; color: #dc2626; }
  .jar-weight { font-size: 11px; color: #9ca3af; }
  .jar-btn {
    background: #16a34a;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 6px;
  }
  .store-footer {
    margin-top: 28px;
    background: #fff1f2;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #9f1239;
    font-weight: 600;
  }
  .caption-pill {
    position: absolute;
    bottom: 18px;
    background: rgba(20, 5, 5, 0.9);
    border: 1px solid rgba(239, 68, 68, 0.5);
    color: #fecaca;
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

  <div class="showcase-card">
    <div class="store-header">
      <div class="store-brand">
        <div class="store-logo">🌶️</div>
        <div>
          <div class="store-name">Sambal Bu Ninik Surabaya — Official Store</div>
          <div class="store-sub">Aneka Sambal Botol Khas Jawa Timur • 100% Cabai Segar Pilihan</div>
        </div>
      </div>
      <div class="store-badges">
        <span class="s-badge">⭐ 4.9 (4.8k Ulasan)</span>
        <span class="s-badge">P-IRT & Halal Kemenag</span>
        <span class="s-badge">Garansi Anti Pecah</span>
      </div>
    </div>

    <div class="jar-grid">
      <!-- Toples 1: Sambal Bawang -->
      <div class="jar-card">
        <span class="jar-tag">BEST SELLER</span>
        <div class="jar-graphic">
          <svg class="jar-svg" viewBox="0 0 140 190">
            <!-- Glass Jar Cap -->
            <rect x="35" y="10" width="70" height="20" rx="4" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
            <rect x="40" y="30" width="60" height="8" fill="#d97706"/>
            <!-- Glass Body -->
            <rect x="20" y="38" width="100" height="142" rx="14" fill="#991b1b" stroke="#f87171" stroke-width="2"/>
            <rect x="25" y="44" width="90" height="130" rx="10" fill="#b91c1c"/>
            <!-- Chili texture dots -->
            <circle cx="50" cy="80" r="4" fill="#ef4444"/>
            <circle cx="75" cy="95" r="5" fill="#fca5a5"/>
            <circle cx="90" cy="70" r="4" fill="#ef4444"/>
            <circle cx="60" cy="130" r="4" fill="#fef08a"/>
            <!-- Product Label -->
            <rect x="28" y="75" width="84" height="65" rx="6" fill="#fff" stroke="#fee2e2" stroke-width="1.5"/>
            <text x="70" y="93" font-size="10" font-weight="900" fill="#b91c1c" text-anchor="middle">BU NINIK</text>
            <text x="70" y="107" font-size="9" font-weight="800" fill="#111" text-anchor="middle">SAMBAL BAWANG</text>
            <text x="70" y="120" font-size="7" fill="#666" text-anchor="middle">Pedas Gurih Alami</text>
            <text x="70" y="132" font-size="7" font-weight="700" fill="#15803d" text-anchor="middle">Netto: 150 gr</text>
            <!-- Glass shine reflection -->
            <path d="M26 50 Q35 110 32 165" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="jar-title">Sambal Bawang Spesial</div>
        <div class="jar-desc">Racikan cabai rawit merah dan bawang goreng wangi gurih renyah.</div>
        <div class="jar-price-row">
          <div><span class="jar-price">Rp 28.000</span> <span class="jar-weight">/ toples</span></div>
          <div class="jar-btn">Lihat Produk</div>
        </div>
      </div>

      <!-- Toples 2: Sambal Cumi Asin -->
      <div class="jar-card">
        <span class="jar-tag" style="background:#ea580c">FAVORIT</span>
        <div class="jar-graphic">
          <svg class="jar-svg" viewBox="0 0 140 190">
            <!-- Glass Jar Cap -->
            <rect x="35" y="10" width="70" height="20" rx="4" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
            <rect x="40" y="30" width="60" height="8" fill="#c2410c"/>
            <!-- Glass Body -->
            <rect x="20" y="38" width="100" height="142" rx="14" fill="#7c2d12" stroke="#fb923c" stroke-width="2"/>
            <rect x="25" y="44" width="90" height="130" rx="10" fill="#9a3412"/>
            <!-- Squid pieces & chili -->
            <circle cx="55" cy="85" r="5" fill="#fdba74"/>
            <circle cx="85" cy="100" r="6" fill="#fed7aa"/>
            <circle cx="45" cy="135" r="5" fill="#ea580c"/>
            <!-- Product Label -->
            <rect x="28" y="75" width="84" height="65" rx="6" fill="#fff" stroke="#ffedd5" stroke-width="1.5"/>
            <text x="70" y="93" font-size="10" font-weight="900" fill="#c2410c" text-anchor="middle">BU NINIK</text>
            <text x="70" y="107" font-size="9" font-weight="800" fill="#111" text-anchor="middle">SAMBAL CUMI ASIN</text>
            <text x="70" y="120" font-size="7" fill="#666" text-anchor="middle">Potongan Cumi Melimpah</text>
            <text x="70" y="132" font-size="7" font-weight="700" fill="#15803d" text-anchor="middle">Netto: 150 gr</text>
            <!-- Glass shine -->
            <path d="M26 50 Q35 110 32 165" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="jar-title">Sambal Cumi Asin Juara</div>
        <div class="jar-desc">Potongan daging cumi asin kenyal berlimpah dalam balutan sambal pedas.</div>
        <div class="jar-price-row">
          <div><span class="jar-price">Rp 35.000</span> <span class="jar-weight">/ toples</span></div>
          <div class="jar-btn">Lihat Produk</div>
        </div>
      </div>

      <!-- Toples 3: Sambal Ikan Klotok -->
      <div class="jar-card">
        <span class="jar-tag" style="background:#15803d">KHAS JATIM</span>
        <div class="jar-graphic">
          <svg class="jar-svg" viewBox="0 0 140 190">
            <!-- Glass Jar Cap -->
            <rect x="35" y="10" width="70" height="20" rx="4" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
            <rect x="40" y="30" width="60" height="8" fill="#15803d"/>
            <!-- Glass Body -->
            <rect x="20" y="38" width="100" height="142" rx="14" fill="#713f12" stroke="#84cc16" stroke-width="2"/>
            <rect x="25" y="44" width="90" height="130" rx="10" fill="#854d0e"/>
            <!-- Texture -->
            <circle cx="60" cy="80" r="5" fill="#bef264"/>
            <circle cx="80" cy="105" r="5" fill="#facc15"/>
            <!-- Product Label -->
            <rect x="28" y="75" width="84" height="65" rx="6" fill="#fff" stroke="#fef08a" stroke-width="1.5"/>
            <text x="70" y="93" font-size="10" font-weight="900" fill="#15803d" text-anchor="middle">BU NINIK</text>
            <text x="70" y="107" font-size="9" font-weight="800" fill="#111" text-anchor="middle">SAMBAL IKAN KLOTOK</text>
            <text x="70" y="120" font-size="7" fill="#666" text-anchor="middle">Aroma Daun Jeruk Segar</text>
            <text x="70" y="132" font-size="7" font-weight="700" fill="#15803d" text-anchor="middle">Netto: 150 gr</text>
            <!-- Glass shine -->
            <path d="M26 50 Q35 110 32 165" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="jar-title">Sambal Ikan Klotok Gurih</div>
        <div class="jar-desc">Suwiran ikan asin klotok dengan rempah wangi daun jeruk khas Surabaya.</div>
        <div class="jar-price-row">
          <div><span class="jar-price">Rp 32.000</span> <span class="jar-weight">/ toples</span></div>
          <div class="jar-btn">Lihat Produk</div>
        </div>
      </div>
    </div>

    <div class="store-footer">
      <span>📦 Paket Bundling Hemat 3 Toples: Diskon 15% + Gratis Dus Kemasan Cantik Oleh-Oleh Surabaya</span>
      <span style="color:#15803d">✓ Siap Kirim Seluruh Indonesia</span>
    </div>
  </div>

  <div class="caption-pill">
    Display Toples Sambal Bu Ninik Surabaya yang Tertata Rapi untuk Toko Online
  </div>
</body>
</html>`;

// ==========================================
// 5. SNACK NUSANTARA LIVE COMMERCE
// Caption: "Suasana studio live commerce dengan host memperagakan produk keripik UMKM"
// ==========================================
const htmlSnack = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #1e1b4b 0%, #0f172a 60%, #020617 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .studio-ambient {
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px);
  }
  .studio-light-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%);
    filter: blur(60px);
    top: 50px;
    left: 150px;
  }
  .stage {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 40px;
    width: 1100px;
  }
  /* SMARTPHONE LIVE STREAMING SCREEN */
  .phone-mockup {
    width: 460px;
    height: 690px;
    background: #000;
    border-radius: 36px;
    padding: 12px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.85), inset 0 0 0 2px #334155;
    position: relative;
  }
  .phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    background: #0f172a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* Real background of live host holding keripik */
  .live-video-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
  }
  .live-video-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
  }
  .live-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.85) 100%);
    z-index: 2;
  }
  /* Live UI Top Bar */
  .live-top-bar {
    position: relative;
    z-index: 10;
    padding: 14px 14px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .host-pill {
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    padding: 4px 10px 4px 6px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
  }
  .host-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #f59e0b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .host-name { font-size: 11px; font-weight: 700; }
  .host-followers { font-size: 9px; color: #cbd5e1; }
  .live-status {
    background: #ef4444;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .live-viewers {
    background: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 12px;
  }
  /* Floating Comments */
  .chat-stream {
    position: relative;
    z-index: 10;
    padding: 0 14px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 320px;
  }
  .chat-bubble {
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(6px);
    padding: 5px 10px;
    border-radius: 12px;
    color: #fff;
    font-size: 11px;
    line-height: 1.3;
  }
  .chat-user { color: #facc15; font-weight: 700; margin-right: 4px; }
  /* Floating product card on bottom */
  .product-pin-card {
    position: relative;
    z-index: 10;
    margin: 0 14px 14px;
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  }
  .pin-badge {
    background: #eab308;
    color: #000;
    font-size: 9px;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .pin-img {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    object-fit: cover;
  }
  .pin-title { font-size: 11px; font-weight: 700; color: #111; line-height: 1.2; }
  .pin-price { font-size: 13px; font-weight: 800; color: #dc2626; margin-top: 2px; }
  .pin-buy-btn {
    background: #ef4444;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 8px 12px;
    border-radius: 6px;
    margin-left: auto;
    white-space: nowrap;
  }
  /* STUDIO SETTING SIDE CARD */
  .studio-info-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .studio-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 28px;
    color: #fff;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  }
  .studio-badge {
    display: inline-block;
    background: #f43f5e;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }
  .studio-title { font-size: 24px; font-weight: 800; color: #f8fafc; line-height: 1.25; margin-bottom: 8px; }
  .studio-desc { font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 20px; }
  .gear-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .gear-item {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 11px;
  }
  .gear-label { color: #f43f5e; font-weight: 700; margin-bottom: 2px; }
  .gear-val { color: #e2e8f0; font-weight: 500; }
  .caption-pill {
    position: absolute;
    bottom: 16px;
    background: rgba(10, 10, 25, 0.9);
    border: 1px solid rgba(244, 63, 94, 0.5);
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
  <div class="studio-ambient"></div>
  <div class="studio-light-glow"></div>

  <div class="stage">
    <!-- SMARTPHONE STREAMING SCREEN -->
    <div class="phone-mockup">
      <div class="phone-screen">
        <div class="live-video-bg">
          <img src="data:image/webp;base64,${snackPhotoBase64}" alt="Keripik Snack Nusantara" />
        </div>
        <div class="live-overlay"></div>

        <!-- Top Bar -->
        <div class="live-top-bar">
          <div class="host-pill">
            <div class="host-avatar">🎙️</div>
            <div>
              <div class="host-name">Snack Nusantara Live</div>
              <div class="host-followers">Keripik Khas Mojokerto</div>
            </div>
          </div>
          <div style="display:flex;gap:6px">
            <div class="live-status">🔴 LIVE</div>
            <div class="live-viewers">👥 2.4k</div>
          </div>
        </div>

        <!-- Bottom Comments & Pinned Product -->
        <div>
          <div class="chat-stream">
            <div class="chat-bubble"><span class="chat-user">Rina_Surabaya:</span> Varian singkong baladonya renyah banget kak! 😍</div>
            <div class="chat-bubble"><span class="chat-user">Budi_Malang:</span> Masih ada voucher diskon ongkirnya gak min?</div>
            <div class="chat-bubble"><span class="chat-user">Dian_K:</span> Sudah checkout keranjang kuning paket hemat ya kak! 🔥</div>
          </div>

          <div class="product-pin-card">
            <img class="pin-img" src="data:image/webp;base64,${snackPhotoBase64}" alt="Product Pin" />
            <div>
              <div class="pin-badge">KERANJANG KUNING #1</div>
              <div class="pin-title">Paket 3 Pouch Keripik Singkong & Tempe Sagu</div>
              <div class="pin-price">Rp 35.000 <span style="font-size:10px;color:#6b7280;text-decoration:line-through">Rp 45.000</span></div>
            </div>
            <div class="pin-buy-btn">Beli Sekarang</div>
          </div>
        </div>
      </div>
    </div>

    <!-- STUDIO SETUP & METRICS CARD -->
    <div class="studio-info-col">
      <div class="studio-card">
        <span class="studio-badge">STUDIO SETUP & PENDAMPINGAN LIVE COMMERCE</span>
        <h2 class="studio-title">Suasana Studio Siaran Langsung Toko Snack Nusantara</h2>
        <p class="studio-desc">
          Penataan pencahayaan studio mini 3 titik, mikrofon wireless peredam bising, rundown naskah interaksi 90 menit, serta display keranjang kuning untuk menggenjot konversi penjualan saat live streaming.
        </p>

        <div class="gear-list">
          <div class="gear-item">
            <div class="gear-label">Pencahayaan Studio</div>
            <div class="gear-val">Ring Light 18" + Softbox 3 Titik</div>
          </div>
          <div class="gear-item">
            <div class="gear-label">Mikrofon Audio</div>
            <div class="gear-val">Wireless Clip-on Suara Renyah ASMR</div>
          </div>
          <div class="gear-item">
            <div class="gear-label">Rundown Siaran</div>
            <div class="gear-val">Demo Makan, Flash Sale, Q&A</div>
          </div>
          <div class="gear-item">
            <div class="gear-label">Tingkat Konversi</div>
            <div class="gear-val">Kenaikan Checkout Keranjang 3.2x</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="caption-pill">
    Suasana Studio Live Commerce dengan Host Memperagakan Produk Keripik UMKM
  </div>
</body>
</html>`;

export async function generateRemainingPortfolio() {
  console.log('Rendering Madukara...');
  await renderHtmlToWebp(htmlMadukara, 'public/images/portfolio/madukara-iklan-digital.webp');

  console.log('Rendering Roti Kencana...');
  await renderHtmlToWebp(htmlRoti, 'public/images/portfolio/roti-kencana-media-sosial.webp');

  console.log('Rendering Sambal Bu Ninik...');
  await renderHtmlToWebp(htmlSambal, 'public/images/portfolio/sambal-bu-ninik-marketplace.webp');

  console.log('Rendering Snack Nusantara...');
  await renderHtmlToWebp(htmlSnack, 'public/images/portfolio/snack-nusantara-live-commerce.webp');

  console.log('ALL PORTFOLIO IMAGES COMPLETED!');
}

generateRemainingPortfolio();
