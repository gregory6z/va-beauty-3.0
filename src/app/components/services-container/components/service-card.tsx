import { ShoppingCart } from "lucide-react"

import Image from "next/image"

export function ServiceCard() {
  return (
    <div className="flex h-[24rem] w-full flex-col border border-gray-200 bg-white lg:flex-row lg:gap-16 lg:p-8">
      <div className="h-full w-[300px]  min-w-[300px]  ">
        <Image src="/epilation.webp" alt={""} width={300} height={300}></Image>
        <div className="flex h-[48px] w-full items-center justify-end  bg-black ">
          <p className="mx-4 text-left text-white">Plus info</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h1 className="text-bold text-3xl ">Micropigmentacao</h1>
          <p>Duration 30 min</p>
        </div>

        <p className=" mt-8  truncate whitespace-normal text-lg text-gray-dark-primary/60 lg:w-[80%]">
          Desperte sua beleza natural com a micropigmentação, um procedimento
          preciso e duradouro que realça suas características faciais de maneira
          sutil e elegante. Nossa equipe especializada utiliza técnicas
          avançadas para garantir resultados personalizados...
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-5xl">$ 350,00</p>
          <div className="flex gap-2">
            <button className="bg-black px-10 py-4 text-lg text-gray-light-primary">
              Reserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
