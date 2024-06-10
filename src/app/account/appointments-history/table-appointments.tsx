import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AppointmentHistoryForm } from "./appointments-history-form"
import { ReactNode, Suspense } from "react"
import { AppointmentHistoryFormSkeleton } from "./appointments-history-form-skeleton"
export interface Appointment {
  appointmentId: string
  date: string
  time: string
  services: string[]
  duration: number
  dateTime: Date
}
export interface TableAppointmentsProps {
  appointments: Appointment[]
  pastAppointments?: boolean
  children: ReactNode
}

export function TableAppointments({
  appointments,
  pastAppointments,
  children,
}: TableAppointmentsProps) {
  const futureDate = new Date()
  futureDate.setHours(futureDate.getHours() + 24)

  return (
    <Table
      className={`   border   shadow-lg ${pastAppointments ? "bg-zinc-100" : "bg-white"}`}
    >
      <TableHeader className="  ">
        <TableRow className=" hover:bg--zinc-900 bg-zinc-900 lg:text-base">
          <TableHead className="h-8 w-[150px] rounded-tl-sm text-sm font-semibold tracking-wider	 text-zinc-200">
            DATE
          </TableHead>

          <TableHead className=" h-8 w-[100px] text-sm  font-semibold tracking-wider	  text-zinc-200 ">
            HEURE
          </TableHead>
          <TableHead className=" h-8  w-full text-sm font-semibold  tracking-wider	 text-zinc-200  ">
            SERVICES
          </TableHead>
          <TableHead className=" h-8  text-right text-sm font-semibold tracking-wider	  text-zinc-200 ">
            DURATION
          </TableHead>

          {pastAppointments ? null : (
            <TableHead className="h-8 min-w-[210px] rounded-tr-sm text-right	 text-sm  font-semibold tracking-wider text-zinc-200">
              CHANGER LA DATE
            </TableHead>
          )}
        </TableRow>
      </TableHeader>

      <TableBody className=" lg:text-base ">
        {appointments.length === 0 ? (
          <TableRow>
            <TableCell
              className="h-full w-full  p-10 text-center text-zinc-900/60"
              colSpan={4}
            >
              Vous n'avez pas encore de rendez-vous
              {pastAppointments && " passés"}.
            </TableCell>
          </TableRow>
        ) : (
          appointments.map((appointment: Appointment) => {
            return (
              <Suspense
                fallback={<AppointmentHistoryFormSkeleton />}
                key={appointment.appointmentId}
              >
                <AppointmentHistoryForm
                  appointment={appointment}
                  key={appointment.appointmentId}
                >
                  {children}
                </AppointmentHistoryForm>
              </Suspense>
            )
          })
        )}
      </TableBody>
    </Table>
  )
}
