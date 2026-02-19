import UploadPage from "@/pages/analyze/upload/UploadPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <UploadPage initialUserInfo={initialUserInfo} />;
}
