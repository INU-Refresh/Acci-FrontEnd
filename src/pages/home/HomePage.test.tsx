import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

const mockHeader = jest.fn(({ initialUserInfo }: { initialUserInfo?: unknown }) => (
  <div data-testid="header">{initialUserInfo ? "header-with-user" : "header-no-user"}</div>
));

const mockFooter = jest.fn(() => <div data-testid="footer">footer</div>);

jest.mock("@/widgets/header/Header", () => ({
  Header: (props: { initialUserInfo?: unknown }) => mockHeader(props),
}));

jest.mock("@/widgets/footer/Footer", () => ({
  Footer: () => mockFooter(),
}));

jest.mock("@/widgets/home", () => ({
  HeroSection: () => <section data-testid="hero-section" />,
  FeaturesSection: () => <section data-testid="features-section" />,
  EstimateSection: () => <section data-testid="estimate-direct" />,
  ReviewsSection: () => <section data-testid="reviews-direct" />,
  CtaSection: () => <section data-testid="cta-direct" />,
}));

describe("HomePage", () => {
  beforeEach(() => {
    mockHeader.mockClear();
    mockFooter.mockClear();
  });

  it("기본 섹션들과 레이아웃 컴포넌트를 렌더링한다", async () => {
    render(<HomePage />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("features-section")).toBeInTheDocument();
    
    // next/dynamic 으로 비동기 로딩되는 컴포넌트들 대기
    expect(await screen.findByTestId("estimate-direct")).toBeInTheDocument();
    expect(await screen.findByTestId("reviews-direct")).toBeInTheDocument();
    expect(await screen.findByTestId("cta-direct")).toBeInTheDocument();
    
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("initialUserInfo를 Header에 전달한다", () => {
    const initialUserInfo = {
      id: 1,
      name: "테스터",
      email: "tester@example.com",
      profileImage: null,
    };

    render(<HomePage initialUserInfo={initialUserInfo} />);

    expect(mockHeader).toHaveBeenCalledWith(
      expect.objectContaining({
        initialUserInfo,
      })
    );
    expect(screen.getByText("header-with-user")).toBeInTheDocument();
  });
});
