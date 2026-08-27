import Link from "next/link";
import { FadeIn } from "./FadeIn";

const fields = [
  { cmd: "alt", title: "Alt text", body: "Concise single-sentence description for accessibility. Writes to alt_text." },
  { cmd: "title", title: "Title", body: "3-7 word noun phrase. Auto-detects machine-generated names (Screenshot-…, IMG_…) for bulk cleanup." },
  { cmd: "describe", title: "Description", body: "2-3 sentence description for galleries and attachment-page SEO. Writes to the description field." },
  { cmd: "tag", title: "Tags", body: "3-6 short tags appended to the caption as a [tags: …] block. Works everywhere, no taxonomy plugin needed." },
  { cmd: "classify", title: "Type", body: "Detects screenshot/photo/illustration/diagram. Cached locally so optimize picks PNG vs WebP automatically." },
  { cmd: "rename", title: "Slug", body: "AI-generated permalink slug (with --smart) or explicit (--to). Straight talk on the file URL: slug only for v1." },
];

const unifiedExample = `# Print all five fields for review
localpress vision 2202

# Or write them all back at once
localpress vision 2202 --apply

# Or pick a subset
localpress vision 2202 --fields alt,title --apply`;

export function VisionAI() {
  return (
    <section id="vision-ai" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="spec-label mb-4">// vision ai</p>
            <h2 className="font-display text-3xl leading-[1.02] md:text-5xl" style={{ color: "var(--ink)" }}>
              Six fields, one <span className="glow-accent">vision model.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--body)" }}>
              The same local Ollama vision model that powers <code className="font-mono" style={{ color: "var(--warm)" }}>caption</code>{" "}
              now generates titles, descriptions, tags, image-type classifications, and AI-renamed
              slugs. Each is its own command, or run them all at once with{" "}
              <code className="font-mono" style={{ color: "var(--warm)" }}>vision</code>.
            </p>
          </div>
        </FadeIn>

        {/* Field grid */}
        <div className="mb-12 overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
          <div className="spec-label px-5 py-3" style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}>
            what it generates
          </div>
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--wire)" }}>
            {fields.map(({ cmd, title, body }, i) => (
              <FadeIn key={cmd} delay={i * 60}>
                <div className="h-full p-5" style={{ background: "var(--surface)" }}>
                  <code
                    className="mb-3 inline-block rounded px-2 py-0.5 font-mono text-xs"
                    style={{ background: "var(--bg)", color: "var(--accent)", border: "1px solid var(--wire)" }}
                  >
                    localpress {cmd}
                  </code>
                  <h3 className="mb-2 text-sm font-medium" style={{ color: "var(--ink)" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Unified workflow */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="spec-label mb-3">// or · all at once</p>
            <h3 className="font-display mb-3 text-2xl" style={{ color: "var(--ink)" }}>The vision workflow</h3>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--body)" }}>
              <code className="font-mono" style={{ color: "var(--warm)" }}>localpress vision &lt;id&gt;</code> runs all five
              generators in one pass. Print-only by default so you can review before writing. Pair with{" "}
              <code className="font-mono" style={{ color: "var(--warm)" }}>--apply</code> to commit everything to
              WordPress in a single composed update.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>
              localPress caches the classification locally, so later{" "}
              <code className="font-mono" style={{ color: "var(--warm)" }}>optimize</code> calls on the same attachment
              pick PNG for screenshots and WebP for photos on their own.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
            <div className="spec-label px-4 py-2.5" style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}>
              terminal
            </div>
            <pre
              className="overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed"
              style={{ background: "var(--bg)", color: "var(--warm)" }}
            >
              <code>{unifiedExample}</code>
            </pre>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/docs/commands-reference#vision"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            Commands reference →
          </Link>
          <Link
            href="/docs/ollama-setup"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm transition-opacity hover:opacity-75"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            Ollama setup ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
