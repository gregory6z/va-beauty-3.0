import dayjs from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

import { ProgressIndicator } from "../components/ProgressIndicator"
import WeekTable from "./week-table"

dayjs.extend(isSameOrAfter)

dayjs.locale("fr")

export default function ChooseTime() {
  return (
    <div className="h-full min-h-screen w-full bg-neutral-200 pb-40 ">
      <div className="flex flex-col lg:mx-auto lg:max-w-[1216px] lg:px-[2rem] xl:max-w-[1256px] ">
        <div className=" sticky top-[4rem] mb-4 overflow-auto bg-neutral-200 lg:top-[5rem]  ">
          <ProgressIndicator currentStep={2}></ProgressIndicator>
        </div>

        <header className="  top-[7.5rem]  flex flex-col gap-1  bg-neutral-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
          <p className="lg:text-xl">Prendre un rendez-vous</p>
          <p className="">Sélection de l'heure et de la date:</p>
          <div className=" h-4 w-full bg-neutral-200"></div>
        </header>

        <div className="h-screen w-full bg-white">
          <WeekTable></WeekTable>
        </div>
        {/* <div className="mb-20 flex flex-col gap-14 lg:gap-4 "></div> */}

        {/* <div className="relative top-[7rem] col-span-2 hidden h-full max-h-[400px]  bg-black lg:sticky lg:block"></div> */}
      </div>
    </div>
  )
}
