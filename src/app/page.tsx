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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center"> */}
        <div className="flex gap-6 sm:gap-12 items-center">
          {/* 1.3.1 첫번째 섹션 왼쪽 */}
          <div className="flex-2/5 space-y-3 sm:space-y-6 text-center sm:text-left">
            <h1 className="text-title4 text-gray-900 sm:text-title1">
              AI가 판단하는
              <br />
              교통사고 과실비율
            </h1>
            <p className="text-body8 sm:text-body4 text-gray-600 max-w-xl mx-auto sm:mx-0">Acci가 교통사고 과실비율을 빠르고 정확하게 판단해드립니다.</p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/analyze" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full h-14 sm:w-auto text-body7 sm:text-body5 bg-black text-white hover:bg-black/90 cursor-pointer">
                  → 교통사고 분석하기
                </Button>
              </Link>
            </div>
          </div>

          {/* 1.3.2 첫번째 섹션 오른쪽 */}
          <div className="flex-3/5 hidden sm:flex bg-gray-100 rounded-lg aspect-video items-center justify-center text-gray-500 order-first sm:order-last max-h-[330px] mx-auto">
            <p className="text-center text-xs sm:text-base px-2">사용하는 움짤 들어감</p>
          </div>
        </div>
      </section>

      {/* 1.4 두번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-title4 sm:text-title2 mb-2 sm:mb-2 text-gray-900">Acci의 특별한 기능</h2>
          <p className="text-body8 sm:text-body4 text-gray-500 max-w-[270px] mx-auto sm:max-w-none">Acci가 객관적인 교통사고 과실비율 및 판단근거, 관련 판례를 제공합니다</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {[
            {
              icon: ShieldIcon,
              title: "교통사고 과실비율 측정",
              description: "객관적인 과실비율을 측정합니다",
              className: "h-20 sm:h-auto",
            },
            {
              icon: ClockIcon,
              title: "판단근거 제공",
              description: "과실비율 판단 근거를 제공합니다",
              className: "h-20 sm:h-auto",
            },
            {
              icon: FileIcon,
              title: "관련 판례 제공",
              description: "관련된 판례를 제공합니다",
              className: "h-20 sm:h-auto sm:col-span-2 md:col-span-1",
            },
          ].map((item, index) => {
            // const IconComponent = item.icon; // 아이콘 나오면 적용 예정
            return (
              <Card key={index} className={item.className}>
                <CardHeader className="flex flex-row items-stretch gap-4 p-4 h-full sm:h-auto sm:flex-col sm:gap-0 sm:items-baseline sm:p-8">
                  <div className="w-12 sm:w-20 h-12 sm:h-20 bg-gray-200 rounded-2xl flex items-center justify-center sm:mb-4">
                    {
                      // 아이콘이 나오면 적용할 예정입니다
                      /* <IconComponent className="text-primary" /> */
                    }
                  </div>
                  <div className="flex flex-col justify-between h-10 sm:h-auto my-auto">
                    <CardTitle className="text-body7 sm:text-body3 text-gray-900">{item.title}</CardTitle>
                    <CardDescription className="text-body8 sm:text-body6 text-gray-900">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 1.5 세번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 py-8 sm:py-20 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-title4 sm:text-title2 mb-2 text-gray-900">Acci와 알아보는 수리비 견적</h2>
          <p className="text-body8 sm:text-body4 text-gray-500">Acci는 파손 부위 또는 사진을 통해 예상 수리비 견적을 제공합니다</p>
        </div>
        <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 min-h-36 sm:max-h-[360px] mx-auto">
          <p className="text-center text-xs sm:text-base px-2">수리비 견적 이미지 영역</p>
        </div>
      </section>

      {/* 1.6 네번째 섹션 */}
      <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-title4 sm:text-title2 mb-2 text-gray-900">사용자 후기</h2>
          <p className="text-body8 sm:text-body4 text-gray-500">실제 사용자들의 생생한 경험담을 확인해보세요</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {[
            {
              rating: 5,
              comment: "교수님 차량과의 교통사고 후 과실 비율이 궁금했는데, Acci가 자세하고 정확하게 사고를 분석해주어서 큰 도움이 되었습니다.",
              name: "성*준",
              age: "20대 남자",
            },
            {
              rating: 5,
              comment: "보험사의 과실 비율 판정 기다리기 힘들었는데, Acci 덕분에 빠르게 대응할 수 있었어요. ",
              name: "정*환",
              age: "20대 남자",
            },
            {
              rating: 5,
              comment: "제가 겪은 상황과 비슷한 판례들을 알 수 있어서 좋았어요",
              name: "유*영",
              age: "20대 여자",
            },
          ].map((review, index) => (
            <Card key={index} className={index === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FACC15]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="sm:min-h-28 text-body8 sm:text-body4">{review.comment}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#d9d9d9] flex items-center justify-center text-lg">{/* 프사가 들어가면 되지 않을까...? */}</div>
                  <div>
                    <p className="text-body5">{review.name}</p>
                    <p className="text-body8 text-muted-foreground">{review.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 1.7 다섯번째 섹션 */}
      <section className="pt-8 sm:pt-20">
        <div className="mx-auto py-10 text-center space-y-3 sm:space-y-6 bg-gray-800">
          {/* ~639px */}
          <h2 className="block sm:hidden text-body5 text-gray-0 leading-tight">
            <p>지금 바로 Acci의</p>
            <p>과실비율을 확인해보세요</p>
          </h2>
          {/* 640px~ */}
          <h2 className="hidden sm:block text-title1 text-gray-0 leading-tight">지금 바로 Acci의 과실비율을 확인해보세요</h2>

          <div className="text-body10 sm:text-body6 text-gray-0 max-w-2xl mx-auto flex flex-col gap-1">
            <p>복잡한 과실비율 산정, 더 이상 고민하지 마세요</p>
            <p>Acci의 도움을 언제든지 받을 수 있습니다</p>
          </div>
          <Link href="/analyze" className="inline-block w-full sm:w-auto">
            <Button className="gap-2 text-sm text-body7 bg-white text-gray-900 hover:bg-gray-100 w-[200px] h-11 cursor-pointer">시작하기</Button>
          </Link>
        </div>
      </section>

      {/* 1.8 푸터 */}
      <Footer />
    </div>
  );
}
