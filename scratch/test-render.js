import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

fs.mkdirSync('scratch', { recursive: true });
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; width: 1200px; height: 800px; display: flex; align-items: center; justify-content: center; background: #0f172a; color: white; font-family: sans-serif; }
  h1 { font-size: 48px; color: #f59e0b; }
</style>
</head>
<body>
  <h1>Test Render WebP</h1>
</body>
</html>`;

fs.writeFileSync('scratch/test.html', html);
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlUri = 'file:///' + path.resolve('scratch/test.html').replace(/\\/g, '/');
const pngOut = path.resolve('scratch/test.png');

execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${pngOut}" --window-size=1200,800 --hide-scrollbars "${htmlUri}"`);

await sharp(pngOut)
  .webp({ quality: 90 })
  .toFile('scratch/test.webp');

console.log('SUCCESS! Created scratch/test.webp, size:', fs.statSync('scratch/test.webp').size);
