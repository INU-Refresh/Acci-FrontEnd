import { ProfileCard } from "@/features/my-page/ProfileCard";
import { RecordListCard } from "@/features/my-page/RecordListCard";

export function MyPageSection() {
  const analysisRecords = [
    { id: "analysis-1", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70" },
    { id: "analysis-2", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70" },
    { id: "analysis-3", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70" },
  ];

  const repairRecords = [
    { id: "repair-1", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원" },
    { id: "repair-2", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원" },
    { id: "repair-3", title: "제네시스 GV80", date: "2026.01.01", detail: "예상 수리비 800만원" },
  ];

  return (
    <section className="flex w-full max-w-xl flex-col items-center gap-6 py-10 md:gap-8">
      <ProfileCard name="홍길동" email="hongildong@gmail.com" />
      <RecordListCard title="최근 분석 기록" items={analysisRecords} />
      <RecordListCard title="최근 수리비 견적 기록" items={repairRecords} />
    </section>
  );
}
