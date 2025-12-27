import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "センリツヤフショシグナルプロパイダー | ヤフショ運用を完全代行",
  description: "外注さんへの指示は全部こちら。オーナーは資金を投下するだけ。ヤフショ運用の仕入れから買取まで丸投げで、月次で利益計算・報告まで実施します。",
  keywords: ["ヤフショ", "Yahoo!ショッピング", "運用代行", "外注管理", "買取"],
  openGraph: {
    title: "センリツヤフショシグナルプロパイダー | ヤフショ運用を完全代行",
    description: "外注さんへの指示は全部こちら。オーナーは資金を投下するだけ。ヤフショ運用の仕入れから買取まで丸投げ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "センリツヤフショシグナルプロパイダー",
    description: "ヤフショ運用を完全代行。オーナーは資金を投下するだけ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
