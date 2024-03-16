"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingService() {
  return (
    <div className="flex animate-fadeIn flex-col gap-4 ">
      <Skeleton className=" h-[400px] w-full"></Skeleton>
    </div>
  )
}
