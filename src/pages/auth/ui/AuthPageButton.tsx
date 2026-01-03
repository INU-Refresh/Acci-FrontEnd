import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

export default function AuthPageButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button type="button" className={cn("w-72 px-4 py-3 text-sm font-medium leading-5", className)} {...props} />
  );
}
