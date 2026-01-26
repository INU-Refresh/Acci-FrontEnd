import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { RecordListPageSection } from "@/widgets/my-page/RecordListPageSection";

export default function AnalysisListPage() {
  // TODO [Minjun]: 최근 분석 기록 API 연동
  const records = [
    { id: "1", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/1" },
    { id: "2", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/2" },
    { id: "3", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/3" },
    { id: "4", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/4" },
    { id: "5", title: "교차로 충돌 사고", date: "2026.01.01", detail: "과실비율 30:70", href: "/analyze/result/5" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <RecordListPageSection title="최근 분석 기록" items={records} />
      </main>
      <Footer />
    </div>
  );
}
