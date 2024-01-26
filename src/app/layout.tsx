import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "@/components/ui/sonner";
import {GoogleAnalytics} from "./trackers"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THD Unlock",
  description: "Unlock Doge coins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Toaster />
        </Providers>
        <GoogleAnalytics/>
      </body>
    </html>
  );
}
