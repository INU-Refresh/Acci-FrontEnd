import axiosInstance from "@/shared/api/axios-instance";

const LOGOUT_PATH = "/api/v1/auth/logout";

export async function requestLogout() {
  // 로그아웃 성공 시 204(No Content) 응답을 기대합니다.
  await axiosInstance.post(LOGOUT_PATH);
}
