"use client";

import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { useToast } from "@/features/repair-estimate/hooks";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import { TitleSection, RepairEstimateFormSection, OptionalInputSection, SubmitSection, ToastMessage } from "@/widgets/repair-estimate";

export default function RepairEstimatePage() {
  const { toast, showToast } = useToast();
  const selectedBrand = useRepairEstimateStore((state) => state.selectedBrand);
  const selectedModel = useRepairEstimateStore((state) => state.selectedModel);
  const selectedYear = useRepairEstimateStore((state) => state.selectedYear);
  const uploadedImages = useRepairEstimateStore((state) => state.uploadedImages);

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

        <RepairEstimateFormSection />

        <OptionalInputSection onExceedLimit={showToast} />

        <SubmitSection onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}
