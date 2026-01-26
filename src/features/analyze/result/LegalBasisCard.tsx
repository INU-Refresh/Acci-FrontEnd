type LegalBasisCardProps = {
  title: string;
  law: string;
  description: string;
};

export function LegalBasisCard({ title, law, description }: LegalBasisCardProps) {
  return (
    <div>
      {/* TODO [Minjun]: 법적 근거 데이터 API 연동 */}
      <p className="text-body7 text-gray-900 md:text-body3">{title}</p>
      <div className="mt-2 rounded-lg border border-gray-100 bg-white p-4 text-body9 text-gray-500 md:mt-4 md:rounded-2xl md:p-6 md:text-body7">
        <span className="mb-2 inline-block rounded bg-gray-100 px-2 py-1 text-body11 text-gray-500 md:px-4 md:text-body7">{law}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
