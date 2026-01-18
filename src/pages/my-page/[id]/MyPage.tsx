import MyPage from "@/pages/my-page/MyPage";

interface MyPageProps {
  id: string;
}

export default function MyPageById({ id }: MyPageProps) {
  return <MyPage id={id} />;
}
