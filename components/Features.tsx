import { FadeIn } from "./FadeIn";

const pillars = [
  {
    num: "01",
    title: "Your hardware does the work",
    pain: "Cloud plugins charge $4–13/month for compute your laptop does for free.",
    fix: "Run BiRefNet, ISNet, or lightweight U2-Net models locally. localPress pins and checksum-verifies every download, then reuses one loaded session across the whole batch.",
  },
  {
    num: "02",
    title: "Works with any WordPress host",
    pain: "EWWW needs exec() and shell access that most shared hosts block.",
    fix: "localPress talks to WordPress via Application Passwords, built into WP core since 5.6. Works on the cheapest shared host. Your laptop is the runtime.",
  },
  {
    num: "03",
    title: "Round-trip with real editors",
    pain: "No plugin lets you open an image in Photoshop, edit, and sync back.",
    fix: "Open in GIMP, Photoshop, or Preview. Save. It syncs back on its own. This is the workflow designers actually want, and no one else offers it.",
  },
  {
    num: "04",
    title: "Built for AI agents",
    pain: "No image optimizer integrates with Claude, Cursor, Kiro, or MCP-native agents.",
    fix: "First-party MCP server with 52 typed tools. Drop one config block into your agent and it manages your entire media library autonomously.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="noise-overlay relative"
      style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}
    >
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="spec-label mb-4">// why localpress</p>
              <h2 className="font-display text-3xl leading-[1.02] md:text-[2.75rem]" style={{ color: "var(--ink)" }}>
                Plugins charge monthly for what your laptop does for free.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "var(--body)" }}>
              Smush, ShortPixel, and Imagify all ship your images to a remote server and bill you
              per-image or per-month. localPress processes everything on your own machine and syncs
              the results back over the REST API. Four reasons that&apos;s a better deal.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 border-t" style={{ borderColor: "var(--border)" }}>
          {pillars.map(({ num, title, pain, fix }, i) => (
            <FadeIn key={num} delay={i * 80}>
              <div
                className="card-glow grid gap-5 border-b px-1 py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-start md:gap-10 md:px-4"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <h3 className="text-lg font-medium tracking-tight" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <div className="flex flex-col gap-3">
                  <p className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
                    <span className="mt-0.5 shrink-0 font-mono text-xs" style={{ color: "var(--red-dim)" }}>✗</span>
                    <span>{pain}</span>
                  </p>
                  <p className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                    <span className="mt-0.5 shrink-0 font-mono text-xs" style={{ color: "var(--accent)" }}>→</span>
                    <span>{fix}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
