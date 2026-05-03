import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand + tagline */}
          <div>
            <Link href="/" className="text-sm font-medium" style={{ color: "var(--ink)" }}>
              localPress
            </Link>
            <p className="mt-0.5 text-xs" style={{ color: "var(--dim)" }}>
              Local-first WordPress tooling. MIT License.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs" aria-label="Footer navigation">
            {[
              { href: "/docs", label: "Docs" },
              { href: "https://github.com/gfargo/localpress", label: "GitHub", external: true },
              { href: "https://github.com/gfargo/localpress/releases", label: "Releases", external: true },
              { href: "https://github.com/gfargo/localpress/issues", label: "Issues", external: true },
              { href: "https://github.com/gfargo/homebrew-localpress", label: "Homebrew tap", external: true },
            ].map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="transition-colors hover:text-[color:var(--ink)]"
                style={{ color: "var(--dim)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Griffen Fargo
          </p>
        </div>
      </div>
    </footer>
  );
}
