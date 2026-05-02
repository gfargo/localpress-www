const features = [
  {
    num: "01",
    title: "Bring your own GPU",
    body: "Your M-series Mac does background removal in 1.5 seconds. ShortPixel charges 1 credit per image. You do the math.",
  },
  {
    num: "02",
    title: "No host required",
    body: "Works against any WordPress install via Application Passwords — even the cheapest shared host. Your laptop is the runtime.",
  },
  {
    num: "03",
    title: "Round-trip your real editor",
    body: "Open in GIMP, Photoshop, or Preview. Save. It syncs back automatically. The workflow designers actually want.",
  },
  {
    num: "04",
    title: "Composes with your MCP",
    body: "A companion skill teaches AI agents to drive the CLI alongside your existing WP MCP server. No new protocol code.",
  },
];

export function Features() {
  return (
    <section id="features" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            Why localpress
          </p>
          <h2
            className="font-display max-w-xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            Four reasons the cloud can't compete
          </h2>
        </div>

        <div className="grid gap-px md:grid-cols-2" style={{ background: "var(--wire)" }}>
          {features.map(({ num, title, body }) => (
            <div
              key={num}
              className="flex gap-6 p-8"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-display shrink-0 text-4xl font-semibold italic leading-none"
                style={{ color: "var(--wire)" }}
                aria-hidden="true"
              >
                {num}
              </span>
              <div>
                <h3 className="mb-2 text-base font-medium" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
