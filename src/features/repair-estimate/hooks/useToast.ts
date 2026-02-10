import { useState, useCallback } from "react";

interface Toast {
  message: string;
  visible: boolean;
}

export const useToast = () => {
  const [toast, setToast] = useState<Toast>({ message: "", visible: false });

  const showToast = useCallback((message: string, duration = 3000) => {
    setToast({ message, visible: true });
    const timer = setTimeout(() => {
      setToast({ message: "", visible: false });
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return {
    toast,
    showToast,
  };
};
