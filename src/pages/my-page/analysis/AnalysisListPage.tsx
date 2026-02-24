import type { UserInfo } from "@/entities/user/model/user-info";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { RecordListPageSection } from "@/widgets/my-page/RecordListPageSection";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";

type AnalysisListPageProps = {
  initialUserInfo?: UserInfo | null;
  records?: AnalysisRecordItem[];
};

export default function AnalysisListPage({ initialUserInfo = null, records = [] }: AnalysisListPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <RecordListPageSection title="최근 분석 기록" items={records} />
      </main>
      <Footer />
    </div>
  );
}
