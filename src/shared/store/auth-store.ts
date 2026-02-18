// 예시 코드입니다. 전부 수정하셔도 좋습니다.
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface User {
  email: string;
  name: string;
  profileImage?: string | null;
  role?: string | null;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  authEpoch: number;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  // 쿠키 기반으로 전환되어서 localStorage 미들웨어는 제거했습니다.
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      authEpoch: 0,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => {
        set((state) => ({ user: null, isAuthenticated: false, authEpoch: state.authEpoch + 1 }));
      },
    }),
    { name: "AuthStore" }
  )
);
