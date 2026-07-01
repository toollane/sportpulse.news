import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBottomNav from "@/components/MobileBottomNav";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import ArticleNextLinks from "@/components/ArticleNextLinks";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.sportpulse.news";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SportPulse — Understand what happened in sports today",
    template: "%s · SportPulse",
  },
  description:
    "SportPulse is a fast, mobile-first sports briefing platform. Understand what happened, why it mattered, who is trending, and what to watch next.",
  keywords: [
    "sports news",
    "sports recaps",
    "trending athletes",
    "sports analysis",
    "game recaps",
    "sports briefing",
  ],
  authors: [{ name: "SportPulse" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "SportPulse",
    title: "SportPulse — Understand what happened in sports today",
    description:
      "A fast, mobile-first sports briefing platform. What happened, why it mattered, who is trending, and what to watch next.",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportPulse — Understand what happened in sports today",
    description:
      "A fast, mobile-first sports briefing platform. What happened, why it mattered, who is trending, and what to watch next.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "sports",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SportPulse",
      url: siteUrl,
      description:
        "An independent sports media and analysis project covering trends, recaps, explanations, and daily briefings.",
      email: "hello@sportpulse.news",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "SportPulse",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <ReadingProgressBar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <ArticleNextLinks />
        <BackToTopButton />
        <MobileBottomNav />
        <SiteFooter />
      </body>
    </html>
  );
}