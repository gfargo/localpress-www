const categories = [
  {
    title: "Setup",
    commands: [
      { name: "init", desc: "Connect a WordPress site (interactive Ink wizard)" },
      { name: "sites", desc: "List, add, switch, or remove configured sites" },
      { name: "doctor", desc: "Show backend availability, plugin detection, --fix" },
      { name: "config", desc: "Read/write config values, manage named profiles" },
    ],
  },
  {
    title: "Discovery & auditing",
    commands: [
      { name: "list", desc: "Browse the media library with filters" },
      { name: "show <id>", desc: "Detailed metadata and processing history" },
      { name: "audit", desc: "Comprehensive library health check" },
      { name: "references <id>", desc: "Find every post/page that uses an attachment" },
    ],
  },
  {
    title: "Processing",
    commands: [
      { name: "optimize", desc: "Compress images with sharp or jSquash WASM codecs" },
      { name: "convert", desc: "Format conversion (JPEG → WebP, PNG → AVIF)" },
      { name: "resize", desc: "Resize preserving aspect ratio, regenerate thumbnails" },
      { name: "remove-bg", desc: "AI background removal using local ONNX Runtime" },
    ],
  },
  {
    title: "Round-trip editing",
    commands: [
      { name: "edit <id>", desc: "Download → editor → watch → sync (the killer feature)" },
    ],
  },
  {
    title: "Low-level",
    commands: [
      { name: "pull", desc: "Download attachments to local disk" },
      { name: "push", desc: "Upload local files with replace-in-place fallback" },
    ],
  },
];

export function Commands() {
  return (
    <section id="commands" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">
            15 CLI commands across 5 categories
          </h2>
          <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to manage your WordPress media library from your laptop.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
              <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.commands.map((cmd) => (
                  <li key={cmd.name} className="flex items-start gap-3">
                    <code className="mt-1 min-w-[100px] rounded bg-zinc-100 px-2 py-1 font-mono text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                      {cmd.name}
                    </code>
                    <span className="text-zinc-600 dark:text-zinc-400">{cmd.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
