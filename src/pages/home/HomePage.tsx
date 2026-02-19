import type { UserInfo } from "@/entities/user/model/user-info";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { HeroSection, FeaturesSection, EstimateSection, ReviewsSection, CtaSection } from "@/widgets/home";

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
