import { useState, useCallback, ChangeEvent } from "react";

interface UseImageUploadProps {
  maxFiles?: number;
  onExceedLimit?: (message: string) => void;
}

export const useImageUpload = ({ maxFiles = 5, onExceedLimit }: UseImageUploadProps = {}) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        if (files.length > maxFiles) {
          onExceedLimit?.(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
          setUploadedImages(files.slice(0, maxFiles));
        } else {
          setUploadedImages(files);
        }
      }
    },
    [maxFiles, onExceedLimit],
  );

  const clearImages = useCallback(() => {
    setUploadedImages([]);
  }, []);

  const removeImage = useCallback((index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return {
    uploadedImages,
    handleFileChange,
    clearImages,
    removeImage,
  };
};
