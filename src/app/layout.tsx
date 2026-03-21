import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Szkoła Jazdy Kraków Bajer - Prawo Jazdy Szybko i Bezstresowo",
  description: "Szkoła prawa jazdy w Krakowie. Oferujemy kursy ekspresowe (1-1.5 miesiąca), 3 jazdy tygodniowo i naukę na płycie poślizgowej. Zapisz się już dziś!",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-off-white text-asphalt-900">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
