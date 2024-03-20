import { Button } from "@/components/ui/button"
import Image from "next/image"

const forfaitCards = [
  {
    title: "Sourcils parfaits mensuelle",
    description: "1 seance chaque 15 jours",
    nextAppointment: "26/04/2025",
    status: "Active",
    // outras propriedades...
  },

  // outros objetos de cartão...
]

export function ForfaitCard() {
  return (
    <div className="mt-[20rem] flex h-full w-full flex-col border-t-[28px] border-zinc-300 border-t-zinc-900 bg-white p-6 pb-10 lg:mx-auto lg:mt-40 lg:max-w-[1080px] lg:p-10   ">
      <header className="lg:max-w-[600px] ">
        <h1 className="text-2xl font-semibold lg:text-4xl">Mes Forfaits</h1>
        <p className="mx-auto mt-4  text-zinc-900/60 ">
          Les forfaits sont définis automatiquement en fonction du choix du
          premier jour, mais peuvent être modifiés manuellement :
        </p>
      </header>
      {forfaitCards.map((card, index) => {
        return (
          <div className="" key={index}>
            <div className="flex items-center justify-between  pt-8  text-sm lg:pt-10">
              <p className="">
                Status : <span className="text-green-500">{card.status}</span>{" "}
              </p>
              <p className="text-red-500">Annuler forfait</p>
            </div>
            {/* <div className="">Problema no pagamento</div> */}
            <div className="mx-auto flex w-full flex-col gap-4  pt-6 lg:flex-row  lg:gap-10  ">
              <div className="mx-auto h-[200px] w-[200px] shrink bg-zinc-300 lg:mx-0">
                <Image
                  src={"/valesca.png"}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  alt={""}
                ></Image>
              </div>
              <div className="  w-full flex-1  text-center lg:text-left">
                <h1 className=" text-xl font-semibold  lg:text-3xl">
                  {card.title}
                </h1>
                <div className="mb-4 mt-2 space-y-1 lg:space-y-2">
                  <p className="text:lg text-sm    ">
                    Seances: <span>{card.description}</span>{" "}
                  </p>

                  <p className="text:lg text-sm   ">
                    Prochien rendez-vous: <span>{card.nextAppointment}</span>{" "}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="py-5 text-base">
                    Changer la date du prochien rendez-vous
                  </Button>
                  <Button className="py-5 text-base">
                    Changer la date mensuelle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
