import Link from "next/link"
import type { Metadata } from "next"
import { getWikiCategories } from "@/lib/wiki-manifest"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to install, configure, and master localPress — the local-compute WordPress media optimization CLI.",
}

export default function DocsPage() {
  const categories = getWikiCategories()

  return (
    <div>
      <div className="mb-12">
        <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
          Documentation
        </p>
        <h1 className="font-display text-4xl font-semibold italic mb-4" style={{ color: "var(--ink)" }}>
          Everything you need
        </h1>
        <p className="max-w-lg text-sm leading-relaxed" style={{ color: "var(--body)" }}>
          Install, configure, and master localPress. Content is sourced from the GitHub Wiki and
          baked in at build time.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center rounded px-4 py-2 text-xs font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "#040404" }}
          >
            Get started →
          </Link>
          <a
            href="https://github.com/gfargo/localpress/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded px-4 py-2 text-xs transition-opacity hover:opacity-75"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            View on GitHub Wiki ↗
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map(({ name, pages }) => (
          <div
            key={name}
            className="overflow-hidden rounded-lg"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="px-4 py-2.5 text-xs uppercase tracking-widest"
              style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)", color: "var(--dim)" }}
            >
              {name}
            </div>
            <div className="divide-y" style={{ borderColor: "var(--wire)" }}>
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/docs/${page.slug}`}
                  className="hover-raised group flex flex-col gap-0.5 px-4 py-3"
                  style={{ background: "var(--surface)" }}
                >
                  <span className="text-sm font-medium transition-colors" style={{ color: "var(--ink)" }}>
                    {page.title}
                  </span>
                  <span className="text-xs" style={{ color: "var(--body)" }}>
                    {page.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--wire)" }}>
        <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>More resources</p>
        <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--dim)" }}>
          {[
            { href: "https://github.com/gfargo/localpress", label: "GitHub repository ↗" },
            { href: "https://github.com/gfargo/localpress/issues", label: "Open an issue ↗" },
            { href: "https://github.com/gfargo/localpress/releases", label: "Releases ↗" },
          ].map(({ href, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:var(--ink)]">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
