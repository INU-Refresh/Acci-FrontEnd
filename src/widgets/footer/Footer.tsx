import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-10 py-6 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-gray-900 rounded flex items-center justify-center font-bold">AI</div>
              <span className="font-semibold text-lg">Acci</span>
            </Link>
            <p className="body-7 text-gray-600">AI가 제공하는 더 쉽고 정확한 교통사고 과실비율 분석 서비스</p>
          </div>
          <div>
            <h3 className="body-3 mb-4">지원</h3>
            <ul className="space-y-2 body-7">
              <li>
                {/* @ts-expect-error - /help route will be created later */}
                <Link href="/help" className="text-gray-600 hover:text-gray-900 transition-colors">
                  도움말
                </Link>
              </li>
              <li>
                {/* @ts-expect-error - /contact route will be created later */}
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="body-3 mb-4">연락처</h3>
            <ul className="space-y-2 body-7 text-gray-600">
              <li>support@acci.ai</li>
              <li>전화번호: 000-0000-0000</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center body-7 text-gray-600">© 2026 Acci. All rights reserved.</div>
      </div>
    </footer>
  );
}
