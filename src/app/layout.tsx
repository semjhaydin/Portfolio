import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://semihaydin.dev"),
  title: {
    default: "Semih Aydın — Junior Software Developer & CS Student",
    template: "%s | Semih Aydın"
  },
  description: "Semih Aydın kişisel portfolyo web sitesi. Trabzon Üniversitesi Bilgisayar Mühendisliği Öğrencisi, Arka Kanat Kurucusu ve Yazılım Geliştirici.",
  keywords: [
    "Semih Aydın",
    "Semih Aydin",
    "semjhaydin",
    "Software Developer",
    "Computer Engineering",
    "Trabzon Üniversitesi",
    "Bilgisayar Mühendisliği",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "SQL",
    "Arka Kanat",
    "F1 E-sports"
  ],
  authors: [{ name: "Semih Aydın", url: "https://semihaydin.dev" }],
  creator: "Semih Aydın",
  publisher: "Semih Aydın",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Semih Aydın — Junior Software Developer & CS Student",
    description: "50.000+ aktif kullanıcıya hizmet veren sistemler, AI entegrasyonları, modern web uygulamaları ve simülasyon yarışı tutkusu.",
    url: "https://semihaydin.dev",
    siteName: "Semih Aydın Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Semih Aydın Portfolio",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semih Aydın — Junior Software Developer & CS Student",
    description: "Trabzon Üniversitesi Bilgisayar Mühendisliği Öğrencisi & Arka Kanat Kurucusu.",
    images: ["/images/og-image.png"],
    creator: "@semjhaydin",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD Structured Data for AEO / GEO (Answer & Generative Engine Optimization)
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Semih Aydın",
  "alternateName": ["Semih Aydin", "semjhaydin"],
  "url": "https://semihaydin.dev",
  "image": "https://semihaydin.dev/images/og-image.png",
  "jobTitle": "Junior Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Arka Kanat",
    "url": "https://arkakanat.com"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Trabzon Üniversitesi",
    "department": "Bilgisayar Mühendisliği"
  },
  "sameAs": [
    "https://github.com/semjhaydin",
    "https://www.linkedin.com/in/semihaydin61/",
    "https://instagram.com/arkakanat",
    "https://arkakanat.com/yazar?username=semih.aydin"
  ],
  "knowsAbout": [
    "Software Engineering",
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Python",
    "SQL",
    "Oracle DB",
    "REST APIs",
    "AI API Integration",
    "Automated Pipelines"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* GEO & AEO JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="bg-[#070A0F] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black min-h-screen relative">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
