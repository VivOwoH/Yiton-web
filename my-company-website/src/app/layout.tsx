import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "YitonTech",
  description: "Yield Smart Data, Transform Tomorrow. Where AI Decodes Lifestyles, Elevates Brand Impact, and Drives Industrial Evolution via Intelligent Insight",
  keywords: "AI, market research, market insight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
