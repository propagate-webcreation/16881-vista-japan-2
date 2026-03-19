import type { Metadata, Viewport } from "next";
import { Barlow, M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const bodyFont = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

const displayFont = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "レンタルビジョン | 初期費用0円で始めるLEDビジョン | Vista Japan株式会社②",
  description:
    "初期費用0円、最短1カ月から利用可能。36カ月後は資産になり、工事不要で始められるレンタルビジョンをVista Japan株式会社②が全国対応で提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-base text-ink antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
