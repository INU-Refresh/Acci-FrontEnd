import MyPage from "@/pages/my-page/[id]/MyPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <MyPage id={id} />;
}
