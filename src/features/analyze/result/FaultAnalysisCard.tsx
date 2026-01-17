import { AccidentSceneCard } from "@/features/analyze/result/AccidentSceneCard";
import { FaultRatioCard } from "@/features/analyze/result/FaultRatioCard";
import { LegalBasisCard } from "@/features/analyze/result/LegalBasisCard";
import { Card } from "@/shared/ui/card";

type FaultRatioItem = {
  label: string;
  percent: string;
  reasons: string[];
  tone: "red" | "blue";
};

type FaultAnalysisCardProps = {
  faultTitle: string;
  faultItems: FaultRatioItem[];
  sceneTitle: string;
  sceneTags: string[];
  sceneDescriptions: string[];
  legalTitle: string;
  legalLaw: string;
  legalDescription: string;
};

export function FaultAnalysisCard({
  faultTitle,
  faultItems,
  sceneTitle,
  sceneTags,
  sceneDescriptions,
  legalTitle,
  legalLaw,
  legalDescription,
}: FaultAnalysisCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border-0 bg-white p-4 shadow-none md:rounded-2xl md:p-6">
      <FaultRatioCard title={faultTitle} items={faultItems} />
      <div className="mt-4 space-y-4 md:mt-6 md:space-y-6">
        <AccidentSceneCard title={sceneTitle} tags={sceneTags} descriptions={sceneDescriptions} />
        <LegalBasisCard title={legalTitle} law={legalLaw} description={legalDescription} />
      </div>
    </Card>
  );
}
