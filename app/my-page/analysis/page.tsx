import AnalysisListPage from "@/pages/my-page/analysis/AnalysisListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getAnalysisRecordPage } from "@/entities/analysis/api/get-recent-analysis-records";

type AnalysisPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export default async function Page({ searchParams }: AnalysisPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const parsedPage = Number(resolvedSearchParams?.page ?? "1");
  const currentPage = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const initialUserInfo = await getUserInfo();
  const response = await getAnalysisRecordPage(currentPage - 1, 5);

  return (
    <AnalysisListPage
      initialUserInfo={initialUserInfo}
      records={response.items}
      currentPage={response.totalPages > 0 ? response.page + 1 : 1}
      totalPages={response.totalPages}
    />
  );
}
