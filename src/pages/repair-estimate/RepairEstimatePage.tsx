"use client";

import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { Button } from "@/shared/ui/button";
import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { VEHICLES, BRAND_LABELS } from "@/entities/vehicle";

export default function RepairEstimatePage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [modelFileName, setModelFileName] = useState<string>("");

  const brandOptions = useMemo(() => Array.from(new Set(VEHICLES.map(({ brand }) => brand))), []);
  const modelOptions = useMemo(() => VEHICLES.filter((vehicle) => vehicle.brand === selectedBrand).map(({ model }) => model), [selectedBrand]);

  // 모델명에 따른 모델 파일명 매핑
  const getModelFileName = (brand: string, model: string): string => {
    const vehicle = VEHICLES.find((item) => item.brand === brand && item.model === model);
    if (!vehicle) return "";

    // 현재 CompactCar.glb 파일 사용
    return "CompactCar";
  };

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const fileName = getModelFileName(selectedBrand, selectedModel);
      setModelFileName(fileName);
    } else {
      setModelFileName("");
    }
  }, [selectedBrand, selectedModel]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImages(Array.from(e.target.files));
    }
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // 브랜드 변경 시 모델명 초기화
  };

  const isFormValid = !!selectedBrand && !!selectedModel;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
          <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6 mb-4">
            <div className="flex gap-4 items-center">
              <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
                <span className="text-body9 sm:text-body5 text-white">1</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <label className="text-body9 sm:text-body5 text-gray-900">
                  차량 브랜드 선택 <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedBrand}
                  onChange={handleBrandChange}
                  className="w-40 text-body9 sm:text-body5 text-gray-300 border-none bg-transparent cursor-pointer focus:outline-none"
                >
                  <option value="">브랜드를 선택하세요</option>
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>
                      {BRAND_LABELS[brand] ?? brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 모델명 선택 */}
          <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6">
            <div className="flex gap-4 items-center">
              <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
                <span className="text-body9 sm:text-body5 text-white">2</span>
              </div>

              <div className="flex-1 flex items-center justify-between">
                <label className="text-body9 sm:text-body5 text-gray-900">
                  모델명 선택 <span className="text-red-500">*</span>
                </label>

                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedBrand}
                  className="w-40 text-body9 sm:text-body5 text-gray-300 border-none bg-transparent cursor-pointer focus:outline-none disabled:cursor-not-allowed"
                >
                  <option value="">모델명을 선택하세요</option>
                  {selectedBrand &&
                    modelOptions.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
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
                <span className="text-body9 sm:text-body5 text-white">3</span>
              </div>
              <label className="text-body9 sm:text-body5 text-gray-900">파손 사진 업로드</label>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex flex-col gap-4 items-center justify-center min-h-[143px]">
              <div className="flex flex-col items-center text-body9 sm:text-body7 text-gray-400">
                <p>파손 사진을 업로드하세요</p>
                <p>파일 드래그 혹은 선택</p>
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
              {uploadedImages.length > 0 && <p className="text-body9 sm:text-body7 text-gray-500">{uploadedImages.length}개 파일 선택됨</p>}
            </div>
          </div>

          {/* 3D 모델 선택 */}
          <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6">
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
                <span className="text-body9 sm:text-body5 text-white">4</span>
              </div>
              <label className="text-body9 sm:text-body5 text-gray-900">3D 모델 선택</label>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-[600px]">
              {selectedModel && modelFileName ? (
                <CarModelViewer modelName={modelFileName} className="w-full h-full" />
              ) : (
                <p className="text-body9 sm:text-body7 text-gray-400">모델명을 선택해주세요</p>
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
