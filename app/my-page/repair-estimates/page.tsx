import RepairEstimateListPage from "@/pages/my-page/repair-estimates/RepairEstimateListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRepairRecordPage } from "@/entities/repair-estimate/api/get-recent-repair-records";

type RepairPageProps = {
  searchParams?:
    | {
        page?: string;
      }
    | Promise<{
        page?: string;
      }>;
};

export default async function Page({ searchParams }: RepairPageProps) {
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const parsedPage = Number(resolvedSearchParams?.page ?? "1");
  const currentPage = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const initialUserInfo = await getUserInfo();
  const response = await getRepairRecordPage(currentPage - 1, 5);

  return (
    <RepairEstimateListPage
      initialUserInfo={initialUserInfo}
      records={response.items}
      currentPage={response.totalPages > 0 ? response.page + 1 : 1}
      totalPages={response.totalPages}
    />
  );
}
