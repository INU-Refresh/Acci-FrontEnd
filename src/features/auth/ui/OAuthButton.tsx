"use client";

import * as React from "react";

import { OAUTH_PROVIDERS, type OAuthProvider } from "@/features/auth/config/oauth-providers";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

const OAUTH_BASE_URL = process.env.NEXT_PUBLIC_OAUTH_BASE_URL;

type OAuthButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  provider: OAuthProvider;
};

export default function OAuthButton({ provider, className, onClick, ...props }: OAuthButtonProps) {
  const { label, className: providerClassName, Icon, iconClassName } = OAUTH_PROVIDERS[provider];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!OAUTH_BASE_URL) {
      // 환경 변수가 없으면 잘못된 리다이렉트 방지
      console.error("[Auth] : env파일에 NEXT_PUBLIC_OAUTH_BASE_URL 누락됨. 추가 필요.");
      return;
    }
    window.location.href = `${OAUTH_BASE_URL}/${provider}`;
  };

  return (
    <Button
      type="button"
      className={cn("w-72 px-4 py-3 text-sm font-medium leading-5", providerClassName, className)}
      onClick={handleClick}
      {...props}
    >
      <Icon className={iconClassName} />
      {label}
    </Button>
  );
}
