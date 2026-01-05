import Link from "next/link";

import { Button } from "@/shared/ui/button";
import { GoogleIcon, KakaoIcon, NaverIcon } from "@/shared/ui/icons";

const OAUTH_BASE_URL = process.env.NEXT_PUBLIC_OAUTH_BASE_URL;

export default function AuthPageRightSide() {
  const handleOAuthLogin = (provider: "kakao" | "naver" | "google") => {
    window.location.href = `${OAUTH_BASE_URL}/${provider}`;
  };

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-10">
      <div className="inline-flex w-96 min-w-96 max-w-[624px] flex-col items-center justify-center gap-2 bg-white px-10">
        <div className="inline-flex items-center justify-center gap-2.5 px-4">
          <div className="text-3xl font-semibold leading-10 text-neutral-800">로그인</div>
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 px-4 pb-4">
          <div className="text-base font-normal leading-6 text-neutral-800">소셜 계정으로 간편하게 시작하세요</div>
        </div>

        {/* Auth 전용 버튼 스타일, 굳이 ButtonComponent로 두는게 애매하기도 하고, 딱히 재사용성이 있어보이지 않아서 그대로 하드코딩 형태로 두었습니다. */}
        <Button
          type="button"
          className="w-72 px-4 py-3 text-sm font-medium leading-5 border border-gray-300 bg-white text-neutral-800 hover:bg-gray-100"
          onClick={() => handleOAuthLogin("google")}
        >
          <GoogleIcon />
          Google로 계속하기
        </Button>
        <Button
          type="button"
          className="w-72 px-4 py-3 text-sm font-medium leading-5 bg-[#03C75A] text-white hover:bg-[#02b052]"
          onClick={() => handleOAuthLogin("naver")}
        >
          <NaverIcon className="text-white" />
          Naver로 계속하기
        </Button>
        <Button
          type="button"
          className="w-72 px-4 py-3 text-sm font-medium leading-5 bg-[#FEE500] text-neutral-800 hover:bg-[#e6cf00]"
          onClick={() => handleOAuthLogin("kakao")}
        >
          <KakaoIcon className="text-neutral-800" />
          Kakao로 계속하기
        </Button>
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
