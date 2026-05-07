import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/localPress - Interactive List.png",
    alt: "localPress interactive media browser — browse and filter your WordPress media library from the terminal",
    caption: "Browse your entire media library without leaving the terminal",
  },
  {
    src: "/screenshots/localPress - Preview Image.png",
    alt: "localPress image preview — see optimization results with before/after comparison in the browser",
    caption: "Preview optimization results before syncing back",
  },
  {
    src: "/screenshots/localPress - Details View A.png",
    alt: "localPress attachment details — view metadata, dimensions, file size, and optimization history",
    caption: "Full attachment metadata at a glance",
  },
];

export function Showcase() {
  return (
    <section
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--wire)",
      }}
    >
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            See it in action
          </p>
          <h2
            className="font-display mx-auto max-w-lg text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            A real CLI, not a toy
          </h2>
        </div>

        {/* Primary screenshot — full width, terminal chrome */}
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-xl"
          style={{
            border: "1px solid var(--border)",
            boxShadow:
              "0 24px 80px -12px rgba(0,0,0,0.5), 0 0 0 1px var(--wire)",
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: "var(--raised)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="flex gap-1.5" aria-hidden="true">
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#ff5f57" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#febc2e" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ background: "#28c840" }}
              />
            </div>
            <span
              className="ml-3 text-xs"
              style={{ color: "var(--dim)" }}
            >
              localpress list — Interactive Media Browser
            </span>
          </div>

          {/* Screenshot */}
          <div style={{ background: "var(--surface)" }}>
            <Image
              src={screenshots[0].src}
              alt={screenshots[0].alt}
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Caption */}
        <p
          className="mt-5 text-center text-sm"
          style={{ color: "var(--body)" }}
        >
          {screenshots[0].caption}
        </p>

        {/* Secondary screenshots — two-up grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {screenshots.slice(1).map((shot) => (
            <div
              key={shot.src}
              className="overflow-hidden rounded-lg"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3)",
              }}
            >
              {/* Mini chrome */}
              <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{
                  background: "var(--raised)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--muted)" }}
                />
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--muted)" }}
                />
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--muted)" }}
                />
              </div>

              <div style={{ background: "var(--surface)" }}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <div
                className="px-4 py-3"
                style={{
                  background: "var(--raised)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--body)" }}>
                  {shot.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
