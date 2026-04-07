import type { UserInfo } from "@/entities/user/model/user-info";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { RecordListPageSection } from "@/widgets/my-page/RecordListPageSection";
import type { RepairRecordItem } from "@/entities/repair-estimate/api/get-recent-repair-records";

type RepairEstimateListPageProps = {
  initialUserInfo?: UserInfo | null;
  records?: RepairRecordItem[];
  currentPage?: number;
  totalPages?: number;
};

export default function RepairEstimateListPage({ initialUserInfo = null, records = [], currentPage = 1, totalPages = 0 }: RepairEstimateListPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <RecordListPageSection
          title="최근 수리비 견적 기록"
          items={records}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/my-page/repair-estimates"
        />
      </main>
      <Footer />
    </div>
  );
}
