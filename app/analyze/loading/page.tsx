import LoadingPage from "@/pages/analyze/loading/LoadingPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <LoadingPage initialUserInfo={initialUserInfo} />;
}
