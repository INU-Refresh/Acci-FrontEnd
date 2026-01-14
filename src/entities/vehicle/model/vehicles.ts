export type Brand = "hyundai" | "kia" | "genesis";

export type VehicleType = "sedan" | "suv" | "van" | "truck" | "hatchback" | "mpv";

export type Segment = "compact" | "mid-size" | "full-size" | "light-duty" | "mini" | "luxury" | "compact-luxury" | "mid-size-luxury" | "full-size-luxury";

export type VehicleInfo = {
  brand: Brand;
  model: string;
  vehicleType: VehicleType;
  segment: Segment;
};

export const VEHICLES: VehicleInfo[] = [
  // Hyundai
  { brand: "hyundai", model: "아반떼", vehicleType: "sedan", segment: "compact" },
  { brand: "hyundai", model: "소나타", vehicleType: "sedan", segment: "mid-size" },
  { brand: "hyundai", model: "그랜저", vehicleType: "sedan", segment: "full-size" },
  { brand: "hyundai", model: "싼타페", vehicleType: "suv", segment: "mid-size" },
  { brand: "hyundai", model: "팰리세이드", vehicleType: "suv", segment: "full-size" },
  { brand: "hyundai", model: "스타렉스", vehicleType: "van", segment: "full-size" },
  { brand: "hyundai", model: "포터", vehicleType: "truck", segment: "light-duty" },

  // Kia
  { brand: "kia", model: "K3", vehicleType: "sedan", segment: "compact" },
  { brand: "kia", model: "K5", vehicleType: "sedan", segment: "mid-size" },
  { brand: "kia", model: "K7", vehicleType: "sedan", segment: "full-size" },
  { brand: "kia", model: "K8", vehicleType: "sedan", segment: "full-size" },
  { brand: "kia", model: "K9", vehicleType: "sedan", segment: "luxury" },
  { brand: "kia", model: "모닝", vehicleType: "hatchback", segment: "mini" },
  { brand: "kia", model: "레이", vehicleType: "hatchback", segment: "mini" },
  { brand: "kia", model: "스포티지", vehicleType: "suv", segment: "compact" },
  { brand: "kia", model: "쏘렌토", vehicleType: "suv", segment: "mid-size" },
  { brand: "kia", model: "카니발", vehicleType: "mpv", segment: "full-size" },
  { brand: "kia", model: "봉고", vehicleType: "truck", segment: "light-duty" },

  // Genesis
  { brand: "genesis", model: "G70", vehicleType: "sedan", segment: "compact-luxury" },
  { brand: "genesis", model: "G80", vehicleType: "sedan", segment: "mid-size-luxury" },
  { brand: "genesis", model: "G90", vehicleType: "sedan", segment: "full-size-luxury" },
  { brand: "genesis", model: "GV60", vehicleType: "suv", segment: "compact-luxury" },
  { brand: "genesis", model: "GV70", vehicleType: "suv", segment: "mid-size-luxury" },
  { brand: "genesis", model: "GV80", vehicleType: "suv", segment: "full-size-luxury" },
];

export const BRAND_LABELS: Record<string, string> = {
  hyundai: "현대",
  kia: "기아",
  genesis: "제네시스",
};
