const items = [
  "$0 / MONTH",
  "RUNS ON YOUR HARDWARE",
  "38 COMMANDS",
  "LOCAL BACKGROUND REMOVAL",
  "VISION-AI METADATA",
  "REVERSIBLE BY DESIGN",
  "MCP-NATIVE · 52 TOOLS",
  "ANY WORDPRESS HOST",
  "REST API SYNC",
  "MIT LICENSED",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y"
      style={{ borderColor: "var(--wire)", background: "var(--ink)" }}
    >
      <div className="ticker-track py-3">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-mono text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--bg)" }}>
              {item}
            </span>
            <span className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
