import Link from "next/link";
import type { Metadata, Viewport } from "next";
import { Button } from "@/shared/ui/button";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 - Acci",
  description: "요청하신 페이지를 찾을 수 없습니다.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900">404</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">페이지를 찾을 수 없습니다</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto">
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                <br className="hidden sm:block" />
                주소를 다시 확인해주세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  홈으로 돌아가기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
