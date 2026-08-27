import Link from "next/link"
import type { WikiPage } from "@/lib/wiki-manifest"

export function DocsNavigation({
  prev,
  next,
}: {
  prev: WikiPage | null
  next: WikiPage | null
}) {
  if (!prev && !next) return null

  return (
    <div
      className="mt-12 grid grid-cols-2 gap-4 pt-6"
      style={{ borderTop: "1px solid var(--wire)" }}
    >
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="hover-wire group flex flex-col gap-1 rounded-lg p-4 transition-colors"
          style={{ border: "1px solid var(--wire)" }}
        >
          <span className="spec-label" style={{ color: "var(--muted)" }}>← Previous</span>
          <span className="text-sm font-medium transition-colors group-hover:text-[color:var(--accent)]" style={{ color: "var(--ink)" }}>
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="hover-wire group flex flex-col items-end gap-1 rounded-lg p-4 text-right transition-colors"
          style={{ border: "1px solid var(--wire)" }}
        >
          <span className="spec-label" style={{ color: "var(--muted)" }}>Next →</span>
          <span className="text-sm font-medium transition-colors group-hover:text-[color:var(--accent)]" style={{ color: "var(--ink)" }}>
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
