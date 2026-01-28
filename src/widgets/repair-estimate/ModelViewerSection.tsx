import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";

interface ModelViewerSectionProps {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  modelFileName: string;
}

export function ModelViewerSection({ selectedBrand, selectedModel, selectedYear, modelFileName }: ModelViewerSectionProps) {
  const isReady = selectedBrand && selectedModel && selectedYear && modelFileName;

  return (
    <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6">
      <div className="flex gap-4 items-center mb-6">
        <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
          <span className="text-body9 sm:text-body5 text-white">5</span>
        </div>
        <label className="text-body9 sm:text-body5 text-gray-900">3D 모델 선택</label>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-[600px]">
        {isReady ? (
          <CarModelViewer modelName={modelFileName} className="w-full h-full" />
        ) : (
          <p className="text-body9 sm:text-body7 text-gray-400">브랜드, 모델명, 연식을 모두 선택해주세요</p>
        )}
      </div>
    </div>
  );
}
