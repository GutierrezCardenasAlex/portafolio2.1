import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axissoft.dev"),
  title: "AxisSoft Dev | Desarrollo de Software",
  description: "Desarrollo de aplicaciones web, móviles, APIs y soluciones de software modernas.",
  openGraph: {
    title: "AxisSoft Dev | Desarrollo de Software",
    description: "Desarrollo de aplicaciones web, móviles, APIs y soluciones de software modernas.",
    type: "website",
    locale: "es_BO",
    siteName: "AxisSoft Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxisSoft Dev | Desarrollo de Software",
    description: "Desarrollo de aplicaciones web, móviles, APIs y soluciones de software modernas.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#070B14] text-slate-100">{children}</body>
    </html>
  );
}
