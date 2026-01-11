import { UploadCardHeader } from "@/features/analyze/upload/UploadCardHeader";

type UploadReadyCardProps = {
  onCancel: () => void;
};

export function UploadReadyCard({ onCancel }: UploadReadyCardProps) {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-4 md:p-6">
      <UploadCardHeader title="영상 업로드" onCancel={onCancel} />
      <div
        className="mt-4 aspect-3/2 rounded-lg bg-gray-50 md:mt-6 md:aspect-auto md:h-72"
        aria-label="업로드된 영상 미리보기"
      />
      <button type="button" className="mt-6 hidden w-full rounded-lg bg-gray-900 py-4 text-body7 text-white md:block md:text-body5">
        AI 분석하기
      </button>
    </div>
  );
}
