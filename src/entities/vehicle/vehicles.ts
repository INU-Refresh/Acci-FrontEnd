import { VehicleType, VehicleInfo, BodySection, PartInfo, DamageSeverity } from "./types";

export type { Brand, VehicleType, Segment, VehicleInfo, BodySection, PartInfo, DamageSeverity, DamageDetail, VehicleInfoForRepair, RepairEstimateRequest } from "./types";

export const VEHICLES: VehicleInfo[] = [
  // Hyundai
  { brand: "hyundai", model: "아반떼", vehicleType: "sedan", segment: "compact" },
  { brand: "hyundai", model: "소나타", vehicleType: "sedan", segment: "mid_size" },
  { brand: "hyundai", model: "그랜저", vehicleType: "sedan", segment: "full_size" },
  { brand: "hyundai", model: "싼타페", vehicleType: "suv", segment: "mid_size" },
  { brand: "hyundai", model: "팰리세이드", vehicleType: "suv", segment: "full_size" },

  // Kia
  { brand: "kia", model: "K3", vehicleType: "sedan", segment: "compact" },
  { brand: "kia", model: "K5", vehicleType: "sedan", segment: "mid_size" },
  { brand: "kia", model: "K7", vehicleType: "sedan", segment: "full_size" },
  { brand: "kia", model: "K8", vehicleType: "sedan", segment: "full_size" },
  { brand: "kia", model: "K9", vehicleType: "sedan", segment: "luxury" },
  { brand: "kia", model: "모닝", vehicleType: "hatchback", segment: "mini" },
  { brand: "kia", model: "레이", vehicleType: "hatchback", segment: "mini" },
  { brand: "kia", model: "스포티지", vehicleType: "suv", segment: "compact" },
  { brand: "kia", model: "쏘렌토", vehicleType: "suv", segment: "mid_size" },

  // Genesis
  { brand: "genesis", model: "G70", vehicleType: "sedan", segment: "compact_luxury" },
  { brand: "genesis", model: "G80", vehicleType: "sedan", segment: "mid_size_luxury" },
  { brand: "genesis", model: "G90", vehicleType: "sedan", segment: "full_size_luxury" },
  { brand: "genesis", model: "GV60", vehicleType: "suv", segment: "compact_luxury" },
  { brand: "genesis", model: "GV70", vehicleType: "suv", segment: "mid_size_luxury" },
  { brand: "genesis", model: "GV80", vehicleType: "suv", segment: "full_size_luxury" },
];

export const BRAND_LABELS: Record<string, string> = {
  hyundai: "현대",
  kia: "기아",
  genesis: "제네시스",
};

// ===== 공통 파손 부위 =====

// 모든 차종 공통 Front 부위
const COMMON_FRONT_PARTS: PartInfo[] = [
  { id: "windshield-glass", part_name_kr: "윈드쉴드 글라스", part_name_en: "Windshield Glass" },
  { id: "hood", part_name_kr: "후드", part_name_en: "Hood" },
  { id: "radiator-grille", part_name_kr: "라디에이터 그릴", part_name_en: "Radiator Grille" },
  { id: "front-bumper-cover", part_name_kr: "프론트 범퍼 커버", part_name_en: "Front Bumper Cover" },
  { id: "head-lamp-lh", part_name_kr: "헤드 램프 좌측", part_name_en: "Head Lamp LH" },
  { id: "head-lamp-rh", part_name_kr: "헤드 램프 우측", part_name_en: "Head Lamp RH" },
];

// 모든 차종 공통 Upper 부위
const COMMON_UPPER_PARTS: PartInfo[] = [{ id: "roof-panel", part_name_kr: "루프 패널", part_name_en: "Roof Panel" }];

// 모든 차종 공통 Side 부위
const COMMON_SIDE_PARTS: PartInfo[] = [
  { id: "front-fender-lh", part_name_kr: "프론트 펜더 좌측", part_name_en: "Front Fender LH" },
  { id: "front-fender-rh", part_name_kr: "프론트 펜더 우측", part_name_en: "Front Fender RH" },
  { id: "front-door-lh", part_name_kr: "프론트 도어 좌측", part_name_en: "Front Door LH" },
  { id: "front-door-rh", part_name_kr: "프론트 도어 우측", part_name_en: "Front Door RH" },
  { id: "rear-door-lh", part_name_kr: "리어 도어 좌측", part_name_en: "Rear Door LH" },
  { id: "rear-door-rh", part_name_kr: "리어 도어 우측", part_name_en: "Rear Door RH" },
  { id: "tire-wheel-front-lh", part_name_kr: "타이어 & 휠 (프론트 좌측)", part_name_en: "Tire & Wheel (Front LH)" },
  { id: "tire-wheel-front-rh", part_name_kr: "타이어 & 휠 (프론트 우측)", part_name_en: "Tire & Wheel (Front RH)" },
  { id: "tire-wheel-rear-lh", part_name_kr: "타이어 & 휠 (리어 좌측)", part_name_en: "Tire & Wheel (Rear LH)" },
  { id: "tire-wheel-rear-rh", part_name_kr: "타이어 & 휠 (리어 우측)", part_name_en: "Tire & Wheel (Rear RH)" },
];

// 세단/SUV 공통 Rear 범퍼 부위
const COMMON_REAR_BUMPER_PARTS: PartInfo[] = [
  { id: "rear-bumper-cover", part_name_kr: "리어 범퍼 커버", part_name_en: "Rear Bumper Cover" },
  { id: "rear-combination-lamp-lh", part_name_kr: "리어 콤비네이션 램프 좌측", part_name_en: "Rear Combination Lamp LH" },
  { id: "rear-combination-lamp-rh", part_name_kr: "리어 콤비네이션 램프 우측", part_name_en: "Rear Combination Lamp RH" },
];

// ===== 세단 파손 부위 =====
export const SEDAN_PARTS: Record<BodySection, PartInfo[]> = {
  front: COMMON_FRONT_PARTS,
  rear: [
    { id: "sedan-back-glass", part_name_kr: "백 글라스", part_name_en: "Back Glass" },
    { id: "sedan-trunk-lid", part_name_kr: "트렁크 리드", part_name_en: "Trunk Lid" },
    ...COMMON_REAR_BUMPER_PARTS,
  ],
  upper: COMMON_UPPER_PARTS,
  side: [
    ...COMMON_SIDE_PARTS,
    { id: "sedan-rear-quarter-panel-lh", part_name_kr: "리어 쿼터 패널 좌측", part_name_en: "Rear Quarter Panel LH" },
    { id: "sedan-rear-quarter-panel-rh", part_name_kr: "리어 쿼터 패널 우측", part_name_en: "Rear Quarter Panel RH" },
    { id: "sedan-quarter-fixed-glass-lh", part_name_kr: "쿼터 픽스드 글라스 좌측", part_name_en: "Quarter Fixed Glass LH" },
    { id: "sedan-quarter-fixed-glass-rh", part_name_kr: "쿼터 픽스드 글라스 우측", part_name_en: "Quarter Fixed Glass RH" },
  ],
};

// ===== 해치백 파손 부위 =====
export const HATCHBACK_PARTS: Record<BodySection, PartInfo[]> = {
  front: COMMON_FRONT_PARTS,
  rear: [
    { id: "hatchback-back-door", part_name_kr: "백 도어", part_name_en: "Back Door" },
    { id: "hatchback-back-door-glass", part_name_kr: "백 도어 글라스", part_name_en: "Back Door Glass" },
    ...COMMON_REAR_BUMPER_PARTS,
  ],
  upper: COMMON_UPPER_PARTS,
  side: [
    ...COMMON_SIDE_PARTS,
    { id: "hatchback-rear-quarter-panel-lh", part_name_kr: "리어 쿼터 패널 좌측", part_name_en: "Rear Quarter Panel LH" },
    { id: "hatchback-rear-quarter-panel-rh", part_name_kr: "리어 쿼터 패널 우측", part_name_en: "Rear Quarter Panel RH" },
    { id: "hatchback-quarter-glass-lh", part_name_kr: "쿼터 글라스 좌측", part_name_en: "Quarter Glass LH" },
    { id: "hatchback-quarter-glass-rh", part_name_kr: "쿼터 글라스 우측", part_name_en: "Quarter Glass RH" },
  ],
};

// ===== SUV 파손 부위 =====
export const SUV_PARTS: Record<BodySection, PartInfo[]> = {
  front: COMMON_FRONT_PARTS,
  rear: [
    { id: "suv-rear-spoiler", part_name_kr: "리어 스포일러", part_name_en: "Rear Spoiler" },
    { id: "suv-tailgate-glass", part_name_kr: "테일게이트 글라스", part_name_en: "Tailgate Glass" },
    { id: "suv-tailgate", part_name_kr: "테일게이트", part_name_en: "Tailgate" },
    ...COMMON_REAR_BUMPER_PARTS,
  ],
  upper: COMMON_UPPER_PARTS,
  side: [
    ...COMMON_SIDE_PARTS,
    { id: "suv-rear-fender-panel-lh", part_name_kr: "리어 펜더 패널 좌측", part_name_en: "Rear Fender Panel LH" },
    { id: "suv-rear-fender-panel-rh", part_name_kr: "리어 펜더 패널 우측", part_name_en: "Rear Fender Panel RH" },
    { id: "suv-quarter-fixed-glass-lh", part_name_kr: "쿼터 픽스드 글라스 좌측", part_name_en: "Quarter Fixed Glass LH" },
    { id: "suv-quarter-fixed-glass-rh", part_name_kr: "쿼터 픽스드 글라스 우측", part_name_en: "Quarter Fixed Glass RH" },
  ],
};

// 차량 타입별 파손 부위 매핑
export const VEHICLE_PARTS_BY_TYPE: Record<VehicleType, Record<BodySection, PartInfo[]>> = {
  sedan: SEDAN_PARTS,
  hatchback: HATCHBACK_PARTS,
  suv: SUV_PARTS,
};

// 파손 정도 라벨
export const DAMAGE_SEVERITY_LABELS: Record<DamageSeverity, string> = {
  scratch: "스크래치",
  dent: "찌그러짐",
  crack: "균열",
  severe: "반파",
};
