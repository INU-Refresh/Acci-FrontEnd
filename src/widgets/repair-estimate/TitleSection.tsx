interface TitleSectionProps {
  title: string;
  description: string;
}

export function TitleSection({ title, description }: TitleSectionProps) {
  return (
    <section className="flex pt-10 flex-col items-center gap-6 self-stretch px-4 sm:px-10">
      <div className="flex flex-col gap-2 items-center text-center">
        <h1 className="text-title4 sm:text-title2 text-gray-900">{title}</h1>
        <p className="text-body9 sm:text-body4 text-gray-500">{description}</p>
      </div>
    </section>
  );
}
