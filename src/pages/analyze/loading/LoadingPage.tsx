"use client";

import type { UserInfo } from "@/entities/user/model/user-info";
import { AnalyzeLoadingSection } from "@/widgets/analyze-loading/AnalyzeLoadingSection";
import { Header } from "@/widgets/header/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoadingPageProps = {
  initialUserInfo?: UserInfo | null;
};

export default function LoadingPage({ initialUserInfo = null }: LoadingPageProps) {
  const router = useRouter();
  const [remainingSeconds, setRemainingSeconds] = useState(10);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        const nextSeconds = prevSeconds - 1;
        return nextSeconds <= 0 ? 0 : nextSeconds;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      router.push("/analyze/result/1");
    }
  }, [remainingSeconds, router]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 공통 헤더 */}
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 items-center justify-center px-4 py-24 md:py-40">
        {/* 분석 로딩 섹션 */}
        <AnalyzeLoadingSection remainingSeconds={remainingSeconds} />
      </main>
      {/* [Notice] 푸터는 해당 로딩 섹션에서 불편한 요소가 되어서 그냥 지운 상태로 두었습니다. */}
    </div>
  );
}
