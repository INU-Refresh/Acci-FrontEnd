import { useMemo } from "react";

import { VEHICLE_PARTS_BY_TYPE, VEHICLES } from "@/entities/vehicle";
import type { PartInfo, VehicleType } from "@/entities/vehicle/types";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";

import { DamageDetailCard } from "./DamageDetailCard";

const createFallbackPart = (partId: string): PartInfo => ({
  id: partId,
  part_name_kr: "알 수 없는 부품",
  part_name_en: partId,
});

const normalizeKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const HATCHBACK_MESH_ALIASES: Record<string, string> = {
  windshieldglass: "windshield-glass",
  hood: "hood",
  radiatorgrille: "radiator-grille",
  frontbumpercover: "front-bumper-cover",
  headlamplh: "head-lamp-lh",
  headlamprh: "head-lamp-rh",
  backdoor: "hatchback-back-door",
  backdoorglass: "hatchback-back-door-glass",
  rearbumpercover: "rear-bumper-cover",
  rearcombinationlamplh: "rear-combination-lamp-lh",
  rearcombinationlamprh: "rear-combination-lamp-rh",
  roofpanel: "roof-panel",
  frontfenderlh: "front-fender-lh",
  frontfenderrh: "front-fender-rh",
  rearquarterpanellh: "hatchback-rear-quarter-panel-lh",
  rearquarterpanelrh: "hatchback-rear-quarter-panel-rh",
  frontdoorlh: "front-door-lh",
  frontdoorrh: "front-door-rh",
  reardoorlh: "rear-door-lh",
  reardoorrh: "rear-door-rh",
  quarterglasslh: "hatchback-quarter-glass-lh",
  quarterglassrh: "hatchback-quarter-glass-rh",
  tirewheelrearlh: "tire-wheel-rear-lh",
  tirewheelrearrh: "tire-wheel-rear-rh",
};

const SEDAN_MESH_ALIASES: Record<string, string> = {
  windshieldglass: "windshield-glass",
  hood: "hood",
  radiatorgrille: "radiator-grille",
  frontbumpercover: "front-bumper-cover",
  headlamplh: "head-lamp-lh",
  headlamprh: "head-lamp-rh",
  backglass: "sedan-back-glass",
  trunklid: "sedan-trunk-lid",
  rearbumpercover: "rear-bumper-cover",
  rearcombinationlamplh: "rear-combination-lamp-lh",
  rearcombinationlamprh: "rear-combination-lamp-rh",
  roofpanel: "roof-panel",
  frontfenderlh: "front-fender-lh",
  frontfenderrh: "front-fender-rh",
  rearquarterpanellh: "sedan-rear-quarter-panel-lh",
  rearquarterpanelrh: "sedan-rear-quarter-panel-rh",
  frontdoorlh: "front-door-lh",
  frontdoorrh: "front-door-rh",
  reardoorlh: "rear-door-lh",
  reardoorrh: "rear-door-rh",
  quarterfixedglasslh: "sedan-quarter-fixed-glass-lh",
  quarterfixedglassrh: "sedan-quarter-fixed-glass-rh",
  tirewheelfrontlh: "tire-wheel-front-lh",
  tirewheelfrontrh: "tire-wheel-front-rh",
  tirewheelrearlh: "tire-wheel-rear-lh",
  tirewheelrearrh: "tire-wheel-rear-rh",
};

const SUV_MESH_ALIASES: Record<string, string> = {
  windshieldglass: "windshield-glass",
  hood: "hood",
  headlamplh: "head-lamp-lh",
  headlamprh: "head-lamp-rh",
  radiatorgrille: "radiator-grille",
  frontbumpercover: "front-bumper-cover",
  rearspoiler: "suv-rear-spoiler",
  tailgateglass: "suv-tailgate-glass",
  tailgate: "suv-tailgate",
  rearcombinationlamplh: "rear-combination-lamp-lh",
  rearcombinationlamprh: "rear-combination-lamp-rh",
  rearbumpercover: "rear-bumper-cover",
  roofpanel: "roof-panel",
  frontfenderlh: "front-fender-lh",
  frontfenderrh: "front-fender-rh",
  rearfenderpanellh: "suv-rear-fender-panel-lh",
  rearfenderpanelrh: "suv-rear-fender-panel-rh",
  frontdoorlh: "front-door-lh",
  frontdoorrh: "front-door-rh",
  reardoorlh: "rear-door-lh",
  reardoorrh: "rear-door-rh",
  quarterfixedglasslh: "suv-quarter-fixed-glass-lh",
  quarterfixedglassrh: "suv-quarter-fixed-glass-rh",
  tirewheelfrontlh: "tire-wheel-front-lh",
  tirewheelfrontrh: "tire-wheel-front-rh",
  tirewheelrearlh: "tire-wheel-rear-lh",
  tirewheelrearrh: "tire-wheel-rear-rh",
};

const MESH_ALIASES_BY_TYPE: Record<VehicleType, Record<string, string>> = {
  hatchback: HATCHBACK_MESH_ALIASES,
  sedan: SEDAN_MESH_ALIASES,
  suv: SUV_MESH_ALIASES,
};

const stripSectionPrefix = (value: string) => {
  const prefixes = ["front", "rear", "side", "upper", "body"];
  for (const prefix of prefixes) {
    if (value.startsWith(prefix)) {
      return value.slice(prefix.length);
    }
  }
  return value;
};

const resolvePartId = (partId: string, vehicleType: VehicleType) => {
  const normalized = normalizeKey(partId);
  const aliases = MESH_ALIASES_BY_TYPE[vehicleType] ?? {};
  const directAlias = aliases[normalized];
  if (directAlias) return directAlias;

  const stripped = stripSectionPrefix(normalized);
  const strippedAlias = aliases[stripped];
  return strippedAlias ?? partId;
};

export function SelectedDamageDetailSection() {
  const { selectedPartIds, selectedBrand, selectedModel, removeSelectedPartId } = useRepairEstimateStore();

  const selectedParts = useMemo(() => {
    if (selectedPartIds.length === 0) return [];

    const vehicle = VEHICLES.find((item) => item.brand === selectedBrand && item.model === selectedModel);
    if (!vehicle) {
      return selectedPartIds.map((partId) => createFallbackPart(partId));
    }

    const parts = Object.values(VEHICLE_PARTS_BY_TYPE[vehicle.vehicleType]).flat();
    const partsById = new Map(parts.map((part) => [part.id, part]));
    const partsByEnName = new Map(parts.map((part) => [normalizeKey(part.part_name_en), part]));

    return selectedPartIds.map((partId) => {
      const resolvedPartId = resolvePartId(partId, vehicle.vehicleType);
      const directMatch = partsById.get(resolvedPartId);
      if (directMatch) return directMatch;

      const normalizedMatch = partsByEnName.get(normalizeKey(partId));
      if (normalizedMatch) return normalizedMatch;

      return createFallbackPart(partId);
    });
  }, [selectedBrand, selectedModel, selectedPartIds]);

  if (selectedParts.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {selectedParts.map((part) => (
        <DamageDetailCard key={part.id} part={part} onClose={() => removeSelectedPartId(part.id)} />
      ))}
    </div>
  );
}
