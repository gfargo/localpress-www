import Link from "next/link";

export function Install() {
  return (
    <section className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Install localpress
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            Choose your preferred installation method. We recommend Homebrew for macOS and Linux users.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Homebrew</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                Recommended for macOS and Linux
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-50 dark:to-zinc-400 opacity-75 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative flex items-center rounded-lg bg-white px-4 py-3 font-mono text-zinc-900 dark:bg-black dark:text-zinc-50">
                  <span className="mr-2 text-zinc-400">$</span>
                  <code className="text-sm">brew install gfargo/localpress/localpress</code>
                </div>
              </div>
              <Link
                href="https://github.com/gfargo/homebrew-localpress"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-zinc-900 underline hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                View Homebrew tap
              </Link>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Binary download</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                Pre-built binaries for all platforms
              </p>
              <Link
                href="https://github.com/gfargo/localpress/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Download from GitHub Releases
              </Link>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">From source</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                Requires Bun &gt;= 1.1.0
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-50 dark:to-zinc-400 opacity-75 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative flex items-center rounded-lg bg-white px-4 py-3 font-mono text-zinc-900 dark:bg-black dark:text-zinc-50">
                  <span className="mr-2 text-zinc-400">$</span>
                  <code className="text-sm">git clone https://github.com/gfargo/localpress.git</code>
                </div>
              </div>
              <Link
                href="https://github.com/gfargo/localpress"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-zinc-900 underline hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
