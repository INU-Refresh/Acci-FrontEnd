import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { ShieldIcon, ClockIcon, FileIcon } from "@/shared/icons";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* 1.3 첫번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 py-10 sm:py-20 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* 1.3.1 첫번째 섹션 왼쪽 */}
          <div className="space-y-3 sm:space-y-6 text-center sm:text-left">
            <h1 className="title-1 text-gray-900 sm:title-4">
              AI가 판단하는
              <br />
              교통사고 과실비율
            </h1>
            <p className="text-body-8 sm:body-4 text-gray-600 max-w-xl mx-auto sm:mx-0">Acci가 교통사고 과실비율을 빠르고 정확하게 판단해드립니다.</p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/analyze" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full h-14 sm:w-auto text-sm sm:text-base bg-black text-white hover:bg-black/90">
                  → 교통사고 분석하기
                </Button>
              </Link>
            </div>
          </div>

          {/* 1.3.2 첫번째 섹션 오른쪽 */}
          <div className="hidden sm:flex bg-gray-100 rounded-lg aspect-video items-center justify-center text-gray-500 order-first sm:order-last min-h-[200px] sm:min-h-0">
            <p className="text-center text-xs sm:text-base px-2">사용하는 움짤 들어감</p>
          </div>
        </div>
      </section>

      {/* 1.4 두번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="title-2 mb-2 sm:mb-4 text-gray-900">Acci의 특별한 기능</h2>
          <p className="body-4 text-gray-600 mt-2 max-w-[270px] mx-auto sm:max-w-none">Acci가 객관적인 교통사고 과실비율 및 판단근거, 관련 판례를 제공합니다</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {[
            {
              icon: ShieldIcon,
              title: "교통사고 과실비율 측정",
              description: "객관적인 과실비율을 측정합니다",
              className: "",
            },
            {
              icon: ClockIcon,
              title: "판단근거 제공",
              description: "과실비율 판단 근거를 제공합니다",
              className: "",
            },
            {
              icon: FileIcon,
              title: "관련 판례 제공",
              description: "관련된 판례를 제공합니다.",
              className: "sm:col-span-2 md:col-span-1",
            },
          ].map((item, index) => {
            // const IconComponent = item.icon; // 아이콘 나오면 적용 예정
            return (
              <Card key={index} className={item.className}>
                <CardHeader className="flex flex-row items-center gap-4 p-4 sm:flex-col sm:gap-0 sm:items-baseline sm:p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center sm:mb-4">
                    {
                      // 아이콘이 나오면 적용할 예정입니다
                      /* <IconComponent className="text-primary" /> */
                    }
                  </div>
                  <div>
                    <CardTitle className="body-3">{item.title}</CardTitle>
                    <CardDescription className="body-6">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 1.5 세번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 py-8 sm:py-20 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="title-2 mb-2 sm:mb-4 text-gray-900">Acci와 알아보는 수리비 견적</h2>
          <p className="body-4 text-gray-600 mt-2">Acci는 파손 부위 또는 사진을 통해 예상 수리비 견적을 제공합니다</p>
        </div>
        <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-500 min-h-[144px] sm:min-h-[270px]">
          <p className="text-center text-xs sm:text-base px-2">수리비 견적 이미지 영역</p>
        </div>
      </section>

      {/* 1.6 네번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="title-2 mb-2 text-gray-900">사용자 후기</h2>
          <p className="body-4 text-gray-600 mt-2">실제 사용자들의 생생한 경험담을 확인해보세요</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {[
            {
              rating: 5,
              comment: "교수님 차량과의 교통사고 후 과실 비율이 궁금했는데, Acci가 자세하고 정확하게 사고를 분석해주어서 큰 도움이 되었습니다.",
              name: "홍**",
              age: "20대 남자",
              avatar: "👤",
            },
            {
              rating: 5,
              comment: "교수님 차량과의 교통사고 후 과실 비율이 궁금했는데, Acci가 자세하고 정확하게 사고를 분석해주어서 큰 도움이 되었습니다.",
              name: "홍**",
              age: "20대 남자",
              avatar: "👤",
            },
            {
              rating: 5,
              comment: "교수님 차량과의 교통사고 후 과실 비율이 궁금했는데, Acci가 자세하고 정확하게 사고를 분석해주어서 큰 도움이 되었습니다.",
              name: "홍**",
              age: "20대 남자",
              avatar: "👤",
            },
          ].map((review, index) => (
            <Card key={index} className={index === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="body-4">{review.comment}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">{review.avatar}</div>
                  <div>
                    <p className="body-5">{review.name}</p>
                    <p className="body-7 text-muted-foreground">{review.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 1.7 다섯번째 섹션 */}
      <section className="py-8 sm:py-20 ">
        <div className="container mx-auto px-4 sm:px-10 py-9 sm:py-10 text-center space-y-3 sm:space-y-6 max-w-7xl bg-gray-900">
          <h2 className="title sm:title-4 text-gray-0 leading-tight">지금 바로 Acci의 과실비율을 확인해보세요</h2>
          <div className="space-y-2 body-6 text-gray-0 max-w-2xl mx-auto">
            <p>보험사의 억울한 과실비율 판정, 더 이상 혼자 고민하지 마세요.</p>
            <p>똑똑한 AI의 도움을 언제든지 받을 수 있습니다.</p>
          </div>
          <Link href="/analyze" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto text-sm sm:body-7 bg-white text-gray-900 hover:bg-gray-100">
              시작하기
            </Button>
          </Link>
        </div>
      </section>

      {/* 1.8 푸터 */}
      <Footer />
    </div>
  );
}
