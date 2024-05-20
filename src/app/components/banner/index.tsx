import { TextMotion } from "@/lib/framer-motion"
import Image from "next/image"

interface BannerProps {
  image: string

  category: string
}

export function Banner({ image, category }: BannerProps) {
  let text = ""

  if (category === "sourcils") {
    text =
      "Sublimez votre beauté naturelle en sculptant vos sourcils avec perfection."
  }
  if (category === "forfaits") {
    text =
      "Découvrez une expérience de beauté inoubliable avec nos forfaits sur mesure."
  }
  if (category === "levres") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    text =
      "Sublimez vos lèvres avec nos traitements personnalisés pour une beauté qui parle d'elle-même"
  }
  return (
    <>
      <main className="relative flex h-full w-full bg-[#020202]">
        <header className=" mx-auto flex  w-full flex-col items-center  lg:h-[25.5rem]  lg:flex-row xl:max-w-[1256px]">
          <div className=" h-full w-full ">
            <Image
              className=" bottom-0  lg:absolute lg:left-0 lg:h-[408px] "
              width={792}
              height={408}
              loading="eager"
              alt={"banner image category"}
              src={image}
            ></Image>
          </div>
          <div className="">
            <TextMotion>
              <h1 className=" relative order-1 mx-[1.5rem] text-balance py-5 text-center text-xl font-extrabold tracking-tight text-gray-100 sm:text-3xl lg:py-0 lg:text-right lg:text-5xl">
                {text}
              </h1>
            </TextMotion>

            <h1 className="hidden lg:block">{text}</h1>
          </div>
        </header>
      </main>
      {/* <div className="flex h-full w-full bg-black ">
        <h1 className=" text-bold mx-6 my-4 text-center text-xl text-white lg:hidden">
          {children}
        </h1>
      </div> */}
    </>
  )
}
