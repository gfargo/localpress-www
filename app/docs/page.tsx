import { getWikiPages } from "@/lib/wiki";

export const revalidate = 3600; // Revalidate every hour

export default async function DocsPage() {
  const pages = await getWikiPages();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-zinc-50">Documentation</h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        This documentation is pulled from the localpress GitHub Wiki. Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {pages.map((page) => (
          <a
            key={page.slug}
            href={page.url}
            className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-700"
          >
            <h3 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300">
              {page.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{page.description || "Documentation page"}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
