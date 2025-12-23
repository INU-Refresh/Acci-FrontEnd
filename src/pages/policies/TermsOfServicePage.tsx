/**
 * DO NOT REMOVE
 * 서비스 이용약관 페이지
 * 이 페이지는 서비스 이용약관 페이지를 표시하는 페이지입니다.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/policies" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← 정책 목록으로 돌아가기
      </Link>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-3xl">서비스 이용약관</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">최종 수정일: 2026년 1월 1일</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">제1조 (목적)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              본 약관은 Acci(이하 &apos;회사&apos;)가 제공하는 교통사고 영상 분석 서비스(이하 &apos;서비스&apos;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타
              필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제2조 (정의)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① &apos;서비스&apos;란 교통사고 영상을 AI 기술로 분석하여 과실비율, 분석이유, 관련 판례 등을 제공하는 서비스를 의미합니다.</p>
              <p>② &apos;이용자&apos;란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 의미합니다.</p>
              <p>③ &apos;회원&apos;이란 OAuth를 통해 회사에 회원등록을 하고 서비스를 이용하는 자를 의미합니다.</p>
              <p>④ &apos;콘텐츠&apos;란 이용자가 서비스를 통해 업로드한 교통사고 영상 및 분석 결과를 의미합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제3조 (약관의 게시와 개정)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</p>
              <p>② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
              <p>③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제4조 (회원가입 및 계정 관리)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 이용자는 OAuth(소셜 로그인)를 통해 회원가입을 할 수 있습니다.</p>
              <p>② 회원은 자신의 계정 정보를 안전하게 관리할 책임이 있으며, 계정의 부정 사용으로 인한 모든 책임은 회원에게 있습니다.</p>
              <p>③ 회원은 언제든지 서비스 내 설정을 통해 회원 탈퇴를 요청할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제5조 (서비스의 제공 및 변경)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>교통사고 영상 업로드 및 분석 서비스</li>
                <li>AI 기반 과실비율 산정 서비스</li>
                <li>분석 결과 및 근거 제공 서비스</li>
                <li>관련 판례 검색 및 제공 서비스</li>
                <li>분쟁심의 지원 서비스</li>
              </ul>
              <p>② 회사는 서비스의 내용, 제공 방법 등을 변경할 수 있으며, 변경 시 사전에 공지합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제6조 (서비스 이용 제한)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>허위 또는 조작된 영상 자료를 업로드하는 행위</li>
                <li>타인의 권리를 침해하는 영상을 업로드하는 행위</li>
                <li>서비스의 안정적 운영을 방해하는 행위</li>
                <li>법령 또는 본 약관에 위배되는 행위</li>
                <li>기타 회사가 부적절하다고 판단하는 행위</li>
              </ul>
              <p>② 회사는 전항의 규정을 위반한 이용자에 대해 서비스 이용을 제한하거나 계약을 해지할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제7조 (분석 결과의 성격 및 책임)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 본 서비스에서 제공하는 과실비율 분석 결과는 AI 기술을 활용한 참고용 정보이며, 법적 효력이나 공식적인 판단을 보장하지 않습니다.</p>
              <p>② 분석 결과는 실제 법원의 판단, 보험회사의 과실비율 산정, 교통사고처리특례법상 과실비율과 다를 수 있습니다.</p>
              <p>③ 이용자는 분석 결과를 참고하여 최종적인 법적 판단은 전문가의 조언을 구하시기 바랍니다.</p>
              <p>④ 회사는 분석 결과로 인한 어떠한 법적 책임도 지지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제8조 (개인정보 보호)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              회사는 이용자의 개인정보 보호를 위하여 노력합니다. 이용자의 개인정보 보호에 관해서는 관련 법령 및 회사가 정하는 &apos;개인정보 처리방침&apos;에 정한 바에 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제9조 (저작권 및 지적재산권)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 이용자가 업로드한 영상에 대한 저작권은 이용자에게 있습니다.</p>
              <p>② 회사가 제공하는 서비스의 디자인, 로고, 텍스트, 그래픽 등에 대한 저작권 및 지적재산권은 회사에 있습니다.</p>
              <p>③ 이용자는 회사가 제공하는 서비스를 영리 목적으로 사용할 수 없습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제10조 (면책사항)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
              <p>② 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
              <p>
                ③ 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지
                않습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제11조 (분쟁의 해결)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                ① 회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.
              </p>
              <p>② 회사와 이용자 간에 제기된 소송에는 대한민국 법을 적용합니다.</p>
            </div>
          </section>

          <section className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.</p>
          </section>

          {/* English Version */}
          <section className="pt-8 mt-8 border-t-2">
            <h2 className="text-2xl font-bold mb-6">Terms of Service (English)</h2>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: January 1, 2026</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 1 (Purpose)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                These Terms are intended to regulate the rights, obligations, and responsibilities between Acci (hereinafter referred to as the &quot;Company&quot;) and users
                regarding the use of traffic accident video analysis services (hereinafter referred to as the &quot;Service&quot;) provided by the Company, and other necessary
                matters.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 2 (Definitions)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① &quot;Service&quot; means a service that analyzes traffic accident videos using AI technology to provide fault ratios, analysis reasons, related case law, etc.
                </p>
                <p>② &quot;User&quot; means members and non-members who receive services provided by the Company in accordance with these Terms.</p>
                <p>③ &quot;Member&quot; means a person who registers as a member with the Company through OAuth and uses the service.</p>
                <p>④ &quot;Content&quot; means traffic accident videos uploaded by users through the service and analysis results.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 3 (Posting and Amendment of Terms)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company posts the contents of these Terms on the initial screen of the service so that users can easily know them.</p>
                <p>② The Company may amend these Terms to the extent that they do not violate relevant laws.</p>
                <p>
                  ③ When the Company amends the Terms, it shall specify the effective date and reason for amendment and notify them together with the current terms on the initial
                  screen of the service from 7 days before the effective date to the day before the effective date.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 4 (Member Registration and Account Management)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① Users may register as members through OAuth (social login).</p>
                <p>② Members are responsible for safely managing their account information, and members are responsible for all consequences of unauthorized use of accounts.</p>
                <p>③ Members may request withdrawal at any time through settings within the service.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 5 (Provision and Changes of Service)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company provides the following services:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Traffic accident video upload and analysis service</li>
                  <li>AI-based fault ratio calculation service</li>
                  <li>Analysis results and basis provision service</li>
                  <li>Related case law search and provision service</li>
                  <li>Dispute resolution support service</li>
                </ul>
                <p>② The Company may change the content, provision methods, etc. of the service, and will notify users in advance when changes are made.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 6 (Restriction on Service Use)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① Users shall not perform the following acts:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Uploading false or manipulated video materials</li>
                  <li>Uploading videos that infringe on the rights of others</li>
                  <li>Acts that interfere with stable operation of the service</li>
                  <li>Acts that violate laws or these Terms</li>
                  <li>Other acts deemed inappropriate by the Company</li>
                </ul>
                <p>② The Company may restrict service use or terminate contracts for users who violate the provisions of the preceding paragraph.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 7 (Nature and Responsibility of Analysis Results)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① The fault ratio analysis results provided by this service are reference information using AI technology and do not guarantee legal effect or official judgment.
                </p>
                <p>
                  ② Analysis results may differ from actual court judgments, insurance company fault ratio calculations, and fault ratios under the Special Act on Handling of
                  Traffic Accidents.
                </p>
                <p>③ Users are advised to seek expert advice for final legal judgment by referring to analysis results.</p>
                <p>④ The Company is not responsible for any legal liability arising from analysis results.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 8 (Personal Information Protection)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Company endeavors to protect users&apos; personal information. Matters regarding the protection of users&apos; personal information shall be in accordance with
                relevant laws and the &quot;Privacy Policy&quot; set by the Company.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 9 (Copyright and Intellectual Property Rights)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① Copyright for videos uploaded by users belongs to the users.</p>
                <p>② Copyright and intellectual property rights for designs, logos, texts, graphics, etc. of the services provided by the Company belong to the Company.</p>
                <p>③ Users may not use the services provided by the Company for commercial purposes.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 10 (Disclaimer)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company is exempt from liability for service provision in cases where services cannot be provided due to natural disasters or equivalent force majeure.</p>
                <p>② The Company is not responsible for service disruptions caused by users&apos; fault.</p>
                <p>③ The Company is not responsible for losses of expected profits from using the service, or for damages arising from materials obtained through the service.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 11 (Resolution of Disputes)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① Lawsuits regarding electronic commerce disputes between the Company and users shall be subject to the exclusive jurisdiction of the local court having
                  jurisdiction over the user&apos;s address at the time of filing, or if there is no address, the local court having jurisdiction over the user&apos;s place of
                  residence.
                </p>
                <p>② Korean law shall apply to lawsuits filed between the Company and users.</p>
              </div>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">Matters not specified in these Terms shall be in accordance with relevant laws and commercial practices.</p>
            </section>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
