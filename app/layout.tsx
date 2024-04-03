import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../config/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Cari Kerja App",
  description: "Cari kerja mudah dimana aja!!!",
  openGraph: {
    images: '/banner.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
