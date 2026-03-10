"use client";

import type { UserInfo } from "@/entities/user/model/user-info";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { requestLogout } from "@/features/auth/logout/api/logout";
import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/store/auth-store";

type LogoutButtonProps = {
  className?: string;
  userInfo?: UserInfo | null;
};

export function LogoutButton({ className, userInfo = null }: LogoutButtonProps) {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [imageError, setImageError] = useState(false);

  const handleLogout = async () => {
    try {
      await requestLogout();
      console.log("[Auth] logout 성공");
    } catch {
      console.log("[Auth] logout 실패");
    } finally {
      logout();
      router.replace("/");
    }
  };

  const userInitial = userInfo?.name?.[0]?.toUpperCase() || "U";
  const hasProfileImage = Boolean(userInfo?.profileImage) && !imageError;

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={cn("flex items-center gap-2 text-body7 font-medium text-gray-400", className)}
    >
      {hasProfileImage ? (
        <div className="relative size-9 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={userInfo?.profileImage || ""}
            alt={`${userInfo?.name ?? "사용자"} 프로필 이미지`}
            fill
            sizes="36px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <span className="text-body7 font-medium">{userInitial}</span>
        </div>
      )}
      <span>로그아웃</span>
    </button>
  );
}
