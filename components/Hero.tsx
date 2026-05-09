"use client";

import { useState } from "react";
import Link from "next/link";

export function Hero({ version }: { version: string }) {
  const [copied, setCopied] = useState(false);
  const installCmd = "brew install gfargo/localpress/localpress";

  function handleCopy() {
    navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}
    >
      <div className="dot-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-mid) 0%, transparent 70%)", opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 py-28 md:py-36 lg:py-44">
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
            v{version} &nbsp;·&nbsp; MIT &nbsp;·&nbsp; macOS / Linux / Windows
          </div>

          <h1
            className="font-display mb-6 text-5xl font-semibold italic leading-[1.08] tracking-tight md:text-7xl lg:text-8xl"
            style={{ color: "var(--ink)" }}
          >
            Local-first
            <br />
            <span className="glow-accent" style={{ color: "var(--accent)" }}>
              WordPress tooling.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--body)" }}>
            Compress, convert, remove backgrounds, watch directories for changes, and round-trip
            with your real desktop editor — then sync back to WordPress via REST. Your hardware
            does the work. No cloud SaaS. No credits. No plugin required.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div
              className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-4 py-3 sm:max-w-md"
              style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
            >
              <span className="shrink-0 select-none text-xs font-medium" style={{ color: "var(--accent)" }}>$</span>
              <code className="min-w-0 flex-1 truncate text-xs md:text-sm" style={{ color: "var(--warm)" }}>
                {installCmd}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 rounded px-2 py-0.5 text-xs transition-all"
                style={{
                  color: copied ? "var(--accent)" : "var(--dim)",
                  border: "1px solid var(--border)",
                  background: copied ? "var(--accent-subtle)" : "transparent",
                }}
                aria-label="Copy install command"
              >
                {copied ? "copied ✓" : "copy"}
              </button>
            </div>

            <Link
              href="/docs/getting-started"
              className="flex shrink-0 items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)", color: "#040404" }}
            >
              Get started →
            </Link>

            <a
              href="https://github.com/gfargo/localpress"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm transition-opacity hover:opacity-75"
              style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
