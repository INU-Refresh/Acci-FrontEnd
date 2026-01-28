import { ChangeEvent } from "react";
import { SelectField } from "@/features/repair-estimate/ui/SelectField";

interface RepairEstimateFormSectionProps {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  brandSelectOptions: Array<{ value: string; label: string }>;
  modelSelectOptions: Array<{ value: string; label: string }>;
  yearSelectOptions: Array<{ value: string; label: string }>;
  onBrandChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export function RepairEstimateFormSection({
  selectedBrand,
  selectedModel,
  selectedYear,
  brandSelectOptions,
  modelSelectOptions,
  yearSelectOptions,
  onBrandChange,
  onModelChange,
  onYearChange,
}: RepairEstimateFormSectionProps) {
  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-0">
      <div className="w-full sm:w-[560px] pt-10 pb-4">
        <h2 className="text-body7 sm:text-body1 text-gray-700 text-left">필수 입력</h2>
      </div>

      {/* 차량 브랜드 선택 */}
      <SelectField
        number={1}
        label="차량 브랜드 선택"
        placeholder="브랜드를 선택하세요"
        value={selectedBrand}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onBrandChange(e.target.value)}
        options={brandSelectOptions}
      />

      {/* 모델명 선택 */}
      <SelectField
        number={2}
        label="모델명 선택"
        placeholder="모델명을 선택하세요"
        value={selectedModel}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onModelChange(e.target.value)}
        options={modelSelectOptions}
        disabled={!selectedBrand}
      />

      {/* 연식 선택 */}
      <SelectField
        number={3}
        label="연식 선택"
        placeholder="연식을 선택하세요"
        value={selectedYear}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onYearChange(e.target.value)}
        options={yearSelectOptions}
        disabled={!selectedBrand || !selectedModel}
      />
    </section>
  );
}
