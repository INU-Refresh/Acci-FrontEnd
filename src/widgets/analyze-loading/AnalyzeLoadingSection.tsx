import { AnalysisMessage } from "@/features/analyze/loading/AnalysisMessage";
import { AnalysisProgress } from "@/features/analyze/loading/AnalysisProgress";
import { AnalysisTip } from "@/features/analyze/loading/AnalysisTip";

export function AnalyzeLoadingSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-10 md:gap-6">
      {/* 분석 진행 상태 */}
      <AnalysisProgress />
      <AnalysisMessage />
      <AnalysisTip />
    </section>
  );
}
