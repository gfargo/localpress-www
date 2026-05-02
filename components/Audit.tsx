const checks = [
  { flag: "--unoptimized", desc: "Images never processed by localPress" },
  { flag: "--large", desc: "Images over a size threshold (default 1 MB)" },
  { flag: "--missing-alt", desc: "Images without alt text (accessibility / SEO)" },
  { flag: "--display-size", desc: "Images larger than their biggest registered thumbnail" },
  { flag: "--duplicates", desc: "Perceptually identical images via dHash" },
  { flag: "--broken-refs", desc: "Attachment URLs that return 404" },
  { flag: "--orphans", desc: "Files on disk with no DB record (requires WP-CLI)" },
];

const sampleOutput = `$ localpress audit

Audited 847 item(s) on 'production':

  Unoptimized:              45 images
  Oversized for display:     8 images
  Missing alt text:         12 images
  Duplicates:                3 pairs
  Broken references:         2 attachments

  Total findings: 70

  → localpress optimize --unoptimized --apply`;

export function Audit() {
  return (
    <section id="audit" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            localPress audit
          </p>
          <h2
            className="font-display max-w-xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            Seven health checks in a single pass
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Flags */}
          <div className="space-y-1">
            {checks.map(({ flag, desc }) => (
              <div
                key={flag}
                className="hover-wire flex items-start gap-4 rounded-md px-4 py-3"
                style={{ border: "1px solid transparent" }}
              >
                <code
                  className="mt-0.5 shrink-0 text-xs font-medium"
                  style={{ color: "var(--accent)", minWidth: "10rem" }}
                >
                  {flag}
                </code>
                <span className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                  {desc}
                </span>
              </div>
            ))}
          </div>

          {/* Terminal output */}
          <div className="overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
              </div>
              <span className="ml-2 text-xs" style={{ color: "var(--dim)" }}>bash</span>
            </div>
            <pre
              className="overflow-x-auto p-5 text-xs leading-relaxed"
              style={{ background: "var(--bg)", color: "var(--warm)" }}
            >
              {sampleOutput.split("\n").map((line, i) => {
                if (line.startsWith("$")) {
                  return (
                    <span key={i} style={{ color: "var(--accent)" }}>
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                if (line.trimStart().startsWith("→")) {
                  return (
                    <span key={i} style={{ color: "var(--accent)" }}>
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                if (line.trimStart().startsWith("Total")) {
                  return (
                    <span key={i} style={{ color: "var(--ink)" }}>
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                return (
                  <span key={i} style={{ color: "var(--body)" }}>
                    {line}
                    {"\n"}
                  </span>
                );
              })}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
