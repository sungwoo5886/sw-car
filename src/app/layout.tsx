import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "S.W CAR | Luxury Beyond Driving",
  description:
    "S.W CAR – 대표 성우가 만드는 프리미엄 자동차 브랜드. 혁신적인 기술과 감성적인 디자인으로 새로운 자동차 문화를 만들어 갑니다.",
  keywords: [
    "S.W CAR",
    "luxury car",
    "premium automotive",
    "Sung Woo",
    "프리미엄 자동차",
    "럭셔리 자동차",
    "SW Phantom",
    "SW Genesis",
  ],
  authors: [{ name: "Sung Woo", url: "https://swcar.kr" }],
  openGraph: {
    title: "S.W CAR | Luxury Beyond Driving",
    description: "Experience premium automotive excellence with S.W CAR.",
    type: "website",
    locale: "ko_KR",
    siteName: "S.W CAR",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.W CAR | Luxury Beyond Driving",
    description: "Experience premium automotive excellence with S.W CAR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-black text-white antialiased selection:bg-white/10">
        {children}
      </body>
    </html>
  );
}
