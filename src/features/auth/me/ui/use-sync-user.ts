"use client";

import { useEffect } from "react";

import { fetchUserMe } from "@/features/auth/me/api/get-me";
import { useAuthStore } from "@/shared/store/auth-store";

export function useSyncUser() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    let canceled = false;
    const currentEpoch = useAuthStore.getState().authEpoch;

    const syncUser = async () => {
      try {
        const user = await fetchUserMe();
        if (!canceled && useAuthStore.getState().authEpoch === currentEpoch) {
          setUser(user);
          console.log("[Auth] 사용자 정보 동기화 성공");
        }
      } catch (error) {
        if (!canceled && useAuthStore.getState().authEpoch === currentEpoch) {
          setUser(null);
          console.log("[Auth] 사용자 정보 동기화 실패");
        }
      }
    };

    syncUser();

    return () => {
      canceled = true;
    };
  }, [setUser]);
}
