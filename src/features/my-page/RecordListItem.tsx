type RecordListItemProps = {
  title: string;
  date: string;
  detail: string;
  dotColorClassName?: string;
};

export function RecordListItem({ title, date, detail, dotColorClassName = "bg-[#00C853]" }: RecordListItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-gray-100" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <p className="text-body5 text-gray-900">{title}</p>
          <div className="flex flex-col gap-1 text-body7 text-gray-500 md:flex-row md:items-center md:gap-3">
            <span>{date}</span>
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dotColorClassName}`} aria-hidden="true" />
              {detail}
            </span>
          </div>
        </div>
      </div>
      <svg aria-hidden="true" className="h-3 w-3 text-gray-300" viewBox="0 0 12 12">
        <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
