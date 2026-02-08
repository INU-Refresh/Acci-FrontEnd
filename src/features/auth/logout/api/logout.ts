import axiosInstance from "@/shared/api/axios-instance";

const LOGOUT_PATH = "/api/v1/auth/logout";

export async function requestLogout() {
  // TODO [Minjun]: 로그아웃 API 엔드포인트 확정 후 경로 검증 필요
  const response = await axiosInstance.post(LOGOUT_PATH);
  return response.data;
}
