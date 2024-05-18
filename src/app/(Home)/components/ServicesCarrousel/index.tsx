import { Separator } from "@/components/ui/separator"
import { CarouselContainer } from "./carousel"

export function ServicesCarrousel() {
  return (
    <div className=" mx-[1.5rem] mb-24 mt-20 bg-zinc-100 lg:mx-auto lg:mt-0 xl:max-w-[1256px]">
      <header className="  flex flex-col items-center space-y-4 lg:mb-12  lg:mt-20 lg:space-y-8">
        <h1 className=" text-pretty text-center text-2xl font-extrabold tracking-tight lg:mx-0 lg:text-left lg:text-5xl ">
          Services offerts chez Va Beauty
        </h1>
        <p className="text-pretty lg:text-balance lg:text-center lg:text-lg  ">
          Experts en: Révéler votre beauté intérieure, souligner votre
          singularité avec des services de qualité. Chaque visite, une
          expérience unique chez Va Beauty.
        </p>
      </header>
      <div className="  hidden  items-center justify-center gap-10 lg:flex">
        <div className="flex gap-10">
          <h1 className="text-lg font-bold">Sourcils</h1>
          <Separator className="h-8 w-[2px]" orientation="vertical"></Separator>
        </div>
        <div className="flex gap-10">
          <h1 className="text-lg font-bold">Levres</h1>
          <Separator className="h-8 w-[2px]" orientation="vertical"></Separator>
        </div>
        <div className="flex h-8 gap-10">
          <h1 className="text-lg font-bold">Forfaits</h1>
        </div>
      </div>
      <CarouselContainer />
    </div>
  )
}
