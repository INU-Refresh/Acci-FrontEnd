import { type ChangeEvent } from "react";

type SelectFieldProps = {
  number: number;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
  required?: boolean;
};

export function SelectField({ number, label, placeholder, value, onChange, options, disabled = false, required = true }: SelectFieldProps) {
  return (
    <div className="w-full sm:w-[560px] bg-white rounded-2xl p-6 mb-4">
      <div className="flex gap-4 items-center">
        <div className="bg-gray-300 rounded flex items-center justify-center size-6 shrink-0">
          <span className="text-body9 sm:text-body5 text-white">{number}</span>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <label className="text-body9 sm:text-body5 text-gray-900">
            {label}
            {required && <span className="text-red-500"> *</span>}
          </label>

          <select
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="w-40 text-body9 sm:text-body5 text-gray-300 border-none bg-transparent cursor-pointer focus:outline-none disabled:cursor-not-allowed"
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
