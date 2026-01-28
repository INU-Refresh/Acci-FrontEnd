"use client";

import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { useRepairEstimateForm, useToast, useImageUpload } from "@/features/repair-estimate/hooks";
import { TitleSection, RepairEstimateFormSection, OptionalInputSection, SubmitSection, ToastMessage } from "@/widgets/repair-estimate";

export default function RepairEstimatePage() {
  const {
    selectedBrand,
    selectedModel,
    selectedYear,
    modelFileName,
    isFormValid,
    brandSelectOptions,
    modelSelectOptions,
    yearSelectOptions,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  } = useRepairEstimateForm();

  const { toast, showToast } = useToast();

  const { uploadedImages, handleFileChange: handleImageChange } = useImageUpload({
    maxFiles: 5,
    onExceedLimit: showToast,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(e);
  };

  const handleSubmit = () => {
    // TODO: 예상 수리비 결과 페이지로 이동
    console.log({
      brand: selectedBrand,
      model: selectedModel,
      year: selectedYear,
      images: uploadedImages,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ToastMessage message={toast.message} visible={toast.visible} />

      <Header />

      <main className="flex-1">
        <TitleSection title="수리비 견적" description="파손 사진을 업로드하면 Acci가 예상 수리비 견적을 제공합니다" />

        <RepairEstimateFormSection
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedYear={selectedYear}
          brandSelectOptions={brandSelectOptions}
          modelSelectOptions={modelSelectOptions}
          yearSelectOptions={yearSelectOptions}
          onBrandChange={handleBrandChange}
          onModelChange={handleModelChange}
          onYearChange={handleYearChange}
        />

        <OptionalInputSection
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedYear={selectedYear}
          modelFileName={modelFileName}
          uploadedImages={uploadedImages}
          onFileChange={handleFileChange}
        />

        <SubmitSection isFormValid={isFormValid} onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}
