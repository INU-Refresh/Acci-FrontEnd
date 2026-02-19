import MyPage from "@/pages/my-page/MyPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <MyPage initialUserInfo={initialUserInfo} />;
}
