"use client"

import { ShoppingCart } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Cart } from "../appointment/choose-service/components/cart"
import { useServiceStore } from "../stores/Services"
import useStore from "../stores/use-store"

export function SheetCart() {
  const services = useStore(useServiceStore, (state) => state.services) || []

  return (
    <Sheet>
      <SheetTrigger asChild>
        {services.length > 0 && (
          <button className="fixed bottom-10 right-10 z-30 flex h-20  w-20 items-center justify-center rounded-full border-2 border-white bg-zinc-900 text-2xl text-white shadow-md lg:bottom-24 lg:right-32">
            <ShoppingCart className="h-12 w-12 text-white"></ShoppingCart>
            {services.length > 0 && (
              <span className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {services.length}
              </span>
            )}
          </button>
        )}
      </SheetTrigger>
      <SheetContent>
        <div className="h-full w-full pb-8">
          <Cart></Cart>
        </div>
      </SheetContent>
    </Sheet>
  )
}
