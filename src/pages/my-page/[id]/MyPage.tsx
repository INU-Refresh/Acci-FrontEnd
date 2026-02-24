import MyPage from "@/pages/my-page/MyPage";
import type { UserInfo } from "@/entities/user/model/user-info";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";
import type { RepairRecordItem } from "@/entities/repair-estimate/api/get-recent-repair-records";

interface MyPageProps {
  id: string;
  initialUserInfo?: UserInfo | null;
  analysisRecords?: AnalysisRecordItem[];
  repairRecords?: RepairRecordItem[];
}

export default function MyPageById({ id, initialUserInfo = null, analysisRecords = [], repairRecords = [] }: MyPageProps) {
  return <MyPage id={id} initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} repairRecords={repairRecords} />;
}
