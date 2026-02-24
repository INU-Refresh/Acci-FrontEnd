import AnalysisListPage from "@/pages/my-page/analysis/AnalysisListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRecentAnalysisRecords } from "@/entities/analysis/api/get-recent-analysis-records";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  const records = await getRecentAnalysisRecords(0, 5);
  return <AnalysisListPage initialUserInfo={initialUserInfo} records={records} />;
}
