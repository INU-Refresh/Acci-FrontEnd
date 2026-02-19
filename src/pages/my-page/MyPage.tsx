import { MyPageSection } from "@/widgets/my-page/MyPageSection";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import type { UserInfo } from "@/entities/user/model/user-info";

type MyPageProps = {
  id?: string;
  initialUserInfo?: UserInfo | null;
};

export default function MyPage({ id, initialUserInfo = null }: MyPageProps) {
  void id;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header initialUserInfo={initialUserInfo} />
      <main className="flex flex-1 justify-center px-4 pb-10 pt-4 md:pb-16 md:pt-10">
        <MyPageSection initialUserInfo={initialUserInfo} />
      </main>
      <Footer />
    </div>
  );
}
