type FaultRatioItem = {
  label: string;
  percent: string;
  reasons: string[];
  tone: "red" | "blue";
};

type FaultRatioCardProps = {
  title: string;
  items: FaultRatioItem[];
};

const toneClassName = {
  red: "bg-secondary-50 text-secondary-700",
  blue: "bg-primary-50 text-primary-700",
};

const borderToneClassName = {
  red: "border-secondary-700",
  blue: "border-primary-700",
};

export function FaultRatioCard({ title, items }: FaultRatioCardProps) {
  return (
    <div>
      {/* TODO [Minjun]: 과실 비율 데이터 API 연동 */}
      <p className="text-body7 text-gray-900 md:text-body3">{title}</p>
      <div className="mt-2 space-y-2 md:mt-4">
        {items.map((item) => (
          <div key={item.label} className={`rounded-lg p-4 md:rounded-2xl md:p-6 ${toneClassName[item.tone]}`}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
              <div className="min-w-20">
                <p className="text-body1 font-semibold">{item.percent}</p>
                <p className="text-body7">{item.label}</p>
              </div>
              <div className={`border-l-2 pl-4 text-body9 md:text-body7 ${borderToneClassName[item.tone]}`}>
                {item.reasons.map((reason) => (
                  <p key={reason}>{reason}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
