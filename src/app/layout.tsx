import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import "./globals.css";

const modernCapsFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-modern",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ronnie Grace | Official Website",
  description: "Official website of Ronnie Grace.",
  keywords: ["Ronnie Grace", "music", "artist", "singer"],
  openGraph: {
    title: "Ronnie Grace | Official Website",
    description: "Official website of Ronnie Grace.",
    type: "website",
    locale: "en_US",
    siteName: "Ronnie Grace",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronnie Grace | Official Website",
    description: "Official website of Ronnie Grace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${modernCapsFont.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
