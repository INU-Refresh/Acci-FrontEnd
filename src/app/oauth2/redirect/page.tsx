import { Suspense } from "react";

import { OAuthRedirectScreen } from "@/features/auth/oauth/ui/OAuthRedirectScreen";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      {/* Next.js App Router에서 useSearchParams는 CSR로 전환됩니다. */}
      {/* CSR 전환 시점을 안전하게 처리하려면 Suspense로 감싸야 빌드/프리렌더 오류가 발생 x */}
      {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
      <OAuthRedirectScreen />
    </Suspense>
  );
}
