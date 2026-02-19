import RepairEstimateListPage from "@/pages/my-page/repair-estimates/RepairEstimateListPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <RepairEstimateListPage initialUserInfo={initialUserInfo} />;
}
