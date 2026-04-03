import { render, screen } from "@testing-library/react";

import PoliciesPage from "./PoliciesPage";

jest.mock("@/widgets/repair-estimate/BackButton", () => ({
  BackButton: ({ href }: { href: string }) => (
    <a data-testid="back-button" href={href}>
      Back
    </a>
  ),
}));

describe("PoliciesPage", () => {
  it("페이지 제목과 뒤로가기 버튼을 렌더링한다", () => {
    render(<PoliciesPage />);

    expect(screen.getByRole("heading", { name: "정책", level: 1 })).toBeInTheDocument();
    
    const backButton = screen.getByTestId("back-button");
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("href", "/");
  });

  it("3개의 정책 링크 카드를 정확한 내용과 함께 렌더링한다", () => {
    render(<PoliciesPage />);

    // 1. 서비스 이용약관 확인
    const termsLink = screen.getByRole("link", { name: /서비스 이용약관/i });
    expect(termsLink).toHaveAttribute("href", "/policies/terms-of-service");
    expect(screen.getByText("Acci 서비스를 이용하시기 전에 반드시 읽어주세요.")).toBeInTheDocument();

    // 2. 개인정보 처리방침 확인
    const privacyLink = screen.getByRole("link", { name: /개인정보 처리방침/i });
    expect(privacyLink).toHaveAttribute("href", "/policies/privacy-policy");
    expect(screen.getByText("수집하는 개인정보의 항목 및 처리 목적에 대해 안내합니다.")).toBeInTheDocument();

    // 3. 쿠키 정책 확인
    const cookieLink = screen.getByRole("link", { name: /쿠키 정책/i });
    expect(cookieLink).toHaveAttribute("href", "/policies/cookie-policy");
    expect(screen.getByText("사용하는 쿠키의 종류 및 목적에 대해 안내합니다.")).toBeInTheDocument();
  });
});
