"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { Button } from "@/shared/ui/button";
import axiosInstance from "@/shared/api/axios-instance";
import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";
import { VEHICLES, VEHICLE_PARTS_BY_TYPE } from "@/entities/vehicle";

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
  // estimateId : string;
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
        {/* 제목 섹션 */}
        <div className="flex flex-col items-center px-0 py-10 w-full">
          <div className="flex flex-col items-center px-6 py-0 w-full">
            <h1 className="text-title2 text-gray-900 text-center">예상 수리비</h1>
          </div>
        </div>

        {/* 예상 수리비 카드 */}
        <div className="flex flex-col items-center pb-4 w-full">
          <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full max-w-[840px] mx-6">
            {isLoading && (
              <div className="flex items-center justify-center w-full py-10">
                <p className="text-body4 text-gray-500">견적 결과를 불러오는 중입니다...</p>
              </div>
            )}

            {!isLoading && errorMessage && (
              <div className="flex items-center justify-center w-full py-10">
                <p className="text-body4 text-red-500">{errorMessage}</p>
              </div>
            )}

            {!isLoading && !errorMessage && (result?.status === "PENDING" || result?.status === "PROCESSING") && (
              <div className="flex flex-col items-center justify-center w-full py-10 gap-2">
                <p className="text-body4 text-gray-700">견적을 계산 중입니다.</p>
                <p className="text-body9 text-gray-500">잠시만 기다려주세요.</p>
              </div>
            )}

            {!isLoading && !errorMessage && result?.status === "FAILED" && (
              <div className="flex flex-col items-center justify-center w-full py-10 gap-2">
                <p className="text-body4 text-red-500">견적 계산에 실패했습니다.</p>
                <p className="text-body9 text-gray-500">다시 시도하거나 고객센터에 문의해주세요.</p>
              </div>
            )}

            {!isLoading && !errorMessage && result?.status === "COMPLETED" && (
              <>
                {/* 총 수리비 안내 */}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-body3 text-gray-500 text-center">
                    {result.vehicleInfo?.brand} {result.vehicleInfo?.model}의 예상 수리비는{" "}
                    <span className="text-primary-700">{result.totalEstimate != null ? `${result.totalEstimate.toLocaleString()}원` : "NULL"}</span>
                    입니다
                  </p>
                </div>

                {/* 세부 비용 표 */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="overflow-hidden rounded-lg border border-gray-100">
                    <div className="grid grid-cols-4 bg-gray-50 px-4 py-3 text-body9 text-gray-500">
                      <p>파손 부위</p>
                      <p>파손 정도</p>
                      <p>수리 방법</p>
                      <p className="text-right">수리 견적</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {result.repairItems && result.repairItems.length > 0 ? (
                        result.repairItems.map((item, index) => (
                          <div key={`${item.partName}-${index}`} className="grid grid-cols-4 px-4 py-3 text-body7 text-gray-900">
                            <p>{item.partName}</p>
                            <p>{result.damageDetails?.[index]?.damageSeverity ?? "-"}</p>
                            <p>{item.repairMethod}</p>
                            <p className="text-right">{`${item.cost.toLocaleString()}원`}</p>
                          </div>
                        ))
                      ) : (
                        <div className="grid grid-cols-4 px-4 py-3 text-body7 text-gray-400">
                          <p>파손 부위</p>
                          <p>파손 정도</p>
                          <p>수리 방법</p>
                          <p className="text-right">-</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {!isLoading && !errorMessage && !result?.status && (
              <div className="flex items-center justify-center w-full py-10">
                <p className="text-body4 text-gray-500">견적 상태를 확인할 수 없습니다.</p>
              </div>
            )}
          </div>
        </div>

        {/* 파손 부위 카드 */}
        <div className="flex flex-col items-center justify-center pb-4 w-full">
          <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full max-w-[840px] mx-6">
            <div className="flex items-center w-full">
              <p className="text-body3 text-gray-900">파손 부위</p>
            </div>
            {/* 파손 부위 이미지 플레이스홀더 */}
            <div className="aspect-3/2 bg-gray-50 rounded-lg w-full">
              {modelFileName ? (
                <CarModelViewer modelName={modelFileName} className="w-full h-full" selectedPartIds={selectedPartIds} interactive={false} />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-body9 text-gray-400">차량 정보를 확인할 수 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 다시 계산하기 버튼 */}
        <div className="flex flex-col items-center pb-10 w-full">
          <Link href="/repair-estimate" className="w-full max-w-[840px] mx-6 ">
            <Button size="lg" className="h-14 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg w-full">
              예상 수리비 다시 계산하기
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
