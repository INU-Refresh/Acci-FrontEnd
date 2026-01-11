import { UploadGuideCard } from "@/features/analyze/upload/UploadGuideCard";
import { VideoUploadSection } from "@/features/analyze/upload/VideoUploadSection";

export function AnalyzeUploadSection() {
  return (
    <section className="w-full max-w-5xl">
      <div className="flex flex-col items-center gap-4 py-6 md:gap-6 md:py-10">
        <header className="flex w-full flex-col items-center gap-2 px-4 text-center md:px-6">
          <h1 className="text-body1 font-semibold text-gray-900 md:text-title4">AI 기반 블랙박스 영상 분석</h1>
          <p className="text-body10 text-gray-500 md:text-body4">
            블랙박스 영상을 업로드하면 Acci가 사고 과실을 분석하고 관련 판례를 제공합니다
          </p>
        </header>

        <UploadGuideCard />
        <VideoUploadSection />
      </div>
    </section>
  );
}
