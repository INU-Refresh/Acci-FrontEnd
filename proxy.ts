import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_COOKIE_NAMES = ["accessToken", "refreshToken"];

function hasAuthCookie(request: NextRequest) {
  return AUTH_COOKIE_NAMES.some((name) => request.cookies.get(name));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 인증 쿠키가 없으면 로그인 페이지로 이동합니다.
  if (!hasAuthCookie(request)) {
    const redirectUrl = new URL("/auth", request.url);
    redirectUrl.searchParams.set("redirect", `${pathname}${search}`);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/analyze/:path*", "/repair-estimate/:path*", "/my-page/:path*"],
};
