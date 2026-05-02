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
      className="mt-12 pt-6 flex justify-between gap-4"
      style={{ borderTop: "1px solid var(--wire)" }}
    >
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="group flex flex-col gap-0.5 text-xs max-w-xs">
          <span className="uppercase tracking-widest" style={{ color: "var(--muted)" }}>← Previous</span>
          <span className="text-sm font-medium transition-opacity group-hover:opacity-75" style={{ color: "var(--ink)" }}>
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="group flex flex-col gap-0.5 text-xs text-right max-w-xs">
          <span className="uppercase tracking-widest" style={{ color: "var(--muted)" }}>Next →</span>
          <span className="text-sm font-medium transition-opacity group-hover:opacity-75" style={{ color: "var(--ink)" }}>
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
