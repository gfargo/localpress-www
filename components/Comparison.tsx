const features = [
  "Processing location",
  "Recurring cost",
  "Works on shared host",
  "AI background removal",
  "Desktop editor round-trip",
  "AI agent integration",
  "Open source",
];

const data = [
  {
    name: "localpress",
    values: ["Your laptop", "$0", "✓", "✓ (local)", "✓", "✓ (skill)", "MIT"],
  },
  {
    name: "EWWW",
    values: ["WP server", "$0-25/mo", "Requires exec()", "✗", "✗", "✗", "GPLv3"],
  },
  {
    name: "ShortPixel",
    values: ["Cloud", "$3.99-9.99/mo", "✓", "✓ (paid)", "✗", "✗", "Proprietary"],
  },
  {
    name: "Smush",
    values: ["Cloud", "$3-13/mo", "✓", "✗", "✗", "✗", "Mixed"],
  },
  {
    name: "Imagify",
    values: ["Cloud", "$5.99-11.99/mo", "✓", "✗", "✗", "✗", "Proprietary"],
  },
];

export function Comparison() {
  return (
    <section id="compare" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Competitive positioning
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            No existing tool combines WordPress-awareness, processing on the user's local machine, and round-trip workflows with desktop editors.
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  {data.map((item) => (
                    <th key={item.name} className="px-6 py-4 font-semibold">
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {features.map((feature, i) => (
                  <tr key={feature} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-50">{feature}</td>
                    {data.map((item) => (
                      <td key={item.name} className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {item.values[i]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
