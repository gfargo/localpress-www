import Link from "next/link";

export function Install() {
  return (
    <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
              Installation
            </p>
            <h2
              className="font-display text-3xl font-semibold italic md:text-4xl"
              style={{ color: "var(--ink)" }}
            >
              Three ways to install
            </h2>
          </div>

          <div className="space-y-3">
            {/* Homebrew — primary */}
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: "1px solid var(--accent-mid)", background: "var(--accent-subtle)" }}
            >
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: "1px solid var(--accent-mid)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                    Homebrew — recommended
                  </span>
                </div>
                <a
                  href="https://github.com/gfargo/homebrew-localpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-opacity hover:opacity-75"
                  style={{ color: "var(--dim)" }}
                >
                  View tap ↗
                </a>
              </div>
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="select-none text-xs font-medium" style={{ color: "var(--accent)" }}>$</span>
                <code className="flex-1 text-sm" style={{ color: "var(--warm)" }}>
                  brew install gfargo/localpress/localpress
                </code>
              </div>
            </div>

            {/* Archive download */}
            <div
              className="flex items-center justify-between gap-4 rounded-lg px-5 py-4"
              style={{ border: "1px solid var(--border)", background: "var(--raised)" }}
            >
              <div>
                <p className="mb-0.5 text-sm font-medium" style={{ color: "var(--ink)" }}>
                  Archive download
                </p>
                <p className="text-xs" style={{ color: "var(--body)" }}>
                  Pre-built tarballs for macOS (arm64, x64), Linux (arm64, x64), Windows (x64). Requires Bun ≥ 1.1.
                </p>
              </div>
              <a
                href="https://github.com/gfargo/localpress/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded px-4 py-2 text-xs font-medium transition-opacity hover:opacity-75"
                style={{ border: "1px solid var(--border)", color: "var(--ink)" }}
              >
                Releases ↗
              </a>
            </div>

            {/* From source */}
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: "1px solid var(--border)", background: "var(--raised)" }}
            >
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
                  From source — requires Bun ≥ 1.1
                </span>
              </div>
              <div className="space-y-2 p-4">
                {[
                  "git clone https://github.com/gfargo/localpress.git",
                  "cd localpress && bun install",
                  "bun run build",
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-3 rounded px-3 py-2" style={{ background: "var(--bg)" }}>
                    <span className="select-none text-xs" style={{ color: "var(--muted)" }}>{i + 1}</span>
                    <code className="text-xs" style={{ color: "var(--body)" }}>{line}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/docs/getting-started"
              className="text-sm transition-opacity hover:opacity-75"
              style={{ color: "var(--accent)" }}
            >
              Read the Getting Started guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
