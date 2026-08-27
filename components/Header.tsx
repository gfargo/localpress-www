"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { openDocsSearch } from "./docs/DocsSearch";

const navLinks = [
  { href: "/#features", label: "why" },
  { href: "/#commands", label: "commands" },
  { href: "/#agents", label: "agents" },
  { href: "/#compare", label: "compare" },
  { href: "/docs", label: "docs" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        borderBottom: "1px solid var(--wire)",
        background: "color-mix(in srgb, var(--bg) 82%, transparent)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="localPress home">
          <span
            className="flex h-6 w-6 items-center justify-center rounded font-mono text-[13px] font-semibold"
            style={{ background: "var(--accent)", color: "var(--accent-btn-text)" }}
            aria-hidden="true"
          >
            lp
          </span>
          <span className="cursor-blink text-[15px] font-semibold tracking-tight" style={{ color: "var(--ink)" }}>
            localPress
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover-ink rounded px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openDocsSearch}
            aria-label="Search documentation"
            className="hidden items-center gap-2 rounded-md py-1.5 pl-2.5 pr-2 transition-colors hover-wire md:flex"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
          >
            <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Search</span>
            <kbd
              className="rounded px-1.5 py-0.5 font-mono text-[0.625rem]"
              style={{ background: "var(--raised)", border: "1px solid var(--wire)", color: "var(--dim)" }}
            >
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href="https://github.com/gfargo/localpress"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-80 sm:flex"
            style={{ color: "var(--dim)", border: "1px solid var(--border)" }}
          >
            <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <Link
            href="/docs/getting-started"
            className="rounded-md px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-85"
            style={{ background: "var(--ink)", color: "var(--bg)" }}
          >
            Install
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
            style={{ border: "1px solid var(--border)", color: "var(--ink)" }}
          >
            {open ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{ borderTop: "1px solid var(--wire)", background: "var(--bg)" }}
        >
          <nav className="container mx-auto flex flex-col px-4 py-3" aria-label="Mobile navigation">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openDocsSearch();
              }}
              className="mb-2 flex items-center gap-2 rounded-md px-3 py-2.5"
              style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted)" }}
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Search docs</span>
            </button>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded px-2 py-3 font-mono text-xs uppercase tracking-[0.16em]"
                style={{ color: "var(--body)", borderBottom: "1px solid var(--wire)" }}
              >
                {label}
                <span aria-hidden="true" style={{ color: "var(--muted)" }}>→</span>
              </Link>
            ))}
            <a
              href="https://github.com/gfargo/localpress"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-md px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em]"
              style={{ color: "var(--dim)", border: "1px solid var(--border)" }}
            >
              <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
