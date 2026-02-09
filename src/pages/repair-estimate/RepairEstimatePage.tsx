"use client";

import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { useToast } from "@/features/repair-estimate/hooks";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import axiosInstance from "@/shared/api/axios-instance";
import { VEHICLES } from "@/entities/vehicle";
import { TitleSection, RepairEstimateFormSection, OptionalInputSection, SubmitSection, ToastMessage } from "@/widgets/repair-estimate";

export default function RepairEstimatePage() {
  const { toast, showToast } = useToast();
  const selectedBrand = useRepairEstimateStore((state) => state.selectedBrand);
  const selectedModel = useRepairEstimateStore((state) => state.selectedModel);
  const selectedYear = useRepairEstimateStore((state) => state.selectedYear);
  const damageDetails = useRepairEstimateStore((state) => state.damageDetails);
  const userDescription = useRepairEstimateStore((state) => state.userDescription);

  const handleSubmit = async () => {
    if (!selectedBrand || !selectedModel || !selectedYear) {
      showToast("브랜드, 모델명, 연식을 모두 선택해주세요.");
      return;
    }

    const vehicle = VEHICLES.find((item) => item.brand === selectedBrand && item.model === selectedModel);
    if (!vehicle) {
      showToast("차량 정보를 찾을 수 없습니다.");
      return;
    }

    const payload = {
      vehicleBrand: vehicle.brand,
      vehicleModel: vehicle.model,
      vehicleYear: Number(selectedYear),
      vehicleType: vehicle.vehicleType,
      vehicleSegment: vehicle.segment,
      damages: damageDetails.map((detail) => ({
        partNameKr: detail.part_name_kr,
        partNameEn: detail.part_name_en,
        damageSeverity: detail.damage_severity,
        description: detail.damage_label || "",
      })),
    };

    try {
      console.log(payload);
      await axiosInstance.post("/api/v1/repair-estimates", payload);
      showToast("수리비 견적 요청을 전송했습니다.");
      // TODO: 예상 수리비 결과 페이지로 이동
    } catch (error) {
      showToast("요청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
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
