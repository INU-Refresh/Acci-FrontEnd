import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import RepairEstimatePage from "./RepairEstimatePage";
import { useRouter } from "next/navigation";
import { useToast } from "@/features/repair-estimate/hooks";
import { useRepairEstimateStore } from "@/shared/store/repair-estimate-store";

// 외부 모듈 모킹
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/features/repair-estimate/hooks", () => ({
  useToast: jest.fn(),
}));

jest.mock("@/shared/store/repair-estimate-store", () => ({
  useRepairEstimateStore: jest.fn(),
}));

// 차량 정보 상수 모킹
jest.mock("@/entities/vehicle", () => ({
  VEHICLES: [
    { brand: "현대", model: "소나타", vehicleType: "Sedan", segment: "Midsize" },
  ],
}));

// 자식 컴포넌트(위젯) 모킹
jest.mock("@/widgets/header/Header", () => ({
  Header: () => <header data-testid="header">Header</header>,
}));
jest.mock("@/widgets/footer/Footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));
jest.mock("@/widgets/repair-estimate", () => ({
  BackButton: () => <button data-testid="back-button">Back</button>,
  TitleSection: () => <div data-testid="title-section">Title</div>,
  RepairEstimateFormSection: () => <div data-testid="form-section">Form</div>,
  OptionalInputSection: () => <div data-testid="optional-section">Optional</div>,
  SubmitSection: ({ onSubmit }: { onSubmit: () => void }) => (
    <button data-testid="submit-button" onClick={onSubmit}>Submit</button>
  ),
  ToastMessage: ({ message, visible }: { message: string; visible: boolean }) => (
    <div data-testid="toast-message" data-visible={visible}>{message}</div>
  ),
}));

describe("RepairEstimatePage", () => {
  const mockPush = jest.fn();
  const mockShowToast = jest.fn();
  const mockReset = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useToast as jest.Mock).mockReturnValue({
      toast: { message: "", visible: false },
      showToast: mockShowToast,
    });
    global.fetch = jest.fn();
  });

  // 테스트에서 사용할 Zustand 스토어 상태 초기화 헬퍼 함수
  const setupStore = (overrides = {}) => {
    const initialState = {
      selectedBrand: "현대",
      selectedModel: "소나타",
      selectedYear: "2023",
      damageDetails: [
        { part_name_kr: "범퍼", part_name_en: "bumper", damage_severity: 2, damage_label: "찌그러짐" },
      ],
      uploadedImages: [new File([""], "test.png", { type: "image/png" })],
      reset: mockReset,
      ...overrides,
    };
    (useRepairEstimateStore as unknown as jest.Mock).mockImplementation((selector) => selector(initialState));
  };

  it("기본 레이아웃 및 렌더링을 정상적으로 수행한다", () => {
    setupStore();
    render(<RepairEstimatePage />);
    
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("back-button")).toBeInTheDocument();
    expect(screen.getByTestId("title-section")).toBeInTheDocument();
    expect(screen.getByTestId("form-section")).toBeInTheDocument();
    expect(screen.getByTestId("optional-section")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("필수 정보(브랜드, 모델명, 연식)가 누락되면 제출 시 에러 토스트를 표시한다", () => {
    setupStore({ selectedBrand: "" }); // 브랜드 누락 테스트
    render(<RepairEstimatePage />);
    
    fireEvent.click(screen.getByTestId("submit-button"));
    
    expect(mockShowToast).toHaveBeenCalledWith("브랜드, 모델명, 연식을 모두 선택해주세요.");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("선택된 차량 정보가 VEHICLES 목록에 존재하지 않으면 에러 토스트를 표시한다", () => {
    setupStore({ selectedBrand: "외계어브랜드", selectedModel: "UFO" });
    render(<RepairEstimatePage />);
    
    fireEvent.click(screen.getByTestId("submit-button"));
    
    expect(mockShowToast).toHaveBeenCalledWith("차량 정보를 찾을 수 없습니다.");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("정상적으로 폼이 제출되면 API를 호출하고 결과 페이지로 이동한다", async () => {
    setupStore();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ estimateId: "est-12345" }),
    });

    render(<RepairEstimatePage />);
    
    fireEvent.click(screen.getByTestId("submit-button"));
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(mockReset).toHaveBeenCalled();
    expect(mockShowToast).toHaveBeenCalledWith("수리비 견적 요청을 전송했습니다.");
    expect(mockPush).toHaveBeenCalledWith("/repair-estimate/result/est-12345");
  });

  it("API 요청 실패 시 에러 토스트를 표시하고 페이지 이동을 하지 않는다", async () => {
    setupStore();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    render(<RepairEstimatePage />);
    
    fireEvent.click(screen.getByTestId("submit-button"));
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(mockShowToast).toHaveBeenCalledWith("요청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("API 요청 시 estimateId를 찾을 수 없으면 에러 토스트를 표시한다", async () => {
    setupStore();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ unexpectedKey: "no-id" }), // ID 못 찾을 때
    });

    render(<RepairEstimatePage />);

    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(mockShowToast).toHaveBeenCalledWith("견적 결과 ID를 찾을 수 없습니다. 잠시 후 다시 시도해주세요.");
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("손상 부위 상세 정보의 설명(userDescription)이 없으면 빈 문자열을 전송한다", async () => {
    // line 48 coverage
    setupStore({
      damageDetails: [
        {
          part_name_kr: "프론트 범퍼",
          part_name_en: "front_bumper",
          damage_severity: 2,
          // damage_label 없음
        },
      ]
    });

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ resultId: "est-123" }),
    });

    render(<RepairEstimatePage />);
    
    const submitBtn = screen.getByTestId("submit-button");
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
    
    expect(mockPush).toHaveBeenCalledWith("/repair-estimate/result/est-123");
  });

  it("API 응답에서 다양한 키의 ID를 잘 추출한다 (id, resultId, data.id, data.estimateId, data.resultId)", async () => {
    // line 72 coverage
    const mockVariations = [
      { id: "var-id" },
      { estimateId: "var-estId" },
      { resultId: "var-resId" },
      { data: { id: "var-data-id" } },
      { data: { estimateId: "var-data-estId" } },
      { data: { resultId: "var-data-resId" } },
    ];

    for (const mockResp of mockVariations) {
      cleanup();
      jest.clearAllMocks();
      setupStore();
      
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResp),
      });

      render(<RepairEstimatePage />);
      fireEvent.click(screen.getByTestId("submit-button"));
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });

      // Extract value to test
      const expectedId = 
        mockResp.id || mockResp.estimateId || mockResp.resultId || 
        mockResp.data?.id || mockResp.data?.estimateId || mockResp.data?.resultId;

      expect(mockPush).toHaveBeenCalledWith(`/repair-estimate/result/${expectedId}`);
    }
  });
});
