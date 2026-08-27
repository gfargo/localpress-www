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
    <section id="compare" style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="spec-label mb-4">// the full picture</p>
            <h2 className="font-display text-3xl leading-[1.02] md:text-[2.75rem]" style={{ color: "var(--ink)" }}>
              How localPress stacks up.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "var(--body)" }}>
              Feature by feature against five WordPress image optimization plugins you already know.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full min-w-[680px] border-collapse text-xs">
              <thead>
                <tr style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
                  <th className="px-5 py-4 text-left spec-label" style={{ fontWeight: 400 }}>Feature</th>
                  {cols.map((col) => {
                    const isLp = col === "localpress";
                    return (
                      <th
                        key={col}
                        className="px-4 py-4 text-left font-mono text-[11px] uppercase tracking-[0.14em]"
                        style={{
                          color: isLp ? "var(--accent)" : "var(--dim)",
                          background: isLp ? "var(--accent-subtle)" : "transparent",
                          fontWeight: isLp ? 600 : 400,
                        }}
                      >
                        {labels[col]}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--wire)" : "none" }}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "var(--warm)" }}>{row.feature}</td>
                    {cols.map((col) => {
                      const val = row[col];
                      const isLp = col === "localpress";
                      const isCheck = val === "✓" || val.startsWith("✓");
                      const isCross = val === "✗";
                      return (
                        <td
                          key={col}
                          className="px-4 py-3.5 font-mono"
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
