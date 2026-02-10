import { useState, useMemo, useCallback } from "react";
import { VEHICLES, BRAND_LABELS } from "@/entities/vehicle";

export const useRepairEstimateForm = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  // 브랜드 옵션
  const brandOptions = useMemo(() => Array.from(new Set(VEHICLES.map(({ brand }) => brand))), []);

  // 모델 옵션
  const modelOptions = useMemo(() => VEHICLES.filter((vehicle) => vehicle.brand === selectedBrand).map(({ model }) => model), [selectedBrand]);

  // 연식 옵션
  const yearOptions = useMemo(() => Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2011 + i), []);

  // 브랜드 선택 옵션 (label 포함)
  const brandSelectOptions = useMemo(
    () =>
      brandOptions.map((brand) => ({
        value: brand,
        label: BRAND_LABELS[brand] ?? brand,
      })),
    [brandOptions],
  );

  // 모델 선택 옵션
  const modelSelectOptions = useMemo(() => modelOptions.map((model) => ({ value: model, label: model })), [modelOptions]);

  // 연식 선택 옵션
  const yearSelectOptions = useMemo(
    () =>
      yearOptions.map((year) => ({
        value: year.toString(),
        label: `${year}년`,
      })),
    [yearOptions],
  );

  // 3D 모델 파일명 가져오기
  const getModelFileName = useCallback((brand: string, model: string): string => {
    const vehicle = VEHICLES.find((item) => item.brand === brand && item.model === model);
    if (!vehicle) return "";

    const modelFileMap: Record<string, string> = {
      sedan: "Sedan",
      hatchback: "Hatchback",
      suv: "SUV",
    };

    return modelFileMap[vehicle.vehicleType] || "";
  }, []);

  // 현재 선택된 모델 파일명
  const modelFileName = useMemo(() => {
    if (selectedBrand && selectedModel) {
      return getModelFileName(selectedBrand, selectedModel);
    }
    return "";
  }, [selectedBrand, selectedModel, getModelFileName]);

  // 브랜드 변경 핸들러
  const handleBrandChange = useCallback((value: string) => {
    setSelectedBrand(value);
    setSelectedModel("");
  }, []);

  // 모델 변경 핸들러
  const handleModelChange = useCallback((value: string) => {
    setSelectedModel(value);
  }, []);

  // 연식 변경 핸들러
  const handleYearChange = useCallback((value: string) => {
    setSelectedYear(value);
  }, []);

  // 폼 유효성 확인
  const isFormValid = !!selectedBrand && !!selectedModel && !!selectedYear;

  return {
    // 상태
    selectedBrand,
    selectedModel,
    selectedYear,
    modelFileName,
    isFormValid,
    // 옵션들
    brandSelectOptions,
    modelSelectOptions,
    yearSelectOptions,
    // 핸들러들
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  };
};
