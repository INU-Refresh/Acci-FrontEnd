import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { JudicialPrecedentIcon, ReasonIcon, ScalesIcon } from "@/shared/icons";

const FEATURES = [
  {
    icon: ScalesIcon,
    title: "교통사고 과실비율 측정",
    description: "객관적인 과실비율을 측정합니다",
    className: "h-20 sm:h-auto",
  },
  {
    icon: ReasonIcon,
    title: "판단근거 제공",
    description: "과실비율 판단 근거를 제공합니다",
    className: "h-20 sm:h-auto",
  },
  {
    icon: JudicialPrecedentIcon,
    title: "관련 판례 제공",
    description: "관련된 판례를 제공합니다",
    className: "h-20 sm:h-auto sm:col-span-2 md:col-span-1",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-title4 sm:text-title2 mb-2 sm:mb-2 text-gray-900">Acci의 특별한 기능</h2>
        <p className="text-body8 sm:text-body4 text-gray-500 max-w-[270px] mx-auto sm:max-w-none">Acci가 객관적인 교통사고 과실비율 및 판단근거, 관련 판례를 제공합니다</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className={item.className}>
              <CardHeader className="flex flex-row items-stretch gap-4 p-4 h-full sm:h-auto sm:flex-col sm:gap-0 sm:items-baseline sm:p-8">
                <div className="w-12 sm:w-20 h-12 sm:h-20 rounded-2xl flex items-center justify-center sm:mb-4">
                  <Icon />
                </div>
                <div className="flex flex-col justify-between h-10 sm:h-auto my-auto">
                  <CardTitle className="text-body7 sm:text-body3 text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="text-body8 sm:text-body6 text-gray-900">{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
