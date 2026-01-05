import { GoogleIcon, KakaoIcon, NaverIcon } from "@/shared/ui/icons";

export const OAUTH_PROVIDERS = {
  google: {
    label: "Google로 계속하기",
    className: "border border-gray-300 bg-white text-neutral-800 hover:bg-gray-100",
    Icon: GoogleIcon,
    iconClassName: "text-neutral-800",
  },
  naver: {
    label: "Naver로 계속하기",
    className: "bg-[#03C75A] text-white hover:bg-[#02b052]",
    Icon: NaverIcon,
    iconClassName: "text-white",
  },
  kakao: {
    label: "Kakao로 계속하기",
    className: "bg-[#FEE500] text-neutral-800 hover:bg-[#e6cf00]",
    Icon: KakaoIcon,
    iconClassName: "text-neutral-800",
  },
} as const;

export type OAuthProvider = keyof typeof OAUTH_PROVIDERS;
