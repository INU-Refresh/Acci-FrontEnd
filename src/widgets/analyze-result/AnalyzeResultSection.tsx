import { AnalyzedVideoCard } from "@/features/analyze/result/AnalyzedVideoCard";
import { FaultAnalysisCard } from "@/features/analyze/result/FaultAnalysisCard";
import { PrecedentList } from "@/features/analyze/result/PrecedentList";

export function AnalyzeResultSection() {
  // TODO [Minjun]: 분석 결과 데이터 API 연동
  // TODO [Minjun]: 과실 비율 데이터 하드코딩 제거 후 API 연동
  const faultItems = [
    {
      label: "A차량(직진)",
      percent: "70%",
      reasons: ["제한속도 초과 (10km/h)", "교차로 진입 시 주의 부족"],
      tone: "red" as const,
    },
    {
      label: "B차량(직진)",
      percent: "30%",
      reasons: ["직진 차량 진행 방해", "안전 확인 의무 위반", "좌회전 신호 위반"],
      tone: "blue" as const,
    },
  ];

  // TODO [Minjun]: 관련 판례 데이터 하드코딩 제거 후 API 연동
  const precedents = [
    {
      id: "case-1",
      category: ["판결", "민사", "손해배상"],
      title: "대법원 2023도1234 손해배상(자동차)",
      date: "2026.01.01",
      summary: "교차로에서 직진 차량과 좌회전 차량 간 충돌사고에서 좌회전 차량의 과실을 70:30으로 인정한 사례",
    },
    {
      id: "case-2",
      category: ["판결", "민사", "손해배상"],
      title: "대법원 2023도1234 손해배상(자동차)",
      date: "2026.01.01",
      summary: "직진 차량 진행 방해가 인정되는 경우 과실 비율을 70:30으로 판단한 사례",
    },
    {
      id: "case-3",
      category: ["판결", "민사", "손해배상"],
      title: "대법원 2023도1234 손해배상(자동차)",
      date: "2026.01.01",
      summary: "좌회전 차량 신호 위반 및 주의 의무 위반이 인정된 사고 사례",
    },
  ];

  return (
    <section className="flex w-full max-w-xl flex-col items-center gap-4 md:gap-6">
      {/* 분석 영상 */}
      {/* TODO [Minjun]: 분석 영상 제목 API 연동 */}
      <AnalyzedVideoCard title="분석한 영상" />

      {/* 과실 비율 분석 */}
      <FaultAnalysisCard
        // TODO [Minjun]: 과실 분석 섹션 제목 API 연동
        faultTitle="과실 비율 분석"
        faultItems={faultItems}
        // TODO [Minjun]: 사고 장소 및 특징 제목/태그/설명 API 연동
        sceneTitle="사고 장소 및 특징"
        sceneTags={["직선도로", "T자형 교차로"]}
        sceneDescriptions={["차로 감소 도로가 있습니다", "추돌 사고가 자주 발생하는 구간입니다", "열린 문 접촉사고가 자주 발생하는 구간입니다"]}
        // TODO [Minjun]: 법적 근거 제목/법령/설명 API 연동
        legalTitle="법적 근거"
        legalLaw="도로교통법 제25조"
        legalDescription="좌회전하는 차량은 직진하는 차량의 진행을 방해해서는 안된다"
      />

      {/* 관련 판례 */}
      {/* TODO [Minjun]: 관련 판례 제목/총 건수 API 연동 */}
      <PrecedentList title="관련 판례" totalCount={12} items={precedents} />
    </section>
  );
}
