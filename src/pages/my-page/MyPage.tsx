import { MyPageSection } from "@/widgets/my-page/MyPageSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";

type MyPageProps = {
  id?: string;
};

export default function MyPage({ id }: MyPageProps) {
  void id;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <MyPageSection />
      </main>
      <Footer />
    </div>
  );
}
