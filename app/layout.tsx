import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Grain } from "@/components/layout/Grain";
import { ScrollRefresh } from "@/components/layout/ScrollRefresh";
import { company, siteUrl } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.seoTitle,
    template: `%s | ${company.name}`,
  },
  description: company.seoDescription,
  openGraph: {
    title: company.seoTitle,
    description: company.seoDescription,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <Grain />
        <CustomCursor />
      </body>
    </html>
  );
}
