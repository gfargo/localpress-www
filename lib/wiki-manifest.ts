export type WikiPage = {
  slug: string
  title: string
  wikiPath: string
  category: string
  order: number
  description: string
}

export type WikiCategory = {
  name: string
  pages: WikiPage[]
}

const categoryOrder: Record<string, number> = {
  Guides: 1,
  Reference: 2,
}

export const wikiPages: WikiPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    wikiPath: "Getting-Started",
    category: "Guides",
    order: 1,
    description: "Install localPress and connect your first WordPress site in minutes.",
  },
  {
    slug: "mcp-setup",
    title: "MCP Setup",
    wikiPath: "MCP-Setup",
    category: "Guides",
    order: 2,
    description: "Connect localPress to Claude Desktop, Cursor, Claude Code, or Kiro via the first-party MCP server. 52 tools, 4 resources, one config block.",
  },
  {
    slug: "ai-agent-integration",
    title: "AI Agent Integration",
    wikiPath: "AI-Agent-Integration",
    category: "Guides",
    order: 3,
    description: "Use localPress with Claude Desktop, Cursor, and other AI agents through the first-party MCP server or the companion markdown skill.",
  },
  {
    slug: "wp-cli-ssh-setup",
    title: "WP-CLI SSH Setup",
    wikiPath: "WP-CLI-SSH-Setup",
    category: "Guides",
    order: 4,
    description: "Configure SSH access to unlock replace-in-place, thumbnail regeneration, and full reference rewrites.",
  },
  {
    slug: "ollama-setup",
    title: "Ollama Setup",
    wikiPath: "Ollama-Setup",
    category: "Guides",
    order: 5,
    description: "Install Ollama and pull a vision model to enable local AI alt-text generation with the caption command.",
  },
  {
    slug: "history-and-undo",
    title: "History & Undo",
    wikiPath: "History-And-Undo",
    category: "Guides",
    order: 6,
    description: "Local recovery history for source and metadata changes, with dry-run-first bulk undo and explicit keep-original behavior.",
  },
  {
    slug: "commands-reference",
    title: "Commands Reference",
    wikiPath: "Commands-Reference",
    category: "Reference",
    order: 1,
    description: "Complete documentation for all 38 CLI commands across 12 categories, including posts CRUD, accessibility audit, and the time-machine `history` and `undo` commands.",
  },
  {
    slug: "configuration",
    title: "Configuration",
    wikiPath: "Configuration",
    category: "Reference",
    order: 2,
    description: "Config files, named optimization profiles, site management, and defaults.",
  },
]

export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find((p) => p.slug === slug)
}

export function getAllWikiSlugs(): string[] {
  return wikiPages.map((p) => p.slug)
}

export function getWikiCategories(): WikiCategory[] {
  const grouped: Record<string, WikiPage[]> = {}
  for (const page of wikiPages) {
    if (!grouped[page.category]) grouped[page.category] = []
    grouped[page.category].push(page)
  }

  return Object.entries(grouped)
    .sort(([a], [b]) => (categoryOrder[a] ?? 99) - (categoryOrder[b] ?? 99))
    .map(([name, pages]) => ({
      name,
      pages: pages.sort((a, b) => a.order - b.order),
    }))
}

export function getAdjacentPages(slug: string): {
  prev: WikiPage | null
  next: WikiPage | null
} {
  const idx = wikiPages.findIndex((p) => p.slug === slug)
  return {
    prev: idx > 0 ? wikiPages[idx - 1] : null,
    next: idx < wikiPages.length - 1 ? wikiPages[idx + 1] : null,
  }
}
