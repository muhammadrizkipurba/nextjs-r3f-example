import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./Providers";
import ViewCanvas from "@/components/ViewCanvas";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  display: 'swap',
  variable: "--font-clash-display",
  weight: "100 900",
});

const chillax = localFont({
  src: "../../public/fonts/Chillax-Variable.woff2",
  display: 'swap',
  variable: "--font-chillax",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${clashDisplay.variable} ${chillax.variable} overflow-x-hidden bg-[#FDE047]`}>
        <Providers>
          <Header />
          <main>
            {children}
            <ViewCanvas />
          </main>
        </Providers>
      </body>
    </html>
  );
}
