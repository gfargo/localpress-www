import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getWikiPage, getAllWikiSlugs, getAdjacentPages } from "@/lib/wiki-manifest"
import { fetchWikiContent } from "@/lib/wiki"
import { DocsContent } from "@/components/docs/DocsContent"
import { DocsNavigation } from "@/components/docs/DocsNavigation"

export function generateStaticParams() {
  return getAllWikiSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getWikiPage(slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      title: `${page.title} — localPress docs`,
      description: page.description,
      url: `https://localpress.griffen.codes/docs/${slug}`,
    },
    alternates: { canonical: `/docs/${slug}` },
  }
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getWikiPage(slug)
  if (!page) notFound()

  const content = await fetchWikiContent(page.wikiPath)
  const { prev, next } = getAdjacentPages(slug)
  const titleMatch = content?.match(/^#\s+(.+)/)
  const title = titleMatch ? titleMatch[1] : page.title

  return (
    <article>
      {/* Page header */}
      <div className="mb-10" style={{ borderBottom: "1px solid var(--wire)", paddingBottom: "2rem" }}>
        <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
          {page.category}
        </p>
        <h1 className="font-display text-3xl font-semibold italic mb-3" style={{ color: "var(--ink)" }}>
          {title}
        </h1>
        <p className="text-sm" style={{ color: "var(--body)" }}>{page.description}</p>
        <div className="mt-4">
          <a
            href={`https://github.com/gfargo/localpress/wiki/${page.wikiPath}/_edit`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-75"
            style={{ color: "var(--muted)" }}
          >
            Edit on GitHub Wiki ↗
          </a>
        </div>
      </div>

      {content ? (
        <DocsContent content={content} />
      ) : (
        <div className="rounded-lg p-6" style={{ border: "1px solid var(--border)", background: "var(--raised)" }}>
          <p className="mb-4 text-sm" style={{ color: "var(--body)" }}>
            This page couldn&apos;t be loaded at build time.
          </p>
          <a
            href={`https://github.com/gfargo/localpress/wiki/${page.wikiPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-2 transition-opacity hover:opacity-75"
            style={{ color: "var(--accent)" }}
          >
            View on GitHub Wiki ↗
          </a>
        </div>
      )}

      <p className="mt-8 pt-6 text-xs" style={{ borderTop: "1px solid var(--wire)", color: "var(--muted)" }}>
        Sourced from the{" "}
        <Link
          href="https://github.com/gfargo/localpress/wiki"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          GitHub Wiki
        </Link>
        . Updates on each deploy.
      </p>

      <DocsNavigation prev={prev} next={next} />
    </article>
  )
}
