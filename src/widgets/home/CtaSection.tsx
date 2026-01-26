import Link from "next/link";
import { Button } from "@/shared/ui/button";

export function CtaSection() {
  return (
    <section className="pt-8 sm:pt-20">
      <div className="mx-auto py-10 text-center space-y-3 sm:space-y-6 bg-gray-800">
        <h2 className="block sm:hidden text-body5 text-gray-0 leading-tight">
          <p>지금 바로 Acci의</p>
          <p>과실비율을 확인해보세요</p>
        </h2>

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
  );
}
