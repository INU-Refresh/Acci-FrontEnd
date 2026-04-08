import { render, screen } from "@testing-library/react";

import { RecordListCard } from "./RecordListCard";

const mockRecordListItem = jest.fn(({ title }: { title: string }) => <div data-testid="record-list-item">{title}</div>);

jest.mock("@/features/my-page/RecordListItem", () => ({
  RecordListItem: (props: { title: string }) => mockRecordListItem(props),
}));

describe("RecordListCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("아이템 목록을 렌더링한다", () => {
    const items = [
      { id: "1", title: "기록1", date: "2026.04.08", detail: "완료", href: "/item/1" },
      { id: "2", title: "기록2", date: "2026.04.09", detail: "대기", href: "/item/2" },
    ];

    render(<RecordListCard title="최근 분석 기록" items={items} />);

    expect(screen.getByText("최근 분석 기록")).toBeInTheDocument();
    expect(screen.getAllByTestId("record-list-item")).toHaveLength(2);
    expect(mockRecordListItem).toHaveBeenCalledTimes(2);
  });

  it("moreHref가 있으면 더보기 링크를 렌더링한다", () => {
    render(<RecordListCard title="최근 분석 기록" items={[]} moreHref="/my-page/analysis" />);

    const moreLink = screen.getByRole("link", { name: "더보기" });
    expect(moreLink).toBeInTheDocument();
    expect(moreLink).toHaveAttribute("href", "/my-page/analysis");
  });

  it("showMore가 false면 더보기 링크를 렌더링하지 않는다", () => {
    render(<RecordListCard title="최근 분석 기록" items={[]} moreHref="/my-page/analysis" showMore={false} />);

    expect(screen.queryByRole("link", { name: "더보기" })).not.toBeInTheDocument();
  });
});
