import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyr1cs | Digital Solutions Agency",
  description: "Professional digital agency specializing in web design, mobile applications, AI automation, and cloud services.",
  icons: {
    icon: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
    shortcut: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
    apple: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/druk-trial" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
