import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "localpress — Local-compute WordPress media optimization",
  description: "Your laptop, your library. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors — then sync back to WordPress. No cloud SaaS. No recurring credits. No plugin required.",
  keywords: ["wordpress", "cli", "media", "image-optimization", "background-removal", "local-first", "rest-api"],
  authors: [{ name: "Griffen Fargo", url: "https://github.com/gfargo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://localpress.griffen.codes",
    title: "localpress — Local-compute WordPress media optimization",
    description: "Your laptop, your library. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors — then sync back to WordPress.",
    images: [{ url: "https://localpress.griffen.codes/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "localpress — Local-compute WordPress media optimization",
    description: "Your laptop, your library.",
    creator: "@gfargo",
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
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
