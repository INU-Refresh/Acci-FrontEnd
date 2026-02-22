import { useState } from "react";
import { BRAND_LABELS } from "@/entities/vehicle";

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

export function EstimateCompletedState({ brand, model, totalEstimate, repairItems, damageDetails }: EstimateCompletedStateProps) {
  // 영어 브랜드를 한글로 변환
  const displayBrand = BRAND_LABELS[brand.toLowerCase()] || brand;
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* 총 수리비 안내 */}
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-body3 text-gray-500 text-center">
          {displayBrand} {model}의 예상 수리비는 <span className="text-primary-700">{totalEstimate != null ? `${totalEstimate.toLocaleString()}원` : "NULL"}</span>
          입니다
        </p>
      </div>

      {/* 세부 비용 표 (PC) */}
      <div className="hidden md:flex flex-col gap-3 w-full">
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

      {/* 세부 비용 표 (모바일) */}
      <div className="flex flex-col gap-3 w-full md:hidden">
        {repairItems && repairItems.length > 0 ? (
          repairItems.map((item, index) => {
            const damageSeverity = damageDetails?.[index]?.damageSeverity ?? "-";
            const isOpen = Boolean(openItems[index]);

            return (
              <div key={`${item.partName}-${index}`} className="overflow-hidden rounded-2xl border border-gray-100">
                <button type="button" onClick={() => toggleItem(index)} className="flex w-full items-center justify-between px-4 py-4 text-left" aria-expanded={isOpen}>
                  <div>
                    <span className="text-body6 text-gray-900">{item.partName}</span>
                    <span className={`inline-flex h-5 w-5 items-center justify-center text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.46387 6L-0.000234079 -6.52533e-07L6.92797 -4.68497e-08L3.46387 6Z" fill="#B6BEC7" />
                      </svg>
                    </span>
                  </div>

                  <span className="flex items-center gap-2 text-body6 text-gray-900">{`${item.cost.toLocaleString()}원`}</span>
                </button>
                {isOpen && (
                  <div className="flex flex-col gap-2 border-t border-gray-100 px-4 py-4 text-body7 text-gray-900">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gray-50 px-3 py-1 text-body7 text-gray-500">파손 정도</span>
                      <span>{damageSeverity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gray-50 px-3 py-1 text-body7 text-gray-500">수리 방법</span>
                      <span>{item.repairMethod}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-gray-100 px-4 py-4 text-body7 text-gray-400">표시할 파손 부위가 없습니다.</div>
        )}
      </div>
    </>
  );
}
