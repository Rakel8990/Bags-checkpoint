import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CHECKPOINT // Streak Protection Infrastructure",
  description: "Automated consistency engine for the Concrete ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050505]">
      <body className={`${inter.variable} antialiased text-white bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}
