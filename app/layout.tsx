import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poppins } from "./fonts";

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
      <body className={`${poppins.className} px-[5%] md:px-[8%] lg:px-[10%]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
