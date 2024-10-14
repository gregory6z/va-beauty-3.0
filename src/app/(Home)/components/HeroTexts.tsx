import { Button } from "@/components/ui/button"
import { TextMotion } from "@/lib/framer-motion"
import Link from "next/link"

export function HeroTexts() {
  return (
    <main className=" relative mx-auto flex  w-full flex-col justify-center px-[1.5rem]  py-20 text-zinc-50 lg:max-w-[1280px] lg:px-10 xl:px-0">
      <TextMotion>
        <h1 className="mt-10 text-pretty  text-4xl font-bold tracking-tighter lg:max-w-[70%] lg:text-7xl xl:text-8xl">
          Éveillez Votre Beauté Intérieure
        </h1>
      </TextMotion>
      <section className="mt-10 space-y-4 ">
        <h3 className="text-xl font-semibold">
          VA Beauty : L'Art de Révéler Votre Éclat Unique
        </h3>
        <p className=" text-pretty text-zinc-300/80 lg:max-w-[36%] lg:text-balance xl:text-lg">
          Plongez dans un univers où la beauté transcende l'ordinaire. Nos
          artistes experts sculptent votre confiance, subliment vos traits et
          font rayonner votre charme naturel. Vivez une expérience de beauté sur
          mesure, où chaque regard devient une œuvre d'art. Chez VA Beauty,
          votre métamorphose commence maintenant.
        </p>
      </section>
      <Link
        href="/appointment/choose-service"
        className="mt-8 w-full text-lg font-bold lg:h-[3.5rem] lg:w-[300px]"
      >
        <Button
          className="w-full text-lg font-bold lg:h-[3.5rem] lg:w-[300px]"
          variant="secondary"
        >
          Rendez-vous
        </Button>
      </Link>
    </main>
  )
}
