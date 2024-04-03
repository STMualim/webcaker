import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../config/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Caker.id | Cari Kerja App",
  description: "CAKER ID adalah aplikasi inovatif yang memudahkan pencarian pekerjaan bagi siapa pun, di mana pun mereka berada. Dengan CAKER ID, Anda tidak perlu lagi menghabiskan waktu berjam-jam untuk mencari peluang pekerjaan yang sesuai. Aplikasi ini dirancang untuk memberikan kemudahan dalam menemukan pekerjaan yang tepat, sesuai dengan keahlian dan preferensi Anda.",
  openGraph: {
    images: "/opengraph-image.jpg"
  },
  twitter: {
    images: "/opengraph-image.jpg"
  }
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
