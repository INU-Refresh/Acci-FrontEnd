import { cn } from "@/shared/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
};

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <svg className={cn("h-16 w-16 animate-spin", className)} viewBox="0 0 64 64" role="img" aria-label="로딩 중">
      <defs>
        <linearGradient id="sharedSpinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary-700)" />
          <stop offset="100%" stopColor="var(--primary-400)" />
        </linearGradient>
      </defs>
      {/* 원형 로딩 진행을 표현 */}
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="url(#sharedSpinnerGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        // 60% 진행 느낌의 아크 길이
        strokeDasharray="98 65"
      />
    </svg>
  );
}
