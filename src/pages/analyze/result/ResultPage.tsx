import type { UserInfo } from "@/entities/user/model/user-info";
import { AnalyzeResultSection } from "@/widgets/analyze-result/AnalyzeResultSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";

interface ResultPageProps {
  id: string;
  initialUserInfo?: UserInfo | null;
}

export default function ResultPage({ id, initialUserInfo = null }: ResultPageProps) {
  // TODO [Minjun]: id 기반으로 분석 결과 조회 API 연동
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 공통 헤더 */}
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        {/* 분석 결과 섹션 */}
        <AnalyzeResultSection />
      </main>
      {/* 공통 푸터 */}
      <Footer />
    </div>
  );
}
