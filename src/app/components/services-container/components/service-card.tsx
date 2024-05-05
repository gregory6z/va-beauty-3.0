import { Button } from "@/components/ui/button"
import { Euro } from "lucide-react"
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
    <div className="   flex h-full w-full flex-col border border-gray-200 bg-white   sm:grid-cols-2 lg:mx-0 lg:min-h-[24rem] lg:max-w-[1080px]    lg:flex-row  lg:gap-10 lg:p-10">
      <div className="  h-full bg-black  sm:mx-auto sm:min-w-[400px] sm:max-w-[400px] lg:mx-0   lg:min-w-[260px]     ">
        <Image
          src={imageUrl}
          alt={""}
          width={280}
          height={280}
          className="mx-auto h-full max-h-[300px]  w-full object-cover  lg:h-[260px] lg:w-[260px] "
        ></Image>
        <div className="flex h-[32px]  w-full items-center justify-end bg-zinc-900 hover:bg-zinc-800  ">
          <p className="mx-4 text-left text-sm text-white  lg:mx-4 ">
            Plus info
          </p>
        </div>
      </div>
      <div className="flex  flex-1  flex-col  sm:mx-auto  lg:mx-0 ">
        <div className="mb-2 mt-4 flex flex-col  px-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between  lg:px-0">
          <h1 className="text-bold  text-2xl lg:text-2xl   ">{name}</h1>
          <p className="text-sm">Duration {duration} min</p>
        </div>
        <p className=" lg:text-normal	 h-full flex-1 text-pretty px-4 text-zinc-900/60 lg:mt-6 lg:min-h-[120px] lg:w-[90%] lg:flex-1 lg:flex-grow lg:px-0">
          {description}
        </p>

        <div className="mt-auto flex h-full w-full flex-col  items-center justify-between lg:flex-row">
          <div className="my-6 flex items-center gap-8 lg:my-0">
            <p className="flex text-5xl lg:my-0 lg:w-full lg:text-5xl">
              {price},00 <Euro width="20"></Euro>
            </p>
            <Image
              className="h-[50px] w-[50px] lg:hidden lg:h-[100px] lg:w-[100px]"
              src={"/add-to-cart.svg"}
              width={100}
              height={100}
              alt={"ola"}
            ></Image>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-end gap-6   lg:ml-auto	 lg:flex-row">
            <div className=" hidden flex-col items-center justify-center lg:flex  ">
              <Image
                className=" h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]"
                src={"/add-to-cart.svg"}
                width={100}
                height={100}
                alt={"ola"}
              ></Image>
            </div>

            <Button size="xl" className=" w-full lg:w-[300px]  ">
              Reserver maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
