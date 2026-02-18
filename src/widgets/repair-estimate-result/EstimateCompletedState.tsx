interface RepairItem {
  cost: number;
  partName: string;
  repairMethod: string;
}

interface DamageDetail {
  damageSeverity: string;
  partNameKr: string;
  partNameEn: string;
}

interface EstimateCompletedStateProps {
  brand: string;
  model: string;
  totalEstimate: number | null;
  repairItems: RepairItem[];
  damageDetails: DamageDetail[];
}

import { BRAND_LABELS } from "@/entities/vehicle";

export function EstimateCompletedState({ brand, model, totalEstimate, repairItems, damageDetails }: EstimateCompletedStateProps) {
  // 영어 브랜드를 한글로 변환
  const displayBrand = BRAND_LABELS[brand.toLowerCase()] || brand;

  return (
    <>
      {/* 총 수리비 안내 */}
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-body3 text-gray-500 text-center">
          {displayBrand} {model}의 예상 수리비는 <span className="text-primary-700">{totalEstimate != null ? `${totalEstimate.toLocaleString()}원` : "NULL"}</span>
          입니다
        </p>
      </div>

      {/* 세부 비용 표 */}
      <div className="flex flex-col gap-3 w-full">
        <div className="overflow-hidden rounded-lg border border-gray-100">
          <div className="grid grid-cols-4 bg-gray-50 px-4 py-3 text-body7 text-gray-500">
            <p className="text-left">파손 부위</p>
            <p className="text-center">파손 정도</p>
            <p className="text-center">수리 방법</p>
            <p className="text-right">수리 견적</p>
          </div>
          <div className="divide-y divide-gray-100">
            {repairItems && repairItems.length > 0 ? (
              repairItems.map((item, index) => (
                <div key={`${item.partName}-${index}`} className="grid grid-cols-4 px-4 py-3 text-body7 text-gray-900">
                  <p className="text-left">{item.partName}</p>
                  <p className="text-center">{damageDetails?.[index]?.damageSeverity ?? "-"}</p>
                  <p className="text-center">{item.repairMethod}</p>
                  <p className="text-right">{`${item.cost.toLocaleString()}원`}</p>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-4 px-4 py-3 text-body7 text-gray-400">
                <p className="text-left">파손 부위</p>
                <p className="text-center">파손 정도</p>
                <p className="text-center">수리 방법</p>
                <p className="text-right">-</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
