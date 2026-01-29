"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { exchangeOAuthCode } from "@/features/auth/api/oauth-api";

const DEFAULT_REDIRECT_PATH = "/";

export default function OAuthRedirectScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 리다이렉트 쿼리에서 인증 코드를 가져옵니다.
  const code = useMemo(() => (searchParams ? searchParams.get("code") : null), [searchParams]);
  const redirectPath = DEFAULT_REDIRECT_PATH;

  useEffect(() => {
    if (!code) {
      return;
    }

    const storedRedirect = typeof window !== "undefined" ? sessionStorage.getItem("postLoginRedirect") : null;
    if (storedRedirect) {
      // 인증 처리 완료 후에는 복귀 경로를 비웁니다.
      sessionStorage.removeItem("postLoginRedirect");
    }

    const exchangeToken = async () => {
      try {
        // Authorization Code를 서버로 보내 토큰을 발급받습니다.
        // Flow: /oauth2/redirect?code=... -> /api/v1/auth/token (POST)
        await exchangeOAuthCode(code);

        // TODO [Minjun]: 사용자 프로필 조회 후 인증 상태 업데이트
        // 토큰 교환이 끝나면 원래 페이지로 이동합니다.
        router.replace(redirectPath as never);
      } catch (error) {
        setErrorMessage("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    };

    exchangeToken();
  }, [code, redirectPath, router]);

  if (!code) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-gray-50 px-4 text-center">
        <p className="text-body3 text-gray-900">로그인 정보가 없습니다. 다시 시도해주세요.</p>
        <p className="text-body8 text-gray-500">문제가 계속되면 로그인 페이지에서 다시 시도해주세요.</p>
      </div>
    );
  }

  if (!errorMessage) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-gray-50 px-4 text-center">
      <p className="text-body3 text-gray-900">{errorMessage}</p>
      <p className="text-body8 text-gray-500">문제가 계속되면 로그인 페이지에서 다시 시도해주세요.</p>
    </div>
  );
}
