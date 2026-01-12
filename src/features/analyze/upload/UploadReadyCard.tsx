import Link from "next/link";
import { UploadCardHeader } from "@/features/analyze/upload/UploadCardHeader";

type UploadReadyCardProps = {
  onCancel: () => void;
  previewUrl?: string | null;
};

export function UploadReadyCard({ onCancel, previewUrl }: UploadReadyCardProps) {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-4 md:p-6">
      <UploadCardHeader title="영상 업로드" onCancel={onCancel} />
      <div className="mt-4 overflow-hidden rounded-lg bg-gray-50 md:mt-6 md:h-72">
        {previewUrl ? (
          <video className="h-full w-full object-cover" src={previewUrl} controls />
        ) : (
          <div className="aspect-3/2 md:aspect-auto md:h-72" aria-label="업로드된 영상 미리보기" />
        )}
      </div>
      <Link href="/analyze/loading" className="mt-6 hidden w-full rounded-lg bg-gray-900 py-4 text-body7 text-white md:block md:text-body5 text-center">
        AI 분석하기
      </Link>
    </div>
  );
}
