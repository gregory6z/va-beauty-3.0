import { ArrowUpRight, Euro } from "lucide-react"
import Image from "next/image"
import { ButtonAddToCart } from "./ButtonAddToCart"
import { Service } from "@/app/stores/Services"
import Link from "next/link"

interface ServiceProps {
  name: string
  description: string
  price: number
  duration: string
  imageUrl: string
  service: Service
}

export function ServiceCard({
  name,
  description,
  price,
  duration,
  imageUrl,
  service,
}: ServiceProps) {
  return (
    <div className="   flex h-full w-full flex-col border border-gray-200 bg-white   sm:grid-cols-2 lg:mx-0  lg:max-w-[1080px]    lg:flex-row  lg:gap-10 lg:p-10">
      <Link href={`${service.category}/${service.id}`} key={service.id}>
        <div className="  h-full  sm:mx-auto sm:min-w-[400px] sm:max-w-[400px] lg:mx-0   lg:min-w-[260px]     ">
          <Image
            src={imageUrl}
            alt={""}
            width={280}
            height={280}
            className="mx-auto h-full max-h-[300px]  w-full object-cover  lg:h-[260px] lg:w-[260px] "
          ></Image>
          {/* <div className="flex h-[20px]  w-full items-center justify-end bg-zinc-900 hover:bg-zinc-800  ">
            <p className="mx-4 text-left text-sm text-white  lg:mx-4 ">
              Plus info
            </p>
          </div> */}
        </div>
      </Link>
      <div className="flex  flex-1  flex-col  sm:mx-auto  lg:mx-0 ">
        <div className="mb-2 mt-4 flex flex-col  px-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between  lg:px-0">
          <Link
            href={`${service.category}/${service.id}`}
            key={service.id}
            className=" flex flex-col transition-all "
          >
            <h1 className="text-semibold text-2xl transition duration-200 ease-in-out hover:underline lg:text-2xl">
              {name}
            </h1>
            <p className="flex gap-1 text-sm text-zinc-900/60 hover:text-zinc-900">
              Savoir plus <ArrowUpRight className="h-3 w-3" />
            </p>
          </Link>

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
          </div>
          <ButtonAddToCart service={service} />
        </div>
      </div>
    </div>
  )
}
