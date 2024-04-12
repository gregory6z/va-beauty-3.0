import { Skeleton } from "@/components/ui/skeleton"
export async function ForfaitCardSkeleton() {
  return (
    <div className="mt-[20rem] flex h-full w-full flex-col border-t-[28px] border-zinc-300 border-t-zinc-900 bg-white p-6 pb-10 lg:mx-auto lg:mt-40 lg:max-w-[1080px] lg:p-10   ">
      <header className="lg:max-w-[600px] ">
        <h1 className="text-2xl font-semibold lg:text-3xl">Mes Forfaits</h1>
        <p className="mx-auto mt-4  text-zinc-900/60 lg:text-lg ">
          Les forfaits sont définis automatiquement en fonction du choix du
          premier jour, mais peuvent être modifiés manuellement :
        </p>
      </header>

      <div className="">
        <div className="flex items-center justify-between  pt-8  text-sm lg:pt-10">
          <Skeleton className=" h-[18px] w-[90px] lg:h-[24px] lg:w-[120px]"></Skeleton>
          <Skeleton className=" h-[18px] w-[90px]  lg:h-[24px] lg:w-[120px]"></Skeleton>
        </div>
        {/* <div className="">Problema no pagamento</div> */}
        <div className="mx-auto flex  w-full flex-col gap-4  pt-6 lg:flex-row  lg:gap-10  ">
          <div className="mx-auto h-[240px] w-[240px] shrink lg:mx-0">
            <Skeleton className="h-[240px] w-[240px]"></Skeleton>
          </div>
          <div className=" h-full w-full text-center  lg:mt-4  lg:h-[200px] lg:text-left">
            <Skeleton className="mx-auto mt-4 h-10 w-[70%] lg:mx-0"></Skeleton>
            <Skeleton className="mt-4 h-4 w-full lg:w-[90%]"></Skeleton>
            <Skeleton className="mt-1 h-4 w-full lg:w-[90%]"></Skeleton>
            <Skeleton className="mt-1 h-4 w-full lg:w-[90%]"></Skeleton>

            <Skeleton className="mx-auto mt-4 h-6 w-[25%] lg:mx-0"></Skeleton>

            <Skeleton className="mx-auto mt-4 h-8 w-[35%] lg:mx-0"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}
