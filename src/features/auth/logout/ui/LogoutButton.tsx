"use client";

import { useRouter } from "next/navigation";

import { requestLogout } from "@/features/auth/logout/api/logout";
import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/store/auth-store";

type LogoutButtonProps = {
  className?: string;
};

export function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await requestLogout();
      console.log("[Auth] logout 성공");
    } catch (error) {
      console.log("[Auth] logout 실패");
    } finally {
      logout();
      router.replace("/");
    }
  };

  const userInitial = user?.name?.[0]?.toUpperCase() || "U";

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={cn("flex items-center gap-2 text-body7 font-medium text-gray-400", className)}
    >
      <div className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
        <span className="text-body7 font-medium">{userInitial}</span>
      </div>
      <span>로그아웃</span>
    </button>
  );
}
