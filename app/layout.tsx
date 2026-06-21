import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Euphoria_Script, Marck_Script } from "next/font/google";
import "./globals.css";

const transylvania = localFont({
  src: "../public/Transylvania Bold Italic.ttf",
  variable: "--font-transylvania",
  display: "swap",
});

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-marck-script",
});

const euphoriaScript = Euphoria_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-euphoria-script",
});

export const metadata: Metadata = {
  title: "Horizons Polaris",
  description:
    "A 3-day hackathon event for 100+ teenagers in Toronto, Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${transylvania.variable} ${marckScript.variable} ${euphoriaScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
