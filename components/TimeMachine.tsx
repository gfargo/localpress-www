import Link from "next/link";
import { FadeIn } from "./FadeIn";

const flow = [
  {
    num: "01",
    title: "Run anything",
    body: "Optimize, convert, resize, remove-bg, caption, in bulk or one at a time. Before any source or metadata write, localpress captures the state needed to recover it.",
    cmd: "localpress optimize --unoptimized --apply",
  },
  {
    num: "02",
    title: "Browse history",
    body: "Every command creates a session. Inspect snapshots with history, or drop into the interactive TUI to walk through them.",
    cmd: "localpress history -i",
  },
  {
    num: "03",
    title: "Undo the bad one",
    body: "Dry-run first, apply when ready. Single attachment, whole session, or step back op-by-op. Works the same when an MCP agent drives it.",
    cmd: "localpress undo --apply",
  },
];

const bullets = [
  { label: "Safe by default", body: "Bulk undos dry-run unless you pass --apply, matching the rest of the CLI." },
  { label: "Bounded disk", body: "Default 2 GB cap per site. Auto-prune on every op. Configurable via history.maxSizeBytes." },
  { label: "Idempotent-aware", body: "Skipped ops (source unchanged) don't create snapshots. Re-running unchanged ops costs nothing." },
  { label: "MCP-first", body: "Agents get undo, history_list, history_show, and history_prune as typed tools." },
];

export function TimeMachine() {
  return (
    <section id="time-machine" style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="spec-label mb-4">// time-machine</p>
            <h2 className="font-display text-3xl leading-[1.02] md:text-5xl" style={{ color: "var(--ink)" }}>
              Reversible <span className="glow-accent">by design.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--body)" }}>
              Source and metadata changes write a snapshot before WordPress mutates. Explicit
              keep-original runs skip needless snapshots; automatic REST fallbacks retain recovery
              history. Wrong bulk optimize or bad cutout? Walk it back.
            </p>
          </div>
        </FadeIn>

        {/* Three-step flow */}
        <div className="mb-12 grid gap-px overflow-hidden rounded-lg md:grid-cols-3" style={{ background: "var(--wire)", border: "1px solid var(--border)" }}>
          {flow.map(({ num, title, body, cmd }, i) => (
            <FadeIn key={num} delay={i * 90}>
              <div className="flex h-full flex-col p-6" style={{ background: "var(--surface)" }}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold" style={{ color: "var(--accent)" }}>{num}</span>
                  <span className="h-px flex-1" style={{ background: "var(--wire)" }} />
                </div>
                <h3 className="mb-2 text-base font-medium" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="mb-5 flex-1 text-xs leading-relaxed" style={{ color: "var(--body)" }}>{body}</p>
                <code
                  className="block rounded px-3 py-2 font-mono text-xs"
                  style={{ background: "var(--bg)", color: "var(--accent)", border: "1px solid var(--wire)" }}
                >
                  {cmd}
                </code>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Properties grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bullets.map(({ label, body }, i) => (
            <FadeIn key={label} delay={i * 70}>
              <div className="h-full rounded-lg p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="spec-label mb-2" style={{ color: "var(--accent)" }}>{label}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/docs/history-and-undo"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            History &amp; Undo guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
