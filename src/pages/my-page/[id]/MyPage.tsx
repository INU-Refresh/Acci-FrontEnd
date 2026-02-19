import MyPage from "@/pages/my-page/MyPage";
import type { UserInfo } from "@/entities/user/model/user-info";

interface MyPageProps {
  id: string;
  initialUserInfo?: UserInfo | null;
}

export default function MyPageById({ id, initialUserInfo = null }: MyPageProps) {
  return <MyPage id={id} initialUserInfo={initialUserInfo} />;
}
