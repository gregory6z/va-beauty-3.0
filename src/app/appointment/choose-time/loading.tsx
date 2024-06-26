import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <div className="hidden h-full w-full bg-zinc-200  pb-20 lg:block lg:min-h-screen lg:pb-40 ">
        <div className="flex flex-col lg:mx-auto lg:max-w-[1080px] lg:px-[2rem] ">
          <header className=" mt-16  flex flex-col gap-1  bg-zinc-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
            <p className=" text-zinc-900/60">
              Sélection de l'heure et de la date:
            </p>
            <div className=" h-4 w-full bg-zinc-200"></div>
          </header>

          <div className="hidden h-full min-h-[screen] bg-white lg:block ">
            <div className="flex h-8 w-full items-center justify-between rounded-t-sm bg-black px-6">
              <Skeleton className={`h-4 w-[125px] bg-zinc-700 `}></Skeleton>
              <Skeleton className={`h-4 w-[125px] bg-zinc-700 `}></Skeleton>
            </div>
            <div className=" overflow-x-auto p-2">
              <table className="w-full table-fixed border-collapse animate-fadeIn ">
                <thead className="border-b  text-xl">
                  <tr>
                    {Array(7)
                      .fill(null)
                      .map((_, index) => (
                        <th key={index} className=" p-4 ">
                          <div className=" text-center">
                            <Skeleton className=" h-12 w-28 rounded-sm"></Skeleton>
                          </div>
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Array(7)
                      .fill(null)
                      .map((_, index) => (
                        <td key={index} className=" p-5 align-top">
                          <div className="flex flex-col gap-4">
                            {Array(10)
                              .fill(null)
                              .map((_, skeletonIndex) => (
                                <Skeleton
                                  key={skeletonIndex}
                                  className="h-8 w-28 rounded-sm"
                                ></Skeleton>
                              ))}
                          </div>
                        </td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-4rem)] w-full bg-zinc-200 lg:hidden ">
        <header className="   flex flex-col gap-1  bg-zinc-200  lg:top-[9rem] lg:px-0">
          <div className=" mt-14 px-[1.5rem] ">
            <Skeleton className="h-[20px] w-[280px] "></Skeleton>
          </div>
          <div className=" h-4 w-full rounded-sm bg-zinc-200"></div>
        </header>
        <div className="mt-2 flex flex-col gap-3">
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
          <div className="flex h-[54px] items-center justify-between bg-white px-[1.5rem]">
            <Skeleton className="h-[20px] w-[200px]"></Skeleton>
            <Skeleton className="h-[20px] w-[20px]"></Skeleton>
          </div>
        </div>
        <div className=" mt-8 px-[1.5rem] ">
          <Skeleton className="h-[20px] w-[150px] "></Skeleton>
        </div>
      </div>
    </>
  )
}
