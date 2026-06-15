import { FadeIn } from "./FadeIn";

const rows = [
  { feature: "Processing location", localpress: "Your laptop", ewww: "WP server", shortpixel: "Cloud", smush: "Cloud", imagify: "Cloud" },
  { feature: "Recurring cost", localpress: "$0", ewww: "$0 – $25/mo", shortpixel: "$4 – $10/mo", smush: "$3 – $13/mo", imagify: "$6 – $12/mo" },
  { feature: "Works on shared host", localpress: "✓", ewww: "Needs exec()", shortpixel: "✓", smush: "✓", imagify: "✓" },
  { feature: "AI background removal", localpress: "✓ local", ewww: "✗", shortpixel: "✓ paid", smush: "✗", imagify: "✗" },
  { feature: "Desktop editor round-trip", localpress: "✓", ewww: "✗", shortpixel: "✗", smush: "✗", imagify: "✗" },
  { feature: "AI agent skill", localpress: "✓", ewww: "✗", shortpixel: "✗", smush: "✗", imagify: "✗" },
  { feature: "License", localpress: "MIT", ewww: "GPLv3", shortpixel: "Proprietary", smush: "Mixed", imagify: "Proprietary" },
];

const cols = ["localpress", "ewww", "shortpixel", "smush", "imagify"] as const;
const labels: Record<(typeof cols)[number], string> = {
  localpress: "localPress",
  ewww: "EWWW",
  shortpixel: "ShortPixel",
  smush: "Smush",
  imagify: "Imagify",
};

export function Comparison() {
  return (
    <section id="compare" style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-20">
        <FadeIn>
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            The full picture
          </p>
          <h2
            className="font-display max-w-2xl text-3xl font-semibold italic leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            How localPress stacks up
          </h2>
          <p
            className="mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--body)" }}
          >
            Feature-by-feature against the five most popular WordPress image optimization plugins.
          </p>
        </div>
        </FadeIn>

        <FadeIn delay={150}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-xs">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th className="py-3 pr-6 text-left font-medium" style={{ color: "var(--dim)" }}>
                  Feature
                </th>
                {cols.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left font-medium"
                    style={{
                      color: col === "localpress" ? "var(--accent)" : "var(--dim)",
                      background: col === "localpress" ? "var(--accent-subtle)" : "transparent",
                    }}
                  >
                    {labels[col]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--wire)" : "none" }}
                >
                  <td className="py-3 pr-6 font-medium" style={{ color: "var(--warm)" }}>
                    {row.feature}
                  </td>
                  {cols.map((col) => {
                    const val = row[col];
                    const isLp = col === "localpress";
                    const isCheck = val === "✓" || val.startsWith("✓");
                    const isCross = val === "✗";
                    return (
                      <td
                        key={col}
                        className="px-4 py-3"
                        style={{
                          color: isCheck && isLp ? "var(--accent)" : isCross ? "var(--muted)" : isLp ? "var(--ink)" : "var(--body)",
                          background: isLp ? "var(--accent-subtle)" : "transparent",
                          fontWeight: isLp ? 500 : 400,
                        }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
