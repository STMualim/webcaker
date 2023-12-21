import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cari Kerja App",
  description: "Cari kerja mudah dimana aja!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-[5%] md:px-[8%] lg:px-[10%]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
