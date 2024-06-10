/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Appointment,
  FetchAppointmentsByClient,
} from "@/app/api/fetch-appointments"
import { TableAppointments } from "./table-appointments"
import { ChangeAppointmentDataDialog } from "../components/ChangeAppointmentDateDialog"
import { HistoricMobile } from "./historic-mobile"

export default async function AppointmentsHistor() {
  const { futureAppointments, pastAppointments } =
    await FetchAppointmentsByClient()

  const validFutureAppointments = futureAppointments.filter(
    (appointment: Appointment) => appointment.services.length > 0,
  )

  const validPastAppointments = pastAppointments.filter(
    (appointment: Appointment) => appointment.services.length > 0,
  )

  const futureDate = new Date()
  futureDate.setHours(futureDate.getHours() + 24)

  return (
    <div className=" w-full bg-zinc-200">
      <div className="mx-auto flex flex-col  py-10 pb-40  lg:max-w-[1080px] lg:px-0 lg:py-[6rem]">
        <div className="space-y-6  ">
          <h1 className=" px-[1.5rem]	 text-2xl font-semibold tracking-tight lg:px-0 lg:text-3xl">
            Mes futurs rendez-vous
          </h1>
          <p className="max-w-[900px] text-pretty px-[1.5rem] text-lg text-zinc-900/60 lg:px-0">
            Liste de tous les rendez-vous à venir, il sera permis de changer
            l'heure et la date 24 heures avant le rendez-vous
          </p>
          <div className="hidden lg:block">
            <TableAppointments appointments={validFutureAppointments}>
              <ChangeAppointmentDataDialog />
            </TableAppointments>
          </div>
          <div className="block lg:hidden">
            <HistoricMobile appointments={validFutureAppointments}>
              <ChangeAppointmentDataDialog />
            </HistoricMobile>
          </div>
        </div>

        <div className="mt-10 space-y-6 lg:mt-[4rem]">
          <h1 className="px-[1.5rem] text-2xl	 font-semibold tracking-tight lg:px-0 lg:text-3xl">
            Mon historique de rendez-vous passés
          </h1>
          <p className="max-w-[900px] px-[1.5rem] text-lg  text-zinc-900/60 lg:px-0">
            Voici une liste de tous vos rendez-vous passés.
          </p>

          <div className="hidden lg:block">
            <TableAppointments appointments={validPastAppointments}>
              <p className="text-center">--/--</p>
            </TableAppointments>
          </div>

          <div className="block lg:hidden">
            <HistoricMobile appointments={validPastAppointments}>
              <></>
            </HistoricMobile>
          </div>
        </div>
      </div>
    </div>
  )
}
