import Link from "next/link"
import type { Metadata } from "next"
import { getWikiCategories } from "@/lib/wiki-manifest"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to install, configure, and master localPress — the local-compute WordPress media optimization CLI.",
}

const categoryCode: Record<string, string> = {
  Guides: "G",
  Reference: "R",
}

export default function DocsPage() {
  const categories = getWikiCategories()
  const totalPages = categories.reduce((n, c) => n + c.pages.length, 0)

  return (
    <div>
      {/* Header */}
      <header className="mb-16">
        <p className="spec-label mb-4">// the manual</p>
        <h1 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
          Read the docs<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "var(--body)" }}>
          Install, configure, and master localPress. Every page here is sourced from the GitHub
          Wiki and baked in at build time — no stale copies, no drift.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded px-4 py-2.5 text-xs font-medium transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            <span className="font-mono">$</span> Get started
          </Link>
          <a
            href="https://github.com/gfargo/localpress/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded px-4 py-2.5 text-xs transition-colors hover-wire"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            GitHub Wiki ↗
          </a>
        </div>

        {/* Spec strip */}
        <dl
          className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t pt-5 font-mono text-[0.6875rem] uppercase tracking-wider"
          style={{ borderColor: "var(--wire)", color: "var(--muted)" }}
        >
          <div className="flex items-center gap-2">
            <dt>Pages</dt>
            <dd style={{ color: "var(--dim)" }}>{String(totalPages).padStart(2, "0")}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>Sections</dt>
            <dd style={{ color: "var(--dim)" }}>{String(categories.length).padStart(2, "0")}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>Source</dt>
            <dd style={{ color: "var(--dim)" }}>GitHub Wiki</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>Sync</dt>
            <dd style={{ color: "var(--dim)" }}>On deploy</dd>
          </div>
        </dl>

        {/* Notation legend */}
        <div
          className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.6875rem]"
          style={{ color: "var(--muted)" }}
        >
          <span className="uppercase tracking-wider">Legend</span>
          {[
            { key: "§NN", desc: "section" },
            { key: "G.NN", desc: "guide" },
            { key: "R.NN", desc: "reference" },
          ].map(({ key, desc }) => (
            <span key={key} className="flex items-center gap-2">
              <span
                className="rounded px-1.5 py-0.5"
                style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
              >
                {key}
              </span>
              <span style={{ color: "var(--dim)" }}>{desc}</span>
            </span>
          ))}
        </div>
      </header>

      {/* Category index — technical manual TOC */}
      <div className="space-y-12">
        {categories.map(({ name, pages }, ci) => {
          const code = categoryCode[name] ?? name.charAt(0)
          return (
            <section key={name}>
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  §{String(ci + 1).padStart(2, "0")}
                </span>
                <h2 className="spec-label" style={{ color: "var(--dim)" }}>
                  {name}
                </h2>
                <span className="rule flex-1" aria-hidden="true" />
                <span className="font-mono text-[0.6875rem]" style={{ color: "var(--muted)" }}>
                  {String(pages.length).padStart(2, "0")}
                </span>
              </div>

              <ul style={{ borderTop: "1px solid var(--wire)" }}>
                {pages.map((page, pi) => (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      className="hover-raised group flex items-start gap-4 px-3 py-4"
                      style={{ borderBottom: "1px solid var(--wire)" }}
                    >
                      <span
                        className="mt-0.5 font-mono text-xs tabular-nums"
                        style={{ color: "var(--muted)" }}
                      >
                        {code}.{String(pi + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-sm font-medium"
                          style={{ color: "var(--ink)" }}
                        >
                          {page.title}
                        </span>
                        <span
                          className="mt-1 block text-xs leading-relaxed"
                          style={{ color: "var(--body)" }}
                        >
                          {page.description}
                        </span>
                      </span>
                      <span
                        className="mt-0.5 shrink-0 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: "var(--accent)" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      {/* Agent callout — or don't read them at all */}
      <aside
        className="mt-14 overflow-hidden rounded-lg"
        style={{ border: "1px solid var(--accent-mid)", background: "var(--accent-subtle)" }}
      >
        <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="min-w-0">
            <p className="spec-label mb-3" style={{ color: "var(--accent)" }}>
              // or don&apos;t read them at all
            </p>
            <h2 className="font-display text-xl md:text-2xl" style={{ color: "var(--ink)" }}>
              Let your agent read the docs for you.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--body)" }}>
              localPress ships a first-party MCP server — 52 typed tools and 4 resources. Point
              Claude Desktop, Cursor, or Kiro at it and let the model run the commands, read the
              reference, and optimize your library while you do something else.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
              <Link href="/docs/mcp-setup" className="hover-ink" style={{ color: "var(--accent)" }}>
                MCP Setup →
              </Link>
              <Link href="/docs/ai-agent-integration" className="hover-ink" style={{ color: "var(--accent)" }}>
                Agent Integration →
              </Link>
              <Link href="/#agents" className="hover-ink" style={{ color: "var(--dim)" }}>
                See it in action ↗
              </Link>
            </div>
          </div>

          {/* Config snippet */}
          <pre
            className="shrink-0 overflow-x-auto rounded-md p-4 font-mono text-[0.6875rem] leading-relaxed md:max-w-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--wire)", color: "var(--body)" }}
          >
            <code>{`"localpress": {
  "command": "npx",
  "args": ["localpress", "mcp"]
}`}</code>
          </pre>
        </div>
      </aside>

      {/* Resources */}
      <div className="mt-14 border-t pt-8" style={{ borderColor: "var(--wire)" }}>
        <p className="spec-label mb-4">// more resources</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {[
            { href: "https://github.com/gfargo/localpress", label: "Repository" },
            { href: "https://github.com/gfargo/localpress/issues", label: "Issues" },
            { href: "https://github.com/gfargo/localpress/releases", label: "Releases" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-ink"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
