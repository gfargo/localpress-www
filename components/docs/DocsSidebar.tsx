"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { WikiCategory } from "@/lib/wiki-manifest"
import { openDocsSearch } from "@/components/docs/DocsSearch"

export function DocsSidebar({ categories }: { categories: WikiCategory[] }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Documentation navigation">
      <button
        type="button"
        onClick={openDocsSearch}
        className="mb-5 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition-colors hover-wire"
        style={{ border: "1px solid var(--wire)", background: "var(--surface)", color: "var(--muted)" }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="flex-1">Search docs...</span>
        <kbd
          className="rounded px-1.5 py-0.5 font-mono text-[0.625rem]"
          style={{ background: "var(--raised)", border: "1px solid var(--wire)", color: "var(--dim)" }}
        >
          ⌘K
        </kbd>
      </button>
      <div className="mb-6 flex items-center gap-2">
        <Link href="/docs" className="spec-label hover-ink">
          ← index
        </Link>
      </div>
      {categories.map(({ name, pages }) => (
        <div key={name} className="mb-7">
          <div className="mb-2.5 flex items-center gap-2 px-2">
            <span className="spec-label" style={{ color: "var(--muted)" }}>
              {name}
            </span>
            <span className="rule flex-1" aria-hidden="true" />
          </div>
          <ul className="space-y-0.5">
            {pages.map((page) => {
              const isActive = pathname === `/docs/${page.slug}`
              return (
                <li key={page.slug}>
                  <Link
                    href={`/docs/${page.slug}`}
                    className="block rounded py-1.5 pl-3 pr-2 text-xs leading-snug transition-colors"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--body)",
                      background: isActive ? "var(--accent-subtle)" : "transparent",
                      borderLeft: isActive
                        ? "2px solid var(--accent)"
                        : "2px solid var(--wire)",
                    }}
                  >
                    {page.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
