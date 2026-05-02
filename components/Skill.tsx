"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Discover via MCP",
    body: "Your AI agent uses its connected WordPress MCP server to find attachments that need work.",
    cmd: "wp_list_media --filter='unoptimized'",
  },
  {
    num: "02",
    title: "Process via localpress",
    body: "The agent runs localpress commands locally — compress, convert, or remove backgrounds using your CPU/GPU.",
    cmd: "localpress optimize 123 124 125 --json",
  },
  {
    num: "03",
    title: "Verify via MCP",
    body: "The agent uses the WP MCP again to confirm changes landed and references are intact.",
    cmd: "wp_get_media 123 --fields=size_bytes,alt_text",
  },
];

const mcpServers = [
  {
    name: "mcp-adapter",
    by: "WordPress.org (official)",
    desc: "Bridges WordPress Abilities API to MCP. Ships in WP 6.9+ core.",
    href: "https://github.com/wordpress/mcp-adapter",
  },
  {
    name: "mcp-wordpress",
    by: "docdyhr",
    desc: "59 tools across 10 categories including media upload/list/update/delete.",
    href: "https://github.com/docdyhr/mcp-wordpress",
  },
];

export function Skill() {
  return (
    <section id="skill" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            AI agent integration
          </p>
          <h2
            className="font-display max-w-xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            A skill, not a server
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "var(--body)" }}>
            A markdown skill teaches your AI agent how to drive localpress — composing with whatever
            WordPress MCP server you already have. No new protocol code, no versioning headaches.
          </p>
        </div>

        {/* Three-step workflow */}
        <div
          className="mb-12 overflow-hidden rounded-lg"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="px-5 py-3 text-xs uppercase tracking-widest"
            style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)", color: "var(--dim)" }}
          >
            Three-step composition
          </div>
          <div className="grid gap-px md:grid-cols-3" style={{ background: "var(--wire)" }}>
            {steps.map(({ num, title, body, cmd }) => (
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
                <p className="mb-4 text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                  {body}
                </p>
                <code
                  className="block rounded px-3 py-2 text-xs"
                  style={{ background: "var(--bg)", color: "var(--accent)", border: "1px solid var(--wire)" }}
                >
                  {cmd}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Compatible MCP servers */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
              Compatible WordPress MCP servers
            </p>
            <div className="space-y-2">
              {mcpServers.map(({ name, by, desc, href }) => (
                <div
                  key={name}
                  className="flex items-start justify-between gap-4 rounded-lg p-4"
                  style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
                >
                  <div className="min-w-0">
                    <div className="mb-0.5 text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {name}
                    </div>
                    <div className="mb-1 text-xs" style={{ color: "var(--dim)" }}>{by}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>{desc}</div>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs transition-opacity hover:opacity-75"
                    style={{ color: "var(--accent)" }}
                  >
                    GitHub ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Get the skill */}
          <div
            className="flex flex-col justify-between rounded-lg p-6"
            style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
          >
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
                Get the skill
              </p>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                The skill lives in the repo. AI agents can read it directly via a file reference or
                URL. Point Claude Desktop, Cursor, or any MCP client at it.
              </p>
              <code
                className="mb-4 block rounded px-3 py-3 text-xs leading-relaxed"
                style={{ background: "var(--bg)", color: "var(--warm)", border: "1px solid var(--wire)" }}
              >
                {`"Remove backgrounds from the last 5\nproduct photos in my WordPress library"`}
              </code>
            </div>
            <Link
              href="https://github.com/gfargo/localpress/blob/main/skill/SKILL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80 w-fit"
              style={{ background: "var(--accent-subtle)", color: "var(--accent)", border: "1px solid var(--accent-mid)" }}
            >
              View skill/SKILL.md ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
