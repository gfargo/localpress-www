import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import type { Components } from "react-markdown"
import { CodeBlock, AnchorHeading } from "@/components/docs/MarkdownParts"

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-display text-3xl mt-8 mb-4 first:mt-0" style={{ color: "var(--ink)" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => <AnchorHeading level={2}>{children}</AnchorHeading>,
  h3: ({ children }) => <AnchorHeading level={3}>{children}</AnchorHeading>,
  h4: ({ children }) => (
    <h4 className="font-mono text-xs font-medium mt-5 mb-1 uppercase tracking-wider" style={{ color: "var(--dim)" }}>
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-sm leading-7" style={{ color: "var(--body)" }}>{children}</p>
  ),
  a: ({ href, children }) => {
    if (!href) return <span>{children}</span>
    const isInternal = href.startsWith("/") || href.startsWith("#")
    if (isInternal) {
      return (
        <Link href={href} className="underline underline-offset-2 transition-opacity hover:opacity-75" style={{ color: "var(--accent)" }}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-opacity hover:opacity-75" style={{ color: "var(--accent)" }}>
        {children}
      </a>
    )
  },
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  code: ({ className, children }) => {
    const isBlock = !!className
    if (isBlock) {
      return <code className="font-mono" style={{ color: "var(--accent)" }}>{children}</code>
    }
    return (
      <code
        className="rounded px-1.5 py-0.5 text-xs"
        style={{ background: "var(--raised)", color: "var(--warm)", border: "1px solid var(--border)" }}
      >
        {children}
      </code>
    )
  },
  ul: ({ children }) => (
    <ul className="mb-4 ml-5 list-disc space-y-1 text-sm" style={{ color: "var(--body)" }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1 text-sm" style={{ color: "var(--body)" }}>{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote
      className="pl-4 italic mb-4 text-sm"
      style={{ borderLeft: "3px solid var(--accent-mid)", color: "var(--body)" }}
    >
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse text-xs">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th
      className="px-4 py-2 text-left font-medium text-xs uppercase tracking-wide"
      style={{ background: "var(--raised)", color: "var(--dim)", border: "1px solid var(--border)" }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2" style={{ color: "var(--body)", border: "1px solid var(--wire)" }}>
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-medium" style={{ color: "var(--ink)" }}>{children}</strong>
  ),
  hr: () => <hr className="my-8" style={{ borderColor: "var(--wire)" }} />,
}

export function DocsContent({ content }: { content: string }) {
  const body = content.replace(/^#[^\n]*\n?/, "")

  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]} components={components}>
        {body}
      </Markdown>
    </div>
  )
}
