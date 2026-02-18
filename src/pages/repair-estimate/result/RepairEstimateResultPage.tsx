"use client";

import { useEffect, useState } from "react";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import axiosInstance from "@/shared/api/axios-instance";
import { VEHICLES, VEHICLE_PARTS_BY_TYPE } from "@/entities/vehicle";
import { TitleSection, EstimateCard, DamageAreaCard, ActionSection } from "@/widgets/repair-estimate-result";

interface RepairEstimateResultPageProps {
  id: string;
}

type RepairEstimateStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";

interface RepairEstimateResultResponse {
  createdAt?: string;
  damageDetails: Array<{
    damageSeverity: string;
    partNameKr: string;
    partNameEn: string;
  }>;
  repairItems?: Array<{
    cost: number;
    partName: string;
    repairMethod: string;
  }>;
  status?: RepairEstimateStatus;
  totalEstimate?: number | null;
  vehicleInfo: {
    brand: string;
    model: string;
    segment: string;
    vehicleType: string;
    year: number;
  };
}

export default function RepairEstimateResultPage({ id }: RepairEstimateResultPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<RepairEstimateResultResponse | null>(null);

  const modelFileName = (() => {
    if (!result?.vehicleInfo) return "";
    const vehicle = VEHICLES.find((item) => item.brand === result.vehicleInfo.brand && item.model === result.vehicleInfo.model);
    if (!vehicle) return "";
    const modelFileMap: Record<string, string> = {
      sedan: "Sedan",
      hatchback: "Hatchback",
      suv: "SUV",
    };
    return modelFileMap[vehicle.vehicleType] ?? "";
  })();

  const selectedPartIds = (() => {
    if (!result?.vehicleInfo?.vehicleType || !result.damageDetails?.length) return [];
    const partsBySection = VEHICLE_PARTS_BY_TYPE[result.vehicleInfo.vehicleType as keyof typeof VEHICLE_PARTS_BY_TYPE];
    const allParts = Object.values(partsBySection ?? {}).flat();

    return result.damageDetails
      .map((detail) => {
        const matched = allParts.find((part) => part.part_name_en == detail.partNameEn);
        return matched?.id ?? detail.partNameEn;
      })
      .filter(Boolean);
  })();

  useEffect(() => {
    let isMounted = true;

    const fetchResult = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await axiosInstance.get(`/api/v1/repair-estimates/${id}`);
        console.log(response.data);
        if (!isMounted) return;

        setResult(response.data);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage("견적 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    };

    if (id) {
      fetchResult();
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex flex-col items-center">
        <TitleSection />

        <div className="flex flex-col items-center pb-4 w-full">
          <EstimateCard
            isLoading={isLoading}
            errorMessage={errorMessage}
            status={result?.status}
            brand={result?.vehicleInfo?.brand}
            model={result?.vehicleInfo?.model}
            totalEstimate={result?.totalEstimate}
            repairItems={result?.repairItems}
            damageDetails={result?.damageDetails}
          />
        </div>

        <div className="flex flex-col items-center justify-center pb-4 w-full">
          <DamageAreaCard modelFileName={modelFileName} selectedPartIds={selectedPartIds} />
        </div>

        <ActionSection />
      </main>

      <Footer />
    </div>
  );
}
