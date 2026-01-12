import type React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 cursor-pointer" aria-label="닫기" onClick={onClose} />
      <div className="relative w-full max-w-xs">{children}</div>
    </div>
  );
}
