const checks = [
  { name: "--unoptimized", desc: "Images never processed by localpress" },
  { name: "--large", desc: "Images over a size threshold (default 1MB)" },
  { name: "--missing-alt", desc: "Images without alt text (accessibility/SEO)" },
  { name: "--display-size", desc: "Images significantly larger than their largest WP thumbnail" },
  { name: "--duplicates", desc: "Perceptually identical images via dHash" },
  { name: "--broken-refs", desc: "Attachment URLs that 404" },
  { name: "--orphans", desc: "Files on disk with no DB record (requires WP-CLI)" },
];

export function Audit() {
  return (
    <section id="audit" className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Comprehensive library health check
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            The `audit` command runs multiple checks in a single pass to find optimization opportunities, accessibility issues, and broken references.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {checks.map((check) => (
              <div key={check.name} className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="mt-1 min-w-[120px] rounded bg-zinc-900 px-2 py-1 font-mono text-sm text-white dark:bg-zinc-50 dark:text-zinc-900">
                  {check.name}
                </code>
                <span className="text-zinc-600 dark:text-zinc-400">{check.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-zinc-900 p-4 text-sm text-white dark:bg-zinc-50 dark:text-zinc-900">
            <div className="mb-2 font-mono">Example: localpress audit</div>
            <pre className="font-mono">
              {`Audited 847 item(s) on 'production':

  Unoptimized: 45
    #123  photo.jpg  Not yet processed
    #124  banner.png  Not yet processed
    ...

  Oversized for display context: 8
    #101  bg.jpg  Source is 4000×3000 but largest registered size is 1024×768 (large) — 15.3× oversized
    ...

  Duplicates: 3
    #202  logo.png  Perceptually similar to attachment(s) #203, #204
    ...

  Total findings: 58
  Run \`localpress optimize --unoptimized --apply\` to process unoptimized items.`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
