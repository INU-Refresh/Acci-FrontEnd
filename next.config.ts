import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // FSD 아키텍처를 위한 절대경로 설정
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "acci-s3.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
