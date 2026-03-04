import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 프로젝트 루트 명시 (Turbopack 경고 해결)
  turbopack: {
    root: __dirname,
  },

  // 개발 환경에서 HTTPS 도메인 허용
  allowedDevOrigins: ["local.acci-ai.site"],

  // FSD 아키텍처를 위한 절대경로 설정
  typedRoutes: true,

  // 이미지 최적화 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "acci-s3.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "local.acci-ai.site",
        port: "3001",
      },
    ],
    formats: ["image/avif", "image/webp"], // 최신 포맷 우선 사용
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 반응형 이미지 크기
    minimumCacheTTL: 60, // 이미지 캐시 시간 (초)
    qualities: [75, 85], // 지원하는 품질 수준
  },

  // 성능 최적화
  compress: true, // gzip 압축 활성화
  poweredByHeader: false, // X-Powered-By 헤더 제거 (보안)

  // 실험적 기능 (성능 개선)
  experimental: {
    optimizePackageImports: ["@/shared/ui", "@/shared/icons"], // 패키지 import 최적화
  },
};

export default nextConfig;
