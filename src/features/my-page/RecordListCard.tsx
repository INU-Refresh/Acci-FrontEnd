import { Card } from "@/shared/ui/card";
import { RecordListItem } from "@/features/my-page/RecordListItem";

type RecordItem = {
  id: string;
  title: string;
  date: string;
  detail: string;
};

type RecordListCardProps = {
  title: string;
  items: RecordItem[];
};

export function RecordListCard({ title, items }: RecordListCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border-0 bg-white p-6 shadow-none md:rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-body3 text-gray-900">{title}</p>
        <button type="button" className="text-body7 text-gray-300">
          더보기
        </button>
      </div>
      <div className="mt-4 space-y-2 md:space-y-4">
        {items.map((item) => (
          <RecordListItem key={item.id} title={item.title} date={item.date} detail={item.detail} />
        ))}
      </div>
    </Card>
  );
}
