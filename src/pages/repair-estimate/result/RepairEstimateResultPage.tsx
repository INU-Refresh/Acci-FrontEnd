"use client";

import type { UserInfo } from "@/entities/user/model/user-info";
import { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import axiosInstance from "@/shared/api/axios-instance";
import { VEHICLES, normalizeBrand, normalizeVehicleType } from "@/entities/vehicle";
import { TitleSection, EstimateCard, DamageAreaCard, AttachedImagesCard, ActionSection } from "@/widgets/repair-estimate-result";

interface RepairEstimateResultPageProps {
  id: string;
  initialUserInfo?: UserInfo | null;
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
  images?: string[];
}

export default function RepairEstimateResultPage({ id, initialUserInfo = null }: RepairEstimateResultPageProps) {
  const queryClient = useQueryClient();

  const { data: result, isLoading, isError, refetch } = useQuery<RepairEstimateResultResponse>({
    queryKey: ["repair-estimate", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/v1/repair-estimates/${id}`);
      return {
        ...response.data,
        vehicleInfo: {
          ...response.data.vehicleInfo,
          brand: normalizeBrand(response.data.vehicleInfo.brand),
          vehicleType: normalizeVehicleType(response.data.vehicleInfo.vehicleType),
        },
      };
    },
    staleTime: 1000 * 60 * 5, // 5분
  });

  const errorMessage = isError ? "견적 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요." : null;

  const modelFileName = useMemo(() => {
    if (!result?.vehicleInfo) return "";
    const vehicle = VEHICLES.find(
      (item) => item.brand === result.vehicleInfo?.brand && item.model === result.vehicleInfo?.model
    );
    if (!vehicle) return "";
    const modelFileMap: Record<string, string> = {
      sedan: "Sedan",
      hatchback: "Hatchback",
      suv: "SUV",
    };
    return modelFileMap[vehicle.vehicleType] ?? "";
  }, [result?.vehicleInfo]);

  useEffect(() => {
    if (result?.status !== "PENDING" && result?.status !== "PROCESSING") return;

    let isMounted = true;
    let eventSource: EventSource | null = null;

    const sseUrl = `${
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"
    }/api/v1/repair-estimates/${id}/events`;

    eventSource = new EventSource(sseUrl, { withCredentials: true });

    eventSource.addEventListener("status", (event: MessageEvent) => {
      if (!isMounted) return;

      let newStatus = event.data;
      try {
        const parsed = JSON.parse(newStatus);
        if (parsed.status) {
          newStatus = parsed.status;
        }
      } catch {
        // 일반 문자열인 경우 그대로 사용
      }

      queryClient.setQueryData<RepairEstimateResultResponse>(["repair-estimate", id], (old) => {
        if (!old) return old;
        return { ...old, status: newStatus as RepairEstimateStatus };
      });

      if (newStatus === "COMPLETED" || newStatus === "FAILED") {
        eventSource?.close();
        eventSource = null;
        refetch();
      }
    });

    eventSource.onerror = (error) => {
      console.error("SSE connection error", error);
      eventSource?.close();
      eventSource = null;
    };

    return () => {
      isMounted = false;
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [id, result?.status, queryClient, refetch]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />

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

        <div className="flex flex-col items-center pb-4 w-full">
          <AttachedImagesCard images={result?.images} />
        </div>

        <div className="flex flex-col items-center justify-center pb-4 w-full">
          <DamageAreaCard modelFileName={modelFileName} damageDetails={result?.damageDetails} vehicleType={result?.vehicleInfo?.vehicleType} />
        </div>

        <ActionSection brand={result?.vehicleInfo?.brand} model={result?.vehicleInfo?.model} year={result?.vehicleInfo?.year} />
      </main>

      <Footer />
    </div>
  );
}
