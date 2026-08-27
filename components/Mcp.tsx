"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const config = `{
  "mcpServers": {
    "localpress": {
      "command": "localpress",
      "args": ["mcp"]
    }
  }
}`;

const toolGroups = [
  { label: "Setup", tools: ["sites_list", "sites_use", "sites_add", "sites_remove", "doctor", "health_check", "config_*"] },
  { label: "Discovery", tools: ["list", "show", "stats", "audit", "references", "search_by_url", "site_briefing", "watch_status"] },
  { label: "Content", tools: ["posts_list", "posts_show", "posts_create", "posts_update", "posts_delete"] },
  { label: "Accessibility", tools: ["a11y_audit"] },
  { label: "Vision AI", tools: ["caption", "generate_title", "generate_description", "tag", "classify", "vision"] },
  { label: "Processing", tools: ["optimize", "convert", "resize", "remove_bg", "update_metadata"] },
  { label: "Library", tools: ["pull", "push", "delete", "rename", "regenerate", "export", "import"] },
  { label: "Time-machine", tools: ["history_list", "history_show", "history_prune", "undo"] },
];

const resources = ["localpress://sites", "localpress://stats", "localpress://capabilities", "localpress://history"];

export function Mcp() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(config).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section id="agents" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="spec-label mb-4">// agent-native</p>
            <h2 className="font-display max-w-2xl text-3xl leading-[1.02] md:text-5xl" style={{ color: "var(--ink)" }}>
              Built for <span className="glow-accent">AI agents.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "var(--body)" }}>
              Drop one config block into Claude Desktop, Cursor, Kiro, or any MCP client. 52 typed
              tools cover every operation — from bulk optimization to accessibility audits. Same
              binary, new entrypoint. Agents manage your entire media library autonomously.
            </p>
          </div>

          {/* Config snippet */}
          <div className="overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
            <div
              className="flex items-center justify-between px-4 py-2.5"
              style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
            >
              <span className="spec-label">claude_desktop_config.json</span>
              <button
                onClick={handleCopy}
                className="rounded px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider transition-all"
                style={{
                  color: copied ? "var(--accent)" : "var(--dim)",
                  border: "1px solid var(--border)",
                  background: copied ? "var(--accent-subtle)" : "transparent",
                }}
                aria-label="Copy MCP config"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed" style={{ background: "var(--bg)", color: "var(--warm)" }}>
              <code>{config}</code>
            </pre>
          </div>
        </div>

        {/* Agent demo GIF */}
        <div className="mb-12">
          <div className="mb-3 flex items-end justify-between">
            <span className="spec-label">fig.04 — agent driving localpress</span>
            <span className="spec-label hidden sm:inline">claude · localpress mcp</span>
          </div>
          <div
            className="terminal-frame mx-auto overflow-hidden rounded-xl"
            style={{ border: "1px solid var(--border)", boxShadow: "0 24px 70px -36px rgba(20,19,15,0.3)" }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
              </div>
              <span className="ml-2 font-mono text-xs" style={{ color: "var(--dim)" }}>claude — localpress MCP</span>
            </div>
            <div style={{ background: "#1e1e2e" }}>
              <Image
                src="/screenshots/demo-mcp-agent.gif"
                alt="AI agent using localpress MCP tools — lists unoptimized images and compresses them to WebP automatically"
                width={1200}
                height={720}
                className="h-auto w-full"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--body)" }}>
            An AI agent finds and optimizes unoptimized images — no manual commands needed.
          </p>
        </div>

        {/* Tool grid */}
        <div className="overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
          <div className="spec-label px-5 py-3" style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}>
            52 tools · 4 resources
          </div>
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--wire)" }}>
            {toolGroups.map(({ label, tools }) => (
              <div key={label} className="h-full p-5" style={{ background: "var(--surface)" }}>
                <div className="spec-label mb-3">{label}</div>
                <ul className="space-y-1.5">
                  {tools.map((tool) => (
                    <li key={tool} className="font-mono text-xs" style={{ color: "var(--accent)" }}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="px-5 py-4" style={{ background: "var(--surface)", borderTop: "1px solid var(--wire)" }}>
            <div className="spec-label mb-3">resources</div>
            <div className="flex flex-wrap gap-3">
              {resources.map((r) => (
                <code
                  key={r}
                  className="rounded px-2 py-1 font-mono text-xs"
                  style={{ background: "var(--bg)", color: "var(--accent)", border: "1px solid var(--wire)" }}
                >
                  {r}
                </code>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/docs/mcp-setup"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            MCP Setup guide →
          </Link>
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm transition-opacity hover:opacity-75"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            About the Model Context Protocol ↗
          </a>
        </div>
      </div>
    </section>
  );
}
