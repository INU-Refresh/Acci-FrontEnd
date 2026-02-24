import MyPage from "@/pages/my-page/[id]/MyPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRecentAnalysisRecords } from "@/entities/analysis/api/get-recent-analysis-records";
import { getRecentRepairRecords } from "@/entities/repair-estimate/api/get-recent-repair-records";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const initialUserInfo = await getUserInfo();
  const analysisRecords = await getRecentAnalysisRecords(0, 5);
  const repairRecords = await getRecentRepairRecords(0, 5);
  const { id } = await params;
  return <MyPage id={id} initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} repairRecords={repairRecords} />;
}
