"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { WikiCategory } from "@/lib/wiki-manifest"

export function DocsSidebar({ categories }: { categories: WikiCategory[] }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Documentation navigation">
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
