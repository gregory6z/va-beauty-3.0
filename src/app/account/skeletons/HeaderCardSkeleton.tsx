import { Skeleton } from "@/components/ui/skeleton"

export function HeaderCardSkeleton() {
  return (
    <div className="flex h-full   cursor-pointer gap-6 bg-white p-4 hover:bg-zinc-100 lg:min-h-[230px] lg:min-w-[400px] lg:p-6 ">
      <Skeleton className="h-[100px] w-[100px] font-normal"></Skeleton>
      <div className=" flex h-full flex-col  ">
        <Skeleton className="h-[40px] w-[280px] text-2xl "></Skeleton>
        <Skeleton className="mt-4 h-[20px] w-[340px] text-2xl "></Skeleton>
        <Skeleton className="mt-2 h-[20px] w-[340px] text-2xl "></Skeleton>

        <Skeleton className="mt-8 h-[30px] w-[280px] text-2xl  "></Skeleton>
      </div>
    </div>
  )
}
