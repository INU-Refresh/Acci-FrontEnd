import { render, screen, waitFor, act } from "@testing-library/react";
import RepairEstimateResultPage from "./RepairEstimateResultPage";
import axiosInstance from "@/shared/api/axios-instance";
import "@testing-library/jest-dom";

// Axios 모킹
jest.mock("@/shared/api/axios-instance", () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

// 정규화 유틸 모킹 - 테스트에서 외부 의존성 격리
jest.mock("@/entities/vehicle", () => ({
  VEHICLES: [],
  normalizeBrand: (brand: string) => brand,
  normalizeVehicleType: (type: string) => type,
}));

// 하위 컴포넌트 모킹
jest.mock("@/widgets/header/Header", () => ({
  Header: () => <div data-testid="mock-header" />,
}));
jest.mock("@/widgets/footer/Footer", () => ({
  Footer: () => <div data-testid="mock-footer" />,
}));
jest.mock("@/widgets/repair-estimate-result", () => ({
  TitleSection: () => <div data-testid="mock-title-section" />,
  EstimateCard: (props: Record<string, unknown>) => (
    <div data-testid="mock-estimate-card" data-props={JSON.stringify(props)} />
  ),
  DamageAreaCard: (props: Record<string, unknown>) => (
    <div data-testid="mock-damage-area-card" data-props={JSON.stringify(props)} />
  ),
  AttachedImagesCard: (props: Record<string, unknown>) => (
    <div data-testid="mock-attached-images-card" data-props={JSON.stringify(props)} />
  ),
  ActionSection: (props: Record<string, unknown>) => (
    <div data-testid="mock-action-section" data-props={JSON.stringify(props)} />
  ),
}));

class MockEventSource {
  static lastInstance: MockEventSource | null = null;

  url: string;
  close: jest.Mock;
  onerror: ((event: Event) => void) | null = null;
  private listeners: Record<string, ((event: MessageEvent) => void)[]> = {};

  constructor(url: string) {
    this.url = url;
    this.close = jest.fn();
    MockEventSource.lastInstance = this;
  }

  addEventListener(event: string, callback: (event: MessageEvent) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: unknown) {
    if (this.listeners[event]) {
      const messageEvent = new MessageEvent(event, {
        data: typeof data === "string" ? data : JSON.stringify(data),
      });
      this.listeners[event].forEach((cb) => cb(messageEvent));
    }
  }

  triggerError() {
    this.onerror?.(new Event("error"));
  }
}

const getEstimateCardProps = () => {
  const el = screen.getByTestId("mock-estimate-card");
  return JSON.parse(el.getAttribute("data-props") || "{}");
};

describe("RepairEstimateResultPage", () => {
  const mockId = "test-123";

  const mockSuccessData = {
    status: "COMPLETED",
    vehicleInfo: {
      brand: "현대",
      model: "아반떼",
      segment: "C",
      vehicleType: "세단",
      year: 2023,
    },
    damageDetails: [
      { damageSeverity: "High", partNameKr: "범퍼", partNameEn: "Bumper" },
    ],
    repairItems: [{ cost: 500000, partName: "범퍼", repairMethod: "교체" }],
    totalEstimate: 500000,
    images: ["test.jpg"],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    MockEventSource.lastInstance = null;
    global.EventSource = MockEventSource as unknown as typeof EventSource;
  });

  it("초기 렌더링 시 로딩 상태를 보여준다", () => {
    (axiosInstance.get as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(<RepairEstimateResultPage id={mockId} />);

    expect(getEstimateCardProps().isLoading).toBe(true);
  });

  it("데이터 fetch 성공 시 결과를 컴포넌트에 전달한다", async () => {
    (axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockSuccessData });

    render(<RepairEstimateResultPage id={mockId} />);

    await waitFor(() => {
      const props = getEstimateCardProps();
      expect(props.isLoading).toBe(false);
      expect(props.status).toBe("COMPLETED");
      expect(props.totalEstimate).toBe(500000);
    });
  });

  it("API 요청 실패 시 에러 메시지를 표시하고 로딩을 종료한다", async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    render(<RepairEstimateResultPage id={mockId} />);

    await waitFor(() => {
      const props = getEstimateCardProps();
      expect(props.isLoading).toBe(false);
      expect(props.errorMessage).toBe(
        "견적 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요."
      );
    });
  });

  describe("SSE 연결", () => {
    it("status가 PENDING일 때 SSE 연결을 시작한다", async () => {
      const pendingData = { ...mockSuccessData, status: "PENDING" };
      (axiosInstance.get as jest.Mock).mockResolvedValue({ data: pendingData });

      render(<RepairEstimateResultPage id={mockId} />);

      await waitFor(() => {
        expect(MockEventSource.lastInstance).not.toBeNull();
        expect(MockEventSource.lastInstance?.url).toContain(`/repair-estimates/${mockId}/events`);
      });
    });

    it("status가 PROCESSING일 때도 SSE 연결을 시작한다", async () => {
      const processingData = { ...mockSuccessData, status: "PROCESSING" };
      (axiosInstance.get as jest.Mock).mockResolvedValue({ data: processingData });

      render(<RepairEstimateResultPage id={mockId} />);

      await waitFor(() => {
        expect(MockEventSource.lastInstance).not.toBeNull();
        expect(MockEventSource.lastInstance?.url).toContain(`/repair-estimates/${mockId}/events`);
      });
    });

    it("SSE로 COMPLETED 이벤트 수신 시 연결을 종료하고 결과를 재조회한다", async () => {
      const pendingData = { ...mockSuccessData, status: "PENDING" };

      (axiosInstance.get as jest.Mock)
        .mockResolvedValueOnce({ data: pendingData })
        .mockResolvedValueOnce({ data: mockSuccessData });

      render(<RepairEstimateResultPage id={mockId} />);

      await waitFor(() => expect(MockEventSource.lastInstance).not.toBeNull());

      await act(async () => {
        MockEventSource.lastInstance!.emit("status", "COMPLETED");
      });

      await waitFor(() => {
        expect(axiosInstance.get).toHaveBeenCalledTimes(2);
        expect(MockEventSource.lastInstance?.close).toHaveBeenCalled();
      });
    });

    it("SSE 연결 오류 발생 시 연결을 종료한다", async () => {
      const pendingData = { ...mockSuccessData, status: "PENDING" };
      (axiosInstance.get as jest.Mock).mockResolvedValue({ data: pendingData });

      render(<RepairEstimateResultPage id={mockId} />);

      await waitFor(() => expect(MockEventSource.lastInstance).not.toBeNull());

      const instanceBeforeError = MockEventSource.lastInstance;

      await act(async () => {
        MockEventSource.lastInstance!.triggerError();
      });

      await waitFor(() => {
        expect(instanceBeforeError?.close).toHaveBeenCalled();
      });
    });
  });

  it("컴포넌트 언마운트(unmount) 시 SSE 연결이 정리(cleanup)된다", async () => {
    const pendingData = { ...mockSuccessData, status: "PENDING" };
    (axiosInstance.get as jest.Mock).mockResolvedValue({ data: pendingData });

    const { unmount } = render(<RepairEstimateResultPage id={mockId} />);

    await waitFor(() => expect(MockEventSource.lastInstance).not.toBeNull());

    const instanceBeforeUnmount = MockEventSource.lastInstance;

    unmount();

    expect(instanceBeforeUnmount?.close).toHaveBeenCalled();
  });
});