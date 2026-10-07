import localFont from "next/font/local";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const projectFont = localFont({
  src: "../../public/fonts/SourceSans3.ttf",
  variable: "--font-project-copy",
  weight: "200 900",
  display: "swap",
});

const displayFont = localFont({
  src: "../../public/fonts/BarlowCondensed-Medium.ttf",
  variable: "--font-display",
  weight: "500",
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Sarmiento | Software Engineer",
  description:
    "Software engineering portfolio focused on AI systems, autonomous technology, aerospace, and performance engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${displayFont.variable} ${projectFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}