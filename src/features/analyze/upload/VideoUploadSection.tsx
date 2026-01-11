"use client";

import { UploadCancelModal } from "@/features/analyze/upload/UploadCancelModal";
import { UploadLoading } from "@/features/analyze/upload/UploadLoading";
import { UploadReadyCard } from "@/features/analyze/upload/UploadReadyCard";
import { VideoUploadCard } from "@/features/analyze/upload/VideoUploadCard";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type UploadState = "idle" | "uploading" | "ready";

export function VideoUploadSection() {
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const resetUpload = () => {
    setUploadState("idle");
    setUploadProgress(0);
    setUploadError(null);
    setSelectedFileName(null);
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setUploadState("uploading");
    setUploadProgress(0);
  };

  useEffect(() => {
    if (uploadState !== "uploading" || uploadProgress >= 100) {
      return;
    }

    const timer = window.setTimeout(() => {
      setUploadProgress((prev) => {
        const nextValue = Math.min(prev + 10, 100);
        // 더미 구현부분 -> 실제 API 업로드 로직으로 대체 필요
        // 부가적인 이펙트 방지를 위해 setUploadState를 여기서 호출
        if (nextValue >= 100) {
          setUploadState("ready");
        }
        return nextValue;
      });
    }, 280);

    return () => window.clearTimeout(timer);
  }, [uploadProgress, uploadState]);

  return (
    <div className="flex w-full flex-col items-center gap-4 md:gap-6">
      {uploadState === "uploading" && <UploadLoading progress={uploadProgress} onCancel={handleCancelRequest} />}
      {uploadState === "ready" && <UploadReadyCard onCancel={handleCancelRequest} />}
      {uploadState === "idle" && <VideoUploadCard onFileChange={handleFileChange} fileInputRef={fileInputRef} errorMessage={uploadError} />}
      {uploadState === "ready" && (
        <div className="w-full max-w-xl md:hidden">
          <button type="button" className="w-full rounded-lg bg-gray-900 py-3 text-body7 text-white">
            AI 분석하기
          </button>
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
