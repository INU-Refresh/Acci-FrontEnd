import MyPage from "@/pages/my-page/[id]/MyPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRecentAnalysisRecords } from "@/entities/analysis/api/get-recent-analysis-records";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const initialUserInfo = await getUserInfo();
  const analysisRecords = await getRecentAnalysisRecords(0, 5);
  const { id } = await params;
  return <MyPage id={id} initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} />;
}
