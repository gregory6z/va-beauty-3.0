import Link from "next/link"
import { ServiceCard } from "./components/serviceCard"
import { CalendarCheck } from "lucide-react"
import {
  MotionCascade,
  MotionElement,
  MotionSlideLeft,
  MotionSlideRight,
} from "@/lib/framer-motion"
import { Button } from "@/components/ui/button"

export function ServicesHome() {
  return (
    <div className="relative h-full w-full  overflow-hidden bg-zinc-900 px-[1.5rem]">
      {/* <div className="absolute -left-[40rem] bottom-[1rem]  h-[20rem] w-[36rem] rounded-full bg-[#6C6C70]/50 blur-[200px] "></div> */}

      {/* <div className="absolute -right-[20%] h-[20rem] w-[36rem] rounded-full bg-[#6C6C70]/30 blur-[200px]"></div> */}

      <div className="relative z-10 my-[5rem] flex  flex-col lg:mx-auto lg:mt-28 lg:max-w-[1216px]  lg:px-[2rem] xl:max-w-[1256px] xl:px-[0] ">
        <MotionSlideRight delay={0.1}>
          <span className="font-logo text-sm  tracking-wide text-gray-50  lg:text-lg">
            PRESTATIONS
          </span>
        </MotionSlideRight>
        <div className="mt-6 flex w-full flex-col gap-6 lg:mt-10 lg:flex-row lg:justify-between lg:gap-0">
          <MotionSlideRight delay={0.2}>
            <h1 className="text-pretty text-left  text-lg font-normal text-gray-100  sm:text-2xl  lg:max-w-[52rem] lg:text-left lg:text-2xl ">
              Experts en : Révéler votre beauté intérieure, souligner votre
              singularité avec des services de qualité. Chaque visite, une
              expérience unique chez Va Beauty.
            </h1>
          </MotionSlideRight>
          <MotionSlideLeft delay={0.3}>
            <p className="text-pretty text-left text-sm  text-zinc-100/60   lg:max-w-[20rem] lg:text-right lg:text-base">
              Chez nous, chaque service est une promesse d'excellence, car nous
              croyons que votre beauté mérite une attention personnalisée.
            </p>
          </MotionSlideLeft>
        </div>
        <MotionCascade className=" mt-[2.5rem] grid grid-cols-1 gap-[36px] sm:grid-cols-2 lg:mt-[4rem] lg:grid-cols-3">
          <ServiceCard title="Sourcils" image="/sourcils.png">
            Ravivez votre estime de soi avec notre service de restructuration et
            spa des sourcils. Prenez rendez-vous dès maintenant et découvrez le
            pouvoir de sublimer votre beauté unique.
          </ServiceCard>
          <ServiceCard title="Levres" image="/levres-1.png">
            Offrez de la vie à vos lèvres avec des couleurs vibrantes et
            irrésistibles ! Prenez rendez-vous dès maintenant et découvrez le
            secret de lèvres toujours hydratées et magnifiquement colorées.
          </ServiceCard>
          <ServiceCard title="Forfaits" image="/forfaits.png">
            Forfait conçu pour fusionner les deux services à des prix
            attractifs, offrant des soins réguliers pour votre beauté. Cette
            offre vous permet de prendre soin de vous en programmant plusieurs
            services simultanément, avec des mensualités plus avantageuses.
          </ServiceCard>
        </MotionCascade>{" "}
        <MotionElement delay={0.5}>
          <Button
            asChild
            variant={"secondary"}
            size="xl"
            className="   flex  max-w-[320px] gap-2 bg-zinc-700 text-white text-zinc-100/90   transition-all    hover:font-bold  hover:text-zinc-900 lg:mx-auto lg:mb-[3rem] lg:mt-[5rem]"
          >
            <Link href="/appointment/choose-service" className=" ">
              Prenez rendez-vous!{" "}
              <CalendarCheck className="h-6 w-6 "></CalendarCheck>
            </Link>
          </Button>
        </MotionElement>
      </div>
    </div>
  )
}
