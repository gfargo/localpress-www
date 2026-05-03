/**
 * Generate favicon and icon assets from the SVG source.
 * Run: bun .www/scripts/generate-favicons.ts
 */

import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dir, '..');
const svg = readFileSync(join(root, 'public/favicon.svg'));

async function main() {
  // 32x32 PNG favicon for app directory
  await sharp(svg).resize(32, 32).png().toFile(join(root, 'app/favicon.png'));
  console.log('✓ app/favicon.png (32x32)');

  // Apple touch icon
  await sharp(svg).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));
  console.log('✓ public/apple-touch-icon.png (180x180)');

  // PWA icons
  await sharp(svg).resize(192, 192).png().toFile(join(root, 'public/icon-192.png'));
  console.log('✓ public/icon-192.png (192x192)');

  await sharp(svg).resize(512, 512).png().toFile(join(root, 'public/icon-512.png'));
  console.log('✓ public/icon-512.png (512x512)');

  console.log('\nDone. SVG favicon is used directly by modern browsers.');
  console.log('For .ico support, the PNG favicon in app/ covers legacy browsers via Next.js.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
