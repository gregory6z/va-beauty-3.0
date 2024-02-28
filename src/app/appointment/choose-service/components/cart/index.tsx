"use client"

import { useServiceStore } from "@/app/stores/Services"
import { CartItem } from "./CartItem"
import useStore from "@/app/stores/use-store"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Cart() {
  const services = useStore(useServiceStore, (state) => state.services) || []

  const router = useRouter()

  // Verifica se o array de serviços está vazio
  const isCartEmpty = services.length === 0

  return (
    <div className="mt-4 flex  h-full w-full flex-col   bg-white  p-8">
      <header className="mb-2">
        <p className="text-lg font-bold">Panier</p>
      </header>
      <div className="flex flex-col overflow-auto">
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
      <div className="mt-auto">
        {/* Desativa o botão se o carrinho estiver vazio */}
        <Button
          className="my-3 h-full w-full bg-black text-white disabled:cursor-not-allowed"
          disabled={isCartEmpty}
          onClick={() => router.push("/appointment/choose-time")}
        >
          Avancar
        </Button>
      </div>
    </div>
  )
}
