import { Trash } from "lucide-react"

export function CartItem() {
  return (
    <div className="flex  h-full w-full flex-row items-center justify-between border-b border-neutral-200 bg-white p-2">
      <p>Sombrancelha</p>
      <div className="flex items-center gap-2">
        <p>52$</p>
        <button className="bg-neutral-400 px-2 py-1 text-white">
          <Trash></Trash>
        </button>
      </div>
    </div>
  )
}
