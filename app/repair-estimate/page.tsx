import RepairEstimatePage from "@/pages/repair-estimate/RepairEstimatePage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <RepairEstimatePage initialUserInfo={initialUserInfo} />;
}
