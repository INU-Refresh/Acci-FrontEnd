import { ImageUploadSection } from "./ImageUploadSection";
import { ModelViewerSection } from "./ModelViewerSection";
import { ChangeEvent } from "react";

interface OptionalInputSectionProps {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  modelFileName: string;
  uploadedImages: File[];
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function OptionalInputSection({ selectedBrand, selectedModel, selectedYear, modelFileName, uploadedImages, onFileChange }: OptionalInputSectionProps) {
  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-0 pt-10">
      <div className="w-full sm:w-[560px] pb-4">
        <h2 className="text-body7 sm:text-body1 text-gray-700 text-left">선택 입력</h2>
        <p className="text-body9 sm:text-body4 text-gray-500 text-left">파손된 부위를 이미지로 업로드하거나 3D 모델로 클릭해주세요</p>
      </div>

      {/* 파손 사진 업로드 */}
      <ImageUploadSection uploadedImages={uploadedImages} onFileChange={onFileChange} />

      {/* 3D 모델 선택 */}
      <ModelViewerSection selectedBrand={selectedBrand} selectedModel={selectedModel} selectedYear={selectedYear} modelFileName={modelFileName} />
    </section>
  );
}
