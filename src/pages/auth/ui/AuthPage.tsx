"use client";

/**
 * DO NOT REMOVE
 * 로그인 페이지 레이아웃을 구성하는 엔트리 컴포넌트
 * 좌측 소개 패널과 우측 로그인 패널을 조합합니다.
 */

import AuthPageLeftSide from "@/pages/auth/ui/AuthPageLeftSide";
import AuthPageRightSide from "@/pages/auth/ui/AuthPageRightSide";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background md:flex-row md:items-stretch">
      <AuthPageLeftSide />
      <AuthPageRightSide />
    </div>
  );
}
