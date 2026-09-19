import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Samuel Bicalho Henriques — Materials Engineering",
  description:
    "Materials Engineering student specialized in crystallography, materials characterization, magnetic materials and phase transformations. Based in Metz, France.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
