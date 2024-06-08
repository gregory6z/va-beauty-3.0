// import { dynamicBlurDataUrl } from "@/lib/dynamichrl"
import { HeroTexts } from "./HeroTexts"

import Image from "next/image"

export async function Hero() {
  return (
    <main className=" flex w-full flex-col justify-center bg-zinc-900 lg:relative lg:h-[calc(100vh-5rem)] lg:flex-col">
      <div className="relative order-2 h-[28rem] lg:absolute lg:order-1 lg:h-full lg:w-[40%]">
        <Image
          src={"/dark-marble-hero1.png"}
          alt={"dark marble background"}
          // blurDataURL={darkMarbleUrl}
          width={400}
          height={281}
          className=" h-full w-full object-cover opacity-50 lg:h-[calc(100vh-5rem)] "
        ></Image>
        <article className="absolute inset-0 lg:hidden">
          <HeroTexts />
        </article>
      </div>
      <div className=" w-full lg:absolute lg:left-[40%] lg:w-[60%] ">
        <Image
          src={"/hero.jpg"}
          alt={"dark marble background"}
          // blurDataURL={darkMarbleUrl}
          width={672}
          height={448}
          quality={100}
          className=" h-full w-full object-cover  lg:h-[calc(100vh-5rem)] "
        ></Image>
      </div>

      <article className="hidden lg:block">
        <HeroTexts />
      </article>
    </main>
  )
}
