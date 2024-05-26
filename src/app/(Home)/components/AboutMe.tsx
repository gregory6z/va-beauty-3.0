import { MotionElement } from "@/lib/framer-motion"
import Image from "next/image"

export function AboutMe() {
  return (
    <div className="relative flex h-full w-full bg-zinc-900  py-20 lg:min-h-screen lg:py-12 ">
      <div className=" z-10 flex w-full flex-col items-center justify-between gap-8 px-[1.5rem] lg:mx-auto lg:flex-row  lg:gap-0 lg:px-16   lg:py-20 xl:max-w-[1256px] xl:px-0">
        <div className="flex flex-col gap-12 lg:max-w-[624px] lg:gap-12 ">
          {/* <Image
            src={"/dark-marble-hero1.png"}
            alt={"dark marble background"}
            width={1344}
            height={996}
            className=" h-full w-full object-cover opacity-50 lg:h-[calc(100vh-5rem)] "
          ></Image> */}
          <MotionElement>
            <h1 className="tracker-tight text-4xl   text-zinc-100 lg:text-4xl">
              À propos de moi...
            </h1>
          </MotionElement>
          <article className="flex flex-col gap-4 text-base text-zinc-100/60 ">
            <MotionElement>
              <p className="">
                Je suis Valesca Vieira, la fondatrice et propriétaire de VA
                Beauty. En tant que micropigmentatrice brésilienne et
                esthéticienne spécialisée, je m'investis passionnément dans
                l'art d'améliorer la beauté du visage, en mettant
                particulièrement l'accent sur les sourcils et les lèvres. Chaque
                trait que je crée est une expression unique de la beauté
                naturelle de chaque individu, cherchant non seulement à
                souligner les caractéristiques, mais aussi à renforcer la
                confiance en soi.
              </p>
            </MotionElement>
            <MotionElement>
              <p>
                Chez VA Beauty, notre engagement va au-delà des procédures de
                micropigmentation. Nous offrons une expérience personnalisée,
                chaleureuse et de haute qualité. Mon approche affinée en
                micropigmentation labiale et poil à poil reflète la quête
                incessante de la perfection artistique, aboutissant à des œuvres
                qui mettent en valeur la singularité de chaque visage.
              </p>
            </MotionElement>
            <MotionElement>
              <p>
                En choisissant VA Beauty, vous entrez dans un espace où votre
                parcours de beauté est soigneusement façonné. Je suis là pour
                transformer vos aspirations en réalité, en offrant non seulement
                des résultats exceptionnels, mais aussi un environnement où
                votre beauté unique est célébrée avec maîtrise. Bienvenue dans
                le monde de VA Beauty, où la confiance et la beauté se
                rencontrent.
              </p>
            </MotionElement>
          </article>
        </div>
        <MotionElement className="min-h-[433px] w-full rounded-lg   lg:min-h-[626px]  lg:w-0 lg:min-w-[484px]">
          <Image
            className="  h-full w-full  rounded-lg object-cover   "
            src="/valesca-2.png"
            width={484}
            height={626}
            alt={
              "Valesca Vieira, professionnelle de l'esthétique, esthéticienne spécialisée en sourcils et lèvres, beauté du regard"
            }
            quality={100}
          ></Image>
        </MotionElement>
      </div>
    </div>
  )
}
