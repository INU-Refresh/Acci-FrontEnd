import { useRepairEstimateStore, selectIsFormValid } from "@/shared/store/repair-estimate-store";
import { Button } from "@/shared/ui/button";

interface SubmitSectionProps {
  onSubmit: () => void;
}

export function SubmitSection({ onSubmit }: SubmitSectionProps) {
  const isFormValid = useRepairEstimateStore(selectIsFormValid);

  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-0 pt-4 pb-10">
      <Button
        disabled={!isFormValid}
        onClick={onSubmit}
        className={`w-full sm:w-[560px] py-4 rounded-lg text-body9 sm:text-body5 h-14 ${
          isFormValid ? "bg-gray-900 text-white hover:bg-gray-900/90 cursor-pointer" : "bg-gray-200 text-white cursor-not-allowed"
        }`}
      >
        예상 수리비 결과보기
      </Button>
    </section>
  );
}
