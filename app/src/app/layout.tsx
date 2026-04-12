import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colorday.vercel.app"),
  title: "Colorday | Color delivered at your pace",
  description:
    "Choose a daily, weekly, or monthly color rhythm and build a personal abstract mosaic over time.",
  openGraph: {
    title: "Colorday",
    description:
      "A subscription color app where every delivery unlocks a new tile in your personal mosaic.",
    images: [
      {
        url: "/mosaic-og.svg",
        width: 1200,
        height: 630,
        alt: "A colorful abstract Colorday mosaic preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
