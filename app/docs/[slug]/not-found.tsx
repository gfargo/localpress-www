import Link from "next/link"
import { getWikiCategories } from "@/lib/wiki-manifest"

export default function DocNotFound() {
  const categories = getWikiCategories()

  return (
    <article>
      <div className="mb-10" style={{ borderBottom: "1px solid var(--wire)", paddingBottom: "2rem" }}>
        <p className="spec-label mb-4" style={{ color: "var(--accent)" }}>
          // error 404 / page not found
        </p>
        <h1 className="font-display text-4xl md:text-5xl mb-3" style={{ color: "var(--ink)" }}>
          No such page.
        </h1>
        <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--body)" }}>
          That doc doesn&apos;t exist in the manual. It may have been renamed or moved to the{" "}
          <Link
            href="https://github.com/gfargo/localpress/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            GitHub Wiki
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
          <Link href="/docs" className="hover-ink" style={{ color: "var(--accent)" }}>
            ← Back to index
          </Link>
          <Link href="/" className="hover-ink" style={{ color: "var(--dim)" }}>
            Home
          </Link>
        </div>
      </div>

      {/* Suggest the full manual so a dead link is still a jumping-off point */}
      <p className="spec-label mb-4" style={{ color: "var(--muted)" }}>
        Browse the manual
      </p>
      <div className="grid gap-px overflow-hidden rounded-lg" style={{ background: "var(--wire)" }}>
        {categories.flatMap((cat) =>
          cat.pages.map((page) => (
            <Link
              key={page.slug}
              href={`/docs/${page.slug}`}
              className="group flex items-center gap-4 p-4 transition-colors"
              style={{ background: "var(--bg)" }}
            >
              <span
                className="font-mono text-[0.625rem] uppercase tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                {cat.name === "Guides" ? "G" : "R"}.{String(page.order).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block text-sm font-medium transition-colors group-hover:text-[color:var(--accent)]"
                  style={{ color: "var(--ink)" }}
                >
                  {page.title}
                </span>
                <span className="block truncate text-xs" style={{ color: "var(--muted)" }}>
                  {page.description}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="font-mono opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
            </Link>
          )),
        )}
      </div>
    </article>
  )
}
