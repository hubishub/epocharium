import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { MuseumShell } from "@/components/layout/MuseumShell";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Epocharium — Tech Civilization Museum & Encyclopedia",
  description:
    "A cinematic multi-wing museum covering the Internet, computers, mobiles, AI, and AGI open questions — with interactive 3D exhibits and a deep archive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <MuseumShell>{children}</MuseumShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
