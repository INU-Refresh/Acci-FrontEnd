"use client";

import Link from "next/link";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { Button } from "@/shared/ui/button";

interface RepairEstimateResultPageProps {
  id: string;
}

// 임시 데이터 - 실제로는 API에서 가져올 데이터
const mockData = {
  carModel: "현대(HYUNDAI) 아반떼",
  totalCost: "800만원",
  panelRepairCost: "90만원",
  replacementCost: "710만원",
};


export default function RepairEstimateResultPage({ id }: RepairEstimateResultPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex flex-col items-center">
        {/* 제목 섹션 */}
        <div className="flex flex-col items-center px-0 py-10 w-full">
          <div className="flex flex-col items-center px-6 py-0 w-full">
            <h1 className="text-title2 text-gray-900 text-center">예상 수리비</h1>
          </div>
        </div>

        {/* 예상 수리비 카드 */}
        <div className="flex flex-col items-center pb-4 w-full">
          <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full md:w-[560px] mx-6">
            {/* 총 수리비 안내 */}
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-body3 text-gray-500 text-center">
                {mockData.carModel}의 예상 수리비는 <span className="text-primary-700">{mockData.totalCost}</span>입니다
              </p>
            </div>

            {/* 세부 비용 */}
            <div className="flex flex-col gap-2 w-full">
              {/* 판금 부위 */}
              <div className="bg-gray-50 flex items-center justify-between px-6 py-4 rounded-lg w-full">
                <p className="text-body7 text-gray-900">판금 부위</p>
                <p className="text-body7 text-gray-900">{mockData.panelRepairCost}</p>
              </div>

              {/* 교체 부위 */}
              <div className="bg-gray-50 flex items-center justify-between px-6 py-4 rounded-lg w-full">
                <p className="text-body7 text-gray-900">교체 부위</p>
                <p className="text-body7 text-gray-900">{mockData.replacementCost}</p>
              </div>

              {/* 합계 */}
              <div className="bg-gray-50 flex items-center justify-between px-6 py-4 rounded-lg w-full">
                <p className="text-body7 text-gray-900">합계</p>
                <p className="text-body7 text-primary-700">{mockData.totalCost}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 파손 부위 카드 */}
        <div className="flex flex-col items-center justify-center pb-4 w-full">
          <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full md:w-[560px] mx-6">
            <div className="flex items-center w-full">
              <p className="text-body3 text-gray-900">파손 부위</p>
            </div>
            {/* 파손 부위 이미지 플레이스홀더 */}
            <div className="aspect-[3/2] bg-gray-50 rounded-lg w-full" />
          </div>
        </div>

        {/* 다시 계산하기 버튼 */}
        <div className="flex flex-col items-center pb-10 w-full">
          <Link href="/repair-estimate" className="w-full md:w-[560px]">
            <Button size="lg" className="h-14 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg w-full">
              예상 수리비 다시 계산하기
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RepairEstimateResultPage;
export { RepairEstimateResultPage };
