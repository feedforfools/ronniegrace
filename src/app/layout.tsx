import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
