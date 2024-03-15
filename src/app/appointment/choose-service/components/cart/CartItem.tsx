"use client"

import { useServiceStore } from "@/app/stores/Services"
import { Euro, Trash2 } from "lucide-react"

// eslint-disable-next-line react-hooks/rules-of-hooks

interface CartItemProps {
  name: string
  price: number
  serviceId: string
}

export function CartItem({ name, price, serviceId }: CartItemProps) {
  const { removeFromCart, updateTotals } = useServiceStore()

  return (
    <div className=" flex  h-[50px]  flex-row items-center justify-between border-b border-zinc-200 bg-white p-2 text-sm transition-all hover:bg-zinc-50">
      <p className="text-semibold">{name}</p>
      <div className="flex items-center gap-2">
        <p className="flex text-lg">
          {price} <Euro width={16}></Euro>
        </p>
        <button
          onClick={() => {
            removeFromCart(serviceId)
            updateTotals()
          }}
          className=" ml-4 bg-zinc-300 px-3 py-1 text-zinc-100 transition-all hover:bg-zinc-400"
        >
          <Trash2></Trash2>
        </button>
      </div>
    </div>
  )
}
