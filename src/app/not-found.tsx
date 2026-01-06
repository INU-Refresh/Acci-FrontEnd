import Link from "next/link";
import type { Metadata, Viewport } from "next";
import { Button } from "@/shared/ui/button";

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
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="h-14 sm:h-16 flex items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shrink-0">AI</div>
              <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 truncate">Acci</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/analyze" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                분석
              </Link>

              <Link href="/my-page/123" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                마이페이지 123
              </Link>
              <Link href="/auth">
                <Button variant="default" size="default" className="bg-black text-white">
                  로그인
                </Button>
              </Link>
            </nav>
            <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Link href="/auth">
                <Button variant="default" size="sm" className="bg-black text-white text-xs px-2 sm:px-3 h-8 sm:h-9">
                  로그인
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

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
              <Link href="/analyze">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                  분석 시작하기
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-12 max-w-7xl">
          <div className="text-center text-sm text-gray-400">© 2025 Acci. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
