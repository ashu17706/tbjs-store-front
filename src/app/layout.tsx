import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./_header";

const princesa = localFont({
  src: "./_fonts/Princesa-Black.otf",
  display: "swap",
});

const princesaLight = localFont({
  src: "./_fonts/Princesa-ExtraLight.otf",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TBJS",
  description: "The Bhavini Johar Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${princesaLight.className} bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
