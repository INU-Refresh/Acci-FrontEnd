"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeftIcon } from "@/shared/icons";

interface BackButtonProps {
  href?: string;
}

export function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  const content = (
    <>
      <ChevronLeftIcon className="transition-transform group-hover:-translate-x-0.5 sm:w-5 sm:h-5 w-4 h-4" />
      <span>뒤로가기</span>
    </>
  );

  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-0 pt-6">
      <div className="w-full max-w-[840px]">
        {href ? (
          <Link
            href={href}
            className="flex items-center gap-1.5 text-body9 sm:text-body7 text-gray-500 hover:text-gray-900 active:text-gray-700 transition-colors cursor-pointer group"
            aria-label="뒤로가기"
          >
            {content}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-body9 sm:text-body7 text-gray-500 hover:text-gray-900 active:text-gray-700 transition-colors cursor-pointer group"
            aria-label="뒤로가기"
          >
            {content}
          </button>
        )}
      </div>
    </section>
  );
}
