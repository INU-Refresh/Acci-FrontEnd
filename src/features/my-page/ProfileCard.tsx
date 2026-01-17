import { Card } from "@/shared/ui/card";

type ProfileCardProps = {
  name: string;
  email: string;
};

export function ProfileCard({ name, email }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border-0 bg-white p-6 shadow-none md:rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-100" aria-hidden="true" />
        <div className="flex flex-col">
          <p className="text-body3 text-gray-900">{name}</p>
          <p className="text-body8 text-gray-500">{email}</p>
        </div>
      </div>
    </Card>
  );
}
