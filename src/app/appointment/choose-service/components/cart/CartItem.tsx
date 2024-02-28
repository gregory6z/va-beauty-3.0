"use client"

import { useServiceStore } from "@/app/stores/Services"
import { Trash } from "lucide-react"

// eslint-disable-next-line react-hooks/rules-of-hooks

interface CartItemProps {
  name: string
  price: number
  serviceId: string
}

export function CartItem({ name, price, serviceId }: CartItemProps) {
  const { removeFromCart } = useServiceStore()

  return (
    <div className="flex  h-full w-full flex-row items-center justify-between border-b border-zinc-200 bg-white p-2">
      <p>{name}</p>
      <div className="flex items-center gap-2">
        <p>{price}$</p>
        <button
          onClick={() => removeFromCart(serviceId)}
          className="bg-zinc-400 px-2 py-1 text-white"
        >
          <Trash></Trash>
        </button>
      </div>
    </div>
  )
}
