import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import ClientEffects from "@/components/layout/ClientEffects";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilal Jadi | Full Stack Developer & Digital Architect",
  description:
    "Portfolio of Bilal Jadi, Full Stack Developer and CEO of BSH SOLUTIONS, specializing in React, Next.js, and enterprise-level web ecosystems.",
  keywords: [
    "Full Stack Developer",
    "Bilal Jadi",
    "BSH SOLUTIONS",
    "React",
    "Next.js",
    "Web Development",
    "Digital Architect",
  ],
  authors: [{ name: "Bilal Jadi" }],
  creator: "Bilal Jadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bilaljadi.site",
    title: "Bilal Jadi | Full Stack Developer & Digital Architect",
    description:
      "Portfolio of Bilal Jadi, Full Stack Developer and CEO of BSH SOLUTIONS, specializing in React, Next.js, and enterprise-level web ecosystems.",
    siteName: "Bilal Jadi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Jadi | Full Stack Developer & Digital Architect",
    description:
      "Portfolio of Bilal Jadi, Full Stack Developer and CEO of BSH SOLUTIONS, specializing in React, Next.js, and enterprise-level web ecosystems.",
    creator: "@BilalJadi",
  },
  metadataBase: new URL("https://bilaljadi.site"),
  verification: {
    google: "mftol86q7hauVyXwfTJDkzh6lEIO_NfdlDqR24A6y_4", // from previous conversation history
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
