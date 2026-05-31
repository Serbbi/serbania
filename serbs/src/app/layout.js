import { Geist, Geist_Mono } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Serban Tonie",
  description:
    "Personal portfolio of Serban Alexandru Tonie, showcasing my skills, projects, and experience in life.",
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
