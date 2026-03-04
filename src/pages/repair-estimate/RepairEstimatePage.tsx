"use client";

import type { UserInfo } from "@/entities/user/model/user-info";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { useToast } from "@/features/repair-estimate/hooks";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import { VEHICLES } from "@/entities/vehicle";
import { BackButton, TitleSection, RepairEstimateFormSection, OptionalInputSection, SubmitSection, ToastMessage } from "@/widgets/repair-estimate";
import { useRouter } from "next/navigation";

type RepairEstimatePageProps = {
  initialUserInfo?: UserInfo | null;
};

export default function RepairEstimatePage({ initialUserInfo = null }: RepairEstimatePageProps) {
  const { toast, showToast } = useToast();
  const router = useRouter();
  const selectedBrand = useRepairEstimateStore((state) => state.selectedBrand);
  const selectedModel = useRepairEstimateStore((state) => state.selectedModel);
  const selectedYear = useRepairEstimateStore((state) => state.selectedYear);
  const damageDetails = useRepairEstimateStore((state) => state.damageDetails);
  const uploadedImages = useRepairEstimateStore((state) => state.uploadedImages);
  const reset = useRepairEstimateStore((state) => state.reset);

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
        userDescription: detail.damage_label || "",
      })),
    };

    try {
      const formData = new FormData();
      const requestBlob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      formData.append("request", requestBlob);

      uploadedImages.forEach((image) => {
        formData.append("images", image);
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/repair-estimates`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const estimateId = data?.id ?? data?.estimateId ?? data?.resultId ?? data?.data?.id ?? data?.data?.estimateId ?? data?.data?.resultId;

      console.log(data);
      if (!estimateId) {
        showToast("견적 결과 ID를 찾을 수 없습니다. 잠시 후 다시 시도해주세요.");
        return;
      }

      reset();
      showToast("수리비 견적 요청을 전송했습니다.");
      router.push(`/repair-estimate/result/${estimateId}`);
    } catch (error) {
      showToast("요청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ToastMessage message={toast.message} visible={toast.visible} />

      <Header initialUserInfo={initialUserInfo} />

      <main className="flex-1">
        <BackButton />

        <TitleSection title="수리비 견적" description="파손 사진을 업로드하면 Acci가 예상 수리비 견적을 제공합니다" />

        <RepairEstimateFormSection />

        <OptionalInputSection onExceedLimit={showToast} />

        <SubmitSection onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}
