import { Button } from "@/components/ui/button"
import { dynamicBlurDataUrl } from "@/lib/dynamichrl"
import { TextMotion } from "@/lib/framer-motion"
import { CalendarCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function HeaderHome() {
  const bgHomeUrl = "/bg-home.jpg"
  const blurUrl = await dynamicBlurDataUrl(bgHomeUrl)
  return (
    <header className=" h-[440px]   w-full   lg:h-[35rem] ">
      <div className="relative items-center justify-center    ">
        <Image
          className="  absolute z-[-2] h-[700px] min-h-full w-full    object-cover  transition-all   sm:h-[1050px] lg:h-[1250px]    "
          src={bgHomeUrl}
          width={1440}
          blurDataURL={blurUrl}
          height={528}
          placeholder="blur"
          loading="lazy"
          alt={"background image"}
        ></Image>
        <div className="absolute left-1/2 top-[15rem] z-[-1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform  rounded-full  bg-white  blur-[80px] lg:top-[22rem] lg:h-[600px] lg:w-[900px] lg:blur-[140px]"></div>
      </div>
      <TextMotion>
        <div className=" relative z-10 flex min-h-[460px]   flex-col items-center justify-center gap-4 text-balance    px-[1rem] text-center sm:max-w-[40rem] lg:mx-auto lg:min-h-[600px] lg:max-w-[60rem] lg:gap-6  ">
          <p className="text-xl font-bold lg:text-lg">Bonjour, bienvenue!</p>
          <h1 className=" text-pretty font-sans text-3xl   font-black tracking-tight  text-zinc-900/90  antialiased sm:text-3xl lg:text-7xl">
            {" "}
            Sublimez votre beauté naturelle.
          </h1>
          <p className="sm:text-md text-pretty  text-base font-semibold text-zinc-900/80  lg:px-20 lg:text-lg">
            VA Beauty, où vos désirs de beauté deviennent réalité. Faites
            confiance à nos professionnels pour révéler votre éclat naturel.
          </p>
          <Link href={"/appointment/choose-service"}>
            <Button
              size="xl"
              className="  flex items-center justify-center gap-2  "
            >
              Prenez rendez-vous!{" "}
              <CalendarCheck
                strokeWidth={1.5}
                className="h-6 w-6"
              ></CalendarCheck>
            </Button>
          </Link>

          <div className="flex gap-6">
            <Image
              className="  "
              src="tiktok.svg"
              width={30}
              height={30}
              alt={"tiktok logo"}
            ></Image>
            <Image
              className="  "
              src="instagram.svg"
              width={30}
              height={30}
              alt={"instagram logo"}
            ></Image>
            <Image
              className="  "
              src="youtube logo"
              width={30}
              height={40}
              alt={"background image"}
            ></Image>
          </div>
        </div>
      </TextMotion>
    </header>
  )
}
