import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  // Allow the v0 preview hosts to load Next.js dev resources (HMR / client runtime).
  // Without this, the page server-renders but never hydrates when viewed
  // cross-origin through the preview URL.
  allowedDevOrigins: [
    "*.vercel.run",
    "*.v0.build",
    "*.v0.dev",
    "*.vusercontent.net",
  ],
};

export default nextConfig;
