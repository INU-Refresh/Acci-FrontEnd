import type { UserInfo } from "@/entities/user/model/user-info";
import { AnalyzeUploadSection } from "@/widgets/analyze-upload/AnalyzeUploadSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";

type UploadPageProps = {
  initialUserInfo?: UserInfo | null;
};

export default function UploadPage({ initialUserInfo = null }: UploadPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex w-full flex-1 justify-center px-4 py-6 md:px-0 md:py-10">
        <AnalyzeUploadSection />
      </main>
      <Footer />
    </div>
  );
}
