import { CarModelViewer } from "@/widgets/car-model-viewer/CarModelViewer";

interface DamageAreaCardProps {
  modelFileName: string;
  selectedPartIds: string[];
}

export function DamageAreaCard({ modelFileName, selectedPartIds }: DamageAreaCardProps) {
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
