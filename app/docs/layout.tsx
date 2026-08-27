import type { Metadata } from "next"
import { getWikiCategories, wikiPages } from "@/lib/wiki-manifest"
import { DocsSidebar } from "@/components/docs/DocsSidebar"
import { DocsMobileNav } from "@/components/docs/DocsMobileNav"
import { DocsSearch } from "@/components/docs/DocsSearch"

export const metadata: Metadata = {
  title: {
    template: "%s — localPress docs",
    default: "Documentation — localPress",
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const categories = getWikiCategories()

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--wire)" }}
    >
      <DocsSearch pages={wikiPages} />
      <DocsMobileNav categories={categories} />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex gap-10 py-12 lg:py-16">
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-20">
              <DocsSidebar categories={categories} />
            </div>
          </aside>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
