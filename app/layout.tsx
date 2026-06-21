import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

// fonts
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}