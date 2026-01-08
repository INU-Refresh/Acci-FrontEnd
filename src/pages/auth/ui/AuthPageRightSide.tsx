import Link from "next/link";

import OAuthButton from "@/features/auth/ui/OAuthButton";

export default function AuthPageRightSide() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-10">
      <div className="inline-flex w-96 min-w-96 max-w-[624px] flex-col items-center justify-center gap-2 bg-white px-10">
        <div className="inline-flex items-center justify-center gap-2.5 px-4">
          <div className="text-3xl font-semibold leading-10 text-neutral-800">로그인</div>
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 px-4 pb-4">
          <div className="text-base font-normal leading-6 text-neutral-800">소셜 계정으로 간편하게 시작하세요</div>
        </div>

        {/* OAuth 버튼 설정은 config로 분리하여 UI 가독성을 유지 */}
        <OAuthButton provider="google" />
        <OAuthButton provider="naver" />
        <OAuthButton provider="kakao" />
        
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
  );
}
