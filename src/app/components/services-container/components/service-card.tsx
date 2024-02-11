import Image from "next/image"

export function ServiceCard() {
  return (
    <div className="  flex w-full flex-col border  border-gray-200 bg-white sm:grid-cols-2 lg:mx-0    lg:min-h-[24rem] lg:flex-row lg:gap-16 lg:p-8">
      <div className=" h-full w-full  sm:mx-auto sm:min-w-[400px] sm:max-w-[400px]   lg:mx-0   lg:min-w-[300px]   lg:max-w-[300px]  ">
        <Image
          src="/epilation.webp"
          alt={""}
          width={300}
          height={300}
          className="h-ful w-full"
        ></Image>
        <div className="flex h-[32px]  w-full items-center justify-end bg-black  lg:h-[48px] ">
          <p className="mx-4 text-left text-white lg:mx-4">Plus info</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col p-4 sm:mx-auto sm:max-w-[600px] lg:mx-0 lg:max-w-full lg:px-0 ">
        <div className="mb-2 mt-4  flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:justify-between">
          <h1 className="text-bold  text-2xl lg:text-3xl   ">
            Micropigmentacao
          </h1>
          <p>Duration 30 min</p>
        </div>

        <p className=" h-full text-gray-dark-primary/60 lg:mt-8 lg:w-[80%] lg:text-lg">
          Desperte sua beleza natural com a micropigmentação, um procedimento
          preciso e duradouro que realça suas características faciais de maneira
          sutil e elegante. Nossa equipe especializada utiliza técnicas
          avançadas para garantir resultados personalizados...
        </p>
        <div className="mt-auto flex flex-col items-center justify-between lg:flex-row">
          <p className="my-6 text-5xl">$ 350,00</p>
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
