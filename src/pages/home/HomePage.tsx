import type { UserInfo } from "@/entities/user/model/user-info";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { HeroSection, FeaturesSection } from "@/widgets/home";
import dynamic from "next/dynamic";

// 스크롤 후 보이는 섹션들은 동적 로딩으로 초기 번들 크기 최적화
const EstimateSection = dynamic(() => import("@/widgets/home").then((mod) => ({ default: mod.EstimateSection })), {
  loading: () => <div className="h-96" />, // 레이아웃 시프트 방지
});

const ReviewsSection = dynamic(() => import("@/widgets/home").then((mod) => ({ default: mod.ReviewsSection })), {
  loading: () => <div className="h-96" />,
});

const CtaSection = dynamic(() => import("@/widgets/home").then((mod) => ({ default: mod.CtaSection })), {
  loading: () => <div className="h-64" />,
});

type HomePageProps = {
  initialUserInfo?: UserInfo | null;
};

export default function HomePage({ initialUserInfo = null }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <HeroSection />
      <FeaturesSection />
      <EstimateSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
