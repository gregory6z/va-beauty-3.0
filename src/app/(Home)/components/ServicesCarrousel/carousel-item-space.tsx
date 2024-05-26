import { Button } from "@/components/ui/button"
import { CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface CarouselItemSpaceProps {
  children: ReactNode
  list?: string[]
  image?: string
  imageTopRight?: boolean
  forfaits?: boolean
  link: string
}

export function CarouselItemSpace({
  children,
  forfaits,
  list,
  link,
  image,
  imageTopRight,
}: CarouselItemSpaceProps) {
  return (
    <CarouselItem className=" ml-4 flex  h-[570px] basis-[80%] flex-col rounded-sm border bg-white  pl-0  shadow-lg lg:ml-8  lg:basis-[80%]  lg:flex-row  ">
      <div
        className={`order-2 flex h-full flex-col pl-0 lg:order-none ${image ? "lg:w-[50%]" : ""} lg:pl-12 lg:pt-20`}
      >
        {" "}
        <h1 className="ml-10 mt-4 text-2xl font-semibold tracking-tight lg:mt-0 lg:text-4xl">
          {children}
        </h1>
        {list && (
          <ul className="ml-10 mt-4 list-inside list-disc text-zinc-900/60 lg:ml-24 lg:mt-20 lg:text-xl">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {forfaits && (
          <div className="flex flex-col">
            <p className="text-pretty p-4 lg:mx-auto lg:mt-10 lg:w-[80%] lg:p-0 lg:text-lg">
              Forfait conçu pour fusionner les deux services à des prix
              attractifs, offrant des soins réguliers pour votre beauté. Cette
              offre vous permet de prendre soin de vous en programmant plusieurs
              services simultanément, avec des mensualités plus avantageuses.
            </p>
            <ul className="ml-10 mt-4 list-inside list-disc text-zinc-900/60 lg:ml-[10rem] lg:mt-10  lg:text-xl">
              <li>Sourcils + Lévres</li>
              <li>Forfaits mensuelles</li>
              <li>Forfaits par packets</li>
              <li>prix plus avantageuses</li>
            </ul>
          </div>
        )}
        <Link
          href={`/${link}`}
          className="mt-auto flex  w-full   lg:mb-10 lg:ml-10 lg:w-[200px]"
        >
          <Button className=" h-[42px] w-full rounded-t-none">
            Savoir plus
          </Button>
        </Link>
      </div>
      {image && (
        <div className=" h-full w-full  lg:w-[50%]">
          <Image
            src={image}
            alt="Services chez Va Beauty"
            width={1500}
            height={570}
            className={`h-full w-full object-cover ${imageTopRight ? "object-right-top" : ""}`}
          />
        </div>
      )}
    </CarouselItem>
  )
}
