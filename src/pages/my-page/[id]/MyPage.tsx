interface MyPageProps {
  id: string;
}

export default function MyPage({ id }: MyPageProps) {
  return <div>마이페이지{id}</div>;
}
