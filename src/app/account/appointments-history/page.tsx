/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Appointment,
  FetchAppointmentsByClient,
} from "@/app/api/fetch-appointments"
import { TableAppointments } from "./table-appointments"

export default async function AppointmentsHistory() {
  const { futureAppointments, pastAppointments } =
    await FetchAppointmentsByClient()

  const validFutureAppointments = futureAppointments.filter(
    (appointment: Appointment) => appointment.services.length > 0,
  )

  console.log(futureAppointments)

  return (
    <div className="min-h-[calc(100vh-[])] w-full bg-zinc-200">
      <div className="mx-auto flex  flex-col py-[6rem] lg:max-w-[1080px]">
        <div className="space-y-6 ">
          <h1 className=" font-semibold lg:text-4xl">Mes futurs rendez-vous</h1>
          <p className="max-w-[900px] text-lg text-zinc-900/60">
            Liste de tous les rendez-vous à venir, il sera permis de changer
            l'heure et la date 48 heures avant le rendez-vous
          </p>

          <TableAppointments appointments={validFutureAppointments} />
        </div>

        <div className="space-y-6 lg:mt-[4rem]">
          <h1 className=" font-semibold lg:text-4xl">
            Mon historique de rendez-vous passés
          </h1>
          <p className="max-w-[900px] text-lg text-zinc-900/60">
            Voici une liste de tous vos rendez-vous passés.
          </p>

          <TableAppointments pastAppointments appointments={pastAppointments} />
        </div>
      </div>
    </div>
  )
}
