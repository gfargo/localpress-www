/**
 * Generate the Open Graph image (1200×630) for social sharing.
 * Run: bun .www/scripts/generate-og-image.ts
 *
 * Uses sharp to composite text onto a dark background that matches
 * the site's visual identity. Keeps the tagline in code so it
 * stays in sync with the rest of the site.
 */

import sharp from 'sharp';
import { join } from 'node:path';

const root = join(import.meta.dir, '..');
const WIDTH = 1200;
const HEIGHT = 630;

async function main() {
  // Build the image as an SVG overlay rendered by sharp.
  // sharp can render a subset of SVG — enough for text + shapes.
  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#00e599" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#00e599" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="14" cy="14" r="1" fill="#252525" opacity="0.35"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#060606"/>

  <!-- Dot grid -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)"/>

  <!-- Accent glow -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Version badge -->
  <circle cx="88" cy="188" r="4" fill="#00e599"/>
  <text x="102" y="193" font-family="SF Mono, Menlo, Consolas, monospace" font-size="15" fill="#5a5a5a">
    v1.3.1 · MIT · macOS / Linux / Windows
  </text>

  <!-- Title line 1 -->
  <text x="80" y="290" font-family="Georgia, Times New Roman, serif" font-size="78" font-weight="600" font-style="italic" fill="#f0ece3" letter-spacing="-1">
    Local-first
  </text>

  <!-- Title line 2 -->
  <text x="80" y="375" font-family="Georgia, Times New Roman, serif" font-size="78" font-weight="600" font-style="italic" fill="#00e599" letter-spacing="-1">
    WordPress tooling.
  </text>

  <!-- Subtitle -->
  <text x="80" y="430" font-family="SF Mono, Menlo, Consolas, monospace" font-size="18" fill="#8a8580">
    Compress, convert, remove backgrounds, and round-trip with your
  </text>
  <text x="80" y="455" font-family="SF Mono, Menlo, Consolas, monospace" font-size="18" fill="#8a8580">
    real editor — then sync back to WordPress.
  </text>

  <!-- Bottom brand -->
  <text x="80" y="580" font-family="SF Mono, Menlo, Consolas, monospace" font-size="18" fill="#f0ece3">
    localPress
  </text>
  <circle cx="192" cy="576" r="2.5" fill="#3a3a3a"/>
  <text x="206" y="580" font-family="SF Mono, Menlo, Consolas, monospace" font-size="18" fill="#5a5a5a">
    github.com/gfargo/localpress
  </text>
</svg>`;

  await sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .png()
    .toFile(join(root, 'public/og-image.png'));

  console.log('✓ public/og-image.png (1200×630)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
