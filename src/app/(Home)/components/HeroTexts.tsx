import { Button } from "@/components/ui/button"
import { TextMotion } from "@/lib/framer-motion"
import Link from "next/link"

export function HeroTexts() {
  return (
    <main className=" relative mx-auto mb-10 mt-10 flex w-full flex-col  justify-center px-[1.5rem] text-zinc-50 lg:max-w-[1280px] lg:px-0">
      <TextMotion>
        <h1 className="text-pretty  text-4xl font-bold tracking-tighter lg:max-w-[70%] lg:text-8xl">
          Sublimez votre beauté naturelle.
        </h1>
      </TextMotion>
      <section>
        <p className="mt-10  text-zinc-300/80 lg:max-w-[36%] lg:text-balance lg:text-lg">
          Va beauty, où vos rêves de beauté prennent vie. Faites confiance à nos
          experts pour révéler votre éclat naturel. Profitez de nos services sur
          mesure pour un résultat parfait. Redécouvrez la beauté avec les
          meilleurs soins du regard de la région.
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
