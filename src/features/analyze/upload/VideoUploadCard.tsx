import { UploadCardHeader } from "@/features/analyze/upload/UploadCardHeader";
import type React from "react";

type VideoUploadCardProps = {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>; // useRef 초기화 때문에 null도 허용
  errorMessage?: string | null;
};

export function VideoUploadCard({ onFileChange, fileInputRef, errorMessage }: VideoUploadCardProps) {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-4 md:p-6">
      <UploadCardHeader title="영상 업로드" />
      <label
        htmlFor="blackbox-video"
        className="mt-4 flex aspect-3/2 cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center md:mt-6 md:aspect-auto md:h-52"
      >
        <div className="flex flex-col items-center gap-1">
          <p className="text-body10 md:text-body7 text-gray-400">블랙박스 영상을 업로드하세요</p>
          <p className="text-body10 md:text-body7 text-gray-400">파일 드래그 혹은 선택</p>
        </div>
        <span className="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-body9 md:text-body7 text-white">
          파일 선택하기
        </span>
        <input
          id="blackbox-video"
          ref={fileInputRef}
          type="file"
          accept="video/mp4,video/x-msvideo"
          className="hidden"
          onChange={onFileChange}
        />
      </label>
      {errorMessage && <p className="mt-2 text-body9 text-red-500">{errorMessage}</p>}
    </div>
  );
}
