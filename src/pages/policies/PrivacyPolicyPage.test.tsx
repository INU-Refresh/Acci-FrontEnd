import { render, screen } from "@testing-library/react";

import PrivacyPolicyPage from "./PrivacyPolicyPage";

describe("PrivacyPolicyPage", () => {
  it("페이지 제목을 올바르게 렌더링한다", () => {
    render(<PrivacyPolicyPage />);

    // CardTitle로 렌더링되는 제목 확인
    expect(screen.getByText("개인정보 처리방침", { selector: "h3, div, p, span, *:not(h2)" })).toBeInTheDocument();
  });

  it("뒤로가기 링크가 올바른 경로를 가리킨다", () => {
    render(<PrivacyPolicyPage />);

    const backLink = screen.getByRole("link", { name: /정책 목록으로 돌아가기/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/policies");
  });

  it("주요 조항 제목들이 렌더링된다", () => {
    render(<PrivacyPolicyPage />);

    expect(screen.getByText("제1조 (개인정보의 처리목적)")).toBeInTheDocument();
    expect(screen.getByText("제2조 (개인정보의 처리 및 보유기간)")).toBeInTheDocument();
    expect(screen.getByText("제3조 (처리하는 개인정보의 항목)")).toBeInTheDocument();
    expect(screen.getByText("제4조 (개인정보의 제3자 제공)")).toBeInTheDocument();
  });
});
