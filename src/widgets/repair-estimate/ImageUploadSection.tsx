import { ChangeEvent } from "react";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import { Button } from "@/shared/ui/button";

interface ImageUploadSectionProps {
  onExceedLimit?: (message: string) => void;
}

export function ImageUploadSection({ onExceedLimit }: ImageUploadSectionProps) {
  const uploadedImages = useRepairEstimateStore((state) => state.uploadedImages);
  const setUploadedImages = useRepairEstimateStore((state) => state.setUploadedImages);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length > 5) {
        onExceedLimit?.(`최대 5개의 파일만 업로드할 수 있습니다.`);
        setUploadedImages(files.slice(0, 5));
      } else {
        setUploadedImages(files);
      }
    }
  };

  return (
    <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6 mb-4">
      <div className="flex gap-4 items-center mb-6">
        <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
          <span className="text-body9 sm:text-body5 text-white">4</span>
        </div>
        <label className="text-body9 sm:text-body5 text-gray-900">파손 사진 업로드</label>
      </div>

      {/* 파일 선택 영역 */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col gap-4 items-center justify-center min-h-[143px] mb-4">
        <div className="flex flex-col items-center text-body9 sm:text-body7 text-gray-400">
          <p>파손 사진을 업로드하세요</p>
          <p>파일 드래그 혹은 선택 (최대 5개)</p>
        </div>
        <label htmlFor="file-upload">
          <Button
            type="button"
            className="text-body9 sm:text-body5 bg-gray-900 text-white hover:bg-gray-900/90 cursor-pointer"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            파일 선택하기
          </Button>
        </label>
        <input id="file-upload" type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
      </div>

      {/* 업로드된 파일 목록 */}
      {uploadedImages.length > 0 && (
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-body9 sm:text-body7 text-gray-700 font-medium mb-3">선택된 파일 ({uploadedImages.length}/5)</p>
          <div className="space-y-2">
            {uploadedImages.map((file, index) => (
              <div key={index} className="flex items-center gap-2 text-body9 sm:text-body7 text-gray-600 bg-gray-50 rounded px-3 py-2">
                <span className="text-gray-400">{index + 1}.</span>
                <span className="truncate flex-1">{file.name}</span>
                <span className="text-gray-400 text-xs">{(file.size / 1024).toFixed(1)}KB</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
