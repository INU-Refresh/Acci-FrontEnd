import { MyPageSection } from "@/widgets/my-page/MyPageSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { BackButton } from "@/widgets/repair-estimate";
import type { UserInfo } from "@/entities/user/model/user-info";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";
import type { RepairRecordItem } from "@/entities/repair-estimate/api/get-recent-repair-records";

type MyPageProps = {
  id?: string;
  initialUserInfo?: UserInfo | null;
  analysisRecords?: AnalysisRecordItem[];
  repairRecords?: RepairRecordItem[];
};

export default function MyPage({ id, initialUserInfo = null, analysisRecords = [], repairRecords = [] }: MyPageProps) {
  void id;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <div className="md:hidden">
        <BackButton href="/" className="pt-3" />
      </div>
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16">
        <MyPageSection initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} repairRecords={repairRecords} />
      </main>
      <Footer />
    </div>
  );
}
