import { ProfileCard } from "@/features/my-page/ProfileCard";
import { RecordListCard } from "@/features/my-page/RecordListCard";
import type { UserInfo } from "@/entities/user/model/user-info";

type MyPageSectionProps = {
  initialUserInfo?: UserInfo | null;
};

export function MyPageSection({ initialUserInfo = null }: MyPageSectionProps) {
  // TODO [Minjun]: 최근 분석 기록 API 연동
  const analysisRecords = [
    { id: "1", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/1" },
    { id: "2", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/2" },
    { id: "3", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/3" },
  ];

  // TODO [Minjun]: 최근 수리비 견적 기록 API 연동
  const repairRecords = [
    { id: "1", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원", href: "/repair-estimate/result/1" },
    { id: "2", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원", href: "/repair-estimate/result/2" },
    { id: "3", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원", href: "/repair-estimate/result/3" },
  ];

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
