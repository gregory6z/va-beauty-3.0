import { CartItem } from "./CartItem"

export function Cart() {
  return (
    <div className="mt-4 flex  h-full w-full flex-col   bg-white  p-8">
      <header className="mb-2">
        <p className="text-lg font-bold">Panier</p>
      </header>
      <div className="flex flex-col overflow-auto">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="mt-auto">
        <button className="my-3 h-full w-full bg-black text-white">
          Avancar
        </button>
      </div>
    </div>
  )
}
