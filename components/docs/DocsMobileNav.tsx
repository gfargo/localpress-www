"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { WikiCategory } from "@/lib/wiki-manifest"

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
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-xs"
        style={{ background: "var(--raised)", color: "var(--body)" }}
        aria-expanded={open}
        aria-controls="mobile-docs-nav"
      >
        <span style={{ color: "var(--dim)" }}>
          {currentPage ? currentPage.title : "Documentation"}
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
              className="mb-4 block text-xs uppercase tracking-widest transition-opacity hover:opacity-75"
              style={{ color: "var(--dim)" }}
            >
              ← All docs
            </Link>
            {categories.map(({ name, pages }) => (
              <div key={name} className="mb-4">
                <div
                  className="mb-1 px-2 text-xs uppercase tracking-widest"
                  style={{ color: "var(--muted)" }}
                >
                  {name}
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
