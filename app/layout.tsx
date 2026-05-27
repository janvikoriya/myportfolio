import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Janvi Koriya - Portfolio",
  description: "AI Software Developer building scalable web applications and GenAI features with a focus on high-performance digital products.",
  keywords: ["Janvi Koriya", "AI Software Developer", "Full Stack Engineer", "GenAI", "React Developer", "Next.js"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

import BackgroundEffect from "@/components/BackgroundEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <BackgroundEffect />
        {children}
      </body>
    </html>
  );
}
