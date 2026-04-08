import { render, screen } from "@testing-library/react";

import { RecordListPageSection } from "./RecordListPageSection";

const mockRecordListItem = jest.fn(({ title }: { title: string }) => <div data-testid="record-list-item">{title}</div>);
const mockPagination = jest.fn(() => <div data-testid="pagination" />);

jest.mock("@/features/my-page/RecordListItem", () => ({
  RecordListItem: (props: { title: string }) => mockRecordListItem(props),
}));

jest.mock("@/features/my-page/Pagination", () => ({
  Pagination: (props: unknown) => mockPagination(props),
}));

describe("RecordListPageSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("title과 목록 아이템을 렌더링한다", () => {
    const items = [
      { id: "1", title: "분석 1", date: "2026.04.08", detail: "완료", href: "/analyze/result/1" },
      { id: "2", title: "분석 2", date: "2026.04.09", detail: "대기", href: "/analyze/result/2" },
    ];

    render(<RecordListPageSection title="최근 분석 기록" items={items} currentPage={1} totalPages={3} basePath="/my-page/analysis" />);

    expect(screen.getByText("최근 분석 기록")).toBeInTheDocument();
    expect(screen.getAllByTestId("record-list-item")).toHaveLength(2);
  });

  it("Pagination에 필요한 props를 전달한다", () => {
    render(<RecordListPageSection title="최근 분석 기록" items={[]} currentPage={2} totalPages={5} basePath="/my-page/analysis" />);

    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(mockPagination).toHaveBeenCalledWith(
      expect.objectContaining({
        currentPage: 2,
        totalPages: 5,
        basePath: "/my-page/analysis",
      })
    );
  });
});
