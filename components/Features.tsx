import { FadeIn } from "./FadeIn";

const pillars = [
  {
    num: "01",
    title: "Your hardware does the work",
    pain: "Cloud plugins charge $4–13/month for compute your laptop does for free.",
    fix: "State-of-the-art BiRefNet runs background removal on your M-series Mac in 1.5 seconds. ShortPixel charges 1 credit per image. You do the math.",
  },
  {
    num: "02",
    title: "Works with any WordPress host",
    pain: "EWWW needs exec() and shell access that most shared hosts block.",
    fix: "localPress talks to WordPress via Application Passwords (built into WP core since 5.6). Works on the cheapest shared host. Your laptop is the runtime.",
  },
  {
    num: "03",
    title: "Round-trip with real editors",
    pain: "No plugin lets you open an image in Photoshop, edit, and sync back.",
    fix: "Open in GIMP, Photoshop, or Preview. Save. It syncs back automatically. The workflow designers actually want — no one else offers it.",
  },
  {
    num: "04",
    title: "Built for AI agents",
    pain: "No image optimizer integrates with Claude, Cursor, or MCP-native agents.",
    fix: "First-party MCP server with 40+ typed tools. Drop one config block into your agent and it manages your entire media library autonomously.",
  },
];

export function Features() {
  return (
    <section id="features" className="noise-overlay relative" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-20">
        <FadeIn>
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            Why localPress
          </p>
          <h2
            className="font-display max-w-2xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            WordPress media plugins charge monthly for what your laptop does for free
          </h2>
          <p
            className="mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--body)" }}
          >
            Smush, ShortPixel, Imagify — they all send your images to a remote server and bill you per-image or per-month. localPress processes everything on your own machine and syncs results back via the REST API.
          </p>
        </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map(({ num, title, pain, fix }, i) => (
            <FadeIn key={num} delay={i * 100}>
            <div
              className="card-glow flex flex-col gap-3 rounded-lg p-6"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display text-2xl font-semibold italic leading-none"
                  style={{ color: "var(--wire)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <h3 className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
                <span style={{ color: "var(--body)" }}>{pain}</span>
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>
                {fix}
              </p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
