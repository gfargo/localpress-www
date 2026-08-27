"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function Hero({ version }: { version: string }) {
  const [copied, setCopied] = useState(false);
  const installCmd = "brew install gfargo/tap/localpress";

  function handleCopy() {
    navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-mid) 0%, transparent 68%)", opacity: 0.7 }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 pt-14 md:pt-20">
        {/* Spec strip */}
        <FadeIn>
          <dl
            className="mb-10 grid grid-cols-2 overflow-hidden rounded-lg sm:flex sm:flex-wrap sm:items-stretch"
            style={{ border: "1px solid var(--wire)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-2 border-b border-r px-4 py-2.5 sm:border-b-0 sm:border-r" style={{ borderColor: "var(--wire)" }}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
              <dt className="sr-only">Version</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--ink)" }}>v{version}</dd>
            </div>
            <div className="flex items-center border-b px-4 py-2.5 sm:border-b-0 sm:border-r" style={{ borderColor: "var(--wire)" }}>
              <dt className="sr-only">License</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--dim)" }}>MIT licensed</dd>
            </div>
            <div className="flex items-center border-r px-4 py-2.5 sm:border-r" style={{ borderColor: "var(--wire)" }}>
              <dt className="sr-only">Platforms</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--dim)" }}>macOS · Linux · Win</dd>
            </div>
            <div className="flex items-center px-4 py-2.5">
              <dt className="sr-only">Cost</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--dim)" }}>$0 / month</dd>
            </div>
          </dl>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={80}>
          <p className="spec-label mb-5">// local-first wordpress tooling</p>
          <h1
            className="font-display max-w-5xl text-[2.75rem] leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ color: "var(--ink)" }}
          >
            Your machine does the work.
            <br />
            WordPress just{" "}
            <span className="glow-accent">syncs.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={180}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--body)" }}>
            Optimize images, strip backgrounds, generate metadata, audit accessibility, and undo any
            change. It all runs on your own laptop, then pushes to any WordPress site over the REST
            API. No cloud SaaS, no per-image credits, no plugin.
          </p>
        </FadeIn>

        {/* Install + CTAs */}
        <FadeIn delay={260}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div
              className="flex items-center gap-3 rounded-lg px-4 py-3"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span className="shrink-0 select-none font-mono text-sm font-semibold" style={{ color: "var(--accent)" }}>$</span>
              <code className="flex-1 font-mono text-sm" style={{ color: "var(--warm)" }}>{installCmd}</code>
              <button
                onClick={handleCopy}
                className="shrink-0 rounded px-2 py-1 font-mono text-[11px] uppercase tracking-wider transition-all"
                style={{
                  color: copied ? "var(--accent)" : "var(--dim)",
                  border: "1px solid var(--border)",
                  background: copied ? "var(--accent-subtle)" : "transparent",
                }}
                aria-label="Copy install command"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>

            <Link
              href="/docs/getting-started"
              className="flex shrink-0 items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
            >
              Get started →
            </Link>
          </div>
        </FadeIn>

        {/* Hero GIF — framed */}
        <FadeIn delay={340}>
          <div className="mt-16">
            <div className="mb-2 flex items-end justify-between">
              <span className="spec-label">fig.01 · interactive media browser</span>
              <span className="spec-label hidden sm:inline">$ localpress list -i</span>
            </div>
            <div
              className="terminal-frame overflow-hidden rounded-xl"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 40px 90px -40px rgba(20,19,15,0.35)",
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                </div>
                <span className="ml-2 font-mono text-xs" style={{ color: "var(--dim)" }}>localpress list -i</span>
              </div>
              <div style={{ background: "#1e1e2e" }}>
                <Image
                  src="/screenshots/demo-browser-hero.gif"
                  alt="localPress interactive media browser — navigate items, view details, and configure optimization from the terminal"
                  width={1400}
                  height={875}
                  className="h-auto w-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
