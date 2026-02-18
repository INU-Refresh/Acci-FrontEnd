interface EstimateUnavailableStateProps {}

export function EstimateUnavailableState({}: EstimateUnavailableStateProps) {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <p className="text-body4 text-gray-500">견적 상태를 확인할 수 없습니다.</p>
    </div>
  );
}
