"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import type { WikiPage } from "@/lib/wiki-manifest"

type DocsSearchProps = {
  pages: WikiPage[]
}

/** Dispatch this from anywhere to open the palette. */
export function openDocsSearch() {
  window.dispatchEvent(new Event("docs:search"))
}

function score(page: WikiPage, q: string): number {
  const query = q.toLowerCase().trim()
  if (!query) return 1
  const title = page.title.toLowerCase()
  const cat = page.category.toLowerCase()
  const desc = page.description.toLowerCase()
  const slug = page.slug.toLowerCase()

  if (title === query) return 100
  if (title.startsWith(query)) return 90
  if (title.includes(query)) return 80
  if (slug.includes(query)) return 60
  if (cat.includes(query)) return 40
  if (desc.includes(query)) return 20
  return 0
}

export function DocsSearch({ pages }: DocsSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const results = useMemo(() => {
    return pages
      .map((p) => ({ page: p, s: score(p, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.page.order - b.page.order)
      .map((r) => r.page)
  }, [pages, query])

  const close = useCallback(() => {
    setOpen(false)
    setQuery("")
    setActive(0)
  }, [])

  const go = useCallback(
    (slug: string) => {
      close()
      router.push(`/docs/${slug}`)
    },
    [close, router],
  )

  // Global ⌘K / Ctrl+K and custom event trigger (from mobile nav)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener("docs:search", onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("docs:search", onOpen)
    }
  }, [])

  // Focus input and lock scroll when open
  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 20)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault()
      close()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const target = results[active]
      if (target) go(target.slug)
    }
  }

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`)
    el?.scrollIntoView({ block: "nearest" })
  }, [active])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      style={{ background: "rgb(0 0 0 / 0.55)", backdropFilter: "blur(2px)" }}
      onMouseDown={close}
      role="presentation"
    >
          <div
            className="w-full max-w-lg overflow-hidden rounded-xl shadow-2xl"
            style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
          >
            <div className="flex items-center gap-3 px-4" style={{ borderBottom: "1px solid var(--wire)" }}>
              <SearchIcon />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search the manual..."
                className="w-full bg-transparent py-4 text-sm outline-none"
                style={{ color: "var(--ink)" }}
                aria-label="Search documentation"
              />
              <kbd
                className="rounded px-1.5 py-0.5 font-mono text-[0.625rem]"
                style={{ background: "var(--raised)", border: "1px solid var(--wire)", color: "var(--dim)" }}
              >
                ESC
              </kbd>
            </div>

            <ul ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm" style={{ color: "var(--muted)" }}>
                  No pages match{" "}
                  <span className="font-mono" style={{ color: "var(--body)" }}>
                    &quot;{query}&quot;
                  </span>
                </li>
              ) : (
                results.map((page, idx) => {
                  const isActive = idx === active
                  return (
                    <li key={page.slug} data-idx={idx}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(idx)}
                        onClick={() => go(page.slug)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors"
                        style={{ background: isActive ? "var(--accent-subtle)" : "transparent" }}
                      >
                        <span
                          className="font-mono text-[0.625rem] uppercase tracking-wider"
                          style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
                        >
                          {page.category === "Guides" ? "G" : "R"}.{String(page.order).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className="block text-sm font-medium"
                            style={{ color: isActive ? "var(--accent)" : "var(--ink)" }}
                          >
                            {page.title}
                          </span>
                          <span className="block truncate text-xs" style={{ color: "var(--muted)" }}>
                            {page.description}
                          </span>
                        </span>
                        <span aria-hidden="true" style={{ color: isActive ? "var(--accent)" : "transparent" }}>
                          ↵
                        </span>
                      </button>
                    </li>
                  )
                })
              )}
            </ul>

            <div
              className="flex items-center gap-4 px-4 py-2.5 font-mono text-[0.625rem]"
              style={{ borderTop: "1px solid var(--wire)", color: "var(--muted)" }}
            >
              <span className="flex items-center gap-1">
                <Key>↑</Key>
                <Key>↓</Key>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <Key>↵</Key>
                open
              </span>
              <span className="ml-auto">{results.length} pages</span>
            </div>
          </div>
        </div>
  )
}

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      className="rounded px-1 py-0.5"
      style={{ background: "var(--raised)", border: "1px solid var(--wire)", color: "var(--dim)" }}
    >
      {children}
    </kbd>
  )
}
