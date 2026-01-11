export function UploadGuideCard() {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-gray-100 p-4 md:p-6">
      <h2 className="text-body9 md:text-body7 text-gray-700">동영상 업로드 가이드</h2>
      <ul className="mt-2 list-inside list-disc grid grid-cols-1 gap-y-2 text-body9 md:grid-cols-2 md:text-body7 text-gray-700">
        <li>영상 길이 : 10초 내외 (사고발생 전후 5초)</li>
        <li>영상 화질 : 최소 FHD (1080p)</li>
        <li>지원 형식 : MP4, AVI</li>
        <li>영상 용량 : 1MB~100MB</li>
      </ul>
    </div>
  );
}
