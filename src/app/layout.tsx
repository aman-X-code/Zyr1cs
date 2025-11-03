import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Web Development Company in India | Mobile App Development | Zyr1cs",
  description: "Leading web development company in India & USA. Expert mobile app developers in Bangalore, Mumbai, Delhi. Affordable React, Next.js, Flutter development. AI automation, cloud services for startups & enterprises. Get free quote today!",
  keywords: [
    // HIGH-VALUE Keywords (2000+ searches/month)
    "web development company in india",
    "mobile app development company",
    "best web design company",
    "app developers in bangalore",
    "software development company mumbai",
    "react native developers india",
    "ai development company",
    "cloud services provider india",
    
    // India - Major Cities
    "web development company Delhi",
    "mobile app developers Mumbai",
    "web design agency Bangalore",
    "app development Hyderabad",
    "software company Pune",
    "web developers Chennai",
    "app developers Kolkata",
    "digital agency Gurgaon",
    "tech company Noida",
    
    // USA - Major Cities
    "web development New York",
    "app developers San Francisco",
    "software company Los Angeles",
    "web design agency Chicago",
    "mobile app development Austin",
    "tech company Seattle",
    "web developers Boston",
    "digital agency Miami",
    
    // LONG-TAIL Keywords (Easier to rank, high intent)
    "how much does it cost to build an app in india",
    "best react developers for hire in delhi",
    "affordable web design company bangalore",
    "ai chatbot development services mumbai",
    "startup tech partner india",
    "flutter app development cost in india",
    "next.js development agency delhi",
    "offshore web development company",
    "remote app developers india",
    "hire dedicated developers india",
    "custom software development for startups",
    "enterprise mobile app development",
    "ecommerce website development india",
    "progressive web app development",
    "react js development company",
    
    // Services
    "AI automation services",
    "cloud services AWS Azure GCP",
    "UI UX design agency",
    "React Next.js development",
    "Flutter React Native apps",
    "full stack development",
    "DevOps CI CD services",
    "custom software development",
    "enterprise web solutions",
    "startup tech partner",
    "e-commerce development",
    "SaaS application development",
    "API development integration",
    "microservices architecture",
    "progressive web apps PWA",
    "cross platform mobile apps",
    "AI chatbot development",
    "machine learning solutions",
    "blockchain development",
    "IoT application development",
    
    // Technology-specific
    "react development company",
    "node js developers",
    "python development services",
    "angular development agency",
    "vue js developers",
    "typescript development",
    "graphql api development",
    "mongodb database services",
    "postgresql development",
    "redis caching solutions"
  ],
  authors: [{ name: "Zyr1cs Team" }],
  creator: "Zyr1cs",
  publisher: "Zyr1cs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zyr1cs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zyr1cs - Global Web & Mobile Development Agency | India & USA",
    description: "Transform your business with expert web development, mobile apps, AI automation, and cloud solutions. Serving clients in Delhi, Mumbai, Bangalore, New York, San Francisco, and worldwide.",
    url: 'https://zyr1cs.com',
    siteName: 'Zyr1cs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png',
        width: 1200,
        height: 630,
        alt: 'Zyr1cs - Digital Solutions Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zyr1cs - Web Development & Digital Solutions | Global Agency",
    description: "Expert web development, mobile apps, AI automation & cloud services. Serving India (Delhi, Mumbai, Bangalore) & USA (NYC, SF, LA)",
    images: ['https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png'],
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
    icon: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
    shortcut: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
    apple: 'https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/ztop_bdnqrf.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
        <StructuredData />
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
