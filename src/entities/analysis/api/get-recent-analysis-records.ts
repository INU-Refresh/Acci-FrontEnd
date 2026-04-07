import { cookies } from "next/headers";

type AnalysisHistoryResponse = {
  content: Array<{
    analysisId?: string;
    id?: string;
    title?: string;
    faultRatio?: string;
    negligenceRatio?: string;
    status?: string;
    createdAt?: string;
  }>;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type AnalysisRecordItem = {
  id: string;
  title: string;
  date: string;
  detail: string;
  href: string;
};
export type AnalysisRecordPage = {
  items: AnalysisRecordItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

function formatDate(dateValue?: string) {
  if (!dateValue) {
    return "-";
  }
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return "-";
  }
  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function mapStatusToDetail(status?: string, ratio?: string) {
  if (ratio) {
    return `과실비율 ${ratio}`;
  }
  if (!status) {
    return "상태 확인 필요";
  }
  const statusMap: Record<string, string> = {
    COMPLETED: "분석 완료",
    PROCESSING: "분석 진행중",
    PENDING: "분석 대기중",
    FAILED: "분석 실패",
  };
  return statusMap[status] ?? `상태 ${status}`;
}

export async function getRecentAnalysisRecords(page = 0, size = 5): Promise<AnalysisRecordItem[]> {
  const data = await getAnalysisRecordPage(page, size);
  return data.items;
}

export async function getAnalysisRecordPage(page = 0, size = 5): Promise<AnalysisRecordPage> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(`${API_BASE_URL}/api/v1/analyses?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        Cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return { items: [], page, size, totalElements: 0, totalPages: 0 };
    }

    const data = (await response.json()) as AnalysisHistoryResponse;
    const items = data.content.map((item, index) => {
      const analysisId = item.analysisId ?? item.id ?? String(index);
      const ratio = item.faultRatio ?? item.negligenceRatio;
      return {
        id: analysisId,
        title: item.title ?? "영상 분석 기록",
        date: formatDate(item.createdAt),
        detail: mapStatusToDetail(item.status, ratio),
        href: `/analyze/result/${analysisId}`,
      };
    });
    return {
      items,
      page: data.page,
      size: data.size,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
    };
  } catch {
    return { items: [], page, size, totalElements: 0, totalPages: 0 };
  }
}
