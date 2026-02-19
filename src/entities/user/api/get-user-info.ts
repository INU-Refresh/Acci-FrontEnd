import { cookies } from "next/headers";

import type { UserInfo } from "@/entities/user/model/user-info";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getUserInfo(): Promise<UserInfo | null> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(`${API_BASE_URL}/api/v1/users/me`, {
      method: "GET",
      headers: {
        Cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as UserInfo;
    return data;
  } catch {
    return null;
  }
}
