import MyPage from "@/pages/my-page/MyPage";
import type { UserInfo } from "@/entities/user/model/user-info";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";

interface MyPageProps {
  id: string;
  initialUserInfo?: UserInfo | null;
  analysisRecords?: AnalysisRecordItem[];
}

export default function MyPageById({ id, initialUserInfo = null, analysisRecords = [] }: MyPageProps) {
  return <MyPage id={id} initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} />;
}
