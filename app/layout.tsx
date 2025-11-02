import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "人生提示词 - 每天一封提示词邮件，唤醒你内心的力量",
  description:
    "通过邮件接收每日提示词，唤醒你内心的力量。设置您喜欢的发送时间和提示词数量，让生活变得简单有趣。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
