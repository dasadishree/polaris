import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Navbar from "./Navbar";
import "./globals.css";

const transylvania = localFont({
  src: "../public/Transylvania Bold Italic.ttf",
  variable: "--font-transylvania",
  display: "swap",
});
const signMerchant = localFont({
  src: "../public/Sign Merchant JNL W00 Regular.ttf",
  variable: "--font-sign-merchant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizons Polaris",
  description:
    "A 3-day hackathon event for 100+ teenagers in Toronto, Canada",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${transylvania.variable} ${signMerchant.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}