import { ProfileCard } from "@/features/my-page/ProfileCard";
import { RecordListCard } from "@/features/my-page/RecordListCard";
import type { UserInfo } from "@/entities/user/model/user-info";
import type { AnalysisRecordItem } from "@/entities/analysis/api/get-recent-analysis-records";
import type { RepairRecordItem } from "@/entities/repair-estimate/api/get-recent-repair-records";

type MyPageSectionProps = {
  initialUserInfo?: UserInfo | null;
  analysisRecords?: AnalysisRecordItem[];
  repairRecords?: RepairRecordItem[];
};

export function MyPageSection({ initialUserInfo = null, analysisRecords = [], repairRecords = [] }: MyPageSectionProps) {
  return (
    <section className="flex w-full max-w-xl flex-col items-center gap-6 py-10 md:gap-8">
      <ProfileCard
        name={initialUserInfo?.name ?? "사용자"}
        email={initialUserInfo?.email ?? "이메일 정보 없음"}
        profileImage={initialUserInfo?.profileImage}
      />
      {/* TODO [Minjun]: 최근 분석 기록 더보기 라우팅 API 연동 */}
      <RecordListCard title="최근 분석 기록" items={analysisRecords} moreHref="/my-page/analysis" />
      {/* TODO [Minjun]: 최근 수리비 견적 기록 더보기 라우팅 API 연동 */}
      <RecordListCard title="최근 수리비 견적 기록" items={repairRecords} moreHref="/my-page/repair-estimates" />
    </section>
  );
}
