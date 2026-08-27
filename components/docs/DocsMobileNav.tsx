"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { WikiCategory } from "@/lib/wiki-manifest"
import { openDocsSearch } from "@/components/docs/DocsSearch"

export function DocsMobileNav({ categories }: { categories: WikiCategory[] }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const currentPage = categories
    .flatMap((c) => c.pages)
    .find((p) => pathname === `/docs/${p.slug}`)

  return (
    <div
      className="lg:hidden"
      style={{ borderBottom: "1px solid var(--wire)" }}
    >
      <div className="flex items-stretch" style={{ background: "var(--raised)" }}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-1 items-center justify-between px-4 py-3 text-xs"
          style={{ color: "var(--body)" }}
          aria-expanded={open}
          aria-controls="mobile-docs-nav"
        >
          <span className="flex items-center gap-2">
            <span className="font-mono text-[0.6875rem]" style={{ color: "var(--accent)" }}>
              §
            </span>
            <span className="font-medium" style={{ color: "var(--ink)" }}>
              {currentPage ? currentPage.title : "Documentation"}
            </span>
          </span>
          <svg
            className="h-4 w-4 shrink-0 transition-transform"
            style={{
              color: "var(--muted)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={openDocsSearch}
          aria-label="Search docs"
          className="flex items-center justify-center px-4"
          style={{ color: "var(--body)", borderLeft: "1px solid var(--wire)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-docs-nav"
          aria-label="Documentation navigation"
          style={{ background: "var(--surface)" }}
        >
          <div className="px-4 py-3">
            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="spec-label mb-4 block hover-ink"
            >
              ← index
            </Link>
            {categories.map(({ name, pages }) => (
              <div key={name} className="mb-5">
                <div className="mb-1.5 flex items-center gap-2 px-2">
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
                          onClick={() => setOpen(false)}
                          className="block rounded px-2 py-1.5 text-xs transition-colors"
                          style={{
                            color: isActive ? "var(--accent)" : "var(--body)",
                            background: isActive
                              ? "var(--accent-subtle)"
                              : "transparent",
                            borderLeft: isActive
                              ? "2px solid var(--accent)"
                              : "2px solid transparent",
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
          </div>
        </nav>
      )}
    </div>
  )
}
