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
  {
    label: "Setup",
    tools: [
      "sites_list",
      "sites_use",
      "sites_add",
      "sites_remove",
      "doctor",
      "config_*",
    ],
  },
  {
    label: "Discovery",
    tools: ["list", "show", "stats", "audit", "references", "watch_status"],
  },
  {
    label: "Vision AI",
    tools: [
      "caption",
      "generate_title",
      "generate_description",
      "tag",
      "classify",
      "vision",
    ],
  },
  {
    label: "Processing",
    tools: [
      "optimize",
      "convert",
      "resize",
      "remove_bg",
      "update_metadata",
    ],
  },
  {
    label: "Library",
    tools: [
      "pull",
      "push",
      "delete",
      "rename",
      "regenerate",
      "export",
      "import",
    ],
  },
  {
    label: "Time-machine",
    tools: ["history_list", "history_show", "history_prune", "undo"],
  },
];

const resources = [
  "localpress://sites",
  "localpress://stats",
  "localpress://capabilities",
  "localpress://history",
];

export function Mcp() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(config).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section
      id="mcp"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}
    >
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p
              className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest"
              style={{ color: "var(--dim)" }}
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              Agent-native
            </p>
            <h2
              className="font-display max-w-2xl text-3xl font-semibold italic leading-tight md:text-5xl"
              style={{ color: "var(--ink)" }}
            >
              Built for{" "}
              <span className="glow-accent" style={{ color: "var(--accent)" }}>
                AI agents.
              </span>
            </h2>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed md:text-base"
              style={{ color: "var(--body)" }}
            >
              Drop one config block into Claude Desktop, Cursor, or any MCP client.
              40+ typed tools cover every operation — from bulk optimization to
              accessibility audits. Same binary, new entrypoint. Agents manage your
              entire media library autonomously.
            </p>
          </div>

          {/* Config snippet */}
          <div
            className="overflow-hidden rounded-lg"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="flex items-center justify-between px-4 py-2 text-xs uppercase tracking-widest"
              style={{
                background: "var(--raised)",
                borderBottom: "1px solid var(--border)",
                color: "var(--dim)",
              }}
            >
              <span>claude_desktop_config.json</span>
              <button
                onClick={handleCopy}
                className="rounded px-2 py-0.5 transition-all"
                style={{
                  color: copied ? "var(--accent)" : "var(--dim)",
                  border: "1px solid var(--border)",
                  background: copied ? "var(--accent-subtle)" : "transparent",
                }}
                aria-label="Copy MCP config"
              >
                {copied ? "copied ✓" : "copy"}
              </button>
            </div>
            <pre
              className="overflow-x-auto px-4 py-4 text-xs leading-relaxed"
              style={{ background: "var(--surface)", color: "var(--warm)" }}
            >
              <code>{config}</code>
            </pre>
          </div>
        </div>

        {/* MCP agent demo GIF */}
        <div className="mb-12">
          <div
            className="mx-auto max-w-3xl overflow-hidden rounded-xl"
            style={{
              border: "1px solid var(--border)",
              boxShadow: "0 16px 48px -12px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{
                background: "var(--raised)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--muted)" }} />
              </div>
              <span className="ml-2 text-xs" style={{ color: "var(--dim)" }}>
                claude — localpress MCP
              </span>
            </div>
            <div style={{ background: "#1e1e2e" }}>
              <Image
                src="/screenshots/demo-mcp-agent.gif"
                alt="AI agent using localpress MCP tools — lists unoptimized images and compresses them to WebP automatically"
                width={1000}
                height={600}
                className="w-full h-auto"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
          <p
            className="mt-4 text-center text-xs"
            style={{ color: "var(--dim)" }}
          >
            An AI agent finds and optimizes unoptimized images — no manual commands needed
          </p>
        </div>

        {/* Tool grid */}
        <div
          className="overflow-hidden rounded-lg"
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
            40+ tools · 4 resources
          </div>
          <div
            className="grid gap-px md:grid-cols-2 lg:grid-cols-3"
            style={{ background: "var(--wire)" }}
          >
            {toolGroups.map(({ label, tools }) => (
              <div
                key={label}
                className="p-5"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="mb-3 text-xs uppercase tracking-widest"
                  style={{ color: "var(--dim)" }}
                >
                  {label}
                </div>
                <ul className="space-y-1">
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-xs"
                      style={{ color: "var(--body)" }}
                    >
                      <code style={{ color: "var(--accent)" }}>{tool}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="px-5 py-4"
            style={{
              background: "var(--surface)",
              borderTop: "1px solid var(--wire)",
            }}
          >
            <div
              className="mb-2 text-xs uppercase tracking-widest"
              style={{ color: "var(--dim)" }}
            >
              Resources
            </div>
            <div className="flex flex-wrap gap-3">
              {resources.map((r) => (
                <code
                  key={r}
                  className="rounded px-2 py-1 text-xs"
                  style={{
                    background: "var(--bg)",
                    color: "var(--accent)",
                    border: "1px solid var(--wire)",
                  }}
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
            className="inline-flex items-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
          >
            MCP Setup guide →
          </Link>
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded px-4 py-2.5 text-sm transition-opacity hover:opacity-75"
            style={{ border: "1px solid var(--border)", color: "var(--dim)" }}
          >
            About the Model Context Protocol ↗
          </a>
        </div>
      </div>
    </section>
  );
}
