import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Header } from "@/widgets/header/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* 1.3 첫번째 섹션 */}
      <section className="container mx-auto px-6 sm:px-10 py-8 sm:py-32 max-w-7xl">
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
      <section className="container mx-auto px-6 sm:px-10 py-8 sm:py-20 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">Acci의 특별한 기능</h2>
          <p className="text-sm sm:text-lg text-gray-600 mt-2">Acci가 객관적인 교통사고 과실비율 및 판단근거, 관련 판례를 제공합니다</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <CardTitle>교통사고 과실비율 측정</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>객관적인 과실비율을 측정합니다</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <CardTitle>판단근거 제공</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>과실비율 판단 근거를 제공합니다</CardDescription>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 md:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <CardTitle>관련 판례 제공</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>관련된 판례를 제공합니다.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 1.5 세번째 섹션 */}
      <section className="container mx-auto px-6 sm:px-10 py-8 sm:py-20 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">Acci와 알아보는 수리비 견적</h2>
          <p className="text-sm sm:text-lg text-gray-600 mt-2">Acci는 파손 부위 또는 사진을 통해 예상 수리비 견적을 제공합니다</p>
        </div>
        <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-500 min-h-[200px] sm:min-h-[400px]">
          <p className="text-center text-xs sm:text-base px-2">수리비 견적 이미지 영역</p>
        </div>
      </section>

      {/* 1.6 네번째 섹션 */}
      <section className="container mx-auto px-6 sm:px-10 py-8 sm:py-20 max-w-7xl">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-4xl font-bold mb-2 text-gray-900">사용자 후기</h2>
          <p className="text-xs sm:text-base text-gray-600 mt-2">실제 사용자들의 생생한 경험담을 확인해보세요</p>
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
                <CardDescription className="text-base">{review.comment}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">{review.avatar}</div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 1.7 다섯번째 섹션 */}
      <section className="py-8 sm:py-20">
        <div className="container mx-auto px-6 sm:px-10 text-center space-y-3 sm:space-y-6 max-w-7xl">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900 leading-tight">지금 바로 Acci의 과실비율을 확인해보세요</h2>
          <div className="space-y-2 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            <p>보험사의 억울한 과실비율 판정, 더 이상 혼자 고민하지 마세요.</p>
            <p>똑똑한 AI의 도움을 언제든지 받을 수 있습니다.</p>
          </div>
          <Link href="/analyze" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto text-sm sm:text-base bg-white text-gray-900 hover:bg-gray-100">
              시작하기
            </Button>
          </Link>
        </div>
      </section>

      {/* 1.8 푸터 */}
      <footer className="text-gray-900 border-t border-gray-200">
        <div className="container mx-auto px-6 sm:px-10 py-6 sm:py-12 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-4 sm:mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white text-gray-900 rounded flex items-center justify-center font-bold">AI</div>
                <span className="font-semibold text-lg">Acci</span>
              </Link>
              <p className="text-sm text-gray-600">AI가 제공하는 더 쉽고 정확한 교통사고 과실비율 분석 서비스</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  {/* @ts-expect-error - /help route will be created later */}
                  <Link href="/help" className="text-gray-600 hover:text-gray-900 transition-colors">
                    도움말
                  </Link>
                </li>
                <li>
                  {/* @ts-expect-error - /contact route will be created later */}
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="/policies/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/policies/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>support@acci.ai</li>
                <li>전화번호: 000-0000-0000</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">© 2025 Acci. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
