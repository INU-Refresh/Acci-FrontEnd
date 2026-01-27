"use client";

import { uploadAnalysis } from "@/features/analyze/upload/api/upload-analysis";
import { UploadCancelModal } from "@/features/analyze/upload/UploadCancelModal";
import { UploadLoading } from "@/features/analyze/upload/UploadLoading";
import { UploadReadyCard } from "@/features/analyze/upload/UploadReadyCard";
import { VideoUploadCard } from "@/features/analyze/upload/VideoUploadCard";
import type React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type UploadState = "idle" | "uploading" | "ready";

export function VideoUploadSection() {
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const uploadAbortRef = useRef<AbortController | null>(null);

  const resetUpload = () => {
    uploadAbortRef.current?.abort();
    uploadAbortRef.current = null;
    setUploadState("idle");
    setUploadProgress(0);
    setUploadError(null);
    setSelectedFileName(null);
    setPreviewUrl((currentUrl) => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
      return null;
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancelRequest = () => {
    setIsCancelModalOpen(true);
  };

  const handleCancelClose = () => {
    setIsCancelModalOpen(false);
  };

  const handleCancelConfirm = () => {
    setIsCancelModalOpen(false);
    resetUpload();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const allowedExtensions = [".mp4", ".avi"];
    const lowerName = file.name.toLowerCase();
    const hasAllowedExtension = allowedExtensions.some((ext) => lowerName.endsWith(ext));
    if (!hasAllowedExtension) {
      setUploadError("MP4 또는 AVI 파일만 업로드할 수 있어요.");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
    setUploadError(null);
    setSelectedFileName(file.name);
    setPreviewUrl((currentUrl) => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
      return URL.createObjectURL(file);
    });
    setUploadState("uploading");
    setUploadProgress(0);
    uploadAbortRef.current?.abort();
    const controller = new AbortController();
    uploadAbortRef.current = controller;

    try {
      const response = await uploadAnalysis({
        file,
        signal: controller.signal,
        onProgress: (percent) => setUploadProgress(percent),
      });

      setUploadProgress(100);
      setUploadState("ready");
      // TODO [Minjun]: 분석 시작 단계에서 response.analysisId를 활용해 결과 조회 라우팅 필요
    } catch (error) {
      if ((error as { code?: string }).code === "ERR_CANCELED") {
        return;
      }
      setUploadError("업로드에 실패했습니다. 다시 시도해주세요.");
      setUploadState("idle");
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex w-full flex-col items-center gap-4 md:gap-6">
      {uploadState === "uploading" && <UploadLoading progress={uploadProgress} onCancel={handleCancelRequest} />}
      {uploadState === "ready" && <UploadReadyCard onCancel={handleCancelRequest} previewUrl={previewUrl} />}
      {uploadState === "idle" && <VideoUploadCard onFileChange={handleFileChange} fileInputRef={fileInputRef} errorMessage={uploadError} />}
      {uploadState === "ready" && (
        <div className="w-full max-w-xl md:hidden">
          <Link href="/analyze/loading" className="block w-full rounded-lg bg-gray-900 py-3 text-body7 text-white text-center">
            AI 분석하기
          </Link>
        </div>
      )}
      <UploadCancelModal
        open={isCancelModalOpen}
        fileName={selectedFileName}
        onClose={handleCancelClose}
        onConfirm={handleCancelConfirm}
      />
    </div>
  );
}
