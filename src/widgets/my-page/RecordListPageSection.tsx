import { RecordListItem } from "@/features/my-page/RecordListItem";
import { Pagination } from "@/features/my-page/Pagination";
import { Card } from "@/shared/ui/card";

type RecordItem = {
  id: string;
  title: string;
  date: string;
  detail: string;
  href?: string;
};

type RecordListPageSectionProps = {
  title: string;
  items: RecordItem[];
};

export function RecordListPageSection({ title, items }: RecordListPageSectionProps) {
  return (
    <section className="flex w-full max-w-xl flex-col items-center gap-6 py-10 md:gap-8">
      <Card className="w-full rounded-lg border-0 bg-white p-6 shadow-none md:rounded-2xl">
        <p className="text-body3 text-gray-900">{title}</p>
        <div className="mt-4 space-y-4">
          {/* TODO [Minjun]: 목록 데이터 API 연동 */}
          {items.map((item) => (
            <RecordListItem key={item.id} title={item.title} date={item.date} detail={item.detail} href={item.href} />
          ))}
        </div>
        <div className="mt-6">
          {/* TODO [Minjun]: 페이지네이션 동작 구현 필요 */}
          <Pagination currentPage={1} pages={[1, 2, 3, 4, 5]} />
        </div>
      </Card>
    </section>
  );
}
