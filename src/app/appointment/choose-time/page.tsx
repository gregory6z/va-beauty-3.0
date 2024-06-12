import dayjs from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

import WeekTable, { Appointment } from "./week-table"
import { WeekAccordion } from "./week-accordeon"
import Loading from "./loading"

dayjs.extend(isSameOrAfter)

dayjs.locale("fr")

export function splitArray(array: Appointment[]) {
  const chunks = []
  for (let i = 0; i < array.length; i += 7) {
    chunks.push(array.slice(i, i + 7))
  }
  return chunks
}

export async function getData() {
  const res = await fetch(`${process.env.API_URL}/week-availability`, {
    cache: "no-store",
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function ChooseTime() {
  const data: Appointment[] = await getData()

  const ArrayOfAppointments = splitArray(data)

  return (
    <>
      <div className="h-full w-full bg-zinc-200 pb-20 lg:min-h-screen lg:pb-40 ">
        <div className="flex flex-col lg:mx-auto lg:max-w-[1080px] lg:px-[2rem] ">
          <header className=" mt-10 flex flex-col  gap-1 bg-zinc-200 px-[1.5rem]  lg:top-[9rem] lg:mt-16  lg:px-0">
            <p className=" mt-3 text-zinc-900/60 lg:mt-0">
              Sélection de l'heure et de la date:
            </p>
            <div className=" h-4 w-full bg-zinc-200"></div>
          </header>

          <div className="h-full w-[full] lg:min-h-screen">
            <WeekTable data={ArrayOfAppointments}></WeekTable>
            <WeekAccordion data={ArrayOfAppointments}></WeekAccordion>
          </div>
        </div>
      </div>
    </>
  )
}
