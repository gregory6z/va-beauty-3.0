import { Button } from "@/components/ui/button"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <main className="h-full w-full bg-zinc-200 ">
      <div className="mx-auto  grid items-center gap-10 px-[1.5rem] py-[4rem] lg:max-w-[1216px] lg:grid-cols-2 lg:gap-20 lg:px-[0] lg:py-20 ">
        <article className="order-2 lg:order-none">
          <h1 className="text-center text-2xl font-bold  lg:text-left lg:text-4xl">
            Contacte-nous
          </h1>
          <div className=" mt-10  w-full space-y-2 text-center  text-lg lg:ml-10 lg:mt-14 lg:space-y-4 lg:text-left">
            <div className="flex w-full flex-col items-center lg:flex-row lg:gap-4  ">
              <div className="flex  h-10 w-10 items-center justify-center lg:h-7 lg:w-7">
                <MapPin className=" h-full w-full" />
              </div>
              <p className="0 text-pretty  text-zinc-700">
                140, Traverse des aubes Bat C , 13400 Aubagne <br></br>{" "}
                Residence Clair soleil
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-4 ">
              <div className="flex h-9 w-9 items-center justify-center lg:h-6 lg:w-6">
                <Mail className=" h-full w-full" />
              </div>
              <p className="text-zinc-700">contact@vabeauty.com</p>
            </div>
            <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-4 ">
              <div className="flex h-9 w-9 items-center justify-center lg:h-6 lg:w-6">
                <Phone className=" h-full w-full" />
              </div>
              <p className="text-zinc-700">07 45 64 52 40</p>
            </div>
            <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-4 ">
              <div className="flex h-10 w-10 items-center justify-center lg:h-7 lg:w-7">
                <Clock className=" h-full w-full" />
              </div>

              <p className="text-zinc-700">
                Ouverture du mardi au samedi: 09:00h jusqu'à 18:00h
              </p>
            </div>
          </div>
          <Button className="mt-10 h-[56px] w-full  text-lg lg:ml-10 lg:mt-16 lg:w-[300px]">
            Rendez-vous
          </Button>
        </article>
        <div className="h-[416px] rounded-sm border border-zinc-300 bg-white">
          <Image
            className="  h-full w-full  rounded-sm object-cover   "
            src="/map.png"
            width={484}
            height={626}
            alt={"map of the location of the business"}
            quality={100}
          ></Image>
        </div>
      </div>
    </main>
  )
}
