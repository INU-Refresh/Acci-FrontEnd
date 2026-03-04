"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";

interface ActionSectionProps {
  brand?: string;
  model?: string;
  year?: number;
}

export function ActionSection({ brand, model, year }: ActionSectionProps) {
  const router = useRouter();
  const prefillVehicleInfo = useRepairEstimateStore((state) => state.prefillVehicleInfo);

  const handleRecalculate = () => {
    if (brand && model && year) {
      prefillVehicleInfo(brand, model, String(year));
    }
    router.push("/repair-estimate");
  };

  return (
    <div className="flex flex-col items-center pb-10 w-full px-4">
      <Button size="lg" onClick={handleRecalculate} className="h-14 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg w-full max-w-210 mx-6">
        예상 수리비 다시 계산하기
      </Button>
    </div>
  );
}
