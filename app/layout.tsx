import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { LocalizationProvider } from "@/contexts/localization-context";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Spanish - A1.1 Spanish Learning Platform",
  description:
    "Master Spanish from scratch with interactive lessons, audio, and video content. Available in English and Arabic.",
  generator: "MSS",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <LocalizationProvider>{children}</LocalizationProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
