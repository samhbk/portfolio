import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { metaTitle, site, socialCardTitle } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | ${metaTitle}`,
  description: site.tagline,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · ${socialCardTitle}`,
    description: site.tagline,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${socialCardTitle}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#131218",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${jetbrains.variable} min-h-screen bg-terminal font-sans text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
