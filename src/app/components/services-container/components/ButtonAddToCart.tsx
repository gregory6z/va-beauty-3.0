"use client"

import { Service, useServiceStore } from "@/app/stores/Services"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ButtonProps {
  service: Service
}

export function ButtonAddToCart({ service }: ButtonProps) {
  const { checkIfCartItemAlreadyExists, addToCart, updateTotals } =
    useServiceStore()

  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-6   lg:ml-auto	 lg:flex-row">
      <Button
        onClick={() => {
          addToCart(service)
          updateTotals()
        }}
        size="xl"
        className=" z-10 flex h-[56px] w-full gap-4 rounded-t-none lg:w-[300px] lg:rounded-sm  "
        disabled={checkIfCartItemAlreadyExists(service.id)}
      >
        Ajouter au panier
        <ShoppingCart className="h-8 w-8" />
      </Button>
    </div>
  )
}
