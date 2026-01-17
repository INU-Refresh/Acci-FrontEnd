import Link from "next/link";

import { Card } from "@/shared/ui/card";
import { RecordListItem } from "@/features/my-page/RecordListItem";

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
          <Link href={moreHref} className="text-body7 text-gray-300">
            더보기
          </Link>
        ) : null}
      </div>
      <div className="mt-4 space-y-2 md:space-y-4">
        {items.map((item) => (
          <RecordListItem key={item.id} title={item.title} date={item.date} detail={item.detail} href={item.href} />
        ))}
      </div>
    </Card>
  );
}
