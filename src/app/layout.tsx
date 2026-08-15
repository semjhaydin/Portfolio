import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://semihaydin.dev"),
  title: {
    default: "Semih Aydın — Software Developer & Bilgisayar Mühendisliği Öğrencisi",
    template: "%s | Semih Aydın",
  },
  description: PORTFOLIO_CONFIG.personal.bio,
  keywords: [
    "Semih Aydın",
    "Software Developer",
    "Bilgisayar Mühendisliği",
    "Trabzon Üniversitesi",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "SQL",
    "Arka Kanat",
    "Rabona Kadroda",
    "Full-Stack Developer",
    "Portfolyo",
  ],
  authors: [{ name: PORTFOLIO_CONFIG.personal.name, url: "https://semihaydin.dev" }],
  creator: PORTFOLIO_CONFIG.personal.name,
  publisher: PORTFOLIO_CONFIG.personal.name,
  icons: {
    icon: [
      { url: "/logowhitetrans-small.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://semihaydin.dev",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://semihaydin.dev",
    title: "Semih Aydın — Software Developer & Bilgisayar Mühendisliği Öğrencisi",
    description: PORTFOLIO_CONFIG.personal.bio,
    siteName: "Semih Aydın Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Semih Aydın — Software Developer & Bilgisayar Mühendisliği Öğrencisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semih Aydın — Software Developer & Bilgisayar Mühendisliği Öğrencisi",
    description: PORTFOLIO_CONFIG.personal.bio,
    creator: "@semjhaydin",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark h-full">
      <body className="h-full bg-[#070709] text-[#f5f5f7] antialiased overflow-x-hidden select-none">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
