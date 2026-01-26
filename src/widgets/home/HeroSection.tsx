import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-10 py-10 sm:py-20 max-w-7xl">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 sm:items-center ">
        <div className="flex-2/5 space-y-3 sm:space-y-6 text-left">
          <h1 className="text-title4 text-gray-900 sm:text-title1">
            AI가 판단하는
            <br />
            교통사고 과실비율
          </h1>
          <p className="text-body8 sm:text-body4 text-gray-600 max-w-xl">Acci가 교통사고 과실비율을 빠르고 정확하게 판단해드립니다.</p>
          <div className="flex justify-start">
            <Link href="/analyze" className="w-[200px] sm:w-auto">
              <Button size="lg" className="gap-2 w-full h-14 sm:w-auto text-body7 sm:text-body5 bg-black text-white hover:bg-black/90 cursor-pointer">
                → 교통사고 분석하기
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full sm:flex-3/5 rounded-lg items-center justify-center sm:order-last max-h-[330px] mx-auto">
          <Image src="/images/balance-car.png" alt="과실비율 균형" width={500} height={330} priority className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
