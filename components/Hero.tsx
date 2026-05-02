"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
            Your laptop, <span className="text-zinc-900 dark:text-zinc-50">your library.</span>
          </h1>
          <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            Local-compute WordPress media optimization. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors — then sync back to WordPress. No cloud SaaS. No recurring credits. No plugin required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-50 dark:to-zinc-400 opacity-75 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative flex items-center rounded-lg bg-white px-6 py-3 font-mono text-zinc-900 dark:bg-black dark:text-zinc-50">
                <span className="mr-2 text-zinc-400">$</span>
                <code className="text-lg">brew install gfargo/localpress/localpress</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("brew install gfargo/localpress/localpress");
                  }}
                  className="ml-4 rounded bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                >
                  Copy
                </button>
              </div>
            </div>
            <Link
              href="https://github.com/gfargo/localpress"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
