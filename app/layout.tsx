import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Levi Lafiya Gana | Frontend Engineer",
    template: "%s | Levi Lafiya Gana",
  },
  description:
    "Portfolio website for Levi Lafiya Gana, a frontend engineer and full-stack developer building modern, responsive web and mobile experiences.",
  keywords: [
    "Levi Lafiya Gana",
    "Frontend Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Abuja",
    "Nigeria",
  ],
  creator: "Levi Lafiya Gana",
  authors: [{ name: "Levi Lafiya Gana" }],
  openGraph: {
    title: "Levi Lafiya Gana | Frontend Engineer",
    description:
      "Frontend engineer and full-stack developer building modern digital products with React, Next.js, TypeScript, and scalable user experiences.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
