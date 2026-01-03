import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-gray-0 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-10 py-6 sm:py-12 max-w-7xl">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-4 sm:mb-8">
          {/* 로고 영역 */}
          <div className="space-y-4 flex-1">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              {/* 로고로 대체될 부분입니다 */}
              <div className="w-24 h-10 bg-gray-700 text-gray-0 rounded flex items-center justify-center font-bold">로고 영역</div>
            </Link>
          </div>

          {/* 지원과 이메일 */}
          <div className="flex flex-1 flex-row justify-between gap-8 sm:gap-16 ">
            <div className="min-w-36">
              <h3 className="text-body-5 mb-4">지원</h3>
              <ul className="space-y-2 text-body-5 text-gray-400">
                <li>
                  <Link href="/policies/privacy-policy" className="cursor-pointer">개인정보처리방침</Link>
                </li>
                <li>
                  <Link href="/policies/terms-of-service" className="cursor-pointer">이용약관</Link>
                </li>
                <li>
                  <Link href="/policies/cookie-policy" className="cursor-pointer">쿠키 정책</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-body-5 mb-4">이메일</h3>
              <ul className="space-y-2 text-body-5 text-gray-400">
                <li>acciai2025@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-body-5 text-gray-400">© 2026 Acci. All rights reserved.</div>
      </div>
    </footer>
  );
}
