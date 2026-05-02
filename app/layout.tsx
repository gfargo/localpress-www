import type { Metadata } from "next";
import { Fraunces, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["WONK", "opsz", "SOFT"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — localPress",
    default: "localPress — Local-compute WordPress media optimization",
  },
  description:
    "Your laptop, your library. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors — then sync back to WordPress. No cloud SaaS. No recurring credits. No plugin required.",
  keywords: [
    "wordpress",
    "cli",
    "media",
    "image-optimization",
    "background-removal",
    "local-first",
    "rest-api",
  ],
  authors: [{ name: "Griffen Fargo", url: "https://github.com/gfargo" }],
  metadataBase: new URL("https://localpress.griffen.codes"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://localpress.griffen.codes",
    siteName: "localPress",
    title: "localPress — Local-compute WordPress media optimization",
    description:
      "Your laptop, your library. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors — then sync back to WordPress.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "localPress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "localPress — Local-compute WordPress media optimization",
    description: "Your laptop, your library.",
    creator: "@gfargo",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
