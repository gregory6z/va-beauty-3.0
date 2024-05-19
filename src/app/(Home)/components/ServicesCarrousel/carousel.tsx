import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselItemSpace } from "./carousel-item-space"

export function CarouselContainer() {
  return (
    <Carousel
      className="mt-12 "
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <div className=" absolute top-1  z-[2] w-[210px] bg-white  blur-[50px] lg:-right-20 lg:h-[560px] "></div>
      <CarouselContent className=" relative ml-0   lg:mx-auto  ">
        <CarouselItemSpace
          link="sourcils"
          image="/forfaits.png"
          list={[
            "Épilation",
            "Teinture",
            "Mapping",
            "SPA",
            "Micropigmentation",
          ]}
          imageTopRight
        >
          Sourcils
        </CarouselItemSpace>
        <CarouselItemSpace
          link="levres"
          image="/lips3.jpg"
          list={[
            "Hidratation",
            "Hidra lips",
            "Nano lips",
            "SPA",
            "Micropigmentation",
          ]}
        >
          Lévres
        </CarouselItemSpace>
        <CarouselItemSpace link="forfaits" forfaits>
          Forfaits
        </CarouselItemSpace>

        {/* <CarouselItem className=" ml-4 flex  h-[570px] basis-[90%] flex-col rounded-sm border bg-white  pl-0  shadow-lg lg:ml-8  lg:basis-[80%]  lg:flex-row  ">
          <div className="order-2 flex h-full flex-col pl-0 lg:order-none lg:w-[50%] lg:pl-12 lg:pt-20">
            <h1 className="ml-10 mt-4 text-2xl font-extrabold tracking-tight lg:mt-0 lg:text-4xl">
              Sourcils
            </h1>
            <ul className="ml-10 mt-4 list-inside list-disc text-zinc-900/60 lg:ml-24 lg:mt-20 lg:text-xl">
              <li>Epilação</li>
              <li>Henna</li>
              <li>Mapeamento</li>
              <li>Spa</li>
              <li>Micropigmentação</li>
            </ul>

            <Button className="mt-auto  lg:mb-10 lg:ml-10 lg:w-[200px]">
              Savoir plus
            </Button>
          </div>
          <div className=" h-full w-full  lg:w-[50%]">
            <Image
              className="  h-full w-full object-cover object-right-top"
              src="/forfaits.png"
              width={1500}
              height={1000}
              alt={"image service card"}
            ></Image>
          </div>
        </CarouselItem> */}
        {/* <CarouselItem className=" flex h-[570px] flex-col rounded-sm border bg-white   shadow-lg lg:ml-8   lg:basis-[80%]  lg:flex-row  ">
          <div className="ml-24 flex flex-col pl-12 pt-20 lg:w-[50%]">
            <h1 className="text-4xl font-extrabold tracking-tight">Levres</h1>
            <ul className="mt-20  list-inside list-disc text-xl text-zinc-900/60">
              <li>Hidratacao</li>
              <li>Henna</li>
              <li>Mapeamento</li>
              <li>Spa</li>
              <li>Micropigmentação</li>
            </ul>
            <Button className="mb-10 ml-10 mt-auto w-[200px]">
              Savoir plus
            </Button>{" "}
          </div>
          <div className="h-full  w-full  lg:w-[50%]">
            <Image
              className="  h-full  w-full object-cover "
              src="/lips3.jpg"
              width={1500}
              height={1000}
              alt={"image service card"}
            ></Image>
          </div>
        </CarouselItem> */}
        {/* <CarouselItem className=" ml-8 flex h-[570px] rounded-sm  border bg-white  lg:basis-[80%] ">
          <div className="flex pl-12 pt-20 lg:w-[50%]">
            <h1 className="text-4xl font-extrabold tracking-tight">Forfaits</h1>
          </div>
          <div className="h-full w-full  lg:w-[50%]"></div>
        </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  )
}
