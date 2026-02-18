import { EstimateLoadingState } from "./EstimateLoadingState";
import { EstimateErrorState } from "./EstimateErrorState";
import { EstimateProcessingState } from "./EstimateProcessingState";
import { EstimateFailedState } from "./EstimateFailedState";
import { EstimateCompletedState } from "./EstimateCompletedState";
import { EstimateUnavailableState } from "./EstimateUnavailableState";

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

interface EstimateCardProps {
  isLoading: boolean;
  errorMessage: string | null;
  status?: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
  brand?: string;
  model?: string;
  totalEstimate?: number | null;
  repairItems?: RepairItem[];
  damageDetails?: DamageDetail[];
}

export function EstimateCard({ isLoading, errorMessage, status, brand = "", model = "", totalEstimate = null, repairItems = [], damageDetails = [] }: EstimateCardProps) {
  return (
    <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full max-w-[840px] mx-6">
      {isLoading && <EstimateLoadingState />}

      {!isLoading && errorMessage && <EstimateErrorState errorMessage={errorMessage} />}

      {!isLoading && !errorMessage && (status === "PENDING" || status === "PROCESSING") && <EstimateProcessingState />}

      {!isLoading && !errorMessage && status === "FAILED" && <EstimateFailedState />}

      {!isLoading && !errorMessage && status === "COMPLETED" && (
        <EstimateCompletedState brand={brand} model={model} totalEstimate={totalEstimate} repairItems={repairItems} damageDetails={damageDetails} />
      )}

      {!isLoading && !errorMessage && !status && <EstimateUnavailableState />}
    </div>
  );
}
