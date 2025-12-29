"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/store/auth-store";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();

  // Route paths - Next.js will recognize these after server restart
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const repairEstimatePath = "/repair-estimate" as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myPagePath = "/my-page" as any;

  // 모바일 메뉴가 열렸을 때 body 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
          <div className="h-14 sm:h-16 flex items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shrink-0">로고</div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/analyze" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                분석
              </Link>
              <Link href={repairEstimatePath} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                수리비견적
              </Link>
              <Link href={myPagePath} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                마이페이지
              </Link>
              {isAuthenticated && user ? (
                <Link href={myPagePath} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {/* 여기는 프로필 사진 자리입니다. API가 완성되면 추가하도록 하겠습니다 */}
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{user.name}</span>
                </Link>
              ) : (
                <Link href="/auth">
                  <Button variant="default" size="default" className="bg-black text-white">
                    로그인
                  </Button>
                </Link>
              )}
            </nav>
            <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
              {isAuthenticated && user ? (
                <Link href={myPagePath} className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                </Link>
              ) : (
                <Link href="/auth">
                  <Button variant="default" size="sm" className="bg-black text-white text-xs px-2 sm:px-3 h-8 sm:h-9">
                    로그인
                  </Button>
                </Link>
              )}
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
        </div>
      </header>

      {/* Mobile Menu Overlay & Sidebar */}
      <div
        className={cn("fixed inset-0 z-50 md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible")}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Sidebar */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b h-14 sm:h-16">
              <span className="font-semibold text-lg text-gray-900">메뉴</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors" aria-label="메뉴 닫기">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Sidebar Content */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                href="/analyze"
                className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                분석
              </Link>
              <Link
                href={repairEstimatePath}
                className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                수리비견적
              </Link>
              <Link
                href={myPagePath}
                className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                마이페이지
              </Link>
              {isAuthenticated && user && (
                <div className="px-4 py-3 border-t mt-4 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {user.name?.[0]?.toUpperCase() || "U"}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
