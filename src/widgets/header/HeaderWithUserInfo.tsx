import { getUserInfo } from "@/entities/user/api/get-user-info";
import { Header } from "@/widgets/header/Header";

export default async function HeaderWithUserInfo() {
  const userInfo = await getUserInfo();
  return <Header initialUserInfo={userInfo} />;
}
