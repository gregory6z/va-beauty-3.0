import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ButtonWhatsapp() {
  return (
    <div className=" flex  w-full items-center justify-between rounded-sm  border border-zinc-700 bg-zinc-800/40 p-6">
      <div className="">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A277]  ">
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
        <p className="  w-full text-zinc-200">Ficou com alguma dúvida? real.</p>
        <p className="text-sm text-zinc-400">Envie uma mensagem no WhatsApp</p>
      </div>
      <Link target="_blank" href="https://wa.me/message/RSR5XCXWE2WBP1">
        <Button className="bg-[#27E0A9] font-bold tracking-wide text-zinc-800  hover:bg-[#072A23] hover:text-white">
          APPELER DANS WHATSAPP
        </Button>
      </Link>
    </div>
  )
}
