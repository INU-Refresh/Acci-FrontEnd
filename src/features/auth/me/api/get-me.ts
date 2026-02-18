import axiosInstance from "@/shared/api/axios-instance";

type UserMeResponse = {
  name: string;
  email: string;
  profileImage?: string | null;
  role?: string | null;
};

export async function fetchUserMe() {
  const response = await axiosInstance.get<UserMeResponse>("/api/v1/users/me");
  return response.data;
}
