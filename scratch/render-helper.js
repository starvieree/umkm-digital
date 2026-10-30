import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCRATCH_DIR = path.resolve('scratch');
fs.mkdirSync(SCRATCH_DIR, { recursive: true });

export async function renderHtmlToWebp(htmlContent, outputFilePath, width = 1200, height = 800) {
  const tempHtml = path.join(SCRATCH_DIR, 'temp-render.html');
  const tempPng = path.join(SCRATCH_DIR, 'temp-render.png');
  
  fs.writeFileSync(tempHtml, htmlContent, 'utf8');
  const htmlUri = 'file:///' + tempHtml.replace(/\\/g, '/');
  
  execSync(`"${CHROME_PATH}" --headless --disable-gpu --screenshot="${tempPng}" --window-size=${width},${height} --hide-scrollbars "${htmlUri}"`);
  
  const targetDir = path.dirname(outputFilePath);
  fs.mkdirSync(targetDir, { recursive: true });
  
  await sharp(tempPng)
    .webp({ quality: 92 })
    .toFile(outputFilePath);
    
  console.log(`[DONE] Rendered: ${outputFilePath} (${fs.statSync(outputFilePath).size} bytes)`);
}
