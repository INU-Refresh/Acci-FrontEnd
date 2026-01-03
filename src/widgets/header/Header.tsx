"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/store/auth-store";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // 스크롤 감지하여 헤더 show/hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤이 100px 이상일 때만 헤더 숨기기/보기 감지
      if (currentScrollY > 100) {
        // 아래로 스크롤하면 헤더 숨기기
        if (currentScrollY > lastScrollY) {
          setHeaderVisible(false);
        }
        // 위로 스크롤하면 헤더 보이기
        else {
          setHeaderVisible(true);
        }
      } else {
        // 맨 위에 있으면 항상 헤더 보이기
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header Container */}
      <header className={cn("sticky top-0 z-50 w-full h-21 border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 transition-transform duration-300 ease-in-out", headerVisible ? "translate-y-0" : "-translate-y-full")}>
        <div className="container mx-auto px-4 sm:px-10 max-w-7xl">
          <div className="flex items-center justify-between gap-2 my-auto h-21">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0 cursor-pointer">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shrink-0">로고</div>
            </Link>
            {/* PC Navigation - visible on md and above */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/analyze" className="text-body5 text-gray-900 hover:text-primary transition-colors cursor-pointer">
                분석
              </Link>
              <Link href={repairEstimatePath} className="text-body5 text-gray-900 hover:text-primary transition-colors cursor-pointer">
                수리비견적
              </Link>
              <Link href={myPagePath} className="text-body5 text-gray-900 hover:text-primary transition-colors cursor-pointer">
                마이페이지
              </Link>
              {isAuthenticated && user ? (
                <Link href={myPagePath} className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {/* 여기는 프로필 사진 자리입니다. API가 완성되면 추가하도록 하겠습니다 */}
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{user.name}</span>
                </Link>
              ) : (
                <Link href="/auth" className="cursor-pointer">
                  <Button className="text-body5 bg-gray-900 text-gray-0 hover:bg-gray-800 py-2 px-4 w-20 cursor-pointer">
                    로그인
                  </Button>
                </Link>
              )
            }
            </nav>
            {/* Mobile Header - visible below md */}
            <div className="md:hidden flex items-center justify-end gap-1.5 sm:gap-2 shrink-0">
              {/* Mobile User Profile Avatar - only visible when authenticated */}
              {isAuthenticated && user && (
                <Link href={myPagePath} className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                </Link>
              )}
              {/* Mobile Menu Toggle Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 sm:p-2 text-gray-900 shrink-0 cursor-pointer" aria-label="메뉴">
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

      {/* Mobile Menu Overlay & Sidebar - visible below md */}
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
            {/* Sidebar Header with Logo */}
            <div className="h-21 flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <div className="w-24 h-10 sm:w-28 sm:h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                로고 영역
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer" aria-label="메뉴 닫기">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Navigation Menu */}
            <nav className="flex-1">
              <Link
                href="/analyze"
                className="flex items-center h-14 px-8 py-3 text-body5 font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                분석
              </Link>
              {/* Repair Estimate Menu Item */}
              <Link
                href={repairEstimatePath}
                className="flex items-center h-14 px-8 py-3 text-body5 font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                수리비 견적
              </Link>
              {/* My Page Menu Item */}
              <Link
                href={myPagePath}
                className="flex items-center h-14 px-8 py-3 text-body5 font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                마이페이지
              </Link>
            </nav>

            {/* Sidebar Footer - Login Button */}
            <div className="p-4 sm:p-6 border-t border-gray-200">
              {!isAuthenticated ? (
                <Link href="/auth" onClick={() => setMobileMenuOpen(false)} className="w-full cursor-pointer">
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 py-2 sm:py-3 font-medium cursor-pointer">
                    로그인
                  </Button>
                </Link>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-2 py-1">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                      {user?.name?.[0]?.toUpperCase() || "U"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-body5 font-medium text-gray-900 truncate">{user?.name}</p>
                      <p className="text-body5 text-gray-500 truncate">{user?.email}</p>
                    </div>
                  </div>
                  <Link href="/auth" onClick={() => setMobileMenuOpen(false)} className="w-full cursor-pointer">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 py-2 sm:py-3 font-medium cursor-pointer">
                      로그인
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
