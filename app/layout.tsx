import { Noto_Sans_JP } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "レンタルビジョン | 初期費用0円のLEDビジョンレンタル - Vista Japan",
  description:
    "初期費用0円・最短1ヶ月から利用可能。36ヶ月後は資産に。置くだけで集客、工事不要のLEDビジョンレンタルならVista Japan。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased text-body`}
        suppressHydrationWarning={true}
      >
        {children}
        <Script
          src="https://site-annotator.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
