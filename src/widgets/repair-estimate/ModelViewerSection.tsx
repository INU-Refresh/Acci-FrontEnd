import { useCallback } from "react";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";
import { SelectedDamageDetailSection } from "./SelectedDamageDetailSection";

export function ModelViewerSection() {
  const { selectedBrand, selectedModel, selectedYear, modelFileName, addSelectedPartId, removeSelectedPartId } = useRepairEstimateStore();
  const isReady = selectedBrand && selectedModel && selectedYear && modelFileName;

  const handleSelectPart = useCallback(
    (partId: string, selected: boolean) => {
      if (selected) {
        addSelectedPartId(partId);
        return;
      }

      removeSelectedPartId(partId);
    },
    [addSelectedPartId, removeSelectedPartId],
  );

  return (
    <div className="w-full max-w-[840px] bg-white rounded-2xl p-6">
      <div className="flex gap-4 items-center mb-6">
        <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
          <span className="text-body9 sm:text-body5 text-white">5</span>
        </div>
        <label className="text-body9 sm:text-body5 text-gray-900">3D 모델 선택</label>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-[600px]">
        {isReady ? (
          <CarModelViewer modelName={modelFileName} className="w-full h-full" onSelectPart={handleSelectPart} />
        ) : (
          <p className="text-body9 sm:text-body7 text-gray-400">브랜드, 모델명, 연식을 모두 선택해주세요</p>
        )}
      </div>

      {/* 선택된 부품 상세 입력 */}
      <div className="mt-4 w-full">
        <SelectedDamageDetailSection />
      </div>
    </div>
  );
}
