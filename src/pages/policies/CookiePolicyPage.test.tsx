import { render, screen } from "@testing-library/react";

import CookiePolicyPage from "./CookiePolicyPage";

describe("CookiePolicyPage", () => {
  it("페이지 제목을 올바르게 렌더링한다", () => {
    render(<CookiePolicyPage />);

    expect(screen.getByText("쿠키 정책", { selector: "h3, div, p, span, *:not(h2)" })).toBeInTheDocument();
  });

  it("뒤로가기 링크가 올바른 경로를 가리킨다", () => {
    render(<CookiePolicyPage />);

    const backLink = screen.getByRole("link", { name: /정책 목록으로 돌아가기/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/policies");
  });

  it("주요 조항 제목들이 렌더링된다", () => {
    render(<CookiePolicyPage />);

    expect(screen.getByText("제1조 (쿠키의 사용 목적)")).toBeInTheDocument();
    expect(screen.getByText("제2조 (쿠키의 종류 및 사용 기간)")).toBeInTheDocument();
    expect(screen.getByText("제3조 (쿠키의 설치 및 거부)")).toBeInTheDocument();
    expect(screen.getByText("제4조 (제3자 쿠키)")).toBeInTheDocument();
    expect(screen.getByText("제5조 (쿠키 정책의 변경)")).toBeInTheDocument();
  });
});
