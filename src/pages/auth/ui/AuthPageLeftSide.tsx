import { CheckIcon } from "@/shared/ui/icons";

export default function AuthPageLeftSide() {
  return (
    <aside className="hidden w-full bg-gray-50 md:flex md:min-h-screen md:flex-1 md:flex-col md:justify-center md:px-0 md:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-10 md:h-full">
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <div className="h-20 w-20 rounded-full bg-gray-900" aria-hidden />
          <p className="text-3xl font-semibold leading-12 text-gray-900">Acci</p>
          <p className="text-sm font-normal leading-5 text-gray-900">
            법률 전문가의 지식을 AI로,
            <br />
            더 스마트한 과실비율 측정 서비스
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 px-10">
          <div className="inline-flex w-52 items-center justify-start gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
              <CheckIcon className="h-3 w-3 text-white" />
            </div>
            <p className="text-center text-sm font-normal leading-5 text-gray-900">언제 어디서나 빠른 과실 판단</p>
          </div>
          <div className="inline-flex w-52 items-center justify-start gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
              <CheckIcon className="h-3 w-3 text-white" />
            </div>
            <p className="text-center text-sm font-normal leading-5 text-gray-900">전문적이고 정확한 법률 정보</p>
          </div>
          <div className="inline-flex w-52 items-center justify-start gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
              <CheckIcon className="h-3 w-3 text-white" />
            </div>
            <p className="text-center text-sm font-normal leading-5 text-gray-900">교통사고 관련 다양한 판례 제공</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
