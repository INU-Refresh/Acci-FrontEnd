import { render, screen } from "@testing-library/react";

import TermsOfServicePage from "./TermsOfServicePage";

describe("TermsOfServicePage", () => {
  it("페이지 제목을 올바르게 렌더링한다", () => {
    render(<TermsOfServicePage />);

    expect(screen.getByText("서비스 이용약관", { selector: "h3, div, p, span, *:not(h2)" })).toBeInTheDocument();
  });

  it("뒤로가기 링크가 올바른 경로를 가리킨다", () => {
    render(<TermsOfServicePage />);

    const backLink = screen.getByRole("link", { name: /정책 목록으로 돌아가기/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/policies");
  });

  it("주요 조항 제목들이 렌더링된다", () => {
    render(<TermsOfServicePage />);

    expect(screen.getByText("제1조 (목적)")).toBeInTheDocument();
    expect(screen.getByText("제2조 (정의)")).toBeInTheDocument();
    expect(screen.getByText("제3조 (약관의 게시와 개정)")).toBeInTheDocument();
    expect(screen.getByText("제4조 (회원가입 및 계정 관리)")).toBeInTheDocument();
    expect(screen.getByText("제5조 (서비스의 제공 및 변경)")).toBeInTheDocument();
    expect(screen.getByText("제6조 (서비스 이용 제한)")).toBeInTheDocument();
    expect(screen.getByText("제7조 (분석 결과의 성격 및 책임)")).toBeInTheDocument();
    expect(screen.getByText("제8조 (개인정보 보호)")).toBeInTheDocument();
    expect(screen.getByText("제9조 (저작권 및 지적재산권)")).toBeInTheDocument();
  });
});
