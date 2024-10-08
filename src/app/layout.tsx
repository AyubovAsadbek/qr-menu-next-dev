import type { Metadata } from "next";
import { Roboto } from "next/font/google";

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
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
