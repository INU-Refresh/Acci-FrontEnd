import { LoadingSpinner } from "@/shared/ui/loading-spinner";

export function EstimateProcessingState() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 gap-2">
      <LoadingSpinner aria-label="분석 진행 중" />
      <p className="text-body4 text-gray-700">견적을 계산 중입니다.</p>
    </div>
  );
}
