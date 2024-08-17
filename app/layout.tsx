import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Face Shape Detector: Find Face Shape Accurately in Seconds",
  description: "Find Your Face Shape Accurately in Seconds",
  verification: {
    google: "dCvw-2zVqw6jXDx8mxHziPcfNUyXLEUNjg9Fk1SVjzE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-2JCGZXZ3DQ" />
    </html>
  );
}
