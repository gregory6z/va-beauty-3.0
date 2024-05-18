import { dynamicBlurDataUrl } from "@/lib/dynamichrl"
import Image from "next/image"

export async function VideoContainer() {
  const bgAbstract = "/background-abstract.jpg"
  const blurBgAbstract = await dynamicBlurDataUrl(bgAbstract)

  return (
    <div className="relative h-full w-full  ">
      <div className=" absolute  bottom-0 h-[65%] w-full   lg:h-[60%] "></div>

      <div className=" relative   mx-4 flex h-[12rem] max-w-[30rem]  items-center justify-center rounded-tl-[25px] rounded-tr-[25px] border-l-[12px] border-r-[12px]  border-t-[12px] border-black bg-zinc-900 sm:mx-auto  sm:h-[400px] sm:max-w-[656px] md:mx-auto lg:mx-16   lg:h-[630px] lg:max-w-[1216px] xl:mx-auto xl:h-[680px] xl:max-w-[1256px]">
        <Image
          className=" absolute h-full w-full   animate-pulse object-cover     lg:opacity-40   "
          src="/background-abstract.jpg"
          width={1080}
          height={1080}
          alt={""}
          blurDataURL={blurBgAbstract}
          placeholder="blur"
          loading="lazy"
        ></Image>
        <div className="absolute right-0 w-[120px] transition-all  sm:w-[240px]  lg:w-[400px] xl:h-[668px] ">
          <div className="relative h-full w-full">
            <Image
              className="  h-full w-full   object-cover      "
              src="/valesca-6.png"
              width={470}
              height={618}
              loading="eager"
              alt={"Valesca Vieira"}
              quality={100}
            ></Image>
          </div>
        </div>
        <h1 className="absolute  bottom-0 font-sans text-[3rem]  text-white sm:text-[6rem] lg:text-[8rem] lg:leading-[12rem]  xl:text-[12rem]">
          VA BEAUTY
        </h1>
        <div className=" z-10 flex max-w-[200px] flex-col items-center gap-2 text-center text-zinc-900">
          <Image
            className=" h-[40px] w-[40px]  sm:h-[80px] sm:w-[80px]  lg:h-[100px] lg:w-[100px] "
            src="/play.svg"
            width={100}
            height={100}
            alt={""}
          ></Image>
          <p className="hidden text-sm text-zinc-50  lg:block">
            Appuyez sur lecture pour découvrir nos services.
          </p>
        </div>
      </div>
    </div>
  )
}
