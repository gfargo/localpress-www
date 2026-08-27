import Image from "next/image";
import { FadeIn } from "./FadeIn";

const hero = {
  src: "/screenshots/demo-browser-navigate.gif",
  alt: "localPress interactive media browser — navigate through your WordPress media library, open detail views, and manage images from the terminal",
  caption: "Browse, inspect, and act on your media library without leaving the terminal.",
  label: "localpress list -i",
};

const features = [
  {
    src: "/screenshots/ui-browser-optimize.png",
    alt: "localPress optimize settings — configure quality, format conversion, and replace-in-place from an inline overlay",
    caption: "Inline optimize · quality, format, replace mode",
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
    caption: "Format picker · WebP, AVIF, JPEG, PNG",
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
    caption: "Every action one keystroke away · optimize, convert, resize",
    label: "actions tour",
  },
  {
    src: "/screenshots/demo-full-workflow.gif",
    alt: "localPress full workflow — doctor check, list media, view stats dashboard",
    caption: "doctor → list → stats · the full localpress loop",
    label: "full workflow",
  },
];

function Chrome({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2"
      style={{ background: "var(--raised)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--muted)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--muted)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--muted)" }} />
      </div>
      <code className="ml-1 font-mono text-[11px]" style={{ color: accent ? "var(--accent)" : "var(--dim)" }}>
        {label}
      </code>
    </div>
  );
}

export function Showcase() {
  return (
    <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--wire)" }}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="spec-label mb-4">// see it in action</p>
            <h2 className="font-display text-3xl leading-[1.02] md:text-[2.75rem]" style={{ color: "var(--ink)" }}>
              A full media manager, in your terminal.
            </h2>
          </div>
        </FadeIn>

        {/* Hero GIF */}
        <FadeIn delay={120}>
          <div className="mb-3 flex items-end justify-between">
            <span className="spec-label">fig.02 · interactive browser</span>
            <span className="spec-label flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              live
            </span>
          </div>
          <div
            className="terminal-frame overflow-hidden rounded-xl"
            style={{ border: "1px solid var(--border)", boxShadow: "0 32px 80px -40px rgba(20,19,15,0.3)" }}
          >
            <Chrome label={hero.label} />
            <div style={{ background: "#1e1e2e" }}>
              <Image src={hero.src} alt={hero.alt} width={1400} height={933} className="h-auto w-full" priority unoptimized />
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm" style={{ color: "var(--body)" }}>{hero.caption}</p>
        </FadeIn>

        {/* Overlay screenshots */}
        <FadeIn>
          <p className="spec-label mb-6 mt-20">// keyboard-driven overlays · every action one keystroke away</p>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((shot, i) => (
            <FadeIn key={shot.src} delay={i * 90}>
              <div
                className="terminal-frame card-glow overflow-hidden rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <Chrome label={shot.label} accent />
                <div style={{ background: "#1e1e2e" }}>
                  <Image src={shot.src} alt={shot.alt} width={700} height={467} className="h-auto w-full" />
                </div>
                <div className="px-4 py-3" style={{ background: "var(--surface)", borderTop: "1px solid var(--wire)" }}>
                  <p className="text-xs" style={{ color: "var(--body)" }}>{shot.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Workflow GIFs */}
        <FadeIn>
          <p className="spec-label mb-6 mt-20">// workflows, not screenshots</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {workflows.map((shot, i) => (
            <FadeIn key={shot.src} delay={i * 120}>
              <div
                className="terminal-frame overflow-hidden rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <Chrome label={shot.label} />
                <div style={{ background: "#1e1e2e" }}>
                  <Image src={shot.src} alt={shot.alt} width={700} height={467} className="h-auto w-full" unoptimized />
                </div>
                <div className="px-4 py-3" style={{ background: "var(--surface)", borderTop: "1px solid var(--wire)" }}>
                  <p className="text-xs" style={{ color: "var(--body)" }}>{shot.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
