const categories = [
  {
    title: "Setup",
    commands: [
      { name: "init", desc: "Connect a WordPress site (interactive wizard)" },
      { name: "sites", desc: "List, add, switch, or remove configured sites" },
      { name: "doctor", desc: "Show backend availability + --fix" },
      { name: "config", desc: "Read/write config values, manage profiles" },
    ],
  },
  {
    title: "Discovery",
    commands: [
      { name: "list", desc: "Browse media library with filters" },
      { name: "show <id>", desc: "Detailed metadata and processing history" },
      { name: "audit", desc: "Comprehensive library health check" },
      { name: "references <id>", desc: "Find every post that uses an attachment" },
    ],
  },
  {
    title: "Processing",
    commands: [
      { name: "optimize", desc: "Compress with sharp or jSquash WASM codecs" },
      { name: "convert", desc: "Format conversion: JPEG → WebP, PNG → AVIF" },
      { name: "resize", desc: "Resize + regenerate thumbnails" },
      { name: "remove-bg", desc: "AI background removal via local ONNX Runtime" },
    ],
  },
  {
    title: "Round-trip & low-level",
    commands: [
      { name: "edit <id>", desc: "Download → editor → watch → sync" },
      { name: "pull", desc: "Download attachments to local disk" },
      { name: "push", desc: "Upload files with replace-in-place fallback" },
    ],
  },
];

export function Commands() {
  return (
    <section id="commands" style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            Command reference
          </p>
          <h2
            className="font-display max-w-xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            15 commands, 5 categories
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="overflow-hidden rounded-lg"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                </div>
                <span className="ml-2 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
                  {cat.title}
                </span>
              </div>

              {/* Commands */}
              <div className="divide-y" style={{ background: "var(--surface)", borderColor: "var(--wire)" }}>
                {cat.commands.map((cmd) => (
                  <div key={cmd.name} className="flex items-start gap-4 px-4 py-3">
                    <code
                      className="mt-0.5 shrink-0 text-xs font-medium"
                      style={{ color: "var(--accent)", minWidth: "7rem" }}
                    >
                      {cmd.name}
                    </code>
                    <span className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                      {cmd.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
