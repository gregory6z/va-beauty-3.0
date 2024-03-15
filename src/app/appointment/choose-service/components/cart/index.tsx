"use client"

import { useServiceStore } from "@/app/stores/Services"
import { CartItem } from "./CartItem"
import useStore from "@/app/stores/use-store"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Check, Euro } from "lucide-react"
import Image from "next/image"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

export function Cart() {
  dayjs.extend(duration)

  const services = useStore(useServiceStore, (state) => state.services) || []

  const totalPrice = useStore(useServiceStore, (state) => state.totalPrice) || 0
  const totalDuration =
    useStore(useServiceStore, (state) => state.totalDuration) || 0

  const totalDurationFormatted = dayjs
    .duration(totalDuration, "minutes")
    .format("H[h] m[m]")

  const router = useRouter()

  // Verifica se o array de serviços está vazio
  const isCartEmpty = services.length === 0

  return (
    <div className="mt-4 flex  h-full w-full flex-col   bg-white  p-8">
      <header className="mb-2">
        <p className="text-lg font-bold">Panier</p>
      </header>
      <div className="flex h-full flex-col overflow-auto">
        {services.map((service) => {
          return (
            <CartItem
              serviceId={service.id}
              name={service.name}
              price={service.price}
              key={service.id}
            />
          )
        })}
      </div>
      {isCartEmpty ? (
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-4 ">
          <Image
            src={"/cart.gif"}
            width={150}
            height={150}
            alt={"cart empty"}
          ></Image>

          <p className="  text-pretty px-4 text-left text-zinc-900/60">
            Votre panier est vide. Veuillez ajouter un service, s'il vous plaît.
          </p>
        </div>
      ) : (
        <>
          <div className="relative z-10 mt-auto flex h-16 w-full items-center justify-between bg-white ">
            <p className="mt-2 flex text-lg">
              Total:{" "}
              <span className="ml-2 flex text-xl">
                {totalPrice} <Euro width={16}></Euro>
              </span>
            </p>
            <p className="mt-2">Duration: {totalDurationFormatted} </p>
          </div>
        </>
      )}
      <div className="mt-auto">
        <Button
          className="my-3 flex h-full w-full gap-2 bg-black text-lg text-white disabled:cursor-not-allowed"
          disabled={isCartEmpty}
          onClick={() => router.push("/appointment/choose-time")}
        >
          Confirmer les services
          <Check className=" text-zinc-100" />
        </Button>
      </div>
    </div>
  )
}
