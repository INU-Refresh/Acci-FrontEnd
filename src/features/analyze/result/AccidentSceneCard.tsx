type AccidentSceneCardProps = {
  title: string;
  tags: string[];
  descriptions: string[];
};

export function AccidentSceneCard({ title, tags, descriptions }: AccidentSceneCardProps) {
  return (
    <div>
      {/* TODO [Minjun]: 사고 장소 및 특징 데이터 API 연동 */}
      <p className="text-body7 text-gray-900 md:text-body3">{title}</p>
      <div className="mt-2 rounded-lg border border-gray-100 bg-white p-4 md:mt-4 md:rounded-2xl md:p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={
                index === 0
                  ? "rounded bg-gray-500 px-2 py-1 text-body11 text-white md:px-4 md:text-body7"
                  : "rounded bg-gray-100 px-2 py-1 text-body11 text-gray-500 md:px-4 md:text-body7"
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-body9 text-gray-500 md:mt-4 md:text-body7">
          {descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
