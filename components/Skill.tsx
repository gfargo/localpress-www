"use client";

import Link from "next/link";
import { useState } from "react";

const workflowSteps = [
  {
    step: 1,
    title: "Discover via MCP",
    description: "Your AI agent uses its connected WordPress MCP server (mcp-adapter, docdyhr/mcp-wordpress, etc.) to find attachments that need optimization.",
    code: "wp_list_media --filter='unoptimized'",
  },
  {
    step: 2,
    title: "Process via localpress",
    description: "The agent runs localpress commands to compress, convert, or remove backgrounds using your laptop's CPU/GPU.",
    code: "localpress optimize 123 124 125 --json",
  },
  {
    step: 3,
    title: "Verify via MCP",
    description: "The agent uses the WP MCP again to verify the changes landed and references are intact.",
    code: "wp_get_media 123 --fields=size_bytes,alt_text",
  },
];

const mcpServers = [
  {
    name: "mcp-adapter",
    developer: "WordPress.org (official)",
    description: "Bridges WordPress Abilities API to MCP. Ships in WP 6.9+ core.",
    link: "https://github.com/wordpress/mcp-adapter",
  },
  {
    name: "mcp-wordpress",
    developer: "docdyhr",
    description: "59 tools across 10 categories including media upload/list/update/delete.",
    link: "https://github.com/docdyhr/mcp-wordpress",
  },
  {
    name: "mcp-media-toolkit",
    developer: "kevinten-ai",
    description: "Local image processing (rembg + Pillow) but not WordPress-aware.",
    link: "https://github.com/kevinten-ai/mcp-media-toolkit",
  },
];

export function Skill() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="skill" className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">
            AI agent integration via companion skill
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            A markdown skill teaches your AI agent how to drive localpress — composing with whatever WordPress MCP server you already have connected. No new protocol code required.
          </p>

          <div className="mb-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              How it works: Three-step composition
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {workflowSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute -left-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
                    {step.step}
                  </div>
                  <div className="ml-6 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
                    <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                      {step.title}
                    </h4>
                    <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                    <code className="block rounded bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                      {step.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              What&apos;s a skill? (Not a protocol server)
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                  Skill (what we ship)
                </h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    <span>Markdown instruction sheet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    <span>Teaches agents when and how to invoke localpress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    <span>Composes with existing WP MCP servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    <span>Zero runtime dependencies</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                  MCP server (what we don&apos;t ship)
                </h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500">✗</span>
                    <span>JSON-RPC transport layer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500">✗</span>
                    <span>Protocol version compatibility work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500">✗</span>
                    <span>Competes with existing WP MCP servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500">✗</span>
                    <span>Requires constant updates as MCP spec evolves</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Compatible WordPress MCP servers
            </h3>
            <div className="grid gap-4">
              {mcpServers.map((server) => (
                <div
                  key={server.name}
                  className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                        {server.name}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {server.developer}
                      </p>
                    </div>
                    <Link
                      href={server.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-900 underline hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                    >
                      GitHub →
                    </Link>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {server.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-900 p-6 text-white dark:border-zinc-800 dark:bg-zinc-50 dark:text-zinc-900">
            <h3 className="mb-3 text-xl font-semibold">Get the skill</h3>
            <p className="mb-4 text-zinc-300 dark:text-zinc-700">
              The skill is included in the localpress repository. AI agents (Claude Desktop, Cursor, VS Code with MCP) can read it directly.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium">View skill markdown:</p>
                <Link
                  href="https://github.com/gfargo/localpress/blob/main/skill/SKILL.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  skill/SKILL.md
                </Link>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Example agent prompt:</p>
                <code className="block rounded bg-zinc-800 px-3 py-2 font-mono text-sm dark:bg-zinc-200 dark:text-zinc-900">
                  Remove backgrounds from the last 5 product photos in my WordPress media library
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}