import { FadeIn } from "./FadeIn";

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
      "Five checksum-verified ONNX models, including BiRefNet, all running on your hardware. Preview first; batch runs reuse one loaded model session.",
    example: "localpress remove-bg 847 --model birefnet-lite --preview",
  },
  {
    name: "audit",
    category: "Discovery",
    tagline: "Seven health checks, one command",
    detail:
      "Unoptimized, oversized, missing alt text, display-size mismatch, duplicate images, broken refs, orphaned files. Every check runs in seconds.",
    example: "localpress audit",
  },
];

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
    detail: "Watch a local directory for new or changed images, including atomic editor saves, then optimize and push continuously.",
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
];

const utilities = [
  { name: "init", desc: "Interactive site wizard" },
  { name: "sites", desc: "Manage multiple sites" },
  { name: "doctor", desc: "Capability check + --fix" },
  { name: "config", desc: "Profiles + scalar values" },
  { name: "list", desc: "Browse media library" },
  { name: "show", desc: "Attachment metadata" },
  { name: "stats", desc: "Library health dashboard" },
  { name: "caption", desc: "AI alt-text via Ollama" },
  { name: "convert", desc: "JPEG → WebP → AVIF" },
  { name: "resize", desc: "Resize preserving ratio" },
  { name: "regenerate", desc: "Rebuild WP thumbnails" },
  { name: "export", desc: "Backup as ZIP or dir" },
  { name: "import", desc: "Bulk upload with optimize" },
  { name: "posts", desc: "Content CRUD" },
  { name: "a11y", desc: "WCAG accessibility audit" },
  { name: "pull", desc: "Download to local disk" },
  { name: "push", desc: "Upload + replace-in-place" },
  { name: "update", desc: "Self-update localpress" },
  { name: "completions", desc: "bash / zsh / fish" },
];

export function Commands() {
  return (
    <section id="commands" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="spec-label mb-4">// what&apos;s inside</p>
              <h2 className="font-display text-3xl leading-[1.02] md:text-[2.75rem]" style={{ color: "var(--ink)" }}>
                38 commands. One binary.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                One image or your whole library, the processing stays on your machine. Bulk writes
                dry-run by default, and shared concurrency keeps batches predictable.
              </p>
            </div>
            <div
              className="hidden shrink-0 rounded-lg px-6 py-4 text-right md:block"
              style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
            >
              <div className="font-display text-4xl" style={{ color: "var(--accent)" }}>38</div>
              <div className="spec-label mt-1">commands total</div>
            </div>
          </div>
        </FadeIn>

        {/* Featured */}
        <div className="mb-4 grid gap-4 md:grid-cols-3">
          {featured.map((cmd, i) => (
            <FadeIn key={cmd.name} delay={i * 90} className="min-w-0">
              <div
                className="card-glow flex h-full min-w-0 flex-col overflow-hidden rounded-lg"
                style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-3 p-6">
                  <span className="spec-label" style={{ color: "var(--accent)" }}>{cmd.category}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-sm" style={{ color: "var(--muted)" }} aria-hidden="true">$</span>
                    <code className="font-mono text-xl font-medium tracking-tight" style={{ color: "var(--ink)" }}>
                      {cmd.name}
                    </code>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{cmd.tagline}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>{cmd.detail}</p>
                </div>
                <div
                  className="overflow-x-auto whitespace-nowrap px-4 py-3 font-mono text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ background: "var(--raised)", borderTop: "1px solid var(--wire)" }}
                >
                  <span style={{ color: "var(--muted)" }}>$ </span>
                  <span style={{ color: "var(--warm)" }}>{cmd.example}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary */}
        <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {secondary.map((cmd, i) => (
            <FadeIn key={cmd.name} delay={i * 70}>
              <div
                className="hover-raised h-full rounded-lg p-5"
                style={{ border: "1px solid var(--wire)", background: "var(--bg)" }}
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <code className="font-mono text-sm font-medium" style={{ color: "var(--accent)" }}>{cmd.name}</code>
                  <span className="spec-label shrink-0">{cmd.category}</span>
                </div>
                <p className="mb-1 text-xs font-medium" style={{ color: "var(--ink)" }}>{cmd.tagline}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>{cmd.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Utility strip */}
        <div className="rounded-lg px-5 py-5" style={{ border: "1px solid var(--wire)", background: "var(--bg)" }}>
          <p className="spec-label mb-4">// also included</p>
          <div className="flex flex-wrap gap-2">
            {utilities.map((cmd) => (
              <div
                key={cmd.name}
                className="hover-wire flex items-center gap-2 rounded px-3 py-1.5"
                style={{ border: "1px solid transparent", background: "var(--raised)" }}
              >
                <code className="font-mono text-xs font-medium" style={{ color: "var(--accent)" }}>{cmd.name}</code>
                <span className="text-xs" style={{ color: "var(--dim)" }}>{cmd.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
