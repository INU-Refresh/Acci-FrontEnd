import { render, screen } from "@testing-library/react";

import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("totalPages가 1 이하이면 렌더링하지 않는다", () => {
    const { container } = render(<Pagination currentPage={1} totalPages={1} basePath="/my-page/analysis" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("첫 페이지에서는 첫/이전 링크를 렌더링하지 않는다", () => {
    render(<Pagination currentPage={1} totalPages={3} basePath="/my-page/analysis" />);

    expect(screen.queryByLabelText("첫 페이지")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("이전 페이지")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "다음 페이지" })).toHaveAttribute("href", "/my-page/analysis?page=2");
    expect(screen.getByRole("link", { name: "마지막 페이지" })).toHaveAttribute("href", "/my-page/analysis?page=3");
  });

  it("중간 페이지에서는 숫자/이동 링크를 정확히 렌더링한다", () => {
    render(<Pagination currentPage={2} totalPages={3} basePath="/my-page/analysis" />);

    expect(screen.getByRole("link", { name: "첫 페이지" })).toHaveAttribute("href", "/my-page/analysis");
    expect(screen.getByRole("link", { name: "이전 페이지" })).toHaveAttribute("href", "/my-page/analysis");
    expect(screen.getByRole("link", { name: "다음 페이지" })).toHaveAttribute("href", "/my-page/analysis?page=3");
    expect(screen.getByRole("link", { name: "마지막 페이지" })).toHaveAttribute("href", "/my-page/analysis?page=3");

    expect(screen.getByRole("link", { name: "1" })).toHaveAttribute("href", "/my-page/analysis");
    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute("href", "/my-page/analysis?page=2");
    expect(screen.getByRole("link", { name: "3" })).toHaveAttribute("href", "/my-page/analysis?page=3");
    expect(screen.getByRole("link", { current: "page" })).toHaveTextContent("2");
  });

  it("마지막 페이지에서는 다음/마지막 링크를 렌더링하지 않는다", () => {
    render(<Pagination currentPage={3} totalPages={3} basePath="/my-page/analysis" />);

    expect(screen.queryByLabelText("다음 페이지")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("마지막 페이지")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "첫 페이지" })).toHaveAttribute("href", "/my-page/analysis");
    expect(screen.getByRole("link", { name: "이전 페이지" })).toHaveAttribute("href", "/my-page/analysis?page=2");
  });
});
