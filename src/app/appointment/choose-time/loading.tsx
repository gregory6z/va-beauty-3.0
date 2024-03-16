import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="h-full w-full  bg-zinc-200 pb-20 lg:min-h-screen lg:pb-40 ">
      <div className="flex flex-col lg:mx-auto lg:max-w-[1216px] lg:px-[2rem] xl:max-w-[1256px] ">
        <header className=" mt-16  flex flex-col gap-1  bg-zinc-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
          <h1 className="font-semibold text-zinc-900 lg:text-xl">
            Réservez votre rendez-vous et faites le premier pas vers votre
            bien-être !
          </h1>
          <p className=" text-zinc-900/60">
            Sélection de l'heure et de la date:
          </p>
          <div className=" h-4 w-full bg-zinc-200"></div>
        </header>

        <div className="hidden h-full min-h-[screen] bg-white lg:block">
          <div className="flex h-10  w-full items-center justify-between bg-black px-6">
            <Skeleton className={`h-6 w-[200px] bg-zinc-700 `}></Skeleton>
            <Skeleton className={`h-6 w-[200px] bg-zinc-700 `}></Skeleton>
          </div>
          <div className=" overflow-x-auto">
            <table className="w-full table-fixed border-collapse animate-fadeIn ">
              <thead className="text-xl">
                <tr>
                  {Array(7)
                    .fill(null)
                    .map((_, index) => (
                      <th key={index} className="border p-4 ">
                        <div className="p-2 text-center">
                          <Skeleton className=" w-30 h-12"></Skeleton>
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
                      <td key={index} className="border p-6 align-top">
                        <div className="flex flex-col gap-4">
                          {Array(10)
                            .fill(null)
                            .map((_, skeletonIndex) => (
                              <Skeleton
                                key={skeletonIndex}
                                className="h-10 w-32"
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
  )
}
