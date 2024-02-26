import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ServiceProps {
  name: string
  description: string
  price: number
  duration: string
  imageUrl: string
}

export function ServiceCard({
  name,
  description,
  price,
  duration,
  imageUrl,
}: ServiceProps) {
  return (
    <div className="  flex w-full flex-col border border-gray-200   bg-white sm:grid-cols-2 lg:mx-0 lg:min-h-[24rem]    lg:flex-row lg:items-center lg:gap-16 lg:p-8">
      <div className=" h-full w-full bg-black  sm:mx-auto sm:min-w-[400px] sm:max-w-[400px]   lg:mx-0   lg:min-w-[300px]   lg:max-w-[300px]  ">
        <Image
          src={imageUrl}
          alt={""}
          width={300}
          height={300}
          className="mx-auto h-full max-h-[300px]  w-full object-cover  lg:max-w-[300px] "
        ></Image>
        <div className="flex h-[32px]  w-full items-center justify-end bg-zinc-900 hover:bg-zinc-800  lg:h-[48px] ">
          <p className="mx-4 text-left text-white  lg:mx-4 ">Plus info</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col  sm:mx-auto  sm:max-w-[600px] lg:mx-0 lg:max-w-full  lg:px-0 ">
        <div className="mb-2 mt-4 flex flex-col  px-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between  lg:px-0">
          <h1 className="text-bold  text-2xl lg:text-3xl   ">{name}</h1>
          <p>Duration {duration} min</p>
        </div>

        <p className=" 	 h-full flex-1 px-4 text-zinc-900/60 lg:my-8 lg:mt-8 lg:min-h-[150px] lg:min-w-[828px] lg:flex-1 lg:flex-grow lg:px-0 lg:text-lg">
          {description}
        </p>
        <div className="mt-auto flex h-full w-full flex-col  items-center justify-between lg:flex-row">
          <p className="my-6 text-5xl lg:w-full">$ {price},00</p>
          <div className="flex h-full w-full  gap-2">
            <Button asChild className="text-lg">
              <button className="h-full w-full bg-black  py-4  text-lg text-zinc-100   lg:px-8 lg:py-4">
                Reserver maintenant
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
