import Image from "next/image"
import { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  children: ReactNode
  image: string
}

export function ServiceCard({ title, image, children }: ServiceCardProps) {
  return (
    <div className="flex h-full w-full flex-col bg-zinc-800  pb-6 lg:min-h-[462px] lg:pb-0">
      <div className="h-[12rem] w-full bg-white ">
        <Image
          className=" h-full w-full object-cover"
          src={image}
          width={383}
          height={221}
          alt={"image service card"}
        ></Image>
      </div>
      <div className="flex flex-col p-6 text-center ">
        <h2 className="mb-4   text-2xl text-zinc-100/90">{title}</h2>
        <p className="text-pretty text-zinc-100/60 lg:text-base">{children}</p>
      </div>
    </div>
  )
}
