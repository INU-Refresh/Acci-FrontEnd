import axiosInstance from "@/shared/api/axios-instance";

type OAuthExchangeResponse = {
  accessTokenExpiresIn: number;
};

const OAUTH_EXCHANGE_PATH = process.env.NEXT_PUBLIC_OAUTH_EXCHANGE_PATH || "";

export async function exchangeOAuthCode(code: string) {
  const response = await axiosInstance.post<OAuthExchangeResponse>(OAUTH_EXCHANGE_PATH, { code });
  return response.data;
}
