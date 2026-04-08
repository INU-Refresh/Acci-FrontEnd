import { render, screen } from "@testing-library/react";

import MyPage from "./MyPage";

const mockHeader = jest.fn(({ initialUserInfo }: { initialUserInfo?: unknown }) => (
  <header data-testid="header">{initialUserInfo ? "header-with-user" : "header-no-user"}</header>
));
const mockFooter = jest.fn(() => <footer data-testid="footer">footer</footer>);
const mockBackButton = jest.fn(() => <button data-testid="back-button">back</button>);
const mockMyPageSection = jest.fn(() => <section data-testid="my-page-section">section</section>);

jest.mock("@/widgets/header/Header", () => ({
  Header: (props: { initialUserInfo?: unknown }) => mockHeader(props),
}));

jest.mock("@/widgets/footer/Footer", () => ({
  Footer: () => mockFooter(),
}));

jest.mock("@/widgets/repair-estimate", () => ({
  BackButton: (props: unknown) => mockBackButton(props),
}));

jest.mock("@/widgets/my-page/MyPageSection", () => ({
  MyPageSection: (props: unknown) => mockMyPageSection(props),
}));

describe("MyPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("기본 레이아웃 컴포넌트를 렌더링한다", () => {
    render(<MyPage />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("back-button")).toBeInTheDocument();
    expect(screen.getByTestId("my-page-section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("Header와 MyPageSection에 전달해야 할 props를 넘긴다", () => {
    const initialUserInfo = {
      name: "테스터",
      email: "tester@example.com",
      profileImage: null,
    };
    const analysisRecords = [{ id: "a1", title: "분석", date: "2026.04.08", detail: "완료", href: "/analyze/result/a1" }];
    const repairRecords = [{ id: "r1", title: "견적", date: "2026.04.08", detail: "완료", href: "/repair-estimate/result/r1" }];

    render(<MyPage id="user-1" initialUserInfo={initialUserInfo} analysisRecords={analysisRecords} repairRecords={repairRecords} />);

    expect(mockHeader).toHaveBeenCalledWith(expect.objectContaining({ initialUserInfo }));
    expect(mockMyPageSection).toHaveBeenCalledWith(
      expect.objectContaining({
        initialUserInfo,
        analysisRecords,
        repairRecords,
      })
    );
  });
});
