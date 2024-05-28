import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ButtonWhatsapp() {
  return (
    <div className=" mx-auto flex w-full flex-col items-center justify-between rounded-sm border border-zinc-700 bg-zinc-800/40 p-6 px-[1.5rem] lg:flex-row lg:p-6 ">
      <div className=" w-full">
        <div className="mb-3 flex h-12 w-12 items-center justify-center space-y-4 rounded-full bg-[#00A277]  ">
          {/* <WhatsApp /> */}
          <Image
            src={"/whatsapp.svg"}
            // blurDataURL={heroBlurUrl}
            alt={"belle femme rousse au regard fixe aux yeux bleus"}
            width={22}
            height={22}
            className=" "
          ></Image>
        </div>
        <p className="w-full text-zinc-200">Avez-vous des questions?</p>
        <p className="text-sm text-zinc-400">Envoyez un message sur WhatsApp</p>
      </div>
      <Link
        className=" w-full pt-4 lg:w-[256px]"
        target="_blank"
        href="https://wa.me/message/RSR5XCXWE2WBP1"
      >
        <Button className=" h-[56px] w-full  bg-[#27E0A9] font-bold tracking-wide text-zinc-800 hover:bg-[#072A23]  hover:text-white lg:w-[256px]">
          APPELER SUR WHATSAPP
        </Button>
      </Link>
    </div>
  )
}
