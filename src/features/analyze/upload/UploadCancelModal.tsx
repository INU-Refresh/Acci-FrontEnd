import { Modal } from "@/shared/ui/modal";

type UploadCancelModalProps = {
  open: boolean;
  fileName?: string | null;
  onClose: () => void;
  onConfirm: () => void;
};

export function UploadCancelModal({ open, fileName, onClose, onConfirm }: UploadCancelModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center">
        <div className="text-gray-700">
          <p className="text-body9 md:text-body7">{fileName ?? "[파일명]"}</p>
          <p className="text-body9 md:text-body7">영상 업로드를 취소할까요?</p>
          <p className="text-body9 text-gray-500">다른 영상으로 업로드할 수 있습니다</p>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-gray-100 px-4 py-2 text-body9 md:text-body7 text-gray-700"
          >
            닫기
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded bg-gray-900 px-4 py-2 text-body9 md:text-body7 text-white"
          >
            업로드 취소하기
          </button>
        </div>
      </div>
    </Modal>
  );
}
