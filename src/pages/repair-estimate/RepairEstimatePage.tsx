"use client";

import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { Button } from "@/shared/ui/button";
import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";
import { type ChangeEvent, useMemo, useState } from "react";
import { VEHICLES, BRAND_LABELS } from "@/entities/vehicle";
import { SelectField } from "@/features/repair-estimate/ui/SelectField";

export default function RepairEstimatePage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  const brandOptions = useMemo(() => Array.from(new Set(VEHICLES.map(({ brand }) => brand))), []);
  const modelOptions = useMemo(() => VEHICLES.filter((vehicle) => vehicle.brand === selectedBrand).map(({ model }) => model), [selectedBrand]);
  const yearOptions = useMemo(() => Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2011 + i), []);

  const brandSelectOptions = useMemo(() => brandOptions.map((brand) => ({ value: brand, label: BRAND_LABELS[brand] ?? brand })), [brandOptions]);
  const modelSelectOptions = useMemo(() => modelOptions.map((model) => ({ value: model, label: model })), [modelOptions]);
  const yearSelectOptions = useMemo(() => yearOptions.map((year) => ({ value: year.toString(), label: `${year}년` })), [yearOptions]);

  // 차량 타입에 따른 3D 모델 파일명 매핑
  const getModelFileName = (brand: string, model: string): string => {
    const vehicle = VEHICLES.find((item) => item.brand === brand && item.model === model);
    if (!vehicle) return "";

    // vehicleType에 따라 .glb 파일명 매핑
    const modelFileMap: Record<string, string> = {
      sedan: "Sedan",
      hatchback: "Hatchback",
      suv: "SUV",
    };

    return modelFileMap[vehicle.vehicleType] || "";
  };

  const modelFileName = useMemo(() => {
    if (selectedBrand && selectedModel) {
      return getModelFileName(selectedBrand, selectedModel);
    }
    return "";
  }, [selectedBrand, selectedModel]);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 3000);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length > 5) {
        showToast("최대 5개의 파일만 업로드할 수 있습니다.");
        setUploadedImages(files.slice(0, 5));
      } else {
        setUploadedImages(files);
      }
    }
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // 브랜드 변경 시 모델명 초기화
  };

  const isFormValid = !!selectedBrand && !!selectedModel && !!selectedYear;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 토스트 메시지 */}
      {toast.visible && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-body9 sm:text-body7">{toast.message}</span>
          </div>
        </div>
      )}

      <Header />

      <main className="flex-1">
        {/* 타이틀 섹션 */}
        <section className="flex pt-10 flex-col items-center gap-6 self-stretch px-4 sm:px-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="text-title4 sm:text-title2 text-gray-900">수리비 견적</h1>
            <p className="text-body9 sm:text-body4 text-gray-500">파손 사진을 업로드하면 Acci가 예상 수리비 견적을 제공합니다</p>
          </div>
        </section>

        {/* 필수 입력 섹션 */}
        <section className="flex flex-col items-center w-full px-4 sm:px-0">
          <div className="w-full sm:w-[560px] pt-10 pb-4">
            <h2 className="text-body7 sm:text-body1 text-gray-700 text-left">필수 입력</h2>
          </div>

          {/* 차량 브랜드 선택 */}
          <SelectField number={1} label="차량 브랜드 선택" placeholder="브랜드를 선택하세요" value={selectedBrand} onChange={handleBrandChange} options={brandSelectOptions} />

          {/* 모델명 선택 */}
          <SelectField
            number={2}
            label="모델명 선택"
            placeholder="모델명을 선택하세요"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            options={modelSelectOptions}
            disabled={!selectedBrand}
          />

          {/* 연식 선택 */}
          <SelectField
            number={3}
            label="연식 선택"
            placeholder="연식을 선택하세요"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            options={yearSelectOptions}
            disabled={!selectedBrand || !selectedModel}
          />
        </section>

        {/* 선택 입력 섹션 */}
        <section className="flex flex-col items-center w-full px-4 sm:px-0 pt-10">
          <div className="w-full sm:w-[560px] pb-4 ">
            <h2 className="text-body7 sm:text-body1 text-gray-700 text-left">선택 입력</h2>
            <p className="text-body9 sm:text-body4 text-gray-500 text-left">파손된 부위를 이미지로 업로드하거나 3D 모델로 클릭해주세요</p>
          </div>

          {/* 파손 사진 업로드 */}
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

          {/* 3D 모델 선택 */}
          <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6">
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
                <span className="text-body9 sm:text-body5 text-white">5</span>
              </div>
              <label className="text-body9 sm:text-body5 text-gray-900">3D 모델 선택</label>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-[600px]">
              {selectedBrand && selectedModel && selectedYear && modelFileName ? (
                <CarModelViewer modelName={modelFileName} className="w-full h-full" />
              ) : (
                <p className="text-body9 sm:text-body7 text-gray-400">브랜드, 모델명, 연식을 모두 선택해주세요</p>
              )}
            </div>
          </div>
        </section>

        {/* 제출 버튼 */}
        <section className="flex flex-col items-center w-full px-4 sm:px-0 pt-4 pb-10">
          <Button
            disabled={!isFormValid}
            className={`w-full sm:w-[560px] py-4 rounded-lg text-body9 sm:text-body5 h-14 ${
              isFormValid ? "bg-gray-900 text-white hover:bg-gray-900/90 cursor-pointer" : "bg-gray-200 text-white cursor-not-allowed"
            }`}
          >
            예상 수리비 결과보기
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
