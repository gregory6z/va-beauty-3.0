"use client"

import { Cart } from "./components/cart"
import { ServiceChoose } from "./components/service-choose"

export default function ChooseService() {
  return (
    <>
      <div className="h-full min-h-screen w-full bg-zinc-200">
        <div className="lg:max-w--[1216px] flex flex-col lg:mx-auto lg:px-[2rem] xl:max-w-[1256px] ">
          <div className="gap-8 lg:grid lg:grid-cols-5 ">
            <div className="col-span-3">
              <header className="  z-10 mt-16 flex flex-col gap-1  bg-zinc-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
                <h1 className=" text-xl  font-semibold">
                  Prenez rendez-vous maintenant et transformez votre journée!
                </h1>
                <p className="text-zinc-900/60">Chois de la prestation:</p>
                <div className=" h-4 w-full bg-zinc-200"></div>
              </header>

              <div className="mb-20 flex flex-col gap-14 lg:gap-4 ">
                <ServiceChoose category="forfaits" />
                <ServiceChoose category="sourcils" />
                <ServiceChoose category="levres" />
              </div>
            </div>

            <div className="relative top-[7rem] col-span-2 hidden h-full max-h-[500px]  bg-black lg:sticky lg:block">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
