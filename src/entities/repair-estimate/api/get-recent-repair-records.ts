import { cookies } from "next/headers";

export type RepairRecordItem = {
  id: string;
  title: string;
  date: string;
  detail: string;
  href: string;
};

type RepairHistoryResponse = {
  content: Array<{
    estimateId?: string;
    id?: string;
    status?: string;
    totalEstimate?: number;
    vehicleModel?: string;
    damageSummary?: string;
    createdAt?: string;
  }>;
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

function formatCurrency(value?: number) {
  if (typeof value !== "number") {
    return null;
  }
  return `예상 수리비 ${value.toLocaleString("ko-KR")}원`;
}

function mapStatusToDetail(status?: string) {
  if (!status) {
    return "견적 상태 확인 필요";
  }
  const statusMap: Record<string, string> = {
    COMPLETED: "견적 완료",
    PROCESSING: "견적 진행중",
    PENDING: "견적 대기중",
    FAILED: "견적 실패",
  };
  return statusMap[status] ?? `상태 ${status}`;
}

export async function getRecentRepairRecords(page = 0, size = 5): Promise<RepairRecordItem[]> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(`${API_BASE_URL}/api/v1/repair-estimates?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        Cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as RepairHistoryResponse;
    return data.content.map((item, index) => {
      const estimateId = item.estimateId ?? item.id ?? String(index);
      const detail = formatCurrency(item.totalEstimate) ?? item.damageSummary ?? mapStatusToDetail(item.status);
      return {
        id: estimateId,
        title: item.vehicleModel ?? "수리비 견적 기록",
        date: formatDate(item.createdAt),
        detail,
        href: `/repair-estimate/result/${estimateId}`,
      };
    });
  } catch {
    return [];
  }
}
