import { ChangeEvent } from "react";
import { useRepairEstimateStore, selectBrandOptions, selectModelOptions, selectYearOptions } from "@/shared/store/repair-estimate-store";
import { SelectField } from "@/features/repair-estimate/ui/SelectField";

export function RepairEstimateFormSection() {
  const selectedBrand = useRepairEstimateStore((state) => state.selectedBrand);
  const selectedModel = useRepairEstimateStore((state) => state.selectedModel);
  const selectedYear = useRepairEstimateStore((state) => state.selectedYear);
  const setSelectedBrand = useRepairEstimateStore((state) => state.setSelectedBrand);
  const setSelectedModel = useRepairEstimateStore((state) => state.setSelectedModel);
  const setSelectedYear = useRepairEstimateStore((state) => state.setSelectedYear);
  const brandSelectOptions = useRepairEstimateStore(selectBrandOptions);
  const modelSelectOptions = useRepairEstimateStore(selectModelOptions);
  const yearSelectOptions = useRepairEstimateStore(selectYearOptions);

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
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedBrand(e.target.value)}
        options={brandSelectOptions}
      />

      {/* 모델명 선택 */}
      <SelectField
        number={2}
        label="모델명 선택"
        placeholder="모델명을 선택하세요"
        value={selectedModel}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedModel(e.target.value)}
        options={modelSelectOptions}
        disabled={!selectedBrand}
      />

      {/* 연식 선택 */}
      <SelectField
        number={3}
        label="연식 선택"
        placeholder="연식을 선택하세요"
        value={selectedYear}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedYear(e.target.value)}
        options={yearSelectOptions}
        disabled={!selectedBrand || !selectedModel}
      />
    </section>
  );
}
