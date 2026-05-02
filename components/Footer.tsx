
export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold text-zinc-900 dark:text-zinc-50">localpress</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Local-compute WordPress media optimization. Your laptop, your library.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="https://github.com/gfargo/localpress" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/gfargo/localpress/releases" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  Releases
                </a>
              </li>
              <li>
                <a href="https://github.com/gfargo/localpress/issues" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  Issues
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Install</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs dark:bg-zinc-800">brew install gfargo/localpress/localpress</code>
              </li>
              <li>
                <a href="https://github.com/gfargo/homebrew-localpress" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  Homebrew tap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">License</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              MIT License
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Griffen Fargo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
