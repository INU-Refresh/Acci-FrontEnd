// ===== 차량 관련 타입 =====

export type Brand = "hyundai" | "kia" | "genesis";

export type VehicleType = "sedan" | "suv" | "hatchback";

export type Segment = "compact" | "mid_size" | "full_size" | "light_duty" | "mini" | "luxury" | "compact_luxury" | "mid_size_luxury" | "full_size_luxury";

export type Year = 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026;

export type VehicleInfo = {
  brand: Brand;
  model: string;
  vehicleType: VehicleType;
  segment: Segment;
};

// ===== 파손 부위 관련 타입 =====

export type BodySection = "front" | "rear" | "upper" | "side";

export type PartInfo = {
  id: string;
  part_name_kr: string;
  part_name_en: string;
};

// ===== 파손 정도 관련 타입 =====

export type DamageSeverity = "scratch" | "dent" | "crack" | "severe";

// ===== 수리 견적 요청 관련 타입 =====

export type DamageDetail = {
  part_name_en: string;
  part_name_kr: string;
  damage_severity: DamageSeverity;
  damage_label: string;
};

export type VehicleInfoForRepair = {
  brand: Brand;
  model: string;
  year: Year;
  vehicle_type: VehicleType;
  segment: Segment;
};

export type RepairEstimateRequest = {
  request_type: "repair_estimate";
  vehicle_info: VehicleInfoForRepair;
  damage_details: DamageDetail[];
  user_description?: string;
};
