# localpress Marketing Website

> "Your laptop, your library."

Marketing website for localpress — a CLI tool that processes WordPress media on the user's local machine and syncs results back via REST API.

**Live site:** [localpress.griffen.codes](https://localpress.griffen.codes)  
**Repo:** `gfargo/localpress-www` (checked out at `.www/` in the main project)

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body), Fira Code (monospace)
- **Deployment:** Static export (compatible with GitHub Pages, Vercel, etc.)

## Development

```bash
cd .www
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
```

Outputs to `.www/out/` as static HTML files.

## Current Implementation Status

✅ **Implemented:**
- Hero section with headline, subhead, CTA buttons
- Features section (4 differentiator pillars)
- Commands overview (15 CLI commands across 5 categories)
- Audit deep-dive (7 audit checks with examples)
- Install section (Homebrew, binary download, source)
- Documentation page (pulls from GitHub Wiki)
- Responsive layout with dark mode
- Proper meta tags for SEO

✅ **Implemented from outline:**
- Hero section with headline, subhead, CTA buttons
- Features section (4 differentiator pillars)
- Commands overview (15 CLI commands across 5 categories)
- Audit deep-dive (7 audit checks with examples)
- Comparison table vs competitors (EWWW, ShortPixel, Smush, Imagify)
- AI Agent Integration section (skill + MCP composition)
- Install section (Homebrew, binary download, source)
- Documentation page (pulls from GitHub Wiki)
- Responsive layout with dark mode
- Proper meta tags for SEO

❌ **Missing from outline:**
- Terminal recording visuals (asciinema/GIF demos)
- Content assets (Open Graph image, comparison graphic)

🛠 **Technical debt:**
- Multiple lockfiles warning (root vs `.www/bun.lock`)
- TypeScript errors ignored during build
- Image optimization disabled (needs CDN for production)

## Project Structure

```
.www/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Homepage (Hero → Features → Commands → Audit → Comparison → Install)
│   └── docs/
│       └── page.tsx       # Documentation page (pulls from GitHub Wiki)
├── components/            # React components
│   ├── Hero.tsx          # Landing hero with CTA
│   ├── Features.tsx      # 4 differentiator pillars
│   ├── Commands.tsx     # CLI command categories
│   ├── Audit.tsx        # Audit checks with examples
│   ├── Comparison.tsx   # [TODO] Competitor comparison
│   ├── Install.tsx      # Installation methods
│   ├── Header.tsx       # Site header
│   └── Footer.tsx       # Site footer
├── lib/
│   └── wiki.ts          # GitHub Wiki API client
└── public/              # Static assets
```

## Design Notes

- **Tone:** Technical but approachable, developer-focused
- **Color palette:** Terminal-inspired (dark background, green/cyan accents)
- **Typography:** Monospace for code, clean sans-serif for body
- **No signup/email capture:** Open-source tool, CTA is "install it"

## Next Steps (Roadmap)

### Priority 1: Complete missing outline sections
1. **Create terminal recordings** — asciinema demos of audit → optimize → verify workflow
2. **Create content assets** — Open Graph image, favicon, comparison graphic
3. **Test wiki integration** — Verify docs page pulls from updated GitHub Wiki

### Priority 2: Technical improvements
1. **Fix lockfile warning** — remove root `bun.lock` or set `turbopack.root`
2. **Enable image optimization** — configure Next.js Image component with CDN
3. **Fix TypeScript strictness** — resolve errors instead of ignoring
4. **Add analytics** — Plausible/Umami for traffic insights

### Priority 3: Content & polish
1. **Create Open Graph image** — 1200×630 with tagline + terminal screenshot
2. **Add favicon** — terminal prompt icon
3. **Improve docs page** — better content organization
4. **Add blog/updates section** — for release announcements

## Deployment

The site is configured for static export (`output: "export"` in `next.config.ts`). Deploy to:

- **Vercel:** `vercel deploy --prod`
- **GitHub Pages:** Push to `gh-pages` branch
- **Netlify:** `netlify deploy --prod`
- **Any static host:** Serve `out/` directory
