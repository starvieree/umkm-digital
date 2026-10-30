import fs from 'fs';
import path from 'path';
import { renderHtmlToWebp } from './render-helper.js';

// Read existing image assets to embed as base64 where helpful
const coffeePhotoBase64 = fs.readFileSync('public/images/portfolio/kopi-sambang-website.webp').toString('base64');
const honeyPhotoBase64 = fs.readFileSync('public/images/portfolio/madukara-iklan-digital.webp').toString('base64');
const sambalPhotoBase64 = fs.readFileSync('public/images/portfolio/sambal-bu-ninik-marketplace.webp').toString('base64');
const snackPhotoBase64 = fs.readFileSync('public/images/portfolio/snack-nusantara-live-commerce.webp').toString('base64');

// 1. KOPI SAMBANG WEBSITE
const htmlKopi = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px;
    height: 800px;
    background: radial-gradient(circle at 50% 30%, #2a1f18 0%, #15100c 70%, #0a0806 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  /* Wooden desk surface effect */
  .desk-texture {
    position: absolute;
    inset: 0;
    opacity: 0.25;
    background-image: repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px);
  }
  .ambient-glow {
    position: absolute;
    width: 800px;
    height: 500px;
    top: 50px;
    background: radial-gradient(circle, rgba(217, 119, 6, 0.18) 0%, transparent 65%);
    filter: blur(40px);
  }
  /* Laptop Mockup */
  .laptop {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0 35px 50px rgba(0,0,0,0.85));
  }
  .laptop-screen-frame {
    width: 980px;
    height: 615px;
    background: #111417;
    border-radius: 20px 20px 4px 4px;
    padding: 16px 16px 22px 16px;
    box-shadow: inset 0 0 0 2px #2d333b, 0 4px 20px rgba(0,0,0,0.6);
    position: relative;
  }
  .laptop-cam {
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #1e293b;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(255,255,255,0.2);
  }
  .screen-content {
    width: 100%;
    height: 100%;
    background: #faf7f2;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
  }
  /* Browser Chrome */
  .browser-bar {
    height: 38px;
    background: #ebe6df;
    border-bottom: 1px solid #ddd5cb;
    display: flex;
    align-items: center;
    padding: 0 14px;
    gap: 12px;
  }
  .browser-dots { display: flex; gap: 6px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .url-bar {
    flex: 1;
    max-width: 520px;
    margin: 0 auto;
    height: 24px;
    background: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 11px;
    color: #4b5563;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  }
  .url-lock { color: #16a34a; margin-right: 6px; font-size: 10px; }
  /* Website Content */
  .web-nav {
    height: 52px;
    background: #231b15;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 2px solid #b45309;
  }
  .web-logo {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fef3c7;
  }
  .web-links {
    display: flex;
    gap: 20px;
    font-size: 12px;
    color: #d1d5db;
    font-weight: 500;
  }
  .web-btn {
    background: #16a34a;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 4px;
  }
  .web-hero {
    flex: 1;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    padding: 24px 28px;
    gap: 24px;
    background: #faf7f2;
    align-items: center;
  }
  .hero-tag {
    display: inline-block;
    background: #fef3c7;
    color: #92400e;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 4px;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  .hero-title {
    font-size: 27px;
    line-height: 1.25;
    color: #231b15;
    font-weight: 800;
    margin-bottom: 8px;
  }
  .hero-desc {
    font-size: 12px;
    line-height: 1.5;
    color: #57534e;
    margin-bottom: 16px;
  }
  .product-row {
    display: flex;
    gap: 12px;
  }
  .prod-card {
    background: #fff;
    border: 1px solid #e7e2d9;
    border-radius: 8px;
    padding: 10px;
    flex: 1;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  }
  .prod-badge {
    font-size: 9px;
    background: #d97706;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 600;
  }
  .prod-name { font-size: 12px; font-weight: 700; color: #292524; margin: 4px 0 2px; }
  .prod-notes { font-size: 10px; color: #78716c; margin-bottom: 6px; }
  .prod-price { font-size: 12px; font-weight: 800; color: #b45309; }
  .hero-img-box {
    width: 100%;
    height: 100%;
    max-height: 420px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    border: 3px solid #fff;
  }
  .hero-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-overlay-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(35, 27, 21, 0.88);
    backdrop-filter: blur(4px);
    color: #fef3c7;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 600;
  }
  /* Laptop Base & Keyboard Edge */
  .laptop-base {
    width: 1140px;
    height: 20px;
    background: linear-gradient(180deg, #d8dee4 0%, #a2aab3 60%, #767e87 100%);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.6);
    position: relative;
  }
  .laptop-notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 7px;
    background: #646c75;
    border-radius: 0 0 8px 8px;
  }
  .caption-badge {
    position: absolute;
    bottom: 18px;
    background: rgba(15, 10, 7, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(217, 119, 6, 0.4);
    color: #fde68a;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    letter-spacing: 0.3px;
  }
</style>
</head>
<body>
  <div class="desk-texture"></div>
  <div class="ambient-glow"></div>

  <div class="laptop">
    <div class="laptop-screen-frame">
      <div class="laptop-cam"></div>
      <div class="screen-content">
        <!-- Browser Bar -->
        <div class="browser-bar">
          <div class="browser-dots">
            <div class="dot dot-red"></div>
            <div class="dot dot-yellow"></div>
            <div class="dot dot-green"></div>
          </div>
          <div class="url-bar">
            <span class="url-lock">🔒</span>
            <span>https://kopisambang.id</span>
          </div>
        </div>
        <!-- Website Navigation -->
        <div class="web-nav">
          <div class="web-logo">
            <span>☕</span>
            <span>KOPI SAMBANG MALANG</span>
          </div>
          <div class="web-links">
            <span>Biji Kopi</span>
            <span>Profil Rasa</span>
            <span>Tentang Roastery</span>
            <span>Pemberdayaan Petani</span>
          </div>
          <div class="web-btn">Pesan via WhatsApp</div>
        </div>
        <!-- Website Body -->
        <div class="web-hero">
          <div>
            <span class="hero-tag">Specialty Micro-Roastery Malang</span>
            <h1 class="hero-title">Biji Kopi Pilihan Lereng Dampit & Arjuno</h1>
            <p class="hero-desc">
              Menghadirkan karakter rasa autentik tanah Jawa Timur dengan pemanggangan presisi segar setiap minggu. Langsung dari kebun petani ke cangkir Anda.
            </p>
            <div class="product-row">
              <div class="prod-card">
                <span class="prod-badge">Medium Roast</span>
                <div class="prod-name">Arjuno Arabica Natural</div>
                <div class="prod-notes">Tasting: Jasmine, Citrus, Brown Sugar</div>
                <div class="prod-price">Rp 85.000 / 250gr</div>
              </div>
              <div class="prod-card">
                <span class="prod-badge">Dark Roast</span>
                <div class="prod-name">Dampit Robusta Gold</div>
                <div class="prod-notes">Tasting: Dark Chocolate, Roasted Hazelnut</div>
                <div class="prod-price">Rp 55.000 / 250gr</div>
              </div>
            </div>
          </div>
          <div class="hero-img-box">
            <img src="data:image/webp;base64,${coffeePhotoBase64}" alt="Fresh Roast Coffee Beans" />
            <div class="img-overlay-tag">Batch Roasting Segar • 100% Petani Jawa Timur</div>
          </div>
        </div>
      </div>
    </div>
    <div class="laptop-base">
      <div class="laptop-notch"></div>
    </div>
  </div>

  <div class="caption-badge">
    Website Resmi & Katalog Online Kopi Sambang Malang
  </div>
</body>
</html>`;

export async function generateKopiSambang() {
  await renderHtmlToWebp(htmlKopi, 'public/images/portfolio/kopi-sambang-website.webp');
}

generateKopiSambang();
