import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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
  title: "Gerold - Web Developer & UX Designer",
  description: "Portfolio of Gerold, Web Developer and UX Designer",
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
          <div className="min-h-full flex items-center justify-center py-12 px-4">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}