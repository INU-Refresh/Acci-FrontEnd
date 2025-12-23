/**
 * DO NOT REMOVE
 * 쿠키 정책 페이지
 * 이 페이지는 쿠키 정책 페이지를 표시하는 페이지입니다.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/policies" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← 정책 목록으로 돌아가기
      </Link>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-3xl">쿠키 정책</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">최종 수정일: 2026년 1월 1일</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">제1조 (쿠키의 사용 목적)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              Acci(이하 &apos;회사&apos;)는 이용자에게 개인화되고 맞춤화된 서비스를 제공하기 위하여 쿠키를 이용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 이용자의
              브라우저에 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다.
            </p>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>회사는 쿠키를 다음의 목적을 위해 사용합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>로그인 상태 유지 및 세션 관리</li>
                <li>보안을 위한 인증 토큰 저장</li>
                <li>서비스 이용 패턴 및 방문 빈도 파악을 통한 서비스 개선</li>
                <li>이용자의 접속 빈도 및 방문 시간 분석</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제2조 (쿠키의 종류 및 사용 기간)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 다음과 같은 종류의 쿠키를 사용합니다:</p>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="font-semibold">1. 필수 쿠키 (Essential Cookies)</p>
                  <p className="ml-4 mt-1">
                    서비스 제공을 위해 반드시 필요한 쿠키입니다. 이러한 쿠키는 서비스의 핵심 기능을 제공하기 위해 사용되며, 이를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
                  </p>
                  <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                    <li>
                      <strong>refreshToken:</strong> 사용자 인증을 위한 리프레시 토큰 저장
                    </li>
                    <li>
                      <strong>보유기간:</strong> 로그아웃 시 또는 쿠키 만료 시까지
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">2. 분석 쿠키 (Analytics Cookies)</p>
                  <p className="ml-4 mt-1">서비스 이용 통계 및 분석을 목적으로 사용되는 쿠키입니다.</p>
                  <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                    <li>
                      <strong>보유기간:</strong> 브라우저 세션 종료 시 또는 최대 1년
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제3조 (쿠키의 설치 및 거부)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저 설정을 통해 쿠키 허용, 쿠키 차단 등의 설정을 할 수 있습니다.</p>
              <p className="mt-2">② 쿠키 설치 허용 여부를 지정하는 방법(인터넷 익스플로러의 경우)은 다음과 같습니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>
                  도구 메뉴 {">"} 인터넷 옵션 {">"} 개인정보 탭 {">"} 설정
                </li>
                <li>상단의 슬라이더를 움직여 쿠키 허용 수준을 조정</li>
              </ul>
              <p className="mt-3">③ 다만, 쿠키 설치를 거부할 경우 서비스 이용에 어려움이 있을 수 있으며, 일부 서비스는 정상적으로 제공되지 않을 수 있습니다.</p>
              <p className="mt-2">④ 특히 필수 쿠키의 경우, 이를 거부할 경우 로그인이 불가능하거나 서비스의 핵심 기능을 이용할 수 없습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제4조 (제3자 쿠키)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 현재 제3자 쿠키를 사용하지 않습니다. 향후 제3자 쿠키를 사용하게 될 경우, 본 정책을 통해 사전에 고지하겠습니다.</p>
              <p>② 제3자 쿠키란 회사의 도메인이 아닌 다른 도메인에서 설정하는 쿠키를 의미합니다. 이러한 쿠키는 주로 광고, 분석, 소셜 미디어 플러그인 등의 목적으로 사용됩니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제5조 (쿠키 정책의 변경)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              이 쿠키 정책은 2026년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할
              것입니다.
            </p>
          </section>

          <section className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">본 쿠키 정책에 명시되지 않은 사항은 관련 법령 및 회사의 개인정보 처리방침에 따릅니다.</p>
          </section>

          {/* English Version */}
          <section className="pt-8 mt-8 border-t-2">
            <h2 className="text-2xl font-bold mb-6">Cookie Policy (English)</h2>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: January 1, 2026</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 1 (Purpose of Cookie Use)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                Acci (hereinafter referred to as the &quot;Company&quot;) uses cookies to provide users with personalized and customized services. Cookies are very small text files
                sent by the server used to operate the website to the user&apos;s browser and stored on the user&apos;s computer hard disk.
              </p>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>The Company uses cookies for the following purposes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Maintaining login status and session management</li>
                  <li>Storing authentication tokens for security</li>
                  <li>Service improvement through understanding service usage patterns and visit frequency</li>
                  <li>Analysis of user access frequency and visit time</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 2 (Types and Duration of Cookie Use)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company uses the following types of cookies:</p>
                <div className="mt-3 space-y-4">
                  <div>
                    <p className="font-semibold">1. Essential Cookies</p>
                    <p className="ml-4 mt-1">
                      These are cookies that are absolutely necessary for service provision. These cookies are used to provide core functions of the service, and refusing them may
                      restrict service use.
                    </p>
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>
                        <strong>refreshToken:</strong> Storage of refresh token for user authentication
                      </li>
                      <li>
                        <strong>Retention Period:</strong> Until logout or cookie expiration
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">2. Analytics Cookies</p>
                    <p className="ml-4 mt-1">Cookies used for service usage statistics and analysis purposes.</p>
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>
                        <strong>Retention Period:</strong> Until browser session ends or up to 1 year
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 3 (Cookie Installation and Refusal)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① Users have the right to choose whether to install cookies. They can set cookie permissions, block cookies, etc. through web browser settings.</p>
                <p className="mt-2">② The method for specifying whether to allow cookie installation (in the case of Internet Explorer) is as follows:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>
                    Tools menu {">"} Internet Options {">"} Privacy tab {">"} Settings
                  </li>
                  <li>Adjust cookie permission level by moving the slider at the top</li>
                </ul>
                <p className="mt-3">
                  ③ However, if you refuse cookie installation, you may experience difficulties using the service, and some services may not be provided normally.
                </p>
                <p className="mt-2">④ In particular, if you refuse essential cookies, you may not be able to log in or use core functions of the service.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 4 (Third-Party Cookies)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① The Company does not currently use third-party cookies. If third-party cookies are to be used in the future, we will notify users in advance through this
                  policy.
                </p>
                <p>
                  ② Third-party cookies refer to cookies set by domains other than the Company&apos;s domain. These cookies are mainly used for advertising, analysis, social media
                  plugins, etc.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 5 (Changes to Cookie Policy)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This Cookie Policy takes effect from January 1, 2026, and if there are additions, deletions, or corrections to changes in accordance with laws and policies, the
                changes will be notified through announcements 7 days before the implementation date.
              </p>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Matters not specified in this Cookie Policy shall be in accordance with relevant laws and the Company&apos;s Privacy Policy.
              </p>
            </section>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
