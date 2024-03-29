import Link from "next/link"
import { HeaderCard } from "./HeaderCard"
import { CalendarCheck, UserRoundCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeconnectionButtonAction } from "./DeconnectionButtonAction"
import { cookies } from "next/headers"

export function HeaderAccount() {
  const session = cookies().get("@VaBeauty:session")?.value

  const sessionObject = JSON.parse(session as string)

  const { name } = sessionObject

  return (
    <header className="  h-[15rem]  w-full bg-[#020202] px-[1.5rem] lg:h-[20rem]  ">
      <div className="relative mx-auto flex h-full w-full flex-col lg:max-w-[1080px]">
        <div className=" flex h-full  w-full   pt-12   lg:justify-between   ">
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-pretty text-xl  capitalize text-gray-100 sm:text-3xl   lg:text-4xl">
              Bonjour {name}
            </h1>
            <h3 className=" text-pretty  text-base text-gray-100   lg:text-2xl">
              Bienvenue dans votre espace client
            </h3>
          </div>
          <form action={DeconnectionButtonAction}>
            <Button
              variant="link"
              className=" hidden text-lg text-rose-400 lg:block"
            >
              Déconnexion
            </Button>
          </form>
        </div>

        <div className="-bottom-[125px] mx-auto mt-8 grid w-full grid-cols-1 gap-4 lg:absolute lg:-bottom-[125px] lg:mt-0 lg:grid-cols-2 lg:gap-8">
          <Link href="/account/appointments-history">
            <HeaderCard
              IconComponent={CalendarCheck}
              title="Mes rendez-vous"
              description="Mon historique de rendez-vous et mes rendez-vous à venir."
              buttonUnderline="Voir mes rendez-vous"
            ></HeaderCard>
          </Link>
          <Link href={"/account/edit-profil"}>
            <HeaderCard
              IconComponent={UserRoundCheck}
              title="Mes information"
              description="Pour mettre à jour mon identité, mon mot de passe et mes moyens de contact."
              buttonUnderline="Mettre à jour mes informations"
            ></HeaderCard>
          </Link>
        </div>
      </div>
    </header>
  )
}
