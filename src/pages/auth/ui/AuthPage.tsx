"use client";

import AuthPageLeftSide from "@/pages/auth/ui/AuthPageLeftSide";
import AuthPageRightSide from "@/pages/auth/ui/AuthPageRightSide";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background md:flex-row md:items-stretch">
      <AuthPageLeftSide />
      <AuthPageRightSide />
    </div>
  );
}
