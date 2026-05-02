# localpress Marketing Website

> "Your laptop, your library."

Marketing and documentation website for localpress — a CLI tool that processes WordPress media locally and syncs back via REST API.

**Live site:** [localpress.griffen.codes](https://localpress.griffen.codes)  
**Repo:** `gfargo/localpress-www` (checked out at `.www/` in the main project)

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router, static export)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Markdown:** react-markdown v10 + remark-gfm
- **Analytics:** Vercel Analytics
- **Fonts:** Inter (body), Fira Code (monospace)
- **Deployment:** Vercel (static export, `out/` directory)

## Development

```bash
cd .www
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). In dev mode, the `/docs` pages read wiki content from the local `../.wiki/` directory.

## Build

```bash
bun run build
```

Outputs to `.www/out/` as static HTML. At build time, the docs pages fetch wiki content from GitHub raw URLs (or `../.wiki/` in dev).

## Wiki Integration

Documentation is sourced from the [GitHub Wiki](https://github.com/gfargo/localpress/wiki) and baked into the static export at build time.

### How it works

- **Dev:** `lib/wiki.ts` reads `.wiki/*.md` files from the local wiki checkout
- **Build:** Fetches from `https://raw.githubusercontent.com/wiki/gfargo/localpress/{Page}.md`
- **Token:** Set `GITHUB_TOKEN` as a Vercel env var to avoid rate limits (not required for public repos, but recommended for CI)

### Pages (defined in `lib/wiki-manifest.ts`)

| Slug | Wiki Page | Category |
|------|-----------|----------|
| `getting-started` | Getting-Started.md | Guides |
| `ai-agent-integration` | AI-Agent-Integration.md | Guides |
| `commands-reference` | Commands-Reference.md | Reference |
| `configuration` | Configuration.md | Reference |

To add a page: push it to the wiki, then add an entry to `lib/wiki-manifest.ts` and redeploy.

### Keeping docs fresh

A GitHub Actions workflow (`.github/workflows/rebuild-on-wiki.yml`) triggers a Vercel rebuild whenever the wiki changes. To activate:

1. Create a **Deploy Hook** in Vercel → Project → Settings → Git → Deploy Hooks
2. Add it as `VERCEL_DEPLOY_HOOK` in the **main repo**'s GitHub secrets (Settings → Secrets → Actions)

## Project Structure

```
.www/
├── app/
│   ├── layout.tsx          # Root layout with metadata + Vercel Analytics
│   ├── page.tsx            # Homepage (Hero → Features → Commands → Audit → Comparison → Skill → Install)
│   ├── sitemap.ts          # Dynamic sitemap (/ + /docs + all doc slugs)
│   ├── robots.txt          # Crawl rules
│   └── docs/
│       ├── layout.tsx      # Docs shell with sticky sidebar
│       ├── page.tsx        # /docs index — category grid + resources
│       └── [slug]/
│           └── page.tsx    # Individual doc page (generateStaticParams)
├── components/
│   ├── Header.tsx, Footer.tsx, Hero.tsx, Features.tsx, ...
│   └── docs/
│       ├── DocsContent.tsx     # react-markdown renderer (Server Component)
│       ├── DocsSidebar.tsx     # Sticky sidebar nav (Client Component — needs usePathname)
│       └── DocsNavigation.tsx  # Prev/Next page links
├── lib/
│   ├── wiki-manifest.ts    # Page registry, categories, helper functions
│   └── wiki.ts             # Content fetcher (local dev / GitHub raw)
└── public/                 # Static assets
```

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GITHUB_TOKEN` | Optional | Authenticates GitHub raw content fetches at build time (avoids 60 req/hr rate limit) |

Set in Vercel: Project → Settings → Environment Variables → `GITHUB_TOKEN` → Production + Preview.

## Deployment

```bash
# Preview
vercel

# Production
vercel --prod
```

The site deploys as a static export. No server runtime needed.

## What's missing

- Terminal recording visuals (asciinema/GIF demos)
- Open Graph image (`/public/og-image.png`)
- Mobile sidebar drawer for docs (currently hidden on small screens)
