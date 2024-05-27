import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutUs() {
  return (
    <div className="h-full w-full border-b border-t bg-zinc-100 py-[4rem] lg:py-[8rem]">
      <div className="mx-auto grid h-full w-full flex-col items-center gap-14 px-[1.5rem]  lg:max-w-[1216px] lg:grid-cols-2 lg:flex-row lg:gap-10 lg:px-0">
        <div className="order-2 flex flex-col  lg:order-none ">
          <h1 className="text-2xl font-bold lg:text-4xl">
            À propos de Va Beauty
          </h1>
          <div className="mt-10 space-y-4 text-base text-zinc-900">
            <p>
              Bienvenue chez VA Beauty, votre adresse incontournable pour
              sublimer votre regard à Aubagne. Spécialistes de la
              micro-pigmentation des sourcils et des lèvres, notre équipe vous
              propose des services haut de gamme dans une ambiance alliant
              l'esthétique brésilienne au charme français.Nous disposons de
              toutes les formations et techniques sophistiquées pour vous
              garantir des résultats naturels, durables et à la hauteur de vos
              attentes.
            </p>
            <p>
              La qualité est très importante pour nous chez VA Beauty. Nous
              sélectionnons les meilleurs produits du monde entier, y compris
              des marques sophistiquées, pour nous assurer que vous êtes
              satisfait. Notre objectif est de vous offrir une expérience de
              beauté hors du commun, où chaque petite chose est soigneusement
              planifiée pour que vous vous sentiez et vous sentiez incroyable.
            </p>
            <p className="mt-10 text-sm text-zinc-600">
              N'hésitez pas à franchir nos portes pour découvrir nos services et
              vous laisser choyer par notre équipe experte. Chez VA Beauty,
              votre beauté et votre bien-être sont notre priorité absolue.
            </p>
          </div>
          <Link href="https://www.instagram.com/va_beauty_ofc/" target="_blank">
            <Button className="mt-12 flex h-[56px] w-full gap-4 text-lg lg:w-[300px]">
              Galerie Instagram <Instagram strokeWidth={1}></Instagram>
            </Button>
          </Link>
        </div>
        <div className="grid h-[26rem] grid-cols-2 gap-4 lg:h-full lg:gap-6 ">
          <div className="flex  flex-1 flex-col gap-4 lg:gap-6">
            <div className="min-h-[60%] w-full rounded-lg border ">
              <Image
                className="  h-full w-full rounded-sm object-cover opacity-90   "
                src="/about-us-1.png"
                width={484}
                height={626}
                quality={100}
                alt={"map of the location of the business"}
              ></Image>
            </div>
            <div className="h-[40%] w-full  rounded-lg border">
              <Image
                className="  h-full w-full rounded-sm object-cover    "
                src="/about-us-2.png"
                width={484}
                height={626}
                alt={"map of the location of the business"}
                quality={100}
              ></Image>
            </div>
          </div>
          <div>
            <div className="mt-20 h-[70%] w-full rounded-lg border">
              <Image
                className="  h-full w-full rounded-sm object-cover    "
                src="/about-us-3.png"
                width={484}
                height={626}
                alt={"map of the location of the business"}
                quality={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
