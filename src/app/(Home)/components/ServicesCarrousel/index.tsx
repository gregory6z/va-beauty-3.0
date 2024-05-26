import { Separator } from "@/components/ui/separator"
import { CarouselContainer } from "./carousel"

export function ServicesCarrousel() {
  return (
    <main className=" mx-[1.5rem] my-[5rem] bg-zinc-100 lg:mx-auto lg:my-[8rem]   xl:max-w-[1256px]">
      <header className="  flex flex-col items-center space-y-4 lg:mb-12   lg:space-y-8">
        <h1 className=" text-pretty text-center text-2xl font-bold tracking-tight lg:mx-0 lg:text-left lg:text-5xl ">
          Services offerts chez Va Beauty
        </h1>
        <p className="text-pretty lg:text-balance lg:text-center lg:text-lg  ">
          Experts en: Révéler votre beauté intérieure, souligner votre
          singularité avec des services de qualité. Chaque visite, une
          expérience unique chez Va Beauty.
        </p>
      </header>
      <section className="  hidden  items-center justify-center gap-10 lg:flex">
        <article className="flex gap-10">
          <h2 className="text-lg font-bold">Sourcils</h2>
          <Separator className="h-8 w-[2px]" orientation="vertical"></Separator>
        </article>
        <article className="flex gap-10">
          <h2 className="text-lg font-bold">Levres</h2>
          <Separator className="h-8 w-[2px]" orientation="vertical"></Separator>
        </article>
        <article className="flex h-8 gap-10">
          <h1 className="text-lg font-bold">Forfaits</h1>
        </article>
      </section>
      <CarouselContainer />
    </main>
  )
}
