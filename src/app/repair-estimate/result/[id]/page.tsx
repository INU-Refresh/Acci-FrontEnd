import RepairEstimateResultPage from "@/pages/repair-estimate/result/RepairEstimateResultPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const initialUserInfo = await getUserInfo();
  const { id } = await params;
  return <RepairEstimateResultPage id={id} initialUserInfo={initialUserInfo} />;
}
