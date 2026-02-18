import { useMemo } from "react";
import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";
import { VEHICLE_PARTS_BY_TYPE, getPartMeshName } from "@/entities/vehicle";

interface DamageDetail {
  damageSeverity: string;
  partNameKr: string;
  partNameEn: string;
}

interface VehicleInfo {
  brand: string;
  model: string;
  segment: string;
  vehicleType: string;
  year: number;
}

interface DamageAreaCardProps {
  modelFileName: string;
  damageDetails?: DamageDetail[];
  vehicleType?: string;
}

export function DamageAreaCard({ modelFileName, damageDetails = [], vehicleType = "" }: DamageAreaCardProps) {
  const selectedPartIds = useMemo(() => {
    if (!vehicleType || !damageDetails.length) return [];

    // vehicleType을 소문자로 정규화
    const normalizedVehicleType = vehicleType.toLowerCase();
    const partsBySection = VEHICLE_PARTS_BY_TYPE[normalizedVehicleType as keyof typeof VEHICLE_PARTS_BY_TYPE];

    if (!partsBySection) {
      return [];
    }

    // 모든 부위의 파츠를 하나의 배열로 병합
    const allParts = Object.values(partsBySection).flat();

    // damageDetails의 partNameEn과 일치하는 part의 id를 추출하고, 3D 메쉬 이름으로 변환
    const result = damageDetails
      .map((detail) => {
        const matched = allParts.find((part) => part.part_name_en === detail.partNameEn);

        if (matched?.id) {
          const meshName = getPartMeshName(matched.id);
          return meshName;
        }
        return undefined;
      })
      .filter((meshName) => !!meshName) as string[];

    return result;
  }, [damageDetails, vehicleType]);

  return (
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
  );
}
