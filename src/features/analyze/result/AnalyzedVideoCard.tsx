import { Card } from "@/shared/ui/card";

type AnalyzedVideoCardProps = {
  title: string;
};

export function AnalyzedVideoCard({ title }: AnalyzedVideoCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border-0 bg-white p-4 shadow-none md:rounded-2xl md:p-6">
      <div className="flex items-center justify-between">
        {/* TODO [Minjun]: 분석한 영상 제목 API 연동 */}
        <p className="text-body7 text-gray-900 md:text-body3">{title}</p>
        <svg aria-hidden="true" className="h-4 w-4 text-gray-300" viewBox="0 0 16 16">
          <path d="M8 12L2 4h12L8 12z" fill="currentColor" />
        </svg>
      </div>
      {/* TODO [Minjun]: 분석 영상 미리보기 API 연동 */}
      <div className="mt-2 aspect-3/2 rounded-lg bg-gray-50 md:mt-6 md:rounded-2xl" aria-label="분석한 영상 미리보기" />
    </Card>
  );
}
