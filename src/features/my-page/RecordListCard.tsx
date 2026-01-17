import Link from "next/link";

import { RecordListItem } from "@/features/my-page/RecordListItem";
import { Card } from "@/shared/ui/card";

type RecordItem = {
  id: string;
  title: string;
  date: string;
  detail: string;
  href?: string;
};

type RecordListCardProps = {
  title: string;
  items: RecordItem[];
  moreHref?: string;
  showMore?: boolean;
};

export function RecordListCard({ title, items, moreHref, showMore = true }: RecordListCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border-0 bg-white p-6 shadow-none md:rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-body3 text-gray-900">{title}</p>
        {showMore && moreHref ? (
          // TODO [Minjun]: 더보기 링크 API 연동
          // Next.js에서 typed routes가 활성화되어있음
          // -> 따라서 href를 as never로 캐스팅하여 전달함 (임시 방편이라서 추후 개선 필요함. 배포 중단되는거 방지용으로 우회 빌드 통과 수단이니까 다시 캐스팅 해줘야함)
          <Link href={moreHref as never} className="text-body7 text-gray-300">
            더보기
          </Link>
        ) : null}
      </div>
      <div className="mt-4 space-y-2 md:space-y-4">
        {/* TODO [Minjun]: 기록 리스트 데이터 API 연동 */}
        {items.map((item) => (
          <RecordListItem key={item.id} title={item.title} date={item.date} detail={item.detail} href={item.href} />
        ))}
      </div>
    </Card>
  );
}
