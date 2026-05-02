"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { WikiCategory } from "@/lib/wiki-manifest"

export function DocsSidebar({ categories }: { categories: WikiCategory[] }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Documentation navigation">
      <div className="mb-6">
        <Link
          href="/docs"
          className="text-xs uppercase tracking-widest transition-opacity hover:opacity-75"
          style={{ color: "var(--dim)" }}
        >
          ← All docs
        </Link>
      </div>
      {categories.map(({ name, pages }) => (
        <div key={name} className="mb-6">
          <div className="mb-2 px-2 text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            {name}
          </div>
          <ul className="space-y-0.5">
            {pages.map((page) => {
              const isActive = pathname === `/docs/${page.slug}`
              return (
                <li key={page.slug}>
                  <Link
                    href={`/docs/${page.slug}`}
                    className="block rounded px-2 py-1.5 text-xs transition-colors"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--body)",
                      background: isActive ? "var(--accent-subtle)" : "transparent",
                      borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
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
