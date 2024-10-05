import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kelly Kingston - Full Stack Developer",
  description: "Portfolio of Kelly Kingston, Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#1a1a2e] to-[#2a0e3a] text-white min-h-screen font-sans flex flex-col`}
      >
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="min-h-full">
            {children}
            <Analytics />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
