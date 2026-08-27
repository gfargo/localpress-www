"use client";

import Link from "next/link";

const flow = [
  {
    num: "01",
    title: "Run anything",
    body: "Optimize, convert, resize, remove-bg, caption — bulk or single. Before a source or metadata write, localpress captures the state needed to recover it.",
    cmd: "localpress optimize --unoptimized --apply",
  },
  {
    num: "02",
    title: "Browse history",
    body: "Every command creates a session. Inspect snapshots with `history`, or drop into the interactive TUI to walk through them.",
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
  {
    label: "Safe by default",
    body: "Bulk undos dry-run unless you pass --apply, matching the rest of the CLI.",
  },
  {
    label: "Bounded disk",
    body: "Default 2 GB cap per site. Auto-prune on every op. Configurable via `history.maxSizeBytes`.",
  },
  {
    label: "Idempotent-aware",
    body: "Skipped ops (source unchanged) don't create snapshots. Re-running unchanged ops costs nothing.",
  },
  {
    label: "MCP-first",
    body: "Agents get `undo`, `history_list`, `history_show`, and `history_prune` as typed tools.",
  },
];

export function TimeMachine() {
  return (
    <section
      id="time-machine"
      style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}
    >
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p
            className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Time-machine
          </p>
          <h2
            className="font-display max-w-3xl text-3xl font-semibold italic leading-tight md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Reversible{" "}
            <span className="glow-accent" style={{ color: "var(--accent)" }}>
              by design.
            </span>
          </h2>
          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base"
            style={{ color: "var(--body)" }}
          >
            Source and metadata changes write a snapshot before WordPress mutates.
            Explicit keep-original runs skip needless snapshots; automatic REST fallbacks
            retain recovery history. Wrong bulk optimize or bad cutout? Walk it back.
          </p>
        </div>

        {/* Three-step workflow */}
        <div
          className="mb-12 overflow-hidden rounded-lg"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="px-5 py-3 text-xs uppercase tracking-widest"
            style={{
              background: "var(--raised)",
              borderBottom: "1px solid var(--border)",
              color: "var(--dim)",
            }}
          >
            How it works
          </div>
          <div
            className="grid gap-px md:grid-cols-3"
            style={{ background: "var(--wire)" }}
          >
            {flow.map(({ num, title, body, cmd }) => (
              <div key={num} className="p-6" style={{ background: "var(--surface)" }}>
                <div
                  className="font-display mb-4 text-3xl font-semibold italic"
                  style={{ color: "var(--wire)" }}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <h3 className="mb-2 text-sm font-medium" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p
                  className="mb-4 text-xs leading-relaxed"
                  style={{ color: "var(--body)" }}
                >
                  {body}
                </p>
                <code
                  className="block rounded px-3 py-2 text-xs"
                  style={{
                    background: "var(--bg)",
                    color: "var(--accent)",
                    border: "1px solid var(--wire)",
                  }}
                >
                  {cmd}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Properties grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {bullets.map(({ label, body }) => (
            <div
              key={label}
              className="rounded-lg p-5"
              style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
            >
              <div
                className="mb-2 text-xs uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {label}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/docs/history-and-undo"
            className="inline-flex items-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            History & Undo guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
