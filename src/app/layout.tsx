import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_header";

const princesaRegular = localFont({
  src: "./_fonts/Princesa-Regular.otf",
  display: "swap",
  variable: "--font-princesa-regular",
});

const princesaRegularIt = localFont({
  src: "./_fonts/Princesa-RegularIt.otf",
  display: "swap",
  variable: "--font-princesa-regular-it",
});

const princesaLight = localFont({
  src: "./_fonts/Princesa-Light.otf",
  display: "swap",
  variable: "--font-princesa-light",
});

const princesaLightIt = localFont({
  src: "./_fonts/Princesa-LightIt.otf",
  display: "swap",
  variable: "--font-princesa-light-it",
});

const avenirNextRegular = localFont({
  src: "./_fonts/avenir-next/AvenirNextCyr-Regular.woff2",
  display: "swap",
  variable: "--font-avenir-next-regular",
});

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
    <html
      lang="en"
      className={`${princesaLight.variable} ${princesaRegular.variable} ${avenirNextRegular.variable} ${princesaRegularIt.variable} ${princesaLightIt.variable}`}
    >
      <body className="bg-white font-princesa-regular text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
