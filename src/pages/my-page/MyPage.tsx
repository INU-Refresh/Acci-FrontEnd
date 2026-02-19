import { MyPageSection } from "@/widgets/my-page/MyPageSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import type { UserInfo } from "@/entities/user/model/user-info";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";

type MyPageProps = {
  id?: string;
  initialUserInfo?: UserInfo | null;
  analysisRecords?: AnalysisRecordItem[];
};

export default function MyPage({ id, initialUserInfo = null, analysisRecords = [] }: MyPageProps) {
  void id;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <MyPageSection initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} />
      </main>
      <Footer />
    </div>
  );
}
