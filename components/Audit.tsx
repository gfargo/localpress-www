import Image from "next/image";
import { FadeIn } from "./FadeIn";

const checks = [
  { flag: "--unoptimized", desc: "Images never processed by localPress" },
  { flag: "--large", desc: "Images over a size threshold (default 1 MB)" },
  { flag: "--missing-alt", desc: "Images without alt text (accessibility / SEO)" },
  { flag: "--display-size", desc: "Images larger than their biggest registered thumbnail" },
  { flag: "--duplicates", desc: "Perceptually identical images via dHash" },
  { flag: "--broken-refs", desc: "Attachment URLs that return 404" },
  { flag: "--orphans", desc: "Files on disk with no DB record (requires WP-CLI)" },
];

export function Audit() {
  return (
    <section id="audit" style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: header + flags */}
          <FadeIn direction="right">
            <div>
              <p className="spec-label mb-4">// localpress audit</p>
              <h2 className="font-display mb-8 text-3xl leading-[1.02] md:text-[2.75rem]" style={{ color: "var(--ink)" }}>
                Seven health checks in a single pass.
              </h2>
              <div className="border-t" style={{ borderColor: "var(--border)" }}>
                {checks.map(({ flag, desc }, i) => (
                  <div
                    key={flag}
                    className="hover-raised flex flex-col gap-1 border-b py-3.5 sm:flex-row sm:items-center sm:gap-5"
                    style={{ borderColor: "var(--wire)" }}
                  >
                    <code
                      className="shrink-0 font-mono text-xs font-medium"
                      style={{ color: "var(--accent)", minWidth: "9.5rem" }}
                    >
                      <span style={{ color: "var(--muted)" }}>{String(i + 1).padStart(2, "0")} </span>
                      {flag}
                    </code>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: stats screenshot */}
          <FadeIn delay={160} direction="left">
            <div className="lg:sticky lg:top-24">
              <div className="mb-3 flex items-end justify-between">
                <span className="spec-label">fig.03 · library health dashboard</span>
                <span className="spec-label hidden sm:inline">$ localpress stats</span>
              </div>
              <div className="terminal-frame overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)" }}>
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                  </div>
                  <span className="ml-2 font-mono text-xs" style={{ color: "var(--dim)" }}>localpress stats</span>
                </div>
                <div style={{ background: "#1e1e2e" }}>
                  <Image
                    src="/screenshots/ui-stats.png"
                    alt="localPress stats dashboard — cumulative savings, format breakdown, and recent operations"
                    width={1200}
                    height={600}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
