"use client";

import { Button } from "@/shared/ui/button";
import { GoogleIcon, KakaoIcon, NaverIcon } from "@/shared/ui/icons";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-white p-12">
        <div className="max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6h8v2H6V6zm0 4h8v2H6v-2zm0 4h8v2H6v-2zm12-6h-4v8h4V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-black">Acci</h1>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8">법률 전문가의 지식을 AI로 더 스마트한 법률 상담 서비스</p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-700">24시간 언제든 법률 상담</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-700">전문적이고 정확한 법률 정보</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-700">개인정보 보호 및 보안</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-black mb-2">로그인</h2>
          <p className="text-gray-600 mb-8">소셜 계정으로 간편하게 시작하세요</p>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            {/* Google */}
            <Button type="button" variant="outline" className="w-full border-gray-300 text-black font-medium py-3">
              <GoogleIcon />
              Google로 계속하기
            </Button>

            {/* Naver */}
            <Button
              type="button"
              className="w-full bg-[#03C75A] text-white font-medium py-3 hover:bg-[#03b850] focus-visible:ring-[#02a345]"
            >
              <NaverIcon className="text-white" />
              네이버로 계속하기
            </Button>

            {/* Kakao */}
            <Button
              type="button"
              className="w-full bg-[#FEE500] text-black font-medium py-3 hover:bg-[#FFD700] focus-visible:ring-[#dcbf00]"
            >
              <KakaoIcon className="text-black" />
              카카오로 계속하기
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-600">또는</span>
            </div>
          </div>

          {/* Email & Password Form */}
          <form className="space-y-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white font-medium py-3 hover:bg-gray-800">
              로그인
            </Button>
          </form>

          {/* Links */}
          <div className="flex justify-between text-sm mb-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              비밀번호 찾기
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              회원가입
            </a>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center">
            로그인함으로써{" "}
            <a href="#" className="underline hover:text-gray-700">
              이용약관
            </a>
            {" 및 "}
            <a href="#" className="underline hover:text-gray-700">
              개인정보처리방침
            </a>
            에 동의합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
