import ResultPage from "@/pages/analyze/result/ResultPage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const initialUserInfo = await getUserInfo();
  const { id } = await params;
  return <ResultPage id={id} initialUserInfo={initialUserInfo} />;
}
