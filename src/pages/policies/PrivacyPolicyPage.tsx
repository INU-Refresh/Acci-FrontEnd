/**
 * DO NOT REMOVE
 * 개인정보 처리방침 페이지
 * 이 페이지는 개인정보 처리방침 페이지를 표시하는 페이지입니다.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/policies" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← 정책 목록으로 돌아가기
      </Link>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-3xl">개인정보 처리방침</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">최종 수정일: 2026년 1월 1일</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">제1조 (개인정보의 처리목적)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              Acci(이하 &apos;회사&apos;)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
              경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                <strong>① 서비스 제공</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>교통사고 영상 분석 서비스 제공</li>
                <li>과실비율 산정 및 분석 결과 제공</li>
                <li>관련 판례 검색 및 제공</li>
                <li>분쟁심의 지원 서비스 제공</li>
              </ul>
              <p className="mt-3">
                <strong>② 회원 관리</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>회원 가입 및 본인 확인</li>
                <li>회원 자격 유지·관리</li>
                <li>서비스 부정 이용 방지</li>
                <li>각종 고지·알림</li>
              </ul>
              <p className="mt-3">
                <strong>③ 서비스 개선 및 신규 서비스 개발</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>서비스 이용 통계 및 분석</li>
                <li>AI 모델 개선을 위한 데이터 활용</li>
                <li>신규 서비스 개발</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제2조 (개인정보의 처리 및 보유기간)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>회원 정보:</strong> 회원 탈퇴 시까지 (단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관)
                </li>
                <li>
                  <strong>업로드된 영상:</strong> 분석 완료 후 30일 또는 회원 탈퇴 시까지 (단, 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관)
                </li>
                <li>
                  <strong>서비스 이용 기록:</strong> 3년 (통신비밀보호법)
                </li>
                <li>
                  <strong>계약 또는 청약철회 등에 관한 기록:</strong> 5년 (전자상거래법)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제3조 (처리하는 개인정보의 항목)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 다음의 개인정보 항목을 처리하고 있습니다:</p>
              <p className="mt-2">
                <strong>회원가입 및 관리</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>필수항목: OAuth 제공자(구글, 카카오 등)로부터 제공받는 이메일, 이름(또는 닉네임), 프로필 사진</li>
                <li>자동 수집 항목: IP주소, 쿠키, 서비스 이용 기록, 접속 로그</li>
              </ul>
              <p className="mt-2">
                <strong>서비스 이용 과정에서 수집</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>업로드한 교통사고 영상 파일</li>
                <li>분석 요청 시 입력한 사고 정보(사고 일시, 장소 등)</li>
                <li>서비스 이용 기록 및 분석 결과</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제4조 (개인정보의 제3자 제공)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및
                제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
              <p>② 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제5조 (개인정보 처리의 위탁)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>클라우드 서비스 제공업체:</strong> 서버 운영 및 데이터 저장
                </li>
                <li>
                  <strong>AI 분석 서비스 제공업체:</strong> 영상 분석 처리
                </li>
              </ul>
              <p>
                ② 회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독,
                손해배상 등에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제6조 (정보주체의 권리·의무 및 그 행사방법)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>개인정보 처리정지 요구권</li>
                <li>개인정보 열람 요구권</li>
                <li>개인정보 정정·삭제 요구권</li>
                <li>개인정보 처리정지 요구권</li>
              </ul>
              <p>② 제1항에 따른 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
              <p>③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제7조 (개인정보의 파기)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <p>② 개인정보 파기의 절차 및 방법은 다음과 같습니다:</p>
              <p className="mt-2">
                <strong>파기절차</strong>
              </p>
              <p className="ml-4">
                이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
              </p>
              <p className="mt-2">
                <strong>파기방법</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                <li>기록물, 인쇄물, 서면 등: 분쇄하거나 소각</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제8조 (개인정보 보호책임자)</h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
                지정하고 있습니다.
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p>
                  <strong>개인정보 보호책임자</strong>
                </p>
                <p className="mt-1">이름: 임재현, 성민준, 정석환, 김동균, 유찬영</p>
                <p>직책: 매니저</p>
                <p>contact: acciai2025@gmail.com</p>
              </div>
              <p>
                ② 정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제9조 (개인정보의 안전성 확보조치)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">제10조 (개인정보 처리방침 변경)</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              이 개인정보 처리방침은 2026년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
              고지할 것입니다.
            </p>
          </section>

          <section className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">본 개인정보 처리방침에 명시되지 않은 사항은 관련 법령 및 지침에 따릅니다.</p>
          </section>

          {/* English Version */}
          <section className="pt-8 mt-8 border-t-2">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy (English)</h2>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: January 1, 2026</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 1 (Purpose of Personal Information Processing)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                Acci (hereinafter referred to as the &quot;Company&quot;) processes personal information for the following purposes. The personal information being processed will not be used for purposes other than those stated below, and if the purpose of use changes, necessary measures such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act will be implemented.
              </p>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  <strong>① Service Provision</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Traffic accident video analysis service provision</li>
                  <li>Fault ratio calculation and analysis result provision</li>
                  <li>Related case law search and provision</li>
                  <li>Dispute resolution support service provision</li>
                </ul>
                <p className="mt-3">
                  <strong>② Member Management</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Member registration and identity verification</li>
                  <li>Member qualification maintenance and management</li>
                  <li>Prevention of fraudulent use of services</li>
                  <li>Various notices and notifications</li>
                </ul>
                <p className="mt-3">
                  <strong>③ Service Improvement and New Service Development</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Service usage statistics and analysis</li>
                  <li>Data utilization for AI model improvement</li>
                  <li>New service development</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 2 (Processing and Retention Period of Personal Information)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company processes and retains personal information within the period of retention and use of personal information in accordance with laws and regulations, or within the period of retention and use of personal information agreed upon when collecting personal information from the information subject.</p>
                <p>② The processing and retention period for each type of personal information is as follows:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>Member Information:</strong> Until member withdrawal (However, stored for the required period if preservation is required by relevant laws)
                  </li>
                  <li>
                    <strong>Uploaded Videos:</strong> 30 days after analysis completion or until member withdrawal (However, stored for the required period if preservation is required by laws)
                  </li>
                  <li>
                    <strong>Service Usage Records:</strong> 3 years (Act on Protection of Communications Secrets)
                  </li>
                  <li>
                    <strong>Records on Contracts or Subscription Withdrawal:</strong> 5 years (Electronic Commerce Act)
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 3 (Items of Personal Information Processed)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company processes the following personal information items:</p>
                <p className="mt-2">
                  <strong>Member Registration and Management</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Required Items: Email, name (or nickname), profile picture received from OAuth providers (Google, Kakao, etc.)</li>
                  <li>Automatically Collected Items: IP address, cookies, service usage records, access logs</li>
                </ul>
                <p className="mt-2">
                  <strong>Collected During Service Use</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Uploaded traffic accident video files</li>
                  <li>Accident information entered when requesting analysis (accident date/time, location, etc.)</li>
                  <li>Service usage records and analysis results</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 4 (Provision of Personal Information to Third Parties)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① The Company processes the information subject&apos;s personal information only within the scope stated in Article 1 (Purpose of Personal Information Processing), and provides personal information to third parties only when it falls under Article 17 and Article 18 of the Personal Information Protection Act, such as with the information subject&apos;s consent or special provisions of laws.
                </p>
                <p>② The Company does not provide users&apos; personal information to external parties in principle. However, exceptions are made in the following cases:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>When the user has given prior consent</li>
                  <li>When required by law or when investigative agencies request it in accordance with legally prescribed procedures and methods for investigation purposes</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 5 (Outsourcing of Personal Information Processing)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company outsources personal information processing tasks as follows for smooth personal information business processing:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>Cloud Service Providers:</strong> Server operation and data storage
                  </li>
                  <li>
                    <strong>AI Analysis Service Providers:</strong> Video analysis processing
                  </li>
                </ul>
                <p>
                  ② When entering into outsourcing contracts, the Company specifies in contracts or documents matters such as prohibition of personal information processing beyond the purpose of performing outsourced tasks, technical and administrative protection measures, restrictions on re-outsourcing, management and supervision of trustees, and compensation for damages in accordance with Article 26 of the Personal Information Protection Act, and supervises whether trustees process personal information safely.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 6 (Rights and Obligations of Information Subjects and How to Exercise Them)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① Information subjects may exercise the following rights related to personal information protection against the Company at any time:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Right to request suspension of personal information processing</li>
                  <li>Right to request access to personal information</li>
                  <li>Right to request correction or deletion of personal information</li>
                  <li>Right to request suspension of personal information processing</li>
                </ul>
                <p>② Rights under Paragraph 1 may be exercised against the Company through writing, email, facsimile transmission (FAX), etc., and the Company will take action without delay.</p>
                <p>③ If an information subject requests correction or deletion of errors in personal information, the Company will not use or provide the relevant personal information until the correction or deletion is completed.</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 7 (Destruction of Personal Information)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>① The Company destroys personal information without delay when it becomes unnecessary, such as when the retention period of personal information has elapsed or the processing purpose has been achieved.</p>
                <p>② The procedures and methods for destroying personal information are as follows:</p>
                <p className="mt-2">
                  <strong>Destruction Procedure</strong>
                </p>
                <p className="ml-4">
                  Information entered by users is moved to a separate database (or separate documents in case of paper) after the purpose is achieved, and destroyed immediately or after being stored for a certain period in accordance with internal policies and other relevant laws.
                </p>
                <p className="mt-2">
                  <strong>Destruction Method</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Electronic file format: Deletion using technical methods that cannot reproduce records</li>
                  <li>Records, printed materials, written documents, etc.: Shredding or incineration</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 8 (Personal Information Protection Officer)</h3>
              <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>
                  ① The Company is responsible for overall personal information processing tasks and has designated a personal information protection officer as follows to handle complaints and damage relief related to personal information processing.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <p>
                    <strong>Personal Information Protection Officer</strong>
                  </p>
                  <p className="mt-1">Name: Lim Jaehyun, Seong Minjun, Jeong Seokhwan, Kim Donggyun, Yu Chanyoung</p>
                  <p>Position: Manager</p>
                  <p>Contact: acciai2025@gmail.com</p>
                </div>
                <p>
                  ② Information subjects may contact the personal information protection officer for all inquiries, complaint handling, and damage relief related to personal information protection that occur while using the Company&apos;s services.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 9 (Measures to Ensure Personal Information Security)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-2">The Company takes the following measures to ensure personal information security:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
                <li>Administrative measures: Establishment and implementation of internal management plans, regular employee training, etc.</li>
                <li>Technical measures: Management of access rights to personal information processing systems, installation of access control systems, encryption of unique identification information, installation of security programs</li>
                <li>Physical measures: Access control to computer rooms, data storage rooms, etc.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Article 10 (Changes to Privacy Policy)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This Privacy Policy takes effect from January 1, 2026, and if there are additions, deletions, or corrections to changes in accordance with laws and policies, the changes will be notified through announcements 7 days before the implementation date.
              </p>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">Matters not specified in this Privacy Policy shall be in accordance with relevant laws and guidelines.</p>
            </section>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
