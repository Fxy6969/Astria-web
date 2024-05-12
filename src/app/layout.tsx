import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import "./globals.css";
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Eclipse Designs",
  description: "Bringing your ideas to life...",
};

export default function RootLayout({children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <>
      <html lang="en" lang="en" className={GeistSans.className} suppressHydrationWarning>
          <head />
          <body
        >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><main>{children}</main></ThemeProvider>
          </body>
        </html>
      </>
  );
}