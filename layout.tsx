import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Bileşenleri import ediyoruz
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp"; // <-- 1. DEĞİŞİKLİK: WhatsApp butonunu import ettik

const inter = Inter({ subsets: ["latin"] });

// Sayfa başlığı ve açıklamasını güncelledik
export const metadata: Metadata = {
  title: "Perla Paradise | Hayalinizdeki Tatil",
  description: "Perla Paradise ile Türkiye'nin dört bir yanındaki eşsiz turları keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dil etiketini Türkçe yaptık
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main> {/* Ana içeriği <main> içine almak daha doğrudur */}
        <Footer />
        <FloatingWhatsApp /> {/* <-- 2. DEĞİŞİKLİK: WhatsApp butonunu buraya ekledik */}
      </body>
    </html>
  );
}