import RepairEstimateListPage from "@/pages/my-page/repair-estimates/RepairEstimateListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";
import { getRecentRepairRecords } from "@/entities/repair-estimate/api/get-recent-repair-records";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  const records = await getRecentRepairRecords(0, 5);
  return <RepairEstimateListPage initialUserInfo={initialUserInfo} records={records} />;
}
