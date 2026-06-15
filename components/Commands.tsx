const featured = [
  {
    name: "optimize",
    category: "Processing",
    tagline: "Compress without compromise",
    detail:
      "sharp + jSquash WASM codecs. Set a quality floor, pick a format, use named profiles, preview in the browser with --preview, or process your entire library in one pass.",
    example: "localpress optimize --unoptimized --profile hero --apply",
  },
  {
    name: "remove-bg",
    category: "AI",
    tagline: "Background removal. No cloud.",
    detail:
      "Five ONNX models including state-of-the-art BiRefNet — all running on your hardware. Preview and tweak in the browser before applying.",
    example: "localpress remove-bg 847 --model birefnet-lite --preview",
  },
  {
    name: "audit",
    category: "Discovery",
    tagline: "Seven health checks, one command",
    detail:
      "Unoptimized, oversized, missing alt text, display-size mismatch, duplicate images, broken refs, orphaned files — surfaced in seconds.",
    example: "localpress audit",
  },
]

const secondary = [
  {
    name: "export / import",
    category: "Migration",
    tagline: "Backup, migrate, bulk-load.",
    detail: "Export your entire library as a ZIP with metadata manifest. Import directories or ZIPs with optional optimization on upload.",
  },
  {
    name: "watch",
    category: "Automation",
    tagline: "Drop files. They appear in WordPress.",
    detail: "Watch a local directory for new or changed images — auto-optimizes and pushes to WordPress continuously.",
  },
  {
    name: "edit",
    category: "Round-trip",
    tagline: "Open in any editor. Syncs back.",
    detail: "Download → GIMP, Photoshop, or Preview → save → automatically pushed to WordPress.",
  },
  {
    name: "references",
    category: "Discovery",
    tagline: "Find every usage",
    detail: "Scan all posts for an attachment's URL. Rewrite them in-place after a rename or move.",
  },
]

const utilities = [
  { name: "init", desc: "Interactive site wizard" },
  { name: "sites", desc: "Manage multiple sites" },
  { name: "doctor", desc: "Capability check + --fix" },
  { name: "config", desc: "Profiles + scalar values" },
  { name: "list", desc: "Browse media library" },
  { name: "show", desc: "Attachment metadata" },
  { name: "stats", desc: "Library health dashboard" },
  { name: "caption", desc: "AI alt-text via Ollama (multilingual)" },
  { name: "convert", desc: "JPEG → WebP → AVIF" },
  { name: "resize", desc: "Resize preserving ratio" },
  { name: "regenerate", desc: "Rebuild WP thumbnails" },
  { name: "export", desc: "Backup as ZIP or directory" },
  { name: "import", desc: "Bulk upload with optimize" },
  { name: "posts", desc: "Content CRUD (posts/pages/CPT)" },
  { name: "a11y", desc: "WCAG accessibility audit" },
  { name: "pull", desc: "Download to local disk" },
  { name: "push", desc: "Upload + replace-in-place" },
  { name: "update", desc: "Self-update localpress" },
  { name: "completions", desc: "Shell completions (bash/zsh/fish)" },
]

const categoryColor: Record<string, string> = {
  Processing: "var(--accent)",
  AI: "var(--accent)",
  Automation: "var(--accent)",
  Migration: "var(--accent)",
  Discovery: "var(--warm)",
  "Round-trip": "var(--dim)",
}

export function Commands() {
  return (
    <section
      id="commands"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}
    >
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-16">
          <p
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            What&apos;s inside
          </p>
          <h2
            className="font-display max-w-xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            38 commands. One tool.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "var(--body)" }}>
            From a single image to your entire library — every operation is local, idempotent, and
            dry-run safe by default.
          </p>
        </div>

        {/* Featured — 3 marquee commands */}
        <div className="grid gap-4 md:grid-cols-3 mb-4">
          {featured.map((cmd) => (
            <div
              key={cmd.name}
              className="flex flex-col rounded-lg overflow-hidden"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              {/* Card body */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                {/* Category badge */}
                <span
                  className="self-start rounded-full px-2 py-0.5 text-xs uppercase tracking-widest"
                  style={{
                    border: `1px solid ${categoryColor[cmd.category]}`,
                    color: categoryColor[cmd.category],
                    opacity: 0.7,
                  }}
                >
                  {cmd.category}
                </span>

                {/* Command name */}
                <div>
                  <span
                    className="mr-1.5 text-xs font-medium"
                    style={{ color: "var(--muted)" }}
                    aria-hidden="true"
                  >
                    $
                  </span>
                  <code
                    className="text-xl font-medium tracking-tight"
                    style={{ color: "var(--accent)" }}
                  >
                    {cmd.name}
                  </code>
                </div>

                {/* Tagline + detail */}
                <p className="text-sm font-medium leading-snug" style={{ color: "var(--ink)" }}>
                  {cmd.tagline}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                  {cmd.detail}
                </p>
              </div>

              {/* Example command */}
              <div
                className="px-4 py-3 font-mono text-xs truncate"
                style={{
                  background: "var(--raised)",
                  borderTop: "1px solid var(--wire)",
                  color: "var(--dim)",
                }}
              >
                <span style={{ color: "var(--muted)" }}>$ </span>
                <span style={{ color: "var(--warm)" }}>{cmd.example}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary — 4 supporting commands */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {secondary.map((cmd) => (
            <div
              key={cmd.name}
              className="hover-raised rounded-lg p-5"
              style={{
                border: "1px solid var(--wire)",
                background: "var(--surface)",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <code
                  className="text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  $ {cmd.name}
                </code>
                <span
                  className="shrink-0 text-xs uppercase tracking-widest"
                  style={{ color: "var(--muted)" }}
                >
                  {cmd.category}
                </span>
              </div>
              <p className="text-xs font-medium mb-1" style={{ color: "var(--ink)" }}>
                {cmd.tagline}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                {cmd.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Utility strip — 9 plumbing commands */}
        <div
          className="rounded-lg px-5 py-4"
          style={{ border: "1px solid var(--wire)", background: "var(--surface)" }}
        >
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            Also included
          </p>
          <div className="flex flex-wrap gap-2">
            {utilities.map((cmd) => (
              <div
                key={cmd.name}
                className="hover-wire group flex items-center gap-2 rounded px-3 py-1.5"
                style={{ border: "1px solid transparent", background: "var(--raised)" }}
              >
                <code className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                  {cmd.name}
                </code>
                <span className="text-xs" style={{ color: "var(--dim)" }}>
                  {cmd.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
