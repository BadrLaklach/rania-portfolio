import type { Metadata } from "next";
import type { Viewport } from "next";
import {
  Geist,
  Geist_Mono
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteStructuredData } from "./seo-jsonld";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badrlaklach.github.io/rania-portfolio/"),
  title: "Rania Madmoune | Génie électromécanique",
  description:
    "Portfolio de Rania Madmoune, élève-ingénieure en génie électromécanique à l’ENSAM Meknès, en recherche d’un stage PFE dès février 2027.",
  icons: {
    icon: [{ url: "/rania-portfolio/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/rania-portfolio/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rania Madmoune | Génie électromécanique",
    description: "Portfolio de Rania Madmoune, élève-ingénieure en génie électromécanique.",
    siteName: "Rania Madmoune - Portfolio",
    url: "/",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rania Madmoune | Electromechanical Engineering",
    description: "Portfolio of Rania Madmoune, electromechanical engineering student.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
