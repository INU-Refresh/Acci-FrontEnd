import AnalysisListPage from "@/pages/my-page/analysis/AnalysisListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <AnalysisListPage initialUserInfo={initialUserInfo} />;
}
