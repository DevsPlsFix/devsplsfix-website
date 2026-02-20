import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/schema";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Background } from "@/components/ui/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  section: "home",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Background>
          <SiteHeader />
          <div className="mx-auto max-w-7xl px-4">
            {children}
          </div>
          <SiteFooter />
        </Background>
      </body>
    </html>
  );
}
