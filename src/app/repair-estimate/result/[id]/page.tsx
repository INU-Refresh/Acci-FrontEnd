import { RepairEstimateResultPage } from "@/pages/repair-estimate/result/RepairEstimateResultPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RepairEstimateResultPage id={id} />;
}
