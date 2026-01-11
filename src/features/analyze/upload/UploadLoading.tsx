import { UploadCardHeader } from "@/features/analyze/upload/UploadCardHeader";

type UploadLoadingProps = {
  progress: number;
  onCancel?: () => void;
};

export function UploadLoading({ progress, onCancel }: UploadLoadingProps) {
  const progressText = Math.min(Math.round(progress), 100);

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-4 md:p-6">
      <UploadCardHeader title="영상 업로드" onCancel={onCancel} />
      <div className="mt-6 flex aspect-3/2 flex-col items-center justify-center gap-4 rounded-lg bg-gray-50 p-6 text-center md:aspect-auto md:h-52">
        <p className="text-body9 md:text-body7 text-gray-400">영상을 업로드하는 중입니다</p>
        <div className="flex items-center gap-2">
        <div className="h-5 w-36 rounded-full bg-gray-100">
            <div className="h-5 rounded-full bg-gray-700 transition-all" style={{ width: `${progressText}%` }} />
          </div>
          <span className="text-body11 font-medium md:text-body9 text-gray-700">{progressText}%</span>
        </div>
      </div>
    </div>
  );
}
