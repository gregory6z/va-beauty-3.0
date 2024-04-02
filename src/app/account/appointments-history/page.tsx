/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Appointment,
  FetchAppointmentsByClient,
} from "@/app/api/fetch-appointments"
import { TableAppointments } from "./table-appointments"
import { ChangeAppointmentDataDialog } from "../components/ChangeAppointmentDateDialog"

export default async function AppointmentsHistory() {
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
    <div className="min-h-[calc(100vh-[])] w-full bg-zinc-200">
      <div className="mx-auto flex  flex-col py-[6rem] lg:max-w-[1080px]">
        <div className="space-y-6 ">
          <h1 className=" font-semibold lg:text-3xl">Mes futurs rendez-vous</h1>
          <p className="max-w-[900px] text-balance text-lg text-zinc-900/60">
            Liste de tous les rendez-vous à venir, il sera permis de changer
            l'heure et la date 24 heures avant le rendez-vous
          </p>

          <TableAppointments appointments={validFutureAppointments}>
            <ChangeAppointmentDataDialog />
          </TableAppointments>
        </div>

        <div className="space-y-6 lg:mt-[4rem]">
          <h1 className=" font-semibold lg:text-3xl">
            Mon historique de rendez-vous passés
          </h1>
          <p className="max-w-[900px] text-lg text-zinc-900/60">
            Voici une liste de tous vos rendez-vous passés.
          </p>

          <TableAppointments appointments={validPastAppointments}>
            <p className="text-center">--/--</p>
          </TableAppointments>
        </div>
      </div>
    </div>
  )
}
