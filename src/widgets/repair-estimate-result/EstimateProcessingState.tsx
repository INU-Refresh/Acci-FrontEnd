interface EstimateProcessingStateProps {}

export function EstimateProcessingState({}: EstimateProcessingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 gap-2">
      <p className="text-body4 text-gray-700">견적을 계산 중입니다.</p>
      <p className="text-body9 text-gray-500">잠시만 기다려주세요.</p>
    </div>
  );
}
