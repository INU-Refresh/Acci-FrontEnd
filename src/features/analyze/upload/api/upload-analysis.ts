import axiosInstance from "@/shared/api/axios-instance";
import type { AxiosProgressEvent } from "axios";

type UploadAnalysisResponse = {
  analysisId: string;
  analysisStatus: string;
  isCompleted: boolean;
};

type UploadAnalysisParams = {
  file: File;
  onProgress?: (percent: number) => void;
  signal?: AbortSignal;
};

export async function uploadAnalysis({ file, onProgress, signal }: UploadAnalysisParams) {
  const formData = new FormData();
  formData.append("video", file);

  const response = await axiosInstance.post<UploadAnalysisResponse>("/api/v1/analyses", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    signal,
    onUploadProgress: (event: AxiosProgressEvent) => {
      if (!event.total) {
        return;
      }
      const percent = Math.min(Math.round((event.loaded / event.total) * 100), 100);
      onProgress?.(percent);
    },
  });

  return response.data;
}
