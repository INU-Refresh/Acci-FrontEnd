"use client";

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
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google로 계속하기
            </button>

            {/* Naver */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#03C75A] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#03b850] transition-colors">
              <span className="font-bold text-lg">N</span>
              네이버로 계속하기
            </button>

            {/* Kakao */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#FEE500] text-black font-medium py-3 px-4 rounded-lg hover:bg-[#FFD700] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <path d="M12 2C6.48 2 2 5.58 2 10c0 1.85.75 3.55 1.99 4.81L2 22l7.31-2.44C10.02 19.98 10.99 20 12 20c5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
              </svg>
              카카오로 계속하기
            </button>
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
            <button type="submit" className="w-full bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              로그인
            </button>
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
