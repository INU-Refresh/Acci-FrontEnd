import HomePage from "@/pages/home/HomePage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <HomePage initialUserInfo={initialUserInfo} />;
}
