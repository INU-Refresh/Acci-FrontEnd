"use client";

import type { UserInfo } from "@/entities/user/model/user-info";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<RepairEstimateResultResponse | null>(null);
  const [isInitialFetch, setIsInitialFetch] = useState(true);

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

  useEffect(() => {
    let isMounted = true;
    let eventSource: EventSource | null = null;

    const connectSSE = () => {
      if (!isMounted || eventSource) return;

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
        } catch (e) {
          // JSON이 아닌 일반 문자열인 경우 그대로 사용
        }

        setResult((prev) => {
          if (!prev) return prev;
          return { ...prev, status: newStatus as RepairEstimateStatus };
        });

        if (newStatus === "COMPLETED" || newStatus === "FAILED") {
          eventSource?.close();
          eventSource = null;
          fetchResult(false);
        }
      });

      eventSource.onerror = (error) => {
        console.error("SSE connection error", error);
        eventSource?.close();
        eventSource = null;
      };
    };

    const fetchResult = async (isInitial = true) => {
      // 초기 요청일 때만 로딩 상태 업데이트
      if (isInitial) {
        setIsLoading(true);
      }
      setErrorMessage(null);

      try {
        const response = await axiosInstance.get(`/api/v1/repair-estimates/${id}`);
        console.log(response.data);
        if (!isMounted) return;

        // 백엔드에서 받은 한글 브랜드와 vehicleType을 영어로 정규화
        const normalizedData = {
          ...response.data,
          vehicleInfo: {
            ...response.data.vehicleInfo,
            brand: normalizeBrand(response.data.vehicleInfo.brand),
            vehicleType: normalizeVehicleType(response.data.vehicleInfo.vehicleType),
          },
        };

        setResult(normalizedData);

        // 초기 요청 후에는 로딩 완료 처리
        if (isInitial) {
          setIsLoading(false);
          setIsInitialFetch(false);
        }

        // status가 PENDING 또는 PROCESSING이면 SSE 연결 시작
        if (response.data.status === "PENDING" || response.data.status === "PROCESSING") {
          connectSSE();
        }
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage("견적 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
        // 에러 발생했을 때도 초기 로딩 완료 처리
        if (isInitial) {
          setIsLoading(false);
          setIsInitialFetch(false);
        }
      }
    };

    if (id) {
      fetchResult();
    }

    return () => {
      isMounted = false;
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [id]);

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
