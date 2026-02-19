import MyPage from "@/pages/my-page/MyPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRecentAnalysisRecords } from "@/entities/analysis/api/get-recent-analysis-records";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  const analysisRecords = await getRecentAnalysisRecords(0, 5);
  return <MyPage initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} />;
}
