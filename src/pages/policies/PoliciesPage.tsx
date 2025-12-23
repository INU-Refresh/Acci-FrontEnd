/**
 * DO NOT REMOVE
 * 서비스 이용약관, 개인정보 처리방침, 쿠키 정책 페이지
 * 이 페이지는 서비스 이용약관, 개인정보 처리방침, 쿠키 정책 페이지를 표시하는 페이지입니다.
 */

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export default function PoliciesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">정책</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/policies/terms-of-service">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <CardTitle>서비스 이용약관</CardTitle>
              <CardDescription>Acci 서비스를 이용하시기 전에 반드시 읽어주세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">서비스 이용에 관한 권리, 의무 및 책임사항을 규정합니다.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/policies/privacy-policy">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <CardTitle>개인정보 처리방침</CardTitle>
              <CardDescription>수집하는 개인정보의 항목 및 처리 목적에 대해 안내합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">개인정보 보호법에 따라 수집·이용하는 개인정보 항목과 목적을 안내합니다.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/policies/cookie-policy">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <CardTitle>쿠키 정책</CardTitle>
              <CardDescription>사용하는 쿠키의 종류 및 목적에 대해 안내합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">서비스에서 사용하는 쿠키의 종류, 목적 및 관리 방법을 안내합니다.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
