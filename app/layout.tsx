import { Providers } from "@/app/providers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 실제 사용하는 폰트 weight만 로드하여 초기 로딩 속도 개선
const pretendard = localFont({
  variable: "--font-pretendard",
  display: "swap",
  preload: true, // 폰트 프리로드 활성화
  src: [
    {
      path: "../public/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acci - 교통사고 영상 분석 플랫폼",
  description: "교통사고 영상을 AI가 분석하여 과실비율, 분석이유, 관련 판례를 제공하는 분쟁심의 지원 플랫폼",
  keywords: ["교통사고", "AI분석", "과실비율", "분쟁심의", "법률지원", "영상분석", "판례"],
  authors: [{ name: "Acci" }],
  icons: {
    icon: "/ACCI_Logo_v1.svg",
  },
  verification: {
    google: "J6t0ha3OcpDTeNzMPMqUtfqipnWi-6GAqxv6JQ0U43U",
    other: {
      "naver-site-verification": "bbc5e33279c4088787e7ca859a4676ea62d6201b",
    },
  },
  openGraph: {
    title: "Acci - 교통사고 영상 분석 플랫폼",
    description: "AI가 교통사고 영상을 분석하여 과실비율과 법적 근거를 제공합니다",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-sans">
      <head>
        {/* DNS Prefetch 및 Preconnect로 외부 리소스 로딩 최적화 */}
        <link rel="preconnect" href="https://acci-s3.s3.ap-northeast-2.amazonaws.com" />
        <link rel="dns-prefetch" href="https://acci-s3.s3.ap-northeast-2.amazonaws.com" />
      </head>
      <body className={`${pretendard.variable} ${geistMono.variable} antialiased font-sans`}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
