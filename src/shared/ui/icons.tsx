import * as React from "react";

import { cn } from "@/shared/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement>;

export const GoogleIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...props}>
    <path d="M21.4998 12.1999C21.4998 11.4599 21.4386 10.9199 21.306 10.3599H12.6836V13.6998H17.7447C17.6427 14.5299 17.0917 15.7799 15.8672 16.6198L15.8501 16.7316L18.5763 18.8014L18.7652 18.8199C20.4998 17.2499 21.4998 14.9398 21.4998 12.1999Z" fill="#4285F4" />
    <path d="M12.6825 20.9999C15.1621 20.9999 17.2436 20.1998 18.7641 18.8198L15.8661 16.6198C15.0907 17.1498 14.0498 17.5198 12.6825 17.5198C10.254 17.5198 8.19281 15.9498 7.45806 13.7798L7.35036 13.7887L4.51559 15.9388L4.47852 16.0398C5.98869 18.9798 9.0907 20.9999 12.6825 20.9999Z" fill="#34A853" />
    <path d="M7.45911 13.7803C7.26524 13.2203 7.15304 12.6203 7.15304 12.0003C7.15304 11.3803 7.26524 10.7803 7.44891 10.2203L7.44378 10.101L4.57347 7.9165L4.47956 7.96028C3.85714 9.1803 3.5 10.5503 3.5 12.0003C3.5 13.4503 3.85714 14.8203 4.47956 16.0403L7.45911 13.7803Z" fill="#FBBC05" />
    <path d="M12.6831 6.47998C14.4075 6.47998 15.5708 7.20998 16.234 7.82002L18.8259 5.34C17.2341 3.89 15.1626 3 12.6831 3C9.09122 3 5.98918 5.01999 4.479 7.95997L7.44836 10.22C8.19332 8.05 10.2545 6.47998 12.6831 6.47998Z" fill="#EB4335" />
  </svg>
));
GoogleIcon.displayName = "GoogleIcon";

export const NaverIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} viewBox="0 0 16 14" className={cn("h-4 w-4", className)} aria-hidden="true" {...props}>
    <path d="M16 0V14H10.6309L5.36913 6.95167V14H0V0H5.36913L10.6309 7.33005V0H16Z" fill="currentColor" />
  </svg>
));
NaverIcon.displayName = "NaverIcon";

export const KakaoIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12.5001 3C7.52919 3 3.5 6.15002 3.5 10.035C3.5 12.4512 5.05841 14.5812 7.43154 15.8481L6.43304 19.5391C6.34482 19.8652 6.71343 20.1252 6.99648 19.9362L11.3734 17.0131C11.7427 17.0491 12.1181 17.0702 12.5001 17.0702C17.4705 17.0702 21.5 13.9203 21.5 10.035C21.5 6.15002 17.4705 3 12.5001 3Z"
    />
  </svg>
));
KakaoIcon.displayName = "KakaoIcon";
