/**
 * Fetch the latest release version from GitHub at build time.
 *
 * Uses the GitHub API with a short in-memory cache so multiple calls
 * during a single build don't hit the API repeatedly. The result is
 * baked into the static HTML at build time — no runtime fetch.
 */

const REPO = "gfargo/localpress";
const FALLBACK_VERSION = "2.3.0";

let cached: { version: string; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 60 * 1000; // 1 minute (covers a full build)

export async function getLatestVersion(): Promise<string> {
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.version;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Use a token if available to avoid rate limits in CI
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // Next.js fetch cache: 1 hour
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}, using fallback version`);
      return FALLBACK_VERSION;
    }

    const data = (await res.json()) as { tag_name: string };
    const version = data.tag_name.replace(/^v/, "");

    cached = { version, fetchedAt: Date.now() };
    return version;
  } catch (err) {
    console.warn("Failed to fetch latest release, using fallback:", err);
    return FALLBACK_VERSION;
  }
}
