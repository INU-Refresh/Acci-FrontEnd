import MyPage from "@/pages/my-page/[id]/MyPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const initialUserInfo = await getUserInfo();
  const { id } = await params;
  return <MyPage id={id} initialUserInfo={initialUserInfo} />;
}
