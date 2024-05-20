import { Button } from "@/app/appointment/choose-service/components/ui/button"

import Image from "next/image"

interface OfferCardProps {
  name: string
  price: number
  image: string
}

export function OfferCard({ name, price, image }: OfferCardProps) {
  const exPrix = price + 1.25

  return (
    <div className="flex h-full w-full  flex-col rounded-sm border  bg-white shadow-md">
      <div className="relative h-[18rem] w-full ">
        <Image
          className=" h-full w-full rounded-t-sm object-cover"
          src={image}
          width={383}
          height={221}
          alt={""}
        ></Image>

        <div className="absolute right-0 top-0 z-10  cursor-pointer rounded-tr-sm bg-zinc-900 px-4 text-white hover:bg-zinc-800 ">
          Plus info
        </div>
      </div>
      <div className="flex flex-col bg-white p-6 text-center ">
        <h2 className=" mb-6  text-2xl text-zinc-900/90 lg:min-h-[60px]">
          {name}
        </h2>
        <p className=" text-xl text-zinc-900/60	 line-through">€ {exPrix},00</p>
        <p className="text-5xl  text-zinc-900/90">€ {price},00</p>

        <Button className="my-4 min-h-[3rem] w-full py-3 text-lg">
          Reserver
        </Button>
      </div>
    </div>
  )
}
