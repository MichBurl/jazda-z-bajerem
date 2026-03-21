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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inline Critical CSS for LCP and Theme */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --color-asphalt-900: #111111;
            --color-racing-red: #E62020;
            --color-off-white: #FAF9F6;
          }
          body {
            background-color: var(--color-asphalt-900);
            color: var(--color-off-white);
            margin: 0;
            padding: 0;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </head>
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
