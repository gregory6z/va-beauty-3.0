interface ProgressIndicatorProps {
  currentStep: number
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
}) => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full px-[1.5rem] py-4 xl:px-0">
        <p className="">Étape {currentStep} sur 4</p>
        <div className="grid w-full grid-cols-4 gap-1 bg-zinc-400 ">
          <div
            className={`h-1 w-full lg:h-2 ${currentStep >= 1 ? "bg-black" : ""}`}
          ></div>
          <div
            className={`h-1 w-full lg:h-2 ${currentStep >= 2 ? "bg-black" : ""}`}
          ></div>
          <div
            className={`h-1 w-full lg:h-2 ${currentStep >= 3 ? "bg-black" : ""}`}
          ></div>
          <div
            className={`h-1 w-full lg:h-2 ${currentStep >= 4 ? "bg-black" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
