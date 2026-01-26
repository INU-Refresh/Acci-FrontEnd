import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { HeroSection, FeaturesSection, EstimateSection, ReviewsSection, CtaSection } from "@/widgets/home";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <EstimateSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
