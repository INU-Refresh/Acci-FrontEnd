"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { exchangeOAuthCode } from "@/features/auth/api/oauth-api";

const DEFAULT_REDIRECT_PATH = "/";

export function OAuthRedirectScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 리다이렉트 쿼리에서 인증 코드를 가져옵니다.
  const code = useMemo(() => (searchParams ? searchParams.get("code") : null), [searchParams]);
  const redirectPath = useMemo(() => {
    // state 또는 sessionStorage에 저장된 경로를 우선 복귀 경로로 사용합니다.
    const state = searchParams?.get("state");
    const storedRedirect = typeof window !== "undefined" ? sessionStorage.getItem("postLoginRedirect") : null;
    return (state && state.startsWith("/")) || (storedRedirect && storedRedirect.startsWith("/"))
      ? state || storedRedirect || DEFAULT_REDIRECT_PATH
      : DEFAULT_REDIRECT_PATH;
  }, [searchParams]);

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
        // Authorization Code를 서버로 보내 Access Token을 발급받습니다.
        // Flow: /oauth2/redirect?code=... -> /api/v1/auth/token (POST) -> accessToken 수신
        const { accessToken } = await exchangeOAuthCode(code);

        if (accessToken) {
          // Access Token은 응답 바디로 내려오므로 로컬에 저장합니다.
          localStorage.setItem("accessToken", accessToken);
        }

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
