interface EstimateErrorStateProps {
  errorMessage: string;
}

export function EstimateErrorState({ errorMessage }: EstimateErrorStateProps) {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <p className="text-body4 text-red-500">{errorMessage}</p>
    </div>
  );
}
