"use client";

import { ReactQueryProvider } from "@/shared/lib/react-query";
import { ReactNode } from "react";

/**
 * FSD app layer - 전역 providers
 * App Router의 layout에서 사용하는 providers 모음
 */
export function Providers({ children }: { children: ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
