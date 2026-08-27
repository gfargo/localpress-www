"use client"

import { useState, type ReactNode } from "react"

/** Recursively flatten React children into a plain string. */
export function nodeToText(node: ReactNode): string {
  if (node == null || node === false || node === true) return ""
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join("")
  if (typeof node === "object" && "props" in (node as { props?: unknown })) {
    return nodeToText((node as { props: { children?: ReactNode } }).props.children)
  }
  return ""
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

/** Code block with a hover copy button. */
export function CodeBlock({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false)
  const text = nodeToText(children).replace(/\n$/, "")

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <div className="group relative mb-4">
      <pre
        className="overflow-x-auto rounded-lg p-4 pr-12 text-xs leading-6"
        style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-md px-2 py-1 font-mono text-[0.625rem] opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--wire)",
          color: copied ? "var(--accent)" : "var(--muted)",
        }}
      >
        {copied ? (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            copied
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            copy
          </>
        )}
      </button>
    </div>
  )
}

/** Heading with a generated id and a hover-reveal anchor link. */
export function AnchorHeading({
  level,
  children,
}: {
  level: 2 | 3
  children: ReactNode
}) {
  const id = slugify(nodeToText(children))
  const Tag = level === 2 ? "h2" : "h3"
  const base =
    level === 2
      ? "font-display text-2xl mt-10 mb-4 pb-2"
      : "font-display text-lg mt-7 mb-2"

  return (
    <Tag
      id={id}
      className={`group scroll-mt-24 ${base}`}
      style={
        level === 2
          ? { color: "var(--ink)", borderBottom: "1px solid var(--wire)" }
          : { color: "var(--ink)" }
      }
    >
      <a href={`#${id}`} className="inline-flex items-center gap-2 no-underline">
        <span>{children}</span>
        <span
          aria-hidden="true"
          className="font-mono text-sm opacity-0 transition-opacity group-hover:opacity-100"
          style={{ color: "var(--accent)" }}
        >
          #
        </span>
      </a>
    </Tag>
  )
}
