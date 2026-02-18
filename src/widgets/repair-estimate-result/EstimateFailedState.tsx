interface EstimateFailedStateProps {}

export function EstimateFailedState({}: EstimateFailedStateProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 gap-2">
      <p className="text-body4 text-red-500">견적 계산에 실패했습니다.</p>
      <p className="text-body9 text-gray-500">다시 시도하거나 고객센터에 문의해주세요.</p>
    </div>
  );
}
