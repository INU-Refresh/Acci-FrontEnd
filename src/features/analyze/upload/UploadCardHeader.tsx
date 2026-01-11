import { CloseIcon } from "@/shared/ui/icons";

type UploadCardHeaderProps = {
  title: string;
  onCancel?: () => void;
};

export function UploadCardHeader({ title, onCancel }: UploadCardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-body7 md:text-body3 text-gray-900">{title}</h2>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-1 rounded bg-gray-50 px-2 py-1 text-gray-400"
        >
          <CloseIcon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          <span className="text-body11 font-medium md:text-body9">업로드 취소</span>
        </button>
      )}
    </div>
  );
}
