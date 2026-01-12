export function AnalysisMessage() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {/* 분석 진행 안내 문구 */}
      <p className="text-body1 font-semibold text-gray-900 md:text-title4">Acci가 분석중입니다</p>
      <div className="text-body10 text-gray-500 md:text-body6">
        <p>업로드한 블랙박스 영상을 분석하여</p>
        <p>과실비율, 판단근거, 관련판례를 제공합니다</p>
      </div>
    </div>
  );
}
