import { type ChangeEvent, useMemo, useState } from "react";

import { DAMAGE_SEVERITY_LABELS } from "@/entities/vehicle";
import type { DamageSeverity, PartInfo } from "@/entities/vehicle/types";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";
import { Select } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

interface DamageDetailCardProps {
  part: PartInfo;
  onClose: () => void;
}

export function DamageDetailCard({ part, onClose }: DamageDetailCardProps) {
  const { damageDetails, setDamageDetails } = useRepairEstimateStore();

  const existingDetail = useMemo(() => damageDetails.find((detail) => detail.part_name_en === part.part_name_en), [damageDetails, part.part_name_en]);

  const [damageSeverity, setDamageSeverity] = useState<DamageSeverity | "">(() => existingDetail?.damage_severity ?? "");
  const [damageLabel, setDamageLabel] = useState(() => existingDetail?.damage_label ?? "");

  const upsertDetail = (nextSeverity: DamageSeverity | "", nextLabel: string) => {
    if (!nextSeverity && !nextLabel) {
      if (existingDetail) {
        setDamageDetails(damageDetails.filter((detail) => detail.part_name_en !== part.part_name_en));
      }
      return;
    }

    const severityToSave = (nextSeverity || existingDetail?.damage_severity || "scratch") as DamageSeverity;

    const nextDetail = {
      part_name_en: part.part_name_en,
      part_name_kr: part.part_name_kr,
      damage_severity: severityToSave,
      damage_label: nextLabel,
    };

    if (existingDetail) {
      setDamageDetails(damageDetails.map((detail) => (detail.part_name_en === part.part_name_en ? nextDetail : detail)));
      return;
    }

    setDamageDetails([...damageDetails, nextDetail]);
  };

  const handleSeverityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextSeverity = event.target.value as DamageSeverity | "";
    setDamageSeverity(nextSeverity);
    upsertDetail(nextSeverity, damageLabel);
  };

  const handleLabelChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextLabel = event.target.value.slice(0, 80);
    setDamageLabel(nextLabel);
    upsertDetail(damageSeverity, nextLabel);
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 mt-4 border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-body7 sm:text-body5 text-gray-900">{part.part_name_kr}</p>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="선택 해제">
          ×
        </button>
      </div>

      <div className="mt-4">
        <Select value={damageSeverity} onChange={handleSeverityChange} className="h-12 bg-gray-50 border-transparent text-gray-700 focus:ring-0">
          <option value="" disabled>
            파손 정도
          </option>
          {Object.entries(DAMAGE_SEVERITY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label as string}
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-4 relative">
        <Textarea
          value={damageLabel}
          onChange={handleLabelChange}
          maxLength={80}
          placeholder="파손 내용과 손상 정도(크기, 길이 등)을 상세히 기입해주세요"
          className="min-h-[50px] bg-gray-50 border-transparent text-gray-700 focus-visible:ring-0"
        />
        <span className="absolute bottom-3 right-3 text-body9 sm:text-body7 text-gray-400">{damageLabel.length}/80</span>
      </div>
    </div>
  );
}
