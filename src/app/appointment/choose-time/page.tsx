import dayjs from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

import WeekTable, { Appointment } from "./week-table"
import { WeekAccordion } from "./week-accordeon"

dayjs.extend(isSameOrAfter)

dayjs.locale("fr")

function splitArray(array: Appointment[]) {
  const chunks = []
  for (let i = 0; i < array.length; i += 7) {
    chunks.push(array.slice(i, i + 7))
  }
  return chunks
}

async function getData() {
  const res = await fetch("http://localhost:3333/week-availability", {
    cache: "no-store",
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function ChooseTime() {
  const data: Appointment[] = await getData()

  const newArray = splitArray(data)

  return (
    <div className="h-full w-full bg-zinc-200 pb-20 lg:min-h-screen lg:pb-40 ">
      <div className="flex flex-col lg:mx-auto lg:max-w-[1216px] lg:px-[2rem] xl:max-w-[1256px] ">
        <header className=" mt-16  flex flex-col gap-1  bg-zinc-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
          <p className="lg:text-xl">Prendre un rendez-vous</p>
          <p className="">Sélection de l'heure et de la date:</p>
          <div className=" h-4 w-full bg-zinc-200"></div>
        </header>

        <div className="h-full w-full lg:min-h-screen">
          <WeekTable data={newArray}></WeekTable>
          <WeekAccordion data={newArray}></WeekAccordion>
        </div>
        {/* <div className="mb-20 flex flex-col gap-14 lg:gap-4 "></div> */}

        {/* <div className="relative top-[7rem] col-span-2 hidden h-full max-h-[400px]  bg-black lg:sticky lg:block"></div> */}
      </div>
    </div>
  )
}
