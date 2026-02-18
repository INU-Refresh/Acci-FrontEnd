import Link from "next/link";
import { Button } from "@/shared/ui/button";

interface ActionSectionProps {}

export function ActionSection({}: ActionSectionProps) {
  return (
    <div className="flex flex-col items-center pb-10 w-full">
      <Link href="/repair-estimate" className="w-full max-w-[840px] mx-6">
        <Button size="lg" className="h-14 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg w-full">
          예상 수리비 다시 계산하기
        </Button>
      </Link>
    </div>
  );
}
