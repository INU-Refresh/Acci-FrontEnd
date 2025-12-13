import ResultPage from "@/pages/analyze/result/ResultPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ResultPage id={id} />;
}
