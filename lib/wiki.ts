const WIKI_REPO = "gfargo/localpress"
const WIKI_RAW_BASE = `https://raw.githubusercontent.com/wiki/${WIKI_REPO}`

export async function fetchWikiContent(wikiPath: string): Promise<string | null> {
  if (process.env.NODE_ENV === "development") {
    try {
      const { readFile } = await import("fs/promises")
      const { join } = await import("path")
      const filePath = join(process.cwd(), "..", ".wiki", `${wikiPath}.md`)
      return await readFile(filePath, "utf-8")
    } catch {
      // fall through to remote fetch
    }
  }

  try {
    const headers: HeadersInit = { Accept: "text/plain" }
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch(`${WIKI_RAW_BASE}/${wikiPath}.md`, { headers })
    if (!response.ok) return null
    return response.text()
  } catch {
    return null
  }
}

export function extractDescription(content: string): string {
  const lines = content.split("\n")
  for (const line of lines) {
    const t = line.trim()
    if (!t) continue
    if (t.startsWith("#")) continue
    if (t.startsWith(">")) continue
    if (t.startsWith("- ") || t.startsWith("* ") || t.startsWith("+ ")) continue
    if (t.startsWith("```")) continue
    if (t.startsWith("!")) continue
    if (t.startsWith("|")) continue
    if (t.length < 20) continue
    return t.length > 160 ? `${t.slice(0, 157)}...` : t
  }
  return ""
}
