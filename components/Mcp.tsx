"use client";

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
              New in v1.14 · MCP server
            </p>
            <h2
              className="font-display max-w-2xl text-3xl font-semibold italic leading-tight md:text-5xl"
              style={{ color: "var(--ink)" }}
            >
              Now an{" "}
              <span className="glow-accent" style={{ color: "var(--accent)" }}>
                MCP server.
              </span>
            </h2>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed md:text-base"
              style={{ color: "var(--body)" }}
            >
              Drop one config block into Claude Desktop, Cursor, or Claude Code.
              Get 33 typed tools and 4 resources — every feature of the CLI,
              with structured schemas. Same binary, new entrypoint. No daemon,
              no hosting, no separate config.
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
            33 tools · 4 resources
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
            style={{ background: "var(--accent)", color: "#040404" }}
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
