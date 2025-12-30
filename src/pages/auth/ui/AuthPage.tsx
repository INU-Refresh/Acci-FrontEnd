"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { CheckIcon, GoogleIcon, KakaoIcon, NaverIcon } from "@/shared/ui/icons";

const featureItems = [
  "언제 어디서나 빠른 과실 판단",
  "전문적이고 정확한 법률 정보",
  "교통사고 관련 다양한 판례 제공",
];

export default function AuthPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background md:flex-row md:items-stretch">
      {/* 좌측 소개 패널 */}
      <aside className="hidden w-full bg-gray-50 md:flex md:min-h-screen md:flex-1 md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:h-full">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <div className="h-20 w-20 rounded-full bg-gray-900" aria-hidden />
            <p className="text-3xl font-semibold leading-12 text-gray-900">Acci</p>
            <p className="text-sm font-normal leading-5 text-gray-900">
              법률 전문가의 지식을 AI로,
              <br />
              더 스마트한 과실비율 측정 서비스
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 px-10">
            {featureItems.map((item) => (
              <div key={item} className="inline-flex w-52 items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
                  <CheckIcon className="h-3 w-3 text-white" />
                </div>
                <div className="text-center text-sm font-normal leading-5 text-gray-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* 우측 로그인 패널 */}
      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-10">
        <div className="inline-flex h-[711px] w-96 min-w-96 max-w-[624px] flex-col items-center justify-center gap-2 bg-white px-10">
          <div className="inline-flex items-center justify-center gap-2.5 px-4">
            <div className="text-3xl font-semibold leading-10 text-neutral-800">로그인</div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 px-4 pb-4">
            <div className="text-base font-normal leading-6 text-neutral-800">소셜 계정으로 간편하게 시작하세요</div>
          </div>

          <SocialButton variant="outline" className="w-72 border border-gray-300 bg-white text-neutral-800 hover:bg-gray-100">
            <GoogleIcon />
            Google로 계속하기
          </SocialButton>
          <SocialButton className="w-72 bg-[#03C75A] text-white hover:bg-[#02b052]">
            <NaverIcon className="text-white" />
            Naver로 계속하기
          </SocialButton>
          <SocialButton className="w-72 bg-[#FEE500] text-neutral-800 hover:bg-[#e6cf00]">
            <KakaoIcon className="text-neutral-800" />
            Kakao로 계속하기
          </SocialButton>

          <div className="inline-flex h-12 items-center justify-center gap-2.5 py-5">
            <span className="h-px w-28 bg-gray-300" aria-hidden />
            <span className="text-xs font-normal leading-4 text-gray-500">또는</span>
            <span className="h-px w-28 bg-gray-300" aria-hidden />
          </div>

          <Button className="w-72 rounded-lg bg-neutral-800 px-4 py-3 text-sm font-medium leading-5 text-white">비회원으로 계속하기</Button>

          <div className="inline-flex w-72 items-center justify-center gap-2.5 pb-4">
            <p className="text-xs font-normal leading-4 text-gray-500">
              로그인함으로써{" "}
              <Link href="/policies/terms-of-service" className="font-medium text-neutral-600 underline-offset-4 hover:underline">
                이용약관
              </Link>{" "}
              및{" "}
              <Link href="/policies/privacy-policy" className="font-medium text-neutral-600 underline-offset-4 hover:underline">
                개인정보처리방침
              </Link>
              에 동의합니다
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

function SocialButton({ className, children, variant = "default", ...props }: SocialButtonProps) {
  return (
    <Button
      type="button"
      variant={variant}
      className={cn("inline-flex w-72 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium leading-5", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
