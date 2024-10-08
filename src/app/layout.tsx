import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Components
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ReduxProvider } from "@/redux/provider";

// Styles
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Qr Menu",
  description: "Qr Menu for Sharh Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="./icons/favicon-icon.svg" />
      </head>
      <body className={`${roboto.variable}`}>
        <ReduxProvider>
          <Navbar />
          <Hero />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Mobile Bottom Nav */}
          <BottomNav />
        </ReduxProvider>
      </body>
    </html>
  );
}
