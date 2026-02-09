import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { VEHICLES, BRAND_LABELS } from "@/entities/vehicle";
import type { DamageDetail } from "@/entities/vehicle/types";

interface RepairEstimateState {
  // 차량 정보
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  modelFileName: string;

  // 업로드된 이미지
  uploadedImages: File[];

  // 파손 부위 선택
  damageDetails: DamageDetail[];
  selectedPartIds: string[];

  // 사용자 설명
  userDescription: string;

  // 선택 옵션들
  brandSelectOptions: Array<{ value: string; label: string }>;
  modelSelectOptions: Array<{ value: string; label: string }>;
  yearSelectOptions: Array<{ value: string; label: string }>;

  // 액션
  setSelectedBrand: (brand: string) => void;
  setSelectedModel: (model: string) => void;
  setSelectedYear: (year: string) => void;
  setUploadedImages: (images: File[]) => void;
  setDamageDetails: (details: DamageDetail[]) => void;
  addDamageDetail: (detail: DamageDetail) => void;
  removeDamageDetail: (index: number) => void;
  addSelectedPartId: (partId: string) => void;
  removeSelectedPartId: (partId: string) => void;
  clearSelectedPartIds: () => void;
  setUserDescription: (description: string) => void;
  removeImage: (index: number) => void;
  clearImages: () => void;
  reset: () => void;
}

const getBrandOptions = () => {
  return Array.from(new Set(VEHICLES.map(({ brand }) => brand))).map((brand) => ({
    value: brand,
    label: BRAND_LABELS[brand] ?? brand,
  }));
};

const getModelOptions = (brand: string) => {
  return VEHICLES.filter((vehicle) => vehicle.brand === brand)
    .map(({ model }) => model)
    .map((model) => ({ value: model, label: model }));
};

const getYearOptions = () => {
  return Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2011 + i).map((year) => ({ value: year.toString(), label: `${year}년` }));
};

const getModelFileName = (brand: string, model: string): string => {
  const vehicle = VEHICLES.find((item) => item.brand === brand && item.model === model);
  if (!vehicle) return "";

  const modelFileMap: Record<string, string> = {
    sedan: "Sedan",
    hatchback: "Hatchback",
    suv: "SUV",
  };

  return modelFileMap[vehicle.vehicleType] || "";
};

export const useRepairEstimateStore = create<RepairEstimateState>()(
  devtools(
    (set, get) => ({
      selectedBrand: "",
      selectedModel: "",
      selectedYear: "",
      modelFileName: "",
      uploadedImages: [],
      brandSelectOptions: getBrandOptions(),
      modelSelectOptions: [],
      yearSelectOptions: getYearOptions(),
      damageDetails: [],
      userDescription: "",
      selectedPartIds: [],

      setSelectedBrand: (brand) => {
        set({
          selectedBrand: brand,
          selectedModel: "",
          modelFileName: "",
          selectedPartIds: [],
          modelSelectOptions: getModelOptions(brand),
        });
      },

      setSelectedModel: (model) => {
        const { selectedBrand } = get();
        set({
          selectedModel: model,
          modelFileName: getModelFileName(selectedBrand, model),
          selectedPartIds: [],
        });
      },

      setSelectedYear: (year) => {
        set({ selectedYear: year });
      },

      setUploadedImages: (images) => {
        set({ uploadedImages: images });
      },

      setDamageDetails: (details) => {
        set({ damageDetails: details });
      },

      addDamageDetail: (detail) => {
        const { damageDetails } = get();
        set({ damageDetails: [...damageDetails, detail] });
      },

      removeDamageDetail: (index) => {
        const { damageDetails } = get();
        set({ damageDetails: damageDetails.filter((_, i) => i !== index) });
      },

      addSelectedPartId: (partId) => {
        const { selectedPartIds } = get();
        if (selectedPartIds.includes(partId)) return;
        set({ selectedPartIds: [...selectedPartIds, partId] });
      },

      removeSelectedPartId: (partId) => {
        const { selectedPartIds } = get();
        set({ selectedPartIds: selectedPartIds.filter((id) => id !== partId) });
      },

      clearSelectedPartIds: () => {
        set({ selectedPartIds: [] });
      },

      setUserDescription: (description) => {
        set({ userDescription: description });
      },

      removeImage: (index) => {
        const { uploadedImages } = get();
        set({
          uploadedImages: uploadedImages.filter((_, i) => i !== index),
        });
      },

      clearImages: () => {
        set({ uploadedImages: [] });
      },

      reset: () => {
        set({
          selectedBrand: "",
          selectedModel: "",
          selectedYear: "",
          modelFileName: "",
          uploadedImages: [],
          brandSelectOptions: getBrandOptions(),
          modelSelectOptions: [],
          yearSelectOptions: getYearOptions(),
          damageDetails: [],
          userDescription: "",
          selectedPartIds: [],
        });
      },
    }),
    { name: "RepairEstimateStore" },
  ),
);

// Selectors (선택적 구독용)
export const selectBrandOptions = (state: RepairEstimateState) => state.brandSelectOptions;

export const selectModelOptions = (state: RepairEstimateState) => state.modelSelectOptions;

export const selectYearOptions = (state: RepairEstimateState) => state.yearSelectOptions;

export const selectIsFormValid = (state: RepairEstimateState) => !!state.selectedBrand && !!state.selectedModel && !!state.selectedYear;
