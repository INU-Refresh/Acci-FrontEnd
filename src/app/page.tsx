"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link href="/judicial-precedent" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                판례
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
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 sm:p-2 text-gray-900 shrink-0" aria-label="메뉴">
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-4">
              <Link href="/analyze" className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                분석
              </Link>
              <Link
                href="/judicial-precedent"
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                판례
              </Link>
              <Link href="/my-page/123" className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                마이페이지 123
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32 bg-white max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block px-2.5 sm:px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">AI 기반 과실 비율 판단</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              AI로 판단하는
              <br />
              교통사고 과실비율
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 px-1">
              복잡한 법적 문제를 빠르고 정확하게 해결하세요. Acci가 교통사고 영상을 분석하여 객관적인 과실비율과 판단 근거를 제공합니다.
            </p>
            <div className="flex justify-center md:justify-start pt-2">
              <Link href="/analyze" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full sm:w-auto text-sm sm:text-base">
                  시작하기
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
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-500 order-first md:order-last min-h-[200px] sm:min-h-0">
            <p className="text-center text-xs sm:text-sm md:text-base px-2">사용하는 움짤 들어감</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-gray-900 px-2">Acci의 특별한 기능</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <CardTitle>교통사고 과실비율 측정</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Acci가 객관적인 교통사고 과실비율을 측정하여 제공합니다.</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <CardTitle>판단근거 제공</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Acci가 과거 판례와 비교하여 판단 근거를 제공합니다.</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <CardTitle>관련 판례 제공</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Acci가 관련된 판례를 제공합니다.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 bg-white max-w-7xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 px-2">사용자 후기</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 px-2">실제 사용자들의 생생한 경험담을 확인해보세요</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              rating: 5,
              comment: "보험사에서 불공정한 과실비율을 제시했는데, Acci로 객관적인 분석을 받을 수 있어서 정말 도움이 되었습니다.",
              name: "성**",
              age: "20대, 남",
              avatar: "👤",
            },
            {
              rating: 5,
              comment: "판례와 비교 분석까지 제공해주니 법적 근거가 명확해서 보험사와 협상할 때 큰 도움이 됐어요.",
              name: "김**",
              age: "30대, 남성",
              avatar: "👤",
            },
            {
              rating: 5,
              comment: "복잡한 교통사고 상황을 AI가 정확하게 분석해주니 신뢰할 수 있었습니다. 추천합니다!",
              name: "임**",
              age: "40대, 여성",
              avatar: "👤",
            },
          ].map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base">{review.comment}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">{review.avatar}</div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2 leading-tight">지금 바로 Acci의 과실 비율을 확인해보세요</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            보험사에서 불공정한 과실비율 판단을 받았다고 걱정하지 마세요. Acci가 스마트하게 도와드립니다.
          </p>
          <Link href="/analyze" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto text-sm sm:text-base">
              시작하기
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-12 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white text-gray-900 rounded flex items-center justify-center font-bold">AI</div>
                <span className="font-semibold text-lg">Acci</span>
              </Link>
              <p className="text-sm text-gray-400">AI가 제공하는 더 쉽고 정확한 교통사고 과실비율 분석 서비스</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  {/* @ts-expect-error - /help route will be created later */}
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    도움말
                  </Link>
                </li>
                <li>
                  {/* @ts-expect-error - /contact route will be created later */}
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="/policies/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/policies/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@acci.ai</li>
                <li>전화번호: 000-0000-0000</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">© 2025 Acci. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
