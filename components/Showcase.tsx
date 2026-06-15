import Image from "next/image";
import { FadeIn } from "./FadeIn";

const hero = {
  src: "/screenshots/demo-browser-navigate.gif",
  alt: "localPress interactive media browser — navigate through your WordPress media library, open detail views, and manage images from the terminal",
  caption: "Browse, inspect, and action your entire media library without leaving the terminal",
  label: "localpress list -i",
};

const features = [
  {
    src: "/screenshots/ui-browser-optimize.png",
    alt: "localPress optimize settings — configure quality, format conversion, and replace-in-place from an inline overlay",
    caption: "Inline optimize settings — quality, format, replace mode",
    label: "[o] optimize",
  },
  {
    src: "/screenshots/ui-browser-search.png",
    alt: "localPress search filter — live filtering narrows your media library as you type",
    caption: "Live search filters as you type",
    label: "[/] search",
  },
  {
    src: "/screenshots/ui-browser-convert.png",
    alt: "localPress format conversion — pick WebP, AVIF, JPEG, or PNG from a keyboard-driven picker",
    caption: "Format picker — WebP, AVIF, JPEG, PNG",
    label: "[c] convert",
  },
  {
    src: "/screenshots/ui-browser-details.png",
    alt: "localPress detail view — full metadata including dimensions, alt text, registered sizes, and processing status",
    caption: "Full metadata detail view",
    label: "[↵] details",
  },
];

const workflows = [
  {
    src: "/screenshots/demo-browser-actions-tour.gif",
    alt: "localPress actions tour — cycling through optimize, convert, and resize overlays",
    caption: "Every action at your fingertips — optimize, convert, resize",
    label: "Actions tour",
  },
  {
    src: "/screenshots/demo-full-workflow.gif",
    alt: "localPress full workflow — doctor check, list media, view stats dashboard",
    caption: "doctor → list → stats — the full localpress experience",
    label: "Full workflow",
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
          <FadeIn>
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
            A full media manager in your terminal
          </h2>
          </FadeIn>
        </div>

        {/* ── Hero GIF — interactive browser in motion ── */}
        <FadeIn delay={150}>
        <div
          className="terminal-frame mx-auto max-w-5xl overflow-hidden rounded-xl"
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
              {hero.label}
            </span>
            <span
              className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider"
              style={{
                color: "var(--accent)",
                border: "1px solid var(--accent-subtle)",
                background: "var(--accent-subtle)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              live
            </span>
          </div>

          {/* GIF */}
          <div style={{ background: "#1e1e2e" }}>
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Caption */}
        </FadeIn>
        <p
          className="mt-5 text-center text-sm"
          style={{ color: "var(--body)" }}
        >
          {hero.caption}
        </p>

        {/* ── Feature screenshots — overlays and modes ── */}
        <div className="mt-20 mb-6 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            Keyboard-driven overlays
          </p>
          <h3
            className="font-display mx-auto max-w-md text-2xl font-semibold italic leading-tight md:text-3xl"
            style={{ color: "var(--ink)" }}
          >
            Every action, one keystroke away
          </h3>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((shot, i) => (
            <FadeIn key={shot.src} delay={i * 100} direction="up">
            <div
              className="group terminal-frame card-glow overflow-hidden rounded-lg"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3)",
              }}
            >
              {/* Mini chrome */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  background: "var(--raised)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div className="flex gap-1.5" aria-hidden="true">
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
                <code
                  className="text-[11px]"
                  style={{ color: "var(--accent)" }}
                >
                  {shot.label}
                </code>
              </div>

              <div style={{ background: "#1e1e2e" }}>
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
            </FadeIn>
          ))}
        </div>

        {/* ── Workflow GIFs — the tool in motion ── */}
        <FadeIn>
        <div className="mt-20 mb-6 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            See it in action
          </p>
          <h3
            className="font-display mx-auto max-w-md text-2xl font-semibold italic leading-tight md:text-3xl"
            style={{ color: "var(--ink)" }}
          >
            Workflows, not screenshots
          </h3>
        </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {workflows.map((shot, i) => (
            <FadeIn key={shot.src} delay={i * 150}>
            <div
              className="terminal-frame overflow-hidden rounded-lg"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 12px 48px -8px rgba(0,0,0,0.4)",
              }}
            >
              {/* Chrome */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  background: "var(--raised)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div className="flex gap-1.5" aria-hidden="true">
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
                <span
                  className="text-[11px]"
                  style={{ color: "var(--dim)" }}
                >
                  {shot.label}
                </span>
              </div>

              <div style={{ background: "#1e1e2e" }}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
